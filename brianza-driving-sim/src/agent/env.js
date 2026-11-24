// Ambiente di allenamento del pilota: "da A a B nel traffico, rispettando corsie e semafori".
// Gira dentro il gioco (stessa fisica, stesse strade, stesso traffico, stessi semafori) ma senza
// disegnare: tools/agent/train.mjs lo comanda da Chromium senza schermo.
//
// Episodio: partenza su una via vera, destinazione a 300-1.200 m, percorso del navigatore appoggiato
// sulla corsia di destra delle vie dettagliate (con i semafori lungo il percorso). L'agente decide
// 10 volte al secondo sterzo e gas/freno (-1..1); la fisica avanza a 30 passi al secondo.
//
// Osservazioni (OBS_N numeri, tutti piu' o meno in -1..1, nel sistema dell'auto):
//   velocita', slittamento laterale, imbardata, sterzo attuale;
//   scarto dalla corsia e direzione rispetto al percorso;
//   10 punti del percorso da 3 a 90 m (laterale, avanti);
//   limite di velocita' qui e il piu' basso nei prossimi 100 m;
//   veicolo davanti nella corsia (distanza, velocita' relativa);
//   prossimo semaforo (distanza dalla linea di arresto, rosso/giallo/verde);
//   7 raggi da -60 a +60 gradi contro edifici, muri e veicoli (fino a 40 m);
//   distanza dall'arrivo.
// Ricompensa: metri fatti lungo il percorso; penalita' per scarto dalla corsia, sterzate brusche,
// eccesso di velocita'; -5 (e fine) per urto o uscita di strada; -5 per un rosso bruciato;
// +5 all'arrivo.
// Il "maestro" (teacher) e' il pilota scritto a mano (inseguimento puro del percorso, velocita' per
// le curve, distanza dal veicolo davanti, arresto al rosso): serve per l'imitazione.
import { Vehicle } from '../vehicle.js';
import { signalState } from '../signs.js';
import { NT, CLS } from '../roads.js';

export const OBS_N = 41;
const LOOK = [3, 6, 10, 15, 20, 30, 40, 55, 70, 90];
// inseguimento: accelerazione laterale nelle curve (in g) e frenata prima delle curve (m/s^2)
const PUR_G = 0.55, PUR_DEC = 6;
const RAYS = [-60, -30, -12, 0, 12, 30, 60].map((d) => d * Math.PI / 180);
const STEP = 2;            // passo della polilinea del percorso (m)
const DT = 1 / 30, SUB = 3; // fisica a 30 Hz, decisione a 10 Hz

const wrap = (a) => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);

export class DriveEnv {
  constructor(G, spec, opts = {}) {
    this.G = G; this.R = G.roads; this.W = G.world;
    this.spec = spec;
    this.car = new Vehicle(spec, G.world);
    this.trafficTarget = opts.traffic !== undefined ? opts.traffic : 35;
    this.obs = new Float32Array(OBS_N);
    this.t = 0;
    this.rand = opts.rand || Math.random;
    // inseguimento (volanti con la sirena): niente semafori, niente limiti; la velocita' voluta
    // (vmax, km/h) prende il posto del limite e le curve si fanno al limite dell'aderenza
    this.pursuit = !!opts.pursuit; this.vmax = 50;
  }

  // velocita' massima (m/s) per le curve dei prossimi `ahead` metri: in ogni curva quella da
  // aderenza laterale (g * latG * raggio), prima della curva quanto basta a frenare in tempo (dec)
  curveCap(ahead, latG, dec, from = 4) {
    const P = this.path;
    let vT = 1e9;
    for (let i = Math.max(2, this.i - 2); i < P.x.length - 3 && P.cum[i] < this.s + ahead; i += 2) {
      const a1 = Math.atan2(P.x[i] - P.x[i - 2], P.z[i] - P.z[i - 2]), a2 = Math.atan2(P.x[i + 2] - P.x[i], P.z[i + 2] - P.z[i]);
      const da = Math.abs(wrap(a2 - a1)), rad = (P.cum[i + 2] - P.cum[i - 2]) / Math.max(1e-3, da);
      const vc = Math.max(2.5, Math.sqrt(latG * 9.81 * rad));
      vT = Math.min(vT, Math.sqrt(vc * vc + 2 * dec * Math.max(0, P.cum[i] - this.s - from)));
    }
    return vT;
  }

