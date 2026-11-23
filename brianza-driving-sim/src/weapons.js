// Armi a piedi, in terza persona sopra la spalla (stile GTA). Il "sistema di sparo" e' adattato da
// Riposte: Frontline (https://github.com/BenDBSS/Riposte-Frontline-Source, codice MIT, Copyright (c)
// BenDBSS: src/06i-armes.js catalogo, src/07c-controller.js ctlWeapon/ctlShoot, src/07ca-recul.js
// recoilShot/recoilTick):
//   - colpo istantaneo lungo la mira (hitscan) con dispersione a cono: dalla anca a mira stretta
//     (spread[0] -> spread[1] col quadrato della mira), piu' larga muovendosi, in aria e a raffica
//     tenuta ("bloom");
//   - danno che cala con la distanza (dmg[vicino, lontano] tra range[inizio, fine]), testa x head;
//   - rinculo a schema per arma (fucile: sale e serpeggia; mitraglietta: saltella; il resto a caso),
//     primo colpo piu' dolce e pieno rinculo in 5 colpi, ridotto mirando, aumentato correndo e in aria;
//   - ritorno della mira: 0,1 s dopo l'ultimo colpo la mira scende da sola della parte di rinculo
//     non gia' ripresa con il mouse (70% fucili, 85-90% pistola e pompa): raffiche brevi tornano sul
//     bersaglio, una raffica tenuta sale;
//   - cadenza (colpi al minuto), automatica o semiautomatica, caricatore e riserva, ricarica con il
//     caricatore che entra al 60% del gesto (piu' lunga a caricatore vuoto), pompa cartuccia per
//     cartuccia (interrompibile sparando), ricarica automatica a caricatore vuoto.
// Qui: pedoni, auto del traffico, parcheggiate e volanti, edifici, muri, alberi e terreno come
// bersagli; scie, lampo alla bocca, scintille, polvere, fori sui muri; suoni sintetizzati; mirino
// che si allarga con la dispersione; la polizia reagisce agli spari.
import * as THREE from 'three';

// catalogo (valori di Riposte: M9, MP5, M4A1, M1014), nomi generici
export const WEAPONS = [
  { id: 'pistol', name: 'Pistola 9 mm', cat: 'pistol', auto: false, rpm: 480, dmg: [38, 20], range: [8, 26], head: 1.5, mag: 15, reserve: 60,
    reload: 1.45, reloadEmpty: 1.75, spread: [0.026, 0.004], moveSpread: 0.01, recoil: { v: 0.019, h: 0.008, kick: 0.05 }, pattern: 'rand', adsFov: 0.85, sound: 'pistol' },
  { id: 'smg', name: 'Mitraglietta', cat: 'smg', auto: true, rpm: 900, dmg: [28, 15], range: [10, 28], head: 1.5, mag: 30, reserve: 180,
    reload: 1.9, reloadEmpty: 2.3, spread: [0.024, 0.0025], moveSpread: 0.012, recoil: { v: 0.0078, h: 0.0062, kick: 0.02 }, pattern: 'smg', adsFov: 0.8, sound: 'smg' },
  { id: 'rifle', name: "Fucile d'assalto", cat: 'ar', auto: true, rpm: 780, dmg: [32, 22], range: [18, 50], head: 1.6, mag: 30, reserve: 150,
    reload: 2.1, reloadEmpty: 2.6, spread: [0.032, 0.0012], moveSpread: 0.03, recoil: { v: 0.0105, h: 0.0045, kick: 0.028 }, pattern: 'climb', adsFov: 0.72, sound: 'rifle' },
  { id: 'shotgun', name: 'Fucile a pompa', cat: 'shotgun', auto: false, rpm: 240, pellets: 8, dmg: [22, 6], range: [6, 20], head: 1.2, mag: 8, reserve: 32,
    tube: true, shellTime: 0.46, pump: true, spread: [0.075, 0.058], moveSpread: 0.01, recoil: { v: 0.046, h: 0.016, kick: 0.07 }, pattern: 'rand', adsFov: 0.82, sound: 'shotgun' },
];
const RECOIL = {
  cat: { ar: { mul: 1.55, back: 0.7 }, smg: { mul: 1.45, back: 0.7 }, pistol: { mul: 1.3, back: 0.85 }, shotgun: { mul: 1.15, back: 0.9 } },
  ads: 0.66, move: 1.2, air: 1.5, first: 0.85, peak: 1.25, ramp: 5, delay: 0.1, rate: 7,
};
const MOVE_SPEED = 4.5;
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const rand = (a, b) => a + Math.random() * (b - a);
const BASE_FOV = 62;

