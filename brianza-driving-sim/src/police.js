import * as THREE from 'three';
import { Vehicle } from './vehicle.js';
import { CARS, buildCarModel, stripLights } from './cars.js';
import { AgentDriver } from './agent/driver.js';
import { CLS } from './roads.js';

// Polizia con livello di ricerca (stelle 1-5), senza armi.
//  - Pattuglie che in calma circolano come il resto del traffico (corsia, limiti, semafori,
//    precedenze, distanza di sicurezza; lampeggianti e sirena spenti). Solo con le stelle
//    lasciano la corsia e passano alla guida fisica dell'inseguimento.
//  - Reati: passaggio col rosso o velocita' folle sotto gli occhi di una volante, investire un
//    pedone, speronare una volante, incidenti con il traffico davanti alla polizia.
//  - Inseguimento: le volanti usano la stessa fisica dell'auto del giocatore; da lontano seguono
//    il percorso del navigatore verso l'ultima posizione nota, da vicino puntano dove il giocatore
//    sta andando e cercano di speronarlo. Da 3 stelle: posti di blocco sulla strada davanti.
//  - Arresto: fermo (o chiuso tra due volanti) vicino alla polizia per qualche secondo; poi i
//    comandi restano bloccati un attimo e le volanti tornano in servizio normale. Fuga: nessuna volante ti vede per
//    abbastanza tempo (piu' stelle, piu' tempo).
export const SPEC = { ...(CARS.find((c) => c.id === 'crv') || CARS.find((c) => c.id === 'sedan')), fixedColor: false, name: 'Volante', kw: 200, nm: 430, grip: 1.12, brake: 15500, color: '#1d3d7a' };
// auto in fuga (missione di inseguimento): una compatta veloce
const RUNNER = { ...(CARS.find((c) => c.id === 'accord') || CARS.find((c) => c.id === 'compact')), name: 'Fuggitivo', kw: 150, color: '#c9c9c4' };

// distanza a cui una volante si accorge di un'infrazione (rosso, velocita', speronamento): prima 140 m
const WITNESS_R = 50;
// da ricercato: fin dove una volante ti vede (prima 230 m), sempre con la linea di vista libera
const CHASE_VIEW = 100;

