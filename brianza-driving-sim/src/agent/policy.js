// Rete del pilota addestrato (tools/agent/train.mjs): percettrone a due strati nascosti con tanh.
// Ingresso: le osservazioni di src/agent/env.js (OBS_N numeri), uscita: [sterzo, gas/freno] in -1..1.
// Pesi in formato semplice: { sizes: [n0, n1, n2, 2], W: [[...], ...], b: [[...], ...], logStd: [..] }
// (W[l] riga per riga: W[l][i * nIn + j] collega l'ingresso j all'uscita i).
export class Policy {
  constructor(net) {
    this.net = net;
    this.sizes = net.sizes;
    this.W = net.W.map((w) => Float32Array.from(w));
    this.b = net.b.map((b) => Float32Array.from(b));
    this.bufs = this.sizes.map((n) => new Float32Array(n));
  }
  // uscita media (azione deterministica)
  act(obs, out = new Float32Array(2)) {
    const S = this.sizes, L = S.length - 1;
    let x = obs;
    for (let l = 0; l < L; l++) {
      const nIn = S[l], nOut = S[l + 1], W = this.W[l], b = this.b[l], y = this.bufs[l + 1];
      for (let i = 0; i < nOut; i++) {
        let s = b[i];
        const o = i * nIn;
        for (let j = 0; j < nIn; j++) s += W[o + j] * x[j];
        y[i] = Math.tanh(s);           // anche l'uscita: azioni gia' in -1..1
      }
      x = y;
    }
    out[0] = x[0]; out[1] = x[1];
    return out;
  }
}