// --- modelli delle armi (forme semplici: si vedono in mano a due metri)
function gunModel(id) {
  const g = new THREE.Group();
  const dark = new THREE.MeshStandardMaterial({ color: 0x1d1f22, roughness: 0.45, metalness: 0.6 });
  const grip = new THREE.MeshStandardMaterial({ color: 0x2a2724, roughness: 0.8 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x5b3a22, roughness: 0.7 });
  const box = (m, w, h, d, x, y, z, rx = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); o.rotation.x = rx; g.add(o); return o; };
  const cyl = (m, r, l, x, y, z) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(r, r, l, 10), m); o.rotation.x = Math.PI / 2; o.position.set(x, y, z); g.add(o); return o; };
  // l'arma guarda verso +Z, la bocca e' in muzzle
  if (id === 'pistol') { box(dark, 0.034, 0.04, 0.2, 0, 0.02, 0.05); box(grip, 0.03, 0.11, 0.045, 0, -0.04, -0.03, 0.25); g.userData.muzzle = new THREE.Vector3(0, 0.025, 0.16); }
  else if (id === 'smg') { box(dark, 0.05, 0.07, 0.34, 0, 0.02, 0.06); cyl(dark, 0.013, 0.12, 0, 0.03, 0.28); box(dark, 0.03, 0.14, 0.04, 0, -0.07, 0.08); box(grip, 0.03, 0.1, 0.04, 0, -0.05, -0.05, 0.3); box(dark, 0.03, 0.04, 0.16, 0, 0.0, -0.16); g.userData.muzzle = new THREE.Vector3(0, 0.03, 0.34); }
  else if (id === 'rifle') { box(dark, 0.05, 0.08, 0.5, 0, 0.02, 0.08); cyl(dark, 0.012, 0.25, 0, 0.035, 0.45); box(dark, 0.028, 0.17, 0.06, 0, -0.08, 0.1, -0.15); box(grip, 0.03, 0.1, 0.04, 0, -0.06, -0.08, 0.3); box(dark, 0.045, 0.09, 0.22, 0, -0.0, -0.27); box(dark, 0.02, 0.04, 0.12, 0, 0.08, 0.05); g.userData.muzzle = new THREE.Vector3(0, 0.035, 0.58); }
  else { box(dark, 0.05, 0.07, 0.36, 0, 0.02, 0.05); cyl(dark, 0.017, 0.42, 0, 0.04, 0.38); cyl(wood, 0.024, 0.2, 0, 0.0, 0.33); box(wood, 0.045, 0.1, 0.28, 0, -0.03, -0.25, 0.12); g.userData.muzzle = new THREE.Vector3(0, 0.04, 0.6); }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}
function flashTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  // su fondo nero opaco: con la somma additiva il nero non aggiunge nulla (non dipende dall'alfa)
  const x = c.getContext('2d'), gr = x.createRadialGradient(32, 32, 0, 32, 32, 32);
  x.fillStyle = '#000'; x.fillRect(0, 0, 64, 64);
  gr.addColorStop(0, 'rgb(255,250,220)'); gr.addColorStop(0.25, 'rgb(230,170,70)'); gr.addColorStop(0.6, 'rgb(90,40,5)'); gr.addColorStop(1, 'rgb(0,0,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
  x.globalCompositeOperation = 'lighter'; x.strokeStyle = 'rgba(255,220,140,0.8)'; x.lineWidth = 3;
  for (let k = 0; k < 6; k++) { const a = k * Math.PI / 3 + 0.3; x.beginPath(); x.moveTo(32, 32); x.lineTo(32 + Math.cos(a) * 31, 32 + Math.sin(a) * 31); x.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function holeTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 32;
  const x = c.getContext('2d'), gr = x.createRadialGradient(16, 16, 0, 16, 16, 16);
  gr.addColorStop(0, 'rgba(10,10,10,0.95)'); gr.addColorStop(0.35, 'rgba(30,28,26,0.8)'); gr.addColorStop(0.6, 'rgba(60,55,50,0.35)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 32, 32);
  return new THREE.CanvasTexture(c);
}

export class Weapons {
  constructor(G) {
    this.G = G;
    this.inv = WEAPONS.map((d) => ({ def: d, mag: d.mag, reserve: d.reserve }));
    this.cur = 0; this.drawn = false;
    this.aimYaw = 0; this.aimPitch = 0; this.ads = 0; this.adsWant = false; this.fireHeld = false; this.firePressed = false;
    this.fireCd = 0; this.reload = null; this.autoReload = 0; this.bloom = 0; this.burstN = 0; this.lastShotAt = -9; this.recPend = 0; this.recArm = false;
    this.kick = 0; this.fovK = 0; this.flashT = 0; this.hitT = 0; this.pumpT = 0; this.drawT = 0;
    this.camOff = new THREE.Vector3(); this.camInit = true;
    const scene = G.scene;
    // arma in mano
    this.models = WEAPONS.map((d) => { const m = gunModel(d.id); m.visible = false; scene.add(m); return m; });
    // lampo alla bocca (sprite additivo: niente luci vere, il numero di luci della scena non cambia)
    this.flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: flashTexture(), blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor, depthWrite: false, transparent: true, toneMapped: false }));
    this.flash.visible = false; this.flash.renderOrder = 5; scene.add(this.flash);
    // scie dei proiettili
    const NT = 48;
    this.tr = { n: NT, i: 0, life: new Float32Array(NT), pos: new Float32Array(NT * 6), col: new Float32Array(NT * 6) };
    const tg = new THREE.BufferGeometry();
    tg.setAttribute('position', new THREE.BufferAttribute(this.tr.pos, 3).setUsage(THREE.DynamicDrawUsage));
    tg.setAttribute('color', new THREE.BufferAttribute(this.tr.col, 3).setUsage(THREE.DynamicDrawUsage));
    this.tracers = new THREE.LineSegments(tg, new THREE.LineBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, toneMapped: false }));
    this.tracers.frustumCulled = false; scene.add(this.tracers);
    // particelle: scintille (additive) e polvere/sangue (normali)
    this.parts = [this.makeParts(160, true, 0.09), this.makeParts(220, false, 0.22)];
    for (const p of this.parts) scene.add(p.pts);
    // fori dei proiettili
    const NH = 160;
    this.holes = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.11, 0.11), new THREE.MeshBasicMaterial({ map: holeTexture(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }), NH);
    this.holes.count = 0; this.holes.frustumCulled = false; this.hi = 0; scene.add(this.holes);
    this.listen();
  }
  get w() { return this.inv[this.cur]; }

  makeParts(n, add, size) {
    const g = new THREE.BufferGeometry(), pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
    pos.fill(1e6);
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
    const pts = new THREE.Points(g, new THREE.PointsMaterial({ size, vertexColors: true, transparent: true, depthWrite: false, blending: add ? THREE.AdditiveBlending : THREE.NormalBlending, toneMapped: !add, opacity: add ? 1 : 0.85 }));
    pts.frustumCulled = false;
    return { pts, n, i: 0, pos, col, vel: new Float32Array(n * 3), life: new Float32Array(n), max: new Float32Array(n), base: new Float32Array(n * 3), grav: add ? 9.8 : 1.2 };
  }
  emit(P, x, y, z, vx, vy, vz, r, g, b, life) {
    const i = P.i; P.i = (P.i + 1) % P.n;
    P.pos[i * 3] = x; P.pos[i * 3 + 1] = y; P.pos[i * 3 + 2] = z;
    P.vel[i * 3] = vx; P.vel[i * 3 + 1] = vy; P.vel[i * 3 + 2] = vz;
    P.base[i * 3] = r; P.base[i * 3 + 1] = g; P.base[i * 3 + 2] = b;
    P.life[i] = life; P.max[i] = life;
  }

  // ------------------------------------------------------------ comandi
  listen() {
    const G = this.G, cv = G.renderer.domElement;
    const armed = () => G.started && !G.paused && !G.mapOpen && G.foot && G.foot.on && this.drawn;
    cv.addEventListener('mousedown', (e) => {
      if (!armed()) return;
      if (document.pointerLockElement !== cv) { cv.requestPointerLock && cv.requestPointerLock(); }
      if (e.button === 0) { this.fireHeld = true; this.firePressed = true; }
      if (e.button === 2) this.adsWant = true;
    });
    addEventListener('mouseup', (e) => { if (e.button === 0) this.fireHeld = false; if (e.button === 2) this.adsWant = false; });
    cv.addEventListener('contextmenu', (e) => { if (G.foot && G.foot.on) e.preventDefault(); });
    addEventListener('mousemove', (e) => {
      if (!armed() || document.pointerLockElement !== cv) return;
      const zoom = lerp(1, this.w.def.adsFov, this.ads);
      this.aimYaw -= e.movementX * 0.0022 * zoom;
      const dp = -e.movementY * 0.0022 * zoom;
      this.aimPitch = clamp(this.aimPitch + dp, -1.0, 1.2);
      if (dp < 0 && this.recPend > 0) this.recPend = Math.max(0, this.recPend + dp);   // il recupero fatto a mano conta
    });
    cv.addEventListener('wheel', (e) => { if (!armed()) return; e.preventDefault(); this.select((this.cur + (e.deltaY > 0 ? 1 : this.inv.length - 1)) % this.inv.length); }, { passive: false });
    addEventListener('keydown', (e) => {
      if (!G.started || G.paused || !G.foot || !G.foot.on) return;
      if (e.code === 'Tab') { e.preventDefault(); this.toggle(); }
    });
  }
  toggle() {
    const G = this.G;
    this.drawn = !this.drawn;
    if (this.drawn) {
      this.aimYaw = G.foot.h; this.aimPitch = 0.05; this.camInit = true; this.drawT = 0.35;
      this.G.audio && this.G.audio.gunMech && this.G.audio.gunMech('draw');
      const cv = G.renderer.domElement; cv.requestPointerLock && cv.requestPointerLock();
      G.toast && G.toast(`🔫 ${this.w.def.name} — clic sinistro spara, destro mira, R ricarica, 1-4 o rotellina cambia arma, Tab rinfodera (gamepad: LT mira, RT spara, B ricarica, LB cambia arma)`, 3200);
    } else this.holster();
  }
  holster() {
    this.drawn = false; this.fireHeld = false; this.adsWant = false; this.reload = null;
    if (document.pointerLockElement) document.exitPointerLock();
    for (const m of this.models) m.visible = false;
  }
  select(i) {
    if (i === this.cur || i < 0 || i >= this.inv.length) return;
    this.cur = i; this.reload = null; this.fireCd = 0.35; this.burstN = 0; this.drawT = 0.35;
    this.G.audio && this.G.audio.gunMech && this.G.audio.gunMech('draw');
    this.G.toast && this.G.toast('🔫 ' + this.w.def.name, 900);
  }
  startReload() {
    const w = this.w, d = w.def;
    if (this.reload || w.reserve <= 0 || w.mag >= d.mag) return;
    const empty = w.mag === 0;
    this.reload = d.tube ? { tube: true, phase: 'start', t: 0, empty } : { t: 0, dur: empty ? d.reloadEmpty : d.reload, filled: false };
    this.G.audio && this.G.audio.gunMech && this.G.audio.gunMech('reload');
  }
  // munizioni comprate (negozi): riempie la riserva
  refill() { for (const w of this.inv) w.reserve = w.def.reserve; }

  // ------------------------------------------------------------ ciclo
  update(dt, ctl) {
    // orologio del gioco (non quello del browser): pausa e fotogrammi lenti non falsano cadenza e recupero
    this.clock = (this.clock || 0) + dt;
    const G = this.G, f = G.foot, inp = G.input, now = this.clock;
    if (!f.on) { if (this.drawn) this.holster(); return; }
    // tastiera: 1-4 armi, R ricarica (pannelli dei negozi aperti: i numeri sono loro)
    if (!(G.career && G.career.panel)) for (let i = 0; i < this.inv.length; i++) if (inp.consume('Digit' + (i + 1))) { if (!this.drawn) this.toggle(); this.select(i); }
    // LB/L1 come in GTA: estrae l'arma, poi la cambia; dopo l'ultima la rinfodera
    if (ctl && ctl.actions && ctl.actions.has('weapon')) {
      if (!this.drawn) this.toggle();
      else if (this.cur < this.inv.length - 1) this.select(this.cur + 1);
      else { this.holster(); this.cur = 0; }
    }
    if (!this.drawn) return;
    if (inp.consume('KeyR') || (ctl && ctl.actions && ctl.actions.has('reload'))) this.startReload();
    // stick destro: mira (curva morbida al centro, piu' lenta mirando)
    if (ctl && (ctl.camX || ctl.camY)) {
      const zoom = lerp(1, this.w.def.adsFov * 0.8, this.ads), cx = ctl.camX * Math.abs(ctl.camX), cy = ctl.camY * Math.abs(ctl.camY);
      this.aimYaw -= cx * dt * 2.6 * zoom;
      const dp = cy * dt * 1.7 * zoom;
      this.aimPitch = clamp(this.aimPitch + dp, -1.0, 1.2);
      if (dp < 0 && this.recPend > 0) this.recPend = Math.max(0, this.recPend + dp);
    }
    // gamepad: grilletto sinistro mira, destro spara (a piedi con l'arma si cammina con lo stick)
    const padAim = ctl && ctl.padBrk > 0.3, padFire = ctl && ctl.padThr > 0.5;
    if (padFire && !this.padFireHeld) this.firePressed = true;
    this.padFireHeld = padFire;
    const fire = this.fireHeld || padFire, adsWant = this.adsWant || padAim;
    // mira
    this.ads += ((adsWant && !f.sprint ? 1 : 0) - this.ads) * Math.min(1, dt / 0.12);
    const w = this.w, d = w.def;
    this.fireCd -= dt; this.bloom = Math.max(0, this.bloom - dt * 0.05);
    if (this.drawT > 0) this.drawT -= dt;
    if (this.pumpT > 0) { this.pumpT -= dt; if (this.pumpT <= 0.3 && !this.pumped) { this.pumped = true; G.audio && G.audio.gunMech && G.audio.gunMech('pump'); } }
    // ricarica
    if (this.autoReload > 0) { this.autoReload -= dt; if (this.autoReload <= 0) this.startReload(); }
    if (this.reload) {
      const R = this.reload; R.t += dt;
      if (R.tube) {
        if (R.phase === 'start' && R.t >= 0.32) { R.phase = 'shell'; R.t = 0; }
        else if (R.phase === 'shell' && R.t >= d.shellTime) {
          w.mag++; w.reserve--; R.t = 0; G.audio && G.audio.gunMech && G.audio.gunMech('shell');
          if (w.mag >= d.mag || w.reserve <= 0 || R.stop) R.phase = 'end';
        } else if (R.phase === 'end' && R.t >= 0.3) { this.reload = null; if (R.empty) { this.pumpT = 0.5; this.pumped = false; } }
        if (fire && w.mag > 0 && R.phase === 'shell') R.stop = true;
      } else {
        if (!R.filled && R.t >= R.dur * 0.6) { const take = Math.min(d.mag - w.mag, w.reserve); w.mag += take; w.reserve -= take; R.filled = true; G.audio && G.audio.gunMech && G.audio.gunMech('mag'); }
        if (R.t >= R.dur) this.reload = null;
      }
    }
    // sparo
    // un clic resta "in coda" finche' il colpo parte (o per 0,3 s), anche se arriva durante la cadenza
    if (this.firePressed) { this.queued = 0.3; this.firePressed = false; }
    if (this.queued > 0) this.queued -= dt;
    const pressed = this.queued > 0;
    const canFire = !this.reload && this.drawT <= 0 && this.pumpT <= 0 && !f.sprint;
    if ((fire || pressed) && canFire && this.fireCd <= 0) {
      if (w.mag > 0 && (d.auto ? fire || pressed : pressed)) { this.shoot(now); this.queued = 0; }
      else if (w.mag <= 0 && pressed) { this.queued = 0; G.audio && G.audio.gunMech && G.audio.gunMech('empty'); if (w.reserve > 0) this.startReload(); }
    }
    // ritorno della mira (recoilTick)
    if (this.recPend > 0) {
      if (now - this.lastShotAt < RECOIL.delay) this.recArm = false;
      else {
        if (!this.recArm) { this.recArm = true; this.recPend *= (RECOIL.cat[d.cat] || RECOIL.cat.ar).back; }
        const dp = this.recPend * (1 - Math.exp(-RECOIL.rate * dt));
        this.aimPitch -= dp; this.recPend -= dp;
        if (this.recPend < 1e-4) this.recPend = 0;
      }
    }
    // stick destro? non mappato: con la manetta la mira segue il personaggio
    this.kick *= Math.exp(-dt * 14); this.fovK *= Math.exp(-dt * 10);
  }

  // direzione della mira
  dir(out, yaw = this.aimYaw, pitch = this.aimPitch) {
    const cp = Math.cos(pitch);
    return out.set(Math.sin(yaw) * cp, Math.sin(pitch), Math.cos(yaw) * cp);
  }

  shoot(now) {
    const G = this.G, f = G.foot, w = this.w, d = w.def;
    w.mag--; this.shots = (this.shots || 0) + 1; this.shotFlag = true;
    const ads = this.ads, spd = Math.abs(f.u);
    let spread = lerp(d.spread[0], d.spread[1], ads * ads);
    spread += d.moveSpread * clamp(spd / MOVE_SPEED, 0, 1.5) * (1 - ads * 0.7) + this.bloom * (1 - ads * 0.6);
    if (f.air) spread += 0.05;
    const cam = G.camera, aim = this.dir(new THREE.Vector3());
    // la mira parte dalla telecamera (sopra la spalla) e il colpo dalla bocca dell'arma
    const origin = cam.position.clone();
    const m = this.models[this.cur];
    m.updateMatrixWorld();
    const muzzle = m.userData.muzzle.clone().applyMatrix4(m.matrixWorld);
    const start = this.camDist * 0.95;
    const pellets = d.pellets || 1;
    let hitAny = false;
    const ped = [], cops = [];
    for (let i = 0; i < pellets; i++) {
      const dir = coneDir(aim, d.pellets ? lerp(d.spread[0], d.spread[1], ads) : spread);
      const h = this.trace(origin, dir, start, 220);
      const end = h ? h.p : origin.clone().addScaledVector(dir, 220);
      if (pellets === 1 || i < 3) this.tracer(muzzle, end);
      this.lastHit = h ? h.kind : 'nulla';
      if (!h) continue;
      const dist = h.t;
      const dmg = lerp(d.dmg[0], d.dmg[1], clamp((dist - d.range[0]) / (d.range[1] - d.range[0]), 0, 1)) * (h.head ? d.head : 1);
      hitAny = this.impact(h, dir, dmg) || hitAny;
      if (h.kind === 'ped') ped.push(h.obj);
      if (h.kind === 'cop') cops.push(h.obj);
    }
    // rinculo (recoilShot)
    this.burstN = now - this.lastShotAt < 0.3 ? this.burstN + 1 : 0; this.lastShotAt = now;
    const n = this.burstN, K = RECOIL.cat[d.cat] || RECOIL.cat.ar, R = d.recoil;
    let mul = K.mul * lerp(1, RECOIL.ads, ads);
    if (spd > 2.5) mul *= RECOIL.move;
    if (f.air) mul *= RECOIL.air;
    let kv = R.v * mul * rand(0.9, 1.1), kh;
    if (d.pattern === 'climb') { kv *= lerp(RECOIL.first, RECOIL.peak, Math.min(1, n / RECOIL.ramp)); kh = (Math.sin(n * 0.55 + 0.6) * 1.2 + (Math.random() - 0.5) * 0.6) * R.h; }
    else if (d.pattern === 'smg') { kv *= n ? 1 : RECOIL.first + 0.1; kh = (Math.random() - 0.5) * 2.6 * R.h; }
    else kh = (Math.random() - 0.5) * 2 * R.h;
    kh *= mul;
    this.aimPitch = clamp(this.aimPitch + kv, -1.0, 1.2); this.aimYaw += kh; this.recPend += kv;
    if (d.auto) this.bloom = Math.min(0.03, this.bloom + 0.003);
    this.fireCd = 60 / d.rpm;
    if (d.pump && w.mag > 0) { this.pumpT = 0.6; this.pumped = false; }
    if (w.mag === 0 && w.reserve > 0) this.autoReload = 0.3;
    // effetti: lampo, fumo, sobbalzo della vista, suono
    this.kick = Math.min(1, this.kick + 0.35 + R.kick * 6); this.fovK += R.kick * 30;
    this.flash.position.copy(muzzle).addScaledVector(aim, 0.08);
    this.flash.scale.setScalar(rand(0.35, 0.55) * (d.id === 'shotgun' ? 1.6 : d.id === 'pistol' ? 0.8 : 1));
    this.flash.material.rotation = Math.random() * 6.28; this.flash.visible = true; this.flashT = 0.045;
    for (let k = 0; k < 3; k++) this.emit(this.parts[1], muzzle.x, muzzle.y, muzzle.z, aim.x * rand(0.4, 1.2), rand(0.1, 0.4), aim.z * rand(0.4, 1.2), 0.65, 0.64, 0.62, rand(0.5, 0.9));
    if (G.audio && G.audio.gunShot) G.audio.gunShot(d.sound);
    if (hitAny) { this.hitT = 0.12; G.audio && G.audio.gunMech && G.audio.gunMech('hit'); }
    // reazioni: la gente scappa, la polizia sente gli spari
    if (G.peds && G.peds.panic) G.peds.panic(f.x, f.z, d.id === 'pistol' ? 45 : 60);
    if (G.police) {
      G.police.crime('shots', f.x, f.z);
      if (ped.length) G.police.crime('shootPed', f.x, f.z);
      if (cops.length) G.police.crime('shootCop', f.x, f.z);
    }
  }

  // ------------------------------------------------------------ colpi
  // primo ostacolo lungo il raggio: pedoni, veicoli, edifici/muri/alberi, terreno
  trace(o, d, t0, tMax) {
    const G = this.G;
    let best = null;
    const take = (t, kind, obj, extra) => { if (t > t0 && t < tMax && (!best || t < best.t)) best = { t, kind, obj, ...extra }; };
    // pedoni: cilindri verticali (r 0,3 m, 1,8 m); testa sopra 1,5 m
    if (G.peds) for (const p of G.peds.peds) {
      if (!p.alive || p.rag || p === G.peds.peds[G.peds.me]) continue;
      const t = rayCyl(o, d, p.x, p.y, p.z, 0.3, 1.8);
      if (t !== null) take(t, 'ped', p, { head: o.y + d.y * t - p.y > 1.5 });
    }
    // veicoli: scatole orientate (traffico, parcheggiate, lasciate, volanti)
    const car = (x, y, z, h, box, kind, obj, hgt = 1.45) => {
      if (Math.abs(x - o.x) > 230 || Math.abs(z - o.z) > 230) return;
      const t = rayBox(o, d, x, y, z, h, box.halfW, box.halfL, hgt);
      if (t !== null) take(t, kind, obj);
    };
    const T = G.traffic;
    if (T) {
      for (const c of T.cars) car(c.x, c.y || G.terrain.height(c.x, c.z), c.z, c.h, c.box, 'car', c, c.type === 'bus' ? 3 : c.type === 'van' ? 2.2 : 1.5);
      for (const s of T.statics) if (s.model) car(s.x, s.model.root.position.y, s.z, s.h, s.box, 'parked', s);
      for (const spots of T.parkSpots.values()) for (const s of spots) if (!s.taken && s.slot !== undefined) car(s.x, s.y, s.z, s.h, s.box, 'parked', s);
    }
    if (G.police) for (const c of G.police.cars) car(c.v.x, c.v.y, c.v.z, c.v.h, { halfW: c.v.spec.W / 2, halfL: c.v.spec.L / 2 }, c.mode === 'runner' ? 'car' : 'cop', c, c.v.spec.H);
    // il veicolo lasciato dal giocatore
    const pv = G.vehicle;
    if (pv && !pv.isPlane) car(pv.x, pv.y, pv.z, pv.h, { halfW: pv.spec.W / 2, halfL: pv.spec.L / 2 }, 'parked', pv, pv.spec.H);
    // edifici, muri, alberi e terreno: si avanza a passi di 30 cm fino al primo ostacolo (o al veicolo)
    const lim = best ? best.t : tMax, col = G.world.collision, step = 0.3;
    let prevIn = false;
    for (let t = t0; t < lim; t += step) {
      const x = o.x + d.x * t, y = o.y + d.y * t, z = o.z + d.z * t;
      const gy = G.terrain.height(x, z);
      if (y < gy) { const tt = refine(t - step, t, (s) => o.y + d.y * s < G.terrain.height(o.x + d.x * s, o.z + d.z * s)); take(tt, 'ground', null, { n: new THREE.Vector3(0, 1, 0) }); break; }
      const ob = solidAt(col, x, y, z, gy);
      if (ob && !prevIn) {
        const tt = refine(t - step, t, (s) => !!solidAt(col, o.x + d.x * s, o.y + d.y * s, o.z + d.z * s, gy));
        const hx = o.x + d.x * tt, hz = o.z + d.z * tt;
        take(tt, ob.r !== undefined ? 'tree' : 'wall', ob, { n: wallNormal(ob, hx, hz, d) });
        break;
      }
      prevIn = !!ob;
    }
    if (best) best.p = new THREE.Vector3(o.x + d.x * best.t, o.y + d.y * best.t, o.z + d.z * best.t);
    return best;
  }

  // effetti e conseguenze di un colpo; true se ha preso qualcuno o qualcosa che conta (segnale di colpo)
  impact(h, dir, dmg) {
    const G = this.G, p = h.p, S = this.parts[0], D = this.parts[1];
    if (h.kind === 'ped') {
      for (let k = 0; k < 8; k++) this.emit(D, p.x, p.y, p.z, dir.x * rand(0.5, 2) + rand(-0.6, 0.6), rand(-0.2, 1.2), dir.z * rand(0.5, 2) + rand(-0.6, 0.6), 0.45, 0.02, 0.02, rand(0.3, 0.6));
      if (G.peds && G.peds.shoot) G.peds.shoot(h.obj, dir.x, dir.z, dmg, h.head);
      return true;
    }
    if (h.kind === 'car' || h.kind === 'parked' || h.kind === 'cop') {
      for (let k = 0; k < 7; k++) this.emit(S, p.x, p.y, p.z, -dir.x * rand(1, 4) + rand(-2, 2), rand(0.5, 3.5), -dir.z * rand(1, 4) + rand(-2, 2), 1, 0.75, 0.35, rand(0.15, 0.35));
      const c = h.obj;
      if (h.kind === 'car') { c.hp = (c.hp === undefined ? 100 : c.hp) - dmg * 0.35; c.bumped = Math.max(c.bumped || 0, 4); if (c.hp <= 0 && !c.wreck) { c.wreck = true; c.bumped = 1e9; } }
      if (h.kind === 'parked' && h.obj.x !== undefined) { h.obj.hp = (h.obj.hp === undefined ? 100 : h.obj.hp) - dmg * 0.35; if (h.obj.hp <= 0) h.obj.wreck = true; }
      return true;
    }
    // muro, albero, terreno: polvere chiara, qualche scintilla, foro
    const n = h.n || new THREE.Vector3(0, 1, 0);
    const dc = h.kind === 'tree' ? [0.35, 0.27, 0.18] : h.kind === 'ground' ? [0.5, 0.46, 0.4] : [0.72, 0.68, 0.62];
    for (let k = 0; k < 6; k++) this.emit(D, p.x + n.x * 0.05, p.y + n.y * 0.05, p.z + n.z * 0.05, n.x * rand(0.6, 2) + rand(-0.5, 0.5), n.y * rand(0.6, 2) + rand(0.2, 1), n.z * rand(0.6, 2) + rand(-0.5, 0.5), dc[0], dc[1], dc[2], rand(0.4, 0.8));
    if (h.kind !== 'tree') for (let k = 0; k < 3; k++) this.emit(S, p.x, p.y, p.z, n.x * rand(1, 4) + rand(-2, 2), rand(0.5, 3), n.z * rand(1, 4) + rand(-2, 2), 1, 0.8, 0.45, rand(0.08, 0.2));
    this.hole(p, n);
    return false;
  }
  hole(p, n) {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    const s = rand(0.8, 1.3);
    m.compose(p.clone().addScaledVector(n, 0.02), q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.random() * 6.28)), new THREE.Vector3(s, s, s));
    this.holes.setMatrixAt(this.hi, m); this.hi = (this.hi + 1) % 160;
    this.holes.count = Math.min(160, this.holes.count + 1); this.holes.instanceMatrix.needsUpdate = true;
  }
  tracer(a, b) {
    const T = this.tr, i = T.i; T.i = (T.i + 1) % T.n;
    // la scia parte un po' davanti alla bocca e copre un tratto del percorso
    T.pos.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6); T.life[i] = 0.06;
  }

  // ------------------------------------------------------------ disegno, ogni fotogramma
  updateFx(dt) {
    const G = this.G;
    if (this.flashT > 0) { this.flashT -= dt; if (this.flashT <= 0) this.flash.visible = false; }
    // scie
    const T = this.tr;
    for (let i = 0; i < T.n; i++) {
      if (T.life[i] > 0) T.life[i] -= dt;
      const k = Math.max(0, T.life[i] / 0.06);
      T.col.set([1.0 * k, 0.85 * k, 0.5 * k, 0.35 * k, 0.3 * k, 0.2 * k], i * 6);
      if (k === 0) T.pos.fill(0, i * 6, i * 6 + 6);
    }
    this.tracers.geometry.attributes.position.needsUpdate = true; this.tracers.geometry.attributes.color.needsUpdate = true;
    // particelle
    for (const P of this.parts) {
      for (let i = 0; i < P.n; i++) {
        if (P.life[i] <= 0) { if (P.pos[i * 3] !== 1e6) { P.pos[i * 3] = 1e6; P.pos[i * 3 + 1] = 1e6; } continue; }
        P.life[i] -= dt;
        P.vel[i * 3 + 1] -= P.grav * dt;
        const drag = Math.exp(-dt * (P.grav > 5 ? 1.5 : 3));
        P.vel[i * 3] *= drag; P.vel[i * 3 + 2] *= drag;
        P.pos[i * 3] += P.vel[i * 3] * dt; P.pos[i * 3 + 1] += P.vel[i * 3 + 1] * dt; P.pos[i * 3 + 2] += P.vel[i * 3 + 2] * dt;
        const k = Math.max(0, P.life[i] / P.max[i]);
        P.col[i * 3] = P.base[i * 3] * k; P.col[i * 3 + 1] = P.base[i * 3 + 1] * k; P.col[i * 3 + 2] = P.base[i * 3 + 2] * k;
        if (P.grav < 5) { P.col[i * 3] = P.base[i * 3]; P.col[i * 3 + 1] = P.base[i * 3 + 1]; P.col[i * 3 + 2] = P.base[i * 3 + 2]; }
      }
      P.pts.geometry.attributes.position.needsUpdate = true; P.pts.geometry.attributes.color.needsUpdate = true;
    }
    // auto distrutte: fumo
    if (G.traffic && G.fx) for (const c of G.traffic.cars) if (c.wreck && Math.random() < dt * 6) G.fx.puff(c.x, (c.y || 0) + 0.8, c.z, 0, 0, 1.2);
    // arma in mano
    const f = G.foot;
    for (let i = 0; i < this.models.length; i++) this.models[i].visible = this.drawn && f.on && i === this.cur;
    if (this.drawn && f.on) {
      const m = this.models[this.cur], h = this.aimYaw, pt = this.aimPitch * 0.9;
      const fx = Math.sin(h), fz = Math.cos(h), rx = -Math.cos(h), rz = Math.sin(h);
      const two = this.w.def.id !== 'pistol';
      const low = (1 - this.ads) * (two ? 0.12 : 0.18);
      const reach = (two ? 0.32 : 0.48) + 0.06 * this.ads - this.kick * 0.05;
      const y = f.y + 1.36 - low + Math.sin(pt) * reach;
      m.position.set(f.x + fx * reach * Math.cos(pt) + rx * (two ? 0.16 : 0.08), y, f.z + fz * reach * Math.cos(pt) + rz * (two ? 0.16 : 0.08));
      // con il manichino animato l'arma sta nella mano destra (segue le animazioni di mira e ricarica)
      const PM = G.playerModel;
      if (PM && PM.ready && PM.root.visible) m.position.copy(PM.hand).addScaledVector(new THREE.Vector3(fx, 0, fz), two ? 0.12 : 0.03);
      m.rotation.set(-pt + this.kick * 0.25 + (this.reload ? 0.6 : 0) + (this.pumpT > 0 ? 0.15 : 0) + low * 1.2, h, 0, 'YXZ');
    }
    this.hud();
  }

  // telecamera sopra la spalla destra
  camera(cam, dt) {
    const G = this.G, f = G.foot;
    const dist = lerp(2.9, 1.75, this.ads), side = lerp(0.55, 0.62, this.ads), up = lerp(0.42, 0.3, this.ads);
    this.camDist = dist;
    const aim = this.dir(new THREE.Vector3(), this.aimYaw, this.aimPitch);
    const rx = -Math.cos(this.aimYaw), rz = Math.sin(this.aimYaw);
    const head = new THREE.Vector3(f.x + rx * side, (G.footCamY !== undefined ? G.footCamY : f.y) + 1.35 + up, f.z + rz * side);
    const want = head.clone().addScaledVector(aim, -dist);
    if (this.camInit) { this.camPos = want.clone(); this.camInit = false; }
    this.camPos.lerp(want, 1 - Math.exp(-dt * 30));
    const gh = G.roads.surfaceAt(this.camPos.x, this.camPos.z, f.y + 3).h;
    cam.position.copy(this.camPos); cam.position.y = Math.max(cam.position.y, gh + 0.4);
    // sobbalzo del colpo: un poco su e indietro
    const look = cam.position.clone().addScaledVector(aim, 30);
    look.y += this.kick * 0.25;
    cam.lookAt(look);
    cam.fov = BASE_FOV * lerp(1, this.w.def.adsFov + 0.08, this.ads) + this.fovK;
    cam.near = 0.1;
  }

  // mirino, munizioni, segnale di colpo
  hud() {
    const G = this.G, on = this.drawn && G.foot.on;
    if (!this.el) {
      this.el = { x: document.getElementById('xhair'), a: document.getElementById('ammo'), hm: document.getElementById('hitmark') };
      if (!this.el.x) return;
    }
    const E = this.el;
    E.x.classList.toggle('hidden', !on); E.a.classList.toggle('hidden', !on);
    if (!on) { E.hm.classList.add('hidden'); return; }
    const d = this.w.def, spd = Math.abs(G.foot.u);
    const spread = lerp(d.spread[0], d.spread[1], this.ads * this.ads) + d.moveSpread * clamp(spd / MOVE_SPEED, 0, 1.5) * (1 - this.ads * 0.7) + this.bloom + (G.foot.air ? 0.05 : 0);
    const px = Math.round(4 + Math.tan(spread) / Math.tan(G.camera.fov * Math.PI / 360) * innerHeight / 2 + this.kick * 10);
    E.x.style.setProperty('--gap', px + 'px');
    const w = this.w, r = this.reload;
    E.a.innerHTML = `<b>${d.name}</b><span>${r ? 'ricarica…' : `${w.mag} <small>/ ${w.reserve}</small>`}</span>`;
    if (this.hitT > 0) { this.hitT -= 1 / 60; E.hm.classList.remove('hidden'); } else E.hm.classList.add('hidden');
  }
}

