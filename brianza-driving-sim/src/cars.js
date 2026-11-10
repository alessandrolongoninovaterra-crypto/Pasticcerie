import * as THREE from 'three';

// Parco auto: dati tecnici indicativi e modello 3D procedurale.
// Convenzione modello: avanti = +Z locale, sinistra = +X locale (guida a sinistra).
export const CARS = [
  { id: 'city', name: 'Utilitaria 1.2', desc: 'Piccola e agile: ideale per i centri storici e i parcheggi stretti.', body: 'hatch', L: 3.65, W: 1.64, H: 1.55, wb: 2.30, color: '#b8322a', mass: 980, kw: 51, nm: 102, rpmMax: 6200, gears: [3.91, 2.16, 1.48, 1.12, 0.89], final: 4.07, drive: 'F', cda: 0.68, brake: 8500, steer: 0.62, grip: 1.0, wheelR: 0.29 },
  { id: 'compact', name: 'Compatta 1.5 Turbo', desc: 'La berlina compatta da tutti i giorni, brillante e confortevole.', body: 'hatch', L: 4.28, W: 1.79, H: 1.46, wb: 2.63, color: '#1f4f9a', mass: 1280, kw: 110, nm: 250, rpmMax: 6300, gears: [3.77, 2.09, 1.32, 0.98, 0.76, 0.63], final: 3.87, drive: 'F', cda: 0.66, brake: 11000, steer: 0.6, grip: 1.03, wheelR: 0.315 },
  { id: 'sedan', name: 'Berlina 2.0 Diesel', desc: 'Grande stradista a trazione posteriore, ideale per la SS36.', body: 'sedan', L: 4.75, W: 1.83, H: 1.44, wb: 2.85, color: '#3a3f45', mass: 1560, kw: 140, nm: 400, rpmMax: 4800, gears: [4.7, 3.14, 2.1, 1.67, 1.29, 1.0, 0.84, 0.67], final: 2.81, drive: 'R', cda: 0.64, brake: 13500, steer: 0.58, grip: 1.05, wheelR: 0.33 },
  { id: 'suv', name: 'SUV 2.0 4x4', desc: 'Alto e robusto, a trazione integrale: va anche sulle strade bianche.', body: 'suv', L: 4.55, W: 1.86, H: 1.68, wb: 2.68, color: '#e6e6e2', mass: 1720, kw: 150, nm: 340, rpmMax: 6000, gears: [4.46, 2.51, 1.56, 1.14, 0.85, 0.67], final: 3.65, drive: 'A', cda: 0.88, brake: 14000, steer: 0.58, grip: 1.0, wheelR: 0.36 },
  { id: 'sport', name: 'Coupe Sportiva V6', desc: 'Motore potente e assetto rigido. Attenzione ai limiti!', body: 'coupe', L: 4.45, W: 1.92, H: 1.28, wb: 2.6, color: '#e8b10c', mass: 1450, kw: 320, nm: 520, rpmMax: 7600, gears: [3.4, 2.3, 1.7, 1.32, 1.06, 0.87, 0.71], final: 3.73, drive: 'R', cda: 0.62, brake: 17000, steer: 0.56, grip: 1.18, wheelR: 0.34 },
  { id: 'van', name: 'Furgone 2.3', desc: 'Il furgone degli artigiani brianzoli: tanto spazio, poca fretta.', body: 'van', L: 5.4, W: 2.05, H: 2.35, wb: 3.45, color: '#f2f2f0', mass: 2150, kw: 103, nm: 330, rpmMax: 4200, gears: [4.17, 2.31, 1.48, 1.0, 0.8, 0.65], final: 3.9, drive: 'F', cda: 1.35, brake: 15000, steer: 0.6, grip: 0.92, wheelR: 0.35 },
];

const glassMat = new THREE.MeshLambertMaterial({ color: 0x1c252c, emissive: 0x05080a });
const tireMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
const rimMat = new THREE.MeshLambertMaterial({ color: 0xb8bcc0 });
const darkMat = new THREE.MeshLambertMaterial({ color: 0x222426 });
const plateMat = new THREE.MeshLambertMaterial({ color: 0xf4f4f0 });