// velocita' massima stimata di un veicolo (potenza alle ruote = resistenza aerodinamica + rotolamento)
const _vmax = new Map();
function vmaxOf(s) {
  if (_vmax.has(s.id)) return _vmax.get(s.id);
  const P = s.kw * 1000 * 0.88, m = s.mass;
  let lo = 5, hi = 120;
  for (let k = 0; k < 40; k++) { const v = (lo + hi) / 2; if (0.5 * 1.2 * s.cda * v * v * v + 0.013 * m * 9.81 * v > P) hi = v; else lo = v; }
  const kmh = Math.min(lo * 3.6, s.rpmMax ? 1e9 : 1e9);
  _vmax.set(s.id, kmh);
  return kmh;
}

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
    this.freeze = 0; this.bustHold = 0;
    this.chasePower = 1; this.chaseKmh = 240;   // fermo dopo l'arresto; tolleranza dell'arresto in corso
  }

  get stars() { return Math.min(5, Math.floor(this.heat)); }

  // Volanti commisurate al veicolo del giocatore (come nei giochi d'inseguimento): con 200 kW la
  // volante batteva ogni auto tranne la coupe' e non c'era modo di seminarla con l'utilitaria.
  //  - potenza: rapporto peso/potenza del giocatore x (0,8 a 1 stella ... 1,05 a 5 stelle)
  //  - velocita' massima voluta: quella del veicolo del giocatore x (0,88 ... 1,02): in rettilineo
  //    si scappa, nel traffico, in curva e ai posti di blocco ti riprendono
  matchPlayer(pv) {
    const s = pv && pv.spec;
    if (!s || !s.kw || pv.isPlane) { this.chasePower = 1; this.chaseKmh = 240; return; }
    const st = Math.max(1, this.stars);
    const up = Math.max(1, pv.powerMul || 1);            // elaborazioni del motore (non i danni)
    const ratio = (s.kw * up / s.mass) / (SPEC.kw / SPEC.mass);
    this.chasePower = Math.max(0.3, Math.min(1.25, ratio * (0.75 + 0.06 * st)));
    this.chaseKmh = vmaxOf(s) * Math.cbrt(up) * (0.85 + 0.035 * st);
  }

  // reato: con quanta forza alza il livello. witnessed: serve una volante vicina che veda
  crime(kind, x, z) {
    if (!this.enabled) return;
    const now = performance.now() / 1000;
    if (this.cool[kind] && now - this.cool[kind] < 4) return;
    const add = { red: 1, speed: 1, ped: 2, ram: 1, crash: 0.6, evade: 1, shots: 1, shootPed: 2, shootCop: 3 }[kind] || 0.5;
    // colpire qualcuno (o una volante) e' sempre denunciato; gli spari si sentono lontano
    const always = kind === 'ped' || kind === 'evade' || kind === 'shootPed' || kind === 'shootCop';
    if (kind === 'shots' && !always && !this.witness(x, z, (this.heat >= 1 ? CHASE_VIEW : WITNESS_R) * 2.5)) return;
    // serve un testimone: entro 50 m se non sei ricercato, entro la vista d'inseguimento se lo sei
    // (prima da ricercato contava tutto e rivelava alla polizia dove eri anche senza vederti)
    if (!always && !this.witness(x, z, this.heat >= 1 ? CHASE_VIEW : WITNESS_R)) return;
    this.cool[kind] = now;
    const before = this.stars;
    this.heat = Math.min(5.99, Math.max(this.heat, 1) + (this.heat >= 1 ? add : add - 1));
    this.lastSeen = [x, z]; this.unseen = 0;
    if (this.stars > before) this.events.push({ type: 'stars', stars: this.stars, kind });
  }

  witness(x, z, r = WITNESS_R) {
    for (const c of this.cars) if (c.mode !== 'runner' && c.mode !== 'caught' && Math.hypot(c.v.x - x, c.v.z - z) < r && this.los(c.v, x, z)) return true;
    return false;
  }

  // linea di vista libera: niente edifici, muri, siepi o recinzioni piu' alti di 1,5 m sopra la
  // volante lungo la linea (campioni ogni 4 m)
  los(v, x, z) {
    const W = this.G.world, d = Math.hypot(x - v.x, z - v.z), n = Math.floor(d / 4);
    for (let i = 1; i < n; i++) {
      const t = i / n, px = v.x + (x - v.x) * t, pz = v.z + (z - v.z) * t;
      const top = W.collision.topAt(px, pz, 0.3);
      if (top > v.y + 1.5) return false;
    }
    return true;
  }

  makeCar(x, z, h, runner = false) {
    const G = this.G, spec = runner ? RUNNER : SPEC, v = new Vehicle(spec, G.world);
    v.place(x, z, h);
    const model = stripLights(buildCarModel(spec, { color: spec.color }));
    if (runner) {
      G.scene.add(model.root);
      const c = { v, model, lamps: [], mode: 'runner', route: null, routeT: 0, routeTo: null, stuck: 0, rev: 0, id: 'run' + Math.random().toString(36).slice(2, 7), hp: 100, goal: null };
      this.cars.push(c);
      return c;
    }
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
    if (c.ta) { this.G.traffic.removeAgent(c.ta); c.ta = null; }
    this.G.scene.remove(c.model.root);
    c.model.root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.cars.splice(this.cars.indexOf(c), 1);
  }

  clear() { for (const c of [...this.cars]) this.remove(c); this.heat = 0; this.bust = 0; this.lastSeen = null; }

  // punto su una strada a distanza d dal giocatore (preferibilmente alle sue spalle e fuori vista)
  spawnPoint(p, d, behind = true, byRoad = false) {
    const R = this.G.roads;
    // all'inseguimento: tra alcuni punti a quella distanza si sceglie quello col percorso stradale piu'
    // corto verso il giocatore (prima una volante a 200 m in linea d'aria poteva averne 1.200 da fare,
    // al di la' di una ferrovia o di un fiume), e la si mette gia' girata nel verso del percorso
    if (byRoad) {
      let best = null;
      for (let t = 0; t < 6; t++) {
        const sp = this.spawnPoint(p, d, behind && t < 3, false);
        if (!sp) continue;
        const r = this.G.router.route(sp.x, sp.z, sp.h, p.x, p.z, { free: true });
        if (!r || r.pts.length < 2) continue;
        const ratio = r.length / Math.max(50, Math.hypot(sp.x - p.x, sp.z - p.z));
        if (!best || ratio < best.ratio) {
          const h = Math.atan2(r.pts[1][0] - r.pts[0][0], r.pts[1][1] - r.pts[0][1]);
          best = { ...sp, h: Number.isFinite(h) ? h : sp.h, ratio, route: r };
        }
        if (best.ratio < 1.35) break;
      }
      if (best && best.ratio < 2.5) return best;
    }
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

  // la volante entra nel traffico: corsia giusta, stesse regole delle altre auto. Vicino al
  // giocatore solo se la corsia e' a pochi metri e nella stessa direzione (niente salti visibili)
  toLane(c, d) {
    const T = this.G.traffic, v = c.v;
    if (!T || !T.addAgent || c.mode === 'runner') return false;
    const a = T.addAgent(v.x, v.z, v.h, { halfL: SPEC.L / 2, halfW: SPEC.W / 2 }, { speed: Math.max(0, v.u), radius: d > 160 ? 40 : 6, mood: 0.97 });
    if (!a) return false;
    let dh = a.h - v.h; while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
    if (d < 160 && (Math.hypot(a.x - v.x, a.z - v.z) > 3.5 || Math.abs(dh) > 0.7)) { T.removeAgent(a); return false; }
    c.ta = a; c.route = null; c.bumpSeen = false;
    return true;
  }

  // esce dal traffico: da qui in poi guida fisica (inseguimento)
  detach(c) {
    const v = c.v, a = c.ta;
    this.G.traffic.removeAgent(a); c.ta = null;
    v.x = a.x; v.z = a.z; v.h = a.h; v.u = a.speed; v.v = 0; v.w = 0; v.gear = 1;
    v.surface = this.G.roads.surfaceAt(v.x, v.z, v.y + 1); v.y = v.surface.h;
    c.route = null; c.stuck = 0; c.rev = 0;
  }

  // la volante nel traffico: posizione e assetto dall'agente, i dettagli (sterzo, ruote, stop) dal moto
  ride(c, dt) {
    const v = c.v, a = c.ta;
    let dh = a.h - v.h; while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
    const w = dt > 0 ? dh / dt : 0, acc = dt > 0 ? (a.speed - v.u) / dt : 0;
    v.x = a.x; v.z = a.z; v.y = a.y; v.h = a.h; v.v = 0; v.w = w; v.airborne = false;
    v.u = a.speed;
    const st = a.speed > 0.8 ? Math.atan(v.L * w / a.speed) : v.steer;
    v.steer += (Math.max(-0.6, Math.min(0.6, st)) - v.steer) * Math.min(1, dt * 6);
    v.pitch += (Math.atan(a.slope || 0) - v.pitch) * Math.min(1, dt * 6);
    v.roll *= 1 - Math.min(1, dt * 4);
    v.dynPitch += (Math.max(-0.04, Math.min(0.04, -acc * 0.006)) - v.dynPitch) * Math.min(1, dt * 5);
    v.dynRoll += (Math.max(-0.05, Math.min(0.05, a.speed * w * 0.008)) - v.dynRoll) * Math.min(1, dt * 5);
    v.brake = acc < -0.8 || (a.speed < 0.3 && a.stuck > 0) ? 1 : 0; v.throttle = acc > 0.2 ? 0.5 : 0;
    v.wheelSpinAngle = (v.wheelSpinAngle || 0) + a.speed * dt / 0.33;
  }

  // percorso stradale verso un punto (navigatore), ricalcolato ogni tanto
  follow(c, tx, tz, dt) {
    const v = c.v;
    c.routeT -= dt;
    if (!c.route || c.route !== c.followRoute || c.routeT <= 0 || !c.routeTo || Math.hypot(c.routeTo[0] - tx, c.routeTo[1] - tz) > 40) {
      c.route = this.G.router.route(v.x, v.z, v.h, tx, tz, c.mode === 'runner' ? null : { free: true });
      c.routeTo = [tx, tz]; c.routeT = 2.5 + Math.random(); c.ri = 0; c.followRoute = c.route;
      // il pilota addestrato (src/agent) guida lungo il percorso
      if (!c.ag) c.ag = new AgentDriver(this.G, v, { pursuit: true });
      c.ag.setRoute(c.route);
    }
    const r = c.route;
    if (!r || r.pts.length < 2) return [tx, tz];
    c.viaRoute = true;
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
    // percorso proprio del binario (quello del navigatore della guida vicina non ha la posizione
    // lungo il percorso: riusarlo dava coordinate non valide e la volante spariva)
    if (!c.route || c.route !== c.railRoute || c.routeT <= 0 || !c.routeTo || Math.hypot(c.routeTo[0] - tx, c.routeTo[1] - tz) > 40) {
      c.route = G.router.route(v.x, v.z, v.h, tx, tz, c.mode === 'runner' ? null : { free: true }); c.routeTo = [tx, tz]; c.routeT = 3 + Math.random(); c.rs = 0; c.railRoute = c.route;
    }
    const r = c.route;
    if (!r || r.pts.length < 2) { this.drive(c, tx, tz, maxKmh, dt); return; }
    // velocita' dal raggio delle curve dei prossimi 80 m (stimato su tratti di almeno 12 m: i
    // vertici ravvicinati del percorso semplificato non sono curve strette), con frenata a 6 m/s2
    let k = 0; while (k < r.cum.length - 2 && r.cum[k + 1] < c.rs) k++;
    let want = maxKmh / 3.6;
    for (let i = k + 1; i < r.pts.length - 1 && r.cum[i] < c.rs + 80; i++) {
      let i0 = i - 1; while (i0 > 0 && r.cum[i] - r.cum[i0] < 12) i0--;
      let i1 = i + 1; while (i1 < r.pts.length - 1 && r.cum[i1] - r.cum[i] < 12) i1++;
      const a1 = Math.atan2(r.pts[i][0] - r.pts[i0][0], r.pts[i][1] - r.pts[i0][1]), a2 = Math.atan2(r.pts[i1][0] - r.pts[i][0], r.pts[i1][1] - r.pts[i][1]);
      let da = a2 - a1; while (da > Math.PI) da -= 2 * Math.PI; while (da < -Math.PI) da += 2 * Math.PI;
      const rad = Math.min(r.cum[i] - r.cum[i0], r.cum[i1] - r.cum[i]) / Math.max(0.02, Math.abs(da)) * 1.2;
      const vc = Math.max(7, Math.sqrt(0.75 * 9.81 * rad));
      want = Math.min(want, Math.sqrt(vc * vc + 2 * 6 * Math.max(0, r.cum[i] - c.rs - 3)));
    }
    const sp = Math.max(0, v.u) + Math.max(-6 * dt, Math.min(4 * dt, want - Math.max(0, v.u)));
    c.rs = Math.min(r.length, c.rs + sp * dt);
    if (c.rs >= r.length - 1) c.goal = null;          // in fondo al percorso: nuova meta (pattuglie, fuggitivi)
    while (k < r.cum.length - 2 && r.cum[k + 1] < c.rs) k++;
    const L = r.cum[k + 1] - r.cum[k] || 1, t = (c.rs - r.cum[k]) / L;
    let x = r.pts[k][0] + (r.pts[k + 1][0] - r.pts[k][0]) * t, z = r.pts[k][1] + (r.pts[k + 1][1] - r.pts[k][1]) * t;
    const h = Math.atan2(r.pts[k + 1][0] - r.pts[k][0], r.pts[k + 1][1] - r.pts[k][1]);
    // agganciata alla corsia vera (il percorso del navigatore e' semplificato: i suoi punti possono
    // cadere fuori dalla carreggiata, contro un muro, e quando si passa alla fisica la volante restava
    // incastrata)
    const nr = G.roads.nearest(x, z, 12, (w) => w.drivable);
    if (nr) {
      const sl = Math.hypot(nr.dx, nr.dz) || 1, dir = (nr.dx * Math.sin(h) + nr.dz * Math.cos(h)) >= 0 ? 1 : -1;
      const off = G.roads.laneCenter(G.roads.ways[nr.wi], dir), fx = nr.dx / sl * dir, fz = nr.dz / sl * dir;
      const lx = nr.px - fz * off, lz = nr.pz + fx * off;
      if (Number.isFinite(lx + lz)) { x = lx; z = lz; }
    }
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
    if (c.rev > 0) { c.rev -= dt; c.viaRoute = false; v.update(dt, { throttle: 0, brake: 1, steer: -Math.sign(err), handbrake: 0, pitch: 0 }); return; }
    if (Math.abs(kmh) < 3 && maxKmh > 10) { c.stuck += dt; if (c.stuck > 1.6) { c.stuck = 0; c.rev = 1.2; c.stuckN = (c.stuckN || 0) + 1; } } else { c.stuck = 0; if (kmh > 20) c.stuckN = 0; }
    // incastrata piu' volte: qualche secondo di scorrimento lungo il percorso (fuori vista) la sblocca
    if ((c.stuckN || 0) >= 3 && c.mode === 'pursuit') { c.stuckN = 0; c.rev = 0; c.railT = 4; c.route = null; }
    // lungo il percorso del navigatore guida il pilota addestrato: corsia, curve, traffico davanti;
    // all'inseguimento (sirena) i semafori non contano e la velocita' e' quella dell'inseguimento
    const via = c.viaRoute; c.viaRoute = false;
    if (via && c.ag && c.ag.ready && maxKmh > 5 && !this.G.agentOff) {
      const G = this.G, gs = c.mode === 'pursuit' && this.seen && !G.foot.on ? Math.max(0, G.vehicle.u) : 0;
      const cmd = c.ag.control(dt, { maxKmh, ignoreSignals: c.mode === 'pursuit' || c.mode === 'runner', pursuit: c.mode === 'pursuit', goalSpeed: gs });
      if (cmd) { c.agentT = (c.agentT || 0) + dt; v.update(dt, cmd); return; }
    }
    let want = maxKmh * Math.max(0.3, 1 - Math.min(0.75, Math.abs(err) * 0.85));
    const tr = c.turn || 0;
    if (tr > 0.35) want = Math.min(want, tr > 1.2 ? 24 : tr > 0.7 ? 38 : 58);
    c.dbg = [Math.round(v.x), Math.round(v.z), Math.round(tx), Math.round(tz), +err.toFixed(2), Math.round(kmh), c.route ? c.route.pts.length : -1, v.surface && v.surface.road ? 'r' : 't', c.rev > 0 ? 'R' : ''];
    // frenata proporzionale all'eccesso di velocita' (prima frenavano tardi e piano)
    const throttle = kmh < want ? Math.min(1, (want - kmh) / 10 + 0.3) : 0, brake = kmh > want + 4 ? Math.min(1, 0.3 + (kmh - want) / 25) : 0;
    v.update(dt, { throttle, brake, steer: Math.max(-1, Math.min(1, err * 2.4)), handbrake: Math.abs(err) > 1.3 && kmh > 35 ? 1 : 0, pitch: 0 });
  }

  // urti tra volanti e auto del giocatore (scambio di quantita' di moto lungo la normale)
  bump(c, pv, any = false) {
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
    if (any) return -vn;
    // speronamento del giocatore: solo se e' lui a muoversi verso la volante (non se e' fermo e lo urtano)
    return Math.abs(pv.u) > 6 && pTowards > cTowards + 1 && pTowards > 4 && -vn > 3 ? -vn : 0;
  }

  update(dt, p, now) {
    const G = this.G;
    const hasRunner = this.cars.some((c) => c.mode === 'runner' || c.mode === 'caught');
    if (!hasRunner && (!this.enabled || G.foot.on && !this.heat)) { for (const c of this.cars) this.place(c, now); if (!this.enabled && G.audio && G.audio.siren) G.audio.siren(0); return; }
    const pv = G.vehicle, px = p.x, pz = p.z;
    const pursuit = this.enabled && this.heat >= 1;
    this.matchPlayer(pv);
    // quante volanti servono
    const want = pursuit ? [0, 2, 3, 4, 5, 6][this.stars] : 2;
    const active = this.cars.filter((c) => c.mode !== 'block' && c.mode !== 'runner' && c.mode !== 'caught');
    this.spawnT -= dt;
    if (this.enabled && active.length < want && this.spawnT <= 0) {
      const sp = this.spawnPoint(p, pursuit ? 170 + Math.random() * 110 : 300 + Math.random() * 200, true, pursuit);
      if (sp) { const c = this.makeCar(sp.x, sp.z, sp.h); c.mode = pursuit ? 'pursuit' : 'patrol'; if (!pursuit && !this.toLane(c, 1e9)) this.remove(c); }
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
        if (c.mode !== 'runner' && c.mode !== 'caught' && d < (pursuit ? CHASE_VIEW : WITNESS_R) && this.los(c.v, px, pz)) { seen = true; break; }
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
      if ((d > 750 && !pursuit) || d > 1100 || !G.world.ready(v.x, v.z) || ((c.stuckN || 0) > 2 && d > 90) || (c.ta && c.ta.stuck > 40 && d > 90)) { this.remove(c); continue; }
      if (c.mode === 'runner' || c.mode === 'caught') {
        if (d > 1500) { this.events.push({ type: 'runnerLost' }); this.remove(c); continue; }
        if (c.mode === 'caught') v.update(dt, { throttle: 0, brake: 1, steer: 0, handbrake: 1, pitch: 0 });
        else {
          // fugge verso un punto lontano dalla parte opposta al giocatore; lo cambia quando ci arriva
          if (!c.goal || Math.hypot(c.goal[0] - v.x, c.goal[1] - v.z) < 60 || Math.hypot(c.goal[0] - px, c.goal[1] - pz) < Math.hypot(c.goal[0] - v.x, c.goal[1] - v.z) - 30) {
            const away = Math.atan2(v.x - px, v.z - pz);
            const sp = this.spawnPoint({ x: v.x, z: v.z, h: away }, 500 + Math.random() * 300, false);
            c.goal = sp ? [sp.x, sp.z] : [v.x + Math.sin(away) * 500, v.z + Math.cos(away) * 500]; c.route = null;
          }
          if (d > 110) this.rail(c, c.goal[0], c.goal[1], 95, dt);
          else { const [tx, tz] = this.follow(c, c.goal[0], c.goal[1], dt); this.drive(c, tx, tz, 105, dt); }
        }
        if (!G.foot.on) {
          const hit = this.bump(c, pv, true);
          if (hit > 2 && c.mode === 'runner') { c.hp -= hit * 3.2; this.events.push({ type: 'runnerHit', hp: Math.max(0, c.hp) }); if (c.hp <= 0) { c.mode = 'caught'; this.events.push({ type: 'runnerCaught' }); } }
        }
        G.fx.fromVehicle(c.id, v, G.weather ? G.weather.wet : 0);
        this.place(c, now);
        continue;
      }
      if (c.mode === 'block') {
        c.block -= dt;
        if (c.block <= 0 && d > 200) { this.remove(c); continue; }
        if (pursuit && d < 25) c.mode = 'pursuit';      // il posto di blocco si mette all'inseguimento
        v.update(dt, { throttle: 0, brake: 1, steer: 0, handbrake: 1, pitch: 0 });
      } else if (pursuit) {
        if (c.ta) this.detach(c);           // stelle: lascia la corsia e parte all'inseguimento
        c.mode = 'pursuit';
        v.powerMul = this.chasePower;
        let tx, tz;
        // a vista ma ancora lontano (oltre 35 m): ci si arriva lungo la strada, guida il pilota addestrato
        c.branch = 'follow';
        if (this.seen && d < 75 && d > 35 && !this.G.agentOff && c.ag && c.ag.ready && this.los(v, px, pz)) {
          // il percorso punta un po' piu' avanti del giocatore (dove sara' tra ~3 s): se finisse su di
          // lui, la rete frenerebbe per "arrivare" mentre lui scappa
          const ahead = G.foot.on ? 0 : Math.max(0, Math.min(110, pv.u * 3));
          [tx, tz] = this.follow(c, px + Math.sin(pv.h) * ahead, pz + Math.cos(pv.h) * ahead, dt);
        }
        else if (this.seen && d < 75 && this.los(v, px, pz)) {
          c.branch = 'intercept';
          // vicino: punta dove il giocatore sara' tra poco (intercetta / speronamento)
          const lead = Math.min(1.2, d / 25);
          tx = px + Math.sin(pv.h) * pv.u * lead; tz = pz + Math.cos(pv.h) * pv.u * lead;
        } else if ((d > 110 || c.railT > 0) && this.lastSeen) { c.branch = 'rail'; c.railT = (c.railT || 0) - dt; this.rail(c, this.lastSeen[0], this.lastSeen[1], Math.min(70 + this.stars * 22 + Math.min(40, d * 0.15), this.chaseKmh), dt); this.place(c, now); continue; }
        else if (this.lastSeen) [tx, tz] = this.follow(c, this.lastSeen[0], this.lastSeen[1], dt);
        else [tx, tz] = [px, pz];
        const fast = Math.min(70 + this.stars * 22 + Math.min(40, d * 0.15), this.chaseKmh);
        // giocatore fermo (o quasi) vicino: la volante accosta e frena, non lo sperona
        // e si avvicina piano: velocita' proporzionale alla distanza (arriva senza tamponarlo)
        const still = G.foot.on || Math.abs(pv.u) < 5;
        // a ridosso di un'auto lenta (sotto i 36 km/h) non la spinge: frena; sperona solo chi va forte
        if ((still && d < (G.foot.on ? 9 : 12)) || (d < 10 && Math.abs(pv.u) < 10)) { c.branch = 'stop'; v.update(dt, { throttle: 0, brake: 1, steer: 0, handbrake: Math.abs(v.u) < 1 ? 1 : 0, pitch: 0 }); }
        else this.drive(c, tx, tz, still ? Math.max(12, Math.min(fast, d * 1.6)) : fast, dt);
      } else {
        // calma: la volante circola come il traffico (corsia, limiti, semafori, precedenze)
        if (!c.ta && (c.laneT = (c.laneT || 0) - dt) <= 0) { c.laneT = 0.5; this.toLane(c, d); }
        if (c.ta) {
          this.ride(c, dt);
          // urtata dal giocatore che le va addosso: speronamento
          if (c.ta.bumped > 2.5 && !c.bumpSeen) { c.bumpSeen = true; if (!G.foot.on && Math.abs(pv.u) > 6) this.crime('ram', px, pz); }
          if (c.ta.bumped <= 0) c.bumpSeen = false;
          this.place(c, now);
          continue;
        }
        // appena finito un inseguimento: rientra con calma verso una strada e poi nel traffico
        if (!c.goal || Math.hypot(c.goal[0] - v.x, c.goal[1] - v.z) < 25 || (c.goalT = (c.goalT || 0) - dt) < 0) {
          const sp = this.spawnPoint({ x: v.x, z: v.z, h: v.h }, 250 + Math.random() * 250, false);
          c.goal = sp ? [sp.x, sp.z] : [px, pz]; c.goalT = 40; c.route = null;
        }
        if (d > 110) { this.rail(c, c.goal[0], c.goal[1], 50, dt); this.place(c, now); continue; }
        const [tx, tz] = this.follow(c, c.goal[0], c.goal[1], dt);
        const w = v.surface && v.surface.road ? G.roads.ways[v.surface.road.wi] : null;
        this.drive(c, tx, tz, (c.calmT = (c.calmT || 0) - dt) > 0 ? 0 : w ? Math.min(50, w.limit) : 30, dt);
      }
      if (!G.foot.on) {
        const ram = this.bump(c, pv);
        if (ram > 0) this.crime('ram', px, pz);
      }
      G.fx.fromVehicle(c.id, v, G.weather ? G.weather.wet : 0);
      this.place(c, now);
    }
    // le volanti non si compenetrano tra loro (separazione semplice a cerchi)
    for (let i = 0; i < this.cars.length; i++) for (let j = i + 1; j < this.cars.length; j++) {
      const A = this.cars[i].v, B = this.cars[j].v, dx = B.x - A.x, dz = B.z - A.z, d = Math.hypot(dx, dz), min = 4.4;
      if (d < min && d > 1e-3 && Math.abs(A.y - B.y) < 2.5) {
        const push = (min - d) / 2 * Math.min(1, 0.6 + Math.abs(Math.sin(A.h - Math.atan2(dx, dz))) * 0.4), nx = dx / d, nz = dz / d;
        A.x -= nx * push; A.z -= nz * push; B.x += nx * push; B.z += nz * push;
        const rel = (B.u * Math.sin(B.h) - A.u * Math.sin(A.h)) * nx + (B.u * Math.cos(B.h) - A.u * Math.cos(A.h)) * nz;
        if (rel < 0) { A.u *= 0.85; B.u *= 0.85; }
      }
    }
    // arresto: fermo vicino a una volante (alla stessa quota: non da un cavalcavia), oppure
    // chiuso tra due volanti che gli impediscono di ripartire anche se sgassa sul posto
    if (pursuit) {
      const py = G.foot.on ? G.foot.y : pv.y;
      let close = 0, closest = 1e9;
      for (const c of this.cars) {
        if (c.mode !== 'pursuit' && c.mode !== 'block') continue;
        const d = Math.hypot(c.v.x - px, c.v.z - pz);
        if (Math.abs(c.v.y - py) > 3.5) continue;
        if (d < 10) close++;
        closest = Math.min(closest, d);
      }
      const sp = G.foot.on ? 0 : Math.abs(pv.u);
      const slow = sp < 2.2, boxed = close >= 2 && sp < 5;
      if ((slow && closest < 14) || boxed) {
        this.bust += dt * (boxed ? 1.5 : 1) * (G.foot.on ? 1.3 : 1);
        this.bustHold = 1.2;                                   // un attimo di tolleranza se si muove
      } else if ((this.bustHold -= dt) <= 0) this.bust = Math.max(0, this.bust - dt * 0.8);
      if (this.bust > 3) {
        this.events.push({ type: 'arrest', stars: this.stars });
        this.heat = 0; this.bust = 0; this.maxStars = 0; this.lastSeen = null;
        this.freeze = 3.5;                                     // comandi bloccati durante il fermo
        for (const c of this.cars) if (c.mode === 'pursuit' || c.mode === 'block') { c.mode = 'patrol'; c.route = null; c.goal = null; c.calmT = 6; }
      }
    } else this.bust = 0;
    if (this.freeze > 0) this.freeze -= dt;
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
    if (m.lamps) {
      const night = this.G.sky.night > 0.5;
      m.lamps.head.emissiveIntensity = night ? 4 : 0.15;
      m.lamps.tail.emissiveIntensity = v.brake > 0.05 ? 4 : night ? 1.5 : 0.4;
    }
    c.lamps.forEach((l, i) => l.color.setHex(on ? ((t + i) % 2 ? 0x2a5cff : 0x050a30) : 0x0a1440));
  }

  // posizioni per la minimappa
  blips() { return this.cars.map((c) => ({ x: c.v.x, z: c.v.z, c: c.mode === 'runner' || c.mode === 'caught' ? '#ff3b30' : this.heat >= 1 ? '#2f6bff' : '#6f8fcf', r: c.mode === 'runner' ? 9 : 7 })); }
}
