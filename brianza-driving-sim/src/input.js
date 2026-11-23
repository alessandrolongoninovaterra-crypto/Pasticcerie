// Comandi: tastiera, gamepad (qualsiasi, anche non "standard") e volanti (Gamepad API).
//
// Gamepad: ogni comando e' legato a un asse (con verso e posizione di riposo) oppure a un tasto.
// Per i gamepad con mappatura "standard" (Xbox, PlayStation, Switch Pro riconosciuti dal browser)
// c'e' una mappatura predefinita; per gli altri una di base, e per tutti la configurazione guidata
// (PadWizard) che si salva per modello di gamepad.

// comandi configurabili: [chiave, descrizione per la configurazione guidata, tipo]
//   tipo 'axis': analogico a due versi (sterzo, cabra/picchia): si muove nel verso indicato
//   tipo 'analog': analogico a un verso (acceleratore, freno): grilletto, tasto o stick
//   tipo 'button': tasto
// Disposizione di GTA V (tra parentesi PlayStation 4):
//  a piedi: stick sinistro cammina, L3 furtivita', stick destro guarda attorno, R3 guarda dietro,
//    X/quadrato salta e scavalca (mirando: schivata), Y/triangolo sali, A/croce scatta, LB/L1 tenuto
//    ruota delle armi (stick destro per scegliere), LT/L2 mira, RT/R2 spara, B/cerchio ricarica;
//  in auto: RT/R2 accelera, LT/L2 frena e retromarcia, RB/R1 freno a mano, L3 clacson, R3 guarda
//    dietro, Y/triangolo scendi, croce destra fari (vicino a un negozio: entra);
//  in aereo: stick sinistro inclina e cabra, RT/R2 e LT/L2 spinta su e giu' (a terra LT frena),
//    LB/L1 e RB/R1 virano a sinistra e a destra;
//  sempre: View/touchpad cambia visuale, croce in alto telefono (lavori), Menu/Options pausa.
export const PAD_ACTIONS = [
  ['steer', 'Sterzo / alettoni (stick sinistro): muovi lo stick verso SINISTRA', 'axis'],
  ['throttle', 'Acceleratore / spara (RT, R2): premi il grilletto destro', 'analog'],
  ['brake', 'Freno e retromarcia / mira (LT, L2): premi il grilletto sinistro', 'analog'],
  ['pitch', 'Avanti/indietro a piedi, cabrare in aereo (stick sinistro): muovi lo stick IN BASSO', 'axis'],
  ['camX', 'Telecamera e mira orizzontale (stick destro): muovi lo stick verso DESTRA', 'axis'],
  ['camY', 'Telecamera e mira verticale (stick destro): muovi lo stick IN ALTO', 'axis'],
  ['handbrake', 'Freno a mano (RB, R1)', 'button'],
  ['exit', 'Scendi / sali sul veicolo (Y, triangolo)', 'button'],
  ['sprint', 'A piedi: scatto (A, croce)', 'button'],
  ['jump', 'A piedi: salto (X, quadrato)', 'button'],
  ['reload', 'A piedi: ricarica (B, cerchio)', 'button'],
  ['weapon', 'A piedi: ruota delle armi, tenuto; un tocco cambia arma (LB, L1)', 'button'],
  ['camera', 'Cambia visuale (View, Share)', 'button'],
  ['horn', 'Clacson in auto, furtività a piedi (pressione stick sinistro, L3)', 'button'],
  ['lookBack', 'Guarda indietro (pressione stick destro, R3)', 'button'],
  ['lights', 'Fari / entra nel negozio (croce direzionale DESTRA)', 'button'],
  ['jobs', 'Telefono: lavori (croce direzionale SU)', 'button'],
  ['map', 'Mappa (croce direzionale GIÙ)', 'button'],
  ['reset', 'Rimetti in strada / riparti in volo (croce direzionale SINISTRA)', 'button'],
  ['pause', 'Pausa (Menu, Options)', 'button'],
];
// comandi-tasto tenuti premuti (non a scatto)
const HELD = new Set(['handbrake', 'horn', 'sprint', 'jump', 'lookBack', 'weapon']);

