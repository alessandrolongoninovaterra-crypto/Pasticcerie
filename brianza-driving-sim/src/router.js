import { F, CLS, NT } from './roads.js';

// Navigatore: A* sulla rete stradale reale (sensi unici rispettati) e
// generazione delle indicazioni di svolta in italiano.
class Heap {
  constructor() { this.k = []; this.v = []; }
  push(key, val) {
    const k = this.k, v = this.v; let i = k.length; k.push(key); v.push(val);
    while (i > 0) { const p = (i - 1) >> 1; if (k[p] <= k[i]) break; [k[p], k[i]] = [k[i], k[p]]; [v[p], v[i]] = [v[i], v[p]]; i = p; }
  }
  pop() {
    const k = this.k, v = this.v; const top = v[0]; const lk = k.pop(), lv = v.pop();
    if (k.length) {
      k[0] = lk; v[0] = lv; let i = 0;
      for (;;) {
        const l = 2 * i + 1, r = l + 1; let m = i;
        if (l < k.length && k[l] < k[m]) m = l; if (r < k.length && k[r] < k[m]) m = r;
        if (m === i) break; [k[m], k[i]] = [k[i], k[m]]; [v[m], v[i]] = [v[i], v[m]]; i = m;
      }
    }
    return top;
  }
  get size() { return this.k.length; }
}

export class Router {
  constructor(roads) {
    this.R = roads;
    const R = roads, n = R.nodeCount;
    // grafo orientato in formato CSR, costruito in due passate (conteggio, poi riempimento) senza
    // liste temporanee: con la mappa fino a Milano gli archi sono quasi un milione
    const usable = (w) => w.drivable && w.cls !== CLS.PEDESTRIAN;
    const pass = (emit) => {
      R.ways.forEach((w, wi) => {
        if (!usable(w)) return;
        const v = Math.max(10, w.limit) / 3.6;
        let pen = 1;
        if (w.flags & F.PRIVATE) pen = 6;
        if (w.cls === CLS.SERVICE) pen = w.flags & F.AISLE ? 5 : 1.8;
        if (w.cls === CLS.TRACK) pen = 3;
        for (let k = 0; k < w.nodes.length - 1; k++) {
          const a = w.nodes[k], b = w.nodes[k + 1];
          if (R.ntag[a] === NT.GATE || R.ntag[b] === NT.GATE) continue;   // cancello chiuso
          const cost = (w.cum[k + 1] - w.cum[k]) / v * pen;
          emit(a, b, cost, wi);
          if (!w.oneway) emit(b, a, cost, wi);
        }
      });
    };
    const start = new Int32Array(n + 1);
    pass((a) => { start[a + 1]++; });
    for (let i = 0; i < n; i++) start[i + 1] += start[i];
    const m = start[n], fill = start.slice(0, n);
    this.eTo = new Int32Array(m); this.eCost = new Float32Array(m); this.eWay = new Int32Array(m);
    pass((a, b, cost, wi) => { const o = fill[a]++; this.eTo[o] = b; this.eCost[o] = cost; this.eWay[o] = wi; });
    this.eStart = start;
    this.dist = new Float32Array(n); this.prev = new Int32Array(n); this.prevWay = new Int32Array(n); this.stamp = new Int32Array(n); this.closed = new Int32Array(n);
    this.run = 0;
  }

