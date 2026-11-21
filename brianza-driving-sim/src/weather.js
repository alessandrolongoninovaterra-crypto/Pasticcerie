import * as THREE from 'three';

// Meteo dinamico: sereno, nuvoloso, pioggia, temporale e nebbia (la nebbia della pianura).
// Lavora DOPO il ciclo giorno/notte (Sky.update): copre il cielo, abbassa e ingrigisce le luci,
// avvicina la foschia, fa cadere la pioggia attorno alla telecamera; l'asfalto si bagna piano piano
// (piu' scuro e con meno aderenza) e si asciuga quando smette.
export const WEATHER = {
  clear: { name: 'Sereno', icon: '☀️', cover: 0.3, over: 0, rain: 0, fog: 0 },
  cloudy: { name: 'Nuvoloso', icon: '☁️', cover: 0.82, over: 0.55, rain: 0, fog: 0.1 },
  rain: { name: 'Pioggia', icon: '🌧️', cover: 0.97, over: 0.8, rain: 0.6, fog: 0.3 },
  storm: { name: 'Temporale', icon: '⛈️', cover: 1, over: 0.92, rain: 1, fog: 0.4 },
  fog: { name: 'Nebbia', icon: '🌫️', cover: 0.9, over: 0.6, rain: 0, fog: 1 },
};
// probabilita' di passare da uno stato all'altro (tempo che cambia per gradi)
const NEXT = {
  clear: [['clear', 0.45], ['cloudy', 0.45], ['fog', 0.1]],
  cloudy: [['clear', 0.35], ['cloudy', 0.2], ['rain', 0.3], ['storm', 0.08], ['fog', 0.07]],
  rain: [['cloudy', 0.45], ['rain', 0.25], ['storm', 0.2], ['clear', 0.1]],
  storm: [['rain', 0.6], ['cloudy', 0.4]],
  fog: [['fog', 0.3], ['cloudy', 0.4], ['clear', 0.3]],
};
const DROPS = 1600, R = 34;

export class Weather {
  constructor(scene) {
    this.mode = 'dynamic';            // 'dynamic' oppure uno stato fisso
    this.state = 'clear';
    this.cur = { ...WEATHER.clear };  // valori attuali (interpolati)
    this.timer = 120 + Math.random() * 120;
    this.wet = 0;                     // asfalto bagnato 0..1
    this.flash = 0; this.thunder = [];
    // pioggia: segmenti che cadono, riciclati attorno alla telecamera
    const pos = new Float32Array(DROPS * 6);
    this.drops = new Float32Array(DROPS * 3);
    for (let i = 0; i < DROPS; i++) { this.drops[i * 3] = (Math.random() - 0.5) * 2 * R; this.drops[i * 3 + 1] = Math.random() * 30; this.drops[i * 3 + 2] = (Math.random() - 0.5) * 2 * R; }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.rainMat = new THREE.LineBasicMaterial({ color: 0xc8d2dc, transparent: true, opacity: 0, depthWrite: false, fog: false });
    this.rain = new THREE.LineSegments(g, this.rainMat);
    this.rain.frustumCulled = false; this.rain.visible = false;
    scene.add(this.rain);
    this.grey = new THREE.Color(0x8d969e); this.fogGrey = new THREE.Color(0xc4c8cb);
  }

  get label() { return WEATHER[this.state].icon + ' ' + WEATHER[this.state].name; }

  set(mode) {
    this.mode = mode;
    if (mode !== 'dynamic' && WEATHER[mode]) { this.state = mode; this.cur = { ...WEATHER[mode] }; this.wet = WEATHER[mode].rain > 0 ? 1 : 0; }
  }