function profile(spec) {
  const L = spec.L, H = spec.H, x0 = -L / 2, x1 = L / 2, g = 0.3;
  switch (spec.body) {
    case 'sedan': return { body: [[x0, g], [x1, g], [x1, 0.62], [x1 - 0.12, 0.8], [x1 - 1.1, 0.92], [x1 - 1.85, H], [x0 + 1.25, H], [x0 + 0.55, 0.98], [x0, 0.95]], belt: 0.95 };
    case 'suv': return { body: [[x0, g + 0.1], [x1, g + 0.1], [x1, 0.85], [x1 - 0.2, 1.05], [x1 - 1.0, 1.12], [x1 - 1.55, H], [x0 + 0.2, H], [x0 + 0.02, 1.15], [x0, 1.0]], belt: 1.12 };
    case 'coupe': return { body: [[x0, g - 0.05], [x1, g - 0.05], [x1, 0.55], [x1 - 0.2, 0.68], [x1 - 1.35, 0.8], [x1 - 2.15, H], [x0 + 1.25, H - 0.03], [x0 + 0.3, 0.88], [x0, 0.85]], belt: 0.82 };
    case 'van': return { body: [[x0, g + 0.05], [x1, g + 0.05], [x1, 0.95], [x1 - 0.25, 1.12], [x1 - 0.85, 1.3], [x1 - 1.3, H], [x0, H]], belt: 1.3 };
    default: return { body: [[x0, g], [x1, g], [x1, 0.7], [x1 - 0.15, 0.86], [x1 - 0.85, 0.96], [x1 - 1.5, H], [x0 + 0.25, H], [x0 + 0.05, 1.0], [x0, 0.9]], belt: 0.96 };
  }
}

function extrude(points, width, mat, bevel = 0.04) {
  const sh = new THREE.Shape(points.map(([x, y]) => new THREE.Vector2(x, y)));
  const g = new THREE.ExtrudeGeometry(sh, { depth: width - bevel * 2, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, steps: 1 });
  g.translate(0, 0, -(width - bevel * 2) / 2);
  g.rotateY(-Math.PI / 2); // x forma -> +Z (avanti), estrusione -> asse X
  return new THREE.Mesh(g, mat);
}

// finestrini: porzione del profilo sopra la linea di cintura, rimpicciolita verso l'interno
function windowPoints(prof, inset) {
  const pts = prof.body.filter(([, y]) => y >= prof.belt - 0.001);
  const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length, cy = pts.reduce((s, p) => s + p[1], 0) / pts.length;
  return pts.map(([x, y]) => [x + (cx - x) * inset, Math.max(prof.belt + 0.04, y + (cy - y) * inset * 1.8)]);
}

