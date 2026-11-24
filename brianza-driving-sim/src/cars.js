import * as THREE from 'three';
import { makeCar, registerBody, bodySpec } from './vendor/city/car.js';
import { PLANE_SPEC } from './plane.js';
import { JET_SPEC } from './jet.js';
import { BIKES } from './bike.js';
import { REAL_IDS, buildRealCar, heroReady } from './realcars.js';
import { REAL_INDEX } from './realcars-data.js';

// Parco auto: dati tecnici indicativi. I modelli 3D sono quelli del progetto "city" di
// donmutti (src/vendor/city/car.js), con carrozzerie derivate per le nostre sei auto.
// Convenzione modello: avanti = +Z locale, sinistra = +X locale (guida a sinistra).
export const CARS = [
  { id: 'city', base: 'wagon', sz: 0.79, sy: 1.03, sx: 0.9, name: 'Utilitaria 1.2', desc: 'Piccola e agile: ideale per i centri storici e i parcheggi stretti.', body: 'hatch', L: 3.65, W: 1.64, H: 1.55, wb: 2.30, color: '#b8322a', mass: 980, kw: 51, nm: 102, rpmMax: 6200, gears: [3.91, 2.16, 1.48, 1.12, 0.89], final: 4.07, drive: 'F', cda: 0.68, brake: 8500, steer: 0.62, grip: 1.0, wheelR: 0.29 },
  { id: 'compact', base: 'wagon', sz: 0.926, sy: 0.975, sx: 0.98, name: 'Compatta 1.5 Turbo', desc: 'La berlina compatta da tutti i giorni, brillante e confortevole.', body: 'hatch', L: 4.28, W: 1.79, H: 1.46, wb: 2.63, color: '#1f4f9a', mass: 1280, kw: 110, nm: 250, rpmMax: 6300, gears: [3.77, 2.09, 1.32, 0.98, 0.76, 0.63], final: 3.87, drive: 'F', cda: 0.66, brake: 11000, steer: 0.6, grip: 1.03, wheelR: 0.315 },
  { id: 'sedan', base: 'car', sz: 1.075, sy: 1.0, sx: 1.005, name: 'Berlina 2.0 Diesel', desc: 'Grande stradista a trazione posteriore, ideale per la SS36.', body: 'sedan', L: 4.75, W: 1.83, H: 1.44, wb: 2.85, color: '#3a3f45', mass: 1560, kw: 140, nm: 400, rpmMax: 4800, gears: [4.7, 3.14, 2.1, 1.67, 1.29, 1.0, 0.84, 0.67], final: 2.81, drive: 'R', cda: 0.64, brake: 13500, steer: 0.58, grip: 1.05, wheelR: 0.33 },
  { id: 'suv', base: 'wagon', sz: 0.985, sy: 1.12, sx: 1.02, name: 'SUV 2.0 4x4', desc: 'Alto e robusto, a trazione integrale: va anche sulle strade bianche.', body: 'suv', L: 4.55, W: 1.86, H: 1.68, wb: 2.68, color: '#e6e6e2', mass: 1720, kw: 150, nm: 340, rpmMax: 6000, gears: [4.46, 2.51, 1.56, 1.14, 0.85, 0.67], final: 3.65, drive: 'A', cda: 0.88, brake: 14000, steer: 0.58, grip: 1.0, wheelR: 0.36 },
  { id: 'sport', base: 'car', sz: 1.007, sy: 0.89, sx: 1.055, name: 'Coupe Sportiva V6', desc: 'Motore potente e assetto rigido. Attenzione ai limiti!', body: 'coupe', L: 4.45, W: 1.92, H: 1.28, wb: 2.6, color: '#e8b10c', mass: 1450, kw: 320, nm: 520, rpmMax: 7600, gears: [3.4, 2.3, 1.7, 1.32, 1.06, 0.87, 0.71], final: 3.73, drive: 'R', cda: 0.62, brake: 17000, steer: 0.56, grip: 1.18, wheelR: 0.34 },
  { id: 'van', base: 'van', sz: 1.149, sy: 1.26, sx: 1.09, name: 'Furgone 2.3', desc: 'Il furgone degli artigiani brianzoli: tanto spazio, poca fretta.', body: 'van', L: 5.4, W: 2.05, H: 2.35, wb: 3.45, color: '#f2f2f0', mass: 2150, kw: 103, nm: 330, rpmMax: 4200, gears: [4.17, 2.31, 1.48, 1.0, 0.8, 0.65], final: 3.9, drive: 'F', cda: 1.35, brake: 15000, steer: 0.6, grip: 0.92, wheelR: 0.35 },
  // non selezionabile dal menu: si guida solo salendo su un autobus di linea
  { id: 'bus', hidden: true, base: 'bus', sz: 1, sy: 1, sx: 1, name: 'Autobus di linea', desc: '', body: 'bus', L: 10.05, W: 2.5, H: 2.9, wb: 5.9, color: '#d9651c', mass: 11500, kw: 210, nm: 1100, rpmMax: 2400, gears: [6.3, 3.4, 2.0, 1.35, 1.0, 0.78], final: 5.2, drive: 'R', cda: 3.6, brake: 62000, steer: 0.72, grip: 0.85, wheelR: 0.48 },
];