const ax = (i, dir = 1, rest = 0) => ({ t: 'a', i, dir, rest });
const bt = (i) => ({ t: 'b', i });
// mappatura "standard" del W3C: stick sinistro = assi 0/1, grilletti = tasti 6/7, A B X Y = 0 1 2 3,
// LB RB = 4 5, select/view = 8, start/menu = 9, pressione stick = 10/11
// croce direzionale 12 su, 13 giu', 14 sinistra, 15 destra
const STANDARD = {
  steer: ax(0, -1), throttle: bt(7), brake: bt(6), pitch: ax(1, 1), camX: ax(2, 1), camY: ax(3, -1),
  handbrake: bt(5), exit: bt(3), sprint: bt(0), jump: bt(2), reload: bt(1), weapon: bt(4),
  camera: bt(8), horn: bt(10), lookBack: bt(11), lights: bt(15), jobs: bt(12), map: bt(13), reset: bt(14), pause: bt(9),
};
// gamepad non standard: ipotesi piu' comune (stick sinistro su 0/1, grilletti come tasti 6/7)
const GENERIC = { ...STANDARD };

const BOUND = 0.12;   // zona morta degli stick

// dispositivi che il browser elenca come gamepad ma non lo sono: i sensori di movimento del
// DualShock 4 / DualSense (su Linux sono un "gamepad" a parte, con accelerometro e giroscopio come
// assi: inclinando il controller sterzava da solo) e il touchpad
export const ignorePad = (gp) => !gp || !gp.connected || /motion sensors|touchpad|accelerometer|gyro/i.test(gp.id) || (gp.buttons || []).length < 4;
const isSony = (gp) => /054c|sony|playstation|dualshock|dualsense|wireless controller/i.test(gp.id);

export class Input {
  constructor() {
    this.keys = new Set();
    this.pressed = new Set();
    this.steerKb = 0;
    this.wheelCfg = { enabled: false, steerAxis: 0, throttleAxis: 2, brakeAxis: 3, invertPedals: true, deadzone: 0.04 };
    try { Object.assign(this.wheelCfg, JSON.parse(localStorage.getItem('bds-wheel') || '{}')); } catch (e) { /* ignore */ }
    this.padMaps = {};
    try { this.padMaps = JSON.parse(localStorage.getItem('bds-pad') || '{}'); } catch (e) { /* ignore */ }
    addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
    this.padPrev = {};       // per gamepad: stato dei comandi-tasto al fotogramma prima
    this.onPadConnect = null;
    addEventListener('gamepadconnected', (e) => { if (this.onPadConnect) this.onPadConnect(e.gamepad, this.mapFor(e.gamepad)); });
  }

  saveWheel() { try { localStorage.setItem('bds-wheel', JSON.stringify(this.wheelCfg)); } catch (e) { /* ignore */ } }
  savePads() { try { localStorage.setItem('bds-pad', JSON.stringify(this.padMaps)); } catch (e) { /* ignore */ } }

