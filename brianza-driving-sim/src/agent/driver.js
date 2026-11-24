// Il pilota addestrato al volante di un veicolo del gioco (giocatore col pilota automatico, volanti).
// Usa le stesse osservazioni dell'allenamento (src/agent/env.js) sul percorso del navigatore e decide
// sterzo e gas/freno 10 volte al secondo; tra una decisione e l'altra tiene l'ultima.
// La rete (data/agent/driver.js) si carica la prima volta che serve.
import { DriveEnv } from './env.js';
import { Policy } from './policy.js';
import { loadData } from '../data.js';

let net = null, loading = null;
export function loadDriver() {
  if (!loading) loading = loadData('agent_driver', 'data/agent/driver.js').then((j) => { net = new Policy(j); return net; }).catch((e) => { console.warn('pilota addestrato non disponibile', e); return null; });
  return loading;
}
export const driverReady = () => !!net;

export class AgentDriver {
  constructor(G, vehicle) {
    this.G = G; this.v = vehicle;
    this.env = new DriveEnv(G, vehicle.spec, { traffic: 0 });
    this.env.car = vehicle;
    this.a = new Float32Array(2); this.wait = 0; this.route = null;
    loadDriver();
  }
  get ready() { return !!net && !!this.env.path; }

  setRoute(route) {
    this.route = route;
    if (!route || !route.pts || route.pts.length < 2) { this.env.path = null; return false; }
    const p = this.env.buildPath(route);
    if (p.total < 8) { this.env.path = null; return false; }
    this.env.path = p; this.env.i = 0; this.env.s = 0; this.wait = 0;
    return true;
  }
  remaining() { return this.env.path ? this.env.path.total - this.env.s : 0; }

  // comandi per questo fotogramma. opts.maxKmh: velocita' voluta (sostituisce il limite della via,
  // per le volanti all'inseguimento); opts.ignoreSignals: i semafori non contano (sirena accesa)
  control(dt, opts = {}) {
    const E = this.env;
    if (!net || !E.path) return null;
    this.wait -= dt;
    if (this.wait <= 0) {
      this.wait = 0.1;
      E.t = performance.now() / 1000;                // stesso orologio dei semafori del gioco
      const o = E.observe();
      if (opts.maxKmh) { o[27] = Math.min(90, opts.maxKmh) / 130; o[28] = Math.min(o[28] * 130, Math.min(90, opts.maxKmh)) / 130; }
      if (opts.ignoreSignals) { o[31] = 1; o[32] = 0; }
      net.act(o, this.a);
      E.shield(this.a, opts);                        // rossi e frenata d'emergenza garantiti
    }
    const acc = this.a[1];
    return { throttle: Math.max(0, acc), brake: Math.max(0, -acc), steer: this.a[0], handbrake: 0, pitch: 0, analogWheel: true };
  }
}