  // ------------------------------------------------------------------ percorso
  // percorso dal navigatore (rete leggera) riportato sulle vie dettagliate, corsia di destra
  buildPath(route) {
    const R = this.R, src = route.pts, P = [];
    for (let i = 1; i < src.length; i++) {
      const [ax, az] = src[i - 1], [bx, bz] = src[i], L = Math.hypot(bx - ax, bz - az);
      const n = Math.max(1, Math.ceil(L / STEP));
      for (let k = i === 1 ? 0 : 1; k <= n; k++) P.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]);
    }
    const out = { x: [], z: [], wi: [], lim: [], sig: [] };
    const seenSig = new Set();
    for (let i = 0; i < P.length; i++) {
      const a = P[Math.max(0, i - 2)], b = P[Math.min(P.length - 1, i + 2)];
      let tx = b[0] - a[0], tz = b[1] - a[1]; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl;
      // via dettagliata piu' vicina e parallela al senso di marcia
      let best = null, bs = 1e9;
      R.segmentsNear(P[i][0], P[i][1], 12, (wi, k) => {
        const w = R.ways[wi];
        if (!w.drivable || w.cls === CLS.PEDESTRIAN) return;
        const pr = R.projectOnSeg(wi, k, P[i][0], P[i][1]);
        const sl = Math.hypot(pr.dx, pr.dz) || 1, dot = (pr.dx * tx + pr.dz * tz) / sl;
        const score = pr.d + 8 * (1 - Math.abs(dot));
        if (score < bs) { bs = score; best = { wi, k, pr, dot, sl }; }
      });
      let x = P[i][0], z = P[i][1], wi = -1, lim = 50;
      if (best && best.pr.d < 10) {
        const w = R.ways[best.wi], dir = best.dot >= 0 ? 1 : -1;
        const off = R.laneCenter(w, dir);
        // a destra del senso di marcia: (-tz, tx) e' la destra se avanti = (tx, tz)
        x = best.pr.px - tz * off; z = best.pr.pz + tx * off; wi = best.wi; lim = w.limit || 50;
        // semafori sui nodi del segmento
        for (const nd of [w.nodes[best.k], w.nodes[best.k + 1]]) {
          if (R.ntag[nd] !== NT.SIGNALS || seenSig.has(nd)) continue;
          if (Math.hypot(R.nx[nd] - P[i][0], R.nz[nd] - P[i][1]) < 3) { seenSig.add(nd); out.sig.push({ i, group: Math.abs(tx) > Math.abs(tz) ? 1 : 0, node: nd }); }
        }
      }
      out.x.push(x); out.z.push(z); out.wi.push(wi); out.lim.push(lim);
    }
    // curve addolcite (gli incroci del navigatore sono spigoli)
    for (let pass = 0; pass < 8; pass++) {
      const x = out.x.slice(), z = out.z.slice();
      for (let i = 1; i < x.length - 1; i++) { out.x[i] = (x[i - 1] + 2 * x[i] + x[i + 1]) / 4; out.z[i] = (z[i - 1] + 2 * z[i] + z[i + 1]) / 4; }
    }
    out.cum = [0];
    for (let i = 1; i < out.x.length; i++) out.cum.push(out.cum[i - 1] + Math.hypot(out.x[i] - out.x[i - 1], out.z[i] - out.z[i - 1]));
    out.total = out.cum[out.cum.length - 1];
    // svolta piu' stretta (cambio di direzione su 12 m): oltre ~140 gradi e' un'inversione a U
    out.maxTurn = 0;
    for (let i = 3; i < out.x.length - 9; i++) {
      const a1 = Math.atan2(out.x[i] - out.x[i - 3], out.z[i] - out.z[i - 3]), a2 = Math.atan2(out.x[i + 6] - out.x[i + 3], out.z[i + 6] - out.z[i + 3]);
      out.maxTurn = Math.max(out.maxTurn, Math.abs(wrap(a2 - a1)));
    }
    // arresto 6 m prima del nodo del semaforo
    for (const s of out.sig) s.stop = Math.max(0, out.cum[s.i] - 6);
    return out;
  }

  // ------------------------------------------------------------------ episodio
  // cx, cz: centro della zona caricata; r: raggio entro cui scegliere partenza e arrivo
  reset(cx, cz, r = 900) {
    const G = this.G, R = this.R, rnd = this.rand;
    let path = null;
    for (let tries = 0; tries < 40 && !path; tries++) {
      const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * r * 0.7;
      const sx = cx + Math.cos(a) * d, sz = cz + Math.sin(a) * d;
      const st = R.nearest(sx, sz, 80, (w) => w.drivable && w.cls >= (this.pursuit ? CLS.TRUNK : CLS.PRIMARY) && w.cls <= CLS.RESIDENTIAL && !(w.flags & 8));
      if (!st) continue;
      const w = R.ways[st.wi], sl = Math.hypot(st.dx, st.dz) || 1;
      let h = Math.atan2(st.dx / sl, st.dz / sl);
      if (!w.oneway && rnd() < 0.5) h += Math.PI;
      const b = rnd() * Math.PI * 2, dd = this.pursuit ? 400 + rnd() * 1000 : 300 + rnd() * 900;
      let tx = st.px + Math.cos(b) * dd, tz = st.pz + Math.sin(b) * dd;
      if (Math.hypot(tx - cx, tz - cz) > r) { tx = cx + (tx - cx) * r / Math.hypot(tx - cx, tz - cz); tz = cz + (tz - cz) * r / Math.hypot(tx - cx, tz - cz); }
      const route = G.router.route(st.px, st.pz, h, tx, tz);
      if (!route || route.length < 250) continue;
      const p = this.buildPath(route);
      if (p.total < 200 || p.wi.filter((x) => x < 0).length > p.x.length * 0.15 || p.maxTurn > 2.4) continue;
      path = p;
    }
    if (!path) return null;
    this.path = path;
    const car = this.car;
    const h0 = Math.atan2(path.x[3] - path.x[0], path.z[3] - path.z[0]);
    car.place(path.x[0], path.z[0], h0);
    if (this.pursuit) this.vmax = 60 + rnd() * 100;   // 60-160 km/h
    car.u = rnd() < 0.5 ? 0 : this.pursuit ? 6 + rnd() * 8 : 6 + rnd() * 6; car.impact = 0;
    this.i = 0; this.s = 0; this.steps = 0; this.stuck = 0; this.prevSteer = 0;
    this.t = rnd() * 60;                              // fase dei semafori a caso
    this.sigPassed = 0;
    this.stats = { dist: 0, reds: 0, collisions: 0, offroad: 0, success: 0, lat: 0, n: 0, speeding: 0 };
    // traffico attorno: si fa partire e lo si lascia sistemare
    const T = G.traffic;
    T.target = this.trafficTarget;
    T.clear();
    for (let k = 0; k < 40; k++) T.update(0.1, this.player(), this.t);
    this.observe();
    return this.obs;
  }

  player() { const c = this.car; return { x: c.x, z: c.z, h: c.h, u: c.u, wi: c.surface && c.surface.road ? c.surface.road.wi : -1, active: true }; }

  // posizione sul percorso: indice del campione, distanza percorsa, scarto laterale (+ = sinistra)
  locate() {
    const P = this.path, c = this.car;
    let best = this.i, bd = 1e9;
    for (let i = Math.max(0, this.i - 3); i < Math.min(P.x.length - 1, this.i + 25); i++) {
      const ax = P.x[i], az = P.z[i], dx = P.x[i + 1] - ax, dz = P.z[i + 1] - az, L2 = dx * dx + dz * dz || 1e-9;
      let u = ((c.x - ax) * dx + (c.z - az) * dz) / L2; u = clamp(u, 0, 1);
      const d = Math.hypot(c.x - ax - dx * u, c.z - az - dz * u);
      if (d < bd) { bd = d; best = i; this._u = u; }
    }
    this.i = best;
    const i = best, dx = P.x[i + 1] - P.x[i], dz = P.z[i + 1] - P.z[i], L = Math.hypot(dx, dz) || 1;
    this.s = P.cum[i] + this._u * (P.cum[i + 1] - P.cum[i]);
    // lato: prodotto vettoriale (sinistra = (cos h, -sin h) con avanti (sin h, cos h))
    const rx = c.x - P.x[i], rz = c.z - P.z[i];
    this.lat = (rx * dz - rz * dx) / L;      // + = a sinistra del percorso
    this.pathH = Math.atan2(dx, dz);
  }

  // prossimo semaforo lungo il percorso: { d: distanza dalla linea di arresto, state }
  signalAhead() {
    const P = this.path;
    for (const s of P.sig) {
      if (s.stop < this.s - 1) continue;
      const d = s.stop - this.s;
      if (d > 120) return null;
      return { d, state: signalState(s.group, this.t), sig: s };
    }
    return null;
  }

  // veicolo davanti nella corsia: distanza lungo il percorso e velocita'
  leadAhead() {
    const P = this.path, c = this.car, T = this.G.traffic;
    let best = null;
    for (const o of T.cars) {
      const dx = o.x - c.x, dz = o.z - c.z;
      if (dx * dx + dz * dz > 90 * 90) continue;
      // punto del percorso piu' vicino al veicolo, entro i prossimi 90 m
      let bi = -1, bd = 1e9;
      for (let i = this.i; i < Math.min(P.x.length, this.i + 45); i += 1) { const d = Math.hypot(o.x - P.x[i], o.z - P.z[i]); if (d < bd) { bd = d; bi = i; } }
      if (bi < 0 || bd > 2.0) continue;
      const gap = P.cum[bi] - this.s - (o.box ? o.box.halfL : 2.3) - this.spec.L / 2;
      if (gap < -1) continue;
      const ph = Math.atan2(P.x[Math.min(bi + 1, P.x.length - 1)] - P.x[bi], P.z[Math.min(bi + 1, P.x.length - 1)] - P.z[bi]);
      const along = o.speed * Math.cos(wrap(o.h - ph));
      if (!best || gap < best.gap) best = { gap, v: along };
    }
    return best;
  }

  // raggio contro edifici/muri (griglia delle collisioni) e veicoli
  ray(ang, maxD = 40) {
    const c = this.car, col = this.W.collision, a = c.h + ang, fx = Math.sin(a), fz = Math.cos(a);
    let hit = maxD;
    // veicoli: scatole 2D
    for (const o of this.G.traffic.cars) {
      const ox = o.x - c.x, oz = o.z - c.z;
      if (ox * ox + oz * oz > (maxD + 6) * (maxD + 6)) continue;
      const s = Math.sin(o.h), co = Math.cos(o.h), hw = o.box ? o.box.halfW : 1, hl = o.box ? o.box.halfL : 2.3;
      // nel sistema del veicolo: x laterale, z avanti
      const lx = -ox * co + oz * s, lz = -ox * s - oz * co, dx = fx * co - fz * s, dz = fx * s + fz * co;
      let t0 = 0, t1 = hit;
      for (const [p, d, h] of [[lx, dx, hw], [lz, dz, hl]]) {
        if (Math.abs(d) < 1e-9) { if (Math.abs(p) > h) { t0 = 1e9; break; } continue; }
        let ta = (-h - p) / d, tb = (h - p) / d; if (ta > tb) { const q = ta; ta = tb; tb = q; }
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
      }
      if (t0 <= t1 && t0 < hit) hit = t0;
    }
    // ostacoli fissi: si avanza a passi di 1 m
    for (let t = 1; t < hit; t += 1) {
      const x = c.x + fx * t, z = c.z + fz * t;
      const arr = col.grid.get(Math.floor(z / 24) * 100000 + Math.floor(x / 24));
      if (!arr) continue;
      let solid = false;
      for (const o of arr) {
        if (x < o.minx || x > o.maxx || z < o.minz || z > o.maxz) continue;
        if (o.top !== undefined && o.top < c.y + 0.4) continue;
        if (o.ring) { if (inRing(x, z, o.ring)) { solid = true; break; } }
        else if (Math.hypot(x - o.x, z - o.z) < o.r) { solid = true; break; }
      }
      if (solid) { hit = t; break; }
    }
    return hit;
  }

  observe() {
    const c = this.car, P = this.path, o = this.obs, sp = this.spec;
    this.locate();
    let k = 0;
    o[k++] = c.u / 30; o[k++] = clamp(c.v / 5, -1, 1); o[k++] = clamp(c.w / 1.5, -1, 1); o[k++] = clamp(c.steer / sp.steer, -1, 1);
    const he = wrap(c.h - this.pathH);
    o[k++] = clamp(this.lat / 3, -2, 2); o[k++] = Math.sin(he); o[k++] = Math.cos(he);
    // punti del percorso nel sistema dell'auto (laterale: + = sinistra)
    const fx = Math.sin(c.h), fz = Math.cos(c.h), lx = Math.cos(c.h), lz = -Math.sin(c.h);
    let j = this.i;
    for (const d of LOOK) {
      const target = this.s + d;
      while (j < P.x.length - 1 && P.cum[j + 1] < target) j++;
      const jj = Math.min(j, P.x.length - 2), u = clamp((target - P.cum[jj]) / ((P.cum[jj + 1] - P.cum[jj]) || 1), 0, 1);
      const px = P.x[jj] + (P.x[jj + 1] - P.x[jj]) * u - c.x, pz = P.z[jj] + (P.z[jj + 1] - P.z[jj]) * u - c.z;
      o[k++] = clamp((px * lx + pz * lz) / 15, -2, 2); o[k++] = clamp((px * fx + pz * fz) / 90, -1, 1.2);
    }
    // limiti
    let lim0 = P.lim[this.i] || 50, limMin = lim0;
    if (this.pursuit) {
      // all'inseguimento: la velocita' voluta e, al posto del limite piu' basso, quella che le curve
      // dei prossimi 250 m permettono (i punti del percorso arrivano solo a 90 m: troppo poco a 150 km/h)
      lim0 = this.vmax; limMin = Math.min(this.vmax, this.curveCap(250, PUR_G, PUR_DEC) * 3.6);
    } else for (let i = this.i; i < P.x.length && P.cum[i] < this.s + 100; i++) limMin = Math.min(limMin, P.lim[i] || 50);
    o[k++] = lim0 / 130; o[k++] = limMin / 130;
    // veicolo davanti
    const ld = this.leadAhead(); this._lead = ld;
    o[k++] = ld ? clamp(ld.gap / 80, 0, 1) : 1; o[k++] = ld ? clamp((ld.v - c.u) / 20, -1, 1) : 0;
    // semaforo
    const sg = this.signalAhead(); this._sig = sg;
    o[k++] = sg ? clamp(sg.d / 100, 0, 1) : 1; o[k++] = sg ? (sg.state === 'R' ? 1 : sg.state === 'Y' ? 0.5 : 0) : 0;
    // raggi
    for (const a of RAYS) o[k++] = this.ray(a) / 40;
    o[k++] = clamp((P.total - this.s) / 500, 0, 1);
    return o;
  }

  // ------------------------------------------------------------------ maestro
  teacher(out = new Float32Array(2)) {
    const c = this.car, P = this.path, sp = this.spec;
    // inseguimento puro
    const Ld = 4 + Math.abs(c.u) * 0.35;
    let j = this.i; const target = this.s + Ld;
    while (j < P.x.length - 1 && P.cum[j + 1] < target) j++;
    const jj = Math.min(j, P.x.length - 2), u = clamp((target - P.cum[jj]) / ((P.cum[jj + 1] - P.cum[jj]) || 1), 0, 1);
    const tx = P.x[jj] + (P.x[jj + 1] - P.x[jj]) * u, tz = P.z[jj] + (P.z[jj + 1] - P.z[jj]) * u;
    const al = wrap(Math.atan2(tx - c.x, tz - c.z) - c.h);
    out[0] = clamp(Math.atan(2 * c.L * Math.sin(al) / Ld) / sp.steer, -1, 1);
    // velocita' voluta: limite, curve dei prossimi 70 m, veicolo davanti, semaforo, arrivo
    let vT;
    if (this.pursuit) vT = Math.min(this.vmax / 3.6, this.curveCap(250, PUR_G, PUR_DEC));
    else {
      vT = Math.min(P.lim[this.i] || 50, 90) / 3.6 * 0.95;
      // curvatura su tratti di ~8 m, a partire da poco dietro l'auto (anche la curva in cui si e')
      vT = Math.min(vT, this.curveCap(70, 0.38, 3));
      for (let i = this.i; i < P.x.length && P.cum[i] < this.s + 70; i += 2) vT = Math.min(vT, (P.lim[i] || 50) / 3.6 * 0.95 + Math.sqrt(2 * 3 * Math.max(0, P.cum[i] - this.s)));
    }
    const ld = this._lead;
    if (ld) { const want = 5 + c.u * 1.1; vT = Math.min(vT, Math.max(0, ld.v + (ld.gap - want) * 0.5)); if (ld.gap < 4) vT = 0; }
    const sg = this._sig;
    // all'inseguimento il rosso si passa, ma rallentando (50 km/h) per non centrare chi attraversa
    if (sg && this.pursuit) { if (sg.state !== 'G' && sg.d > -2) vT = Math.min(vT, Math.sqrt(13.9 * 13.9 + 2 * PUR_DEC * Math.max(0, sg.d - 2))); }
    else if (sg && (sg.state === 'R' || (sg.state === 'Y' && sg.d > c.u * 1.6))) vT = Math.min(vT, Math.sqrt(2 * 3.2 * Math.max(0, sg.d - 1)));
    const rem = P.total - this.s;
    vT = Math.min(vT, Math.sqrt(2 * (this.pursuit ? 5 : 2.5) * Math.max(0, rem - 2)) + 1);
    let a = clamp((vT - c.u) * 0.6, -1, 1);
    if (vT < 0.3 && c.u < 0.6) a = -0.4;
    out[1] = a;
    return out;
  }

  // ------------------------------------------------------------------ livello di sicurezza
  // Sopra la rete, come nei sistemi di guida veri: se c'e' un rosso (o un giallo a cui si fa in tempo
  // a fermarsi) e la frenata non basta a fermarsi prima della linea, frena quanto serve; frenata
  // d'emergenza se il veicolo davanti e' troppo vicino. Va chiamato dopo observe() (usa _sig e _lead).
  shield(a, opts = {}) {
    const c = this.car, u = Math.max(0, c.u);
    let need = 0;                                     // decelerazione necessaria (m/s^2)
    const sg = this._sig;
    if (sg && !opts.ignoreSignals && (sg.state === 'R' || (sg.state === 'Y' && sg.d > u * 1.6)) && sg.d > -0.5) need = Math.max(need, u * u / (2 * Math.max(0.6, sg.d - 0.5)));
    const ld = this._lead;
    if (ld && ld.gap < 2.5 + u * 0.9 && u > ld.v) { const rel = u - Math.max(0, ld.v); need = Math.max(need, rel * rel / (2 * Math.max(0.5, ld.gap - 1.5)) + 1); }
    if (need > 2.2) { a[1] = Math.min(a[1], -Math.min(1, need / 7)); this.shielded = (this.shielded || 0) + 1; }
    else if (sg && !opts.ignoreSignals && sg.state === 'R' && sg.d < 2 && u < 1) a[1] = Math.min(a[1], -0.4);   // fermi alla linea: si resta fermi
    return a;
  }

  // ------------------------------------------------------------------ passo
  // a: [sterzo, gas(+)/freno(-)] in -1..1. Restituisce { r, done, why }
  step(a) {
    const c = this.car, G = this.G, P = this.path, sp = this.spec;
    const steer = clamp(a[0], -1, 1), acc = clamp(a[1], -1, 1);
    const s0 = this.s;
    let hit = 0;
    for (let k = 0; k < SUB; k++) {
      c.impact = 0;
      c.update(DT, { throttle: Math.max(0, acc), brake: Math.max(0, -acc), steer, handbrake: 0, pitch: 0, analogWheel: true });
      hit = Math.max(hit, c.impact);
      G.traffic.update(DT, this.player(), this.t);
      this.t += DT;
    }
    this.steps++;
    // semaforo prima di muoversi sul percorso: rosso bruciato se si passa la linea con il rosso
    const sgBefore = this._sig;
    this.observe();
    let r = 0.05 * (this.s - s0), done = false, why = '';
    r -= 0.02 * this.lat * this.lat;
    r -= 0.05 * Math.abs(steer - this.prevSteer); this.prevSteer = steer;
    const lim = (this.pursuit ? this.vmax : P.lim[this.i] || 50) / 3.6;
    if (c.u > lim + 2) { r -= 0.03 * (c.u - lim - 2); this.stats.speeding++; }
    if (!this.pursuit && sgBefore && sgBefore.state === 'R' && s0 <= sgBefore.sig.stop + 0.5 && this.s > sgBefore.sig.stop + 0.5 && c.u > 1.5) { r -= 5; this.stats.reds++; }
    // sfregamento (muro sfiorato nelle vie strette): penalita' piccola, si continua
    if (hit > 0.15 && hit < 0.5) { r -= 1; this.stats.scrapes = (this.stats.scrapes || 0) + 1; }
    if (hit >= 0.5) {
      r -= 5; done = true; why = 'urto'; this.stats.collisions++;
      // cosa si e' urtato (per la diagnosi): veicolo vicino o ostacolo fisso
      let nearCar = 1e9; for (const o of G.traffic.cars) nearCar = Math.min(nearCar, Math.hypot(o.x - c.x, o.z - c.z));
      this.stats.hit = { car: nearCar < 6 ? +nearCar.toFixed(1) : null, lat: +this.lat.toFixed(2), u: +c.u.toFixed(1), x: Math.round(c.x), z: Math.round(c.z), rays: Array.from(this.obs.slice(33, 40)).map((v) => +(v * 40).toFixed(1)) };
    }
    else if (Math.abs(this.lat) > 4.5 || !Number.isFinite(c.x + c.z + c.u)) { r -= 5; done = true; why = 'fuori strada'; this.stats.offroad++; this.stats.off = { lat: +this.lat.toFixed(1), u: +c.u.toFixed(1), i: this.i, wi: P.wi[this.i], x: Math.round(c.x), z: Math.round(c.z) }; }
    else if (this.s > P.total - 6) { r += 5; done = true; why = 'arrivo'; this.stats.success = 1; }
    if (c.u < 0.5 && !(this._sig && this._sig.state !== 'G' && this._sig.d < 15) && !(this._lead && this._lead.gap < 12)) this.stuck += 1; else this.stuck = 0;
    // tempo massimo: media di 4 m/s, piu' un minuto per semafori e code
    if (!done && (this.stuck > 200 || this.steps > 600 + P.total / 0.4)) { done = true; why = this.stuck > 200 ? 'fermo' : 'tempo'; this.stats.end = { u: +c.u.toFixed(1), lead: this._lead ? +this._lead.gap.toFixed(1) : null, sig: this._sig ? this._sig.state + Math.round(this._sig.d) : null, rem: Math.round(P.total - this.s) }; }
    this.stats.dist = this.s; this.stats.lat += Math.abs(this.lat); this.stats.n++;
    return { r, done, why };
  }
}

function inRing(x, z, ring) {
  let inside = false;
  for (let i = 0, j = ring.length / 2 - 1; i < ring.length / 2; j = i++) {
    const xi = ring[i * 2], zi = ring[i * 2 + 1], xj = ring[j * 2], zj = ring[j * 2 + 1];
    if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}
