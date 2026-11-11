import * as THREE from 'three';

// Aereo da turismo monomotore ad ala alta (modello originale, nessun costruttore reale).
// Fisica di volo semplificata ma credibile: spinta dell'elica, resistenza, portanza con
// stallo, virate coordinate (rateo = g·tan(inclinazione)/V), rullaggio a terra con
// ruotino anteriore sterzante, decollo, atterraggio e schianto.
// Interfaccia comune con Vehicle: x, y, z, h, u, v, pitch, roll, place(), update().
const G = 9.81, RHO = 1.2;

export const PLANE_SPEC = {
  id: 'plane', kind: 'plane', name: 'Aereo da turismo', desc: 'Monomotore biposto ad ala alta: decolla, sorvola la Brianza e atterra su un prato o una strada dritta.',
  color: '#f4f4f0', stripe: '#c0392b',
  L: 7.3, W: 10.2, H: 2.6, wb: 1.6, mass: 760, kw: 85, rpmMax: 2700,
  thrust: 3600, cdS: 0.9, kInd: 310000, wingS: 15, vStall: 20, vRot: 24, vNe: 75,
};

export class Plane {
  constructor(spec, world) {
    this.spec = spec; this.world = world; this.isPlane = true;
    this.x = 0; this.y = 0; this.z = 0; this.h = 0;
    this.u = 0; this.v = 0; this.w = 0; this.vy = 0;
    this.pitch = 0; this.roll = 0; this.dynPitch = 0; this.dynRoll = 0;
    this.bank = 0;            // + = inclinato a sinistra (virata a sinistra)
    this.lever = 0;           // manetta (0..1)
    this.throttle = 0; this.brake = 0; this.steer = 0; this.gear = 1;
    this.rpm = 0; this.slip = 0; this.impact = 0; this.wheelSpinAngle = 0;
    this.onGround = true; this.airborne = false; this.crashed = 0; this.agl = 0;
    this.surface = null; this.stall = false;
  }

  ground(x, z, yRef = 1e9) { return this.world.roads.surfaceAt(x, z, yRef).h; }

  // a terra, fermo, con il muso nella direzione h
  place(x, z, h) {
    this.x = x; this.z = z; this.h = h;
    this.u = this.v = this.w = this.vy = 0; this.bank = 0; this.pitch = 0; this.roll = 0;
    this.lever = 0; this.onGround = true; this.airborne = false; this.crashed = 0;
    this.surface = this.world.roads.surfaceAt(x, z, 1e9);
    this.y = this.surface.h;
  }

  // in volo livellato sopra il punto attuale
  launch(alt = 250, speed = 48) {
    this.y = this.ground(this.x, this.z) + alt;
    this.u = speed; this.vy = 0; this.pitch = 0.03; this.bank = 0; this.lever = 0.65;
    this.onGround = false; this.airborne = true; this.crashed = 0; this.surface = null;
  }

  update(dt, inp) {
    const N = 3;
    for (let i = 0; i < N; i++) this.step(dt / N, inp);
    this.roll = -this.bank;
    this.rpm = 700 + this.lever * 2000 + Math.min(300, this.u * 4);
    this.throttle = this.lever;
    this.wheelSpinAngle += (this.onGround ? this.u / 0.3 : 0) * dt;
    this.propAngle = (this.propAngle || 0) + this.rpm / 60 * Math.PI * 2 * dt;
  }

