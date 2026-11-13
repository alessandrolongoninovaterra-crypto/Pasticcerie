import * as THREE from 'three';

// Caccia a reazione biposto per gli spostamenti veloci (modello originale: nessun aereo reale,
// nessuna insegna). Usa la stessa fisica dell'aereo da turismo (src/plane.js) con parametri da jet:
// spinta alta, ala a delta, velocita' di stallo e di atterraggio elevate, rollio rapido.
export const JET_SPEC = {
  id: 'jet', kind: 'plane', jet: true, name: 'Caccia a reazione',
  desc: 'Biposto a reazione per gli spostamenti veloci: fino a ~900 km/h, da Milano a Lecco in circa tre minuti. Parte in volo a 500 m; manetta oltre l\'85% = postbruciatore.',
  color: '#8e979f', stripe: '#d35400',
  L: 15, W: 9.4, H: 4.6, wb: 5.5, mass: 9000, kw: 0, rpmMax: 2700, thrustKN: 95,
  thrust: 95000, cdS: 0.62, kInd: 5.0e7, wingS: 32, vStall: 62, vRot: 76, vNe: 330,
  rollRate: 2.6, pitchRate: 0.9, maxBank: 1.4, ceiling: 4500, vLandMax: 95, launchAlt: 500, launchSpeed: 160,
};

// prisma verticale da un poligono nel piano x,z (convesso o quasi), tra le quote y0 e y1
function prism(pts, y0, y1) {
  const pos = [], idx = [];
  const n = pts.length;
  for (const [x, z] of pts) pos.push(x, y1, z);
  for (const [x, z] of pts) pos.push(x, y0, z);
  for (let i = 1; i < n - 1; i++) { idx.push(0, i, i + 1); idx.push(n, n + i + 1, n + i); }
  for (let i = 0; i < n; i++) { const j = (i + 1) % n; idx.push(i, n + i, j, j, n + i, n + j); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx);
  const ng = g.toNonIndexed();
  ng.computeVertexNormals();
  return ng;
}

