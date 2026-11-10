import * as THREE from 'three';
import { GeoBuilder, canvasTexture } from './geo.js';
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
  constructor(data, terrain, meta) {
    this.terrain = terrain;
    this.names = data.names;
    const p = meta.proj;
    this.xmin = p.xmin; this.zmin = p.zmin; this.xmax = p.xmax; this.zmax = p.zmax;
    this.tileSize = meta.tile;
    const HEAD = data.wayHead || 8;

    // nodi OSM
    const nn0 = data.nodes.length / 2;
    const nx = new Array(nn0), nz = new Array(nn0), dh = new Array(nn0).fill(0);
    let x = 0, z = 0;
    for (let i = 0; i < nn0; i++) { x += data.nodes[i * 2]; z += data.nodes[i * 2 + 1]; nx[i] = x / 10; nz[i] = z / 10; }
    for (let i = 0; i < data.dh.length; i += 2) dh[data.dh[i]] = data.dh[i + 1] / 10;

    // vie
    this.ways = data.ways.map((a) => {
      const ext = HEAD > 8;
      const w = {
        name: this.names[a[0]], ref: this.names[a[1]], cls: a[2], flags: a[3], lanes: a[4], speed: a[5], layer: a[6], widthTag: a[7] / 10,
        surf: ext ? a[8] : 0, sw: ext ? a[9] : 0, lit: ext ? a[10] : 0, lf: ext ? a[11] : 0, lb: ext ? a[12] : 0,
        turnF: ext ? this.names[a[13]] : '', turnB: ext ? this.names[a[14]] : '', dest: ext ? this.names[a[15]] : '',
        nodes: a.slice(HEAD),
      };
      w.oneway = !!(w.flags & F.ONEWAY);
      w.drivable = !(w.flags & F.NOCAR);
      this.layout(w);
      return w;
    });

    this.smooth(nx, nz, dh);
    this.fixRoundabouts(nx, nz);
    const nn = nx.length;
    this.nx = Float32Array.from(nx); this.nz = Float32Array.from(nz); this.dh = Float32Array.from(dh);
    this.nodeCount = nn;
    this.ntag = new Uint8Array(nn); this.ndir = new Uint8Array(nn);
    const step = HEAD > 8 ? 3 : 2;
    for (let i = 0; i < data.ntags.length; i += step) { this.ntag[data.ntags[i]] = data.ntags[i + 1]; if (step === 3) this.ndir[data.ntags[i]] = data.ntags[i + 2]; }
    this.junctionNames = new Map();
    for (let i = 0; i < (data.mj || []).length; i += 3) this.junctionNames.set(data.mj[i], { name: this.names[data.mj[i + 1]], ref: this.names[data.mj[i + 2]] });

    for (const w of this.ways) {
      w.nodes = Int32Array.from(w.nodes);
      const n = w.nodes.length;
      w.cum = new Float32Array(n);
      for (let k = 1; k < n; k++) {
        const a0 = w.nodes[k - 1], b0 = w.nodes[k];
        w.cum[k] = w.cum[k - 1] + Math.hypot(this.nx[b0] - this.nx[a0], this.nz[b0] - this.nz[a0]);
      }
      w.len = w.cum[n - 1];
      w.abs = !!(w.flags & (F.BRIDGE | F.TUNNEL));
      if (w.abs) {
        const f = w.nodes[0], l = w.nodes[n - 1];
        w.h0 = terrain.height(this.nx[f], this.nz[f]) + this.dh[f];
        w.h1 = terrain.height(this.nx[l], this.nz[l]) + this.dh[l];
      }
    }
    // limiti di velocita' (indicativi se non mappati in OSM)
    for (const w of this.ways) {
      if (w.speed > 0) { w.limit = w.speed; w.limitMapped = true; continue; }
      const mid = this.pointAt(w, w.len / 2);
      const urban = terrain.isUrban(mid[0], mid[1]);
      const c = w.cls;
      let v;
      if (c === 0) v = w.flags & F.LINK ? 80 : 130;
      else if (c === 1) v = w.flags & F.LINK ? 60 : (urban ? 70 : 110);
      else if (c <= 4) v = w.flags & F.LINK ? 50 : (urban ? 50 : 90);
      else if (c === 5) v = urban ? 50 : 70;
      else if (c === 6) v = 50;
      else v = 30;
      if (w.flags & F.ROUNDABOUT) v = Math.min(v, 50);
      w.limit = v; w.limitMapped = false;
    }

    // adiacenza nodo -> (via, posizione)
    const cnt = new Int32Array(nn + 1);
    this.ways.forEach((w) => { for (const nd of w.nodes) cnt[nd + 1]++; });
    for (let i = 0; i < nn; i++) cnt[i + 1] += cnt[i];
    this.adjStart = cnt;
    this.adjWay = new Int32Array(cnt[nn]); this.adjPos = new Int32Array(cnt[nn]);
    const fill = cnt.slice(0, nn);
    this.ways.forEach((w, wi) => {
      for (let k = 0; k < w.nodes.length; k++) { const nd = w.nodes[k]; const o = fill[nd]++; this.adjWay[o] = wi; this.adjPos[o] = k; }
    });
    // grado del nodo (tratti incidenti); degMain conta solo le strade vere (non di servizio)
    this.degree = new Uint8Array(nn); this.degMain = new Uint8Array(nn);
    this.w1 = new Float32Array(nn); this.w2 = new Float32Array(nn);   // due larghezze maggiori (tutte le vie)
    this.m1 = new Float32Array(nn); this.m2 = new Float32Array(nn);   // idem, solo strade vere
    this.onRb = new Uint8Array(nn);
    this.ways.forEach((w) => {
      const main = w.cls <= CLS.LIVING && w.drivable;
      for (let k = 0; k < w.nodes.length; k++) {
        const nd = w.nodes[k];
        const d = (k > 0 ? 1 : 0) + (k < w.nodes.length - 1 ? 1 : 0);
        this.degree[nd] += d;
        if (main) this.degMain[nd] += d;
        if (w.width > this.w1[nd]) { this.w2[nd] = this.w1[nd]; this.w1[nd] = w.width; } else if (w.width > this.w2[nd]) this.w2[nd] = w.width;
        if (main) { if (w.width > this.m1[nd]) { this.m2[nd] = this.m1[nd]; this.m1[nd] = w.width; } else if (w.width > this.m2[nd]) this.m2[nd] = w.width; }
        if (w.flags & F.ROUNDABOUT) this.onRb[nd] = 1;
      }
    });

    // indice spaziale dei segmenti e assegnazione alle tessere
    this.grid = new Map();
    this.tileSegs = new Map();
    this.ways.forEach((w, wi) => {
      const hw = w.width / 2 + 1;
      for (let k = 0; k < w.nodes.length - 1; k++) {
        const a = w.nodes[k], b = w.nodes[k + 1];
        const ax = this.nx[a], az = this.nz[a], bx = this.nx[b], bz = this.nz[b];
        const packed = wi * 16384 + k;
        const i0 = Math.floor((Math.min(ax, bx) - hw - this.xmin) / CELL), i1 = Math.floor((Math.max(ax, bx) + hw - this.xmin) / CELL);
        const j0 = Math.floor((Math.min(az, bz) - hw - this.zmin) / CELL), j1 = Math.floor((Math.max(az, bz) + hw - this.zmin) / CELL);
        for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
          const key = j * 4096 + i;
          let arr = this.grid.get(key);
          if (!arr) this.grid.set(key, arr = []);
          arr.push(packed);
        }
        const tk = this.tileKey((ax + bx) / 2, (az + bz) / 2);
        let ts = this.tileSegs.get(tk);
        if (!ts) this.tileSegs.set(tk, ts = []);
        ts.push(packed);
      }
    });
    // ferrovie
    this.rails = data.rails.map((r) => ({ p: r.p, bridge: r.b, tunnel: r.t, name: r.n }));
    this.tileRails = new Map();
    this.rails.forEach((r, ri) => {
      for (let k = 0; k < r.p.length - 1; k++) {
        const tk = this.tileKey((r.p[k][0] + r.p[k + 1][0]) / 2, (r.p[k][1] + r.p[k + 1][1]) / 2);
        let ts = this.tileRails.get(tk);
        if (!ts) this.tileRails.set(tk, ts = []);
        ts.push(ri * 16384 + k);
      }
      if (r.bridge) {
        const a = r.p[0], b = r.p[r.p.length - 1];
        r.h0 = terrain.height(a[0], a[1]); r.h1 = terrain.height(b[0], b[1]);
        r.cum = [0];
        for (let k = 1; k < r.p.length; k++) r.cum.push(r.cum[k - 1] + Math.hypot(r.p[k][0] - r.p[k - 1][0], r.p[k][1] - r.p[k - 1][1]));
      }
    });
    this.findRoundabouts();
    this.buildStreetIndex(meta);
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

  // L'anello delle rotatorie in OSM e' l'asse della corona giratoria: la larghezza
  // reale dipende dal raggio (corona piu' larga nelle rotatorie grandi).
  fixRoundabouts(nx, nz) {
    const parent = new Map();
    const find = (a) => { while (parent.get(a) !== a) { parent.set(a, parent.get(parent.get(a))); a = parent.get(a); } return a; };
    const rb = this.ways.filter((w) => w.flags & F.ROUNDABOUT);
    for (const w of rb) { for (const n of w.nodes) if (!parent.has(n)) parent.set(n, n); for (let k = 1; k < w.nodes.length; k++) { const a = find(w.nodes[k - 1]), b = find(w.nodes[k]); if (a !== b) parent.set(a, b); } }
    const comps = new Map();
    for (const n of parent.keys()) { const r = find(n); if (!comps.has(r)) comps.set(r, []); comps.get(r).push(n); }
    const width = new Map();
    for (const [root, nodes] of comps) {
      let cx = 0, cz = 0; for (const n of nodes) { cx += nx[n]; cz += nz[n]; } cx /= nodes.length; cz /= nodes.length;
      let rm = 0; for (const n of nodes) rm += Math.hypot(nx[n] - cx, nz[n] - cz); rm /= nodes.length;
      width.set(root, Math.max(4.5, Math.min(9, rm * 0.5, 2 * (rm - 2))));
    }
    for (const w of rb) {
      if (w.widthTag > 2) continue;
      const W = width.get(find(w.nodes[0]));
      if (!W) continue;
      const lanes = w.lanes >= 2 && W >= 7.5 ? 2 : 1;
      w.width = W; w.nF = lanes; w.nB = 0; w.sh = 0.4; w.lw = (W - 0.8) / lanes; w.cOff = -W / 2 + w.sh;
    }
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

  // Curve morbide: i tratti curvi vengono suddivisi con una spline di Hermite che
  // passa esattamente per i nodi OSM (tangente = bisettrice dei tratti adiacenti).
  smooth(nx, nz, dh) {
    const n0 = nx.length;
    const deg = new Uint8Array(n0);
    const ends = new Map(); // nodo -> [[via, estremo]]
    this.ways.forEach((w, wi) => {
      const n = w.nodes;
      for (let k = 0; k < n.length; k++) deg[n[k]] += (k > 0 ? 1 : 0) + (k < n.length - 1 ? 1 : 0);
      for (const e of [0, n.length - 1]) { let a = ends.get(n[e]); if (!a) ends.set(n[e], a = []); a.push([wi, e]); }
    });
    const cont = (wi, k) => { // nodo oltre l'estremo k della via (prosecuzione), o -1
      const w = this.ways[wi], n = w.nodes, cur = n[k];
      if (n[0] === n[n.length - 1] && n.length > 3) return k === 0 ? n[n.length - 2] : n[1];
      if (deg[cur] !== 2) return -1;
      for (const [wj, e] of ends.get(cur) || []) {
        if (wj === wi) continue;
        const m = this.ways[wj].nodes;
        return e === 0 ? m[1] : m[m.length - 2];
      }
      return -1;
    };
    const tan = (wi, k) => {
      const n = this.ways[wi].nodes, cur = n[k];
      const prev = k > 0 ? n[k - 1] : cont(wi, k), next = k < n.length - 1 ? n[k + 1] : cont(wi, k);
      let ax = 0, az = 0, bx = 0, bz = 0, bend = 0;
      if (prev >= 0) { const L = Math.hypot(nx[cur] - nx[prev], nz[cur] - nz[prev]) || 1; ax = (nx[cur] - nx[prev]) / L; az = (nz[cur] - nz[prev]) / L; }
      if (next >= 0) { const L = Math.hypot(nx[next] - nx[cur], nz[next] - nz[cur]) || 1; bx = (nx[next] - nx[cur]) / L; bz = (nz[next] - nz[cur]) / L; }
      if (prev >= 0 && next >= 0) bend = Math.acos(Math.max(-1, Math.min(1, ax * bx + az * bz)));
      const tx = ax + bx, tz = az + bz;
      const L = Math.hypot(tx, tz);
      if (L < 1e-6) return null;
      return [tx / L, tz / L, bend];
    };
    this.ways.forEach((w, wi) => {
      const n = w.nodes;
      if (n.length < 2) return;
      const out = [n[0]];
      let Ta = tan(wi, 0);
      for (let k = 0; k < n.length - 1; k++) {
        const a = n[k], b = n[k + 1];
        const Tb = tan(wi, k + 1);
        const cx = nx[b] - nx[a], cz = nz[b] - nz[a], L = Math.hypot(cx, cz);
        if (L > 3 && Ta && Tb) {
          const ux = cx / L, uz = cz / L;
          const aA = Math.acos(Math.max(-1, Math.min(1, Ta[0] * ux + Ta[1] * uz)));
          const aB = Math.acos(Math.max(-1, Math.min(1, Tb[0] * ux + Tb[1] * uz)));
          const am = Math.max(aA, aB);
          if (am > 0.03 && am < 1.1) {
            const sag = L * am / 4;
            const ns = Math.min(10, Math.ceil(Math.sqrt(sag / 0.04)));
            if (ns >= 2) {
              const ma = Ta[2] > 0.6 ? Math.min(L, 7) : L, mb = Tb[2] > 0.6 ? Math.min(L, 7) : L;
              for (let s = 1; s < ns; s++) {
                const t = s / ns, t2 = t * t, t3 = t2 * t;
                const h00 = 2 * t3 - 3 * t2 + 1, h10 = t3 - 2 * t2 + t, h01 = -2 * t3 + 3 * t2, h11 = t3 - t2;
                nx.push(h00 * nx[a] + h10 * ma * Ta[0] + h01 * nx[b] + h11 * mb * Tb[0]);
                nz.push(h00 * nz[a] + h10 * ma * Ta[1] + h01 * nz[b] + h11 * mb * Tb[1]);
                dh.push(dh[a] + (dh[b] - dh[a]) * t);
                out.push(nx.length - 1);
              }
            }
          }
        }
        out.push(b);
        Ta = Tb;
      }
      w.nodes = out;
    });
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
    const a = w.nodes[k], b = w.nodes[k + 1];
    return this.terrain.height(x, z) + this.dh[a] + (this.dh[b] - this.dh[a]) * t + LIFT;
  }

  segmentsNear(x, z, r, cb) {
    const i0 = Math.floor((x - r - this.xmin) / CELL), i1 = Math.floor((x + r - this.xmin) / CELL);
    const j0 = Math.floor((z - r - this.zmin) / CELL), j1 = Math.floor((z + r - this.zmin) / CELL);
    const seen = this._seen || (this._seen = new Set());
    seen.clear();
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const arr = this.grid.get(j * 4096 + i);
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
    this.segmentsNear(x, z, 8, (wi, k) => {
      const w = this.ways[wi];
      const pr = this.projectOnSeg(wi, k, x, z);
      if (pr.d > w.width / 2 + 0.35) return;
      const h = this.heightOn(wi, k, pr.t, x, z);
      if (h <= yRef + 1.3 && (h > bestH + 0.01 || (Math.abs(h - bestH) <= 0.01 && best && pr.d < best.d))) { bestH = h; best = { wi, k, t: pr.t, d: pr.d }; }
    });
    const th = this.terrain.height(x, z);
    if (best && bestH >= th - 0.6) return { h: bestH, road: best };
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

  findRoundabouts() {
    // componenti connesse dei tratti di rotatoria -> isola centrale
    const parent = new Map();
    const find = (a) => { while (parent.get(a) !== a) { parent.set(a, parent.get(parent.get(a))); a = parent.get(a); } return a; };
    const union = (a, b) => { a = find(a); b = find(b); if (a !== b) parent.set(a, b); };
    this.ways.forEach((w) => {
      if (!(w.flags & F.ROUNDABOUT)) return;
      for (const n of w.nodes) if (!parent.has(n)) parent.set(n, n);
      for (let k = 1; k < w.nodes.length; k++) union(w.nodes[k - 1], w.nodes[k]);
    });
    const comps = new Map();
    for (const n of parent.keys()) { const r = find(n); if (!comps.has(r)) comps.set(r, []); comps.get(r).push(n); }
    const wmax = new Map();
    this.ways.forEach((w) => { if (w.flags & F.ROUNDABOUT) for (const n of w.nodes) wmax.set(n, Math.max(wmax.get(n) || 0, w.width)); });
    this.roundabouts = [];
    for (const nodes of comps.values()) {
      if (nodes.length < 4) continue;
      let cx = 0, cz = 0;
      for (const n of nodes) { cx += this.nx[n]; cz += this.nz[n]; }
      cx /= nodes.length; cz /= nodes.length;
      let rmin = 1e9, rmax = 0, wm = 0, dhm = 0;
      for (const n of nodes) {
        const d = Math.hypot(this.nx[n] - cx, this.nz[n] - cz);
        rmin = Math.min(rmin, d); rmax = Math.max(rmax, d); wm = Math.max(wm, wmax.get(n)); dhm += this.dh[n];
      }
      if (rmax > rmin * 1.8 || rmax > 120) continue; // non e' un anello
      const r = rmin - wm / 2 - 0.3;
      if (r < 1.2) continue;
      // bordo interno della corona: segue la forma reale dell'anello
      const poly = nodes.map((n) => { const d = Math.hypot(this.nx[n] - cx, this.nz[n] - cz), f = Math.max(0.1, (d - wmax.get(n) / 2 - 0.1) / d); return [Math.atan2(this.nz[n] - cz, this.nx[n] - cx), cx + (this.nx[n] - cx) * f, cz + (this.nz[n] - cz) * f]; })
        .sort((p, q) => p[0] - q[0]).map((p) => [p[1], p[2]]);
      this.roundabouts.push({ x: cx, z: cz, r, dh: dhm / nodes.length, poly });
    }
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
    return ROAD_COL[w.cls];
  }

  // quota di un punto della carreggiata (anche ai bordi)
  edgeH(wi, k, t, x, z) {
    const w = this.ways[wi];
    if (w.abs) return this.heightOn(wi, k, t, x, z);
    const a = w.nodes[k], b = w.nodes[k + 1];
    return this.terrain.height(x, z) + this.dh[a] + (this.dh[b] - this.dh[a]) * t + LIFT;
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

  buildTile(tk) {
    const group = new THREE.Group();
    const segs = this.tileSegs.get(tk) || [];
    const M = this.materials();
    const road = new GeoBuilder(true, true), stone = new GeoBuilder(true, true), mark = new GeoBuilder(true, false), wall = new GeoBuilder(false, false), guard = new GeoBuilder(false, false);
    const walk = new GeoBuilder(true, true), decal = new GeoBuilder(true, true);
    const T = this.terrain;
    const STEP = 5;
    const discDone = new Set();
    for (const packed of segs) {
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
      const nsub = Math.max(1, Math.ceil(L / STEP));
      const col = this.wayColor(w);
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
    this.buildNodeMarks(tk, mark, road);
    this.buildLaneArrows(tk, decal);
    this.buildRoundaboutEntries(tk, mark);
    this.buildRails(tk, road, wall);
    if (!road.empty) group.add(road.mesh(M.road));
    if (!stone.empty) group.add(stone.mesh(M.stone));
    if (!walk.empty) group.add(walk.mesh(M.walk));
    if (!mark.empty) group.add(mark.mesh(M.mark));
    if (!decal.empty) group.add(decal.mesh(M.decal));
    if (!wall.empty) group.add(wall.mesh(M.wall, true));
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
      let pl = -1, pr = -1, prevD = -1;
      for (let i = 0; i < cuts.length - 1; i++) {
        const d0 = cuts[i], d1 = cuts[i + 1];
        if (d1 - d0 < 0.02) continue;
        const dm = (d0 + d1) / 2, tm = dm / L;
        let on = !ln.dash || ((s0 + dm) % (ln.dash[0] + ln.dash[1])) < ln.dash[0];
        if (on && near) {
          const ox = ma[0] + (mb[0] - ma[0]) * tm, oz = ma[1] + (mb[1] - ma[1]) * tm;
          if (this.coveredBy(wi, ax + sx * dm + ox * ln.off, az + sz * dm + oz * ln.off, ln.edge ? 0.1 : 0, !!ln.edge)) on = false;
        }
        if (!on) { pl = -1; continue; }
        for (const d of (pl >= 0 && prevD === d0 ? [d1] : [d0, d1])) {
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
    if (!gs.empty) grp.add(gs.mesh(fenceMaterials().solid, true));
    if (!gg.empty) {
      const m = gg.mesh(fenceMaterials().grille, true);
      m.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: fenceMaterials().grille.map, alphaTest: 0.45, side: THREE.DoubleSide });
      grp.add(m);
    }
    return grp.children.length ? grp : null;
  }
}
