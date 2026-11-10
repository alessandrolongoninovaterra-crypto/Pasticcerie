import * as THREE from 'three';
import { GeoBuilder, canvasTexture } from './geo.js';

// Classi stradali (come tools/build_data.py)
export const CLS = { MOTORWAY: 0, TRUNK: 1, PRIMARY: 2, SECONDARY: 3, TERTIARY: 4, UNCLASSIFIED: 5, RESIDENTIAL: 6, LIVING: 7, SERVICE: 8, TRACK: 9, PEDESTRIAN: 10 };
export const F = { ONEWAY: 1, ROUNDABOUT: 2, BRIDGE: 4, TUNNEL: 8, LINK: 16, PRIVATE: 32, UNPAVED: 64, NOCAR: 128, OVERPASS: 256 };
export const NT = { SIGNALS: 1, STOP: 2, GIVE_WAY: 3, CROSSING: 4, MINI_RB: 5, LEVEL_CROSSING: 6, BUMP: 7, SPEED_CAM: 8, LAMP: 9 };
export const CLASS_NAMES = ['Autostrada', 'Superstrada', 'Strada principale', 'Strada secondaria', 'Strada terziaria', 'Strada locale', 'Strada residenziale', 'Zona residenziale', 'Strada di servizio', 'Strada sterrata', 'Area pedonale'];

const LIFT = 0.18;          // sollevamento della carreggiata sul terreno (m)
const CELL = 32;            // cella dell'indice spaziale (m)
const LANE_W = [3.75, 3.6, 3.5, 3.3, 3.1, 2.9, 2.8, 2.6, 2.5, 2.5, 3];

