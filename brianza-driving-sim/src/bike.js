import * as THREE from 'three';

// Moto da corsa (supersportiva stradale): dati tecnici indicativi e modello procedurale.
// La fisica e' quella del veicolo a bicicletta (src/vehicle.js), che per una moto e' quasi
// letterale: due ruote, carreggiata stretta, massa leggera, tanta potenza sulla ruota posteriore.
// La piega in curva e' solo visiva: atan(u*w/g), calcolata in main.js e applicata alla radice.
// Convenzione modello come le auto: avanti = +Z locale, sinistra = +X locale, origine a terra.
export const BIKES = [
  {
    id: 'bike', kind: 'bike', name: 'Moto Supersportiva 1000', desc: 'Quattro cilindri, 200 CV e 200 kg: accelerazione da caccia. Si piega in curva.',
    L: 2.05, W: 0.78, H: 1.15, wb: 1.41, color: '#c8102e', trim: '#f2f2f0', suit: '#1a1a1c',
    mass: 280, kw: 150, nm: 113, rpmMax: 13500, gears: [2.6, 2.0, 1.65, 1.42, 1.26, 1.13], final: 4.85,
    drive: 'R', cda: 0.34, brake: 3900, steer: 0.5, grip: 1.15, wheelR: 0.31,
  },
  {
    id: 'bike600', kind: 'bike', name: 'Moto Sportiva 600', desc: 'Piu\' leggera e facile, ama i giri alti e le curve della Valassina.',
    L: 2.0, W: 0.74, H: 1.12, wb: 1.38, color: '#1550b8', trim: '#ffd21a', suit: '#24272c',
    mass: 255, kw: 90, nm: 66, rpmMax: 15500, gears: [2.65, 2.0, 1.65, 1.42, 1.27, 1.15], final: 5.0,
    drive: 'R', cda: 0.36, brake: 3600, steer: 0.52, grip: 1.12, wheelR: 0.3,
  },
];

// cilindro tra due punti (arti del pilota, steli, scarico)
function limb(a, b, r0, r1, mat, seg = 10) {
  const d = new THREE.Vector3().subVectors(b, a), L = d.length();
  const g = new THREE.CylinderGeometry(r1, r0, L, seg, 1);
  const m = new THREE.Mesh(g, mat);
  m.position.copy(a).addScaledVector(d, 0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  m.castShadow = true;
  return m;
}
function ball(r, mat, x, y, z, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), mat);
  m.scale.set(sx, sy, sz); m.position.set(x, y, z); m.castShadow = true;
  return m;
}

// guscio affusolato: sezioni ellittiche [z, mezza larghezza, y alto, y basso]
function loft(S, mat, K = 14) {
  const pos = [], idx = [];
  for (const [z, hw, top, bot] of S) {
    const yc = (top + bot) / 2, hh = (top - bot) / 2;
    for (let k = 0; k < K; k++) {
      const a = k / K * Math.PI * 2;
      // sezione un po' squadrata (superellisse): fianchi piatti come una carena vera
      const c = Math.cos(a), s = Math.sin(a);
      pos.push(Math.sign(c) * Math.pow(Math.abs(c), 0.75) * hw, yc + Math.sign(s) * Math.pow(Math.abs(s), 0.85) * hh, z);
    }
  }
  for (let i = 0; i < S.length - 1; i++) for (let k = 0; k < K; k++) {
    const a = i * K + k, b = i * K + (k + 1) % K, c = a + K, d = b + K;
    idx.push(a, c, b, b, c, d);
  }
  // tappi alle estremita'
  const n = pos.length / 3;
  pos.push(0, (S[0][2] + S[0][3]) / 2, S[0][0] + 0.01, 0, (S.at(-1)[2] + S.at(-1)[3]) / 2, S.at(-1)[0] - 0.01);
  const L = S.length - 1;
  for (let k = 0; k < K; k++) { idx.push(n, (k + 1) % K, k); idx.push(n + 1, L * K + k, L * K + (k + 1) % K); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat); m.castShadow = true;
  return m;
}

function wheel(R, width, rimMat, tyreMat, discMat) {
  const g = new THREE.Group();
  const tyre = new THREE.Mesh(new THREE.TorusGeometry(R - width * 0.42, width * 0.5, 10, 28), tyreMat);
  tyre.rotation.y = Math.PI / 2; tyre.scale.set(1, 1, 1.0); tyre.castShadow = true;
  g.add(tyre);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(R - width * 0.95, 0.025, 6, 24), rimMat); rim.rotation.y = Math.PI / 2; g.add(rim);
  for (let i = 0; i < 5; i++) {   // cinque razze sdoppiate
    const a = i / 5 * Math.PI * 2;
    for (const da of [-0.12, 0.12]) {
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.03, R - width * 0.95, 0.022), rimMat);
      sp.position.set(0, Math.cos(a + da) * (R - width * 0.95) / 2, Math.sin(a + da) * (R - width * 0.95) / 2);
      sp.rotation.x = -(a + da);
      g.add(sp);
    }
  }
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, width + 0.04, 12), rimMat); hub.rotation.z = Math.PI / 2; g.add(hub);
  if (discMat) for (const sx of [1, -1]) {
    const d = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.62, R * 0.62, 0.008, 24), discMat);
    d.rotation.z = Math.PI / 2; d.position.x = sx * (width / 2 + 0.025); g.add(d);
  }
  return g;
}

