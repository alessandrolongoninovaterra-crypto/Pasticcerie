// Suono del motore sintetizzato (WebAudio): frequenza legata ai giri.
export class EngineAudio {
  constructor() { this.ctx = null; this.muted = false; }
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
      this.o1.start(); this.o2.start(); this.noise.start();
    } catch (e) { this.ctx = null; }
  }
  update(rpm, throttle, speed, slip) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const f = rpm / 60 * 2; // 4 cilindri: 2 scoppi per giro
    this.o1.frequency.setTargetAtTime(f, t, 0.03);
    this.o2.frequency.setTargetAtTime(f * 0.5, t, 0.03);
    this.filt.frequency.setTargetAtTime(400 + rpm * 0.25 + throttle * 600, t, 0.05);
    const vol = this.muted ? 0 : 0.05 + throttle * 0.06;
    this.gain.gain.setTargetAtTime(vol, t, 0.05);
    this.ng.gain.setTargetAtTime(this.muted ? 0 : Math.min(0.12, speed / 300 + slip * 0.25), t, 0.1);
    this.nf.frequency.setTargetAtTime(300 + speed * 6 + slip * 1500, t, 0.1);
  }
}
