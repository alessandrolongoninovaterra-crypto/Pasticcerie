import * as THREE from 'three';
import { Vehicle } from './vehicle.js';
import { CARS, buildCarModel } from './cars.js';
import { CLS } from './roads.js';

// Polizia con livello di ricerca (stelle 1-5), senza armi.
//  - Pattuglie che girano per le strade attorno al giocatore.
//  - Reati: passaggio col rosso o velocita' folle sotto gli occhi di una volante, investire un
//    pedone, speronare una volante, incidenti con il traffico davanti alla polizia.
//  - Inseguimento: le volanti usano la stessa fisica dell'auto del giocatore; da lontano seguono
//    il percorso del navigatore verso l'ultima posizione nota, da vicino puntano dove il giocatore
//    sta andando e cercano di speronarlo. Da 3 stelle: posti di blocco sulla strada davanti.
//  - Arresto: fermo vicino a una volante per qualche secondo. Fuga: nessuna volante ti vede per
//    abbastanza tempo (piu' stelle, piu' tempo).
const SPEC = { ...CARS.find((c) => c.id === 'sedan'), name: 'Volante', kw: 200, nm: 430, grip: 1.12, brake: 15500, color: '#1d3d7a' };

export class Police {
  constructor(G) {
    this.G = G;
    this.enabled = true;
    this.cars = [];
    this.heat = 0;              // livello di ricerca (stelle = parte intera)
    this.lastSeen = null;       // ultima posizione nota del giocatore
    this.unseen = 0;            // secondi senza essere visti
    this.bust = 0;              // avanzamento dell'arresto
    this.spawnT = 0; this.blockT = 30; this.seeT = 0; this.cool = {};
    this.events = [];           // 'arrest' | 'escape' | 'stars' per missioni e dialoghi
    this.light = new THREE.PointLight(0x3060ff, 0, 30, 1.6);   // lampeggiante (sempre in scena: niente ricompilazioni)
    G.scene.add(this.light);
    this.maxStars = 0;
  }

  get stars() { return Math.min(5, Math.floor(this.heat)); }

  // reato: con quanta forza alza il livello. witnessed: serve una volante vicina che veda
  crime(kind, x, z) {
    if (!this.enabled) return;
    const now = performance.now() / 1000;
    if (this.cool[kind] && now - this.cool[kind] < 4) return;
    const add = { red: 1, speed: 1, ped: 2, ram: 1, crash: 0.6, evade: 1 }[kind] || 0.5;
    const always = kind === 'ped' || kind === 'evade';
    if (!always && this.heat < 1 && !this.witness(x, z)) return;
    this.cool[kind] = now;
    const before = this.stars;
    this.heat = Math.min(5.99, Math.max(this.heat, 1) + (this.heat >= 1 ? add : add - 1));
    this.lastSeen = [x, z]; this.unseen = 0;
    if (this.stars > before) this.events.push({ type: 'stars', stars: this.stars, kind });
  }

  witness(x, z) {
    for (const c of this.cars) if (Math.hypot(c.v.x - x, c.v.z - z) < 140 && this.los(c.v, x, z)) return true;
    return false;
  }

  // linea di vista: niente edifici in mezzo (campioni ogni 8 m)
  los(v, x, z) {
    const W = this.G.world, d = Math.hypot(x - v.x, z - v.z), n = Math.floor(d / 8);
    for (let i = 1; i < n; i++) {
      const t = i / n, px = v.x + (x - v.x) * t, pz = v.z + (z - v.z) * t;
      const top = W.collision.topAt(px, pz, 0.3);
      if (top > v.y + 4) return false;
    }
    return true;
  }

