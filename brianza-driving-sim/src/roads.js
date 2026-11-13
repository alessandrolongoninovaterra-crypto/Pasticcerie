import * as THREE from 'three';
import { GeoBuilder, canvasTexture, hash } from './geo.js';
import { buildFence, fenceMaterials } from './gates.js';

// Classi stradali (come tools/build_data.py)
export const CLS = { MOTORWAY: 0, TRUNK: 1, PRIMARY: 2, SECONDARY: 3, TERTIARY: 4, UNCLASSIFIED: 5, RESIDENTIAL: 6, LIVING: 7, SERVICE: 8, TRACK: 9, PEDESTRIAN: 10 };
export const F = { ONEWAY: 1, ROUNDABOUT: 2, BRIDGE: 4, TUNNEL: 8, LINK: 16, PRIVATE: 32, UNPAVED: 64, NOCAR: 128, OVERPASS: 256, AISLE: 512 };
export const NT = { GATE: 14, SIGNALS: 1, STOP: 2, GIVE_WAY: 3, CROSSING: 4, MINI_RB: 5, LEVEL_CROSSING: 6, BUMP: 7, CROSSING_SIGNALS: 10, TABLE: 11, TURNING: 12, JUNCTION: 13 };
export const CLASS_NAMES = ['Autostrada', 'Superstrada', 'Strada principale', 'Strada secondaria', 'Strada terziaria', 'Strada locale', 'Strada residenziale', 'Zona residenziale', 'Strada di servizio', 'Strada sterrata', 'Area pedonale'];

const LIFT = 0.18;          // sollevamento della carreggiata sul terreno (m)
const CELL = 32;            // cella dell'indice spaziale (m)
const LANE_W = [3.75, 3.6, 3.5, 3.3, 3.1, 2.9, 2.8, 2.6, 2.5, 2.5, 3];
const ROAD_COL = [[0.5, 0.5, 0.52], [0.52, 0.52, 0.54], [0.55, 0.55, 0.57], [0.57, 0.57, 0.58], [0.6, 0.6, 0.6], [0.62, 0.62, 0.62], [0.64, 0.64, 0.64], [0.68, 0.66, 0.63], [0.66, 0.66, 0.66], [0.9, 0.85, 0.75], [1, 1, 1]];
const SW_W = 1.6, SW_H = 0.13; // marciapiede

// celle dell'atlante dei simboli dipinti sull'asfalto (griglia 4x4)
const DECAL = { through: [0, 0], left: [1, 0], right: [2, 0], 'left;through': [3, 0], 'right;through': [0, 1], 'left;right': [1, 1], stop: [2, 1, 2], bike: [0, 2], tri: [1, 2] };
export function decalUV(name) {
  const c = DECAL[name]; if (!c) return null;
  const w = (c[2] || 1) / 4;
  return [c[0] / 4, 1 - (c[1] + 1) / 4, c[0] / 4 + w, 1 - c[1] / 4]; // u0, v0, u1, v1
}

export class RoadNetwork {
  // La rete si costruisce a pezzi. Ogni tessera di terreno porta le vie che la toccano (con tutti
  // i loro nodi) gia' preparate dalla pipeline: curve morbide, larghezze, limiti, profilo di quota.
  // Una via condivisa da piu' tessere si aggiunge una volta sola (id globale). I dati restano
  // anche quando la tessera viene scaricata: la memoria cresce con la zona esplorata, non con la
  // dimensione della mappa. Lo stesso contenitore, con le sole strade carrabili semplificate,
  // fa da rete del navigatore (addNav).
  constructor(meta, terrain, cell = CELL) {
    this.terrain = terrain;
    const p = meta.proj;
    this.xmin = p.xmin; this.zmin = p.zmin; this.xmax = p.xmax; this.zmax = p.zmax;
    this.tileSize = meta.tile;
    this.cell = cell;
    this.ways = []; this.wayId = new Map(); this.nodeId = new Map();
    this.nodeCount = 0; this.cap = 0; this.adjN = 0; this.adjCap = 0;
    this.junctionNames = new Map();
    this.grid = new Map(); this.tileSegs = new Map();
    this.rails = []; this.railId = new Map(); this.tileRails = new Map();
    this.roundabouts = [];
    this.tilesIn = new Set();
    this.growNodes(4096); this.growAdj(8192);
  }

  growNodes(min) {
    const cap = Math.max(this.cap * 2, min);
    for (const k of ['nx', 'nz', 'dh', 'w1', 'w2', 'm1', 'm2']) { const a = new Float32Array(cap); if (this[k]) a.set(this[k]); this[k] = a; }
    for (const k of ['ntag', 'ndir', 'degree', 'degMain', 'onRb']) { const a = new Uint8Array(cap); if (this[k]) a.set(this[k]); this[k] = a; }
    for (const k of ['adjHead', 'adjTail']) { const a = new Int32Array(cap).fill(-1); if (this[k]) a.set(this[k]); this[k] = a; }
    this.cap = cap;
  }

  growAdj(min) {
    const cap = Math.max(this.adjCap * 2, min);
    for (const k of ['adjNext', 'adjWay', 'adjPos']) { const a = new Int32Array(cap); if (this[k]) a.set(this[k]); this[k] = a; }
    this.adjCap = cap;
  }

  // nodo con id globale g (lo crea se manca); restituisce l'indice locale
  node(g, x, z) {
    let n = this.nodeId.get(g);
    if (n !== undefined) return n;
    if (this.nodeCount >= this.cap) this.growNodes(this.nodeCount + 1);
    n = this.nodeCount++;
    this.nodeId.set(g, n);
    this.nx[n] = x; this.nz[n] = z;
    return n;
  }