  // mappatura in uso per un gamepad: personalizzata, standard o di base
  mapFor(gp) {
    if (this.padMaps[gp.id]) {
      // configurazioni salvate prima dei comandi nuovi (stick destro, scatto, salto, armi...): quelli che mancano prendono la posizione predefinita
      const base = gp.mapping === 'standard' ? STANDARD : GENERIC, own = this.padMaps[gp.id], used = new Set(Object.values(own).filter(Boolean).map((b) => b.t + b.i));
      const add = {};
      for (const [k] of PAD_ACTIONS) if (!(k in own) && base[k] && !used.has(base[k].t + base[k].i)) add[k] = base[k];
      return { map: { ...own, ...add }, kind: 'personalizzata' };
    }
    if (gp.mapping === 'standard') return { map: STANDARD, kind: 'standard' };
    // non standard: se gli assi 2 e 5 stanno a -1 a riposo sono quasi sicuramente i grilletti
    // (comune su Linux e nei compatibili Xbox); la prima volta che si vede il gamepad si decide
    if (!this.genericFor) this.genericFor = {};
    const g = this.genericFor[gp.id];
    if (!g || !g.decided) {
      let m = GENERIC, decided = false;
      if (isSony(gp) && gp.axes.length >= 6) {
        // DualShock 4 / DualSense senza mappatura standard (Firefox, alcuni sistemi): L2/R2 analogici
        // sugli assi 3/4 (con la croce come asse 9, Windows/macOS) oppure 2/5 (Linux); tasti
        // 0 quadrato, 1 croce, 2 cerchio, 3 triangolo, 4/5 L1/R1, 8 share, 9 options, 10/11 stick
        const win = gp.axes.length >= 10 || gp.buttons.length >= 14;
        // stick destro: assi 2/5 (Windows) o 3/4 (Linux); la croce e' un asse "hat": fari, mappa e
        // rimetti in strada restano su tastiera (o si assegnano con la configurazione guidata)
        m = { ...GENERIC, steer: ax(0, -1), pitch: ax(1, 1), throttle: win ? ax(4, 1, -1) : ax(5, 1, -1), brake: win ? ax(3, 1, -1) : ax(2, 1, -1),
          camX: win ? ax(2, 1) : ax(3, 1), camY: win ? ax(5, -1) : ax(4, -1),
          handbrake: bt(5), exit: bt(3), sprint: bt(1), jump: bt(0), reload: bt(2), weapon: bt(4), camera: bt(8), pause: bt(9), horn: bt(10), lookBack: bt(11),
          lights: null, map: null, reset: null, jobs: null };
        decided = true;
      } else if (gp.axes.length >= 6 && gp.axes[2] < -0.9 && gp.axes[5] < -0.9) {
        // assi 2 e 5 a -1 a riposo: grilletti (Linux, compatibili Xbox). Prima di toccarli molti
        // browser li danno a 0: si ricontrolla finche' non si e' sicuri
        // driver xpad (Linux): A B X Y = 0 1 2 3, LB RB = 4 5, View 6, Menu 7, stick 9/10; stick destro 3/4
        m = { ...GENERIC, throttle: ax(5, 1, -1), brake: ax(2, 1, -1), pitch: ax(1, 1), camX: ax(3, 1), camY: ax(4, -1),
          handbrake: bt(5), exit: bt(3), sprint: bt(0), jump: bt(2), reload: bt(1), weapon: bt(4), camera: bt(6), pause: bt(7), horn: bt(9), lookBack: bt(10),
          lights: null, map: null, reset: null, jobs: null };
        decided = true;
      }
      this.genericFor[gp.id] = { map: m, decided };
    }
    return { map: this.genericFor[gp.id].map, kind: isSony(gp) ? 'PlayStation (non standard, riconosciuta)' : 'di base (gamepad non standard: conviene configurarlo)' };
  }

  setPadMap(id, map) { if (map) this.padMaps[id] = map; else delete this.padMaps[id]; this.savePads(); }

  consume(code) { const p = this.pressed.has(code); this.pressed.delete(code); return p; }

  // valore di un comando: per 'axis' da -1 a 1, per gli altri da 0 a 1
  // touched: assi gia' visti diversi da 0 (un grilletto mai toccato vale 0 invece di -1: non e' "a meta'")
  static value(gp, b, kind, touched) {
    if (!b) return 0;
    if (b.t === 'b') { const x = gp.buttons[b.i]; return x ? (typeof x === 'object' ? Math.max(x.value, x.pressed ? 1 : 0) : x) : 0; }
    const raw = gp.axes[b.i];
    if (raw === undefined) return 0;
    if (kind !== 'axis' && Math.abs(b.rest || 0) > 0.5 && raw === 0 && touched && !touched.has(b.i)) return 0;
    if (kind === 'axis') {
      const v = (raw - (b.rest || 0)) * b.dir;
      return Math.abs(v) < BOUND ? 0 : Math.max(-1, Math.min(1, (v - Math.sign(v) * BOUND) / (1 - BOUND)));
    }
    // un verso solo: grilletto analogico (a riposo -1 o +1) o meta' di uno stick (a riposo 0)
    const span = Math.abs(b.rest || 0) > 0.5 ? 2 : 1;
    const v = (raw - (b.rest || 0)) * b.dir / span;
    return v < 0.06 ? 0 : Math.min(1, v);
  }