  step(dt, inp) {
    const s = this.spec, W = this.world;
    if (this.crashed > 0) { this.crashed -= dt; this.u = 0; if (this.crashed <= 0) { this.launch(); this.relaunched = true; } return; }
    // manetta: W/S (o grilletti) la spostano, resta dove la lasci
    this.lever = Math.max(0, Math.min(1, this.lever + (inp.throttle - inp.brake) * dt * 0.6));
    const T = s.thrust * this.lever * Math.max(0, 1 - this.u / (s.vNe * 1.05));
    const D = 0.5 * RHO * s.cdS * this.u * this.u + (this.onGround ? 0 : s.kInd / Math.max(100, this.u * this.u));   // + resistenza indotta
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    const gy = this.ground(this.x, this.z, this.y + 2);
    this.agl = this.y - gy;

    if (this.onGround) {
      // --- rullaggio: ruotino sterzante, freni con lo spazio, cabrata per staccarsi
      this.brake = inp.handbrake ? 1 : 0;
      const roll = 0.03 * s.mass * G * Math.sign(this.u);
      const brk = (inp.handbrake ? 0.55 : 0) * s.mass * G * Math.sign(this.u);
      this.u += (T - D - roll - brk) / s.mass * dt;
      if (Math.abs(this.u) < 0.08 && this.lever < 0.05) this.u = 0;
      if (this.u < 0) this.u = 0;
      this.steer += ((inp.steer * 0.5 * Math.min(1, 12 / Math.max(1, this.u))) - this.steer) * Math.min(1, dt * 6);
      this.h += this.u * Math.tan(this.steer) / s.wb * dt * Math.max(0.15, 1 - this.u / s.vRot);
      // con la cabrata sopra la velocita' di rotazione il muso si alza e l'aereo si stacca
      const want = this.u > s.vRot * 0.85 ? Math.max(0, inp.pitch) * 0.2 : 0;
      this.pitch += (want - this.pitch) * Math.min(1, dt * 2);
      this.bank *= Math.exp(-dt * 8);
      this.x += fx * this.u * dt; this.z += fz * this.u * dt;
      this.collideGround();
      this.surface = W.roads.surfaceAt(this.x, this.z, this.y + 1);
      this.y = this.surface.h; this.vy = 0;
      const lift = 0.5 * RHO * s.wingS * this.u * this.u * (0.35 + this.pitch * 5) / (s.mass * G);
      if (this.pitch > 0.08 && lift > 1) { this.onGround = false; this.airborne = true; this.surface = null; this.vy = 1; }
      return;
    }

    // --- in volo
    const lf = Math.min(1, (this.u / s.vStall) ** 2);       // portanza disponibile rispetto al peso
    this.stall = lf < 0.98;
    // alettoni: inclinazione con rateo limitato; senza comandi l'ala torna piano orizzontale
    const pRate = 1.3 * Math.min(1, this.u / 25);
    if (Math.abs(inp.steer) > 0.05) this.bank += inp.steer * pRate * dt;
    else this.bank *= Math.exp(-dt * 0.9);
    this.bank = Math.max(-1.05, Math.min(1.05, this.bank));
    // equilibratore: cabra/picchia; in virata stretta serve un po' di cabrata per non perdere quota
    const qRate = 0.65 * Math.min(1, this.u / 30);
    this.pitch += inp.pitch * qRate * dt;
    if (Math.abs(inp.pitch) < 0.05) {
      // trim automatico: volo livellato, ma senza scendere sotto ~1,35 volte la velocita' di stallo
      // (a motore ridotto l'aereo plana invece di perdere velocita' fino allo stallo)
      const trim = Math.max(-0.16, Math.min(0.04, 0.02 + 0.5 * (this.u - 1.35 * s.vStall) / s.vStall));
      this.pitch += (trim - this.pitch) * Math.min(1, dt * 0.5);
    }
    if (this.stall) this.pitch -= (1 - lf) * 0.9 * dt;                                            // in stallo il muso cade
    this.pitch = Math.max(-0.75, Math.min(0.55, this.pitch));
    // virata coordinata
    this.w = G * Math.tan(this.bank) / Math.max(15, this.u) * lf;
    this.h += this.w * dt;
    // velocita' lungo la traiettoria: spinta - resistenza - componente del peso
    const gamma = Math.atan2(this.vy, Math.max(1, this.u));
    this.u += ((T - D) / s.mass - G * Math.sin(gamma)) * dt;
    this.u = Math.max(5, this.u);
    // componente verticale: segue l'assetto se c'e' portanza, altrimenti cade
    const vyWanted = this.u * Math.sin(this.pitch) * lf * Math.cos(this.bank) - (1 - lf) * 9 - (1 - Math.cos(this.bank)) * 3.5;
    this.vy += (vyWanted - this.vy) * Math.min(1, dt * 1.6);
    this.x += fx * this.u * dt; this.z += fz * this.u * dt;
    this.y += this.vy * dt;
    // tetto e confini dell'area
    const top = gy + 1800;
    if (this.y > top) { this.y = top; this.vy = Math.min(0, this.vy); }
    const T0 = W.terrain;
    if (!T0.inside(this.x, this.z)) {
      this.x = Math.max(T0.x0 + 50, Math.min(T0.x0 + (T0.nx - 1) * T0.step - 50, this.x));
      this.z = Math.max(T0.z0 + 50, Math.min(T0.z0 + (T0.nz - 1) * T0.step - 50, this.z));
      this.h += Math.PI * 0.75 * dt * 4; this.outside = 1;
    }
    // urto con gli edifici: le pareti contano fino a una ventina di metri dal suolo
    // edifici, alberi e tralicci con la loro altezza (muri, recinzioni e auto si sorvolano)
    if (this.agl < 60) {
      const top = W.collision.topAt(this.x, this.z, 1.5);
      if (top > this.y + 0.3) { this.crash('Schianto contro un ostacolo!'); return; }
    }
    // contatto con il suolo: atterraggio o schianto
    const g2 = this.ground(this.x, this.z, this.y + 1);
    if (this.y <= g2) {
      const hard = this.vy < -4.2 || Math.abs(this.bank) > 0.35 || this.pitch < -0.18 || this.u > 50;
      this.y = g2;
      if (hard) { this.crash('Atterraggio troppo duro!'); return; }
      this.onGround = true; this.airborne = false; this.impact = Math.min(1, -this.vy / 6); this.vy = 0; this.bank = 0;
      this.touchdown = true;
    }
  }

