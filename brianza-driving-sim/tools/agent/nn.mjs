// Rete neurale minima per l'allenamento (Node, senza librerie): percettrone multistrato con tanh,
// retropropagazione e ottimizzatore Adam. Stesso formato dei pesi di src/agent/policy.js.
export class MLP {
  // sizes: [ingresso, nascosti..., uscita]; out: 'tanh' (azioni) o 'linear' (valore)
  constructor(sizes, out = 'tanh', seed = 1) {
    this.sizes = sizes; this.out = out;
    let s = seed >>> 0 || 1;
    const rnd = () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
    const gauss = () => { let u = 0; while (u === 0) u = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rnd()); };
    this.W = []; this.b = [];
    for (let l = 0; l < sizes.length - 1; l++) {
      const nIn = sizes[l], nOut = sizes[l + 1], W = new Float32Array(nIn * nOut), last = l === sizes.length - 2;
      const sc = (last ? 0.1 : 1) * Math.sqrt(1 / nIn);
      for (let i = 0; i < W.length; i++) W[i] = gauss() * sc;
      this.W.push(W); this.b.push(new Float32Array(nOut));
    }
    this.gW = this.W.map((w) => new Float32Array(w.length)); this.gb = this.b.map((b) => new Float32Array(b.length));
    this.mW = this.W.map((w) => new Float32Array(w.length)); this.vW = this.W.map((w) => new Float32Array(w.length));
    this.mb = this.b.map((b) => new Float32Array(b.length)); this.vb = this.b.map((b) => new Float32Array(b.length));
    this.t = 0;
    this.acts = sizes.map((n) => new Float32Array(n));     // attivazioni dell'ultimo passaggio
    this.deltas = sizes.map((n) => new Float32Array(n));
  }
  // passaggio in avanti su un esempio (x: Float32Array o sotto-array), ritorna l'uscita
  forward(x) {
    const S = this.sizes, L = S.length - 1, A = this.acts;
    A[0].set(x);
    for (let l = 0; l < L; l++) {
      const nIn = S[l], nOut = S[l + 1], W = this.W[l], b = this.b[l], xin = A[l], y = A[l + 1];
      const lin = l === L - 1 && this.out === 'linear';
      for (let i = 0; i < nOut; i++) { let s = b[i]; const o = i * nIn; for (let j = 0; j < nIn; j++) s += W[o + j] * xin[j]; y[i] = lin ? s : Math.tanh(s); }
    }
    return A[L];
  }
  // accumula i gradienti dato dL/d(uscita) dell'ultimo forward
  backward(dOut) {
    const S = this.sizes, L = S.length - 1, A = this.acts, D = this.deltas;
    for (let i = 0; i < S[L]; i++) D[L][i] = dOut[i] * (this.out === 'linear' ? 1 : 1 - A[L][i] * A[L][i]);
    for (let l = L - 1; l >= 0; l--) {
      const nIn = S[l], nOut = S[l + 1], W = this.W[l], gW = this.gW[l], gb = this.gb[l], d = D[l + 1], xin = A[l], dIn = D[l];
      if (l > 0) dIn.fill(0);
      for (let i = 0; i < nOut; i++) {
        const di = d[i]; if (di === 0) continue;
        gb[i] += di; const o = i * nIn;
        for (let j = 0; j < nIn; j++) { gW[o + j] += di * xin[j]; if (l > 0) dIn[j] += di * W[o + j]; }
      }
      if (l > 0) for (let j = 0; j < nIn; j++) dIn[j] *= 1 - xin[j] * xin[j];
    }
  }
  zero() { for (const g of this.gW) g.fill(0); for (const g of this.gb) g.fill(0); }
  // passo di Adam con i gradienti medi (scale = 1/numero di esempi), taglio della norma
  step(lr, scale, clip = 1.0) {
    let n2 = 0;
    for (const g of this.gW) for (let i = 0; i < g.length; i++) n2 += (g[i] * scale) ** 2;
    for (const g of this.gb) for (let i = 0; i < g.length; i++) n2 += (g[i] * scale) ** 2;
    const k = Math.sqrt(n2) > clip ? clip / Math.sqrt(n2) : 1;
    this.t++;
    const b1 = 0.9, b2 = 0.999, c1 = 1 - b1 ** this.t, c2 = 1 - b2 ** this.t;
    const upd = (P, G, M, V) => { for (let i = 0; i < P.length; i++) { const g = G[i] * scale * k; M[i] = b1 * M[i] + (1 - b1) * g; V[i] = b2 * V[i] + (1 - b2) * g * g; P[i] -= lr * (M[i] / c1) / (Math.sqrt(V[i] / c2) + 1e-8); } };
    for (let l = 0; l < this.W.length; l++) { upd(this.W[l], this.gW[l], this.mW[l], this.vW[l]); upd(this.b[l], this.gb[l], this.mb[l], this.vb[l]); }
    this.zero();
  }
  toJSON(extra = {}) { return { sizes: this.sizes, W: this.W.map((w) => Array.from(w, (v) => +v.toFixed(6))), b: this.b.map((b) => Array.from(b, (v) => +v.toFixed(6))), ...extra }; }
  static from(j, out = 'tanh') { const m = new MLP(j.sizes, out); m.W = j.W.map((w) => Float32Array.from(w)); m.b = j.b.map((b) => Float32Array.from(b)); return m; }
}