export function buildBikeModel(spec, opts = {}) {
  const root = new THREE.Group(), ext = new THREE.Group();
  root.add(ext);
  const paint = new THREE.MeshPhysicalMaterial({ color: opts.color || spec.color, roughness: 0.32, metalness: 0.05, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.5 });
  const trim = new THREE.MeshPhysicalMaterial({ color: spec.trim, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.1, envMapIntensity: 1.4 });
  const black = new THREE.MeshStandardMaterial({ color: 0x141518, roughness: 0.55, metalness: 0.2 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x9a9da2, roughness: 0.3, metalness: 1 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xc8962e, roughness: 0.28, metalness: 1 });
  const ti = new THREE.MeshStandardMaterial({ color: 0x6e6a8a, roughness: 0.25, metalness: 1 });
  const tyreMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.9 });
  const disc = new THREE.MeshStandardMaterial({ color: 0xb8b8b8, roughness: 0.35, metalness: 1 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x3a4650, roughness: 0.05, transparent: true, opacity: 0.45, side: THREE.DoubleSide, envMapIntensity: 1.5 });
  const suit = new THREE.MeshStandardMaterial({ color: spec.suit, roughness: 0.6 });
  const suitHi = new THREE.MeshStandardMaterial({ color: opts.color || spec.color, roughness: 0.5 });
  const helmet = new THREE.MeshPhysicalMaterial({ color: spec.trim, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.05 });
  const visor = new THREE.MeshPhysicalMaterial({ color: 0x101418, roughness: 0.05, metalness: 0.6, clearcoat: 1 });
  const head = new THREE.MeshStandardMaterial({ color: 0xfff6e0, emissive: 0xfff1cf, emissiveIntensity: 0.15, roughness: 0.2 });
  const tail = new THREE.MeshStandardMaterial({ color: 0x6a0a06, emissive: 0xff2a12, emissiveIntensity: 0.4, roughness: 0.3 });
  const rev = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffffff, emissiveIntensity: 0 });
  const R = spec.wheelR, wb = spec.wb, zF = wb * 0.48, zR = -(wb - zF);

  // ---- ruote: la posteriore gira e basta, l'anteriore sta nella forcella che sterza
  const rearPivot = new THREE.Group(); rearPivot.rotation.order = 'YXZ';
  rearPivot.position.set(0, R, zR); rearPivot.add(wheel(R, 0.19, black, tyreMat, null));
  ext.add(rearPivot);
  // cannotto di sterzo: inclinato all'indietro, la ruota anteriore e' in fondo alla forcella
  const headP = new THREE.Vector3(0, 0.93, zF - 0.24), axle = new THREE.Vector3(0, R, zF);
  const rake = Math.atan2(axle.z - headP.z, headP.y - axle.y), forkL = headP.distanceTo(axle);
  const headG = new THREE.Group(); headG.position.copy(headP); headG.rotation.x = -rake;
  const steer = new THREE.Group(); headG.add(steer);
  const frontPivot = new THREE.Group(); frontPivot.rotation.order = 'YXZ';
  frontPivot.position.set(0, -forkL, 0); frontPivot.add(wheel(R, 0.13, black, tyreMat, disc));
  steer.add(frontPivot);
  for (const sx of [1, -1]) {
    steer.add(limb(new THREE.Vector3(sx * 0.1, -forkL * 0.42, 0), new THREE.Vector3(sx * 0.1, 0.08, 0), 0.03, 0.03, gold));   // steli
    steer.add(limb(new THREE.Vector3(sx * 0.1, -forkL, 0), new THREE.Vector3(sx * 0.1, -forkL * 0.42, 0), 0.04, 0.036, black)); // foderi
    steer.add(limb(new THREE.Vector3(sx * 0.1, 0.06, 0.02), new THREE.Vector3(sx * 0.3, 0.02, -0.08), 0.016, 0.016, black)); // semimanubri
    steer.add(limb(new THREE.Vector3(sx * 0.24, 0.035, -0.045), new THREE.Vector3(sx * 0.33, 0.01, -0.085), 0.02, 0.02, black)); // manopole
    const cal = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.09, 0.07), gold); cal.position.set(sx * 0.11, -forkL + 0.13, -0.08); steer.add(cal); // pinze
  }
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.03, 0.12), metal); plate.position.set(0, 0.07, 0); steer.add(plate);
  const fender = new THREE.Mesh(new THREE.TorusGeometry(R + 0.03, 0.06, 6, 16, 1.6), paint);
  fender.rotation.set(0, Math.PI / 2, 0.55); fender.scale.set(1, 1, 0.9); fender.position.set(0, -forkL, 0); steer.add(fender);
  ext.add(headG);

  // ---- carenatura superiore: cupolino, serbatoio, sella, codino
  const upper = loft([
    [zF + 0.25, 0.04, 0.99, 0.9], [zF + 0.15, 0.16, 1.06, 0.76], [zF - 0.05, 0.24, 1.08, 0.7], [zF - 0.25, 0.26, 1.06, 0.62],
    [0.25, 0.21, 1.1, 0.58], [0.02, 0.2, 1.08, 0.58], [-0.18, 0.15, 0.93, 0.6], [-0.45, 0.13, 0.94, 0.66],
    [-0.75, 0.09, 1.0, 0.74], [zR - 0.25, 0.035, 1.02, 0.92],
  ], paint);
  ext.add(upper);
  // fianchetti bassi con la seconda tinta e il puntale sotto il motore
  ext.add(loft([[0.4, 0.05, 0.72, 0.62], [0.32, 0.22, 0.76, 0.36], [0.1, 0.23, 0.74, 0.28], [-0.12, 0.21, 0.66, 0.3], [-0.26, 0.1, 0.6, 0.42]], trim));
  // sella (nera) e codino
  ext.add(ball(1, black, 0, 0.94, -0.33, 0.14, 0.04, 0.24));
  ext.add(ball(1, black, 0, 0.99, -0.68, 0.08, 0.035, 0.1));
  // cupolino trasparente
  const ws = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), glass);
  ws.scale.set(0.17, 0.2, 0.3); ws.position.set(0, 1.03, zF - 0.06); ws.rotation.x = 0.55;
  ext.add(ws);
  // fari: due occhi sul muso, fanale e targa sul codino
  for (const sx of [1, -1]) {
    const l = ball(0.05, head, sx * 0.085, 0.93, zF + 0.19, 1.3, 0.55, 0.6); l.rotation.z = sx * 0.25; ext.add(l);
    const ind = ball(0.025, new THREE.MeshStandardMaterial({ color: 0xffa020, emissive: 0x552800 }), sx * 0.21, 0.95, zF + 0.04, 1, 0.7, 1.6); ext.add(ind);
    const mir = ball(0.045, black, sx * 0.25, 1.06, zF - 0.09, 1.2, 0.6, 0.4); ext.add(mir);
  }
  const tl = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.04, 0.03), tail); tl.position.set(0, 0.97, zR - 0.26); ext.add(tl);
  const rl = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.02, 0.02), rev); rl.position.set(0, 0.92, zR - 0.27); ext.add(rl);
  const pl = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.12, 0.01), new THREE.MeshStandardMaterial({ color: 0xf4f4f0, roughness: 0.6 }));
  pl.position.set(0, 0.82, zR - 0.24); pl.rotation.x = 0.35; ext.add(pl);
  ext.add(limb(new THREE.Vector3(0, 0.9, zR - 0.18), new THREE.Vector3(0, 0.8, zR - 0.24), 0.02, 0.02, black));
  // ---- telaio, motore, forcellone, scarico
  for (const sx of [1, -1]) {
    ext.add(limb(new THREE.Vector3(sx * 0.15, 0.88, zF - 0.26), new THREE.Vector3(sx * 0.17, 0.62, -0.18), 0.035, 0.035, metal));  // trave
    ext.add(limb(new THREE.Vector3(sx * 0.13, 0.5, -0.18), new THREE.Vector3(sx * 0.1, R, zR), 0.035, 0.028, metal));              // forcellone
    ext.add(limb(new THREE.Vector3(sx * 0.17, 0.48, -0.2), new THREE.Vector3(sx * 0.19, 0.42, -0.45), 0.012, 0.012, metal));       // pedane
  }
  const eng = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, 0.38), black); eng.position.set(0, 0.5, 0.05); ext.add(eng);
  for (let i = 0; i < 4; i++) ext.add(limb(new THREE.Vector3(-0.12 + i * 0.08, 0.62, 0.22), new THREE.Vector3(-0.12 + i * 0.08, 0.32, 0.3), 0.022, 0.022, ti)); // collettori
  ext.add(limb(new THREE.Vector3(0, 0.3, 0.2), new THREE.Vector3(-0.15, 0.36, -0.3), 0.05, 0.05, ti));
  ext.add(limb(new THREE.Vector3(-0.15, 0.36, -0.3), new THREE.Vector3(-0.2, 0.55, -0.72), 0.06, 0.075, ti));                         // silenziatore
  ext.add(limb(new THREE.Vector3(-0.2, 0.55, -0.72), new THREE.Vector3(-0.205, 0.565, -0.75), 0.075, 0.05, black));
  ext.add(limb(new THREE.Vector3(0, 0.88, -0.25), new THREE.Vector3(0, 0.45, -0.12), 0.03, 0.03, gold));                              // mono
  const hug = new THREE.Mesh(new THREE.TorusGeometry(R + 0.03, 0.05, 6, 12, 1.2), black);
  hug.rotation.set(0, Math.PI / 2, 1.3); hug.position.set(0, R, zR); ext.add(hug);

  // ---- pilota in carena (tuta in pelle a due colori, casco)
  const rider = new THREE.Group();
  const hip = new THREE.Vector3(0, 1.02, -0.32), sh = new THREE.Vector3(0, 1.3, 0.1), helm = new THREE.Vector3(0, 1.4, 0.24);
  rider.add(ball(1, suit, hip.x, hip.y, hip.z, 0.18, 0.12, 0.16));
  rider.add(limb(hip, sh, 0.15, 0.17, suit, 12));
  rider.add(ball(1, suitHi, 0, 1.28, -0.02, 0.15, 0.11, 0.2));        // gobba aerodinamica
  rider.add(ball(1, suit, sh.x, sh.y, sh.z, 0.2, 0.1, 0.12));
  rider.add(ball(0.15, helmet, helm.x, helm.y, helm.z, 1, 0.95, 1.12));
  const vis = ball(0.12, visor, 0, 1.4, 0.33, 1.05, 0.55, 0.65); rider.add(vis);
  for (const sx of [1, -1]) {
    const s = new THREE.Vector3(sx * 0.17, 1.27, 0.1), el = new THREE.Vector3(sx * 0.25, 1.1, 0.25), gr = new THREE.Vector3(sx * 0.27, 0.99, zF - 0.32);
    rider.add(limb(s, el, 0.055, 0.05, suit), limb(el, gr, 0.048, 0.042, suit), ball(0.045, black, gr.x, gr.y, gr.z));
    const h = new THREE.Vector3(sx * 0.12, 1.0, -0.32), kn = new THREE.Vector3(sx * 0.24, 0.86, 0.08), ft = new THREE.Vector3(sx * 0.2, 0.5, -0.38);
    rider.add(limb(h, kn, 0.085, 0.07, suit), limb(kn, ft, 0.065, 0.05, suit));
    rider.add(ball(1, suitHi, kn.x, kn.y, kn.z, 0.075, 0.07, 0.08));      // saponetta
    rider.add(ball(1, black, ft.x, ft.y - 0.02, ft.z + 0.05, 0.05, 0.05, 0.13));
  }
  ext.add(rider);

  // ---- vista dal casco: strumentazione TFT sulla piastra di sterzo
  const interior = new THREE.Group();
  const eye = new THREE.Vector3(0, 1.38, 0.24);
  const dashCanvas = document.createElement('canvas'); dashCanvas.width = 256; dashCanvas.height = 96;
  const dashTex = new THREE.CanvasTexture(dashCanvas); dashTex.colorSpace = THREE.SRGBColorSpace;
  const cluster = new THREE.Mesh(new THREE.PlaneGeometry(0.17, 0.065), new THREE.MeshBasicMaterial({ map: dashTex, toneMapped: false }));
  cluster.position.set(0, 1.1, zF - 0.08); cluster.lookAt(eye); interior.add(cluster);
  root.add(interior); interior.visible = false;
  root.userData.eye = eye.clone();

  // ---- luci: faro e bagliore del fanale
  const hl = new THREE.SpotLight(0xfff1cf, 0, 80, 0.55, 0.5, 1.2);
  hl.position.set(0, 0.95, zF + 0.2); hl.target.position.set(0, 0.2, zF + 10);
  root.add(hl, hl.target);
  const tg = new THREE.PointLight(0xff2a12, 0, 1.2, 3.4); tg.position.set(0, 0.97, zR - 0.3); root.add(tg);
  ext.traverse((o) => { if (o.isMesh) o.castShadow = true; });

  return {
    root, ext, wheels: [{ pivot: rearPivot, front: false }, { pivot: frontPivot, front: false }], bars: steer,
    headlight: hl, tailGlow: tg, lamps: { head, tail, rev }, interior, steeringWheel: null, dashCanvas, dashTex,
    exterior: [rider], isBike: true,
  };
}
