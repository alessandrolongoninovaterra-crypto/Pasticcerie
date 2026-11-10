import * as THREE from 'three';
import { makeCar, registerBody, bodySpec } from './vendor/city/car.js';

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

for (const c of CARS) if (c.base !== 'bus') registerBody('bds-' + c.id, c.base, { sz: c.sz, sy: c.sy, sx: c.sx, wheelR: c.wheelR });
const bodyName = (spec) => (spec.base === 'bus' ? 'bus' : 'bds-' + spec.id);

const darkMat = new THREE.MeshLambertMaterial({ color: 0x222426 });

export function buildCarModel(spec, opts = {}) {
  const root = new THREE.Group();
  const name = bodyName(spec), B = bodySpec(name);
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
    interior = new THREE.Group();
    const W = B.widths.reduce((a, b) => Math.max(a, b), 0) * 2;
    const seatX = W * 0.22;
    const dashZ = B.cab[0][0] - 0.28;            // base del parabrezza
    const dash = new THREE.Mesh(new THREE.BoxGeometry(W - 0.12, 0.28, 0.5), new THREE.MeshLambertMaterial({ color: 0x2b2d30 }));
    dash.position.set(0, belt - 0.06, dashZ + 0.3);
    interior.add(dash);
    dashCanvas = document.createElement('canvas'); dashCanvas.width = 256; dashCanvas.height = 96;
    dashTex = new THREE.CanvasTexture(dashCanvas); dashTex.colorSpace = THREE.SRGBColorSpace;
    const cluster = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.16), new THREE.MeshBasicMaterial({ map: dashTex, toneMapped: false }));
    cluster.position.set(seatX, belt + 0.06, dashZ + 0.1);
    cluster.rotation.set(-0.35, Math.PI, 0);
    interior.add(cluster);
    steeringWheel = new THREE.Group();
    steeringWheel.add(new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.018, 8, 28), new THREE.MeshLambertMaterial({ color: 0x151515 })));
    for (const a of [0, 2.1, 4.2]) {
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.025, 0.02), darkMat);
      sp.position.set(Math.cos(a + Math.PI / 2) * 0.085, Math.sin(a + Math.PI / 2) * 0.085, 0);
      sp.rotation.z = a + Math.PI / 2;
      steeringWheel.add(sp);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.05, 12), darkMat); hub.rotation.x = Math.PI / 2;
    steeringWheel.add(hub);
    const swHolder = new THREE.Group();
    swHolder.position.set(seatX, belt - 0.08, dashZ - 0.12);
    swHolder.rotation.x = -0.45;
    swHolder.add(steeringWheel);
    interior.add(swHolder);
    // montanti, tetto e cofano visti da dentro
    const frame = new THREE.MeshLambertMaterial({ color: 0x3a3c3f, side: THREE.DoubleSide });
    const roofFront = B.cab[1] ? B.cab[1][0] : dashZ - 0.5, roofBack = B.cab[B.cab.length - 2][0];
    for (const s of [1, -1]) {
      const p0 = new THREE.Vector3(s * (W / 2 - 0.1), belt, B.cab[0][0] - 0.05), p1 = new THREE.Vector3(s * (W / 2 - 0.16), roofY - 0.03, roofFront);
      const pil = new THREE.Mesh(new THREE.BoxGeometry(0.07, p0.distanceTo(p1), 0.09), frame);
      pil.position.copy(p0).add(p1).multiplyScalar(0.5);
      pil.lookAt(p1); pil.rotateX(Math.PI / 2);
      interior.add(pil);
    }
    const roofM = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.1, Math.max(0.5, roofFront - roofBack)), new THREE.MeshLambertMaterial({ color: 0x9a968e, side: THREE.DoubleSide }));
    roofM.rotation.x = Math.PI / 2;
    roofM.position.set(0, roofY - 0.05, (roofFront + roofBack) / 2);
    interior.add(roofM);
    const hood = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.2, 1.2), new THREE.MeshLambertMaterial({ color: opts.color || spec.color }));
    hood.rotation.x = -Math.PI / 2 + 0.08;
    hood.position.set(0, belt - 0.12, dashZ + 1.1);
    interior.add(hood);
    interior.visible = false;
    root.add(interior);
    root.userData.eye = new THREE.Vector3(seatX, belt + 0.34, dashZ - 0.75);
  }
  return { root, ext, wheels, headlight: ext.userData.headlight, tailGlow: ext.userData.tailGlow, interior, steeringWheel, dashCanvas, dashTex, exterior: [ext] };
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
