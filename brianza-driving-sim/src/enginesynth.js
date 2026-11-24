// Voce del motore sintetizzata campione per campione (AudioWorklet), adattata dal sintetizzatore di
// OSDS (https://github.com/simcruisegame/osds, Source/OSDS/Private/Audio: FOsdsInlineFourSynth,
// FOsdsTurboSynth, FOsdsElectricMotorSynth; codice MIT, Copyright (c) 2026 OSDS contributors).
//
// Ogni scoppio e' un impulso di pressione allo scarico; gli scoppi seguono l'ordine di accensione del
// motore (4 per ciclo nel quattro cilindri, 6 nel V6, 8 nel V8) e ognuno arriva dal tubo della sua
// bancata (quello piu' vicino si sente di piu'): da qui il borbottio del V8 a croce e il ringhio del V6.
// Le risonanze fisse della marmitta (corpo) e del tubo (raspa) restano ferme mentre i giri salgono,
// come in un'auto vera. Sopra il limitatore il taglio dell'iniezione "balbetta" a 14 Hz; rilasciando
// ad alti giri qualche scoppiettio. Turbo (fischio, soffio, sfiato al rilascio) e motore elettrico
// (fischio magnetico e ingranaggi) per le auto che li hanno.

// Il processore gira nel thread audio: la funzione viene serializzata e caricata da un Blob, quindi
// deve bastare a se stessa (niente variabili esterne).
function workletMain() {
  const TAU = Math.PI * 2;
  const SIZE = 1024, MASK = SIZE - 1;
  const smoothStep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  // tabelle armoniche di un impulso di scarico: carico leggero e pieno carico
  const LIGHT = [0.82, 0.14, 0.085, 0.067, 0.045, 0.037, 0.028, 0.020, 0.014, 0.012, 0.007, 0.005];
  const LOAD = [0.64, 0.31, 0.19, 0.13, 0.10, 0.072, 0.073, 0.054, 0.055, 0.046, 0.035, 0.031, 0.025, 0.019, 0.012, 0.007];
  const exLight = new Float32Array(SIZE + 1), exLoad = new Float32Array(SIZE + 1), intake = new Float32Array(SIZE + 1), window_ = new Float32Array(SIZE + 1);
  for (let i = 0; i <= SIZE; i++) {
    const th = TAU * i / SIZE;
    let q = 0, l = 0, a = 0;
    for (let n = 0; n < LOAD.length; n++) { l += LOAD[n] * Math.sin(th * (n + 1) - 0.12 * n); if (n < LIGHT.length) q += LIGHT[n] * Math.sin(th * (n + 1) - 0.15 * n); }
    for (let n = 0; n < 7; n++) a += Math.sin((th - 0.78) * (n + 1)) * 0.21 / (1 + 0.36 * n * n);
    exLight[i] = q; exLoad[i] = l; intake[i] = a;
    window_[i] = 0.28 + 0.72 * Math.pow(0.5 + 0.5 * Math.cos(th - 0.65), 2);
  }
  const PATTERN = [0.1, -0.9, 0.6, -0.3, 0.9, -0.6, 0.3, -0.1, 0.5, -0.7, 0.8, -0.4, 0.2, -0.8, 0.7, -0.2];
  const CYL4 = [1.00, 0.94, 1.04, 0.97];
  // filtro passa-banda RBJ (coefficienti b0, b2=-b0, a1, a2), stato [x1, x2, y1, y2]
  const bandPass = (f, q, rate) => { const w = TAU * f / rate, al = Math.sin(w) / (2 * q), n = 1 + al; return [al / n, -al / n, -2 * Math.cos(w) / n, (1 - al) / n]; };
  const ring = (x, c, z) => { const y = c[0] * x + c[1] * z[1] - c[2] * z[2] - c[3] * z[3]; z[1] = z[0]; z[0] = x; z[3] = z[2]; z[2] = y; return y; };
  // coefficiente di un filtro a un polo dato a 22,05 kHz (come in OSDS) portato alla frequenza vera
  const pole = (a22, rate) => 1 - Math.pow(1 - a22, 22050 / rate);

  class EngineVoice extends AudioWorkletProcessor {
    constructor() {
      super();
      this.rate = sampleRate;
      this.cfg = null;
      this.inp = { rpm: 800, comb: 0, load: 0, pedal: 0, cabin: false, motorRpm: 0, limiter: 6500, stalled: false, gain: 0 };
      this.st = { phase: 0, hz: 0, fired: false, charge: 0, pull: 0, overrun: 0, gain: 0, thr: 0, rnd: 38791, nLow: 0, nSlow: 0, out: 0, boom: 0, pulseGain: 1, fire: 0,
        limPh: 0, cut: 1, overAge: 0, popEnv: 0, popLow: 0, bodyZ: [0, 0, 0, 0], raspZ: [0, 0, 0, 0], master: 0,
        tShaft: 0, tPedal: 0, tPrevPedal: 0, tBlow: 0, tPh: 0, tPh2: 0, tFlut: 0, tWZ: [0, 0, 0, 0], tBZ: [0, 0, 0, 0],
        mRpm: 0, mTorque: 0, mPh: [], mStarted: false, jPh: 0, jZ: [0, 0, 0, 0] };
      this.port.onmessage = (e) => { const d = e.data; if (d.cfg) this.configure(d.cfg); if (d.inp) Object.assign(this.inp, d.inp); };
    }
    rand() { const s = this.st; s.rnd = (s.rnd * 1664525 + 1013904223) & 0x7fffffff; return s.rnd; }
    configure(c) {
      const t = Object.assign({ body: 180, bodyQ: 1.5, rasp: 1900, raspGain: 1, lope: 0, spread: 0, cabinF: 0.25, extF: 0.52 }, c.tone || {});
      this.cfg = { ...c, tone: t, events: c.banks ? c.banks.length : 4 };
      const r = this.rate;
      this.bodyC = bandPass(t.body, t.bodyQ, r); this.raspC = bandPass(t.rasp, 1.2, r);
      this.cabinF = pole(t.cabinF, r); this.extF = pole(t.extF, r);
      if (c.banks) {
        // tabella di un ciclo intero (720 gradi): ogni scoppio con il guadagno del tubo della sua bancata
        const N = c.banks.length, near = c.near || 1, far = c.far || 0.7;
        const gainOf = (e) => { const k = (e + N) % N; return (c.banks[k] === 0 ? near : far) * (1 + t.spread * PATTERN[k]); };
        this.cycL = new Float32Array(SIZE + 1); this.cycH = new Float32Array(SIZE + 1);
        const evDeg = 720 / N;
        for (let i = 0; i <= SIZE; i++) {
          const ang = 720 * (i % SIZE) / SIZE, ev = Math.min(Math.floor(ang / evDeg), N - 1), u = (ang - evDeg * ev) / evDeg;
          const g = gainOf(ev - 1) + (gainOf(ev) - gainOf(ev - 1)) * smoothStep(0, 0.2, u);
          const x = u * SIZE, k = Math.min(x | 0, SIZE - 1), tt = x - k;
          this.cycL[i] = g * (exLight[k] + (exLight[k + 1] - exLight[k]) * tt);
          this.cycH[i] = g * (exLoad[k] + (exLoad[k + 1] - exLoad[k]) * tt);
        }
      } else { this.cycL = null; this.cycH = null; }
      if (c.turbo) {
        const b = c.turbo.blow || 'recirc';
        this.tWC = bandPass(1800, 0.7, r); this.tBC = bandPass(b === 'atmospheric' ? 2600 : b === 'none' ? 650 : 900, b === 'atmospheric' ? 0.6 : 0.9, r);
      }
      if (c.layout === 'jet') this.jC = bandPass(900, 0.5, r);
      this.st.mPh = [];
    }
    combustion(out, n) {
      const c = this.cfg, t = c.tone, s = this.st, I = this.inp, R = this.rate;
      const multi = !!this.cycL, ev = c.events;
      const rpm = I.rpm;
      const targetHz = Math.min(Math.max(rpm, 0), I.limiter + 200) / (multi ? 120 : 30);
      const speedHz = multi ? 215 / 4 : 215;
      if (!s.fired) { s.hz = targetHz; s.fired = true; }
      const hzStep = (targetHz - s.hz) / n;
      const speed0 = Math.min(1, Math.max(0, (rpm - 900) / 1600));
      const tCharge = I.stalled ? 0 : Math.min(1, Math.max(0, I.comb));
      const tThr = Math.min(1, Math.max(0, I.pedal));
      const tPull = Math.min(1, Math.max(0, I.load));
      const tOver = Math.min(1, Math.max(0, -I.load)) * smoothStep(1150, 2300, rpm) * (1 - tCharge);
      const tGain = I.stalled ? 0 : 1;
      const sm = 1 - Math.exp(-1 / (R * 0.025));
      const filt = I.cabin ? this.cabinF : this.extF;
      const boomLevel = I.cabin ? 0.45 : 0, presence = I.cabin ? 1 : 1.12;
      const limiting = rpm > I.limiter && tThr > 0.35 && !I.stalled;
      const cutSm = 1 - Math.exp(-1 / (R * 0.0025));
      const popRpm = 3000;
      if (tOver > 0.25 && rpm > popRpm) s.overAge += n / R; else s.overAge = 0;
      const popChance = s.overAge > 0 ? 0.1 * (c.pops || 0) * tOver * smoothStep(popRpm, 4200, rpm) * Math.exp(-s.overAge / 1.2) : 0;
      const engRpm = Math.max(targetHz * (multi ? 120 : 30), 1);
      const revGain = Math.min(1.15, Math.max(0.5, Math.pow(engRpm / 5000, 0.6)));
      const popLevel = I.cabin ? 0.3 : 0.55, popDecay = Math.exp(-1 / (R * 0.012));
      const inletCabin = c.cabinInlet !== undefined ? c.cabinInlet : 0.5;
      for (let i = 0; i < n; i++) {
        s.thr += (tThr - s.thr) * sm; s.charge += (tCharge - s.charge) * sm; s.pull += (tPull - s.pull) * sm;
        s.overrun += (tOver - s.overrun) * sm; s.gain += (tGain - s.gain) * sm;
        s.hz += hzStep;
        s.phase += s.hz * SIZE / R;
        if (s.phase >= SIZE) {
          s.phase -= SIZE;
          const r = this.rand();
          s.pulseGain = 1 + (r / 1073741824 - 1) * (0.035 - 0.018 * s.charge + t.lope * (1 - s.charge) * (1 - speed0));
          s.fire = (s.fire + 1) & 3;
          if (!multi) s.pulseGain *= CYL4[s.fire];
          if (popChance > 0 && this.rand() / 2147483647 < popChance) s.popEnv = popLevel * (0.6 + 0.4 * (this.rand() & 1023) / 1023);
        }
        let cutT = 1;
        if (limiting) { s.limPh += 14 / R; if (s.limPh >= 1) s.limPh -= 1; if (s.limPh < 0.42) cutT = 0.12; }
        s.cut += (cutT - s.cut) * cutSm;
        let k = (s.phase | 0) & MASK, tt = s.phase - Math.floor(s.phase), quiet, loaded;
        if (multi) {
          quiet = this.cycL[k] + (this.cycL[k + 1] - this.cycL[k]) * tt;
          loaded = this.cycH[k] + (this.cycH[k + 1] - this.cycH[k]) * tt;
          const ep = (s.phase * ev) % SIZE; k = (ep | 0) & MASK; tt = ep - Math.floor(ep);
        } else {
          quiet = exLight[k] + (exLight[k + 1] - exLight[k]) * tt;
          loaded = exLoad[k] + (exLoad[k + 1] - exLoad[k]) * tt;
        }
        const air = intake[k] + (intake[k + 1] - intake[k]) * tt;
        const white = this.rand() / 1073741824 - 1;
        s.nLow += 0.32 * (white - s.nLow); s.nSlow += 0.04 * (s.nLow - s.nSlow);
        const breath = (s.nLow - s.nSlow) * window_[k];
        const spd = Math.min(1, Math.max(0, s.hz / speedHz));
        const pulse = (quiet + (loaded - quiet) * s.charge) * s.pulseGain * s.cut;
        const exLevel = (0.17 + 0.34 * s.charge + 0.14 * s.pull + 0.08 * spd - 0.045 * s.overrun) * presence;
        const inlet = revGain * (0.02 + 0.42 * s.thr * s.charge) * (I.cabin ? inletCabin : 1) * s.cut;
        const airflow = (0.036 + 0.13 * s.charge + 0.08 * s.overrun) * (0.55 + spd) + 0.05 * (1 - s.cut);
        s.popEnv *= popDecay; s.popLow += 0.35 * (white * s.popEnv - s.popLow);
        const dry = pulse * exLevel * revGain;
        const exh = 0.6 * dry + 0.6 * (0.15 + 0.85 * s.charge) * ring(dry, this.bodyC, s.bodyZ) + t.raspGain * (0.05 + 0.35 * s.charge) * ring(dry, this.raspC, s.raspZ);
        s.boom += 0.034 * (exh - s.boom);
        const p = exh + s.boom * boomLevel + air * inlet + breath * airflow + s.popLow;
        s.out += filt * (p - s.out);
        out[i] = s.out * s.gain;
      }
    }
    turbo(out, n) {
      const T = this.cfg.turbo, s = this.st, I = this.inp, R = this.rate, dt = 1 / R;
      const tPedal = I.stalled ? 0 : Math.min(1, Math.max(0, I.pedal));
      const want = tPedal * smoothStep(0.45 * T.spool, T.spool, I.rpm);
      if (s.tPrevPedal > 0.45 && tPedal < 0.15 && s.tShaft > 0.3) s.tBlow = Math.min(1, s.tShaft * 1.2);
      s.tPrevPedal = tPedal;
      const atm = T.blow === 'atmospheric', none = T.blow === 'none';
      const rise = 1 - Math.exp(-dt / Math.max(T.lag, 0.05)), fall = 1 - Math.exp(-dt / Math.max(1.6 * T.lag, 0.1));
      const pSm = 1 - Math.exp(-dt / 0.03), blowDecay = Math.exp(-dt / (atm ? 0.35 : none ? 0.45 : 0.22));
      const pick = I.cabin ? 0.6 : 1, twin = (T.count || 1) > 1 ? 1.25 : 1, blowLevel = atm ? 0.16 : none ? 0.1 : 0.05;
      for (let i = 0; i < n; i++) {
        s.tPedal += (tPedal - s.tPedal) * pSm;
        s.tShaft += (want - s.tShaft) * (want > s.tShaft ? rise : fall);
        const f = T.whine * (0.2 + 0.8 * s.tShaft), a = 0.035 * T.whineGain * twin * s.tShaft * s.tShaft * (0.35 + 0.65 * s.tPedal);
        s.tPh = (s.tPh + f * dt) % 1; s.tPh2 = (s.tPh2 + 2 * f * dt) % 1;
        let v = 0;
        if (f < 0.45 * R) v += a * Math.sin(TAU * s.tPh);
        if (2 * f < 0.45 * R) v += 0.3 * a * Math.sin(TAU * s.tPh2);
        const nz = this.rand() / 1073741824 - 1;
        v += 0.06 * T.whoosh * twin * s.tShaft * s.tPedal * ring(nz, this.tWC, s.tWZ);
        if (s.tBlow > 1e-4) {
          let burst = ring(nz, this.tBC, s.tBZ) * s.tBlow * blowLevel;
          if (none) { s.tFlut = (s.tFlut + 18 * dt) % 1; if (s.tFlut >= 0.45) burst *= 0.15; }
          v += burst; s.tBlow *= blowDecay;
        }
        out[i] += v * pick;
      }
    }
    electric(out, n) {
      const M = this.cfg.motor, s = this.st, I = this.inp, R = this.rate;
      const pp = M.polePairs, list = [[2 * pp, 0.15], [6 * pp, 0.5], [12 * pp, 0.22], [M.slots, 0.18], [M.pinion, 0.42], [2 * M.pinion, 0.12]];
      if (s.mPh.length !== list.length) s.mPh = list.map(() => 0);
      const tRpm = Math.min(Math.abs(I.motorRpm), M.maxRpm * 1.05);
      if (!s.mStarted) { s.mRpm = tRpm; s.mStarted = true; }
      const step = (tRpm - s.mRpm) / n, tTorque = Math.min(1, Math.abs(I.load)), sm = 1 - Math.exp(-1 / (R * 0.04));
      const pick = (I.cabin ? 0.7 : 1) * (M.gain || 1);
      for (let i = 0; i < n; i++) {
        s.mRpm += step; s.mTorque += (tTorque - s.mTorque) * sm; s.gain += ((I.stalled ? 0 : 1) - s.gain) * sm;
        const rev = s.mRpm / 60, lvl = Math.sqrt(Math.min(1, Math.max(0, s.mRpm / (0.6 * M.maxRpm))));
        let v = 0;
        for (let k = 0; k < list.length; k++) {
          const f = list[k][0] * rev;
          s.mPh[k] = (s.mPh[k] + f / R) % 1;
          if (f > 0.45 * R || f < 20) continue;
          const ld = k >= 4 ? 0.15 + 0.85 * s.mTorque : 0.3 + 0.7 * s.mTorque;
          v += list[k][1] * ld * Math.sin(TAU * s.mPh[k]);
        }
        // un filo di rotolamento e inverter perche' l'auto ferma non sia muta
        out[i] = 0.06 * v * lvl * pick * s.gain;
      }
    }
    // turbina: soffio a banda larga e fischio legati ai giri
    jet(out, n) {
      const s = this.st, I = this.inp, R = this.rate, k = Math.min(1, Math.max(0, I.rpm / 2700));
      for (let i = 0; i < n; i++) {
        const nz = this.rand() / 1073741824 - 1;
        const f = 1500 + 5500 * k; s.jPh = (s.jPh + f / R) % 1;
        out[i] = (0.35 + 0.6 * k) * ring(nz, this.jC, s.jZ) * 0.5 + 0.02 * k * Math.sin(TAU * s.jPh);
      }
    }
    process(_, outputs) {
      const out = outputs[0][0];
      if (!out) return true;
      const n = out.length;
      if (!this.cfg) { out.fill(0); return true; }
      const L = this.cfg.layout;
      if (L === 'electric') this.electric(out, n);
      else if (L === 'jet') this.jet(out, n);
      else { this.combustion(out, n); if (this.cfg.turbo) this.turbo(out, n); }
      // volume generale (dissolvenza morbida) e limite
      const s = this.st, g = this.inp.gain * (this.cfg.level || 1);
      for (let i = 0; i < n; i++) { s.master += (g - s.master) * 0.002; const v = out[i] * s.master; out[i] = v > 0.94 ? 0.94 : v < -0.94 ? -0.94 : v; }
      return true;
    }
  }
  registerProcessor('bds-engine-voice', EngineVoice);
}
export const WORKLET_SRC = '(' + workletMain.toString() + ')();';

