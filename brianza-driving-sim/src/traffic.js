import * as THREE from 'three';
import { makeCarFleet } from './vendor/city/car.js';
import { VEHICLE_BOX, fleetTypeFor } from './vendor/city/vehicles.js';
import { nextNormal } from './vendor/city/terrain-shim.js';
import { CLS, F, NT } from './roads.js';
import { signalState } from './signs.js';

// Traffico AI sulla rete reale: rispetta sensi unici, limiti, semafori, distanze (modello IDM),
// da' la precedenza in rotatoria e nelle immissioni, si ferma per i pedoni. I veicoli (auto,
// familiari, furgoni, autobus) sono la flotta istanziata del progetto "city".
// Qui vivono anche le auto parcheggiate nei parcheggi reali e quelle lasciate dal giocatore.
const SLOTS = 72, FAR = 1e6, PALETTE = 14;

export class Traffic {
  constructor(world) {
    this.world = world; this.R = world.roads;
    this.cars = [];
    this.target = 35;
    this.group = new THREE.Group();
    this.fleet = makeCarFleet(SLOTS);
    const PARK_SLOTS = (world.settings && world.settings.parked) || 288;   // auto parcheggiate visibili insieme
    this.parkFleet = makeCarFleet(PARK_SLOTS);
    this.group.add(this.fleet.group, this.parkFleet.group);
    this.free = [];
    for (let i = SLOTS - 1; i >= 0; i--) { this.free.push(i); this.fleet.setAt(i, FAR, FAR, 0, 0, -100); }
    this.parkPools = { car: [], wagon: [], van: [] };
    for (let i = 0; i < PARK_SLOTS; i++) { this.parkFleet.setAt(i, FAR, FAR, 0, 0, -100); const t = fleetTypeFor(i); if (this.parkPools[t]) this.parkPools[t].push(i); }
    // fascio dei fari a terra (solo di notte)
    const bc = document.createElement('canvas'); bc.width = 32; bc.height = 64;
    const bx = bc.getContext('2d'), bg = bx.createRadialGradient(16, 60, 2, 16, 40, 44);
    bg.addColorStop(0, 'rgba(255,240,200,0.9)'); bg.addColorStop(0.5, 'rgba(255,235,190,0.28)'); bg.addColorStop(1, 'rgba(255,230,180,0)');
    bx.fillStyle = bg; bx.fillRect(0, 0, 32, 64);
    this.beamMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(bc), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0, fog: false, polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -12 });
    const beamGeo = new THREE.PlaneGeometry(5, 16); beamGeo.rotateX(-Math.PI / 2); beamGeo.rotateY(Math.PI); beamGeo.translate(0, 0.12, 10.5);
    this.beams = new THREE.InstancedMesh(beamGeo, this.beamMat, SLOTS);
    this.beams.frustumCulled = false; this.beams.visible = false;
    this.group.add(this.beams);
    this.statics = [];       // auto ferme lasciate dal giocatore: {x, z, h, box}
    this.obstacles = [];     // punti da non investire: [x, z] (pedoni in strada, giocatore a piedi)
    this.parkSpots = new Map();
    this.parkTimer = 0;
    this.spawnTimer = 0;
    this.time = 0;
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._up = new THREE.Vector3(0, 1, 0); this._p = new THREE.Vector3(); this._s = new THREE.Vector3(1, 1, 1);
  }

  setNight(f) { this.beamMat.opacity = Math.max(0, f - 0.3) * 0.8; this.beams.visible = f > 0.31; }

  release(c) { this.fleet.setAt(c.slot, FAR, FAR, 0, 0, -100); this.free.push(c.slot); }
  clear() { for (const c of this.cars) this.release(c); this.cars = []; }

  segEnds(c) {
    const w = this.R.ways[c.wi];
    return c.dir > 0 ? [w.nodes[c.k], w.nodes[c.k + 1]] : [w.nodes[c.k + 1], w.nodes[c.k]];
  }

  spawn(px, pz) {
    const R = this.R;
    if (!this.free.length) return;
    for (let attempt = 0; attempt < 6; attempt++) {
      const ang = Math.random() * Math.PI * 2, dist = 180 + Math.random() * 480;
      const x = px + Math.cos(ang) * dist, z = pz + Math.sin(ang) * dist;
      const nr = R.nearest(x, z, 70, (w) => w.drivable && w.cls <= CLS.LIVING && !(w.flags & F.PRIVATE));
      if (!nr) continue;
      const w = R.ways[nr.wi];
      // gli autobus solo sulle strade principali
      let si = this.free.length - 1 - Math.floor(Math.random() * Math.min(6, this.free.length));
      if (fleetTypeFor(this.free[si]) === 'bus' && w.cls > CLS.TERTIARY) { si = this.free.findIndex((s) => fleetTypeFor(s) !== 'bus'); if (si < 0) return; }
      const dir = w.oneway ? 1 : (Math.random() < 0.5 ? 1 : -1);
      const segLen = w.cum[nr.k + 1] - w.cum[nr.k];
      const s = (dir > 0 ? nr.t : 1 - nr.t) * segLen;
      if (this.cars.some((c) => Math.hypot(c.x - nr.px, c.z - nr.pz) < 25)) continue;
      const slot = this.free.splice(si, 1)[0], type = fleetTypeFor(slot);
      const car = { slot, type, box: VEHICLE_BOX[type], colour: Math.floor(Math.random() * PALETTE), wi: nr.wi, k: nr.k, dir, s,
        speed: Math.min(w.limit, 50) / 3.6 * 0.7, x: nr.px, z: nr.pz, y: 0, h: 0, slope: 0,
        mood: (type === 'bus' ? 0.74 : 0.86) + Math.random() * 0.2, next: null, yield: false, bumped: 0, stuck: 0 };
      this.chooseNext(car);
      this.cars.push(car);
      this.place(car, 0);
      return;
    }
  }

  // sceglie il prossimo tratto all'arrivo nel nodo finale del segmento corrente
  chooseNext(c) {
    const R = this.R;
    const w = R.ways[c.wi];
    const [A, B] = this.segEnds(c);
    const nextK = c.k + c.dir;
    const atEnd = c.dir > 0 ? c.k + 1 === w.nodes.length - 1 : c.k === 0;
    c.yield = false;
    if (!atEnd && R.degree[B] < 3) { c.next = { wi: c.wi, k: nextK, dir: c.dir, turn: 0 }; return; }
    const opts = [];
    const inAng = Math.atan2(R.nx[B] - R.nx[A], R.nz[B] - R.nz[A]);
    for (let o = R.adjStart[B]; o < R.adjStart[B + 1]; o++) {
      const wi = R.adjWay[o], p = R.adjPos[o], w2 = R.ways[wi];
      if (!w2.drivable || w2.cls > CLS.LIVING || (w2.flags & F.PRIVATE)) continue;
      if (c.type === 'bus' && w2.cls > CLS.UNCLASSIFIED) continue;
      const cand = [];
      if (p < w2.nodes.length - 1) cand.push({ wi, k: p, dir: 1, to: w2.nodes[p + 1] });
      if (p > 0 && !w2.oneway) cand.push({ wi, k: p - 1, dir: -1, to: w2.nodes[p - 1] });
      for (const cd of cand) {
        if (cd.wi === c.wi && cd.k === c.k && cd.dir === -c.dir) continue; // inversione
        const outAng = Math.atan2(R.nx[cd.to] - R.nx[B], R.nz[cd.to] - R.nz[B]);
        let turn = outAng - inAng;
        while (turn > Math.PI) turn -= 2 * Math.PI; while (turn < -Math.PI) turn += 2 * Math.PI;
        let wgt = 1 + Math.max(0, 6 - w2.cls) * 0.5;
        if (Math.abs(turn) < 0.4) wgt *= 2.5;
        if (Math.abs(turn) > 2.6) wgt *= 0.05;
        opts.push({ ...cd, turn, wgt });
      }
    }
    if (!opts.length) { c.next = { wi: c.wi, k: c.k, dir: -c.dir, turn: Math.PI }; return; }
    let r = Math.random() * opts.reduce((s, o) => s + o.wgt, 0);
    c.next = opts[opts.length - 1];
    for (const o of opts) { r -= o.wgt; if (r <= 0) { c.next = o; break; } }
    // precedenza: ingresso in rotatoria, immissione da rampa, sbocco su strada piu' importante
    const nw = R.ways[c.next.wi];
    c.yield = c.next.wi !== c.wi && (((nw.flags & F.ROUNDABOUT) && !(w.flags & F.ROUNDABOUT)) || ((w.flags & F.LINK) && !(nw.flags & F.LINK)) || nw.cls < w.cls);
  }

  place(c, dt) {
    const R = this.R, w = R.ways[c.wi];
    const [A, B] = this.segEnds(c);
    const ax = R.nx[A], az = R.nz[A], bx = R.nx[B], bz = R.nz[B];
    const L = Math.hypot(bx - ax, bz - az) || 0.01;
    const f = Math.min(1, c.s / L);
    const dx = (bx - ax) / L, dz = (bz - az) / L;
    const lane = R.laneCenter(w, c.dir);
    const x = ax + dx * c.s - dz * lane, z = az + dz * c.s + dx * lane;
    const t = c.dir > 0 ? f : 1 - f;
    const y = R.heightOn(c.wi, c.k, t, x, z);
    // pendenza lungo la marcia (per inclinare la carrozzeria)
    const f2 = Math.min(1, (c.s + 2) / L), t2 = c.dir > 0 ? f2 : 1 - f2;
    const y2 = R.heightOn(c.wi, c.k, t2, x + dx * (f2 - f) * L, z + dz * (f2 - f) * L);
    const slope = f2 > f ? (y2 - y) / ((f2 - f) * L) : c.slope;
    c.slope += (slope - c.slope) * Math.min(1, (dt || 1) * 5);
    c.x = x; c.z = z; c.y = y;
    const th = Math.atan2(dx, dz);
    if (dt === 0) c.h = th;
    let dh = th - c.h; while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
    c.h += dh * Math.min(1, dt * 6);
  }

  draw(c) {
    const fx = Math.sin(c.h), fz = Math.cos(c.h);
    const n = Math.hypot(c.slope, 1);
    nextNormal.x = -fx * c.slope / n; nextNormal.y = 1 / n; nextNormal.z = -fz * c.slope / n;
    this.fleet.setAt(c.slot, c.x, c.z, c.h, c.colour, c.y);
    if (this.beams.visible) {
      this._q.setFromAxisAngle(this._up, c.h); this._p.set(c.x + fx * (c.box.halfL - 2.2), c.y, c.z + fz * (c.box.halfL - 2.2));
      this._m.compose(this._p, this._q, this._s); this.beams.setMatrixAt(c.slot, this._m);
    }
  }

  // player: { x, z, h, u, wi } (wi = via su cui si trova, -1 se nessuna)
  update(dt, player, time) {
    this.time = time;
    const R = this.R;
    const px = player.x, pz = player.z;
    for (let i = this.cars.length - 1; i >= 0; i--) {
      const c = this.cars[i];
      if (Math.hypot(c.x - px, c.z - pz) > 800 || c.stuck > 40) { this.release(c); this.cars.splice(i, 1); }
    }
    this.spawnTimer -= dt;
    if (this.cars.length < this.target && this.spawnTimer <= 0) { this.spawn(px, pz); this.spawnTimer = 0.15; }
    this.parkTimer -= dt;
    if (this.parkTimer <= 0) { this.parkTimer = 1.5; this.refreshParked(px, pz); }

    const pfx = Math.sin(player.h), pfz = Math.cos(player.h);
    const pu = Math.max(0, player.u);
    for (const c of this.cars) {
      const w = R.ways[c.wi];
      const [A, B] = this.segEnds(c);
      const L = Math.hypot(R.nx[B] - R.nx[A], R.nz[B] - R.nz[A]);
      const remain = L - c.s;
      const fx = Math.sin(c.h), fz = Math.cos(c.h);
      let v0 = w.limit / 3.6 * c.mood;
      if (c.next && Math.abs(c.next.turn) > 0.35) {
        const vt = Math.abs(c.next.turn) > 1.0 ? 5.5 : 9;
        v0 = Math.min(v0, Math.sqrt(vt * vt + 2 * 2.2 * Math.max(0, remain - 3)));
      }
      // ostacolo piu' vicino davanti (veicoli, giocatore, pedoni)
      let gap = 1e9, lead = 0;
      const check = (ox, oz, ov, ofx, ofz, olen) => {
        const rx = ox - c.x, rz = oz - c.z;
        const along = rx * fx + rz * fz;
        if (along <= 0 || along > 60) return;
        const lat = Math.abs(rx * fz - rz * fx);
        const same = ofx * fx + ofz * fz;
        if (lat > (same > 0.3 ? 2.0 : 1.4)) return;
        const g = along - c.box.halfL - olen - 0.4;
        if (g < gap) { gap = g; lead = ov * Math.max(0, same); }
      };
      for (const o of this.cars) if (o !== c) check(o.x, o.z, o.speed, Math.sin(o.h), Math.cos(o.h), o.box.halfL);
      if (player.active !== false) check(px, pz, pu, pfx, pfz, 2.2);
      for (const s of this.statics) check(s.x, s.z, 0, Math.sin(s.h), Math.cos(s.h), s.box.halfL);
      for (const o of this.obstacles) check(o[0], o[1], 0, 0, 0, 0.6);
      // semafori sul nodo finale del segmento
      const sigNode = R.ntag[B] === NT.SIGNALS ? B : (c.next && R.ntag[this.nodeAfter(c)] === NT.SIGNALS && remain < 35 ? -2 : -1);
      if (sigNode !== -1) {
        const dist = sigNode === B ? remain : remain + 20;
        const group = Math.abs(fx) > Math.abs(fz) ? 1 : 0;
        const st = signalState(group, time);
        if ((st === 'R' || (st === 'Y' && dist > 14)) && dist > 1.5) { const g = dist - 3.5 - c.box.halfL + 2.2; if (g < gap) { gap = Math.max(0.1, g); lead = 0; } }
      }
      // precedenza: si ferma prima del nodo se arriva qualcuno sulla strada in cui si immette
      if (c.yield && remain < 18 && remain > 0.3) {
        const nxB = R.nx[B], nzB = R.nz[B];
        let conflict = false;
        const test = (ox, oz, ov, ofx, ofz, owi) => {
          if (conflict || ov < 1.5 || owi === c.wi) return;
          const dx = nxB - ox, dz = nzB - oz, d = Math.hypot(dx, dz);
          if (d > 10 + ov * 3.2 || d < 0.5) return;
          if ((dx * ofx + dz * ofz) / d < 0.6) return;
          conflict = true;
        };
        for (const o of this.cars) if (o !== c) test(o.x, o.z, o.speed, Math.sin(o.h), Math.cos(o.h), o.wi);
        if (player.active !== false) test(px, pz, pu, pfx, pfz, player.wi);
        if (conflict) { const g = remain - 2.2 - c.box.halfL + 2.2; if (g < gap) { gap = Math.max(0.1, g); lead = 0; } }
      }
      if (c.bumped > 0) { c.bumped -= dt; v0 = 0; }
      // IDM
      const a0 = c.type === 'bus' ? 1.1 : 1.6, b0 = 2.4, s0 = 2.2, T = 1.25;
      const v = c.speed;
      let acc = a0 * (1 - Math.pow(Math.max(0, v) / Math.max(0.1, v0), 4));
      if (gap < 1e8) {
        const ss = s0 + v * T + v * (v - lead) / (2 * Math.sqrt(a0 * b0));
        acc -= a0 * Math.pow(Math.max(0, ss) / Math.max(0.3, gap), 2);
      }
      acc = Math.max(-9, acc);
      c.speed = Math.max(0, v + acc * dt);
      if (c.speed < 0.1) c.stuck += dt; else c.stuck = 0;
      c.s += c.speed * dt;
      let guard = 0;
      while (guard++ < 8) {
        const [A2, B2] = this.segEnds(c);
        const L2 = Math.hypot(R.nx[B2] - R.nx[A2], R.nz[B2] - R.nz[A2]);
        if (c.s < L2) break;
        c.s -= L2;
        const n = c.next || { wi: c.wi, k: c.k, dir: -c.dir };
        c.wi = n.wi; c.k = n.k; c.dir = n.dir;
        this.chooseNext(c);
      }
      this.place(c, dt);
      this.draw(c);
    }
    if (this.beams.visible) this.beams.instanceMatrix.needsUpdate = true;
  }

  nodeAfter(c) {
    const n = c.next, w = this.R.ways[n.wi];
    return n.dir > 0 ? w.nodes[n.k + 1] : w.nodes[n.k];
  }

  // il giocatore prende un veicolo del traffico: lo toglie dalla circolazione
  take(c) {
    const i = this.cars.indexOf(c);
    if (i < 0) return null;
    this.cars.splice(i, 1); this.release(c);
    return { type: c.type, colour: c.colour, x: c.x, z: c.z, h: c.h };
  }

  nearestCar(x, z, r, maxSpeed = 2.5) {
    let best = null, bd = r;
    for (const c of this.cars) { const d = Math.hypot(c.x - x, c.z - z) - c.box.halfW; if (d < bd && c.speed <= maxSpeed) { bd = d; best = c; } }
    return best;
  }

  // ------------------------------------------------------------ auto parcheggiate
  // Auto nei posti reali calcolati dalla pipeline (stalli mappati, corsie, lungo strada, piazzali).
  // L'occupazione varia da un parcheggio all'altro ed e' stabile tra una partita e l'altra.
  computeParkSpots(tileKey, tile) {
    const T = this.world.terrain, col = this.world.collision;
    const pk = (tile && tile.pk) || [], spots = [];
    const hash = (a, b) => { let n = (Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263)) | 0; n = Math.imul(n ^ (n >>> 13), 1274126177); return ((n ^ (n >>> 16)) >>> 0) / 4294967296; };
    for (let i = 0; i < pk.length; i += 5) {
      const x = pk[i] / 10, z = pk[i + 1] / 10, wd = pk[i + 3] / 10, ln = (pk[i + 4] >> 1) / 10, typ = pk[i + 4] & 1;
      // riempimento del parcheggio (blocchi di 70 m): dal 55% al 95%
      const fill = 0.55 + 0.4 * hash(Math.floor(x / 70), Math.floor(z / 70));
      if (hash(pk[i], pk[i + 1]) > fill) continue;
      let h = pk[i + 2] / 10 * Math.PI / 180;
      if (typ === 0 && hash(pk[i + 1], pk[i]) < 0.45) h += Math.PI;       // a pettine: muso avanti o indietro
      const r2 = hash(pk[i] + 7, pk[i + 1] + 13);
      const type = r2 < 0.7 || wd < 2.35 ? 'car' : r2 < 0.9 ? 'wagon' : (ln >= 5 ? 'van' : 'wagon');
      const box = VEHICLE_BOX[type], fx = Math.sin(h), fz = Math.cos(h);
      const objs = [col.addCircle(tileKey, x + fx * 1.1, z + fz * 1.1, box.halfW - 0.08), col.addCircle(tileKey, x - fx * 1.1, z - fz * 1.1, box.halfW - 0.08)];
      spots.push({ x, z, y: T.height(x, z) + 0.06, h, type, box, colour: Math.floor(hash(pk[i] + 3, pk[i + 1] + 5) * PALETTE), taken: false, objs });
    }
    this.parkSpots.set(tileKey, spots);
    this.parkTimer = 0;
  }

  removeTile(tileKey) { this.parkSpots.delete(tileKey); this.parkTimer = 0; }

  refreshParked(px, pz) {
    const byType = { car: [], wagon: [], van: [] };
    for (const spots of this.parkSpots.values()) for (const s of spots) {
      if (s.taken) continue;
      const d = Math.hypot(s.x - px, s.z - pz);
      if (d < 520) { s._d = d; byType[s.type].push(s); }
    }
    nextNormal.x = 0; nextNormal.y = 1; nextNormal.z = 0;
    for (const t of Object.keys(byType)) {
      const list = byType[t].sort((a, b) => a._d - b._d), pool = this.parkPools[t];
      for (let i = 0; i < pool.length; i++) {
        const s = list[i];
        if (s) this.parkFleet.setAt(pool[i], s.x, s.z, s.h, s.colour, s.y); else this.parkFleet.setAt(pool[i], FAR, FAR, 0, 0, -100);
      }
    }
  }

  nearestParked(x, z, r) {
    let best = null, bd = r;
    for (const spots of this.parkSpots.values()) for (const s of spots) { if (s.taken) continue; const d = Math.hypot(s.x - x, s.z - z) - s.box.halfW; if (d < bd) { bd = d; best = s; } }
    return best;
  }

  takeParked(s) {
    s.taken = true;
    for (const o of s.objs) this.world.collision.remove(o);
    this.parkTimer = 0;
    return { type: s.type, colour: s.colour, x: s.x, z: s.z, h: s.h };
  }

  // collisione di un cerchio con traffico e auto ferme
  resolveCircle(x, z, r, ignore = null) {
    let best = null;
    const test = (c, moving) => {
      if (c === ignore) return;
      const fx = Math.sin(c.h), fz = Math.cos(c.h), cr = c.box.halfW, span = Math.max(0, c.box.halfL - cr);
      if (Math.abs(c.x - x) > span + cr + r || Math.abs(c.z - z) > span + cr + r) return;
      const n = Math.max(1, Math.ceil(span / cr));
      for (let i = -n; i <= n; i++) {
        const o = span * i / n, cx = c.x + fx * o, cz = c.z + fz * o;
        const dx = x - cx, dz = z - cz, d = Math.hypot(dx, dz);
        if (d < r + cr && (!best || r + cr - d > best.depth)) best = { nx: d > 1e-6 ? dx / d : 1, nz: d > 1e-6 ? dz / d : 0, depth: r + cr - d, car: moving ? c : null };
      }
    };
    for (const c of this.cars) test(c, true);
    for (const s of this.statics) test(s, false);
    return best;
  }
}