export class RoadNetwork {
  constructor(data, terrain, meta) {
    this.terrain = terrain;
    this.names = data.names;
    const p = meta.proj;
    this.xmin = p.xmin; this.zmin = p.zmin; this.xmax = p.xmax; this.zmax = p.zmax;
    this.tileSize = meta.tile;

    // nodi
    const nn = data.nodes.length / 2;
    this.nx = new Float32Array(nn); this.nz = new Float32Array(nn);
    let x = 0, z = 0;
    for (let i = 0; i < nn; i++) { x += data.nodes[i * 2]; z += data.nodes[i * 2 + 1]; this.nx[i] = x / 10; this.nz[i] = z / 10; }
    this.dh = new Float32Array(nn);
    for (let i = 0; i < data.dh.length; i += 2) this.dh[data.dh[i]] = data.dh[i + 1] / 10;
    this.ntag = new Uint8Array(nn);
    for (let i = 0; i < data.ntags.length; i += 2) this.ntag[data.ntags[i]] = data.ntags[i + 1];
    this.nodeCount = nn;

    // vie
    this.ways = data.ways.map((a) => {
      const w = {
        name: this.names[a[0]], ref: this.names[a[1]], cls: a[2], flags: a[3], lanes: a[4], speed: a[5], layer: a[6],
        widthTag: a[7] / 10, nodes: Int32Array.from(a.slice(8)),
      };
      w.oneway = !!(w.flags & F.ONEWAY);
      w.drivable = !(w.flags & F.NOCAR);
      w.width = this.wayWidth(w);
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
      return w;
    });
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
      else if (c === 7) v = 30;
      else if (c === 8) v = 30;
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
    // grado del nodo (numero di tratti incidenti)
    this.degree = new Uint8Array(nn);
    this.ways.forEach((w) => {
      for (let k = 0; k < w.nodes.length; k++) {
        const nd = w.nodes[k];
        this.degree[nd] += (k > 0 ? 1 : 0) + (k < w.nodes.length - 1 ? 1 : 0);
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

  wayWidth(w) {
    if (w.widthTag > 2 && w.widthTag < 30) return w.widthTag;
    const c = w.cls;
    if (c === CLS.TRACK) return 3.2;
    if (c === CLS.SERVICE) return w.oneway ? 3.5 : 4.6;
    if (c === CLS.PEDESTRIAN) return 6;
    const lw = LANE_W[c];
    let lanes = w.lanes || (w.oneway ? (c <= 1 && !(w.flags & F.LINK) ? 2 : 1) : 2);
    if (w.flags & F.ROUNDABOUT && !w.lanes) lanes = c <= 3 ? 1.6 : 1.4;
    let width = lanes * lw;
    if (w.oneway && lanes === 1) width = Math.max(width + 0.8, 4.2);
    if (c <= 1) width += 1.8; else if (c <= 3) width += 0.8;
    return width;
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
    let any = null, anyD = 1e9;
    this.segmentsNear(x, z, 8, (wi, k) => {
      const w = this.ways[wi];
      const pr = this.projectOnSeg(wi, k, x, z);
      if (pr.d > w.width / 2 + 0.35) return;
      const h = this.heightOn(wi, k, pr.t, x, z);
      if (h <= yRef + 1.3 && h > bestH) { bestH = h; best = { wi, k, t: pr.t, d: pr.d }; }
      if (pr.d < anyD) { anyD = pr.d; any = { wi, k, t: pr.t, d: pr.d, h }; }
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
      this.roundabouts.push({ x: cx, z: cz, r, dh: dhm / nodes.length });
    }
  }

  buildStreetIndex(meta) {
    // indice per la ricerca di vie: nome -> elenco posizioni (una per comune)
    this.streets = new Map();
    this.ways.forEach((w, wi) => {
      if (!w.name || !w.drivable) return;
      const [x, z] = this.pointAt(w, w.len / 2);
      let arr = this.streets.get(w.name);
      if (!arr) this.streets.set(w.name, arr = []);
      arr.push({ wi, x, z, len: w.len });
    });
  }

  // ------------------------------------------------------------- geometria
  materials(sky) {
    if (this._mats) return this._mats;
    const asphalt = canvasTexture(256, 256, (ctx, w, h) => {
      ctx.fillStyle = '#7a7a7a'; ctx.fillRect(0, 0, w, h);
      const img = ctx.getImageData(0, 0, w, h);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = 100 + Math.random() * 70 + (Math.random() < 0.03 ? 50 : 0);
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      }
      ctx.putImageData(img, 0, 0);
      ctx.globalAlpha = 0.08; ctx.strokeStyle = '#000';
      for (let i = 0; i < 6; i++) { ctx.lineWidth = 1 + Math.random() * 3; ctx.beginPath(); ctx.moveTo(Math.random() * w, Math.random() * h); ctx.bezierCurveTo(Math.random() * w, Math.random() * h, Math.random() * w, Math.random() * h, Math.random() * w, Math.random() * h); ctx.stroke(); }
    });
    const po = (m, f, u) => { m.polygonOffset = true; m.polygonOffsetFactor = f; m.polygonOffsetUnits = u; return m; };
    this._mats = {
      road: po(new THREE.MeshLambertMaterial({ map: asphalt, vertexColors: true }), -2, -4),
      mark: po(new THREE.MeshLambertMaterial({ color: 0xf2f2ee, vertexColors: true }), -4, -8),
      wall: new THREE.MeshLambertMaterial({ color: 0xa8a49a, side: THREE.DoubleSide }),
      rail: new THREE.MeshLambertMaterial({ color: 0x5a5550 }),
      ballast: po(new THREE.MeshLambertMaterial({ color: 0x8a8070, map: asphalt }), -1, -2),
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

  buildTile(tk) {
    const group = new THREE.Group();
    const segs = this.tileSegs.get(tk) || [];
    const M = this.materials();
    const road = new GeoBuilder(true, true), mark = new GeoBuilder(true, false), wall = new GeoBuilder(false, false), guard = new GeoBuilder(false, false);
    const T = this.terrain;
    const STEP = 5;
    const self = this;
    // quota di un punto laterale della carreggiata
    function edgeH(wi, k, t, x, z) {
      const w = self.ways[wi];
      if (w.abs) return self.heightOn(wi, k, t, x, z);
      const a = w.nodes[k], b = w.nodes[k + 1];
      return T.height(x, z) + self.dh[a] + (self.dh[b] - self.dh[a]) * t + LIFT;
    }
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
      let col;
      if (w.flags & F.NOCAR) col = [0.85, 0.8, 0.72];
      else if (w.flags & F.UNPAVED) col = [0.95, 0.82, 0.62];
      else col = [[0.5, 0.5, 0.52], [0.52, 0.52, 0.54], [0.55, 0.55, 0.57], [0.57, 0.57, 0.58], [0.6, 0.6, 0.6], [0.62, 0.62, 0.62], [0.64, 0.64, 0.64], [0.68, 0.66, 0.63], [0.64, 0.64, 0.64], [0.9, 0.85, 0.75], [0.95, 0.9, 0.82]][w.cls];
      const elevated = w.abs || this.dh[a] > 0.3 || this.dh[b] > 0.3;
      let prevL = -1, prevR = -1;
      const edges = [];
      for (let s = 0; s <= nsub; s++) {
        const t = s / nsub;
        const cx = ax + (bx - ax) * t, cz = az + (bz - az) * t;
        let ox, oz;
        if (s === 0) { ox = ma[0]; oz = ma[1]; } else if (s === nsub) { ox = mb[0]; oz = mb[1]; } else { ox = rx; oz = rz; }
        const lx = cx - ox * hw, lz = cz - oz * hw, qx = cx + ox * hw, qz = cz + oz * hw;
        const hl = edgeH(wi, k, t, lx, lz), hr = edgeH(wi, k, t, qx, qz);
        const il = road.v(lx, hl, lz, col[0], col[1], col[2], lx * 0.2, lz * 0.2);
        const ir = road.v(qx, hr, qz, col[0], col[1], col[2], qx * 0.2, qz * 0.2);
        if (prevL >= 0) road.quad(prevL, prevR, ir, il);
        prevL = il; prevR = ir;
        edges.push([lx, hl, lz, qx, hr, qz]);
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
            const bottom0 = w.abs ? Math.max(g0 - 1, y0 - 1.4) : g0 - 0.5, bottom1 = w.abs ? Math.max(g1 - 1, y1 - 1.4) : g1 - 0.5;
            const i0 = wall.v(x0, y0, z0), i1 = wall.v(x1, y1, z1), i2 = wall.v(x1, bottom1, z1), i3 = wall.v(x0, bottom0, z0);
            wall.quad(i0, i1, i2, i3);
            // parapetto
            const p0 = wall.v(x0, y0 + 1.0, z0), p1 = wall.v(x1, y1 + 1.0, z1), p2 = wall.v(x1, y1, z1), p3 = wall.v(x0, y0, z0);
            wall.quad(p0, p1, p2, p3);
          }
          // piloni sotto i ponti
          if (w.abs && w.flags & F.BRIDGE) {
            for (let s = 1; s < edges.length - 1; s += 4) {
              const e = edges[s];
              const x0 = (e[0] + e[3]) / 2, z0 = (e[2] + e[5]) / 2, y0 = (e[1] + e[4]) / 2;
              const g = T.height(x0, z0);
              if (y0 - g < 3) continue;
              const r = 0.6;
              const c = [[-r, -r], [r, -r], [r, r], [-r, r]];
              for (let q = 0; q < 4; q++) {
                const [ux, uz] = c[q], [vx, vz] = c[(q + 1) % 4];
                const i0 = wall.v(x0 + ux, y0 - 0.5, z0 + uz), i1 = wall.v(x0 + vx, y0 - 0.5, z0 + vz), i2 = wall.v(x0 + vx, g - 1, z0 + vz), i3 = wall.v(x0 + ux, g - 1, z0 + uz);
                wall.quad(i0, i1, i2, i3);
              }
            }
          }
        }
      }
      // guardrail sulle superstrade
      if (w.cls <= CLS.TRUNK && !(w.flags & F.LINK) && !elevated) {
        const da = this.degree[a] >= 3 ? 40 : 0, db = this.degree[b] >= 3 ? 40 : 0;
        for (let side = 0; side < 2; side++) {
          for (let s = 0; s < edges.length - 1; s++) {
            const t0 = s / nsub * L, t1 = (s + 1) / nsub * L;
            if (t0 < da || t1 > L - db) continue;
            const e0 = edges[s], e1 = edges[s + 1];
            const sg = side ? 1 : -1, off = 0.4 * sg;
            const x0 = e0[side * 3] + rx * off, z0 = e0[side * 3 + 2] + rz * off, y0 = e0[side * 3 + 1];
            const x1 = e1[side * 3] + rx * off, z1 = e1[side * 3 + 2] + rz * off, y1 = e1[side * 3 + 1];
            const i0 = guard.v(x0, y0 + 0.85, z0), i1 = guard.v(x1, y1 + 0.85, z1), i2 = guard.v(x1, y1 + 0.5, z1), i3 = guard.v(x0, y0 + 0.5, z0);
            guard.quad(i0, i1, i2, i3);
            if (s % 2 === 0) { // paletti
              const j0 = guard.v(x0, y0 + 0.85, z0), j1 = guard.v(x0 + sx * 0.12, y0 + 0.85, z0 + sz * 0.12), j2 = guard.v(x0 + sx * 0.12, y0 - 0.2, z0 + sz * 0.12), j3 = guard.v(x0, y0 - 0.2, z0);
              guard.quad(j0, j1, j2, j3);
            }
          }
        }
      }
      this.buildMarkings(mark, wi, k, edgeH);
    }
    // isole delle rotatorie
    const isl = new GeoBuilder(true, false);
    for (const rb of this.roundabouts) {
      if (this.tileKey(rb.x, rb.z) !== tk) continue;
      const y = T.height(rb.x, rb.z) + rb.dh + LIFT + 0.3;
      const segN = 28;
      const c0 = isl.v(rb.x, y + Math.min(1.5, rb.r * 0.08), rb.z, 0.33, 0.55, 0.22);
      const ring = [], ringO = [], ringB = [];
      for (let i = 0; i < segN; i++) {
        const an = i / segN * Math.PI * 2;
        const x = rb.x + Math.cos(an) * rb.r, z = rb.z + Math.sin(an) * rb.r;
        ring.push(isl.v(x, y, z, 0.35, 0.58, 0.24));
        ringO.push(isl.v(x, y, z, 0.85, 0.85, 0.82));
        ringB.push(isl.v(x, T.height(x, z) + rb.dh, z, 0.85, 0.85, 0.82));
      }
      for (let i = 0; i < segN; i++) {
        const j = (i + 1) % segN;
        isl.tri(c0, ring[j], ring[i]);
        isl.quad(ringO[i], ringO[j], ringB[j], ringB[i]);
      }
    }
    this.buildZebras(tk, mark, edgeH);
    this.buildRails(tk, road, wall);
    if (!road.empty) group.add(road.mesh(M.road));
    if (!mark.empty) group.add(mark.mesh(M.mark));
    if (!wall.empty) group.add(wall.mesh(M.wall, true));
    if (!guard.empty) group.add(guard.mesh(M.guard));
    if (!isl.empty) group.add(isl.mesh(M.island));
    return group;
  }

  // segnaletica orizzontale italiana: linee di margine, mezzeria tratteggiata, corsie
  buildMarkings(mark, wi, k, edgeH) {
    const w = this.ways[wi];
    if (w.cls >= CLS.SERVICE || !w.drivable || w.flags & F.UNPAVED) return;
    const a = w.nodes[k], b = w.nodes[k + 1];
    const ax = this.nx[a], az = this.nz[a], bx = this.nx[b], bz = this.nz[b];
    const L = Math.hypot(bx - ax, bz - az);
    if (L < 1) return;
    const sx = (bx - ax) / L, sz = (bz - az) / L, rx = -sz, rz = sx;
    const hw = w.width / 2;
    const trimA = this.degree[a] >= 3 ? Math.min(L / 2, 9) : 0, trimB = this.degree[b] >= 3 ? Math.min(L / 2, 9) : 0;
    const s0 = w.cum[k];
    const lines = [];
    const urban = w.limit <= 50;
    const roundabout = w.flags & F.ROUNDABOUT;
    // margine
    if (w.cls <= CLS.TERTIARY || roundabout || w.width >= 7) {
      lines.push({ off: -hw + 0.3, wdt: 0.15, dash: 0 });
      lines.push({ off: hw - 0.3, wdt: 0.15, dash: 0 });
    }
    if (!w.oneway && w.width >= 5.4 && !roundabout) {
      lines.push({ off: 0, wdt: 0.15, dash: urban ? [3, 4.5] : [4.5, 7.5] });
    } else if (w.oneway && w.lanes >= 2 && !roundabout) {
      const lw = (w.width - (w.cls <= 1 ? 1.8 : 0)) / w.lanes;
      const left = -hw + (w.cls <= 1 ? 0.6 : 0);
      for (let l = 1; l < w.lanes; l++) lines.push({ off: left + lw * l, wdt: 0.15, dash: [4.5, 7.5] });
    }
    for (const ln of lines) {
      const pieces = [];
      if (!ln.dash) pieces.push([trimA, L - trimB]);
      else {
        const [d, g] = ln.dash, P = d + g;
        let st = Math.floor(s0 / P) * P;
        for (; st < s0 + L; st += P) {
          const p0 = Math.max(st - s0, trimA), p1 = Math.min(st + d - s0, L - trimB);
          if (p1 > p0 + 0.2) pieces.push([p0, p1]);
        }
      }
      for (const [p0, p1] of pieces) {
        if (p1 - p0 < 0.2) continue;
        const n = Math.max(1, Math.ceil((p1 - p0) / 5));
        let pl = -1, pr = -1;
        for (let i = 0; i <= n; i++) {
          const d = p0 + (p1 - p0) * i / n, t = d / L;
          const cx = ax + sx * d + rx * ln.off, cz = az + sz * d + rz * ln.off;
          const lx = cx - rx * ln.wdt / 2, lz = cz - rz * ln.wdt / 2, qx = cx + rx * ln.wdt / 2, qz = cz + rz * ln.wdt / 2;
          const il = mark.v(lx, edgeH(wi, k, t, lx, lz) + 0.02, lz, 1, 1, 1), ir = mark.v(qx, edgeH(wi, k, t, qx, qz) + 0.02, qz, 1, 1, 1);
          if (pl >= 0) mark.quad(pl, pr, ir, il);
          pl = il; pr = ir;
        }
      }
    }
  }

  // strisce pedonali (zebrate) sui nodi highway=crossing
  buildZebras(tk, mark, edgeH) {
    const done = new Set();
    for (const packed of this.tileSegs.get(tk) || []) {
      const wi = Math.floor(packed / 16384), k = packed % 16384;
      const w = this.ways[wi];
      if (w.cls >= CLS.SERVICE || !w.drivable) continue;
      for (const kk of [k, k + 1]) {
        const nd = w.nodes[kk];
        if (this.ntag[nd] !== NT.CROSSING || done.has(nd)) continue;
        done.add(nd);
        const kseg = Math.min(kk, w.nodes.length - 2);
        const a = w.nodes[kseg], b = w.nodes[kseg + 1];
        const dx = this.nx[b] - this.nx[a], dz = this.nz[b] - this.nz[a], L = Math.hypot(dx, dz) || 1;
        const sx = dx / L, sz = dz / L, rx = -sz, rz = sx;
        const cx = this.nx[nd], cz = this.nz[nd];
        const hw = w.width / 2 - 0.3;
        const t = kk === kseg ? 0 : 1;
        for (let o = -hw + 0.25; o <= hw - 0.25; o += 1.0) {
          const pts = [[o - 0.25, -1.5], [o + 0.25, -1.5], [o + 0.25, 1.5], [o - 0.25, 1.5]].map(([lat, lon]) => {
            const x = cx + rx * lat + sx * lon, z = cz + rz * lat + sz * lon;
            return mark.v(x, edgeH(wi, kseg, t, x, z) + 0.025, z, 1, 1, 1);
          });
          mark.quad(pts[0], pts[1], pts[2], pts[3]);
        }
      }
    }
  }

  buildRails(tk, road, wall) {
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
}
