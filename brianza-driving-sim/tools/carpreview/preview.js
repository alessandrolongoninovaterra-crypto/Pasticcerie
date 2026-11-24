// Anteprima dei modelli importati da tools/import-cars.mjs (solo sviluppo):
// a sinistra l'auto del giocatore, al centro e a destra le versioni del traffico (vicina, lontana).
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const id = new URLSearchParams(location.search).get('car') || 'odyssey';
const view = new URLSearchParams(location.search).get('view') || '34';
const got = {};
window.BDS_DATA = async (key, fmt, b64) => {
  const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const buf = await new Response(new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
  const gltf = await new GLTFLoader().parseAsync(buf, '');
  got[key.endsWith('_fleet') ? 'fleet' : 'hero'] = gltf.scene;
  if (got.fleet && got.hero) { got.hero.add(...got.fleet.children[0].children.filter((c) => c.name.startsWith('fleet'))); show(got.hero); }
};
for (const f of [id, id + '_fleet']) { const s = document.createElement('script'); s.src = '../../data/cars/' + f + '.js'; document.head.appendChild(s); }

function show(scene) {
  const r = new THREE.WebGLRenderer({ antialias: true });
  r.setSize(1500, 560); r.toneMapping = THREE.ACESFilmicToneMapping;
  document.body.appendChild(r.domElement);
  const sc = new THREE.Scene(); sc.background = new THREE.Color(0x9fb4c8);
  sc.environment = new THREE.PMREMGenerator(r).fromScene(new RoomEnvironment(), 0.04).texture;
  sc.add(new THREE.HemisphereLight(0xffffff, 0x445544, 1.2));
  const sun = new THREE.DirectionalLight(0xffffff, 2.2); sun.position.set(5, 10, 6); sc.add(sun);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 30), new THREE.MeshStandardMaterial({ color: 0x555a5e })); ground.rotation.x = -Math.PI / 2; sc.add(ground);
  const carN = scene.children.find((c) => c.userData && c.userData.wheelZ) || scene; const ex = carN.userData;
  const hero = scene.getObjectByName('hero');
  const paint = new THREE.MeshPhysicalMaterial({ color: 0x2f5c93, metalness: 0.45, roughness: 0.38, clearcoat: 1, clearcoatRoughness: 0.08 });
  hero.traverse((o) => { if (o.isMesh && o.material.userData.role === 'paint') o.material = paint; });
  hero.position.x = 6; sc.add(hero);
  const trimM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.45, metalness: 0.2, side: THREE.DoubleSide });
  const glassM = new THREE.MeshPhysicalMaterial({ color: 0x121a22, roughness: 0.04, clearcoat: 1, side: THREE.DoubleSide });
  const lampM = new THREE.MeshBasicMaterial({ vertexColors: true });
  const wheelM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.35 });
  const fleetPaint = new THREE.MeshPhysicalMaterial({ color: 0xb1362f, metalness: 0.45, roughness: 0.38, clearcoat: 1, side: THREE.DoubleSide });
  for (const [name, x] of [['fleetHi', 0], ['fleetLo', -6]]) {
    const g = new THREE.Group(); g.position.x = x;
    const set = scene.getObjectByName(name);
    for (const part of ['paint', 'trim', 'glass', 'lamps']) {
      const n = set.getObjectByName(part); if (!n) continue;
      const m = n.isMesh ? n : n.children.find((c) => c.isMesh);
      g.add(new THREE.Mesh(m.geometry, { paint: fleetPaint, trim: trimM, glass: glassM, lamps: lampM }[part]));
    }
    const wn = set.getObjectByName('wheel'); const wm = wn && (wn.isMesh ? wn : wn.children.find((c) => c.isMesh));
    if (wm) for (let k = 0; k < 4; k++) {
      const w = new THREE.Mesh(wm.geometry, wheelM);
      const left = k % 2 === 0, front = k < 2;
      w.position.set(left ? ex.wheelX : -ex.wheelX, ex.wheelR, front ? ex.wheelZ[0] : ex.wheelZ[1]);
      if (!left) w.rotation.y = Math.PI;
      g.add(w);
    }
    sc.add(g);
  }
  const cam = new THREE.PerspectiveCamera(30, 1500 / 560, 0.1, 200);
  if (view === 'side') cam.position.set(0, 1.2, 24); else if (view === 'rear') cam.position.set(-6, 3, -22); else cam.position.set(-7, 3.2, 13);
  cam.lookAt(0, 0.8, 0);
  r.render(sc, cam);
  document.title = 'ok ' + JSON.stringify(ex);
}
