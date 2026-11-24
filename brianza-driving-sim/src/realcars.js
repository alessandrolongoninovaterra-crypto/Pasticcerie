// Auto "vere": modelli 3D di OSDS (https://github.com/simcruisegame/osds), Sketchfab e CARLA sotto
// licenza CC BY 4.0, preparati da tools/import-cars.mjs (raddrizzati, ruote staccate, triangoli e
// texture ridotti). Per ogni auto due file:
//   data/cars/<id>_fleet.js  versioni compatte per traffico e parcheggi (si caricano all'avvio)
//   data/cars/<id>.js        il modello completo con le texture (si carica quando lo si guida)
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { loadData } from './data.js';
import { registerRealBody, contactShadowTexture } from './vendor/city/car.js';
import { REAL_INDEX } from './realcars-data.js';

export const REAL_IDS = Object.keys(REAL_INDEX);
const loader = new GLTFLoader();
const heroes = new Map();     // id -> gltf scene (modello completo)
const pendingHero = new Map();

async function parse(key, src) {
  const buf = await loadData(key, src);
  const gltf = await loader.parseAsync(buf, '');
  return gltf.scene;
}
const carNode = (scene) => scene.children.find((c) => c.userData && c.userData.wheelZ) || scene;
const meshOf = (n) => (n ? (n.isMesh ? n : n.children.find((c) => c.isMesh)) : null);

// carica le versioni per il traffico e registra le carrozzerie 'rc-<id>'
export async function loadRealFleet(onProgress) {
  let done = 0;
  await Promise.all(REAL_IDS.map(async (id) => {
    try {
      const scene = await parse('car_' + id + '_fleet', 'data/cars/' + id + '_fleet.js');
      const meta = carNode(scene).userData;
      const geo = {};
      for (const lod of ['fleetHi', 'fleetLo']) {
        const set = scene.getObjectByName(lod), g = {};
        // il caricatore rende unici i nomi ripetuti (paint, paint_1...): si cerca tra i figli del livello
        for (const part of ['paint', 'trim', 'glass', 'lamps', 'wheel']) { const m = meshOf(set && set.children.find((c) => c.name === part || c.name.startsWith(part + '_'))); g[part] = m ? m.geometry : null; }
        geo[lod === 'fleetHi' ? 'hi' : 'lo'] = g;
      }
      registerRealBody('rc-' + id, { id, meta, geo });
    } catch (e) { console.warn('auto ' + id + ' non caricata', e); }
    done++;
    if (onProgress) onProgress(done, REAL_IDS.length);
  }));
}

export const heroReady = (id) => heroes.has(id);
export function loadHero(id) {
  if (heroes.has(id)) return Promise.resolve(heroes.get(id));
  if (!pendingHero.has(id)) {
    pendingHero.set(id, parse('car_' + id, 'data/cars/' + id + '.js').then((s) => { heroes.set(id, s); return s; }).catch((e) => { console.warn('modello completo ' + id + ' non caricato', e); return null; }));
  }
  return pendingHero.get(id);
}

// proxy: main.js e police.js regolano lamps.head/tail/rev.emissiveIntensity come per un materiale solo
function lampGroup(mats) {
  return { set emissiveIntensity(v) { for (const m of mats) m.emissiveIntensity = v; }, get emissiveIntensity() { return mats.length ? mats[0].emissiveIntensity : 0; } };
}

const shadowGeo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
let shadowMatC = null;