  read(dt) {
    const k = this.keys;
    const left = k.has('KeyA') || k.has('ArrowLeft'), right = k.has('KeyD') || k.has('ArrowRight');
    const target = (left ? 1 : 0) - (right ? 1 : 0); // + = sinistra
    const rate = target === 0 ? 5 : (Math.sign(target) !== Math.sign(this.steerKb) && this.steerKb !== 0 ? 6 : 2.6);
    this.steerKb += Math.max(-rate * dt, Math.min(rate * dt, target - this.steerKb));
    const out = {
      throttle: (k.has('KeyW') || k.has('ArrowUp')) ? 1 : 0,
      brake: (k.has('KeyS') || k.has('ArrowDown')) ? 1 : 0,
      steer: this.steerKb,
      handbrake: k.has('Space') ? 1 : 0,
      analogWheel: false,
      actions: new Set(),          // comandi-tasto premuti in questo fotogramma (fronte di salita)
      horn: false,                 // clacson tenuto premuto
      padThr: 0, padBrk: 0, padPitch: 0,   // per l'aereo: manetta e cabra/picchia dal gamepad
      camX: 0, camY: 0,            // stick destro: telecamera e mira (+ = destra, + = in alto)
      sprint: false, jump: false, lookBack: false,
      weaponHeld: false, padR1: false, padHorn: false,   // LB/L1 tenuto, RB/R1 e L3 del gamepad (aereo, furtivita')
      dpadUp: false, dpadDown: false, padA: false, padB: false,   // per i pannelli dei negozi
      pad: null,
    };
    if (k.has('ShiftLeft') || k.has('ShiftRight')) out.throttle *= 0.45; // acceleratore parziale
    if (this.paused) return out;   // durante la configurazione guidata il gamepad non comanda il gioco
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    if (!this.touched) this.touched = {};
    for (const gp of pads) {
      if (ignorePad(gp)) continue;
      const ax = gp.axes;
      const T = this.touched[gp.id] || (this.touched[gp.id] = new Set());
      for (let i = 0; i < ax.length; i++) if (ax[i] !== 0) T.add(i);
      if (this.wheelCfg.enabled) {
        const c = this.wheelCfg;
        const pedal = (v) => { if (v === undefined) return 0; let p = c.invertPedals ? (1 - v) / 2 : (v + 1) / 2; return p < 0.03 ? 0 : Math.min(1, p); };
        const st = ax[c.steerAxis] || 0;
        if (Math.abs(st) > 0.005 || pedal(ax[c.throttleAxis]) > 0 || pedal(ax[c.brakeAxis]) > 0) {
          out.steer = -st; out.analogWheel = true;
          out.throttle = Math.max(out.throttle, pedal(ax[c.throttleAxis]));
          out.brake = Math.max(out.brake, pedal(ax[c.brakeAxis]));
        }
      }
      const { map } = this.mapFor(gp);
      out.pad = gp.id;
      if (!this.wheelCfg.enabled) {
        const st = Input.value(gp, map.steer, 'axis', T);
        if (Math.abs(st) > 0) out.steer = Math.sign(st) * Math.pow(Math.abs(st), 1.6);
        const thr = Input.value(gp, map.throttle, 'analog', T), brk = Input.value(gp, map.brake, 'analog', T);
        out.throttle = Math.max(out.throttle, thr); out.brake = Math.max(out.brake, brk);
        out.padThr = thr; out.padBrk = brk;
        out.padPitch = Input.value(gp, map.pitch, 'axis', T);
      }
      const cx = Input.value(gp, map.camX, 'axis', T), cy = Input.value(gp, map.camY, 'axis', T);
      if (Math.abs(cx) > Math.abs(out.camX)) out.camX = cx;
      if (Math.abs(cy) > Math.abs(out.camY)) out.camY = cy;
      out.sprint = out.sprint || Input.value(gp, map.sprint, 'analog', T) > 0.5;
      out.jump = out.jump || Input.value(gp, map.jump, 'analog', T) > 0.5;
      out.lookBack = out.lookBack || Input.value(gp, map.lookBack, 'analog', T) > 0.5;
      out.weaponHeld = out.weaponHeld || Input.value(gp, map.weapon, 'analog', T) > 0.5;
      out.padR1 = out.padR1 || Input.value(gp, map.handbrake, 'analog', T) > 0.5;
      out.padHorn = out.padHorn || Input.value(gp, map.horn, 'analog', T) > 0.5;
      out.dpadUp = out.dpadUp || Input.value(gp, map.jobs, 'analog', T) > 0.5;
      out.dpadDown = out.dpadDown || Input.value(gp, map.map, 'analog', T) > 0.5;
      out.padA = out.padA || Input.value(gp, map.sprint, 'analog', T) > 0.5;
      out.padB = out.padB || Input.value(gp, map.reload, 'analog', T) > 0.5;
      if (Input.value(gp, map.handbrake, 'analog', T) > 0.5) out.handbrake = 1;
      out.horn = out.horn || Input.value(gp, map.horn, 'analog', T) > 0.5;
      // comandi-tasto: fronte di salita
      const prev = this.padPrev[gp.index] || {}, now = {};
      for (const [key, , kind] of PAD_ACTIONS) {
        if (kind !== 'button' || HELD.has(key)) continue;
        now[key] = Input.value(gp, map[key], 'analog', T) > 0.5;
        if (now[key] && !prev[key]) out.actions.add(key);
      }
      // PlayStation 4: anche il touchpad cambia visuale (come in GTA V; in Chrome e' il tasto 17)
      const tp = isSony(gp) && gp.buttons[17] && gp.buttons[17].pressed;
      if (tp && !prev.touchpad) out.actions.add('camera');
      now.touchpad = !!tp;
      this.padPrev[gp.index] = now;
    }
    return out;
  }

