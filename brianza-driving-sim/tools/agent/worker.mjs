// Un "lavoratore" dell'allenamento: un Chromium senza schermo con il gioco caricato su una zona
// (tutte le tessere entro ~1,6 km), il gioco in pausa e l'ambiente di guida pronto. Esegue episodi
// interi dentro la pagina (niente andata e ritorno per ogni passo) e restituisce le traiettorie.
// playwright: quello installato nel sistema (o nel progetto)
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');

export async function startWorker({ lat, lon, traffic = 35, seed = 1, log = () => {} }) {
  const b = await chromium.launch({ args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader'] });
  const p = await b.newPage({ viewport: { width: 160, height: 120 } });
  p.on('pageerror', (e) => log('ERRORE pagina: ' + e.message));
  await p.goto(`file://${ROOT}/index.html?auto=0&lat=${lat}&lon=${lon}`);
  await p.waitForSelector('#menu:not(.hidden)', { timeout: 180000 });
  await p.selectOption('#quality', 'low'); await p.selectOption('#traffic', '0'); await p.selectOption('#police', '0');
  await p.click('#go');
  for (let i = 0; i < 600; i++) { const l = await p.evaluate(() => window.BDS.loadingWorld); if (!l) break; await p.waitForTimeout(300); }
  // tutte le tessere della zona, con collisioni e strade
  await p.evaluate(async ([traffic, seed]) => {
    const G = window.BDS, W = G.world, v = G.vehicle;
    G.paused = true; G.police.enabled = false; G.police.clear(); if (G.peds) G.peds.setTarget(0);
    const cx = v.x, cz = v.z;
    W.settings.viewTiles = Math.max(W.settings.viewTiles || 1, 2);
    for (let it = 0; it < 20000; it++) {
      W.update(cx, cz); W.pump(500);
      let ok = true;
      for (const t of W.tiles.values()) if (t.d < 1700 && !('labels' in t.parts)) { ok = false; break; }
      if (ok && it > 50) break;
      if (it % 10 === 0) await new Promise((r) => setTimeout(r, 0));
    }
    // generatore pseudo-casuale riproducibile per l'ambiente
    let s = seed >>> 0 || 1;
    const rand = () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
    window.AG = { env: G.agent.make({ traffic, rand }), cx, cz, Policy: G.agent.Policy };
  }, [traffic, seed]);
  const info = await p.evaluate(() => ({ cx: window.AG.cx, cz: window.AG.cz, tiles: window.BDS.world.tiles.size }));
  log(`zona pronta (${lat}, ${lon}): ${info.tiles} tessere`);

  // episodi: mode = { kind: 'teacher' | 'student' | 'mix', beta, noise, net, maxSteps }
  // restituisce osservazioni, azioni eseguite, azioni del maestro, ricompense, fine episodio, statistiche
  const run = (mode) => p.evaluate((mode) => {
    const A = window.AG, env = A.env, N = window.BDS.agent.OBS_N;
    const pol = mode.net ? new A.Policy(mode.net) : null;
    const obs = [], act = [], tea = [], rew = [], done = [], eps = [];
    const a = new Float32Array(2), t = new Float32Array(2), m = new Float32Array(2);
    const gauss = () => { let u = 0, v = 0; while (u === 0) u = Math.random(); while (v === 0) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
    let steps = 0, o = null;
    const t0 = performance.now();
    while (steps < mode.maxSteps) {
      if (!o) { o = env.reset(A.cx, A.cz, mode.radius || 1200); if (!o) break; }
      env.teacher(t);
      if (pol && mode.kind !== 'teacher') {
        pol.act(o, m);
        const useT = mode.kind === 'mix' && Math.random() < mode.beta;
        a[0] = useT ? t[0] : m[0] + (mode.noise ? gauss() * mode.noise[0] : 0);
        a[1] = useT ? t[1] : m[1] + (mode.noise ? gauss() * mode.noise[1] : 0);
        if (mode.shield) env.shield(a);
      } else { a[0] = t[0]; a[1] = t[1]; }
      for (let i = 0; i < N; i++) obs.push(o[i]);
      act.push(a[0], a[1]); tea.push(t[0], t[1]);
      const r = env.step(a);
      rew.push(r.r); done.push(r.done ? 1 : 0); steps++;
      o = r.done ? null : env.obs;
      if (r.done) { const S = env.stats; eps.push({ why: r.why, dist: Math.round(S.dist), total: Math.round(env.path.total), reds: S.reds, lat: +(S.lat / Math.max(1, S.n)).toFixed(2), speeding: S.speeding, steps: S.n, scrapes: S.scrapes || 0, hit: S.hit, off: S.off, end: S.end }); }
    }
    // l'ultimo episodio interrotto: chiuso senza segnare la fine (serve il valore per il rinforzo)
    const lastObs = o ? Array.from(o) : null;
    return { obs, act, tea, rew, done, eps, lastObs, ms: performance.now() - t0 };
  }, mode);
  return { page: p, browser: b, run, close: () => b.close() };
}
