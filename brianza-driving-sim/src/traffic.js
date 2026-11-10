import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { CARS, buildCarModel } from './cars.js';
import { CLS, F, NT } from './roads.js';
import { signalState } from './signs.js';

// Traffico AI: veicoli che percorrono la rete reale nel verso consentito,
// rispettano i limiti, i semafori, le distanze di sicurezza (modello IDM)
// e scelgono a caso la direzione agli incroci.
const COLORS = ['#e8e8e6', '#1b1c1e', '#8d939a', '#c5c8cc', '#24365e', '#7a1515', '#3d4a3a', '#5a5f66', '#f0f0ee', '#2c2c30', '#b0b4b8', '#6b2f1c'];

function bakeModel(spec, color) {
  const m = buildCarModel(spec, { color });
  m.root.updateMatrixWorld(true);
  const geos = [], lightGeos = [];
  m.root.traverse((o) => {
    if (!o.isMesh) return;
    let g = o.geometry.clone().applyMatrix4(o.matrixWorld);
    g = g.index ? g.toNonIndexed() : g;
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
    if (o.material === m.headMat || o.material === m.tailMat) {
      const c = new THREE.Color(o.material === m.headMat ? 0xfff6dd : 0xff2010);
      const col = new Float32Array(g.attributes.position.count * 3);
      for (let i = 0; i < col.length; i += 3) { col[i] = c.r; col[i + 1] = c.g; col[i + 2] = c.b; }
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      lightGeos.push(g);
      return;
    }
    const c = new THREE.Color().copy(o.material.color);
    const col = new Float32Array(g.attributes.position.count * 3);
    for (let i = 0; i < col.length; i += 3) { col[i] = c.r; col[i + 1] = c.g; col[i + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geos.push(g);
  });
  return { body: mergeGeometries(geos), lights: mergeGeometries(lightGeos) };
}

export class Traffic {
  constructor(world) {
    this.world = world; this.R = world.roads;
    this.cars = [];
    this.target = 35;
    this.bodyMat = new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 70, specular: 0x444444 });
    // fascio dei fari a terra (solo di notte)
    const bc = document.createElement('canvas'); bc.width = 32; bc.height = 64;
    const bx = bc.getContext('2d'), bg = bx.createRadialGradient(16, 60, 2, 16, 40, 44);
    bg.addColorStop(0, 'rgba(255,240,200,0.9)'); bg.addColorStop(0.5, 'rgba(255,235,190,0.28)'); bg.addColorStop(1, 'rgba(255,230,180,0)');
    bx.fillStyle = bg; bx.fillRect(0, 0, 32, 64);
    this.beamMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(bc), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0, fog: false, polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -12 });
    this.beamGeo = new THREE.PlaneGeometry(5, 16); this.beamGeo.rotateX(-Math.PI / 2); this.beamGeo.rotateY(Math.PI); this.beamGeo.translate(0, 0.12, 9.5);
    this.lightMat = new THREE.MeshBasicMaterial({ vertexColors: true });
    this.lightMat.color.setScalar(0.35);
    this.variants = [];
    const specs = CARS.filter((c) => c.id !== 'sport');
    let ci = 0;
    for (const s of specs) for (let k = 0; k < 3; k++) {
      const color = s.id === 'van' ? (k ? '#f2f2f0' : '#d8dde2') : COLORS[ci++ % COLORS.length];
      this.variants.push({ spec: s, ...bakeModel(s, color) });
    }
    this.group = new THREE.Group();
    this.spawnTimer = 0;
    this.time = 0;
  }

  setNight(f) { this.lightMat.color.setScalar(0.35 + f * 0.65); this.beamMat.opacity = Math.max(0, f - 0.3) * 0.8; this.beamMat.visible = f > 0.31; }

  clear() { for (const c of this.cars) this.group.remove(c.mesh); this.cars = []; }

  segEnds(c) {
    const w = this.R.ways[c.wi];
    return c.dir > 0 ? [w.nodes[c.k], w.nodes[c.k + 1]] : [w.nodes[c.k + 1], w.nodes[c.k]];
  }

  spawn(px, pz) {
    const R = this.R;
    for (let attempt = 0; attempt < 6; attempt++) {
      const ang = Math.random() * Math.PI * 2, dist = 180 + Math.random() * 480;
      const x = px + Math.cos(ang) * dist, z = pz + Math.sin(ang) * dist;
      const nr = R.nearest(x, z, 70, (w) => w.drivable && w.cls <= CLS.LIVING && !(w.flags & F.PRIVATE));
      if (!nr) continue;
      const w = R.ways[nr.wi];
      const dir = w.oneway ? 1 : (Math.random() < 0.5 ? 1 : -1);
      const segLen = w.cum[nr.k + 1] - w.cum[nr.k];
      const s = (dir > 0 ? nr.t : 1 - nr.t) * segLen;
      if (this.cars.some((c) => Math.hypot(c.x - nr.px, c.z - nr.pz) < 25)) continue;
      const v = this.variants[Math.floor(Math.random() * this.variants.length)];
      const mesh = new THREE.Group();
      const body = new THREE.Mesh(v.body, this.bodyMat); body.castShadow = true;
      mesh.add(body, new THREE.Mesh(v.lights, this.lightMat), new THREE.Mesh(this.beamGeo, this.beamMat));
      const car = { wi: nr.wi, k: nr.k, dir, s, speed: Math.min(w.limit, 50) / 3.6 * 0.7, mesh, spec: v.spec, x: nr.px, z: nr.pz, y: 0, h: 0,
        mood: 0.86 + Math.random() * 0.2, next: null, bumped: 0, stuck: 0 };
      this.chooseNext(car);
      this.cars.push(car);
      this.group.add(mesh);
      this.place(car, 0);
      return;
    }
  }

  // sceglie il prossimo tratto all'arrivo nel nodo finale del segmento corrente
  chooseNext(c) {
    const R = this.R;
    const w = R.ways[c.wi];
    const [, B] = this.segEnds(c);
    const nextK = c.k + c.dir;
    const atEnd = c.dir > 0 ? c.k + 1 === w.nodes.length - 1 : c.k === 0;
    if (!atEnd && R.degree[B] < 3) { c.next = { wi: c.wi, k: nextK, dir: c.dir, turn: 0 }; return; }
    const opts = [];
    const [A] = this.segEnds(c);
    const inAng = Math.atan2(R.nx[B] - R.nx[A], R.nz[B] - R.nz[A]);
    for (let o = R.adjStart[B]; o < R.adjStart[B + 1]; o++) {
      const wi = R.adjWay[o], p = R.adjPos[o], w2 = R.ways[wi];
      if (!w2.drivable || w2.cls > CLS.LIVING || (w2.flags & F.PRIVATE)) continue;
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
    for (const o of opts) { r -= o.wgt; if (r <= 0) { c.next = o; return; } }
    c.next = opts[opts.length - 1];
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
    c.y = R.heightOn(c.wi, c.k, t, x, z);
    c.x = x; c.z = z;
    let th = Math.atan2(dx, dz);
    if (dt === 0) c.h = th;
    let dh = th - c.h; while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
    c.h += dh * Math.min(1, dt * 6);
    c.mesh.position.set(c.x, c.y, c.z);
    c.mesh.rotation.set(0, c.h, 0);
  }

  update(dt, player, time) {
    this.time = time;
    const R = this.R;
    const px = player.x, pz = player.z;
    // rimozione / generazione
    for (let i = this.cars.length - 1; i >= 0; i--) {
      const c = this.cars[i];
      if (Math.hypot(c.x - px, c.z - pz) > 800 || c.stuck > 40) { this.group.remove(c.mesh); this.cars.splice(i, 1); }
    }
    this.spawnTimer -= dt;
    if (this.cars.length < this.target && this.spawnTimer <= 0) { this.spawn(px, pz); this.spawnTimer = 0.15; }

    const pfx = Math.sin(player.h), pfz = Math.cos(player.h);
    for (const c of this.cars) {
      const w = R.ways[c.wi];
      const [A, B] = this.segEnds(c);
      const L = Math.hypot(R.nx[B] - R.nx[A], R.nz[B] - R.nz[A]);
      const remain = L - c.s;
      const fx = Math.sin(c.h), fz = Math.cos(c.h);
      // velocita' desiderata
      let v0 = w.limit / 3.6 * c.mood;
      // curva / svolta al prossimo nodo
      if (c.next && Math.abs(c.next.turn) > 0.35) {
        const vt = Math.abs(c.next.turn) > 1.0 ? 5.5 : 9;
        v0 = Math.min(v0, Math.sqrt(vt * vt + 2 * 2.2 * Math.max(0, remain - 3)));
      }
      // ostacolo piu' vicino davanti (veicoli e giocatore)
      let gap = 1e9, lead = 0;
      const check = (ox, oz, ov, ofx, ofz) => {
        const rx = ox - c.x, rz = oz - c.z;
        const along = rx * fx + rz * fz;
        if (along <= 0 || along > 60) return;
        const lat = Math.abs(rx * fz - rz * fx);
        const same = ofx * fx + ofz * fz;
        if (lat > (same > 0.3 ? 2.0 : 1.4)) return;
        const g = along - 4.6;
        if (g < gap) { gap = g; lead = ov * Math.max(0, same); }
      };
      for (const o of this.cars) if (o !== c) check(o.x, o.z, o.speed, Math.sin(o.h), Math.cos(o.h));
      check(px, pz, Math.max(0, player.u), pfx, pfz);
      // semafori sul nodo finale del segmento
      const sigNode = R.ntag[B] === NT.SIGNALS ? B : (c.next && R.ntag[this.nodeAfter(c)] === NT.SIGNALS && remain < 35 ? -2 : -1);
      if (sigNode !== -1) {
        const dist = sigNode === B ? remain : remain + 20;
        const group = Math.abs(fx) > Math.abs(fz) ? 1 : 0;
        const st = signalState(group, time);
        if ((st === 'R' || (st === 'Y' && dist > 14)) && dist > 1.5) { const g = dist - 3.5; if (g < gap) { gap = Math.max(0.1, g); lead = 0; } }
      }
      if (c.bumped > 0) { c.bumped -= dt; v0 = 0; }
      // IDM
      const a0 = 1.6, b0 = 2.4, s0 = 2.2, T = 1.25;
      const v = c.speed;
      let acc = a0 * (1 - Math.pow(Math.max(0, v) / Math.max(0.1, v0), 4));
      if (gap < 1e8) {
        const ss = s0 + v * T + v * (v - lead) / (2 * Math.sqrt(a0 * b0));
        acc -= a0 * Math.pow(Math.max(0, ss) / Math.max(0.3, gap), 2);
      }
      acc = Math.max(-9, acc);
      c.speed = Math.max(0, v + acc * dt);
      if (c.speed < 0.1) c.stuck += dt; else c.stuck = 0;
      // avanzamento lungo la rete
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
    }
  }

  nodeAfter(c) {
    const n = c.next, w = this.R.ways[n.wi];
    return n.dir > 0 ? w.nodes[n.k + 1] : w.nodes[n.k];
  }

  // collisione giocatore-traffico
  resolveCircle(x, z, r) {
    let best = null;
    for (const c of this.cars) {
      const fx = Math.sin(c.h), fz = Math.cos(c.h);
      const cr = c.spec.W / 2;
      for (const o of [c.spec.L / 2 - cr, -(c.spec.L / 2 - cr)]) {
        const cx = c.x + fx * o, cz = c.z + fz * o;
        const dx = x - cx, dz = z - cz, d = Math.hypot(dx, dz);
        if (d < r + cr && (!best || r + cr - d > best.depth)) best = { nx: d > 1e-6 ? dx / d : 1, nz: d > 1e-6 ? dz / d : 0, depth: r + cr - d, car: c };
      }
    }
    return best;
  }
}
