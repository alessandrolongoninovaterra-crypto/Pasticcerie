// Allenamento del pilota (src/agent/env.js) su piu' zone in parallelo, un Chromium senza schermo
// per zona (tools/agent/worker.mjs).
//   node tools/agent/train.mjs dagger [iterazioni] [passi per zona]   imitazione del maestro (DAgger)
//   node tools/agent/train.mjs ppo [iterazioni] [passi per zona]      rinforzo (PPO) partendo dalla rete imitata
//   node tools/agent/train.mjs refine [iterazioni] [passi per zona]   affinamento con il maestro (semafori pesati di piu')
//   node tools/agent/train.mjs eval [passi per zona]                  misura la rete salvata e il maestro
// Con --pursuit si allena la rete delle volanti all'inseguimento (niente semafori, 60-160 km/h,
// curve al limite): parte dalla rete di guida e si salva in data/agent/pursuit.json/.js.
// Pesi: data/agent/driver.json (e data/agent/driver.js per il gioco). Registro: data/agent/train.log
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { startWorker } from './worker.mjs';
import { MLP } from './nn.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');
const OUT = path.join(ROOT, 'data', 'agent');
fs.mkdirSync(OUT, { recursive: true });
const LOG = path.join(OUT, 'train.log');
const log = (s) => { const line = `[${new Date().toISOString().slice(11, 19)}] ${s}`; console.log(line); fs.appendFileSync(LOG, line + '\n'); };

// zone di allenamento: centri storici, periferie e statali (una per processo)
const ZONES = [
  { name: 'Monza', lat: 45.5836, lon: 9.2737 },
  { name: 'Seregno', lat: 45.6505, lon: 9.2046 },
  { name: 'Giussano', lat: 45.6941, lon: 9.2129 },
];
const N = 41, HID = [96, 96];
const PURSUIT = process.argv.includes('--pursuit');
const NAME = PURSUIT ? 'pursuit' : 'driver';
const [mode = 'dagger', a1, a2] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
// rete di partenza: quella salvata (all'inseguimento, se non c'e' ancora, quella di guida)
const savedNet = () => JSON.parse(fs.readFileSync(path.join(OUT, fs.existsSync(path.join(OUT, NAME + '.json')) ? NAME + '.json' : 'driver.json'), 'utf8'));

function saveNet(net, extra) {
  const j = net.toJSON({ logStd: extra.logStd || [-1.2, -1.2], obs: N, note: extra.note || '' });
  fs.writeFileSync(path.join(OUT, NAME + '.json'), JSON.stringify(j));
  const gz = zlib.gzipSync(Buffer.from(JSON.stringify(j)), { level: 9 });
  fs.writeFileSync(path.join(OUT, NAME + '.js'), `BDS_DATA('agent_${NAME}','json','${gz.toString('base64')}');\n`);
}

function summary(eps) {
  const km = eps.reduce((a, e) => a + e.dist, 0) / 1000 || 1e-9, n = eps.length || 1;
  const by = (w) => eps.filter((e) => e.why === w).length;
  const steps = eps.reduce((a, e) => a + e.steps, 0);
  return {
    episodi: eps.length, arrivi: +(by('arrivo') / n * 100).toFixed(0) + '%', km: +km.toFixed(1),
    urtiKm: +(by('urto') / km).toFixed(2), uscite: by('fuori strada'), fermi: by('fermo') + by('tempo'),
    rossiKm: +(eps.reduce((a, e) => a + e.reds, 0) / km).toFixed(2), sfregKm: +(eps.reduce((a, e) => a + (e.scrapes || 0), 0) / km).toFixed(2),
    scarto: +(eps.reduce((a, e) => a + e.lat * e.steps, 0) / Math.max(1, steps)).toFixed(2), kmh: +(km * 1000 / Math.max(1, steps * 0.1) * 3.6).toFixed(1),
    ...(PURSUIT ? { voluta: +(eps.reduce((a, e) => a + e.vmax * e.steps, 0) / Math.max(1, steps)).toFixed(0) } : {}),
  };
}
// all'inseguimento conta anche andare forte (la velocita' media pesa poco rispetto agli urti)
const score = (s) => parseFloat(s.arrivi) - 25 * s.urtiKm - 15 * s.rossiKm - 2 * s.sfregKm - 5 * s.uscite / Math.max(1, s.km) + (PURSUIT ? 0.3 * s.kmh : 0);