// Auto vere (modelli 3D di OSDS, CC BY 4.0: crediti nel menu e in src/realcars-data.js). Dati di guida
// dalle schede tecniche di OSDS (prove su strada pubblicate); nomi generici, senza marchi.
const REAL_NAMES = {
  mini: { name: 'Citycar 2.0 Turbo', desc: 'Piccola, bassa e scattante: nata per i centri storici.', color: '#b8322a', base: 'wagon' },
  miata: { name: 'Roadster 1.8', desc: 'Due posti scoperta, leggera e a trazione posteriore: pura guida.', color: '#1f4a36', base: 'car' },
  accord: { name: 'Berlina 1.5 Turbo', desc: 'Grande berlina comoda e silenziosa (colore originale del modello).', color: '#e8e8e6', base: 'car', fixed: true,
    spec: { mass: 1440, kw: 143, nm: 260, rpmMax: 6500, gears: [3.5, 2.1, 1.4, 1.0, 0.8, 0.65], final: 3.9, drive: 'F', cda: 0.66, mu: 0.95 } },
  model3: { name: 'Berlina elettrica', desc: 'Silenziosa e prontissima: tutta la coppia subito.', color: '#8a1414', base: 'car',
    spec: { rpmMax: 16000, gears: [1.0], final: 9.04 } },
  crv: { name: 'SUV compatto 1.5 Turbo', desc: 'Il SUV da tutti i giorni: alto, spazioso, parsimonioso.', color: '#2f5c93', base: 'wagon' },
  odyssey: { name: 'Monovolume 3.5 V6', desc: 'Otto posti e porte scorrevoli: la famiglia in viaggio.', color: '#4a4f57', base: 'wagon' },
  grandcherokee: { name: 'SUV 4x4 6.4 V8', desc: 'Fuoristrada di lusso con un V8 da sportiva.', color: '#7a2f3a', base: 'wagon' },
  tahoe: { name: 'SUV grande 5.3 V8', desc: 'Enorme e imponente: nelle vie strette ci si passa a fatica.', color: '#203f6b', base: 'wagon',
    spec: { mass: 2500, kw: 265, nm: 519, rpmMax: 5600, gears: [4.03, 2.36, 1.53, 1.15, 0.85, 0.67], final: 3.08, drive: 'A', cda: 1.2, mu: 0.9 } },
  f150: { name: 'Pick-up 3.5 V6 Biturbo', desc: 'Pick-up da deserto: sospensioni lunghe e gomme tassellate.', color: '#2f5d9a', base: 'van' },
  mustang: { name: 'Cabriolet classica V8 (1965)', desc: "Muscle car d'epoca scoperta, colore originale del modello.", color: '#1b2a5a', base: 'car', fixed: true },
  camaro: { name: 'Coupe anni 80 V8', desc: 'Lunga, bassa e a trazione posteriore: sovrasterzo garantito.', color: '#9e0c0e', base: 'car' },
  c8: { name: 'Supercar V8 a motore centrale', desc: 'La piu\' veloce del parco: motore dietro i sedili, 8 marce.', color: '#a3140f', base: 'car' },
};
for (const id of REAL_IDS) {
  const r = REAL_INDEX[id], n = REAL_NAMES[id] || { name: id, desc: '', color: '#888888', base: 'car' };
  const s = { ...(r.spec || {}), ...(n.spec || {}) };
  if (!s.mass) continue;
  const W = Math.min(r.width * 0.9, 2.1);   // larghezza della scocca (il modello misura anche gli specchietti)
  CARS.push({
    id, real: id, base: n.base, name: n.name, desc: n.desc, color: n.color, fixedColor: !!n.fixed,
    sz: r.length / 4.4, sy: r.height / 1.45, sx: W / 1.82, wheelR: r.tyreR,
    L: r.length, W, H: r.height, wb: r.wheelbase,
    mass: s.mass, kw: s.kw, nm: s.nm, rpmMax: s.rpmMax, gears: s.gears, final: s.final, drive: s.drive || 'F', cda: s.cda || 0.7,
    brake: Math.round(s.mass * 8.8), steer: r.wheelbase > 3.2 ? 0.56 : 0.6, grip: Math.max(0.92, Math.min(1.2, (s.mu || 0.9) / 0.88)),
  });
}
// le auto disegnate a mano restano nel codice (test, salire sulle auto del traffico) ma il menu
// mostra quelle vere; furgone e autobus restano
for (const c of CARS) if (['city', 'compact', 'sedan', 'suv', 'sport'].includes(c.id)) c.menuHidden = true;

