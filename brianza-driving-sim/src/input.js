// Comandi: tastiera, gamepad standard e volanti (Gamepad API).
export class Input {
  constructor() {
    this.keys = new Set();
    this.pressed = new Set();
    this.steerKb = 0;
    this.wheelCfg = { enabled: false, steerAxis: 0, throttleAxis: 2, brakeAxis: 3, invertPedals: true, deadzone: 0.04 };
    try { Object.assign(this.wheelCfg, JSON.parse(localStorage.getItem('bds-wheel') || '{}')); } catch (e) { /* ignore */ }
    addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
    this.padPrev = [];
  }

  saveWheel() { try { localStorage.setItem('bds-wheel', JSON.stringify(this.wheelCfg)); } catch (e) { /* ignore */ } }

  consume(code) { const p = this.pressed.has(code); this.pressed.delete(code); return p; }

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
      buttons: new Set(),
      padThr: 0, padBrk: 0, stickY: 0,   // per l'aereo: grilletti e stick verticale
    };
    if (k.has('ShiftLeft') || k.has('ShiftRight')) out.throttle *= 0.45; // acceleratore parziale
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const gp of pads) {
      if (!gp) continue;
      const ax = gp.axes;
      const btn = (i) => gp.buttons[i] ? gp.buttons[i].value : 0;
      if (this.wheelCfg.enabled) {
        const c = this.wheelCfg;
        const pedal = (v) => { if (v === undefined) return 0; let p = c.invertPedals ? (1 - v) / 2 : (v + 1) / 2; return p < 0.03 ? 0 : Math.min(1, p); };
        const st = ax[c.steerAxis] || 0;
        if (Math.abs(st) > 0.005 || pedal(ax[c.throttleAxis]) > 0 || pedal(ax[c.brakeAxis]) > 0) {
          out.steer = -st; out.analogWheel = true;
          out.throttle = Math.max(out.throttle, pedal(ax[c.throttleAxis]));
          out.brake = Math.max(out.brake, pedal(ax[c.brakeAxis]));
        }
      } else if (gp.mapping === 'standard') {
        const sx = ax[0] || 0;
        if (Math.abs(sx) > 0.08) out.steer = -Math.sign(sx) * Math.pow(Math.abs(sx), 1.6);
        out.throttle = Math.max(out.throttle, btn(7));
        out.brake = Math.max(out.brake, btn(6));
        out.padThr = btn(7); out.padBrk = btn(6);
        if (Math.abs(ax[1] || 0) > 0.1) out.stickY = ax[1];
        if (btn(0) > 0.5 || btn(5) > 0.5) out.handbrake = 1;
      }
      // pulsanti (fronte di salita)
      const prev = this.padPrev[gp.index] || [];
      gp.buttons.forEach((b, i) => { if (b.pressed && !prev[i]) out.buttons.add(i); });
      this.padPrev[gp.index] = gp.buttons.map((b) => b.pressed);
    }
    return out;
  }

  // per la calibrazione del volante: valori correnti di tutti gli assi
  axesSnapshot() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const gp of pads) if (gp) return { id: gp.id, axes: [...gp.axes] };
    return null;
  }
}
