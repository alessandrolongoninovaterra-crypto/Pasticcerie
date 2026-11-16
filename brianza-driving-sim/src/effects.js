import * as THREE from 'three';

// Effetti di guida: segni degli pneumatici sull'asfalto e fumo dalle gomme quando l'auto slitta
// (derapata, freno a mano, sgommata in partenza, frenata a ruote bloccate).
// I segni sono un buffer circolare di tratti (InstancedMesh: una sola chiamata di disegno), il
// fumo un gruppo di sprite riusati. Qualunque veicolo puo' lasciarli (giocatore, polizia, fuggitivi).
const MAX_SKID = 2400, MAX_SMOKE = 70;

export class DriveFX {
  constructor(scene) {
    this.scene = scene;
    // segni: rettangolo largo 0,24 m, lungo 1 (scalato sulla lunghezza del tratto)
    const g = new THREE.PlaneGeometry(0.24, 1); g.rotateX(-Math.PI / 2);
    this.skidMat = new THREE.MeshBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.55, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -8 });
    this.skids = new THREE.InstancedMesh(g, this.skidMat, MAX_SKID);
    this.skids.frustumCulled = false; this.skids.count = 0; this.skids.renderOrder = 1;
    scene.add(this.skids);
    this.si = 0; this.nSkid = 0;
    this.last = new Map();     // ultima posizione di ogni ruota che sta lasciando il segno
    // fumo: sprite con una macchia morbida
    const cv = document.createElement('canvas'); cv.width = cv.height = 64;
    const c = cv.getContext('2d'), gr = c.createRadialGradient(32, 32, 2, 32, 32, 31);
    gr.addColorStop(0, 'rgba(235,235,235,0.9)'); gr.addColorStop(0.5, 'rgba(220,220,220,0.45)'); gr.addColorStop(1, 'rgba(210,210,210,0)');
    c.fillStyle = gr; c.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(cv);
    this.smoke = [];
    for (let i = 0; i < MAX_SMOKE; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0 }));
      s.visible = false; scene.add(s);
      this.smoke.push({ s, life: 0, max: 1, vx: 0, vy: 0, vz: 0, size: 1 });
    }
    this.pi = 0;
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._p = new THREE.Vector3(); this._s = new THREE.Vector3(); this._up = new THREE.Vector3(0, 1, 0);
  }

  // tratto di segno tra due punti (stessa ruota)
  segment(ax, ay, az, bx, by, bz, wet) {
    const L = Math.hypot(bx - ax, bz - az);
    if (L < 0.05 || L > 4) return;
    this._q.setFromAxisAngle(this._up, Math.atan2(bx - ax, bz - az));
    this._p.set((ax + bx) / 2, (ay + by) / 2 + 0.035, (az + bz) / 2);
    this._s.set(1, 1, L + 0.04);
    this._m.compose(this._p, this._q, this._s);
    this.skids.setMatrixAt(this.si, this._m);
    this.si = (this.si + 1) % MAX_SKID;
    this.nSkid = Math.min(MAX_SKID, this.nSkid + 1);
    this.skids.count = this.nSkid;
    this.skids.instanceMatrix.needsUpdate = true;
    void wet;
  }

  puff(x, y, z, vx, vz, strength) {
    const p = this.smoke[this.pi]; this.pi = (this.pi + 1) % MAX_SMOKE;
    p.life = 0; p.max = 1.2 + Math.random() * 0.9 * strength;
    p.vx = vx * 0.25 + (Math.random() - 0.5) * 0.8; p.vz = vz * 0.25 + (Math.random() - 0.5) * 0.8; p.vy = 0.5 + Math.random() * 0.6;
    p.size = 0.9 + strength * 0.8;
    p.s.position.set(x, y + 0.3, z); p.s.visible = true;
  }

  // un veicolo: id stabile, posizione, rotta, carreggiata posteriore e intensita' dello slittamento
  // (0..1); front: anche le ruote anteriori (frenata bloccata)
  wheels(id, v, intensity, front, ground) {
    const fx = Math.sin(v.h), fz = Math.cos(v.h), lx = Math.cos(v.h), lz = -Math.sin(v.h);
    const half = (v.spec.W || 1.8) * 0.42, back = v.b || 1.3, fwd = v.a || 1.2;
    const pts = [[-back, half], [-back, -half]];
    if (front) pts.push([fwd, half], [fwd, -half]);
    for (let i = 0; i < 4; i++) {
      const key = id + ':' + i;
      if (i >= pts.length || intensity <= 0) { this.last.delete(key); continue; }
      const [o, s] = pts[i];
      const x = v.x + fx * o + lx * s, z = v.z + fz * o + lz * s, y = ground;
      const prev = this.last.get(key);
      if (prev) this.segment(prev[0], prev[1], prev[2], x, y, z);
      this.last.set(key, [x, y, z]);
      if (Math.random() < intensity * 0.32) {
        const vx = fx * v.u + lx * (v.v || 0), vz = fz * v.u + lz * (v.v || 0);
        this.puff(x, y, z, vx, vz, intensity);
      }
    }
  }

  // slittamento del veicolo del giocatore (o di un'auto con la stessa fisica)
  fromVehicle(id, v, wet = 0) {
    if (v.isPlane || v.airborne || !v.surface) { this.wheels(id, v, 0, false, 0); return 0; }
    const spd = Math.abs(v.u);
    const lateral = spd > 4 ? Math.max(0, (v.slip || 0) - 0.1) * 4 : 0;          // derapata
    const spin = spd < 20 ? (v.wheelSpin || 0) * (v.throttle > 0.5 ? 1 : 0) : 0;  // sgommata
    const hand = v.handbrake > 0 && spd > 3 ? 0.7 : 0;
    const lock = v.brake > 0.85 && spd > 8 && Math.abs(v.ax || 0) > (v.mu || 1) * 8.5 ? 0.6 : 0;   // frenata al limite
    let I = Math.min(1, Math.max(lateral, spin, hand, lock));
    if (!v.surface.road && !paved(v)) I *= 0.3;     // sull'erba niente segni neri, poco fumo
    I *= 1 - wet * 0.6;
    this.wheels(id, v, I > 0.08 ? I : 0, lock > 0, v.surface.h);
    return I;
  }

  update(dt) {
    for (const p of this.smoke) {
      if (!p.s.visible) continue;
      p.life += dt;
      if (p.life >= p.max) { p.s.visible = false; continue; }
      const t = p.life / p.max;
      p.s.position.x += p.vx * dt; p.s.position.y += p.vy * dt; p.s.position.z += p.vz * dt;
      p.vx *= 1 - dt * 0.8; p.vz *= 1 - dt * 0.8;
      const sz = p.size * (1 + t * 2.4);
      p.s.scale.set(sz, sz, 1);
      p.s.material.opacity = 0.38 * (1 - t) * Math.min(1, p.life * 6);
    }
  }

  clear() { this.nSkid = 0; this.skids.count = 0; this.last.clear(); for (const p of this.smoke) p.s.visible = false; }
}

function paved(v) { return v.mu >= (v.spec.grip || 1) * 0.9; }