CARS.push(...BIKES);     // moto da corsa
CARS.push(PLANE_SPEC);   // aereo da turismo: si sceglie dal menu come un'auto
CARS.push(JET_SPEC);     // caccia a reazione per gli spostamenti veloci
for (const c of CARS) if (c.base !== 'bus' && !c.kind) registerBody('bds-' + c.id, c.base, { sz: c.sz, sy: c.sy, sx: c.sx, wheelR: c.wheelR });
const bodyName = (spec) => (spec.base === 'bus' ? 'bus' : spec.real && bodySpec('rc-' + spec.real) ? 'rc-' + spec.real : 'bds-' + spec.id);

const darkMat = new THREE.MeshLambertMaterial({ color: 0x222426 });

// Toglie dal modello le luci vere (faro e bagliore del fanale). Servono solo sul veicolo del
// giocatore: ogni luce in piu' o in meno nella scena cambia il "numero di luci" degli shader e
// three.js ricompila TUTTI i materiali illuminati (scatto di decine o centinaia di ms). Volanti,
// fuggitivi e auto lasciate a bordo strada usano solo i fanali emissivi.
export function stripLights(model) {
  for (const k of ['headlight', 'tailGlow']) {
    const l = model[k];
    if (!l) continue;
    if (l.parent) l.parent.remove(l);
    if (l.target && l.target.parent) l.target.parent.remove(l.target);
    model[k] = null;
  }
  return model;
}