  // dt reale; gameRate: secondi di gioco per secondo reale (il tempo cambia di piu' se il tempo scorre veloce)
  update(dt, sky, camPos, tunnel, audio) {
    if (this.mode === 'dynamic') {
      this.timer -= dt * Math.max(1, Math.min(10, sky.speed / 30));
      if (this.timer <= 0) {
        let r = Math.random();
        for (const [s, p] of NEXT[this.state]) { if ((r -= p) <= 0) { this.state = s; break; } }
        this.timer = 150 + Math.random() * 210;
      }
    }
    const T = WEATHER[this.state], k = Math.min(1, dt * 0.08);
    for (const key of ['cover', 'over', 'rain', 'fog']) this.cur[key] += (T[key] - this.cur[key]) * k;
    const c = this.cur;
    // l'asfalto si bagna in fretta e si asciuga piano
    this.wet = c.rain > 0.15 ? Math.min(1, this.wet + dt * 0.05 * c.rain) : Math.max(0, this.wet - dt * 0.004);
    sky.cover = c.cover;
    // luci e colori (dopo Sky.update)
    sky.sun.intensity *= 1 - 0.85 * c.over;
    sky.hemi.intensity *= 1 - 0.3 * c.over;
    const fogC = sky.scene.fog.color;
    fogC.lerp(this.grey.clone().multiplyScalar(0.25 + 0.75 * (1 - sky.night)), c.over * 0.6);
    fogC.lerp(this.fogGrey.clone().multiplyScalar(0.2 + 0.8 * (1 - sky.night)), c.fog * 0.8);
    sky.uniforms.horizon.value.lerp(fogC, Math.max(c.over * 0.5, c.fog * 0.9));
    sky.uniforms.top.value.lerp(fogC, c.over * 0.6 + c.fog * 0.3);
    const fog = sky.scene.fog;
    fog.far = THREE.MathUtils.lerp(fog.far, 170, Math.pow(c.fog, 1.5)) * (1 - 0.45 * c.rain);
    fog.near = Math.min(THREE.MathUtils.lerp(fog.near, 6, c.fog), fog.far * 0.6);
    // lampi
    if (this.state === 'storm' && c.rain > 0.7 && Math.random() < dt * 0.06) {
      this.flash = 1;
      this.thunder.push(1 + Math.random() * 4);
    }
    if (this.flash > 0) { sky.hemi.intensity += this.flash * 2.5; this.flash = Math.max(0, this.flash - dt * 4); }
    for (let i = this.thunder.length - 1; i >= 0; i--) { this.thunder[i] -= dt; if (this.thunder[i] <= 0) { this.thunder.splice(i, 1); if (audio && audio.thunder) audio.thunder(); } }
    if (audio && audio.rain) audio.rain(tunnel > 0.5 ? 0 : c.rain);
    // pioggia attorno alla telecamera (non in galleria)
    const amount = tunnel > 0.5 ? 0 : c.rain;
    this.rain.visible = amount > 0.02;
    if (!this.rain.visible) return;
    this.rainMat.opacity = 0.45 + 0.35 * amount;
    const n = Math.floor(DROPS * amount), p = this.rain.geometry.attributes.position.array, d = this.drops;
    const fall = 16 * dt, len = 1.4;
    for (let i = 0; i < DROPS; i++) {
      d[i * 3 + 1] -= fall * (0.8 + (i % 7) * 0.05);
      if (d[i * 3 + 1] < -4) { d[i * 3 + 1] += 34; d[i * 3] = (Math.random() - 0.5) * 2 * R; d[i * 3 + 2] = (Math.random() - 0.5) * 2 * R; }
      const x = camPos.x + d[i * 3], y = camPos.y + d[i * 3 + 1] - 10, z = camPos.z + d[i * 3 + 2];
      const o = i * 6;
      if (i >= n) { p[o] = p[o + 3] = 0; p[o + 1] = p[o + 4] = -1e5; p[o + 2] = p[o + 5] = 0; continue; }
      p[o] = x; p[o + 1] = y; p[o + 2] = z; p[o + 3] = x + 0.08; p[o + 4] = y - len; p[o + 5] = z + 0.04;
    }
    this.rain.geometry.attributes.position.needsUpdate = true;
  }
}