  // per la calibrazione del volante: valori correnti di tutti gli assi
  axesSnapshot() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const gp of pads) if (gp && !ignorePad(gp)) return { id: gp.id, axes: [...gp.axes] };
    return null;
  }
}

// Configurazione guidata: per ogni comando aspetta che si muova un asse o si prema un tasto e
// registra quale (con il verso e la posizione di riposo dell'asse, per i grilletti analogici).
export class PadWizard {
  constructor(input, ui) {
    this.input = input; this.ui = ui;   // ui: { prompt(text, step, total), done(map), status(text) }
    this.timer = 0;
  }

  pads() { return navigator.getGamepads ? [...navigator.getGamepads()].filter((g) => !ignorePad(g)) : []; }
  current() { return this.pads()[0] || null; }

  start() {
    const gp = this.current();
    if (!gp) { this.ui.status('Nessun gamepad rilevato: collegalo e premi un tasto qualsiasi, poi riprova.'); return false; }
    // con piu' controller collegati (es. DS4Windows crea anche un pad Xbox virtuale) si configura
    // quello che si usa davvero: il primo che risponde al primo comando
    this.id = this.pads().length > 1 ? null : gp.id;
    this.map = {}; this.step = 0;
    this.input.paused = true;
    this.next();
    clearInterval(this.timer);
    this.timer = setInterval(() => this.poll(), 30);
    return true;
  }

  snap(gp) { return { axes: [...gp.axes], buttons: gp.buttons.map((b) => (typeof b === 'object' ? b.value : b)) }; }

  next() {
    if (this.step >= PAD_ACTIONS.length) { this.finish(); return; }
    const [, text] = PAD_ACTIONS[this.step];
    this.ui.prompt(text, this.step + 1, PAD_ACTIONS.length);
    this.bases = {}; this.wait = true; this.pending = null;   // aspetta che tutto torni a riposo prima di ascoltare
  }

  skip() { this.step++; this.next(); }