async function workers(seed) {
  return Promise.all(ZONES.map((z, i) => startWorker({ ...z, traffic: PURSUIT ? 25 : 35, pursuit: PURSUIT, seed: seed + i * 101, log: (s) => log(`${z.name}: ${s}`) })));
}

// ------------------------------------------------------------------ imitazione (DAgger)
function trainBC(net, X, Y, n, epochs, lr = 1e-3) {
  const idx = new Uint32Array(n); for (let i = 0; i < n; i++) idx[i] = i;
  const d = new Float32Array(2), B = 256;
  let loss = 0;
  for (let ep = 0; ep < epochs; ep++) {
    for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = idx[i]; idx[i] = idx[j]; idx[j] = t; }
    loss = 0;
    for (let s = 0; s < n; s += B) {
      const e = Math.min(n, s + B);
      for (let q = s; q < e; q++) {
        const k = idx[q], x = X.subarray(k * N, k * N + N), y = net.forward(x);
        const e0 = y[0] - Y[k * 2], e1 = y[1] - Y[k * 2 + 1];
        // semaforo rosso o giallo entro 60 m: esempi rari ma decisivi, pesano 4 volte (solo gas/freno)
        const sw = x[32] > 0.4 && x[31] < 0.6 ? 4 : 1;
        loss += e0 * e0 + 0.5 * e1 * e1;
        d[0] = 2 * e0; d[1] = e1 * sw;          // sterzo pesa il doppio di gas/freno
        net.backward(d);
      }
      net.step(lr, 1 / (e - s));
    }
  }
  return loss / n;
}

async function dagger(iters = 6, steps = 15000, refine = false) {
  const W = await workers(refine ? 31 : 11);
  // refine: si riparte dalla rete salvata (beta basso: guida soprattutto lei, il maestro corregge)
  // all'inseguimento si parte dalla rete di guida (corsie, curve, traffico le sa gia')
  let net = refine || PURSUIT ? MLP.from(savedNet(), 'tanh') : new MLP([N, ...HID, 2], 'tanh', 3);
  let cap = 2e6, X = new Float32Array(cap * N), Y = new Float32Array(cap * 2), n = 0;
  const add = (r) => {
    const m = r.tea.length / 2;
    if (n + m > cap) { const k = n + m - cap; X.copyWithin(0, k * N, n * N); Y.copyWithin(0, k * 2, n * 2); n -= k; }   // si scarta il piu' vecchio
    X.set(r.obs, n * N); Y.set(r.tea, n * 2); n += m;
  };
  let best = -1e9;
  if (refine) {
    const ev = await Promise.all(W.map((w) => w.run({ kind: 'student', net: net.toJSON(), maxSteps: 8000 })));
    const s = summary(ev.flatMap((r) => r.eps)); best = score(s); log(`affinamento, partenza: ${JSON.stringify(s)} (punteggio ${best.toFixed(1)})`);
  }
  for (let it = 0; it <= iters; it++) {
    const beta = refine ? 0.2 * Math.pow(0.5, it) : it === 0 ? 1 : Math.pow(0.5, it);
    const t0 = Date.now();
    const rs = await Promise.all(W.map((w) => w.run(it === 0 && !refine ? { kind: 'teacher', maxSteps: steps } : { kind: 'mix', beta, net: net.toJSON(), maxSteps: steps })));
    rs.forEach(add);
    const sumT = summary(rs.flatMap((r) => r.eps));
    const loss = trainBC(net, X, Y, n, it === 0 && !refine ? 8 : refine ? 3 : 4, refine ? 3e-4 : 1e-3);
    // misura: solo la rete alla guida
    const ev = await Promise.all(W.map((w) => w.run({ kind: 'student', net: net.toJSON(), maxSteps: 8000 })));
    const s = summary(ev.flatMap((r) => r.eps));
    log(`DAgger ${it}: beta ${beta.toFixed(2)}, dati ${n}, errore ${loss.toFixed(4)} | raccolta ${JSON.stringify(sumT)} | rete ${JSON.stringify(s)} | ${Math.round((Date.now() - t0) / 1000)} s`);
    if (score(s) > best) { best = score(s); saveNet(net, { note: `DAgger ${it}: ${JSON.stringify(s)}` }); log(`  salvata (punteggio ${best.toFixed(1)})`); }
  }
  await Promise.all(W.map((w) => w.close()));
}