export function buildCarModel(spec, opts = {}) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const paint = new THREE.MeshLambertMaterial({ color: opts.color || spec.color });
  const prof = profile(spec);
  const shell = extrude(prof.body, spec.W, paint, 0.06);
  shell.castShadow = true;
  body.add(shell);
  // vetri: fascia laterale + parabrezza/lunotto
  const win = windowPoints(prof, 0.08);
  const sideGlass = extrude(win, spec.W + 0.02, glassMat, 0);
  body.add(sideGlass);
  // parabrezza e lunotto: quad sui tratti inclinati del profilo
  const P = prof.body, n = P.length;
  let iF = -1, iR = -1;
  for (let i = 0; i < n; i++) if (P[i][1] >= spec.H - 0.01) { if (iF < 0 || P[i][0] > P[iF][0]) iF = i; if (iR < 0 || P[i][0] < P[iR][0]) iR = i; }
  const gpos = [];
  const glassQuad = (a, b) => {
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
    let nx = dy / L, ny = -dx / L;
    const mx = (a[0] + b[0]) / 2;
    if (nx * mx < 0) { nx = -nx; ny = -ny; }
    const hw = spec.W / 2 - 0.1, o = 0.075;
    const A = [a[0] + nx * o, a[1] + ny * o], B = [b[0] + nx * o, b[1] + ny * o];
    gpos.push(-hw, A[1], A[0], hw, A[1], A[0], hw, B[1], B[0], -hw, A[1], A[0], hw, B[1], B[0], -hw, B[1], B[0]);
    gpos.push(-hw, A[1], A[0], hw, B[1], B[0], hw, A[1], A[0], -hw, A[1], A[0], -hw, B[1], B[0], hw, B[1], B[0]);
  };
  const before = P[(iF - 1 + n) % n];
  glassQuad([before[0] - 0.03, Math.max(before[1], prof.belt) + 0.02], [P[iF][0] - 0.03, P[iF][1] - 0.04]);
  const after = P[(iR + 1) % n];
  glassQuad([P[iR][0] + 0.03, P[iR][1] - 0.04], [after[0] + 0.03, Math.max(after[1], prof.belt) + 0.02]);
  const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(gpos, 3)); gg.computeVertexNormals();
  const frontGlass = new THREE.Mesh(gg, glassMat);
  body.add(frontGlass);
  // paraurti
  const bump = new THREE.BoxGeometry(spec.W + 0.02, 0.22, 0.2);
  for (const s of [1, -1]) {
    const m = new THREE.Mesh(bump, darkMat);
    m.position.set(0, 0.38, s * (spec.L / 2 + 0.02));
    body.add(m);
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.11, 0.02), plateMat);
    plate.position.set(0, 0.5, s * (spec.L / 2 + 0.11));
    body.add(plate);
  }
  // fari e fanali
  const headMat = new THREE.MeshLambertMaterial({ color: 0xdddddd, emissive: 0x000000 });
  const tailMat = new THREE.MeshLambertMaterial({ color: 0xc0141a, emissive: 0x000000 });
  const lampFront = spec.body === 'van' ? 0.85 : spec.body === 'suv' ? 0.88 : 0.66;
  for (const s of [1, -1]) {
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.13, 0.06), headMat);
    h.position.set(s * (spec.W / 2 - 0.3), lampFront, spec.L / 2 + 0.06);
    body.add(h);
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.17, 0.06), tailMat);
    t.position.set(s * (spec.W / 2 - 0.25), prof.body[prof.body.length - 1][1] - 0.12, -spec.L / 2 - 0.06);
    body.add(t);
  }
  // ruote
  const wheels = [];
  const R = spec.wheelR;
  const tireG = new THREE.CylinderGeometry(R, R, 0.22, 16); tireG.rotateZ(Math.PI / 2);
  const rimG = new THREE.CylinderGeometry(R * 0.62, R * 0.62, 0.235, 8); rimG.rotateZ(Math.PI / 2);
  const track = spec.W / 2 - 0.16;
  for (const [sx, sz, front] of [[1, 1, true], [-1, 1, true], [1, -1, false], [-1, -1, false]]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx * track, R, sz * spec.wb / 2);
    const spin = new THREE.Group();
    spin.add(new THREE.Mesh(tireG, tireMat));
    const rim = new THREE.Mesh(rimG, rimMat);
    spin.add(rim);
    pivot.add(spin);
    root.add(pivot);
    wheels.push({ pivot, spin, front });
  }
  // abitacolo (solo per l'auto del giocatore)
  let interior = null, steeringWheel = null, dashCanvas = null, dashTex = null;
  if (opts.interior) {
    interior = new THREE.Group();
    const seatX = spec.W * 0.22;
    const eyeY = prof.belt + 0.28;
    const dashZ = (spec.body === 'van' ? spec.wb / 2 + 0.05 : spec.wb / 2 - 0.35);
    const dash = new THREE.Mesh(new THREE.BoxGeometry(spec.W - 0.12, 0.28, 0.5), new THREE.MeshLambertMaterial({ color: 0x2b2d30 }));
    dash.position.set(0, prof.belt - 0.06, dashZ + 0.3);
    interior.add(dash);
    // quadro strumenti
    dashCanvas = document.createElement('canvas'); dashCanvas.width = 256; dashCanvas.height = 96;
    dashTex = new THREE.CanvasTexture(dashCanvas); dashTex.colorSpace = THREE.SRGBColorSpace;
    const cluster = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.16), new THREE.MeshBasicMaterial({ map: dashTex }));
    cluster.position.set(seatX, prof.belt + 0.06, dashZ + 0.1);
    cluster.rotation.set(-0.35, Math.PI, 0);
    interior.add(cluster);
    // volante
    steeringWheel = new THREE.Group();
    const rimW = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.018, 8, 28), new THREE.MeshLambertMaterial({ color: 0x151515 }));
    steeringWheel.add(rimW);
    for (const a of [0, 2.1, 4.2]) {
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.025, 0.02), darkMat);
      sp.position.set(Math.cos(a + Math.PI / 2) * 0.085, Math.sin(a + Math.PI / 2) * 0.085, 0);
      sp.rotation.z = a + Math.PI / 2;
      steeringWheel.add(sp);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.05, 12), darkMat); hub.rotation.x = Math.PI / 2;
    steeringWheel.add(hub);
    const swHolder = new THREE.Group();
    swHolder.position.set(seatX, prof.belt - 0.08, dashZ - 0.12);
    swHolder.rotation.x = -0.45;
    swHolder.add(steeringWheel);
    interior.add(swHolder);
    // montanti e tetto (visibili dall'interno)
    const frame = new THREE.MeshLambertMaterial({ color: 0x3a3c3f, side: THREE.DoubleSide });
    const roofP = prof.body.filter(([, y]) => y >= spec.H - 0.01).map(([x]) => x);
    const roofFront = Math.max(...roofP);
    const winFront = prof.body.find(([x, y]) => Math.abs(y - prof.belt) < 0.06 && x > 0) || [spec.L / 2 - 0.9, prof.belt];
    for (const s of [1, -1]) {
      const p0 = new THREE.Vector3(s * (spec.W / 2 - 0.08), prof.belt, winFront[0] - 0.05);
      const p1 = new THREE.Vector3(s * (spec.W / 2 - 0.14), spec.H - 0.03, roofFront);
      const len = p0.distanceTo(p1);
      const pil = new THREE.Mesh(new THREE.BoxGeometry(0.07, len, 0.09), frame);
      pil.position.copy(p0).add(p1).multiplyScalar(0.5);
      pil.lookAt(p1); pil.rotateX(Math.PI / 2);
      interior.add(pil);
    }
    const roofM = new THREE.Mesh(new THREE.PlaneGeometry(spec.W - 0.1, Math.max(0.5, roofFront - Math.min(...roofP))), new THREE.MeshLambertMaterial({ color: 0x9a968e, side: THREE.DoubleSide }));
    roofM.rotation.x = Math.PI / 2;
    roofM.position.set(0, spec.H - 0.05, (roofFront + Math.min(...roofP)) / 2);
    interior.add(roofM);
    const hood = new THREE.Mesh(new THREE.PlaneGeometry(spec.W - 0.2, 1.2), paint);
    hood.rotation.x = -Math.PI / 2 + 0.08;
    hood.position.set(0, prof.belt - 0.12, dashZ + 1.1);
    interior.add(hood);
    // sedile
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.7, 0.12), new THREE.MeshLambertMaterial({ color: 0x2a2a2a }));
    seat.position.set(-seatX, prof.belt - 0.05, dashZ - 1.0);
    interior.add(seat);
    interior.visible = false;
    root.add(interior);
    root.userData.eye = new THREE.Vector3(seatX, eyeY + 0.06, dashZ - 0.75);
  }
  return { root, body, shell, wheels, headMat, tailMat, interior, steeringWheel, dashCanvas, dashTex, paint, exterior: [shell, sideGlass, frontGlass] };
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