export function buildCarModel(spec, opts = {}) {
  const root = new THREE.Group();
  // opts.body: carrozzeria precisa (l'auto del traffico su cui si e' saliti), altrimenti quella del modello
  const name = opts.body && bodySpec(opts.body) ? opts.body : bodyName(spec), B = bodySpec(name);
  if (B.real) return buildRealModel(spec, B, opts);
  const ext = makeCar(new THREE.Color(opts.color || spec.color).getHex(), { body: name });
  // la scocca arretra di un soffio nel depth buffer: fanali e modanature a filo non sfarfallano
  const hullMat = ext.children[0] && ext.children[0].material;
  if (hullMat) { hullMat.polygonOffset = true; hullMat.polygonOffsetFactor = 1; hullMat.polygonOffsetUnits = 2; }
  root.add(ext);
  const wheels = ['wheelFL', 'wheelFR', 'wheelRL', 'wheelRR'].map((n, i) => { const p = ext.getObjectByName(n); if (p) p.rotation.order = 'YXZ'; return { pivot: p, front: i < 2 }; }).filter((w) => w.pivot);
  const belt = B.beltY, roofY = Math.max(...B.cab.map((c) => c[1]));
  // abitacolo (solo per l'auto del giocatore)
  let interior = null, steeringWheel = null, dashCanvas = null, dashTex = null;
  if (opts.interior) {
    // Abitacolo costruito attorno all'occhio del guidatore: quota tra linea di cintura e
    // tetto come in un'auto vera, cosi' cielo, cruscotto e volante hanno le proporzioni giuste.
    interior = new THREE.Group();
    const W = B.widths.reduce((a, b) => Math.max(a, b), 0) * 2;
    const seatX = W * 0.22;                       // guida a sinistra (+X)
    const [wsZ, wsY] = B.cab[0];                  // base del parabrezza
    const eyeY = Math.min(roofY - 0.17, Math.max(belt + 0.2, belt + 0.55 * (roofY - belt)));
    const eyeZ = wsZ - 0.95;
    const eye = new THREE.Vector3(seatX, eyeY, eyeZ);
    const plastic = new THREE.MeshLambertMaterial({ color: 0x2b2d30 });
    const soft = new THREE.MeshLambertMaterial({ color: 0x3a3c40, side: THREE.DoubleSide });
    // cruscotto: dal volante alla base del parabrezza, sommita' ~20 cm sotto l'occhio
    const dashFace = eyeZ + 0.6;
    const dashTop = Math.min(eyeY - 0.2, wsY + 0.04), dashD = Math.max(0.4, wsZ - dashFace);
    const dash = new THREE.Mesh(new THREE.BoxGeometry(W - 0.1, 0.42, dashD), plastic);
    dash.position.set(0, dashTop - 0.21, dashFace + dashD / 2);
    interior.add(dash);
    // dove il cruscotto e' basso (furgone: posto di guida alto) il quadro sta in una palpebra
    const binH = eyeY - 0.18 - dashTop;
    if (binH > 0.04) {
      const bin = new THREE.Mesh(new THREE.BoxGeometry(0.56, binH + 0.05, 0.3), plastic);
      bin.position.set(seatX, dashTop + binH / 2 - 0.02, dashFace + 0.15);
      interior.add(bin);
    }
    dashCanvas = document.createElement('canvas'); dashCanvas.width = 256; dashCanvas.height = 96;
    dashTex = new THREE.CanvasTexture(dashCanvas); dashTex.colorSpace = THREE.SRGBColorSpace;
    const cluster = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.15), new THREE.MeshBasicMaterial({ map: dashTex, toneMapped: false }));
    cluster.position.set(seatX, eyeY - 0.28, dashFace - 0.005);
    cluster.lookAt(eye);
    interior.add(cluster);
    // volante: la corona entra nella parte bassa dell'inquadratura
    steeringWheel = new THREE.Group();
    steeringWheel.add(new THREE.Mesh(new THREE.TorusGeometry(0.185, 0.02, 8, 32), new THREE.MeshLambertMaterial({ color: 0x151515 })));
    for (const a of [0, 2.1, 4.2]) {
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.028, 0.02), darkMat);
      sp.position.set(Math.cos(a - Math.PI / 2) * 0.085, Math.sin(a - Math.PI / 2) * 0.085, 0);
      sp.rotation.z = a - Math.PI / 2;
      steeringWheel.add(sp);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.06, 12), darkMat); hub.rotation.x = Math.PI / 2;
    steeringWheel.add(hub);
    const swHolder = new THREE.Group();
    swHolder.position.set(seatX, eyeY - 0.34, eyeZ + 0.47);
    swHolder.rotation.x = -0.42;
    swHolder.add(steeringWheel);
    const column = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.3, 8), plastic);
    column.rotation.x = Math.PI / 2 - 0.42; column.position.set(0, -0.06, 0.16);
    swHolder.add(column);
    interior.add(swHolder);
    // montanti anteriori lungo il parabrezza
    const roofFront = B.cab[1] ? B.cab[1][0] : wsZ - 0.5, roofFrontY = B.cab[1] ? B.cab[1][1] : roofY;
    const roofBack = B.cab[B.cab.length - 2][0];
    for (const sg of [1, -1]) {
      const p0 = new THREE.Vector3(sg * (W / 2 - 0.1), wsY, wsZ - 0.05), p1 = new THREE.Vector3(sg * (W / 2 - 0.16), roofFrontY - 0.03, roofFront);
      const pil = new THREE.Mesh(new THREE.BoxGeometry(0.08, p0.distanceTo(p1), 0.1), soft);
      pil.position.copy(p0).add(p1).multiplyScalar(0.5);
      pil.lookAt(p1); pil.rotateX(Math.PI / 2);
      interior.add(pil);
      // pannelli porta sotto la linea dei finestrini (si vedono girando lo sguardo)
      const door = new THREE.Mesh(new THREE.PlaneGeometry(Math.max(0.6, wsZ - eyeZ + 0.6), belt - 0.3), soft);
      door.rotation.y = Math.PI / 2;
      door.position.set(sg * (W / 2 - 0.06), (belt + 0.3) / 2, (wsZ + eyeZ - 0.6) / 2);
      interior.add(door);
    }
    // cielo dell'abitacolo dal bordo alto del parabrezza in giu'
    const roofM = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.1, Math.max(0.5, roofFront - 0.12 - roofBack)), new THREE.MeshLambertMaterial({ color: 0xb4afa5, emissive: 0x302e2a, side: THREE.DoubleSide }));
    roofM.rotation.x = Math.PI / 2;
    roofM.position.set(0, Math.min(roofY, roofFrontY + 0.02) - 0.04, (roofFront - 0.12 + roofBack) / 2);
    interior.add(roofM);
    // specchietto retrovisore interno
    const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.045, 0.02), new THREE.MeshLambertMaterial({ color: 0x55585c }));
    mirror.position.set(0, roofFrontY - 0.075, roofFront - 0.02);
    interior.add(mirror);
    // cofano, dalla base del parabrezza al muso, nel colore della carrozzeria
    const nose = B.profile[1] || B.profile[0];
    const hw = W / 2 - 0.18;
    const hg = new THREE.BufferGeometry();
    hg.setAttribute('position', new THREE.Float32BufferAttribute([-hw, wsY - 0.02, wsZ, hw, wsY - 0.02, wsZ, hw, nose[1], nose[0], -hw, wsY - 0.02, wsZ, hw, nose[1], nose[0], -hw, nose[1], nose[0]], 3));
    hg.computeVertexNormals();
    const hood = new THREE.Mesh(hg, new THREE.MeshPhongMaterial({ color: opts.color || spec.color, shininess: 60, specular: 0x444444, side: THREE.DoubleSide }));
    interior.add(hood);
    interior.visible = false;
    root.add(interior);
    root.userData.eye = eye.clone();
  }
  return { root, ext, wheels, headlight: ext.userData.headlight, tailGlow: ext.userData.tailGlow, lamps: ext.userData.lamps, interior, steeringWheel, dashCanvas, dashTex, exterior: [ext] };
}

