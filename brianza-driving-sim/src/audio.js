// Suono del motore sintetizzato (WebAudio). La voce del motore vera e propria e' in src/enginesynth.js
// (AudioWorklet: scoppi nell'ordine di accensione di ogni motore, turbo, motore elettrico); qui restano
// rotolamento, stridio, pioggia, tuono, sirena, clacson. Se il browser non ha AudioWorklet resta la
// vecchia voce a oscillatori.
import { WORKLET_SRC, voiceFor } from './enginesynth.js';
export class EngineAudio {
  constructor() { this.ctx = null; this.muted = false; this.voice = null; this.voiceCfg = null; }
  // voce del motore del veicolo guidato
  setVoice(spec) {
    this.voiceCfg = voiceFor(spec);
    if (this.voice) this.voice.port.postMessage({ cfg: this.voiceCfg });
  }
  startVoice() {
    const C = this.ctx;
    const out = C.createGain(); out.gain.value = 0.24; out.connect(C.destination);
    const ready = (node) => { node.connect(out); this.voice = node; if (this.voiceCfg) node.port.postMessage({ cfg: this.voiceCfg }); };
    // Thread audio (AudioWorklet) quando si puo'. Aprendo il gioco da disco (file://) il browser non
    // carica moduli da Blob: si prova da data: URL e, se non va, la stessa voce gira nel thread
    // principale (ScriptProcessor, ~1 ms ogni 85 ms di suono).
    const fallback = () => ready(this.mainThreadVoice());
    if (!C.audioWorklet || typeof AudioWorkletNode === 'undefined') { fallback(); return; }
    const url = 'data:application/javascript;base64,' + btoa(unescape(encodeURIComponent(WORKLET_SRC)));
    C.audioWorklet.addModule(url).then(() => ready(new AudioWorkletNode(C, 'bds-engine-voice', { numberOfInputs: 0, numberOfOutputs: 1, outputChannelCount: [1] })))
      .catch(() => { try { fallback(); } catch (e) { console.warn('voce del motore non disponibile', e); } });
  }
  // la stessa classe del processore, istanziata qui con un AudioWorkletProcessor finto
  mainThreadVoice() {
    const C = this.ctx;
    let Proc = null;
    const shim = new Function('sampleRate', 'AudioWorkletProcessor', 'registerProcessor', WORKLET_SRC);
    shim(C.sampleRate, class { constructor() { this.port = { onmessage: null }; } }, (n, c) => { Proc = c; });
    const proc = new Proc();
    const sp = C.createScriptProcessor(4096, 0, 1);
    const block = [[new Float32Array(128)]];
    sp.onaudioprocess = (e) => {
      const o = e.outputBuffer.getChannelData(0);
      for (let i = 0; i < o.length; i += 128) { proc.process([], block); o.set(block[0][0].subarray(0, Math.min(128, o.length - i)), i); }
    };
    sp.port = { postMessage: (data) => proc.port.onmessage({ data }) };
    return sp;
  }
  start() {
    if (this.ctx) return;
    try {
      const C = new (window.AudioContext || window.webkitAudioContext)();
      this.ctx = C;
      this.gain = C.createGain(); this.gain.gain.value = 0;
      const filt = C.createBiquadFilter(); filt.type = 'lowpass'; filt.frequency.value = 700; filt.Q.value = 2;
      this.filt = filt;
      this.o1 = C.createOscillator(); this.o1.type = 'sawtooth';
      this.o2 = C.createOscillator(); this.o2.type = 'square';
      const g2 = C.createGain(); g2.gain.value = 0.35;
      this.o1.connect(filt); this.o2.connect(g2); g2.connect(filt);
      // rumore di rotolamento
      const len = C.sampleRate * 2, buf = C.createBuffer(1, len, C.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.noise = C.createBufferSource(); this.noise.buffer = buf; this.noise.loop = true;
      this.nf = C.createBiquadFilter(); this.nf.type = 'bandpass'; this.nf.frequency.value = 400;
      this.ng = C.createGain(); this.ng.gain.value = 0;
      this.noise.connect(this.nf); this.nf.connect(this.ng); this.ng.connect(C.destination);
      filt.connect(this.gain); this.gain.connect(C.destination);
      // stridio delle gomme: rumore filtrato stretto attorno a 1,5-2 kHz
      this.sq = C.createBufferSource(); this.sq.buffer = buf; this.sq.loop = true;
      this.sqf = C.createBiquadFilter(); this.sqf.type = 'bandpass'; this.sqf.frequency.value = 1700; this.sqf.Q.value = 9;
      this.sqg = C.createGain(); this.sqg.gain.value = 0;
      this.sq.connect(this.sqf); this.sqf.connect(this.sqg); this.sqg.connect(C.destination);
      this.o1.start(); this.o2.start(); this.noise.start(); this.sq.start(0.37);
      this.startVoice();
    } catch (e) { this.ctx = null; }
  }
  // pioggia: rumore rosa filtrato, volume con l'intensita'
  rain(k) {
    if (!this.ctx) return;
    const C = this.ctx;
    if (!this.rainG) {
      const len = C.sampleRate * 3, buf = C.createBuffer(1, len, C.sampleRate), d = buf.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b0 = 0.99765 * b0 + w * 0.099; b1 = 0.963 * b1 + w * 0.2965; b2 = 0.57 * b2 + w * 1.0527; d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.2; }
      const src = C.createBufferSource(); src.buffer = buf; src.loop = true;
      const f = C.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 900;
      this.rainG = C.createGain(); this.rainG.gain.value = 0;
      src.connect(f); f.connect(this.rainG); this.rainG.connect(C.destination); src.start();
    }
    this.rainG.gain.setTargetAtTime(this.muted ? 0 : k * 0.22, C.currentTime, 0.5);
  }
  // tuono: rombo basso che sale e si spegne
  thunder() {
    if (!this.ctx || this.muted) return;
    const C = this.ctx, len = C.sampleRate * 4, buf = C.createBuffer(1, len, C.sampleRate), d = buf.getChannelData(0);
    let b = 0;
    for (let i = 0; i < len; i++) { b = 0.985 * b + (Math.random() * 2 - 1) * 0.15; const t = i / len; d[i] = b * Math.min(1, t * 20) * Math.pow(1 - t, 2) * (1 + 0.6 * Math.sin(t * 37)); }
    const s = C.createBufferSource(); s.buffer = buf;
    const f = C.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 220;
    const g = C.createGain(); g.gain.value = 1.4;
    s.connect(f); f.connect(g); g.connect(C.destination); s.start();
  }
  // sirena bitonale della polizia (volume con la distanza della volante piu' vicina)
  siren(k) {
    if (!this.ctx) return;
    const C = this.ctx;
    if (!this.sirG) {
      this.sirO = C.createOscillator(); this.sirO.type = 'triangle'; this.sirO.frequency.value = 660;
      const f = C.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 2400;
      this.sirG = C.createGain(); this.sirG.gain.value = 0;
      this.sirO.connect(f); f.connect(this.sirG); this.sirG.connect(C.destination); this.sirO.start();
    }
    const t = C.currentTime;
    this.sirO.frequency.setValueAtTime(Math.floor(t / 0.55) % 2 ? 588 : 784, t);
    this.sirG.gain.setTargetAtTime(this.muted ? 0 : k * k * 0.09, t, 0.15);
  }
  horn(on) {
    if (!this.ctx) return;
    if (on && !this.hornOsc) {
      const C = this.ctx, g = C.createGain(); g.gain.value = this.muted ? 0 : 0.12; g.connect(C.destination);
      this.hornOsc = [420, 525].map((f) => { const o = C.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(g); o.start(); return o; });
      this.hornGain = g;
    } else if (!on && this.hornOsc) { for (const o of this.hornOsc) o.stop(); this.hornGain.disconnect(); this.hornOsc = null; }
  }
  // o: { cabin, limiter, motorRpm, engineOff }
  update(rpm, throttle, speed, slip, squeal = 0, o = {}) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    if (this.voice) {
      // carico all'albero: + quando il motore spinge, - in rilascio (e' l'auto che trascina il motore)
      const load = throttle > 0.05 ? throttle : rpm > 1200 ? -0.7 : 0;
      this.voice.port.postMessage({ inp: { rpm, comb: throttle, load, pedal: throttle, cabin: !!o.cabin, motorRpm: o.motorRpm || rpm, limiter: o.limiter || 6500, stalled: !!o.engineOff, gain: this.muted ? 0 : o.engineOff ? 0 : o.quiet ? 0.35 : 1 } });
      this.gain.gain.setTargetAtTime(0, t, 0.05);
    } else {
      const f = rpm / 60 * 2; // 4 cilindri: 2 scoppi per giro
      this.o1.frequency.setTargetAtTime(f, t, 0.03);
      this.o2.frequency.setTargetAtTime(f * 0.5, t, 0.03);
      this.filt.frequency.setTargetAtTime(400 + rpm * 0.25 + throttle * 600, t, 0.05);
      const vol = this.muted ? 0 : 0.05 + throttle * 0.06;
      this.gain.gain.setTargetAtTime(vol, t, 0.05);
    }
    this.ng.gain.setTargetAtTime(this.muted ? 0 : Math.min(0.12, speed / 300 + slip * 0.25), t, 0.1);
    this.nf.frequency.setTargetAtTime(300 + speed * 6 + slip * 1500, t, 0.1);
    this.sqg.gain.setTargetAtTime(this.muted ? 0 : Math.min(0.16, squeal * 0.2), t, 0.06);
    this.sqf.frequency.setTargetAtTime(1500 + squeal * 500 + Math.sin(t * 13) * 80, t, 0.05);
  }
}
