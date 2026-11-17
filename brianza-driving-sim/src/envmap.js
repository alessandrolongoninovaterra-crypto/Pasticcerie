import * as THREE from 'three';

// Mappa d'ambiente per i riflessi (vernice, vetri, cromature delle auto): si ricava dal cielo vero
// del gioco (stesso materiale della cupola, quindi con l'ora, le nuvole e il meteo) piu' un suolo
// scuro, con il PMREMGenerator di three.js. Si rigenera quando il cielo cambia, al massimo ogni
// quattro secondi; di notte il cielo e' scuro e i riflessi si spengono da soli.
export class EnvMap {
  constructor(renderer, sky) {
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.Mesh(sky.dome.geometry, sky.dome.material));
    // suolo: asfalto, prati e case attorno (un grigio verde), piu' scuro di notte e sul bagnato
    this.groundMat = new THREE.MeshBasicMaterial({ color: 0x3a3d38, side: THREE.DoubleSide, fog: false });
    const g = new THREE.CircleGeometry(4000, 48); g.rotateX(-Math.PI / 2);
    const ground = new THREE.Mesh(g, this.groundMat); ground.position.y = -40;
    this.scene.add(ground);
    // fascia di edifici all'orizzonte: spezza il riflesso del cielo sui fianchi delle auto
    this.cityMat = new THREE.MeshBasicMaterial({ color: 0x8a8577, side: THREE.BackSide, fog: false });
    const c = new THREE.CylinderGeometry(3000, 3000, 380, 48, 1, true); c.translate(0, 120, 0);
    this.scene.add(new THREE.Mesh(c, this.cityMat));
    this.rt = null; this.t = 0; this.key = '';
  }

  // restituisce una nuova texture quando l'ha rigenerata, altrimenti null
  update(dt, sky, weather) {
    this.t -= dt;
    // ogni 3 minuti di ora del gioco, al massimo ogni 4 secondi (ogni rigenerazione rende sei facce
    // e crea una nuova texture: era una piccola punta di lavoro della scheda video ogni secondo)
    const key = (Math.round(sky.hours * 20) / 20).toFixed(2) + '/' + sky.cover.toFixed(1) + '/' + (weather ? weather.cur.over.toFixed(1) + weather.cur.fog.toFixed(1) : '');
    if (this.t > 0 || key === this.key) return null;
    this.t = 4; this.key = key;
    const day = 1 - sky.night, wet = weather ? weather.wet : 0;
    this.groundMat.color.setRGB(0.2, 0.21, 0.19).multiplyScalar((0.06 + 0.94 * day) * (1 - 0.35 * wet));
    // gli edifici lontani prendono il colore della foschia (si fondono con l'orizzonte)
    this.cityMat.color.copy(sky.scene.fog.color).multiplyScalar(0.62);
    const rt = this.pmrem.fromScene(this.scene, 0, 1, 9000);
    if (this.rt) this.rt.dispose();
    this.rt = rt;
    return rt.texture;
  }
}