// convenzione come le auto e l'aereo: avanti = +Z locale, sinistra = +X, origine al suolo
export function buildJetModel(spec, opts = {}) {
  const root = new THREE.Group(), ext = new THREE.Group();
  const paint = new THREE.MeshPhongMaterial({ color: opts.color || spec.color, shininess: 40, specular: 0x444444, side: THREE.DoubleSide });
  const darkPaint = new THREE.MeshPhongMaterial({ color: 0x5d646b, shininess: 30, side: THREE.DoubleSide });
  const stripe = new THREE.MeshPhongMaterial({ color: spec.stripe, shininess: 30, side: THREE.DoubleSide });
  const metal = new THREE.MeshPhongMaterial({ color: 0x3a3d40, shininess: 80, specular: 0x777777 });
  const dark = new THREE.MeshLambertMaterial({ color: 0x1b1d20 });
  const glass = new THREE.MeshPhongMaterial({ color: 0x8a6a2a, shininess: 140, specular: 0xffe0a0, transparent: true, opacity: 0.55 });
  const gearY = 1.55;
  const hideInside = [];
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, hide = false) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
    m.castShadow = true; ext.add(m); if (hide) hideInside.push(m); return m;
  };
  // fusoliera: sezioni ellittiche dal muso all'ugello
  const S = [[7.6, 0.03, 0.03], [6.4, 0.32, 0.3], [4.6, 0.62, 0.6], [2.6, 0.82, 0.78], [0, 1.0, 0.82], [-3.5, 1.05, 0.8], [-6.2, 0.82, 0.68], [-7.2, 0.62, 0.6]];
  const K = 10, pos = [], idx = [];
  for (const [z, hw, hh] of S) for (let k = 0; k < K; k++) { const a = k / K * Math.PI * 2; pos.push(Math.cos(a) * hw, gearY + 0.9 + Math.sin(a) * hh, z); }
  for (let i = 0; i < S.length - 1; i++) for (let k = 0; k < K; k++) {
    const a = i * K + k, b = i * K + (k + 1) % K, c = a + K, d = b + K;
    idx.push(a, b, c, b, d, c);
  }
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); fg.setIndex(idx); fg.computeVertexNormals();
  hideInside.push(add(fg, paint, 0, 0, 0));
  // tettuccio a goccia
  const can = new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2); can.scale(0.5, 0.55, 1.9);
  hideInside.push(add(can, glass, 0, gearY + 1.5, 3.4));
  // prese d'aria ai lati della fusoliera
  for (const sx of [1, -1]) {
    add(prism([[sx * 0.75, 3.0], [sx * 1.3, 2.6], [sx * 1.3, -1.5], [sx * 0.75, -1.5]], gearY + 0.35, gearY + 1.15), darkPaint, 0, 0, 0);
    add(new THREE.BoxGeometry(0.5, 0.75, 0.05), dark, sx * 1.03, gearY + 0.75, 2.85);
  }
  // ala a delta, con la punta arancione
  const yw = gearY + 0.75;
  for (const sx of [1, -1]) {
    add(prism([[sx * 0.9, 2.2], [sx * 4.7, -3.2], [sx * 4.7, -4.4], [sx * 0.9, -5.0]], yw - 0.08, yw + 0.08), paint, 0, 0, 0);
    add(prism([[sx * 4.25, -2.75], [sx * 4.72, -3.2], [sx * 4.72, -4.4], [sx * 4.25, -4.45]], yw - 0.09, yw + 0.09), stripe, 0, 0, 0);
    // piani di coda
    add(prism([[sx * 0.8, -5.4], [sx * 2.9, -6.9], [sx * 2.9, -7.5], [sx * 0.8, -7.3]], gearY + 0.82, gearY + 0.92), paint, 0, 0, 0);
    // derive gemelle, leggermente inclinate verso l'esterno
    const fin = new THREE.Shape(); fin.moveTo(0, 0); fin.lineTo(-2.3, 0); fin.lineTo(-2.6, 2.1); fin.lineTo(-1.6, 2.1); fin.lineTo(0, 0);
    const finG = new THREE.ExtrudeGeometry(fin, { depth: 0.08, bevelEnabled: false });
    const f = add(finG, darkPaint, sx * 0.75, gearY + 1.45, -4.7, 0, -Math.PI / 2, -sx * 0.32);
    f.castShadow = true;
  }
  // ugello e postbruciatore (si accende con la manetta sopra l'85%, vedi main.js)
  add(new THREE.CylinderGeometry(0.62, 0.5, 0.9, 16, 1, true), metal, 0, gearY + 0.9, -7.55, Math.PI / 2);
  add(new THREE.CircleGeometry(0.5, 16), dark, 0, gearY + 0.9, -7.5, 0, Math.PI, 0);
  const flame = new THREE.Group(); flame.position.set(0, gearY + 0.9, -8.0); ext.add(flame);
  const fl = new THREE.Mesh(new THREE.ConeGeometry(0.42, 3.2, 14, 1, true), new THREE.MeshBasicMaterial({ color: 0xff8a2a, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  fl.rotation.x = -Math.PI / 2; fl.position.z = -1.6; flame.add(fl);
  const core = new THREE.Mesh(new THREE.ConeGeometry(0.25, 1.6, 12, 1, true), new THREE.MeshBasicMaterial({ color: 0xbfe0ff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  core.rotation.x = -Math.PI / 2; core.position.z = -0.8; flame.add(core);
  flame.visible = false;
  // carrello triciclo (ruote piccole, gambe lunghe)
  const wheelGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.22, 14); wheelGeo.rotateZ(Math.PI / 2);
  const wheels = [], gear = [];
  for (const [x, z, front] of [[0, 4.6, true], [1.35, -1.2, false], [-1.35, -1.2, false]]) {
    const piv = new THREE.Group(); piv.position.set(x, 0.34, z); piv.rotation.order = 'YXZ'; ext.add(piv);
    const wm = new THREE.Mesh(wheelGeo, dark); wm.castShadow = true; piv.add(wm);
    gear.push(piv, add(new THREE.CylinderGeometry(0.06, 0.06, gearY + 0.2, 6), metal, x * 0.9, (gearY + 0.2) / 2 + 0.2, z));
    wheels.push({ pivot: piv, front });
  }
  root.add(ext);
  // abitacolo: cruscotto e cloche; dal posto di pilotaggio restano visibili ali e muso
  const interior = new THREE.Group();
  const eye = new THREE.Vector3(0, gearY + 1.55, 3.0);
  const panel = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.32, 0.25), new THREE.MeshLambertMaterial({ color: 0x24272a }));
  panel.position.set(0, gearY + 1.18, 4.05); interior.add(panel);
  const dashCanvas = document.createElement('canvas'); dashCanvas.width = 256; dashCanvas.height = 96;
  const dashTex = new THREE.CanvasTexture(dashCanvas); dashTex.colorSpace = THREE.SRGBColorSpace;
  const cluster = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.157), new THREE.MeshBasicMaterial({ map: dashTex, toneMapped: false }));
  cluster.position.set(0, gearY + 1.3, 3.9); interior.add(cluster); cluster.lookAt(eye);
  // muso visto dall'abitacolo
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.55, 3.2, 10), paint); nose.rotation.x = Math.PI / 2; nose.position.set(0, gearY + 0.98, 5.9); interior.add(nose);
  const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.35, 6), new THREE.MeshLambertMaterial({ color: 0x151515 }));
  stick.position.set(0, gearY + 1.05, 3.45); interior.add(stick);
  interior.visible = false;
  root.add(interior);
  root.userData.eye = eye.clone();
  return { root, ext, wheels, gear, prop: null, flame, headlight: null, tailGlow: null, interior, steeringWheel: stick, dashCanvas, dashTex, exterior: hideInside, isPlane: true };
}
