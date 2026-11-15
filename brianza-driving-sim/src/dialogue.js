// Dialoghi: battute dei personaggi con sottotitoli e voce (sintesi vocale del browser, in italiano,
// gratuita e senza file). Ogni personaggio ha tono, velocita' e colore propri; le battute vanno in
// coda e non si sovrappongono. Il navigatore resta sopra (ha la sua voce e interrompe).
export const CAST = {
  rosa: { name: 'Rosa', role: 'pasticceria', pitch: 1.25, rate: 1.05, color: '#ff9fc2' },
  ugo: { name: 'Ugo', role: 'officina', pitch: 0.8, rate: 0.95, color: '#ffb347' },
  bassi: { name: 'Ag. Bassi', role: 'polizia locale', pitch: 1.0, rate: 1.1, color: '#8fc7ff' },
  biondo: { name: 'Il Biondo', role: '', pitch: 0.7, rate: 0.92, color: '#d6c27a' },
  centrale: { name: 'Centrale', role: 'radio', pitch: 0.95, rate: 1.15, color: '#7fd1ff', radio: true },
  agente: { name: 'Agente', role: 'polizia', pitch: 0.9, rate: 1.05, color: '#9fb8ff' },
  cliente: { name: 'Cliente', role: '', pitch: 1.1, rate: 1.0, color: '#c9f29b' },
};

export class Dialogue {
  constructor(el) {
    this.el = el; this.queue = []; this.busy = false; this.voiceOn = true; this.hideT = 0;
    this.synth = typeof window !== 'undefined' && window.speechSynthesis ? window.speechSynthesis : null;
    this.voices = [];
    if (this.synth) {
      const load = () => { this.voices = this.synth.getVoices().filter((v) => /^it/i.test(v.lang)); };
      load();
      try { this.synth.addEventListener('voiceschanged', load); } catch (e) { /* vecchi browser */ }
    }
  }

  say(who, text) {
    this.queue.push({ who, text });
    if (this.queue.length > 4) this.queue.splice(0, this.queue.length - 4);
    if (!this.busy) this.next();
  }

  next() {
    const it = this.queue.shift();
    if (!it) { this.busy = false; return; }
    this.busy = true;
    const c = CAST[it.who] || CAST.cliente;
    this.el.innerHTML = `<b style="color:${c.color}">${c.radio ? '📻 ' : ''}${c.name}</b>${c.role ? ` <span style="opacity:.6">(${c.role})</span>` : ''}: ${it.text}`;
    this.el.classList.add('show');
    const dur = 1600 + it.text.length * 55;
    let done = false;
    const end = () => { if (done) return; done = true; this.hideT = performance.now() + 600; setTimeout(() => this.next(), 250); };
    if (this.synth && this.voiceOn) {
      try {
        const u = new SpeechSynthesisUtterance(it.text);
        u.lang = 'it-IT'; u.pitch = c.pitch; u.rate = c.rate; u.volume = c.radio ? 0.8 : 1;
        // voci diverse per personaggi diversi, se il sistema ne ha piu' di una in italiano
        if (this.voices.length) u.voice = this.voices[Object.keys(CAST).indexOf(it.who) % this.voices.length];
        u.onend = end; u.onerror = end;
        this.synth.speak(u);
        setTimeout(end, dur + 4000);       // se la voce non risponde
      } catch (e) { setTimeout(end, dur); }
    } else setTimeout(end, dur);
  }

  update() { if (this.hideT && performance.now() > this.hideT && !this.busy) { this.el.classList.remove('show'); this.hideT = 0; } }
}