  collideGround() {
    const W = this.world;
    const r = 1.6;
    let hit = W.collision.resolveCircle(this.x, this.z, r);
    const car = W.traffic ? W.traffic.resolveCircle(this.x, this.z, r) : null;
    if (car && (!hit || car.depth > hit.depth)) hit = car;
    if (!hit) return;
    this.x += hit.nx * hit.depth; this.z += hit.nz * hit.depth;
    if (this.u > 1) this.impact = Math.max(this.impact, Math.min(1, this.u / 10));
    this.u *= 0.3;
  }

  crash(msg) {
    this.crashed = 2.2; this.crashMsg = msg; this.impact = 1;
    this.vy = 0; this.lever = 0; this.u = 0; this.y = this.ground(this.x, this.z, this.y + 1);
  }
}

// ------------------------------------------------------------------ modello 3D
// convenzione come le auto: avanti = +Z locale, sinistra = +X, origine al suolo sotto le ruote
export function buildPlaneModel(spec, opts = {}) {
  const root = new THREE.Group();
  const ext = new THREE.Group();
  const paint = new THREE.MeshPhongMaterial({ color: opts.color || spec.color, shininess: 70, specular: 0x555555 });
  const stripe = new THREE.MeshPhongMaterial({ color: spec.stripe, shininess: 50 });
  const dark = new THREE.MeshLambertMaterial({ color: 0x1d2024 });
  const glass = new THREE.MeshPhongMaterial({ color: 0x223040, shininess: 120, specular: 0x99aabb, transparent: true, opacity: 0.75 });
  const gearY = 0.95;                              // altezza della fusoliera sul suolo
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
    m.castShadow = true; m.receiveShadow = true; ext.add(m); return m;
  };
  // fusoliera: sezioni che si restringono verso la coda
  const sections = [[2.35, 0.55, 0.6], [1.6, 1.05, 1.15], [0.2, 1.1, 1.25], [-1.2, 0.95, 1.0], [-3.0, 0.45, 0.55], [-4.6, 0.22, 0.38]];
  const prof = [];
  for (const [zz, hw, hh] of sections) prof.push({ z: zz, hw, hh });
  const pos = [], idx = [];
  const ring = (p) => [[p.hw, -p.hh * 0.45], [p.hw * 0.92, p.hh * 0.55], [-p.hw * 0.92, p.hh * 0.55], [-p.hw, -p.hh * 0.45], [-p.hw * 0.6, -p.hh * 0.55], [p.hw * 0.6, -p.hh * 0.55]];
  prof.forEach((p) => { for (const [x, y] of ring(p)) pos.push(x * 0.5, gearY + 0.55 + y * 0.5 + (p.z < -1 ? (-1 - p.z) * 0.12 : 0), p.z); });
  const n = 6;
  for (let i = 0; i < prof.length - 1; i++) for (let k = 0; k < n; k++) {
    const a = i * n + k, b = i * n + (k + 1) % n, c = a + n, d = b + n;
    idx.push(a, c, b, b, c, d);
  }
  // tappi
  for (let k = 1; k < n - 1; k++) { idx.push(0, k, k + 1); const o = (prof.length - 1) * n; idx.push(o, o + k + 1, o + k); }
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); fg.setIndex(idx); fg.computeVertexNormals();
  const fus = new THREE.Mesh(fg, paint); fus.castShadow = true; ext.add(fus);
  const hideInside = [fus];
  // fascia colorata sui fianchi
  for (const sx of [1, -1]) hideInside.push(add(new THREE.BoxGeometry(0.02, 0.16, 5.6), stripe, sx * 0.53, gearY + 0.45, -0.9, 0, sx * 0.055, 0));
  // cappottatura motore, ogiva ed elica
  hideInside.push(add(new THREE.CylinderGeometry(0.2, 0.3, 0.35, 12), paint, 0, gearY + 0.52, 2.5, Math.PI / 2));
  hideInside.push(add(new THREE.ConeGeometry(0.11, 0.22, 10), dark, 0, gearY + 0.52, 2.78, Math.PI / 2));
  const prop = new THREE.Group(); prop.position.set(0, gearY + 0.52, 2.72); ext.add(prop);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.14, 0.04), dark); blade.castShadow = true; prop.add(blade);
  hideInside.push(blade);   // dall'abitacolo l'elica in moto e' solo un disco
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.93, 24), new THREE.MeshBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.12, side: THREE.DoubleSide }));
  prop.add(disc);
  // finestrini e parabrezza
  hideInside.push(add(new THREE.BoxGeometry(1.02, 0.42, 0.04), glass, 0, gearY + 1.0, 1.5, -0.55));
  for (const sx of [1, -1]) hideInside.push(add(new THREE.BoxGeometry(0.03, 0.38, 1.3), glass, sx * 0.535, gearY + 0.88, 0.55));
  // ala alta con estremita' colorate e montanti
  add(new THREE.BoxGeometry(spec.W, 0.13, 1.45), paint, 0, gearY + 1.18, 0.45);
  for (const sx of [1, -1]) {
    add(new THREE.BoxGeometry(0.5, 0.14, 1.46), stripe, sx * (spec.W / 2 - 0.25), gearY + 1.18, 0.45);
    const strut = add(new THREE.CylinderGeometry(0.035, 0.035, 2.25, 6), dark, sx * 1.35, gearY + 0.7, 0.55, 0, 0, sx * 1.02);
    strut.castShadow = true;
  }
  // impennaggi
  add(new THREE.BoxGeometry(3.4, 0.08, 0.85), paint, 0, gearY + 0.8, -4.25);
  const fin = new THREE.Shape(); fin.moveTo(0, 0); fin.lineTo(-1.1, 0); fin.lineTo(-1.25, 1.35); fin.lineTo(-0.55, 1.35); fin.lineTo(0, 0);
  const finG = new THREE.ExtrudeGeometry(fin, { depth: 0.07, bevelEnabled: false });
  const finM = add(finG, stripe, 0.035, gearY + 0.82, -3.55, 0, -Math.PI / 2, 0);
  finM.castShadow = true;
  // carrello triciclo
  const wheelGeo = new THREE.CylinderGeometry(0.21, 0.21, 0.14, 14); wheelGeo.rotateZ(Math.PI / 2);
  const wheels = [];
  for (const [x, z, front] of [[0, 1.95, true], [1.0, -0.1, false], [-1.0, -0.1, false]]) {
    const piv = new THREE.Group(); piv.position.set(x, 0.21, z); piv.rotation.order = 'YXZ'; ext.add(piv);
    const wm = new THREE.Mesh(wheelGeo, dark); wm.castShadow = true; piv.add(wm);
    add(new THREE.BoxGeometry(0.05, gearY + 0.3, 0.06), dark, x * 0.75, gearY * 0.5 + 0.1, z, 0, 0, -x * 0.35);
    wheels.push({ pivot: piv, front });
  }
  root.add(ext);
  // abitacolo: cruscotto con strumenti, cloche
  const interior = new THREE.Group();
  // occhio sotto il bordo d'attacco dell'ala: davanti si vedono parabrezza, muso ed elica
  const eye = new THREE.Vector3(0.24, gearY + 0.9, 1.0);
  const panel = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.26, 0.12), new THREE.MeshLambertMaterial({ color: 0x2b2d30 }));
  panel.position.set(0, gearY + 0.52, 1.72); interior.add(panel);
  // cofano motore visto dal posto di pilotaggio
  const hw0 = 0.5, hw1 = 0.26, y0 = gearY + 0.66, y1 = gearY + 0.76, z0 = 1.78, z1 = 2.62;
  const hg = new THREE.BufferGeometry();
  hg.setAttribute('position', new THREE.Float32BufferAttribute([-hw0, y0, z0, hw0, y0, z0, hw1, y1, z1, -hw0, y0, z0, hw1, y1, z1, -hw1, y1, z1], 3));
  hg.computeVertexNormals();
  interior.add(new THREE.Mesh(hg, new THREE.MeshPhongMaterial({ color: opts.color || spec.color, shininess: 60, side: THREE.DoubleSide })));
  const dashCanvas = document.createElement('canvas'); dashCanvas.width = 256; dashCanvas.height = 96;
  const dashTex = new THREE.CanvasTexture(dashCanvas); dashTex.colorSpace = THREE.SRGBColorSpace;
  const cluster = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.135), new THREE.MeshBasicMaterial({ map: dashTex, toneMapped: false }));
  cluster.position.set(0.2, gearY + 0.58, 1.655); interior.add(cluster);
  cluster.lookAt(eye);
  const yoke = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.045, 0.04), new THREE.MeshLambertMaterial({ color: 0x151515 }));
  yoke.position.set(0.24, gearY + 0.4, 1.4); interior.add(yoke);
  // dall'abitacolo si vedono ala, montanti e muso: restano visibili anche in visuale interna
  interior.visible = false;
  root.add(interior);
  root.userData.eye = eye.clone();
  return { root, ext, wheels, prop, headlight: null, tailGlow: null, interior, steeringWheel: yoke, dashCanvas, dashTex, exterior: hideInside, isPlane: true };
}