// Modello per il giocatore, la polizia o un'auto lasciata: completo se gia' caricato, altrimenti
// costruito dalla versione "vicina" del traffico (subito disponibile).
export function buildRealCar(spec, colour, { police = false } = {}) {
  const R = spec.real, M = R.meta, car = new THREE.Group();
  const paint = new THREE.MeshPhysicalMaterial({ color: colour, metalness: 0.45, roughness: 0.34, clearcoat: 1.0, clearcoatRoughness: 0.06, envMapIntensity: 1.6 });
  const head = [], tail = [], rev = [];
  const full = heroes.get(R.id);
  const wheelPivots = [];
  if (full) {
    const hero = full.getObjectByName('hero').clone(true);
    const glassM = new THREE.MeshPhysicalMaterial({ color: 0x0d1318, metalness: 0.1, roughness: 0.03, transparent: true, opacity: 0.42, depthWrite: false, clearcoat: 1, envMapIntensity: 1.5, side: THREE.DoubleSide });
    const cache = new Map();
    hero.traverse((o) => {
      if (!o.isMesh) return;
      const m = o.material, role = m.userData && m.userData.role;
      if (role === 'paint') { o.material = M.paintable === false ? m : paint; return; }
      if (role === 'glass') { o.material = glassM; o.renderOrder = 2; return; }
      if (role === 'lamp_front' || role === 'lamp_rear') {
        let c = cache.get(m);
        if (!c) {
          c = m.clone(); cache.set(m, c);
          c.emissive = new THREE.Color(role === 'lamp_front' ? 0xfff2d8 : 0xff1a0a);
          if (c.map && !c.emissiveMap) c.emissiveMap = c.map;
          c.emissiveIntensity = role === 'lamp_front' ? 0.15 : 0.4;
          c.transparent = false; c.opacity = 1; c.depthWrite = true;
          (role === 'lamp_front' ? head : tail).push(c);
        }
        o.material = c;
        return;
      }
      if (m.transparent && m.opacity < 0.98) { m.depthWrite = false; o.renderOrder = 2; }
    });
    car.add(hero);
    for (const n of ['wheelFL', 'wheelFR', 'wheelRL', 'wheelRR']) { const p = hero.getObjectByName(n); if (p) wheelPivots.push(p); }
  } else {
    const G = R.geo.hi;
    const trimM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.45, metalness: 0.2, side: THREE.DoubleSide });
    const glassM = new THREE.MeshPhysicalMaterial({ color: 0x121a22, metalness: 0.1, roughness: 0.04, clearcoat: 1.0, side: THREE.DoubleSide, envMapIntensity: 1.5 });
    const lampM = new THREE.MeshStandardMaterial({ vertexColors: true, emissive: 0xffffff, emissiveIntensity: 0.15, roughness: 0.3 });
    head.push(lampM);
    if (G.paint) car.add(new THREE.Mesh(G.paint, paint));
    if (G.trim) car.add(new THREE.Mesh(G.trim, trimM));
    if (G.glass) car.add(new THREE.Mesh(G.glass, glassM));
    if (G.lamps) car.add(new THREE.Mesh(G.lamps, lampM));
    const wheelM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6, metalness: 0.35 });
    ['wheelFL', 'wheelFR', 'wheelRL', 'wheelRR'].forEach((n, k) => {
      const p = new THREE.Group(); p.name = n;
      p.position.set(k % 2 ? -M.wheelX : M.wheelX, M.wheelR, k < 2 ? M.wheelZ[0] : M.wheelZ[1]);
      if (G.wheel) { const w = new THREE.Mesh(G.wheel, wheelM); if (k % 2) w.rotation.y = Math.PI; p.add(w); }
      car.add(p); wheelPivots.push(p);
    });
  }
  // ombra di contatto
  if (!shadowMatC) shadowMatC = new THREE.MeshBasicMaterial({ map: contactShadowTexture(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
  const sh = new THREE.Mesh(shadowGeo, shadowMatC);
  sh.scale.set(M.width + 0.5, 1, M.length + 0.6); sh.position.set(0, 0.035, (M.noseZ + M.tailZ) / 2); sh.renderOrder = 1; sh.userData.noShadow = true;
  car.add(sh);
  // barra luminosa della polizia
  if (police) {
    const top = M.height;
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.05, 0.3), new THREE.MeshStandardMaterial({ color: 0x111216 }));
    bar.position.set(0, top + 0.03, -0.1); car.add(bar);
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.3), new THREE.MeshStandardMaterial({ color: 0x2244cc, emissive: 0x2255ff, emissiveIntensity: 1.6 }));
    const r = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.1, 0.3), new THREE.MeshStandardMaterial({ color: 0xcc2222, emissive: 0xff2222, emissiveIntensity: 1.6 }));
    b.position.set(-0.17, top + 0.09, -0.1); r.position.set(0.17, top + 0.09, -0.1); car.add(b, r);
    car.userData.lightbar = { blue: b.material, red: r.material };
  }
  for (const p of wheelPivots) p.rotation.order = 'YXZ';
  const hl = new THREE.SpotLight(0xfff1cf, 0, 80, 0.62, 0.5, 1.2);
  hl.position.set(0, M.wheelR * 2 + 0.1, M.noseZ - 0.05); hl.target.position.set(0, 0.2, M.noseZ + 10);
  car.add(hl, hl.target);
  const tl = new THREE.PointLight(0xff2a12, 0, 1.4, 3.4);
  tl.position.set(0, M.wheelR * 2 + 0.2, M.tailZ - 0.05); car.add(tl);
  car.userData.headlight = hl; car.userData.tailGlow = tl;
  car.userData.lamps = { head: lampGroup(head), tail: lampGroup(tail), rev: lampGroup(rev) };
  car.userData.full = !!full;
  car.traverse((o) => { if (o.isMesh && !o.userData.noShadow && !(o.material && o.material.transparent)) o.castShadow = true; });
  return { car, wheelPivots };
}

// crediti da mostrare nel menu
export function realCredits() {
  return REAL_IDS.map((id) => { const c = REAL_INDEX[id]; return `"${c.title}" di ${c.author} (${c.licence})`; });
}