  // origine: posizione + direzione del veicolo; destinazione: punto qualsiasi
  route(x, z, heading, tx, tz) {
    const R = this.R;
    const ok = (w) => w.drivable && w.cls !== CLS.PEDESTRIAN;
    const s = R.nearest(x, z, 60, ok);
    const t = R.nearest(tx, tz, 400, ok);
    if (!s || !t) return null;
    const run = ++this.run;
    const heap = new Heap();
    const fx = Math.sin(heading), fz = Math.cos(heading);
    const sw = R.ways[s.wi];
    const sa = sw.nodes[s.k], sb = sw.nodes[s.k + 1];
    const segL = sw.cum[s.k + 1] - sw.cum[s.k];
    const v = Math.max(10, sw.limit) / 3.6;
    const dirDot = (s.dx * fx + s.dz * fz);
    const seed = (node, cost) => {
      if (this.stamp[node] !== run) { this.stamp[node] = run; this.dist[node] = 1e18; this.closed[node] = 0; }
      if (cost < this.dist[node]) { this.dist[node] = cost; this.prev[node] = -1; this.prevWay[node] = s.wi; heap.push(cost + this.h(node, tx, tz), node); }
    };
    // verso b (direzione della via) / verso a
    const uturn = 25;
    seed(sb, (1 - s.t) * segL / v + (dirDot < 0 ? uturn : 0));
    if (!sw.oneway) seed(sa, s.t * segL / v + (dirDot > 0 ? uturn : 0));
    const tw = R.ways[t.wi];
    const ta = tw.nodes[t.k], tb = tw.nodes[t.k + 1];
    const goals = new Set([ta, tb]);
    let found = -1, iter = 0;
    while (heap.size) {
      const u = heap.pop();
      if (this.closed[u]) continue;
      this.closed[u] = 1;
      if (goals.has(u)) { found = u; break; }
      if (++iter > 400000) break;
      const du = this.dist[u];
      for (let e = this.eStart[u]; e < this.eStart[u + 1]; e++) {
        const vtx = this.eTo[e];
        if (this.stamp[vtx] !== run) { this.stamp[vtx] = run; this.dist[vtx] = 1e18; this.closed[vtx] = 0; }
        const nd = du + this.eCost[e];
        if (nd < this.dist[vtx]) { this.dist[vtx] = nd; this.prev[vtx] = u; this.prevWay[vtx] = this.eWay[e]; heap.push(nd + this.h(vtx, tx, tz), vtx); }
      }
    }
    if (found < 0) return null;
    const nodes = [], ways = [];
    for (let c = found; c >= 0; c = this.prev[c]) { nodes.push(c); ways.push(this.prevWay[c]); }
    nodes.reverse(); ways.reverse();
    // polilinea: posizione attuale -> nodi -> destinazione proiettata
    const pts = [[s.px, s.pz]];
    for (const nd of nodes) pts.push([R.nx[nd], R.nz[nd]]);
    pts.push([t.px, t.pz]);
    const route = { pts, nodes, ways, dest: [t.px, t.pz], destRaw: [tx, tz], time: this.dist[found] };
    route.cum = [0];
    for (let i = 1; i < pts.length; i++) route.cum.push(route.cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    route.length = route.cum[route.cum.length - 1];
    route.steps = this.instructions(route);
    return route;
  }

  h(n, tx, tz) { return Math.hypot(this.R.nx[n] - tx, this.R.nz[n] - tz) / (130 / 3.6); }

  instructions(route) {
    const R = this.R, steps = [];
    const { nodes, ways, pts, cum } = route;
    const name = (wi) => { const w = R.ways[wi]; return w.name || w.ref || ''; };
    let i = 1;
    while (i < nodes.length - 1) {
      const nd = nodes[i];
      const wIn = ways[i], wOut = ways[i + 1];
      const inRb = R.ways[wIn].flags & F.ROUNDABOUT, outRb = R.ways[wOut].flags & F.ROUNDABOUT;
      const p0 = pts[i], p1 = pts[i + 1], p2 = pts[i + 2];
      if (!inRb && outRb) {
        // ingresso in rotatoria: conta le uscite fino a quella da prendere
        let exits = 0, j = i + 1;
        while (j < nodes.length - 1 && (R.ways[ways[j + 1]].flags & F.ROUNDABOUT)) {
          if (this.hasExit(nodes[j], ways[j])) exits++;
          j++;
        }
        exits++;
        const outName = j + 1 < ways.length ? name(ways[j + 1]) : '';
        steps.push({ i, d: cum[i + 1], type: 'roundabout', exit: exits, name: outName, text: `Alla rotatoria prendi la ${exits}ª uscita` + (outName ? ` verso ${outName}` : '') });
        i = j + 1;
        continue;
      }
      if (inRb) { i++; continue; }
      if (R.degree[nd] < 3) { i++; continue; }
      const a1 = Math.atan2(p1[0] - p0[0], p1[1] - p0[1]), a2 = Math.atan2(p2[0] - p1[0], p2[1] - p1[1]);
      let turn = a2 - a1;
      while (turn > Math.PI) turn -= 2 * Math.PI;
      while (turn < -Math.PI) turn += 2 * Math.PI;
      const deg = turn * 180 / Math.PI; // >0 = sinistra (rotta crescente)
      const nIn = name(wIn), nOut = name(wOut);
      const nameChange = nOut !== nIn;
      // alternative significative all'incrocio?
      if (Math.abs(deg) < 25 && !nameChange) { i++; continue; }
      if (Math.abs(deg) < 25 && nameChange && !this.realChoice(nd, wIn)) { i++; continue; }
      let type, text;
      if (Math.abs(deg) < 25) { type = 'straight'; text = 'Prosegui dritto'; }
      else if (deg >= 25 && deg < 55) { type = 'slight-left'; text = 'Tieni la sinistra'; }
      else if (deg >= 55 && deg < 150) { type = 'left'; text = 'Svolta a sinistra'; }
      else if (deg <= -25 && deg > -55) { type = 'slight-right'; text = 'Tieni la destra'; }
      else if (deg <= -55 && deg > -150) { type = 'right'; text = 'Svolta a destra'; }
      else { type = 'uturn'; text = 'Fai inversione a U'; }
      if (nOut) text += (type === 'straight' ? ' su ' : ' in ') + nOut;
      steps.push({ i, d: cum[i + 1], type, name: nOut, text });
      i++;
    }
    steps.push({ i: nodes.length, d: route.length, type: 'arrive', text: 'Sei arrivato a destinazione', name: '' });
    return steps;
  }

  hasExit(nd, wiRb) {
    const R = this.R;
    for (let o = R.adjHead[nd]; o >= 0; o = R.adjNext[o]) {
      const w = R.ways[R.adjWay[o]];
      if (!(w.flags & F.ROUNDABOUT) && w.drivable && w.cls < CLS.SERVICE + 1) {
        const p = R.adjPos[o];
        if (!w.oneway || p < w.nodes.length - 1) return true;
      }
    }
    return false;
  }

  realChoice(nd, wIn) {
    const R = this.R; let n = 0;
    for (let o = R.adjHead[nd]; o >= 0; o = R.adjNext[o]) if (R.adjWay[o] !== wIn && R.ways[R.adjWay[o]].drivable && R.ways[R.adjWay[o]].cls <= CLS.LIVING) n++;
    return n >= 2;
  }
}

// stato del percorso rispetto al veicolo
export function routeProgress(route, x, z) {
  const { pts, cum } = route;
  let best = 1e9, bestS = 0, bestI = 0;
  const from = Math.max(0, (route._lastI || 0) - 30), to = Math.min(pts.length - 1, (route._lastI || 0) + 200);
  for (let i = from; i < to; i++) {
    const ax = pts[i][0], az = pts[i][1], dx = pts[i + 1][0] - ax, dz = pts[i + 1][1] - az;
    const L2 = dx * dx + dz * dz || 1e-9;
    let t = ((x - ax) * dx + (z - az) * dz) / L2; t = Math.max(0, Math.min(1, t));
    const d = Math.hypot(x - ax - dx * t, z - az - dz * t);
    if (d < best) { best = d; bestS = cum[i] + Math.sqrt(L2) * t; bestI = i; }
  }
  route._lastI = bestI;
  return { off: best, s: bestS, i: bestI };
}