// Voci per auto. Dove OSDS ha la scheda (Content/Vehicles/CarPresentation.json: disposizione dei
// cilindri, ordine di accensione e bancate, timbro, turbo, motore elettrico) i valori sono i suoi;
// le altre sono stime nostre sullo stesso modello.
const V8_GM = [0, 1, 0, 1, 1, 0, 1, 0];          // 1-8-7-2-6-5-4-3, dispari a sinistra
const V8_GM_OLD = [0, 1, 1, 0, 1, 0, 0, 1];      // 1-8-4-3-6-5-7-2
export const VOICES = {
  default: { layout: 'i4' },
  mini: { layout: 'i4', tone: { body: 200, rasp: 2200, raspGain: 1.2 }, turbo: { spool: 1300, lag: 0.5, whine: 6000, whineGain: 0.8, whoosh: 0.9, blow: 'recirc', count: 1 } },
  crv: { layout: 'i4', tone: { body: 210, rasp: 2000, raspGain: 0.4, cabinF: 0.2 }, turbo: { spool: 1700, lag: 0.45, whine: 6500, whineGain: 0.6, whoosh: 0.6, blow: 'recirc', count: 1 } },
  accord: { layout: 'i4', tone: { body: 200, rasp: 2100, raspGain: 0.55, cabinF: 0.21 }, turbo: { spool: 1600, lag: 0.45, whine: 6300, whineGain: 0.6, whoosh: 0.6, blow: 'recirc', count: 1 } },
  miata: { layout: 'i4', tone: { body: 180, rasp: 1900, raspGain: 1.0 } },
  odyssey: { layout: 'v6', banks: [0, 1, 0, 1, 0, 1], near: 0.95, far: 0.85, tone: { body: 190, rasp: 2100, raspGain: 0.5, cabinF: 0.22, spread: 0.04 } },
  f150: { layout: 'v6', banks: [1, 0, 1, 0, 1, 0], near: 1, far: 0.8, tone: { body: 160, rasp: 1800, raspGain: 0.9, spread: 0.05 }, turbo: { spool: 2500, lag: 0.7, whine: 5200, whineGain: 1.0, whoosh: 1.0, blow: 'recirc', count: 2 } },
  mustang: { layout: 'v8', banks: [1, 0, 1, 1, 0, 1, 0, 0], near: 1, far: 0.62, pops: 0.5, tone: { body: 140, bodyQ: 1.3, rasp: 1400, raspGain: 0.6, lope: 0.05, extF: 0.45, spread: 0.12 } },
  c8: { layout: 'v8', banks: V8_GM, near: 1, far: 0.62, pops: 0.4, cabinInlet: 1, tone: { body: 210, rasp: 2400, raspGain: 1.4, lope: 0.02, cabinF: 0.3, extF: 0.62, spread: 0.08 } },
  camaro: { layout: 'v8', banks: V8_GM_OLD, near: 1, far: 0.62, pops: 0.3, tone: { body: 160, rasp: 1600, raspGain: 0.6, extF: 0.42, spread: 0.15, lope: 0.03 } },
  grandcherokee: { layout: 'v8', banks: V8_GM_OLD, near: 1, far: 0.7, pops: 0.2, tone: { body: 175, rasp: 2000, raspGain: 1.1, lope: 0.02, spread: 0.06 } },
  tahoe: { layout: 'v8', banks: V8_GM, near: 1, far: 0.7, tone: { body: 150, rasp: 1500, raspGain: 0.7, lope: 0.02, cabinF: 0.2, spread: 0.08 } },
  model3: { layout: 'electric', motor: { polePairs: 3, slots: 54, pinion: 23, maxRpm: 17000, gain: 1.0 }, level: 5 },
  // auto disegnate a mano, furgone, autobus, moto, aerei
  city: { layout: 'i4', tone: { body: 220, rasp: 2300, raspGain: 0.7, cabinF: 0.22 } },
  compact: { layout: 'i4', tone: { body: 200, rasp: 2100, raspGain: 0.7 }, turbo: { spool: 1600, lag: 0.5, whine: 6200, whineGain: 0.6, whoosh: 0.6, blow: 'recirc', count: 1 } },
  sedan: { layout: 'i4', tone: { body: 150, rasp: 1500, raspGain: 0.5, cabinF: 0.2 }, turbo: { spool: 1500, lag: 0.6, whine: 5000, whineGain: 0.5, whoosh: 0.7, blow: 'recirc', count: 1 } },
  suv: { layout: 'i4', tone: { body: 170, rasp: 1800, raspGain: 0.6 }, turbo: { spool: 1700, lag: 0.55, whine: 5800, whineGain: 0.6, whoosh: 0.7, blow: 'recirc', count: 1 } },
  sport: { layout: 'v6', banks: [0, 1, 0, 1, 0, 1], near: 1, far: 0.75, pops: 0.5, tone: { body: 190, rasp: 2300, raspGain: 1.3, spread: 0.05, extF: 0.58 } },
  van: { layout: 'i4', tone: { body: 130, rasp: 1300, raspGain: 0.45, cabinF: 0.18 }, turbo: { spool: 1500, lag: 0.8, whine: 4800, whineGain: 0.5, whoosh: 0.6, blow: 'recirc', count: 1 } },
  bus: { layout: 'i6', banks: [0, 0, 0, 0, 0, 0], near: 1, far: 1, tone: { body: 105, rasp: 1000, raspGain: 0.35, cabinF: 0.16, spread: 0.06 }, turbo: { spool: 1100, lag: 1.0, whine: 4200, whineGain: 0.4, whoosh: 0.6, blow: 'recirc', count: 1 } },
  bike: { layout: 'i4', pops: 1, tone: { body: 260, rasp: 2800, raspGain: 1.5, extF: 0.7, cabinF: 0.5 } },
  bike600: { layout: 'i4', pops: 1, tone: { body: 280, rasp: 3000, raspGain: 1.5, extF: 0.7, cabinF: 0.5 } },
  plane: { layout: 'i4', tone: { body: 120, rasp: 1200, raspGain: 0.8, cabinF: 0.2 } },
  jet: { layout: 'jet' },
};
export function voiceFor(spec) {
  if (!spec) return VOICES.default;
  if (spec.jet) return VOICES.jet;
  return VOICES[spec.real] || VOICES[spec.id] || (spec.kind === 'plane' ? VOICES.plane : spec.kind === 'bike' ? VOICES.bike : VOICES.default);
}