  poll() {
    const pads = this.pads().filter((g) => !this.id || g.id === this.id);
    if (!pads.length) return;
    const now = performance.now();
    // asse analogico trovato (grilletto): si aspetta che venga rilasciato e si registra la vera
    // posizione di riposo (un grilletto mai toccato vale 0 invece di -1 in molti browser)
    if (this.pending) {
      const P = this.pending, gp = pads.find((g) => g.id === P.id);
      if (!gp) return;
      const v = gp.axes[P.b.i], dir = P.b.dir;
      if ((v - P.peak) * dir > 0) P.peak = v;                 // si sta ancora premendo: nuovo massimo
      const back = (P.peak - v) * dir > 0.5;                  // tornato indietro di oltre meta' corsa
      if (back || now - P.t > 2500) {
        if (!P.relT) P.relT = now;
        if (now - P.relT > 150) {
          if (back) P.b.rest = Math.round(v * 100) / 100;
          this.commit(P.b);
        }
      } else P.relT = 0;
      return;
    }
    if (this.wait) {   // tutto a riposo (nessun tasto premuto) per ripartire con una base pulita
      let ok = true;
      for (const gp of pads) if (!this.snap(gp).buttons.every((v) => v < 0.3)) ok = false;
      // lo stick appena usato deve tornare al centro: prima il suo ritorno veniva preso per il comando
      // successivo (lo sterzo rilasciato diventava l'acceleratore e tutto slittava di un passo)
      const W = this.waitAxis;
      if (W) { const gp = pads.find((g) => g.id === W.id); if (gp && Math.abs(gp.axes[W.i] - W.rest) > 0.25) { ok = false; this.centerT = now; } else if (now - (this.centerT || 0) < 150) ok = false; }
      if (ok) { this.wait = false; this.waitAxis = null; this.restT = now; this.restarts = 0; this.bases = {}; for (const gp of pads) { const s = this.snap(gp); this.bases[gp.id] = { s, min: [...s.axes], max: [...s.axes] }; } }
      return;
    }
    if (now - this.restT < 300) {
      // finestra di riposo: si misura il rumore di ogni asse (sensori di movimento, assi instabili).
      // Un movimento grande non e' rumore: il giocatore ha gia' cominciato. Si aspetta che torni
      // fermo e si riparte (qualche volta al massimo, poi gli assi che non si fermano sono rumore)
      let big = false;
      for (const gp of pads) {
        const B = this.bases[gp.id] || (this.bases[gp.id] = { s: this.snap(gp), min: [...gp.axes], max: [...gp.axes] });
        const s = this.snap(gp);
        if (this.restarts < 6) s.axes.forEach((v, i) => { if (Math.abs(v - B.s.axes[i]) > 0.3) big = true; });
        if (s.buttons.some((v) => v > 0.6)) big = this.restarts < 6;
        B.s = s;
        gp.axes.forEach((v, i) => { B.min[i] = Math.min(B.min[i], v); B.max[i] = Math.max(B.max[i], v); });
      }
      if (big) {
        this.restarts++; this.restT = now;
        for (const gp of pads) { const s = this.snap(gp); this.bases[gp.id] = { s, min: [...s.axes], max: [...s.axes] }; }
        // se si sta gia' premendo un tasto o tirando un grilletto si torna ad aspettare il riposo
        this.wait = true;
      }
      return;
    }
    const [, , kind] = PAD_ACTIONS[this.step];
    for (const gp of pads) {
      const B = this.bases[gp.id];
      if (!B) continue;
      const s = this.snap(gp);
      let found = null;
      // tasto premuto
      s.buttons.forEach((v, i) => { if (!found && v > 0.6 && B.s.buttons[i] < 0.3) found = { t: 'b', i }; });
      // asse mosso di piu' di meta' corsa (vince quello che si e' mosso di piu'). Si ignorano: la
      // croce direzionale come asse "hat" (a riposo fuori da -1..1, es. 1,28 sul DualShock 4), gli
      // assi che si muovevano gia' a riposo (rumore) e, se possibile, quelli oltre il sesto
      // (giroscopio/accelerometro su alcuni sistemi)
      if (!found) {
        for (const lim of [6, 99]) {
          let best = 0.5;
          s.axes.forEach((v, i) => {
            if (i >= lim) return;
            const b0 = B.s.axes[i];
            if (Math.abs(b0) > 1.05 || Math.abs(v) > 1.05 || B.max[i] - B.min[i] > 0.08) return;
            const d = v - b0;
            if (Math.abs(d) > best) { best = Math.abs(d); found = { t: 'a', i, dir: Math.sign(d), rest: Math.round(b0 * 100) / 100 }; }
          });
          if (found) break;
        }
      }
      if (!found) continue;
      if (kind === 'axis' && found.t === 'b') continue;      // sterzo e cabra vogliono un asse
      this.id = gp.id;                                      // da qui si ascolta solo questo controller
      if (kind === 'axis') { found.rest = 0; this.commit(found); this.waitAxis = { id: gp.id, i: found.i, rest: 0 }; this.centerT = now; return; }
      // (per 'steer' si e' chiesto SINISTRA: + = sinistra; per 'pitch' si e' chiesto IN BASSO: + = cabra)
      if (found.t === 'a') { this.pending = { b: found, id: gp.id, peak: s.axes[found.i], t: now }; return; }
      this.commit(found);
      return;
    }
  }

  commit(b) {
    this.map[PAD_ACTIONS[this.step][0]] = b;
    this.step++;
    this.next();
  }

  finish() {
    clearInterval(this.timer);
    this.input.paused = false;
    this.input.setPadMap(this.id || (this.current() && this.current().id), this.map);
    this.ui.done(this.map);
  }

  cancel() { clearInterval(this.timer); this.input.paused = false; }

  static describe(map) {
    const d = (b) => (!b ? '—' : b.t === 'b' ? `tasto ${b.i}` : `asse ${b.i}${b.dir > 0 ? '+' : '−'}${Math.abs(b.rest) > 0.5 ? ' (grilletto)' : ''}`);
    return PAD_ACTIONS.map(([k, text]) => `${text.split(':')[0]}: ${d(map[k])}`);
  }
}