// --- geometria
function coneDir(f, spread) {
  // direzione casuale entro un cono di semiapertura ~spread (radianti)
  const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * spread;
  const up = Math.abs(f.y) < 0.95 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
  const u = new THREE.Vector3().crossVectors(f, up).normalize(), v = new THREE.Vector3().crossVectors(u, f);
  return f.clone().addScaledVector(u, Math.cos(a) * r).addScaledVector(v, Math.sin(a) * r).normalize();
}
function rayCyl(o, d, cx, cy, cz, r, h) {
  const ox = o.x - cx, oz = o.z - cz, a = d.x * d.x + d.z * d.z;
  if (a < 1e-9) return null;
  const b = ox * d.x + oz * d.z, c = ox * ox + oz * oz - r * r, disc = b * b - a * c;
  if (disc < 0) return null;
  const t = (-b - Math.sqrt(disc)) / a;
  if (t < 0) return null;
  const y = o.y + d.y * t - cy;
  return y >= 0 && y <= h ? t : null;
}
function rayBox(o, d, x, y, z, h, hw, hl, hgt) {
  // nel sistema del veicolo: avanti = (sin h, cos h), sinistra = (cos h, -sin h)
  const s = Math.sin(h), c = Math.cos(h);
  const px = o.x - x, pz = o.z - z;
  const lo = [px * c - pz * s, o.y - y, px * s + pz * c], ld = [d.x * c - d.z * s, d.y, d.x * s + d.z * c];
  const mn = [-hw, 0.15, -hl], mx = [hw, hgt, hl];
  let t0 = 0, t1 = 1e9;
  for (let k = 0; k < 3; k++) {
    if (Math.abs(ld[k]) < 1e-9) { if (lo[k] < mn[k] || lo[k] > mx[k]) return null; continue; }
    let a = (mn[k] - lo[k]) / ld[k], b = (mx[k] - lo[k]) / ld[k];
    if (a > b) { const tt = a; a = b; b = tt; }
    t0 = Math.max(t0, a); t1 = Math.min(t1, b);
    if (t0 > t1) return null;
  }
  return t0 > 0 ? t0 : null;
}
function inRing(x, z, ring) {
  let inside = false;
  for (let i = 0, j = ring.length / 2 - 1; i < ring.length / 2; j = i++) {
    const xi = ring[i * 2], zi = ring[i * 2 + 1], xj = ring[j * 2], zj = ring[j * 2 + 1];
    if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}
// ostacolo solido nel punto (edifici fino alla gronda, muri e recinzioni fino a ~1,5 m, alberi: tronco e chioma)
function solidAt(col, x, y, z, gy) {
  const a = col.grid.get(Math.floor(z / 24) * 100000 + Math.floor(x / 24));
  if (!a) return null;
  for (const o of a) {
    if (x < o.minx || x > o.maxx || z < o.minz || z > o.maxz) continue;
    if (o.bot !== undefined && y < o.bot) continue;
    const top = o.top !== undefined ? o.top : gy + 1.5;
    if (y > top) continue;
    if (o.ring) { if (inRing(x, z, o.ring)) return o; }
    else if (Math.hypot(x - o.x, z - o.z) < (y > top - 3 ? o.r * 2.2 : Math.min(0.35, o.r))) return o;    // albero: chioma in alto, tronco sotto
  }
  return null;
}
function refine(a, b, inside) {
  for (let k = 0; k < 6; k++) { const m = (a + b) / 2; if (inside(m)) b = m; else a = m; }
  return (a + b) / 2;
}
function wallNormal(o, x, z, d) {
  if (!o.ring) { const nx = x - o.x, nz = z - o.z, l = Math.hypot(nx, nz) || 1; return new THREE.Vector3(nx / l, 0, nz / l); }
  const r = o.ring, n = r.length / 2;
  let best = 1e9, bn = null;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = r[i * 2], zi = r[i * 2 + 1], xj = r[j * 2], zj = r[j * 2 + 1];
    const dx = xi - xj, dz = zi - zj, L2 = dx * dx + dz * dz || 1e-9;
    let t = ((x - xj) * dx + (z - zj) * dz) / L2; t = Math.max(0, Math.min(1, t));
    const dd = Math.hypot(x - (xj + dx * t), z - (zj + dz * t));
    if (dd < best) { best = dd; const L = Math.sqrt(L2); bn = [dz / L, -dx / L]; }
  }
  // verso chi spara
  if (bn[0] * d.x + bn[1] * d.z > 0) { bn[0] = -bn[0]; bn[1] = -bn[1]; }
  return new THREE.Vector3(bn[0], 0, bn[1]);
}
