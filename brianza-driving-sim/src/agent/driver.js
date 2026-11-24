// Il pilota addestrato al volante di un veicolo del gioco (giocatore col pilota automatico, volanti).
// Usa le stesse osservazioni dell'allenamento (src/agent/env.js) sul percorso del navigatore e decide
// sterzo e gas/freno 10 volte al secondo; tra una decisione e l'altra tiene l'ultima.
// La rete (data/agent/driver.js) si carica la prima volta che serve. Le volanti con la sirena usano
// una seconda rete allenata per l'inseguimento (data/agent/pursuit.js: niente semafori, fino a 160 km/h,
// curve al limite dell'aderenza); se manca, guidano con la prima fino a 90 km/h.
import { DriveEnv } from './env.js';
import { Policy } from './policy.js';
import { loadData } from '../data.js';

const nets = {}, loading = {};
function load(name) {
  if (!loading[name]) loading[name] = loadData('agent_' + name, `data/agent/${name}.js`).then((j) => (nets[name] = new Policy(j))).catch((e) => { console.warn('pilota addestrato non disponibile: ' + name, e); return null; });
  return loading[name];
}
export const loadDriver = () => load('driver');
export const loadPursuit = () => load('pursuit');
export const driverReady = () => !!nets.driver;

export class AgentDriver {
  constructor(G, vehicle, opts = {}) {
    this.G = G; this.v = vehicle;
    this.env = new DriveEnv(G, vehicle.spec, { traffic: 0 });
    this.env.car = vehicle;
    this.a = new Float32Array(2); this.wait = 0; this.route = null;
    loadDriver(); if (opts.pursuit) loadPursuit();
  }
  get ready() { return !!nets.driver && !!this.env.path; }

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
  // per le volanti all'inseguimento); opts.ignoreSignals: i semafori non contano (sirena accesa);
  // opts.pursuit: rete dell'inseguimento (rallenta ai rossi ma non si ferma)
  control(dt, opts = {}) {
    const E = this.env, pnet = opts.pursuit && opts.maxKmh && !this.G.agentNoPursuit ? nets.pursuit : null, net = pnet || nets.driver;
    if (!net || !E.path) return null;
    this.wait -= dt;
    if (this.wait <= 0) {
      this.wait = 0.1;
      E.t = performance.now() / 1000;                // stesso orologio dei semafori del gioco
      E.pursuit = !!pnet; E.vmax = Math.max(30, Math.min(160, opts.maxKmh || 50));
      const o = E.observe();
      if (pnet) { net.act(o, this.a); E.shield(this.a, { ignoreSignals: true }); return this.cmd(); }
      if (opts.maxKmh) { o[27] = Math.min(90, opts.maxKmh) / 130; o[28] = Math.min(o[28] * 130, Math.min(90, opts.maxKmh)) / 130; }
      if (opts.ignoreSignals) { o[31] = 1; o[32] = 0; }
      net.act(o, this.a);
      E.shield(this.a, opts);                        // rossi e frenata d'emergenza garantiti
    }
    return this.cmd();
  }
  cmd() {
    const acc = this.a[1];
    return { throttle: Math.max(0, acc), brake: Math.max(0, -acc), steer: this.a[0], handbrake: 0, pitch: 0, analogWheel: true };
  }
}