// ------------------------------------------------------------------ rinforzo (PPO)
async function ppo(iters = 30, steps = 6000) {
  const j = savedNet();
  const actor = MLP.from(j, 'tanh'), critic = new MLP([N, ...HID, 1], 'linear', 9);
  let logStd = [-1.9, -1.9];          // esplorazione piccola: la rete imitata guida gia' bene
  const gamma = 0.99, lam = 0.95, clipE = 0.2, B = 512;
  const W = await workers(777);
  let best = -1e9;
  // misura di partenza
  {
    const ev = await Promise.all(W.map((w) => w.run({ kind: 'student', net: actor.toJSON(), maxSteps: 8000 })));
    const s = summary(ev.flatMap((r) => r.eps)); best = score(s); log(`PPO partenza: ${JSON.stringify(s)} (punteggio ${best.toFixed(1)})`);
  }
  for (let it = 1; it <= iters; it++) {
    const t0 = Date.now();
    const std = logStd.map(Math.exp);
    const rs = await Promise.all(W.map((w) => w.run({ kind: 'student', net: actor.toJSON(), noise: std, maxSteps: steps })));
    // vantaggi (GAE) per ogni lavoratore
    const obs = [], act = [], tea = [], adv = [], ret = [], oldMu = [];
    for (const r of rs) {
      const T = r.rew.length, V = new Float32Array(T + 1);
      for (let t = 0; t < T; t++) V[t] = critic.forward(Float32Array.from(r.obs.slice(t * N, t * N + N)))[0];
      V[T] = r.lastObs ? critic.forward(Float32Array.from(r.lastObs))[0] : 0;
      let g = 0;
      const A = new Float32Array(T);
      for (let t = T - 1; t >= 0; t--) {
        const nonTerm = r.done[t] ? 0 : 1, nextV = t === T - 1 ? V[T] : V[t + 1];
        const delta = r.rew[t] + gamma * nextV * nonTerm - V[t];
        g = delta + gamma * lam * nonTerm * g; A[t] = g;
      }
      for (let t = 0; t < T; t++) {
        obs.push(r.obs.slice(t * N, t * N + N)); act.push([r.act[t * 2], r.act[t * 2 + 1]]); tea.push([r.tea[t * 2], r.tea[t * 2 + 1]]);
        adv.push(A[t]); ret.push(A[t] + V[t]);
        const mu = actor.forward(Float32Array.from(obs[obs.length - 1])); oldMu.push([mu[0], mu[1]]);
      }
    }
    const M = obs.length, mean = adv.reduce((a, b) => a + b, 0) / M, sd = Math.sqrt(adv.reduce((a, b) => a + (b - mean) ** 2, 0) / M) || 1;
    for (let i = 0; i < M; i++) adv[i] = (adv[i] - mean) / sd;
    const bcW = Math.max(0.2, 1.0 * Math.pow(0.9, it));      // resta vicino al maestro, sempre meno
    const warm = it <= 3;                                      // primi giri: si allena solo il critico
    const lp = (a, mu, ls) => { let s = 0; for (let k = 0; k < 2; k++) { const z = (a[k] - mu[k]) / Math.exp(ls[k]); s += -0.5 * z * z - ls[k]; } return s; };
    const idx = [...Array(M).keys()], dA = new Float32Array(2), dV = new Float32Array(1);
    let gLs = [0, 0], clipped = 0, kl = 0, stopped = false;
    for (let ep = 0; ep < 4 && !stopped; ep++) {
      kl = 0;
      for (let i = M - 1; i > 0; i--) { const q = Math.floor(Math.random() * (i + 1)); [idx[i], idx[q]] = [idx[q], idx[i]]; }
      for (let s = 0; s < M; s += B) {
        const e = Math.min(M, s + B);
        for (let q = s; q < e; q++) {
          const k = idx[q], o = Float32Array.from(obs[k]);
          const mu = actor.forward(o), a = act[k];
          const lr0 = lp(a, mu, logStd) - lp(a, oldMu[k], logStd), ratio = Math.exp(lr0), A = adv[k];
          kl += (ratio - 1) - lr0;
          const unclipped = !((A > 0 && ratio > 1 + clipE) || (A < 0 && ratio < 1 - clipE));
          if (!unclipped) clipped++;
          for (let c = 0; c < 2; c++) {
            const s2 = Math.exp(2 * logStd[c]);
            // minimizza -L: dL/dmu = A * ratio * (a - mu) / s^2 se non tagliato
            dA[c] = (unclipped ? -A * ratio * (a[c] - mu[c]) / s2 : 0) + bcW * 2 * (mu[c] - tea[k][c]);
            if (unclipped) gLs[c] += -A * ratio * ((((a[c] - mu[c]) ** 2) / s2) - 1);
          }
          if (!warm) actor.backward(dA);
          const v = critic.forward(o)[0]; dV[0] = 2 * (v - ret[k]) * 0.5; critic.backward(dV);
        }
        if (!warm) actor.step(1e-4, 1 / (e - s), 0.5); else actor.zero();
        critic.step(1e-3, 1 / (e - s), 1.0);
        if (!warm) for (let c = 0; c < 2; c++) logStd[c] = Math.max(-2.5, Math.min(-1.2, logStd[c] - 1e-4 * (gLs[c] / (e - s) - 0.01)));   // con un po' di entropia
        gLs = [0, 0];
      }
      // la rete e' cambiata troppo rispetto a quella che ha raccolto i dati: basta cosi' per questo giro
      if (!warm && kl / M > 0.015) stopped = true;
    }
    const sumR = summary(rs.flatMap((r) => r.eps));
    let msg = `PPO ${it}${warm ? ' (solo critico)' : ''}: campioni ${M}, KL ${(kl / M).toFixed(4)}${stopped ? ' (stop)' : ''}, tagliati ${(clipped / (4 * M) * 100).toFixed(0)}%, std ${logStd.map((x) => Math.exp(x).toFixed(2)).join('/')}, bc ${bcW.toFixed(2)} | raccolta ${JSON.stringify(sumR)}`;
    if ((it % 3 === 0 && !warm) || it === iters) {
      const ev = await Promise.all(W.map((w) => w.run({ kind: 'student', net: actor.toJSON(), maxSteps: 8000 })));
      const s = summary(ev.flatMap((r) => r.eps));
      msg += ` | rete ${JSON.stringify(s)}`;
      if (score(s) > best) { best = score(s); saveNet(actor, { logStd, note: `PPO ${it}: ${JSON.stringify(s)}` }); msg += ` | salvata (${best.toFixed(1)})`; }
    }
    log(msg + ` | ${Math.round((Date.now() - t0) / 1000)} s`);
  }
  await Promise.all(W.map((w) => w.close()));
}

async function evaluate(steps = 15000) {
  const j = savedNet();
  const W = await workers(4242);
  const ev = await Promise.all(W.map((w) => w.run({ kind: 'student', net: j, maxSteps: steps })));
  const et = await Promise.all(W.map((w) => w.run({ kind: 'teacher', maxSteps: steps })));
  log(`misura rete: ${JSON.stringify(summary(ev.flatMap((r) => r.eps)))}`);
  log(`misura maestro: ${JSON.stringify(summary(et.flatMap((r) => r.eps)))}`);
  await Promise.all(W.map((w) => w.close()));
}

if (mode === 'dagger') await dagger(+(a1 || 6), +(a2 || 15000));
else if (mode === 'refine') await dagger(+(a1 || 4), +(a2 || 15000), true);
else if (mode === 'ppo') await ppo(+(a1 || 30), +(a2 || 6000));
else if (mode === 'eval') await evaluate(+(a1 || 15000));