  // collega una via appena aggiunta: adiacenza, gradi dei nodi, indice spaziale, tessere
  linkWay(wi, nav = false) {
    const w = this.ways[wi], nn = w.nodes.length;
    const n = w.nodes;
    w.cum = new Float32Array(nn);
    for (let k = 1; k < nn; k++) w.cum[k] = w.cum[k - 1] + Math.hypot(this.nx[n[k]] - this.nx[n[k - 1]], this.nz[n[k]] - this.nz[n[k - 1]]);
    w.len = w.cum[nn - 1];
    w.oneway = !!(w.flags & F.ONEWAY);
    w.drivable = !(w.flags & F.NOCAR);
    w.abs = !!(w.flags & (F.BRIDGE | F.TUNNEL));
    const main = w.cls <= CLS.LIVING && w.drivable;
    for (let k = 0; k < nn; k++) {
      const nd = n[k];
      // le vie gia' presenti nel nodo devono ricalcolare le zone d'incrocio
      if (!nav) for (let o = this.adjHead[nd]; o >= 0; o = this.adjNext[o]) this.ways[this.adjWay[o]].zn = null;
      if (this.adjN >= this.adjCap) this.growAdj(this.adjN + 1);
      const o = this.adjN++;
      this.adjWay[o] = wi; this.adjPos[o] = k; this.adjNext[o] = -1;
      if (this.adjTail[nd] >= 0) this.adjNext[this.adjTail[nd]] = o; else this.adjHead[nd] = o;
      this.adjTail[nd] = o;
      const d = (k > 0 ? 1 : 0) + (k < nn - 1 ? 1 : 0);
      this.degree[nd] += d;
      if (main) this.degMain[nd] += d;
      if (w.width > this.w1[nd]) { this.w2[nd] = this.w1[nd]; this.w1[nd] = w.width; } else if (w.width > this.w2[nd]) this.w2[nd] = w.width;
      if (main) { if (w.width > this.m1[nd]) { this.m2[nd] = this.m1[nd]; this.m1[nd] = w.width; } else if (w.width > this.m2[nd]) this.m2[nd] = w.width; }
      if (w.flags & F.ROUNDABOUT) this.onRb[nd] = 1;
    }
    const hw = w.width / 2 + 1, C = this.cell;
    for (let k = 0; k < nn - 1; k++) {
      const a = n[k], b = n[k + 1];
      const ax = this.nx[a], az = this.nz[a], bx = this.nx[b], bz = this.nz[b];
      const packed = wi * 16384 + k;
      const i0 = Math.floor((Math.min(ax, bx) - hw - this.xmin) / C), i1 = Math.floor((Math.max(ax, bx) + hw - this.xmin) / C);
      const j0 = Math.floor((Math.min(az, bz) - hw - this.zmin) / C), j1 = Math.floor((Math.max(az, bz) + hw - this.zmin) / C);
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const key = j * 65536 + i;
        let arr = this.grid.get(key);
        if (!arr) this.grid.set(key, arr = []);
        arr.push(packed);
      }
      if (nav) continue;       // il navigatore non costruisce tessere
      const tk = this.tileKey((ax + bx) / 2, (az + bz) / 2);
      let ts = this.tileSegs.get(tk);
      if (!ts) this.tileSegs.set(tk, ts = []);
      ts.push(packed);
    }
  }

  // strade di una tessera (parte "r" dei file data/ground/g_i_j.js, vedi tools/bake.mjs)
  addTile(tk, d) {
    if (this.tilesIn.has(tk)) return;
    this.tilesIn.add(tk);
    if (!d) return;
    const S = d.s, ox = this.xmin + (tk % 1000) * this.tileSize, oz = this.zmin + Math.floor(tk / 1000) * this.tileSize;
    const loc = new Int32Array(d.ni.length);
    for (let i = 0, g = 0, x = 0, z = 0; i < d.ni.length; i++) { g += d.ni[i]; x += d.nx[i]; z += d.nz[i]; loc[i] = this.node(g, ox + x / 100, oz + z / 100); }
    for (let i = 0; i < d.dh.length; i += 2) this.dh[loc[d.dh[i]]] = d.dh[i + 1] / 100;
    for (let i = 0; i < d.nt.length; i += 3) { this.ntag[loc[d.nt[i]]] = d.nt[i + 1]; this.ndir[loc[d.nt[i]]] = d.nt[i + 2]; }
    for (let i = 0; i < d.mj.length; i += 3) this.junctionNames.set(loc[d.mj[i]], { name: S[d.mj[i + 1]], ref: S[d.mj[i + 2]] });
    const H = d.wh, hd = d.w;
    let on = 0, op = 0;
    for (let o = 0; o < hd.length; o += H) {
      const nN = hd[o + 27], nP = hd[o + 28];
      if (!this.wayId.has(hd[o])) {
        const w = {
          name: S[hd[o + 1]], ref: S[hd[o + 2]], cls: hd[o + 3], flags: hd[o + 4], lanes: hd[o + 5], speed: hd[o + 6], layer: hd[o + 7], widthTag: hd[o + 8] / 10,
          surf: hd[o + 9], sw: hd[o + 10], lit: hd[o + 11], lf: hd[o + 12], lb: hd[o + 13], turnF: S[hd[o + 14]], turnB: S[hd[o + 15]], dest: S[hd[o + 16]],
          limit: hd[o + 17], limitMapped: !!hd[o + 18],
          width: hd[o + 19] / 100, lw: hd[o + 20] / 100, nF: hd[o + 21] / 100, nB: hd[o + 22] / 100, sh: hd[o + 23] / 100, cOff: hd[o + 24] / 100,
          nodes: new Int32Array(nN),
        };
        for (let k = 0, v = 0; k < nN; k++) { v += d.wn[on + k]; w.nodes[k] = loc[v]; }
        const wi = this.ways.length;
        this.ways.push(w); this.wayId.set(hd[o], wi);
        this.linkWay(wi);
        if (w.abs) { w.h0 = hd[o + 25] / 100; w.h1 = hd[o + 26] / 100; }
        else {
          const P = new Float32Array(Math.max(1, nP));
          for (let k = 0, acc = 0; k < nP; k++) { acc += d.wp[op + k]; P[k] = acc / 100; }
          w.prof = P; w.pstep = nP > 1 ? w.len / (nP - 1) || 1 : 1;
        }
      }
      on += nN; op += nP;
    }
    for (const r of d.rl) {
      if (this.railId.has(r.id)) continue;
      const ri = this.rails.length;
      const pts = [];
      for (let k = 0; k < r.p.length; k += 2) pts.push([ox + r.p[k] / 100, oz + r.p[k + 1] / 100]);
      const rr = { p: pts, bridge: r.b, tunnel: r.t, name: S[r.n], h0: r.h0 / 100, h1: r.h1 / 100 };
      if (rr.bridge) { rr.cum = [0]; for (let k = 1; k < pts.length; k++) rr.cum.push(rr.cum[k - 1] + Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1])); }
      this.rails.push(rr); this.railId.set(r.id, ri);
      for (let k = 0; k < pts.length - 1; k++) {
        const t2 = this.tileKey((pts[k][0] + pts[k + 1][0]) / 2, (pts[k][1] + pts[k + 1][1]) / 2);
        let ts = this.tileRails.get(t2);
        if (!ts) this.tileRails.set(t2, ts = []);
        ts.push(ri * 16384 + k);
      }
    }
    for (const q of d.rb) {
      const poly = [];
      for (let k = 4; k < q.length; k += 2) poly.push([ox + q[k] / 100, oz + q[k + 1] / 100]);
      this.roundabouts.push({ x: ox + q[0] / 100, z: oz + q[1] / 100, r: q[2] / 100, dh: q[3] / 100, poly });
    }
  }

  // rete del navigatore: tutte le strade carrabili, geometria semplificata (data/net.js)
  addNav(d) {
    // nodi numerati in ordine: niente tabella degli id globali
    const S = d.s, nn = d.n.length / 2, nid = { length: nn };
    if (nn > this.cap) this.growNodes(nn);
    for (let i = 0, x = 0, z = 0; i < nn; i++) { x += d.n[2 * i]; z += d.n[2 * i + 1]; this.nx[i] = x / 10; this.nz[i] = z / 10; nid[i] = i; }
    this.nodeCount = nn;
    for (const g of d.gate) this.ntag[nid[g]] = NT.GATE;
    let on = 0;
    for (let o = 0; o < d.w.length; o += 12) {
      const h = d.w, nN = h[o + 11];
      const w = { name: S[h[o]], ref: S[h[o + 1]], cls: h[o + 2], flags: h[o + 3], limit: h[o + 4], width: h[o + 5] / 100, lw: h[o + 6] / 100, nF: h[o + 7] / 100, nB: h[o + 8] / 100, sh: h[o + 9] / 100, cOff: h[o + 10] / 100, nodes: new Int32Array(nN) };
      for (let k = 0; k < nN; k++) w.nodes[k] = nid[d.wn[on + k]];
      on += nN;
      const wi = this.ways.length;
      this.ways.push(w);
      this.linkWay(wi, true);
    }
    this.rails = d.rl.map((p) => { const out = []; for (let k = 0, x = 0, z = 0; k < p.length; k += 2) { x += p[k]; z += p[k + 1]; out.push([x / 10, z / 10]); } return { p: out }; });
    this.buildStreetIndex();
  }

  // compatibilita': i profili arrivano gia' pronti con la tessera
  ensureRegion() { return true; }

  // quota del profilo alla distanza s dall'inizio della via
  profAt(w, s) {
    const P = w.prof;
    if (P.length < 2) return P[0];
    const f = Math.min(P.length - 1, Math.max(0, s / w.pstep)), i = Math.min(P.length - 2, Math.floor(f));
    return P[i] + (P[i + 1] - P[i]) * (f - i);
  }

  tileKey(x, z) { return Math.floor((z - this.zmin) / this.tileSize) * 1000 + Math.floor((x - this.xmin) / this.tileSize); }

  // corsie per senso di marcia e larghezza della carreggiata dai tag OSM
  // (lanes, lanes:forward/backward, width) o dai valori tipici della classe
  layout(w) {
    const c = w.cls;
    let lw = LANE_W[c], nF, nB;
    const total = w.lanes || (w.oneway ? (c <= 1 && !(w.flags & F.LINK) ? 2 : 1) : 2);
    if (w.oneway) { nF = total; nB = 0; }
    else if (w.lf || w.lb) { nF = w.lf || Math.max(1, total - w.lb); nB = w.lb || Math.max(1, total - nF); }
    else if (total <= 1) { nF = 0.5; nB = 0.5; }
    else { nF = Math.ceil(total / 2); nB = Math.floor(total / 2); }
    let width;
    if (w.widthTag > 2 && w.widthTag < 30) { width = w.widthTag; lw = Math.min(lw + 0.5, width / (nF + nB)); }
    else if (c === CLS.TRACK) width = 3.2;
    else if (c === CLS.SERVICE) width = w.flags & F.AISLE ? (w.oneway ? 4.5 : 5.5) : w.oneway ? 3.5 : 4.6;
    else if (c === CLS.PEDESTRIAN) width = 6;
    else {
      if (w.flags & F.ROUNDABOUT && !w.lanes) nF = c <= 3 ? 1.6 : 1.4;
      width = (nF + nB) * lw;
      if (!w.oneway && total <= 1) width = Math.max(4.2, lw * 1.5);
      if (w.oneway && nF === 1) width = Math.max(width + 0.8, 4.2);
      if (c <= 1) width += 1.8; else if (c <= 3) width += 0.8;
    }
    if ((nF + nB) * lw > width) lw = width / (nF + nB);
    w.width = width; w.lw = lw; w.nF = nF; w.nB = nB;
    w.sh = (width - (nF + nB) * lw) / 2;             // banchina per lato
    w.cOff = -width / 2 + w.sh + nB * lw;             // linea di mezzeria (destra +)
  }

  // Il punto cade sulla carreggiata di un'altra via? Serve a interrompere linee,
  // marciapiedi, guardrail e parapetti agli sbocchi (incroci, rotatorie, immissioni).
  // anyPriority=false: conta solo le vie di importanza uguale o maggiore.
  coveredBy(wi, x, z, margin = 0, anyPriority = true) {
    const A = this.ways[wi];
    const prio = (w) => (w.flags & F.ROUNDABOUT ? -1 : w.cls * 2 + (w.flags & F.LINK ? 1 : 0));
    const pa = prio(A);
    let hit = false;
    this.segmentsNear(x, z, 0.5, (wj, k) => {
      if (hit || wj === wi) return;
      const B = this.ways[wj];
      if (B.layer !== A.layer && (A.abs || B.abs)) return; // ponte sopra / strada sotto
      if (!anyPriority && prio(B) > pa) return;
      const a = B.nodes[k], b = B.nodes[k + 1];
      const ax = this.nx[a], az = this.nz[a], dx = this.nx[b] - ax, dz = this.nz[b] - az;
      const L2 = dx * dx + dz * dz;
      if (L2 < 1e-6) return;
      const t = ((x - ax) * dx + (z - az) * dz) / L2;
      if (t < 0 || t > 1) return;
      const L = Math.sqrt(L2);
      if (k === 0 && t * L < 0.3) return;
      if (k === B.nodes.length - 2 && (1 - t) * L < 0.3) return;
      if (Math.abs((x - ax) * dz - (z - az) * dx) / L > B.width / 2 + margin) return;
      hit = true;
    });
    return hit;
  }

  // scostamento a destra (nel verso di marcia) del centro della corsia di marcia
  laneCenter(w, dir = 1) {
    if (w.oneway) return w.nF >= 2 ? -w.width / 2 + w.sh + w.lw * (Math.floor(w.nF) - 0.5) : 0;
    if (w.nF < 1) return w.width / 4;
    return dir > 0 ? w.cOff + w.lw * (w.nF - 0.5) : w.lw * (w.nB - 0.5) - w.cOff;
  }

  pointAt(w, s) {
    let k = 0;
    while (k < w.nodes.length - 2 && w.cum[k + 1] < s) k++;
    const a = w.nodes[k], b = w.nodes[k + 1];
    const L = w.cum[k + 1] - w.cum[k] || 1;
    const t = Math.min(1, Math.max(0, (s - w.cum[k]) / L));
    return [this.nx[a] + (this.nx[b] - this.nx[a]) * t, this.nz[a] + (this.nz[b] - this.nz[a]) * t, k, t];
  }

  // quota della carreggiata in un punto di un segmento
  heightOn(wi, k, t, x, z) {
    const w = this.ways[wi];
    if (w.abs) {
      const s = w.cum[k] + t * (w.cum[k + 1] - w.cum[k]);
      return w.h0 + (w.h1 - w.h0) * (w.len > 0 ? s / w.len : 0) + LIFT;
    }
    return this.profAt(w, w.cum[k] + t * (w.cum[k + 1] - w.cum[k])) + LIFT;
  }

  segmentsNear(x, z, r, cb) {
    const C = this.cell;
    const i0 = Math.floor((x - r - this.xmin) / C), i1 = Math.floor((x + r - this.xmin) / C);
    const j0 = Math.floor((z - r - this.zmin) / C), j1 = Math.floor((z + r - this.zmin) / C);
    const seen = this._seen || (this._seen = new Set());
    seen.clear();
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const arr = this.grid.get(j * 65536 + i);
      if (!arr) continue;
      for (const p of arr) { if (seen.has(p)) continue; seen.add(p); cb(Math.floor(p / 16384), p % 16384); }
    }
  }

  projectOnSeg(wi, k, x, z) {
    const w = this.ways[wi], a = w.nodes[k], b = w.nodes[k + 1];
    const ax = this.nx[a], az = this.nz[a], dx = this.nx[b] - ax, dz = this.nz[b] - az;
    const L2 = dx * dx + dz * dz || 1e-9;
    let t = ((x - ax) * dx + (z - az) * dz) / L2;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const px = ax + dx * t, pz = az + dz * t;
    return { t, px, pz, d: Math.hypot(x - px, z - pz), dx, dz };
  }

  // superficie guidabile sotto un punto: strada (anche su ponti) o terreno
  surfaceAt(x, z, yRef = 1e9) {
    let best = null, bestH = -1e9;
    const cand = this._cand || (this._cand = []);
    cand.length = 0;
    this.segmentsNear(x, z, 8, (wi, k) => {
      const w = this.ways[wi];
      const pr = this.projectOnSeg(wi, k, x, z);
      const lim = w.width / 2 + 0.35;
      if (pr.d > lim) return;
      const h = this.heightOn(wi, k, pr.t, x, z);
      if (h > yRef + 1.3) return;
      cand.push(h, Math.max(0.03, 1 - pr.d / lim));
      if (h > bestH + 0.01 || (Math.abs(h - bestH) <= 0.01 && best && pr.d < best.d)) { bestH = h; best = { wi, k, t: pr.t, d: pr.d }; }
    });
    // incroci: dove due vie alla stessa quota si sovrappongono si usa la media pesata (vicinanza
    // all'asse di ciascuna), cosi' passando dall'una all'altra non ci sono scalini
    if (cand.length > 2) {
      let sw = 0, sh = 0;
      for (let i = 0; i < cand.length; i += 2) if (bestH - cand[i] < 0.8) { sh += cand[i] * cand[i + 1]; sw += cand[i + 1]; }
      if (sw > 0) bestH = sh / sw;
    }
    const th = this.terrain.height(x, z);
    if (best && bestH >= th - 0.6) return { h: bestH, road: best };
    // in galleria (anche dove la copertura e' di pochi decimetri, agli imbocchi) chi e' gia' alla quota della strada ci resta
    if (best && (this.ways[best.wi].flags & F.TUNNEL) && yRef < bestH + 3) return { h: bestH, road: best };
    if (best && th > yRef + 1.3) return { h: bestH, road: best }; // galleria
    return { h: th, road: null };
  }

  nearest(x, z, maxD = 40, filter = null) {
    let best = null;
    this.segmentsNear(x, z, maxD, (wi, k) => {
      const w = this.ways[wi];
      if (filter && !filter(w)) return;
      const pr = this.projectOnSeg(wi, k, x, z);
      if (pr.d <= maxD && (!best || pr.d < best.d)) best = { wi, k, t: pr.t, d: pr.d, px: pr.px, pz: pr.pz, dx: pr.dx, dz: pr.dz };
    });
    return best;
  }

  displayName(w) {
    if (w.name) return w.ref ? `${w.name} (${w.ref})` : w.name;
    if (w.ref) return w.ref;
    return CLASS_NAMES[w.cls];
  }

  buildStreetIndex() {
    // indice per la ricerca di vie: nome -> elenco posizioni
    this.streets = new Map();
    this.ways.forEach((w, wi) => {
      if (!w.name || !w.drivable) return;
      const [x, z] = this.pointAt(w, w.len / 2);
      let arr = this.streets.get(w.name);
      if (!arr) this.streets.set(w.name, arr = []);
      arr.push({ wi, x, z, len: w.len });
    });
  }

  // zone di incrocio lungo una via: per ogni nodo, ascissa e raggio dell'incrocio
  // precedente/successivo (per interrompere linee e marciapiedi)
  zones(w) {
    if (w.zn) return w.zn;
    const n = w.nodes.length;
    const mk = (W1, W2, deg, extra) => {
      const pc = new Float32Array(n).fill(-1e9), pr = new Float32Array(n), nc = new Float32Array(n).fill(1e9), nr = new Float32Array(n);
      const rad = (nd) => { const other = w.width >= W1[nd] - 0.01 ? W2[nd] : W1[nd]; return other > 0 ? other / 2 + extra : 0; };
      let c = -1e9, r = 0;
      for (let k = 0; k < n; k++) { const nd = w.nodes[k]; if (deg[nd] >= 3) { const q = rad(nd); if (q > 0) { c = w.cum[k]; r = q; } } pc[k] = c; pr[k] = r; }
      c = 1e9; r = 0;
      for (let k = n - 1; k >= 0; k--) { const nd = w.nodes[k]; if (deg[nd] >= 3) { const q = rad(nd); if (q > 0) { c = w.cum[k]; r = q; } } nc[k] = c; nr[k] = r; }
      return { pc, pr, nc, nr };
    };
    w.zn = { mark: mk(this.m1, this.m2, this.degMain, 2.2), walk: mk(this.w1, this.w2, this.degree, 0.9) };
    return w.zn;
  }

  // ingressi in rotatoria che ricadono nella tessera: [{wi, k, t, nd, from, dir}]
  roundaboutEntries(tk) {
    const out = [];
    const seen = new Set();
    for (const packed of this.tileSegs.get(tk) || []) {
      const wi = Math.floor(packed / 16384), k = packed % 16384, w = this.ways[wi];
      if (w.flags & F.ROUNDABOUT || !w.drivable || w.cls >= CLS.SERVICE) continue;
      const last = w.nodes.length - 1;
      if (k === last - 1 && this.onRb[w.nodes[last]] && !seen.has(wi * 2)) { seen.add(wi * 2); out.push({ wi, k, t: 1, nd: w.nodes[last], from: w.nodes[last - 1], dir: 1 }); }
      if (k === 0 && !w.oneway && this.onRb[w.nodes[0]] && !seen.has(wi * 2 + 1)) { seen.add(wi * 2 + 1); out.push({ wi, k: 0, t: 0, nd: w.nodes[0], from: w.nodes[1], dir: -1 }); }
    }
    return out;
  }

  // ------------------------------------------------------------- geometria
  materials() {
    if (this._mats) return this._mats;
    const asphalt = canvasTexture(256, 256, (ctx, w, h) => {
      ctx.fillStyle = '#7a7a7a'; ctx.fillRect(0, 0, w, h);
      const img = ctx.getImageData(0, 0, w, h);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = 104 + Math.random() * 64 + (Math.random() < 0.03 ? 50 : 0);
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      }
      ctx.putImageData(img, 0, 0);
      ctx.globalAlpha = 0.08; ctx.strokeStyle = '#000';
      for (let i = 0; i < 6; i++) { ctx.lineWidth = 1 + Math.random() * 3; ctx.beginPath(); ctx.moveTo(Math.random() * w, Math.random() * h); ctx.bezierCurveTo(Math.random() * w, Math.random() * h, Math.random() * w, Math.random() * h, Math.random() * w, Math.random() * h); ctx.stroke(); }
    });
    // pave' / porfido: cubetti disposti a file sfalsate
    const stone = canvasTexture(256, 256, (ctx, w, h) => {
      ctx.fillStyle = '#5c564e'; ctx.fillRect(0, 0, w, h);
      const s = 32;
      for (let j = 0; j < h / s; j++) for (let i = -1; i < w / s; i++) {
        const g = 120 + Math.random() * 60, x = i * s + (j % 2 ? s / 2 : 0), y = j * s;
        ctx.fillStyle = `rgb(${g + 12},${g + 4},${g - 8})`;
        ctx.beginPath(); ctx.roundRect(x + 2, y + 2, s - 4, s - 4, 5); ctx.fill();
      }
    });
    // lastre del marciapiede
    const slab = canvasTexture(128, 128, (ctx, w, h) => {
      ctx.fillStyle = '#b9b6ae'; ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 900; i++) { ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.06})`; ctx.fillRect(Math.random() * w, Math.random() * h, 3, 3); }
      ctx.strokeStyle = 'rgba(0,0,0,0.22)'; ctx.lineWidth = 2; ctx.strokeRect(0, 0, w, h);
    });
    // simboli dipinti: frecce di corsia, STOP, bici
    const decals = canvasTexture(512, 512, (ctx) => {
      ctx.clearRect(0, 0, 512, 512);
      ctx.fillStyle = '#fff'; ctx.strokeStyle = '#fff';
      const cell = (name, draw) => { const c = DECAL[name]; ctx.save(); ctx.translate(c[0] * 128, c[1] * 128); draw(); ctx.restore(); };
      const head = (x, y, ang) => { ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.beginPath(); ctx.moveTo(0, -30); ctx.lineTo(26, 12); ctx.lineTo(-26, 12); ctx.closePath(); ctx.fill(); ctx.restore(); };
      const through = () => { ctx.fillRect(56, 44, 16, 80); head(64, 34, 0); };
      const side = (s) => { ctx.fillRect(56, 70, 16, 54); ctx.fillRect(s > 0 ? 64 : 34, 62, 30, 16); head(64 + s * 44, 70, s * Math.PI / 2); };
      cell('through', through);
      cell('left', () => side(-1));
      cell('right', () => side(1));
      cell('left;through', () => { through(); ctx.fillRect(34, 78, 30, 14); head(20, 85, -Math.PI / 2); });
      cell('right;through', () => { through(); ctx.fillRect(64, 78, 30, 14); head(108, 85, Math.PI / 2); });
      cell('left;right', () => { ctx.fillRect(56, 70, 16, 54); ctx.fillRect(30, 62, 68, 16); head(20, 70, -Math.PI / 2); head(108, 70, Math.PI / 2); });
      cell('stop', () => { ctx.font = 'bold 150px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.save(); ctx.translate(128, 66); ctx.scale(0.74, 0.85); ctx.fillText('STOP', 0, 0); ctx.restore(); });
      cell('bike', () => { ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(36, 84, 20, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.arc(92, 84, 20, 0, 7); ctx.stroke(); ctx.beginPath(); ctx.moveTo(36, 84); ctx.lineTo(56, 50); ctx.lineTo(84, 50); ctx.lineTo(92, 84); ctx.moveTo(56, 50); ctx.lineTo(66, 84); ctx.lineTo(36, 84); ctx.stroke(); });
      cell('tri', () => { ctx.beginPath(); ctx.moveTo(64, 120); ctx.lineTo(20, 20); ctx.lineTo(108, 20); ctx.closePath(); ctx.fill(); });
    }, false);
    const po = (m, f, u) => { m.polygonOffset = true; m.polygonOffsetFactor = f; m.polygonOffsetUnits = u; return m; };
    this._mats = {
      road: po(new THREE.MeshLambertMaterial({ map: asphalt, vertexColors: true }), -2, -4),
      stone: po(new THREE.MeshLambertMaterial({ map: stone, vertexColors: true }), -2, -4),
      path: po(new THREE.MeshLambertMaterial({ map: asphalt, vertexColors: true }), -1, -2),
      walk: new THREE.MeshLambertMaterial({ map: slab, vertexColors: true, side: THREE.DoubleSide }),
      mark: po(new THREE.MeshLambertMaterial({ color: 0xf2f2ee, vertexColors: true }), -4, -8),
      decal: po(new THREE.MeshLambertMaterial({ map: decals, color: 0xf2f2ee, transparent: true, alphaTest: 0.35, depthWrite: false }), -5, -10),
      wall: new THREE.MeshLambertMaterial({ color: 0xa8a49a, side: THREE.DoubleSide }),
      // interno delle gallerie: non riceve la luce del sole (colori gia' scuri nei vertici), lampade luminose
      tube: new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }),
      tlamp: new THREE.MeshBasicMaterial({ color: 0xffe9b0, side: THREE.DoubleSide }),
      barrier: new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }),
      guard: new THREE.MeshLambertMaterial({ color: 0xc8ccd0, side: THREE.DoubleSide }),
      island: new THREE.MeshLambertMaterial({ vertexColors: true }),
    };
    return this._mats;
  }

  // vettore "destra" (miter) al nodo k di una via
  miter(w, k) {
    const n = w.nodes.length;
    let tx = 0, tz = 0;
    if (k > 0) { const a = w.nodes[k - 1], b = w.nodes[k]; const dx = this.nx[b] - this.nx[a], dz = this.nz[b] - this.nz[a], L = Math.hypot(dx, dz) || 1; tx += dx / L; tz += dz / L; }
    if (k < n - 1) { const a = w.nodes[k], b = w.nodes[k + 1]; const dx = this.nx[b] - this.nx[a], dz = this.nz[b] - this.nz[a], L = Math.hypot(dx, dz) || 1; tx += dx / L; tz += dz / L; }
    const L = Math.hypot(tx, tz) || 1; tx /= L; tz /= L;
    let scale = 1;
    if (k > 0 && k < n - 1) {
      const a = w.nodes[k], b = w.nodes[k + 1];
      const dx = this.nx[b] - this.nx[a], dz = this.nz[b] - this.nz[a], Ls = Math.hypot(dx, dz) || 1;
      const dot = (-tz) * (-dz / Ls) + tx * (dx / Ls);
      scale = 1 / Math.max(0.5, dot);
    }
    return [-tz * scale, tx * scale];
  }

  wayColor(w) {
    if (w.flags & F.NOCAR || w.surf === 1) return [1, 1, 1];
    if (w.flags & F.UNPAVED) return [0.95, 0.82, 0.62];
    // ogni via ha un asfalto leggermente diverso (piu' o meno recente), come nella realta'
    if (w.tint === undefined) w.tint = 0.92 + 0.16 * hash(w.nodes[0] * 31 + w.nodes.length);
    const c = ROAD_COL[w.cls];
    return [c[0] * w.tint, c[1] * w.tint, c[2] * w.tint];
  }

  // quota di un punto della carreggiata (anche ai bordi)
  edgeH(wi, k, t, x, z) {
    const w = this.ways[wi];
    return this.heightOn(wi, k, t, x, z);   // la carreggiata e' piana in senso trasversale
  }

  // simbolo dipinto: centro (x,z), direzione di marcia (dx,dz), dimensioni in metri
  addDecal(g, wi, k, t, x, z, dx, dz, wid, len, name) {
    const uv = decalUV(name); if (!uv) return;
    const rx = -dz, rz = dx;
    const P = [[-wid / 2, -len / 2, uv[0], uv[1]], [wid / 2, -len / 2, uv[2], uv[1]], [wid / 2, len / 2, uv[2], uv[3]], [-wid / 2, len / 2, uv[0], uv[3]]].map(([la, lo, u, v]) => {
      const px = x + rx * la + dx * lo, pz = z + rz * la + dz * lo;
      return g.v(px, this.edgeH(wi, k, t, px, pz) + 0.035, pz, 1, 1, 1, u, v);
    });
    g.quad(P[0], P[1], P[2], P[3]);
  }

  // costruzione tutta in una volta (per chi non ha fretta)
  buildTile(tk) {
    const g = this.buildTileGen(tk);
    let r;
    while (!(r = g.next()).done);
    return r.value;
  }

  // Costruzione a passi: il generatore si ferma ogni pochi tratti di strada, cosi' chi lo guida
  // (World.pump) puo' distribuire il lavoro su piu' fotogrammi senza scatti.
  *buildTileGen(tk) {
    const group = new THREE.Group();
    const segs = this.tileSegs.get(tk) || [];
    const M = this.materials();
    const road = new GeoBuilder(true, true), stone = new GeoBuilder(true, true), mark = new GeoBuilder(true, false), wall = new GeoBuilder(false, false), guard = new GeoBuilder(false, false);
    const tube = new GeoBuilder(true, false), tlamp = new GeoBuilder(false, false);
    const walk = new GeoBuilder(true, true), decal = new GeoBuilder(true, true);
    const T = this.terrain;
    const STEP = 5;
    const discDone = new Set();
    let nDone = 0;
    for (const packed of segs) {
      if (++nDone % 20 === 0) yield;
      const wi = Math.floor(packed / 16384), k = packed % 16384;
      const w = this.ways[wi];
      const a = w.nodes[k], b = w.nodes[k + 1];
      const ax = this.nx[a], az = this.nz[a], bx = this.nx[b], bz = this.nz[b];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 0.05) continue;
      const sx = (bx - ax) / L, sz = (bz - az) / L;
      const rx = -sz, rz = sx;
      const ma = this.miter(w, k), mb = this.miter(w, k + 1);
      const hw = w.width / 2;
      let nsub = Math.max(1, Math.ceil(L / STEP));
      // passo adattivo: dove il terreno e' regolare (scarto sotto i 2 cm a meta' di ogni tratto,
      // su entrambi i bordi) bastano tratti da 10 m; resta a 5 m su dossi e cambi di pendenza
      const n2 = Math.max(1, Math.ceil(L / 10));
      if (n2 < nsub) {
        let flat = true;
        for (let s = 0; s < n2 && flat; s++) {
          for (const sg of [-1, 1]) {
            const h3 = [];
            for (const t of [s / n2, (s + 0.5) / n2, (s + 1) / n2]) {
              const ox = ma[0] + (mb[0] - ma[0]) * t, oz = ma[1] + (mb[1] - ma[1]) * t;
              const px = ax + (bx - ax) * t + ox * hw * sg, pz = az + (bz - az) * t + oz * hw * sg;
              h3.push(this.edgeH(wi, k, t, px, pz));
            }
            if (Math.abs(h3[1] - (h3[0] + h3[2]) / 2) > 0.02) { flat = false; break; }
          }
        }
        if (flat) nsub = n2;
      }
      const tunnel = !!(w.flags & F.TUNNEL);
      const col = tunnel ? this.wayColor(w).map((c) => c * 0.5) : this.wayColor(w);   // in galleria l'asfalto non e' al sole
      const isStone = w.surf === 1 || !!(w.flags & F.NOCAR);
      const g = isStone ? stone : road;
      const uvS = isStone ? 0.6 : 0.2;
      const elevated = w.abs || this.dh[a] > 0.3 || this.dh[b] > 0.3;
      let prevL = -1, prevR = -1;
      const edges = [];
      for (let s = 0; s <= nsub; s++) {
        const t = s / nsub;
        const cx = ax + (bx - ax) * t, cz = az + (bz - az) * t;
        // direzione laterale interpolata tra i nodi: i bordi seguono la curva
        const ox = ma[0] + (mb[0] - ma[0]) * t, oz = ma[1] + (mb[1] - ma[1]) * t;
        const lx = cx - ox * hw, lz = cz - oz * hw, qx = cx + ox * hw, qz = cz + oz * hw;
        const hl = this.edgeH(wi, k, t, lx, lz), hr = this.edgeH(wi, k, t, qx, qz);
        const il = g.v(lx, hl, lz, col[0], col[1], col[2], lx * uvS, lz * uvS);
        const ir = g.v(qx, hr, qz, col[0], col[1], col[2], qx * uvS, qz * uvS);
        if (prevL >= 0) g.quad(prevL, prevR, ir, il);
        prevL = il; prevR = ir;
        edges.push([lx, hl, lz, qx, hr, qz, ox, oz]);
      }
      // galleria: volta e pareti lungo la strada, lampade al soffitto, portali agli imbocchi veri
      if (tunnel) {
        const hx = hw + 0.7;
        // sezione: [scostamento laterale, altezza, luminosita'] da sinistra a destra
        const SEC = [[-hx, 0, 0.3], [-hx, 1.2, 0.3], [-hx, 3.4, 0.17], [-hx * 0.5, 5.2, 0.13], [0, 5.8, 0.12], [hx * 0.5, 5.2, 0.13], [hx, 3.4, 0.17], [hx, 1.2, 0.3], [hx, 0, 0.3]];
        const ringAt = (e, grow = 0) => {
          const cx = (e[0] + e[3]) / 2, cy = (e[1] + e[4]) / 2, cz = (e[2] + e[5]) / 2;
          return SEC.map(([o, y]) => [cx + e[6] * (o + Math.sign(o) * grow), cy + y + (y > 0 ? grow : 0) - 0.05, cz + e[7] * (o + Math.sign(o) * grow)]);
        };
        let prevIds = null, prevOut = null, prevCover = 99;
        edges.forEach((e, si) => {
          const pts = ringAt(e);
          const ids = pts.map((q, i) => tube.v(q[0], q[1], q[2], SEC[i][2], SEC[i][2], SEC[i][2] * 1.05));
          if (prevIds) for (let i = 0; i < ids.length - 1; i++) tube.quad(prevIds[i], prevIds[i + 1], ids[i + 1], ids[i]);
          prevIds = ids;
          // dove la copertura di terreno e' poca il tubo si vede anche da fuori: guscio in cemento e spalle
          const cx = (e[0] + e[3]) / 2, cz = (e[2] + e[5]) / 2, cover = T.height(cx, cz) - (e[1] + e[4]) / 2;
          const out = cover < 8.5 || prevCover < 8.5 ? ringAt(e, 0.3) : null;
          if (out) {
            const yb = (e[1] + e[4]) / 2 - 0.6;
            out.unshift([cx - e[6] * (hx + 6.5), yb + 2.2, cz - e[7] * (hx + 6.5)]);
            out.push([cx + e[6] * (hx + 6.5), yb + 2.2, cz + e[7] * (hx + 6.5)]);
            if (prevOut) for (let i = 0; i < out.length - 1; i++) {
              const a0 = wall.v(...prevOut[i]), a1 = wall.v(...prevOut[i + 1]), b1 = wall.v(...out[i + 1]), b0 = wall.v(...out[i]);
              wall.quad(a0, a1, b1, b0);
            }
          }
          prevOut = out; prevCover = cover;
          // lampade: due file alterne di plafoniere
          if (si > 0 && (si + k) % 2 === 0) {
            const p = pts[4], f = si % 4 === 0 ? 0.3 : -0.3;
            const lx0 = p[0] + e[6] * hw * f, lz0 = p[2] + e[7] * hw * f, y = p[1] - 0.75;   // sotto la volta
            const i0 = tlamp.v(lx0 - sx * 0.7 - e[6] * 0.16, y, lz0 - sz * 0.7 - e[7] * 0.16), i1 = tlamp.v(lx0 + sx * 0.7 - e[6] * 0.16, y, lz0 + sz * 0.7 - e[7] * 0.16);
            const i2 = tlamp.v(lx0 + sx * 0.7 + e[6] * 0.16, y, lz0 + sz * 0.7 + e[7] * 0.16), i3 = tlamp.v(lx0 - sx * 0.7 + e[6] * 0.16, y, lz0 - sz * 0.7 + e[7] * 0.16);
            tlamp.quad(i0, i1, i2, i3);
          }
        });
        // portale: parete in cemento attorno all'apertura, dove la galleria incontra la strada all'aperto
        for (const [nd, at, e] of [[w.nodes[0], k === 0, edges[0]], [w.nodes[w.nodes.length - 1], k === w.nodes.length - 2, edges[edges.length - 1]]]) {
          if (!at) continue;
          let inner = false;
          for (let o = this.adjHead[nd]; o >= 0; o = this.adjNext[o]) if (this.adjWay[o] !== wi && this.ways[this.adjWay[o]].flags & F.TUNNEL) inner = true;
          if (inner) continue;
          const A = ringAt(e, 0.02), cx = (e[0] + e[3]) / 2, cy = (e[1] + e[4]) / 2, cz = (e[2] + e[5]) / 2;
          const P = (o, y) => wall.v(cx + e[6] * o, cy + y, cz + e[7] * o);
          const a = A.map((q) => wall.v(q[0], q[1], q[2]));
          const BL = P(-hx - 4.5, -0.6), TL = P(-hx - 4.5, 7.6), TR = P(hx + 4.5, 7.6), BR = P(hx + 4.5, -0.6);
          for (const tri of [[BL, a[0], a[2]], [BL, a[2], TL], [TL, a[2], a[3]], [TL, a[3], a[4]], [TL, a[4], TR], [TR, a[4], a[5]], [TR, a[5], a[6]], [TR, a[6], BR], [BR, a[6], a[8]]]) wall.tri(tri[0], tri[1], tri[2]);
        }
      }
      // raccordo tondo agli estremi delle vie (incroci ad angolo, vicoli ciechi)
      for (const [kk, nd] of [[0, a], [w.nodes.length - 1, b]]) {
        if (kk === 0 ? k !== 0 : k !== w.nodes.length - 2) continue;
        const key = nd * 2 + (isStone ? 1 : 0);
        if (discDone.has(key) || w.flags & F.ROUNDABOUT) continue;
        discDone.add(key);
        const cx = this.nx[nd], cz = this.nz[nd], tt = kk === 0 ? 0 : 1;
        const c0 = g.v(cx, this.edgeH(wi, k, tt, cx, cz), cz, col[0], col[1], col[2], cx * uvS, cz * uvS);
        const ring = [];
        for (let i = 0; i < 14; i++) {
          const an = i / 14 * Math.PI * 2, px = cx + Math.cos(an) * hw, pz = cz + Math.sin(an) * hw;
          ring.push(g.v(px, this.edgeH(wi, k, tt, px, pz), pz, col[0], col[1], col[2], px * uvS, pz * uvS));
        }
        for (let i = 0; i < 14; i++) g.tri(c0, ring[(i + 1) % 14], ring[i]);
      }
      // muri laterali di rilevati / ponti e parapetti
      if (elevated) {
        for (let side = 0; side < 2; side++) {
          for (let s = 0; s < edges.length - 1; s++) {
            const e0 = edges[s], e1 = edges[s + 1];
            const x0 = e0[side * 3], y0 = e0[side * 3 + 1], z0 = e0[side * 3 + 2];
            const x1 = e1[side * 3], y1 = e1[side * 3 + 1], z1 = e1[side * 3 + 2];
            const g0 = T.height(x0, z0), g1 = T.height(x1, z1);
            if (y0 - g0 < 0.35 && y1 - g1 < 0.35) continue;
            if (this.coveredBy(wi, (x0 + x1) / 2, (z0 + z1) / 2, 0.3)) continue;
            const bottom0 = w.abs ? Math.max(g0 - 1, y0 - 1.4) : g0 - 0.5, bottom1 = w.abs ? Math.max(g1 - 1, y1 - 1.4) : g1 - 0.5;
            const i0 = wall.v(x0, y0, z0), i1 = wall.v(x1, y1, z1), i2 = wall.v(x1, bottom1, z1), i3 = wall.v(x0, bottom0, z0);
            wall.quad(i0, i1, i2, i3);
            const p0 = wall.v(x0, y0 + 1.0, z0), p1 = wall.v(x1, y1 + 1.0, z1), p2 = wall.v(x1, y1, z1), p3 = wall.v(x0, y0, z0);
            wall.quad(p0, p1, p2, p3);
          }
        }
        if (w.abs && w.flags & F.BRIDGE) { // piloni
          for (let s = 1; s < edges.length - 1; s += 4) {
            const e = edges[s];
            const x0 = (e[0] + e[3]) / 2, z0 = (e[2] + e[5]) / 2, y0 = (e[1] + e[4]) / 2;
            const gh = T.height(x0, z0);
            if (y0 - gh < 3) continue;
            const r = 0.6;
            const c = [[-r, -r], [r, -r], [r, r], [-r, r]];
            for (let q = 0; q < 4; q++) {
              const [ux, uz] = c[q], [vx, vz] = c[(q + 1) % 4];
              const i0 = wall.v(x0 + ux, y0 - 0.5, z0 + uz), i1 = wall.v(x0 + vx, y0 - 0.5, z0 + vz), i2 = wall.v(x0 + vx, gh - 1, z0 + vz), i3 = wall.v(x0 + ux, gh - 1, z0 + uz);
              wall.quad(i0, i1, i2, i3);
            }
          }
        }
      }
      // guardrail sulle superstrade
      if (w.cls <= CLS.TRUNK && !(w.flags & F.LINK) && !elevated) {
        const Z = this.zones(w).mark;
        for (let side = 0; side < 2; side++) {
          for (let s = 0; s < edges.length - 1; s++) {
            const c0 = w.cum[k] + s / nsub * L, c1 = w.cum[k] + (s + 1) / nsub * L;
            if (c0 - Z.pc[k] < 8 || Z.nc[k + 1] - c1 < 8) continue;
            const e0 = edges[s], e1 = edges[s + 1];
            const sg = side ? 1 : -1, off = 0.4 * sg;
            if (this.coveredBy(wi, (e0[side * 3] + e1[side * 3]) / 2 + rx * off, (e0[side * 3 + 2] + e1[side * 3 + 2]) / 2 + rz * off, 0.8)) continue;
            const x0 = e0[side * 3] + rx * off, z0 = e0[side * 3 + 2] + rz * off, y0 = e0[side * 3 + 1];
            const x1 = e1[side * 3] + rx * off, z1 = e1[side * 3 + 2] + rz * off, y1 = e1[side * 3 + 1];
            const i0 = guard.v(x0, y0 + 0.85, z0), i1 = guard.v(x1, y1 + 0.85, z1), i2 = guard.v(x1, y1 + 0.5, z1), i3 = guard.v(x0, y0 + 0.5, z0);
            guard.quad(i0, i1, i2, i3);
            if (s % 2 === 0) {
              const j0 = guard.v(x0, y0 + 0.85, z0), j1 = guard.v(x0 + sx * 0.12, y0 + 0.85, z0 + sz * 0.12), j2 = guard.v(x0 + sx * 0.12, y0 - 0.2, z0 + sz * 0.12), j3 = guard.v(x0, y0 - 0.2, z0);
              guard.quad(j0, j1, j2, j3);
            }
          }
        }
      }
      this.buildSidewalk(walk, wi, k, edges, nsub, L);
      this.buildVerge(road, wi, k, edges, nsub, L);
      this.buildMarkings(mark, wi, k);
    }
    // isole delle rotatorie: cordolo, corona sormontabile in porfido, aiuola
    const isl = new GeoBuilder(true, false);
    for (const rb of this.roundabouts) {
      if (this.tileKey(rb.x, rb.z) !== tk) continue;
      const y = T.height(rb.x, rb.z) + rb.dh + LIFT + 0.22;
      const P = rb.poly, segN = P.length;
      const apron = Math.min(1.6, rb.r * 0.3);
      const c0 = isl.v(rb.x, y + 0.25 + Math.min(1.2, rb.r * 0.06), rb.z, 0.3, 0.52, 0.2);
      // anelli: [arretramento dal bordo, quota, colore]
      const rings = [[0, y - 0.6, 0.86, 0.86, 0.83], [0, y, 0.86, 0.86, 0.83], [0.25, y, 0.62, 0.55, 0.5], [apron, y + 0.06, 0.62, 0.55, 0.5], [apron, y + 0.25, 0.8, 0.8, 0.78], [apron + 0.25, y + 0.25, 0.33, 0.56, 0.22]];
      const idx = rings.map(([inset, yy, cr, cg, cb]) => P.map(([px, pz]) => {
        const d = Math.hypot(px - rb.x, pz - rb.z) || 1, f = Math.max(0.05, (d - inset) / d);
        return isl.v(rb.x + (px - rb.x) * f, yy, rb.z + (pz - rb.z) * f, cr, cg, cb);
      }));
      for (let q = 0; q < idx.length - 1; q++) for (let i = 0; i < segN; i++) { const j = (i + 1) % segN; isl.quad(idx[q][i], idx[q + 1][i], idx[q + 1][j], idx[q][j]); }
      const lastR = idx[idx.length - 1];
      for (let i = 0; i < segN; i++) isl.tri(c0, lastR[(i + 1) % segN], lastR[i]);
    }
    yield;
    this.buildNodeMarks(tk, mark, road);
    yield;
    this.buildLaneArrows(tk, decal);
    this.buildRoundaboutEntries(tk, mark);
    yield;
    this.buildRails(tk, road, wall);
    yield;
    if (!road.empty) group.add(road.mesh(M.road));
    yield;
    if (!stone.empty) group.add(stone.mesh(M.stone));
    if (!walk.empty) group.add(walk.mesh(M.walk));
    yield;
    if (!mark.empty) group.add(mark.mesh(M.mark));
    if (!decal.empty) group.add(decal.mesh(M.decal));
    if (!wall.empty) group.add(wall.mesh(M.wall, true));
    if (!tube.empty) group.add(tube.mesh(M.tube));
    if (!tlamp.empty) group.add(tlamp.mesh(M.tlamp));
    if (!guard.empty) group.add(guard.mesh(M.guard));
    if (!isl.empty) group.add(isl.mesh(M.island));
    return group;
  }

  // marciapiedi: dal tag OSM sidewalk=*, altrimenti sulle strade urbane
  // bit 1 = sinistra, bit 2 = destra
  sidewalkSides(w, x, z) {
    if (!w.drivable || (w.flags & F.TUNNEL)) return 0;
    if (w.sw === 1) return 3;
    if (w.sw === 2) return 1;
    if (w.sw === 3) return 2;
    if (w.sw === 4) return 0;
    if (w.cls < CLS.PRIMARY || w.cls > CLS.RESIDENTIAL || w.flags & (F.LINK | F.ROUNDABOUT | F.UNPAVED) || w.limit > 50) return 0;
    return this.terrain.isUrban(x, z) ? 3 : 0;
  }

  buildSidewalk(g, wi, k, edges, nsub, L) {
    const w = this.ways[wi];
    const a = w.nodes[k], b = w.nodes[k + 1];
    const sides = this.sidewalkSides(w, (this.nx[a] + this.nx[b]) / 2, (this.nz[a] + this.nz[b]) / 2);
    if (!sides) return;
    const Z = this.zones(w).walk;
    const c = [0.93, 0.92, 0.9], cc = [0.74, 0.73, 0.7];
    for (let side = 0; side < 2; side++) {
      if (!(sides & (side ? 2 : 1))) continue;
      const sg = side ? 1 : -1;
      let prev = null;
      for (let s = 0; s <= nsub; s++) {
        const cum = w.cum[k] + s / nsub * L;
        const e = edges[s], t = s / nsub;
        const ix = e[side * 3], iy = e[side * 3 + 1], iz = e[side * 3 + 2];
        const ox = ix + e[6] * sg * SW_W, oz = iz + e[7] * sg * SW_W;
        const nearJ = cum - Z.pc[k] < 40 || Z.nc[k + 1] - cum < 40;
        if (nearJ && this.coveredBy(wi, (ix + ox) / 2, (iz + oz) / 2, 1.0)) { prev = null; continue; }
        const oy = this.edgeH(wi, k, t, ox, oz);
        const top = Math.max(iy, oy) + SW_H;
        const cur = [
          g.v(ix, iy - 0.05, iz, cc[0], cc[1], cc[2], 0, cum * 0.5), g.v(ix, top, iz, cc[0], cc[1], cc[2], 0.1, cum * 0.5),
          g.v(ix, top, iz, c[0], c[1], c[2], 0, cum * 0.6), g.v(ox, top, oz, c[0], c[1], c[2], 1, cum * 0.6),
          g.v(ox, top, oz, cc[0], cc[1], cc[2], 0, cum * 0.5), g.v(ox, Math.min(oy, this.terrain.height(ox, oz)) - 0.4, oz, cc[0], cc[1], cc[2], 0.1, cum * 0.5),
        ];
        if (prev) {
          for (let q = 0; q < 6; q += 2) {
            if (sg > 0) g.quad(prev[q], prev[q + 1], cur[q + 1], cur[q]); else g.quad(prev[q], cur[q], cur[q + 1], prev[q + 1]);
          }
        }
        prev = cur;
      }
    }
  }

  // banchina: fuori dai centri abitati, dove non c'e' marciapiede, una fascia di ghiaia che sfuma
  // nell'erba invece del taglio netto tra asfalto e prato
  buildVerge(g, wi, k, edges, nsub, L) {
    const w = this.ways[wi];
    if (w.cls > CLS.UNCLASSIFIED || w.cls < CLS.TRUNK || w.abs || !w.drivable || w.flags & (F.ROUNDABOUT | F.UNPAVED | F.NOCAR) || w.surf === 1) return;
    const a = w.nodes[k], b = w.nodes[k + 1];
    if (this.dh[a] > 0.3 || this.dh[b] > 0.3) return;
    if (this.sidewalkSides(w, (this.nx[a] + this.nx[b]) / 2, (this.nz[a] + this.nz[b]) / 2)) return;
    const Z = this.zones(w).walk, T = this.terrain, VW = 0.9;
    const ci = [0.8, 0.76, 0.68], co = [0.5, 0.56, 0.38];
    for (let side = 0; side < 2; side++) {
      const sg = side ? 1 : -1;
      let prev = null;
      for (let s = 0; s <= nsub; s++) {
        const cum = w.cum[k] + s / nsub * L, e = edges[s];
        const ix = e[side * 3], iy = e[side * 3 + 1], iz = e[side * 3 + 2];
        const ox = ix + e[6] * sg * VW, oz = iz + e[7] * sg * VW;
        const nearJ = cum - Z.pc[k] < 40 || Z.nc[k + 1] - cum < 40;
        if (nearJ && this.coveredBy(wi, (ix + ox) / 2, (iz + oz) / 2, 0.6)) { prev = null; continue; }
        const cur = [g.v(ix, iy - 0.02, iz, ci[0], ci[1], ci[2], ix * 0.9, iz * 0.9), g.v(ox, T.height(ox, oz) + 0.04, oz, co[0], co[1], co[2], ox * 0.9, oz * 0.9)];
        if (prev) { if (sg > 0) g.quad(prev[0], prev[1], cur[1], cur[0]); else g.quad(prev[0], cur[0], cur[1], prev[1]); }
        prev = cur;
      }
    }
  }

  // segnaletica orizzontale italiana: margini, mezzeria, corsie (dai tag lanes:*).
  // Le linee si interrompono dove entrano nella carreggiata di un'altra strada.
  buildMarkings(mark, wi, k) {
    const w = this.ways[wi];
    if (w.cls >= CLS.SERVICE || !w.drivable || w.flags & F.UNPAVED || w.surf === 1) return;
    const a = w.nodes[k], b = w.nodes[k + 1];
    const ax = this.nx[a], az = this.nz[a], bx = this.nx[b], bz = this.nz[b];
    const L = Math.hypot(bx - ax, bz - az);
    if (L < 0.3) return;
    const sx = (bx - ax) / L, sz = (bz - az) / L;
    const ma = this.miter(w, k), mb = this.miter(w, k + 1);
    const hw = w.width / 2;
    const ZM = this.zones(w).mark, ZW = this.zones(w).walk;
    const s0 = w.cum[k];
    const lines = [];
    const urban = w.limit <= 50;
    const roundabout = w.flags & F.ROUNDABOUT;
    if (w.cls <= CLS.TERTIARY || roundabout || w.width >= 7) {
      const e = Math.max(0.3, w.sh * 0.85);
      lines.push({ off: -hw + e, wdt: 0.15, dash: 0, edge: true }, { off: hw - e, wdt: 0.15, dash: 0, edge: true });
    }
    const dashT = urban ? [3, 4.5] : [4.5, 7.5];
    if (!roundabout) {
      if (!w.oneway && w.nF >= 1 && w.nB >= 1 && w.width >= 5.4) {
        // linea continua in prossimita' degli incroci sulle strade principali
        const nearJ = (ZM.nc[k + 1] - (s0 + L) < 22 || s0 - ZM.pc[k] < 22) && w.cls <= CLS.TERTIARY;
        if (w.nF + w.nB >= 4) lines.push({ off: w.cOff - 0.14, wdt: 0.12, dash: 0 }, { off: w.cOff + 0.14, wdt: 0.12, dash: 0 });
        else lines.push({ off: w.cOff, wdt: 0.15, dash: nearJ ? 0 : dashT });
        for (let l = 1; l < w.nF; l++) lines.push({ off: w.cOff + w.lw * l, wdt: 0.12, dash: dashT });
        for (let l = 1; l < w.nB; l++) lines.push({ off: w.cOff - w.lw * l, wdt: 0.12, dash: dashT });
      } else if (w.oneway && w.nF >= 2) {
        for (let l = 1; l < w.nF; l++) lines.push({ off: -hw + w.sh + w.lw * l, wdt: 0.15, dash: [4.5, 7.5] });
      }
    } else if (w.nF >= 2) lines.push({ off: -hw + w.sh + w.lw, wdt: 0.12, dash: [3, 4.5] });
    // vicino a un incrocio (le immissioni delle superstrade sono lunghe) campiona fitto
    const reach = w.cls <= CLS.TRUNK || w.flags & F.LINK ? 220 : 35;
    const near = s0 - ZW.pc[k] < reach || ZW.nc[k + 1] - (s0 + L) < reach;
    const step = near ? 1.25 : 5;
    for (const ln of lines) {
      // punti di taglio: passo regolare + inizio/fine dei tratti
      const cuts = [];
      for (let d = 0; d < L; d += step) cuts.push(d);
      if (ln.dash) { const P = ln.dash[0] + ln.dash[1]; for (let st = Math.floor(s0 / P) * P; st < s0 + L; st += P) { if (st > s0) cuts.push(st - s0); if (st + ln.dash[0] > s0 && st + ln.dash[0] < s0 + L) cuts.push(st + ln.dash[0] - s0); } }
      cuts.push(L);
      cuts.sort((p, q) => p - q);
      // stato (dipinto / non dipinto) di ogni intervallo tra due tagli
      const ivs = [];
      for (let i = 0; i < cuts.length - 1; i++) {
        const d0 = cuts[i], d1 = cuts[i + 1];
        if (d1 - d0 < 0.02) continue;
        const dm = (d0 + d1) / 2, tm = dm / L;
        let on = !ln.dash || ((s0 + dm) % (ln.dash[0] + ln.dash[1])) < ln.dash[0];
        if (on && near) {
          const ox = ma[0] + (mb[0] - ma[0]) * tm, oz = ma[1] + (mb[1] - ma[1]) * tm;
          if (this.coveredBy(wi, ax + sx * dm + ox * ln.off, az + sz * dm + oz * ln.off, ln.edge ? 0.1 : 0, !!ln.edge)) on = false;
        }
        ivs.push([d0, d1, on]);
      }
      let pl = -1, pr = -1, prevD = -1;
      for (let i = 0; i < ivs.length; i++) {
        const [d0, d1, on] = ivs[i];
        if (!on) { pl = -1; continue; }
        // dentro un tratto continuo bastano i vertici ogni 5 m (per seguire il terreno): i tagli
        // fitti servono solo a trovare dove la linea comincia e finisce
        const nxt = ivs[i + 1];
        const mid = nxt && nxt[2] && nxt[0] === d1 && Math.abs(d1 / 5 - Math.round(d1 / 5)) > 1e-6;
        const cont = pl >= 0 && prevD === d0;
        if (mid && cont) { prevD = d1; continue; }
        for (const d of (cont ? [d1] : mid ? [d0] : [d0, d1])) {
          const t = d / L;
          const ox = ma[0] + (mb[0] - ma[0]) * t, oz = ma[1] + (mb[1] - ma[1]) * t;
          const cx = ax + sx * d + ox * ln.off, cz = az + sz * d + oz * ln.off;
          const lx = cx - ox * ln.wdt / 2, lz = cz - oz * ln.wdt / 2, qx = cx + ox * ln.wdt / 2, qz = cz + oz * ln.wdt / 2;
          const il = mark.v(lx, this.edgeH(wi, k, t, lx, lz) + 0.02, lz, 1, 1, 1), ir = mark.v(qx, this.edgeH(wi, k, t, qx, qz) + 0.02, qz, 1, 1, 1);
          if (pl >= 0) mark.quad(pl, pr, ir, il);
          pl = il; pr = ir;
        }
        prevD = d1;
      }
    }
  }

  // strisce pedonali, dossi, attraversamenti rialzati, mini-rotatorie, piazzole di manovra
  buildNodeMarks(tk, mark, road) {
    const done = new Set();
    const KINDS = [NT.CROSSING, NT.CROSSING_SIGNALS, NT.BUMP, NT.TABLE, NT.MINI_RB, NT.TURNING];
    for (const packed of this.tileSegs.get(tk) || []) {
      const wi = Math.floor(packed / 16384), k = packed % 16384;
      const w = this.ways[wi];
      if (!w.drivable) continue;
      for (const kk of [k, k + 1]) {
        const nd = w.nodes[kk], tag = this.ntag[nd];
        if (!tag || done.has(nd) || !KINDS.includes(tag)) continue;
        if (w.cls >= CLS.SERVICE && tag !== NT.TURNING) continue;
        done.add(nd);
        const kseg = Math.min(kk, w.nodes.length - 2);
        const a = w.nodes[kseg], b = w.nodes[kseg + 1];
        const dx = this.nx[b] - this.nx[a], dz = this.nz[b] - this.nz[a], L = Math.hypot(dx, dz) || 1;
        const sx = dx / L, sz = dz / L, rx = -sz, rz = sx;
        const cx = this.nx[nd], cz = this.nz[nd];
        const hw = w.width / 2;
        const t = kk === kseg ? 0 : 1;
        const rect = (la0, la1, lo0, lo1, c, lift = 0.025) => {
          const P = [[la0, lo0], [la1, lo0], [la1, lo1], [la0, lo1]].map(([la, lo]) => {
            const x = cx + rx * la + sx * lo, z = cz + rz * la + sz * lo;
            return mark.v(x, this.edgeH(wi, kseg, t, x, z) + lift, z, c[0], c[1], c[2]);
          });
          mark.quad(P[0], P[1], P[2], P[3]);
        };
        if (tag === NT.CROSSING || tag === NT.CROSSING_SIGNALS) {
          for (let o = -hw + 0.55; o <= hw - 0.55; o += 1.0) rect(o - 0.25, o + 0.25, -1.5, 1.5, [1, 1, 1]);
        } else if (tag === NT.BUMP) {
          let i = 0;
          for (let o = -hw + 0.2; o < hw - 0.2; o += 0.5, i++) rect(o, Math.min(hw - 0.2, o + 0.5), -0.45, 0.45, i % 2 ? [0.12, 0.12, 0.12] : [1, 0.82, 0.1], 0.06);
        } else if (tag === NT.TABLE) {
          rect(-hw + 0.1, hw - 0.1, -2.6, 2.6, [0.72, 0.36, 0.3], 0.05);
          for (let o = -hw + 0.6; o <= hw - 0.6; o += 1.0) rect(o - 0.25, o + 0.25, -1.5, 1.5, [1, 1, 1], 0.07);
        } else if (tag === NT.MINI_RB) {
          const y = this.edgeH(wi, kseg, t, cx, cz) + 0.03;
          const c0 = mark.v(cx, y + 0.08, cz, 1, 1, 1), ring = [];
          for (let i = 0; i < 16; i++) { const an = i / 16 * 6.2832; ring.push(mark.v(cx + Math.cos(an) * 1.5, y, cz + Math.sin(an) * 1.5, 1, 1, 1)); }
          for (let i = 0; i < 16; i++) mark.tri(c0, ring[(i + 1) % 16], ring[i]);
        } else if (tag === NT.TURNING) {
          const col = this.wayColor(w), R = Math.max(7, hw + 3);
          const c0 = road.v(cx, this.edgeH(wi, kseg, t, cx, cz), cz, col[0], col[1], col[2], cx * 0.2, cz * 0.2), ring = [];
          for (let i = 0; i < 20; i++) { const an = i / 20 * 6.2832, x = cx + Math.cos(an) * R, z = cz + Math.sin(an) * R; ring.push(road.v(x, this.edgeH(wi, kseg, t, x, z), z, col[0], col[1], col[2], x * 0.2, z * 0.2)); }
          for (let i = 0; i < 20; i++) road.tri(c0, ring[(i + 1) % 20], ring[i]);
        }
      }
    }
  }

  // frecce direzionali dal tag OSM turn:lanes
  buildLaneArrows(tk, decal) {
    const done = new Set();
    for (const packed of this.tileSegs.get(tk) || []) {
      const wi = Math.floor(packed / 16384), k = packed % 16384;
      const w = this.ways[wi];
      if ((!w.turnF && !w.turnB) || !w.drivable) continue;
      for (const dir of [1, -1]) {
        const str = dir > 0 ? w.turnF : w.turnB;
        const key = wi * 2 + (dir > 0 ? 0 : 1);
        if (!str || done.has(key)) continue;
        if (k !== (dir > 0 ? w.nodes.length - 2 : 0)) continue;
        done.add(key);
        const lanes = str.split('|');
        const span = dir > 0 ? (w.oneway ? w.width - 2 * w.sh : w.nF * w.lw) : w.nB * w.lw;
        const lw = span / lanes.length;
        for (const dist of w.len > 70 ? [9, 32] : [9]) {
          if (dist > w.len - 4) continue;
          const [px, pz, kk, t] = this.pointAt(w, dir > 0 ? w.len - dist : dist);
          const a = w.nodes[kk], b = w.nodes[kk + 1];
          let dx = this.nx[b] - this.nx[a], dz = this.nz[b] - this.nz[a]; const L = Math.hypot(dx, dz) || 1; dx = dx / L * dir; dz = dz / L * dir;
          const rx = -dz, rz = dx;
          // bordo sinistro delle corsie di questo senso, nel riferimento di marcia
          const left = dir > 0 ? (w.oneway ? -w.width / 2 + w.sh : w.cOff) : -w.cOff;
          lanes.forEach((ln, i) => {
            const set = new Set(ln.split(';').map((q) => q.replace('slight_', '').replace('sharp_', '').replace('reverse', 'left')).filter((q) => q === 'left' || q === 'right' || q === 'through'));
            if (!set.size) return;
            const o = left + lw * (i + 0.5);
            this.addDecal(decal, wi, kk, t, px + rx * o, pz + rz * o, dx, dz, Math.min(1.5, lw * 0.5), 4.2, [...set].sort().join(';'));
          });
        }
      }
    }
  }

  // linea di precedenza (triangoli) agli ingressi in rotatoria
  buildRoundaboutEntries(tk, mark) {
    for (const e of this.roundaboutEntries(tk)) {
      const w = this.ways[e.wi];
      let dx = this.nx[e.nd] - this.nx[e.from], dz = this.nz[e.nd] - this.nz[e.from];
      const L = Math.hypot(dx, dz) || 1; dx /= L; dz /= L;
      const rx = -dz, rz = dx;
      const back = this.w1[e.nd] / 2 + 0.5;
      const cx = this.nx[e.nd] - dx * back, cz = this.nz[e.nd] - dz * back;
      const left = w.oneway ? -w.width / 2 + 0.3 : (e.dir > 0 ? w.cOff : -w.cOff) + 0.15, right = w.width / 2 - 0.3;
      for (let o = left; o + 0.5 <= right; o += 0.75) {
        const P = [[o, -0.3], [o + 0.5, -0.3], [o + 0.25, 0.35]].map(([la, lo]) => {
          const x = cx + rx * la - dx * lo, z = cz + rz * la - dz * lo;
          return mark.v(x, this.edgeH(e.wi, e.k, e.t, x, z) + 0.03, z, 1, 1, 1);
        });
        mark.tri(P[0], P[1], P[2]); mark.tri(P[0], P[2], P[1]);
      }
    }
  }

  buildRails(tk, road) {
    const T = this.terrain;
    for (const packed of this.tileRails.get(tk) || []) {
      const ri = Math.floor(packed / 16384), k = packed % 16384;
      const r = this.rails[ri];
      const [ax, az] = r.p[k], [bx, bz] = r.p[k + 1];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 0.1) continue;
      const sx = (bx - ax) / L, sz = (bz - az) / L, rx = -sz, rz = sx;
      const n = Math.max(1, Math.ceil(L / 6));
      const hAt = (x, z, t) => {
        if (r.bridge && r.cum) { const s = r.cum[k] + t * L; return r.h0 + (r.h1 - r.h0) * s / (r.cum[r.cum.length - 1] || 1) + 0.25; }
        return T.height(x, z) + 0.25;
      };
      for (const [off, wdt, isRail] of [[0, 3.4, false], [-0.72, 0.08, true], [0.72, 0.08, true]]) {
        let pl = -1, pr = -1;
        for (let i = 0; i <= n; i++) {
          const t = i / n, cx = ax + (bx - ax) * t + rx * off, cz = az + (bz - az) * t + rz * off;
          const y = hAt(cx, cz, t) + (isRail ? 0.16 : 0);
          const lx = cx - rx * wdt / 2, lz = cz - rz * wdt / 2, qx = cx + rx * wdt / 2, qz = cz + rz * wdt / 2;
          const col = isRail ? [0.35, 0.33, 0.32] : [0.75, 0.68, 0.58];
          const il = road.v(lx, y, lz, ...col, lx * 0.3, lz * 0.3), ir = road.v(qx, y, qz, ...col, qx * 0.3, qz * 0.3);
          if (pl >= 0) road.quad(pl, pr, ir, il);
          pl = il; pr = ir;
        }
      }
    }
  }

  // ------------------------------------------------- elementi della tessera (dati OSM)
  // percorsi pedonali, ciclabili, sentieri e marciapiedi mappati a parte
  buildPaths(tile) {
    if (!tile || !tile.pa || !tile.pa.length) return null;
    const T = this.terrain, g = new GeoBuilder(true, true);
    const COL = [[0.95, 0.93, 0.88], [0.95, 0.5, 0.42], [0.9, 0.78, 0.6], [0.8, 0.8, 0.8], [0.96, 0.95, 0.92]];
    for (const rec of tile.pa) {
      const kind = rec[0], wdt = rec[1] / 10, bridge = rec[2];
      const pts = []; let x = 0, z = 0;
      for (let i = 3; i < rec.length; i += 2) { x += rec[i]; z += rec[i + 1]; pts.push([x / 10, z / 10]); }
      if (pts.length < 2) continue;
      // campioni fitti lungo il percorso
      const sm = []; let tot = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        const L = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]);
        const n = Math.max(1, Math.ceil(L / 6));
        for (let s = 0; s < n; s++) sm.push([pts[i][0] + (pts[i + 1][0] - pts[i][0]) * s / n, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * s / n, tot + L * s / n]);
        tot += L;
      }
      sm.push([pts[pts.length - 1][0], pts[pts.length - 1][1], tot]);
      const col = COL[kind];
      const h0 = T.height(sm[0][0], sm[0][1]), h1 = T.height(sm[sm.length - 1][0], sm[sm.length - 1][1]);
      let pl = -1, pr = -1;
      for (let i = 0; i < sm.length; i++) {
        const q = sm[Math.min(sm.length - 1, i + 1)], o = sm[Math.max(0, i - 1)];
        let dx = q[0] - o[0], dz = q[1] - o[1]; const L = Math.hypot(dx, dz) || 1; dx /= L; dz /= L;
        const rx = -dz, rz = dx, cx = sm[i][0], cz = sm[i][1], f = tot > 0 ? sm[i][2] / tot : 0;
        const lx = cx - rx * wdt / 2, lz = cz - rz * wdt / 2, qx = cx + rx * wdt / 2, qz = cz + rz * wdt / 2;
        const hy = bridge ? h0 + (h1 - h0) * f + Math.sin(Math.PI * f) * Math.min(5.5, tot * 0.12) + 0.1 : 0;
        const il = g.v(lx, bridge ? hy : T.height(lx, lz) + 0.1, lz, col[0], col[1], col[2], lx * 0.3, lz * 0.3);
        const ir = g.v(qx, bridge ? hy : T.height(qx, qz) + 0.1, qz, col[0], col[1], col[2], qx * 0.3, qz * 0.3);
        if (pl >= 0) g.quad(pl, pr, ir, il);
        pl = il; pr = ir;
      }
    }
    return g.empty ? null : g.mesh(this.materials().path);
  }

  // righe degli stalli dei parcheggi reali (tile.pk: x, z, rotta, larghezza, lunghezza*2+tipo)
  buildStalls(tile) {
    if (!tile || !tile.pk || !tile.pk.length) return null;
    const T = this.terrain, g = new GeoBuilder(true, false), pk = tile.pk;
    const line = (x0, z0, x1, z1, wd) => {
      const dx = x1 - x0, dz = z1 - z0, L = Math.hypot(dx, dz) || 1, rx = -dz / L * wd / 2, rz = dx / L * wd / 2;
      const P = [[x0 - rx, z0 - rz], [x0 + rx, z0 + rz], [x1 + rx, z1 + rz], [x1 - rx, z1 - rz]].map(([x, z]) => g.v(x, T.height(x, z) + 0.1, z, 1, 1, 1));
      g.quad(P[0], P[1], P[2], P[3]);
    };
    for (let i = 0; i < pk.length; i += 5) {
      const x = pk[i] / 10, z = pk[i + 1] / 10, h = pk[i + 2] / 10 * Math.PI / 180, wd = pk[i + 3] / 10, ln = (pk[i + 4] >> 1) / 10, typ = pk[i + 4] & 1;
      const fx = Math.sin(h), fz = Math.cos(h), rx = -fz, rz = fx;
      if (typ === 0) { // a pettine / a spina: righe sui lati lunghi
        for (const s of [1, -1]) line(x + rx * s * wd / 2 - fx * ln / 2, z + rz * s * wd / 2 - fz * ln / 2, x + rx * s * wd / 2 + fx * ln / 2, z + rz * s * wd / 2 + fz * ln / 2, 0.1);
      } else {         // in linea: righe alle estremita' e lato esterno
        for (const s of [1, -1]) line(x + fx * s * ln / 2 - rx * wd / 2, z + fz * s * ln / 2 - rz * wd / 2, x + fx * s * ln / 2 + rx * wd / 2, z + fz * s * ln / 2 + rz * wd / 2, 0.1);
      }
    }
    return g.empty ? null : g.mesh(this.materials().mark);
  }

  // muri di cinta, siepi, muri di sostegno e guardrail mappati in OSM
  buildBarriers(tile, collision, tileKey) {
    if (!tile || !tile.ba || !tile.ba.length) return null;
    const T = this.terrain, g = new GeoBuilder(true, false), gs = new GeoBuilder(true, false), gg = new GeoBuilder(true, true);
    const STY = [{ c: [0.72, 0.68, 0.6], th: 0.3 }, { c: [0.2, 0.36, 0.14], th: 0.9 }, { c: [0.56, 0.54, 0.5], th: 0.5 }, { c: [0.75, 0.77, 0.8], th: 0.08 }];
    for (const rec of tile.ba) {
      const st = STY[rec[0]], H = rec[1] / 10;
      const pts = []; let x = 0, z = 0;
      for (let i = 2; i < rec.length; i += 2) { x += rec[i]; z += rec[i + 1]; pts.push([x / 10, z / 10]); }
      if (rec[0] >= 4) {   // recinzioni: cancellata, rete, staccionata, ringhiera
        buildFence(gs, gg, pts, rec[0], H, T, rec[2] + rec[3] * 31);
        if (collision && rec[0] !== 7) for (let i = 0; i < pts.length - 1; i++) {
          const [ax, az] = pts[i], [bx, bz] = pts[i + 1], L = Math.hypot(bx - ax, bz - az);
          if (L < 1.5) continue;
          const ex = -(bz - az) / L * 0.3, ez = (bx - ax) / L * 0.3;
          collision.addPolygon(tileKey, Float32Array.from([ax - ex, az - ez, bx - ex, bz - ez, bx + ex, bz + ez, ax + ex, az + ez]));
        }
        continue;
      }
      for (let i = 0; i < pts.length - 1; i++) {
        const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
        const L = Math.hypot(bx - ax, bz - az);
        if (L < 0.2) continue;
        const rx = -(bz - az) / L * st.th / 2, rz = (bx - ax) / L * st.th / 2;
        const n = Math.max(1, Math.ceil(L / 8));
        for (let s = 0; s < n; s++) {
          const t0 = s / n, t1 = (s + 1) / n;
          const x0 = ax + (bx - ax) * t0, z0 = az + (bz - az) * t0, x1 = ax + (bx - ax) * t1, z1 = az + (bz - az) * t1;
          const y0 = T.height(x0, z0), y1 = T.height(x1, z1);
          const base = rec[0] === 3 ? 0.45 : -0.3;
          const c = st.c, d = [c[0] * 0.8, c[1] * 0.8, c[2] * 0.8];
          const corners = [[x0 - rx, z0 - rz, y0], [x1 - rx, z1 - rz, y1], [x1 + rx, z1 + rz, y1], [x0 + rx, z0 + rz, y0]];
          const top = corners.map(([px, pz, py]) => g.v(px, py + H, pz, c[0], c[1], c[2]));
          g.quad(top[0], top[1], top[2], top[3]);
          for (const [i0, i1] of [[0, 1], [2, 3]]) {
            const A = corners[i0], B = corners[i1];
            const q0 = g.v(A[0], A[2] + H, A[1], d[0], d[1], d[2]), q1 = g.v(B[0], B[2] + H, B[1], d[0], d[1], d[2]), q2 = g.v(B[0], B[2] + base, B[1], d[0], d[1], d[2]), q3 = g.v(A[0], A[2] + base, A[1], d[0], d[1], d[2]);
            g.quad(q0, q1, q2, q3);
          }
        }
        if (collision && rec[0] !== 3 && L > 1.5) {
          const e = Math.max(0.4, st.th / 2), ex = -(bz - az) / L * e, ez = (bx - ax) / L * e;
          collision.addPolygon(tileKey, Float32Array.from([ax - ex, az - ez, bx - ex, bz - ez, bx + ex, bz + ez, ax + ex, az + ez]));
        }
      }
    }
    const grp = new THREE.Group();
    if (!g.empty) grp.add(g.mesh(this.materials().barrier, true));
    if (!gs.empty) grp.add(gs.mesh(fenceMaterials().solid, false));
    if (!gg.empty) {
      const m = gg.mesh(fenceMaterials().grille, false);
      grp.add(m);
    }
    return grp.children.length ? grp : null;
  }
}