export function drawCluster(canvas, tex, kmh, rpm, rpmMax, gear, limit) {
  const c = canvas.getContext('2d');
  c.fillStyle = '#07090b'; c.fillRect(0, 0, 256, 96);
  c.fillStyle = '#0d1a22'; c.fillRect(4, 4, 248, 88);
  c.fillStyle = '#9fe3ff'; c.font = 'bold 44px Arial'; c.textAlign = 'center';
  c.fillText(String(Math.round(kmh)), 90, 58);
  c.font = '14px Arial'; c.fillStyle = '#6fa7c0'; c.fillText('km/h', 90, 80);
  c.font = 'bold 30px Arial'; c.fillStyle = '#ffd36b'; c.fillText(gear, 200, 50);
  const f = Math.min(1, rpm / rpmMax);
  c.fillStyle = '#1e2a30'; c.fillRect(150, 66, 96, 10);
  c.fillStyle = f > 0.88 ? '#ff4a3a' : '#59c9ff'; c.fillRect(150, 66, 96 * f, 10);
  if (limit) { c.fillStyle = '#fff'; c.font = 'bold 13px Arial'; c.fillText('Limite ' + limit, 200, 90); }
  tex.needsUpdate = true;
}

// Auto vera: il modello completo (o, finche' non e' caricato, quello del traffico). Nell'abitacolo si
// vede l'interno del modello stesso: niente cruscotto disegnato, solo il punto di vista del guidatore.
function buildRealModel(spec, B, opts) {
  const root = new THREE.Group();
  const M = B.real.meta;
  const colour = new THREE.Color(opts.color || spec.color).getHex();
  const { car, wheelPivots } = buildRealCar(B, colour, { police: opts.police });
  root.add(car);
  const wheels = wheelPivots.map((p, i) => ({ pivot: p, front: i < 2 }));
  const interior = new THREE.Group();
  interior.visible = false;
  root.add(interior);
  // occhio del guidatore (guida a sinistra = +X): a meta' altezza tra cintura e tetto, ~1,5 m
  // dietro l'asse anteriore (piu' indietro sulle auto lunghe e basse)
  const low = M.height < 1.35;
  root.userData.eye = new THREE.Vector3(M.wheelX * 0.42, Math.max(1.0, M.height * (low ? 0.8 : 0.72)), M.wheelZ[0] - (low ? 1.45 : 1.2));
  // meglio: dalla base del parabrezza (il vetro piu' avanti al centro dell'auto) e dall'altezza del tetto
  const gp = B.real.geo.hi.glass && B.real.geo.hi.glass.attributes.position;
  if (gp) {
    let wsZ = -1e9, wsY = 0, roofY = 0;
    for (let i = 0; i < gp.count; i++) {
      const x = gp.getX(i), y = gp.getY(i), z = gp.getZ(i);
      if (Math.abs(x) < 0.35 && y > 0.7 && z > wsZ) { wsZ = z; wsY = y; }
      roofY = Math.max(roofY, y);
    }
    if (wsZ > M.wheelZ[1] && roofY > wsY) root.userData.eye.set(M.wheelX * 0.42, wsY + 0.5 * (roofY - wsY), Math.min(wsZ - 0.85, M.wheelZ[0] - 1.2));   // parabrezza molto avanzato (monovolume): non oltre 1,2 m dietro l'asse anteriore
  }
  root.userData.realId = B.real.id;
  root.userData.full = car.userData.full;
  // nell'abitacolo il modello resta visibile (exterior vuoto): e' lui l'interno
  return { root, ext: car, wheels, headlight: car.userData.headlight, tailGlow: car.userData.tailGlow, lamps: car.userData.lamps, interior, steeringWheel: null, dashCanvas: null, dashTex: null, exterior: [], realId: B.real.id };
}
export { heroReady };
