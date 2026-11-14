import { RoadNetwork, F, CLS } from './roads.js';

// Preparazione della rete stradale completa (solo per tools/bake.mjs, non entra nel gioco):
// curve morbide, rotatorie, profili di quota lisci e spianamento del terreno sotto le strade.
// Il gioco riceve il risultato gia' pronto, tessera per tessera (RoadNetwork.addTile).
export class RoadPrep extends RoadNetwork {
  constructor(data, terrain, meta) {
    super(meta, terrain);
    this.names = data.names;
    const HEAD = data.wayHead || 8;

    // nodi OSM
    const nn0 = data.nodes.length / 2;
    const nx = new Array(nn0), nz = new Array(nn0), dh = new Array(nn0).fill(0);
    let x = 0, z = 0;
    for (let i = 0; i < nn0; i++) { x += data.nodes[i * 2]; z += data.nodes[i * 2 + 1]; nx[i] = x / 10; nz[i] = z / 10; }
    for (let i = 0; i < data.dh.length; i += 2) dh[data.dh[i]] = data.dh[i + 1] / 10;
    // quota della strada nelle gallerie (profilo dell'intera catena, calcolato dalla pipeline)
    const th = new Map();
    for (let i = 0; data.th && i < data.th.length; i += 2) th.set(data.th[i], data.th[i + 1] / 10);

    // vie (le larghezze servono gia' alle curve e alle rotatorie)
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
    for (let i = 0; i < nn; i++) { this.node(i, nx[i], nz[i]); this.dh[i] = dh[i]; }
    const step = HEAD > 8 ? 3 : 2;
    for (let i = 0; i < data.ntags.length; i += step) { this.ntag[data.ntags[i]] = data.ntags[i + 1]; if (step === 3) this.ndir[data.ntags[i]] = data.ntags[i + 2]; }
    for (let i = 0; i < (data.mj || []).length; i += 3) this.junctionNames.set(data.mj[i], { name: this.names[data.mj[i + 1]], ref: this.names[data.mj[i + 2]] });
    for (let wi = 0; wi < this.ways.length; wi++) {
      const w = this.ways[wi];
      w.nodes = Int32Array.from(w.nodes);
      this.linkWay(wi);
      const n = w.nodes.length;
      if (w.abs) {
        const f = w.nodes[0], l = w.nodes[n - 1];
        w.h0 = terrain.height(this.nx[f], this.nz[f]) + this.dh[f];
        w.h1 = terrain.height(this.nx[l], this.nz[l]) + this.dh[l];
        if (w.flags & F.TUNNEL) { if (th.has(f)) w.h0 = th.get(f); if (th.has(l)) w.h1 = th.get(l); }
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
    // ferrovie (le quote dei ponti si fissano qui, sul terreno completo)
    this.rails = data.rails.map((r) => ({ p: r.p, bridge: r.b, tunnel: r.t, name: r.n }));
    for (const r of this.rails) {
      const a = r.p[0], b = r.p[r.p.length - 1];
      r.h0 = terrain.height(a[0], a[1]); r.h1 = terrain.height(b[0], b[1]);
    }
    this.findRoundabouts();
  }

  // ---------------------------------------------------------------- profilo longitudinale liscio
  // Ogni via (tranne ponti e gallerie, che hanno gia' un profilo proprio) riceve un profilo di quota
  // campionato ogni 4 m e lisciato con una media mobile su circa +-20 m: la strada non copia piu'
  // gli scalini della griglia del terreno (celle da 10 m). Agli incroci tutte le vie passano per la
  // stessa quota. Il calcolo si fa su richiesta, zona per zona (ensureRegion prima di costruire una
  // tessera, oppure alla prima richiesta di quota su una via), sempre dal terreno originale.
  rawProfile(w) {
    if (w.raw) return w.raw;
    const T = this.terrain, PSTEP = 4, RAD = 5;          // media mobile di 11 campioni (44 m), applicata due volte
    const N = Math.max(2, Math.ceil(w.len / PSTEP) + 1), st = w.len / (N - 1) || 1;
    let raw = new Float32Array(N);
    let k = 0;
    for (let i = 0; i < N; i++) {
      const sv = i * st;
      while (k < w.nodes.length - 2 && w.cum[k + 1] < sv) k++;
      const a = w.nodes[k], b = w.nodes[k + 1], L = w.cum[k + 1] - w.cum[k] || 1, t = Math.min(1, Math.max(0, (sv - w.cum[k]) / L));
      raw[i] = T.heightOrig(this.nx[a] + (this.nx[b] - this.nx[a]) * t, this.nz[a] + (this.nz[b] - this.nz[a]) * t) + this.dh[a] + (this.dh[b] - this.dh[a]) * t;
    }
    for (let pass = 0; pass < 2 && N > 2; pass++) {   // bordi: si ripete il valore estremo
      const out = new Float32Array(N);
      let acc = 0;
      for (let i = -RAD; i <= RAD; i++) acc += raw[Math.min(N - 1, Math.max(0, i))];
      for (let i = 0; i < N; i++) {
        out[i] = acc / (2 * RAD + 1);
        acc += raw[Math.min(N - 1, i + RAD + 1)] - raw[Math.min(N - 1, Math.max(0, i - RAD))];
      }
      raw = out;
    }
    w.raw = raw; w.pstep = st;
    return raw;
  }

  // quota comune di un nodo d'incrocio: estremo di un ponte/galleria se c'e', altrimenti la media
  // dei profili lisciati di tutte le vie che vi passano
  nodeHeight(nd) {
    let sum = 0, cnt = 0;
    for (let o = this.adjHead[nd]; o >= 0; o = this.adjNext[o]) {
      const w = this.ways[this.adjWay[o]], pos = this.adjPos[o];
      if (w.abs) {
        if (pos === 0) return w.h0;
        if (pos === w.nodes.length - 1) return w.h1;
        continue;
      }
      const r = this.rawProfile(w), f = Math.min(r.length - 1, w.cum[pos] / w.pstep), i = Math.min(r.length - 2, Math.floor(f));
      sum += r.length < 2 ? r[0] : r[i] + (r[i + 1] - r[i]) * (f - i); cnt++;
    }
    return cnt ? sum / cnt : 0;
  }

  ensureProfile(w) {
    if (w.prof || w.abs) return;
    const raw = this.rawProfile(w), N = raw.length, P = new Float32Array(raw);
    const anc = [];
    for (let k = 0; k < w.nodes.length; k++) {
      const nd = w.nodes[k];
      if (k === 0 || k === w.nodes.length - 1 || this.degree[nd] !== 2) {
        const f = Math.min(N - 1, w.cum[k] / w.pstep), i = Math.min(N - 2, Math.floor(f));
        anc.push([w.cum[k], this.nodeHeight(nd) - (N < 2 ? raw[0] : raw[i] + (raw[i + 1] - raw[i]) * (f - i))]);
      }
    }
    let j = 0;
    for (let i = 0; i < N; i++) {     // correzione a rampa lineare tra un ancoraggio e l'altro
      const sv = i * w.pstep;
      while (j < anc.length - 2 && anc[j + 1][0] < sv) j++;
      const [s0, d0] = anc[j], [s1, d1] = anc[Math.min(j + 1, anc.length - 1)];
      const t = s1 > s0 ? Math.min(1, Math.max(0, (sv - s0) / (s1 - s0))) : 0;
      P[i] += d0 + (d1 - d0) * t;
    }
    w.prof = P;
  }

  // Il terreno sotto le strade e' gia' spianato dalla pipeline (profilo quasi uguale a questo).
  // Qui resta da evitare che sporga dentro la carreggiata: gli angoli delle celle che contengono un
  // punto della strada (anche a 14 m dall'asse, lungo la diagonale della cella da 10 m) si
  // abbassano, se serve, alla quota della strada nel punto piu' vicino. Solo abbassamenti: nasce lo
  // sbancamento del versante, non un terrapieno. Le rampe dei cavalcavia restano con i loro muri.
  carveWay(w) {
    const T = this.terrain, H = T.h, nx = T.nx, nz = T.nz, step = T.step, x0 = T.x0, z0 = T.z0;
    let nLow = 0;
    {
      if (!w.prof) return;
      const hw = w.width / 2 + 0.6, nd = w.nodes, P = w.prof, ps = w.pstep;
      for (let k = 0; k < nd.length - 1; k++) {
        const a = nd[k], b = nd[k + 1];
        if (this.dh[a] > 0.3 || this.dh[b] > 0.3) continue;
        const ax = this.nx[a], az = this.nz[a], L = w.cum[k + 1] - w.cum[k];
        if (L < 0.01) continue;
        const dx = (this.nx[b] - ax) / L, dz = (this.nz[b] - az) / L, n = Math.max(1, Math.ceil(L / 3));
        for (let si = 0; si <= n; si++) {
          const d = L * si / n, s = w.cum[k] + d, x = ax + dx * d, z = az + dz * d;
          // quota e pendenza del profilo in s (per la quota nel punto piu' vicino a ogni angolo)
          const f = Math.min(P.length - 1, Math.max(0, s / ps)), i0 = Math.min(P.length - 2, Math.floor(f));
          const h = P[i0] + (P[i0 + 1] - P[i0]) * (f - i0) - 0.03, g = (P[i0 + 1] - P[i0]) / ps;
          for (let q = -1; q <= 1; q++) {
            const px = x - dz * hw * q, pz = z + dx * hw * q;
            const i = Math.floor((px - x0) / step), j = Math.floor((pz - z0) / step);
            if (i < 0 || j < 0 || i >= nx - 1 || j >= nz - 1) continue;
            for (let c = 0; c < 4; c++) {
              const ii = i + (c & 1), jj = j + (c >> 1), o = jj * nx + ii;
              const hc = h + g * ((x0 + ii * step - x) * dx + (z0 + jj * step - z) * dz);
              if (H[o] > hc) { H[o] = hc; nLow++; }
            }
          }
        }
      }
    }
    this.loweredCorners = (this.loweredCorners || 0) + nLow;
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
            // freccia massima tra corda e curva: 12 cm (a 4 cm i nodi erano il quadruplo, senza differenze visibili)
            const ns = Math.min(8, Math.ceil(Math.sqrt(sag / 0.12)));
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
}