  makeCar(x, z, h) {
    const G = this.G, v = new Vehicle(SPEC, G.world);
    v.place(x, z, h);
    const model = buildCarModel(SPEC, { color: SPEC.color });
    // fascia bianca e barra luminosa
    const white = new THREE.MeshLambertMaterial({ color: 0xf2f2f2 });
    for (const s of [-1, 1]) { const band = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.22, SPEC.L * 0.78), white); band.position.set(s * SPEC.W * 0.505, SPEC.H * 0.42, 0); model.ext.add(band); }
    const bar = new THREE.Group(); bar.position.set(0, SPEC.H + 0.06, -0.1);
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.1, 0.28), new THREE.MeshLambertMaterial({ color: 0x222222 })); bar.add(base);
    const lamps = [];
    for (const s of [-1, 1]) {
      const m = new THREE.MeshBasicMaterial({ color: 0x2050ff, toneMapped: false });
      const l = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.14, 0.26), m); l.position.set(s * 0.29, 0.1, 0); bar.add(l); lamps.push(m);
    }
    model.ext.add(bar);
    G.scene.add(model.root);
    const c = { v, model, lamps, mode: 'patrol', route: null, routeT: 0, routeTo: null, stuck: 0, rev: 0, id: 'pol' + Math.random().toString(36).slice(2, 7), siren: false, block: null };
    this.cars.push(c);
    return c;
  }

  remove(c) {
    this.G.scene.remove(c.model.root);
    c.model.root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.cars.splice(this.cars.indexOf(c), 1);
  }

  clear() { for (const c of [...this.cars]) this.remove(c); this.heat = 0; this.bust = 0; this.lastSeen = null; }

  // punto su una strada a distanza d dal giocatore (preferibilmente alle sue spalle e fuori vista)
  spawnPoint(p, d, behind = true) {
    const R = this.G.roads;
    for (let t = 0; t < 10; t++) {
      const a = (behind ? p.h + Math.PI : p.h) + (Math.random() - 0.5) * (behind ? 2.2 : 0.6);
      const x = p.x + Math.sin(a) * d, z = p.z + Math.cos(a) * d;
      const nr = R.nearest(x, z, 90, (w) => w.drivable && w.cls <= CLS.RESIDENTIAL && !(w.flags & 12));
      if (!nr || !this.G.world.ready(nr.px, nr.pz)) continue;
      const w = R.ways[nr.wi], A = w.nodes[nr.k], B = w.nodes[nr.k + 1];
      let h = Math.atan2(R.nx[B] - R.nx[A], R.nz[B] - R.nz[A]);
      if (!w.oneway && Math.cos(Math.atan2(p.x - nr.px, p.z - nr.pz) - h) < 0) h += Math.PI;
      return { x: nr.px, z: nr.pz, h, w, nr };
    }
    return null;
  }

  // percorso stradale verso un punto (navigatore), ricalcolato ogni tanto
  follow(c, tx, tz, dt) {
    const v = c.v;
    c.routeT -= dt;
    if (!c.route || c.routeT <= 0 || !c.routeTo || Math.hypot(c.routeTo[0] - tx, c.routeTo[1] - tz) > 40) {
      c.route = this.G.router.route(v.x, v.z, v.h, tx, tz);
      c.routeTo = [tx, tz]; c.routeT = 2.5 + Math.random(); c.ri = 0;
    }
    const r = c.route;
    if (!r || r.pts.length < 2) return [tx, tz];
    // avanzamento lungo il percorso (solo in avanti: dove il percorso ripassa vicino a se'
    // stesso il punto piu' vicino in assoluto farebbe tornare indietro)
    let best = c.ri || 0, bd = 1e9;
    for (let i = best; i < Math.min(r.pts.length, best + 14); i++) { const d = Math.hypot(r.pts[i][0] - v.x, r.pts[i][1] - v.z); if (d < bd) { bd = d; best = i; } }
    c.ri = best;
    // curva piu' stretta nei prossimi 45 m: serve per rallentare prima
    let turn = 0, acc0 = 0, prevA = null;
    for (let i = best; i < r.pts.length - 1 && acc0 < 45; i++) {
      const dx = r.pts[i + 1][0] - r.pts[i][0], dz = r.pts[i + 1][1] - r.pts[i][1], L = Math.hypot(dx, dz);
      if (L < 0.5) continue;
      const a = Math.atan2(dx, dz);
      if (prevA !== null) { let d = a - prevA; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; turn = Math.max(turn, Math.abs(d)); }
      prevA = a; acc0 += L;
    }
    c.turn = turn;
    const look = 7 + Math.abs(v.u) * 0.45;
    let acc = 0, pt = r.pts[r.pts.length - 1];
    for (let i = best; i < r.pts.length - 1; i++) {
      const L = Math.hypot(r.pts[i + 1][0] - r.pts[i][0], r.pts[i + 1][1] - r.pts[i][1]);
      if (acc + L >= look) { const t = (look - acc) / L; pt = [r.pts[i][0] + (r.pts[i + 1][0] - r.pts[i][0]) * t, r.pts[i][1] + (r.pts[i + 1][1] - r.pts[i][1]) * t]; break; }
      acc += L;
    }
    // il percorso del navigatore e' semplificato: il punto si riporta sulla carreggiata vera
    const nr = this.G.roads.nearest(pt[0], pt[1], 12, (w) => w.drivable);
    return nr ? [nr.px, nr.pz] : pt;
  }

  // lontano dal giocatore: la volante scorre lungo il percorso stradale (niente fisica, niente
  // incastri negli svincoli); vicino si passa alla fisica vera
  rail(c, tx, tz, maxKmh, dt) {
    const v = c.v, G = this.G;
    c.routeT -= dt;
    if (!c.route || c.routeT <= 0 || !c.routeTo || Math.hypot(c.routeTo[0] - tx, c.routeTo[1] - tz) > 40) {
      c.route = G.router.route(v.x, v.z, v.h, tx, tz); c.routeTo = [tx, tz]; c.routeT = 3 + Math.random(); c.rs = 0;
    }
    const r = c.route;
    if (!r || r.pts.length < 2) { this.drive(c, tx, tz, maxKmh, dt); return; }
    // curva nei prossimi 40 m -> velocita'
    let k = 0; while (k < r.cum.length - 2 && r.cum[k + 1] < c.rs) k++;
    let turn = 0;
    for (let i = k; i < r.pts.length - 2 && r.cum[i] < c.rs + 40; i++) {
      const a1 = Math.atan2(r.pts[i + 1][0] - r.pts[i][0], r.pts[i + 1][1] - r.pts[i][1]), a2 = Math.atan2(r.pts[i + 2][0] - r.pts[i + 1][0], r.pts[i + 2][1] - r.pts[i + 1][1]);
      let d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; turn = Math.max(turn, Math.abs(d));
    }
    const want = Math.min(maxKmh, turn > 1.2 ? 30 : turn > 0.6 ? 45 : turn > 0.3 ? 65 : maxKmh) / 3.6;
    const sp = Math.max(0, v.u) + Math.max(-6 * dt, Math.min(4 * dt, want - Math.max(0, v.u)));
    c.rs = Math.min(r.length, c.rs + sp * dt);
    while (k < r.cum.length - 2 && r.cum[k + 1] < c.rs) k++;
    const L = r.cum[k + 1] - r.cum[k] || 1, t = (c.rs - r.cum[k]) / L;
    const x = r.pts[k][0] + (r.pts[k + 1][0] - r.pts[k][0]) * t, z = r.pts[k][1] + (r.pts[k + 1][1] - r.pts[k][1]) * t;
    const h = Math.atan2(r.pts[k + 1][0] - r.pts[k][0], r.pts[k + 1][1] - r.pts[k][1]);
    let dh = h - v.h; while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
    v.x = x; v.z = z; v.h += dh * Math.min(1, dt * 6); v.u = sp; v.v = 0; v.w = 0;
    const sf = G.roads.surfaceAt(x, z, v.y + 1, v.surface && v.surface.road ? v.surface.road.wi : -1);
    v.y = sf.h; v.surface = sf; v.airborne = false;
    v.wheelSpinAngle = (v.wheelSpinAngle || 0) + sp * dt / 0.33;
  }

  // guida verso un punto: sterzo proporzionale, velocita' ridotta nelle curve strette
  drive(c, tx, tz, maxKmh, dt) {
    const v = c.v;
    let err = Math.atan2(tx - v.x, tz - v.z) - v.h;
    while (err > Math.PI) err -= 2 * Math.PI; while (err < -Math.PI) err += 2 * Math.PI;
    const kmh = v.u * 3.6;
    // bloccata contro qualcosa: retromarcia sterzando al contrario
    if (c.rev > 0) { c.rev -= dt; v.update(dt, { throttle: 0, brake: 1, steer: -Math.sign(err), handbrake: 0, pitch: 0 }); return; }
    if (Math.abs(kmh) < 3 && maxKmh > 10) { c.stuck += dt; if (c.stuck > 1.6) { c.stuck = 0; c.rev = 1.2; c.stuckN = (c.stuckN || 0) + 1; } } else { c.stuck = 0; if (kmh > 20) c.stuckN = 0; }
    let want = maxKmh * Math.max(0.3, 1 - Math.min(0.75, Math.abs(err) * 0.85));
    const tr = c.turn || 0;
    if (tr > 0.35) want = Math.min(want, tr > 1.2 ? 24 : tr > 0.7 ? 38 : 58);
    c.dbg = [Math.round(v.x), Math.round(v.z), Math.round(tx), Math.round(tz), +err.toFixed(2), Math.round(kmh), c.route ? c.route.pts.length : -1, v.surface && v.surface.road ? 'r' : 't', c.rev > 0 ? 'R' : ''];
    const throttle = kmh < want ? 1 : 0, brake = kmh > want + 12 ? 0.7 : 0;
    v.update(dt, { throttle, brake, steer: Math.max(-1, Math.min(1, err * 2.4)), handbrake: Math.abs(err) > 1.3 && kmh > 35 ? 1 : 0, pitch: 0 });
  }

  // urti tra volanti e auto del giocatore (scambio di quantita' di moto lungo la normale)
  bump(c, pv) {
    const v = c.v, rP = (pv.spec.W || 1.8) / 2, rC = SPEC.W / 2;
    const pts = (q, r, L) => { const fx = Math.sin(q.h), fz = Math.cos(q.h), s = L / 2 - r; return [[q.x + fx * s, q.z + fz * s], [q.x, q.z], [q.x - fx * s, q.z - fz * s]]; };
    let hit = null;
    for (const [ax, az] of pts(pv, rP, pv.spec.L || 4.3)) for (const [bx, bz] of pts(v, rC, SPEC.L)) {
      const dx = ax - bx, dz = az - bz, d = Math.hypot(dx, dz);
      if (d < rP + rC && (!hit || rP + rC - d > hit.depth)) hit = { nx: d > 1e-6 ? dx / d : 1, nz: d > 1e-6 ? dz / d : 0, depth: rP + rC - d };
    }
    if (!hit || Math.abs(pv.y - v.y) > 2.5) return 0;
    pv.x += hit.nx * hit.depth / 2; pv.z += hit.nz * hit.depth / 2; v.x -= hit.nx * hit.depth / 2; v.z -= hit.nz * hit.depth / 2;
    const wv = (q) => [Math.sin(q.h) * q.u + Math.cos(q.h) * q.v, Math.cos(q.h) * q.u - Math.sin(q.h) * q.v];
    const set = (q, vx, vz) => { q.u = vx * Math.sin(q.h) + vz * Math.cos(q.h); q.v = vx * Math.cos(q.h) - vz * Math.sin(q.h); };
    const [pvx, pvz] = wv(pv), [cvx, cvz] = wv(v);
    const vn = (pvx - cvx) * hit.nx + (pvz - cvz) * hit.nz;
    if (vn >= 0) return 0;
    const mp = pv.m || 1300, mc = v.m, j = -(1.3) * vn / (1 / mp + 1 / mc);
    set(pv, pvx + j / mp * hit.nx, pvz + j / mp * hit.nz);
    set(v, cvx - j / mc * hit.nx, cvz - j / mc * hit.nz);
    pv.impact = Math.max(pv.impact || 0, Math.min(1, -vn / 12));
    pv.w += (Math.random() - 0.5) * Math.min(1.5, -vn * 0.08);
    // chi ha urtato chi: se il giocatore andava verso la volante, e' speronamento
    const pTowards = -(pvx * hit.nx + pvz * hit.nz), cTowards = cvx * hit.nx + cvz * hit.nz;
    return pTowards > cTowards + 1 && -vn > 3 ? -vn : 0;
  }

  update(dt, p, now) {
    const G = this.G;
    if (!this.enabled || G.foot.on && !this.heat) { for (const c of this.cars) this.place(c, now); return; }
    const pv = G.vehicle, px = p.x, pz = p.z;
    const pursuit = this.heat >= 1;
    // quante volanti servono
    const want = pursuit ? [0, 2, 3, 4, 5, 6][this.stars] : 2;
    const active = this.cars.filter((c) => c.mode !== 'block');
    this.spawnT -= dt;
    if (active.length < want && this.spawnT <= 0) {
      const sp = this.spawnPoint(p, pursuit ? 170 + Math.random() * 110 : 300 + Math.random() * 200, true);
      if (sp) { const c = this.makeCar(sp.x, sp.z, sp.h); c.mode = pursuit ? 'pursuit' : 'patrol'; }
      this.spawnT = pursuit ? 3 : 6;
    }
    // posto di blocco davanti al giocatore (da 3 stelle)
    this.blockT -= dt;
    if (pursuit && this.stars >= 3 && this.blockT <= 0 && Math.abs(pv.u) > 12 && !G.foot.on) {
      this.blockT = 35;
      const sp = this.spawnPoint(p, 260 + Math.random() * 80, false);
      if (sp && Math.hypot(sp.x - px, sp.z - pz) > 180) {
        const w = sp.w, half = Math.min(w.width / 2, 4);
        for (const s of [-1, 1]) {
          const ox = Math.cos(sp.h) * s * half * 0.55, oz = -Math.sin(sp.h) * s * half * 0.55;
          const c = this.makeCar(sp.x + ox, sp.z + oz, sp.h + Math.PI / 2 * s);
          c.mode = 'block'; c.block = 60;
        }
        this.events.push({ type: 'roadblock' });
      }
    }
    // vista: almeno una volante vicina con linea di vista
    this.seeT -= dt;
    if (this.seeT <= 0) {
      this.seeT = 0.3;
      let seen = false;
      for (const c of this.cars) {
        const d = Math.hypot(c.v.x - px, c.v.z - pz);
        if (d < (pursuit ? 230 : 140) && this.los(c.v, px, pz)) { seen = true; break; }
      }
      this.seen = seen;
    }
    if (pursuit) {
      if (this.seen) { this.lastSeen = [px, pz]; this.unseen = 0; this.heat = Math.min(5.99, this.heat + dt * 0.012); }
      else {
        // si conta il tempo da "seminati" solo se il giocatore si e' allontanato dall'ultimo
        // avvistamento o se una volante e' gia' arrivata li' senza trovarlo
        const away = this.lastSeen && Math.hypot(px - this.lastSeen[0], pz - this.lastSeen[1]) > 80;
        const searched = this.lastSeen && this.cars.some((c) => Math.hypot(c.v.x - this.lastSeen[0], c.v.z - this.lastSeen[1]) < 45);
        if (away || searched) this.unseen += dt;
        if (searched && !away && this.unseen > 3) { this.lastSeen = [px, pz]; }   // cercano attorno: lo ritrovano se e' li'
        if (this.unseen > 10 + this.stars * 5) {          // seminati
          this.events.push({ type: 'escape', stars: this.stars });
          this.maxStars = 0; this.heat = 0; this.bust = 0;
          for (const c of this.cars) if (c.mode === 'pursuit') { c.mode = 'patrol'; c.route = null; }
        }
      }
      this.maxStars = Math.max(this.maxStars, this.stars);
    }
    // guida delle volanti
    let nearest = 1e9, nearC = null;
    for (const c of [...this.cars]) {
      const v = c.v, d = Math.hypot(v.x - px, v.z - pz);
      if (d < nearest) { nearest = d; nearC = c; }
      if ((d > 750 && !pursuit) || d > 1100 || !G.world.ready(v.x, v.z) || ((c.stuckN || 0) > 2 && d > 90)) { this.remove(c); continue; }
      if (c.mode === 'block') {
        c.block -= dt;
        if (c.block <= 0 && d > 200) { this.remove(c); continue; }
        if (pursuit && d < 25) c.mode = 'pursuit';      // il posto di blocco si mette all'inseguimento
        v.update(dt, { throttle: 0, brake: 1, steer: 0, handbrake: 1, pitch: 0 });
      } else if (pursuit) {
        c.mode = 'pursuit';
        let tx, tz;
        if (this.seen && d < 75 && this.los(v, px, pz)) {
          // vicino: punta dove il giocatore sara' tra poco (intercetta / speronamento)
          const lead = Math.min(1.2, d / 25);
          tx = px + Math.sin(pv.h) * pv.u * lead; tz = pz + Math.cos(pv.h) * pv.u * lead;
        } else if (d > 110 && this.lastSeen) { this.rail(c, this.lastSeen[0], this.lastSeen[1], 80 + this.stars * 12, dt); this.place(c, now); continue; }
        else if (this.lastSeen) [tx, tz] = this.follow(c, this.lastSeen[0], this.lastSeen[1], dt);
        else [tx, tz] = [px, pz];
        const fast = 70 + this.stars * 22 + Math.min(40, d * 0.15);
        this.drive(c, tx, tz, fast, dt);
      } else {
        // pattuglia: giro verso un punto a caso
        if (!c.goal || Math.hypot(c.goal[0] - v.x, c.goal[1] - v.z) < 25 || (c.goalT = (c.goalT || 0) - dt) < 0) {
          const sp = this.spawnPoint({ x: v.x, z: v.z, h: v.h }, 250 + Math.random() * 250, false);
          c.goal = sp ? [sp.x, sp.z] : [px, pz]; c.goalT = 40; c.route = null;
        }
        if (d > 110) { this.rail(c, c.goal[0], c.goal[1], 50, dt); this.place(c, now); continue; }
        const [tx, tz] = this.follow(c, c.goal[0], c.goal[1], dt);
        const w = v.surface && v.surface.road ? G.roads.ways[v.surface.road.wi] : null;
        this.drive(c, tx, tz, w ? Math.min(70, w.limit) : 40, dt);
      }
      if (!G.foot.on) {
        const ram = this.bump(c, pv);
        if (ram > 0) this.crime('ram', px, pz);
      }
      G.fx.fromVehicle(c.id, v, G.weather ? G.weather.wet : 0);
      this.place(c, now);
    }
    // arresto: fermo vicino a una volante
    if (pursuit) {
      const slow = G.foot.on || Math.abs(pv.u) < 2.2;
      if (slow && nearest < 9) this.bust += dt; else this.bust = Math.max(0, this.bust - dt * 1.5);
      if (this.bust > 3) {
        this.events.push({ type: 'arrest', stars: this.stars });
        this.heat = 0; this.bust = 0; this.maxStars = 0;
        for (const c of this.cars) if (c.mode === 'pursuit') { c.mode = 'patrol'; c.route = null; }
      }
    } else this.bust = 0;
    // lampeggiante sulla volante piu' vicina (luce vera di notte) e sirena
    const flash = Math.floor(now / 1000 * 6) % 2;
    this.light.intensity = 0;
    if (nearC && (pursuit || nearC.mode === 'block')) {
      this.light.position.set(nearC.v.x, nearC.v.y + 2.2, nearC.v.z);
      this.light.color.setHex(flash ? 0x2050ff : 0x4070ff);
      this.light.intensity = (G.sky.night > 0.3 ? 40 : 0) * (flash ? 1 : 0.2);
    }
    if (G.audio && G.audio.siren) G.audio.siren(pursuit ? Math.max(0, 1 - nearest / 450) : 0);
    this.nearest = nearest;
  }

  // posizione del modello e lampeggianti
  place(c, now) {
    const v = c.v, m = c.model, on = this.heat >= 1 || c.mode === 'block';
    m.root.position.set(v.x, v.y, v.z);
    m.root.rotation.set(-(v.pitch + v.dynPitch), v.h, v.roll + v.dynRoll, 'YXZ');
    for (const w of m.wheels) { w.pivot.rotation.x = v.wheelSpinAngle || 0; if (w.front) w.pivot.rotation.y = v.steer; }
    const t = Math.floor(now / 1000 * 6 + (c.id.charCodeAt(4) % 2));
    c.lamps.forEach((l, i) => l.color.setHex(on ? ((t + i) % 2 ? 0x2a5cff : 0x050a30) : 0x0a1440));
  }

  // posizioni per la minimappa
  blips() { return this.cars.map((c) => ({ x: c.v.x, z: c.v.z, c: this.heat >= 1 ? '#2f6bff' : '#6f8fcf', r: 7 })); }
}