export function drawPlaneCluster(canvas, tex, kmh, agl, vs, lever, stall) {
  const c = canvas.getContext('2d');
  c.fillStyle = '#07090b'; c.fillRect(0, 0, 256, 96);
  c.fillStyle = '#0d1a22'; c.fillRect(4, 4, 248, 88);
  c.textAlign = 'center';
  c.fillStyle = stall ? '#ff5a4a' : '#9fe3ff'; c.font = 'bold 34px Arial'; c.fillText(String(Math.round(kmh)), 52, 50);
  c.font = '12px Arial'; c.fillStyle = '#6fa7c0'; c.fillText('km/h', 52, 70);
  c.fillStyle = '#ffd36b'; c.font = 'bold 30px Arial'; c.fillText(String(Math.round(agl)), 140, 50);
  c.font = '12px Arial'; c.fillStyle = '#6fa7c0'; c.fillText('m dal suolo', 140, 70);
  c.fillStyle = vs >= 0 ? '#7dff9a' : '#ffb36b'; c.font = 'bold 20px Arial'; c.fillText((vs >= 0 ? '+' : '') + vs.toFixed(1), 214, 46);
  c.font = '12px Arial'; c.fillStyle = '#6fa7c0'; c.fillText('m/s', 214, 64);
  c.fillStyle = '#1e2a30'; c.fillRect(176, 76, 70, 8); c.fillStyle = '#59c9ff'; c.fillRect(176, 76, 70 * lever, 8);
  if (stall) { c.fillStyle = '#ff5a4a'; c.font = 'bold 13px Arial'; c.fillText('STALLO', 52, 88); }
  tex.needsUpdate = true;
}
