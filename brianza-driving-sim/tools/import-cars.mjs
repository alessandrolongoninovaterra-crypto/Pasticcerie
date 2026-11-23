// Importa i modelli 3D delle auto di OSDS (https://github.com/simcruisegame/osds, cartella
// data/art/traffic: modelli Sketchfab e CARLA sotto CC BY 4.0) e li prepara per il gioco:
//   - li raddrizza nel sistema del gioco (avanti = +Z, sinistra = +X, terra a y = 0, origine a meta'
//     tra gli assi) e li porta alla lunghezza vera;
//   - trova le quattro ruote dalla geometria (le zone d'appoggio a terra) e le stacca dalla scocca,
//     ognuna col suo perno al mozzo, cosi' girano e sterzano;
//   - riconosce vernice, vetri, fanali e pneumatici dai nomi dei materiali (i ruoli dei materiali
//     sono quelli del file Content/Vehicles/CarPresentation.json di OSDS, licenza MIT, piu' regole nostre);
//   - riduce i triangoli (meshoptimizer) e le texture (sharp) per il browser;
//   - prepara due versioni compatte per il traffico (vicina e lontana) con i colori nei vertici.
// Uscita: data/cars/<id>.js (GLB compresso, caricato con loadData) e data/cars/index.json.
//
// Uso: node tools/import-cars.mjs <cartella del repository osds> [id ...]
import { Document, NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const OSDS = process.argv[2];
const ONLY = process.argv.slice(3);
if (!OSDS) { console.error('uso: node tools/import-cars.mjs <osds> [id ...]'); process.exit(1); }
const OUT = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'data', 'cars');
fs.mkdirSync(OUT, { recursive: true });

// --- modelli: cartella in OSDS, scheda tecnica OSDS (data/cars), misure delle gomme se manca la scheda
// paint/glass/...: regole aggiuntive sui nomi dei materiali (prima di quelle generali)
const MODELS = [
  { id: 'odyssey', dir: 'odyssey-175ce6fb', car: 'odyssey18', pres: 'odyssey18' },
  { id: 'grandcherokee', dir: 'grandcherokee13-74686a75', car: 'grandcherokee13', pres: 'grandcherokee13', roles: { rubber_tire: 'tyre', plainnothing_tire: 'tyre', dullplastic_tire: 'wheel_alloy', brakelight: 'lamp_rear', headlight: 'lamp_front', decal_badging: 'hidden', windshield: 'glass', windowmask: 'trim', interior: 'interior' } },
  { id: 'camaro', dir: 'camaro85-c6d20cc3', car: 'camaro87', pres: 'camaro87' },
  { id: 'f150', dir: 'f150raptor18-096aa1ba', car: 'f150raptor18', pres: 'f150raptor18', roles: { Glass_Parts: 'glass', glass_18: 'glass', Light_SetA: 'lamp_front', Badge: 'hidden', LicensePlate: 'hidden', Interior: 'interior' } },
  { id: 'crv', dir: 'crv25-91c66738', car: 'crv25', pres: 'crv25', roles: { 'Tyre': 'tyre', chromeLamp: 'lamp_front', license: 'hidden', Material_005: 'hidden' } },
  { id: 'tahoe', dir: 'tahoe-39b86984', tyreR: 0.405, wheelbase: 2.946, roles: { default: 'paint', tyre: 'tyre', frlight: 'lamp_front', tree: 'lamp_rear', sticker: 'hidden', inter01: 'interior' } },
  { id: 'model3', dir: 'model3-3a602469', car: 'model3', pres: 'model3', roles: { glassDark: 'glass', glass: 'glass', LicensePlate: 'hidden', carBrand: 'hidden', Interior: 'interior', BlackSuade: 'interior', Wood: 'interior', interiorGray: 'interior' } },
  { id: 'mustang', dir: 'mustang65-05f2a294', car: 'mustang65', pres: 'mustang65' },
  { id: 'accord', dir: 'accord18-54c22744', tyreR: 0.335, wheelbase: 2.83 },
  { id: 'c8', dir: 'c8-790c40cc', car: 'meridian_z', pres: 'meridian_z', roles: { Taillights: 'lamp_rear', Brake_Lights: 'lamp_rear', Headlights: 'lamp_front', Day_Lights: 'lamp_front', Badges: 'hidden', License_Plate: 'hidden', Invisible_Unimportant: 'hidden', Interior: 'interior', Seats: 'interior', Carpet: 'interior', Gauges: 'interior', Engine: 'interior' } },
  { id: 'mini', dir: 'minif56-carla', car: 'mini15s', pres: 'mini15s' },
  { id: 'miata', dir: 'miata_nb-5d103c56', car: 'nb2001', pres: 'nb2001', length: 3.945, roles: { interior_: 'interior' } },
];

// regole generali sui nomi (dopo i ruoli OSDS e quelli del modello)
const GENERIC = [
  [/licen|licplate|badge|logo/i, 'hidden'],
  [/glasslamp|clearglass|headl|innerlights|frlight/i, 'lamp_front'],
  [/redglass|redlamp|red_?light|taillight|brake_?light/i, 'lamp_rear'],
  [/orange|amber|indicator|turn/i, 'lamp_amber'],
  [/glass|window|windshield|winshield|kaca|visor/i, 'glass'],
  [/tyre|tire(?!_rim)|rubber|^ban_/i, 'tyre'],
  [/carpaint|^paint|body_?color|carskin|^body$/i, 'paint'],
  [/interior|seat|carpet|gauge|display|dash/i, 'interior'],
];

const pres = JSON.parse(fs.readFileSync(path.join(OSDS, 'Content/Vehicles/CarPresentation.json'), 'utf8')).cars;
const manifest = JSON.parse(fs.readFileSync(path.join(OSDS, 'data/art/traffic/manifest.json'), 'utf8')).models;

function roleOf(model, matName) {
  const P = model.pres && pres[model.pres] && pres[model.pres].roles;
  if (P && P[matName]) return normRole(P[matName]);
  if (model.roles) for (const [k, r] of Object.entries(model.roles)) if (matName.includes(k) || matName.replace(/\./g, '_').includes(k)) return r;
  for (const [re, r] of GENERIC) if (re.test(matName)) return r;
  return 'trim';
}
function normRole(r) {
  if (r === 'glass_dark' || r === 'mirror_glass') return r === 'glass_dark' ? 'glass' : 'trim';
  if (['paint', 'glass', 'tyre', 'lamp_front', 'lamp_rear', 'lamp_amber', 'hidden', 'interior'].includes(r)) return r;
  if (r === 'gauge' || r === 'leather' || r === 'cloth') return 'interior';
  return 'trim';
}

// --- piccola algebra
const mul4 = (m, x, y, z) => [m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]];
const mul3 = (m, x, y, z) => [m[0] * x + m[4] * y + m[8] * z, m[1] * x + m[5] * y + m[9] * z, m[2] * x + m[6] * y + m[10] * z];
function normalMatrix(m) {
  // inversa trasposta della parte 3x3
  const a = m[0], b = m[1], c = m[2], d = m[4], e = m[5], f = m[6], g = m[8], h = m[9], i = m[10];
  const A = e * i - f * h, B = -(d * i - f * g), C = d * h - e * g;
  const det = a * A + b * B + c * C || 1;
  const inv = [A / det, -(b * i - c * h) / det, (b * f - c * e) / det, B / det, (a * i - c * g) / det, -(a * f - c * d) / det, C / det, -(a * h - b * g) / det, (a * e - b * d) / det];
  // inv e' per righe (r0 = inv[0..2] ...) => la trasposta e' per colonne: stessi numeri letti come colonne
  return [inv[0], inv[1], inv[2], 0, inv[3], inv[4], inv[5], 0, inv[6], inv[7], inv[8], 0, 0, 0, 0, 1];
}
const srgb2lin = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));

// --- lettura: ogni primitiva in coordinate della scena, con il suo materiale
async function readModel(model) {
  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
  const doc = await io.read(path.join(OSDS, 'data/art/traffic', model.dir, 'scene.gltf'));
  const root = doc.getRoot();
  const mats = new Map(); // Material -> info
  const parts = [];
  for (const node of root.listNodes()) {
    const mesh = node.getMesh();
    if (!mesh) continue;
    const M = node.getWorldMatrix();
    const N = normalMatrix(M);
    const det = M[0] * (M[5] * M[10] - M[6] * M[9]) - M[4] * (M[1] * M[10] - M[2] * M[9]) + M[8] * (M[1] * M[6] - M[2] * M[5]);
    for (const p of mesh.listPrimitives()) {
      if (p.getMode() !== 4) continue;
      const mat = p.getMaterial();
      const pos = p.getAttribute('POSITION'), nrm = p.getAttribute('NORMAL'), uv = p.getAttribute('TEXCOORD_0');
      const n = pos.getCount();
      const P = new Float32Array(n * 3), Nn = new Float32Array(n * 3), U = uv ? new Float32Array(n * 2) : null;
      const t = [0, 0, 0], t2 = [0, 0];
      for (let k = 0; k < n; k++) {
        pos.getElement(k, t); const w = mul4(M, t[0], t[1], t[2]); P.set(w, k * 3);
        if (nrm) { nrm.getElement(k, t); const v = mul3(N, t[0], t[1], t[2]); const l = Math.hypot(v[0], v[1], v[2]) || 1; Nn.set([v[0] / l, v[1] / l, v[2] / l], k * 3); }
        if (U) { uv.getElement(k, t2); U[k * 2] = t2[0]; U[k * 2 + 1] = t2[1]; }
      }
      let I = p.getIndices() ? Uint32Array.from(p.getIndices().getArray()) : Uint32Array.from({ length: n }, (_, k) => k);
      if (det < 0) for (let k = 0; k < I.length; k += 3) { const a = I[k + 1]; I[k + 1] = I[k + 2]; I[k + 2] = a; }
      if (!nrm) computeNormals(P, I, Nn);
      if (!mats.has(mat)) mats.set(mat, await matInfo(model, mat, mats.size));
      parts.push({ P, N: Nn, U, I, mat: mats.get(mat) });
    }
  }
  return { parts, mats: [...mats.values()] };
}

function computeNormals(P, I, N) {
  N.fill(0);
  for (let k = 0; k < I.length; k += 3) {
    const a = I[k] * 3, b = I[k + 1] * 3, c = I[k + 2] * 3;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    for (const o of [a, b, c]) { N[o] += nx; N[o + 1] += ny; N[o + 2] += nz; }
  }
  for (let k = 0; k < N.length; k += 3) { const l = Math.hypot(N[k], N[k + 1], N[k + 2]) || 1; N[k] /= l; N[k + 1] /= l; N[k + 2] /= l; }
}

async function matInfo(model, mat, idx) {
  const name = mat ? mat.getName() || 'm' + idx : 'none';
  const info = { name, role: roleOf(model, name), color: [0.8, 0.8, 0.8, 1], metal: 0, rough: 0.6, alpha: 'OPAQUE', cutoff: 0.5, double: false, tex: {}, emissive: [0, 0, 0] };
  if (!mat) return info;
  info.color = mat.getBaseColorFactor().slice();
  info.metal = mat.getMetallicFactor(); info.rough = Math.min(1, mat.getRoughnessFactor());
  info.alpha = mat.getAlphaMode(); info.cutoff = mat.getAlphaCutoff(); info.double = mat.getDoubleSided();
  info.emissive = mat.getEmissiveFactor().slice();
  const grab = (t) => t && t.getImage() ? { bytes: Buffer.from(t.getImage()), mime: t.getMimeType() } : null;
  info.tex.base = grab(mat.getBaseColorTexture());
  info.tex.normal = grab(mat.getNormalTexture());
  info.tex.mr = grab(mat.getMetallicRoughnessTexture());
  info.tex.emissive = grab(mat.getEmissiveTexture());
  // campionatore della texture di base (per i colori nei vertici del traffico)
  if (info.tex.base) {
    const { data, info: im } = await sharp(info.tex.base.bytes).resize(256, 256, { fit: 'fill' }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    info.sample = (u, v) => {
      let x = Math.floor((u - Math.floor(u)) * im.width), y = Math.floor((v - Math.floor(v)) * im.height);
      x = Math.min(im.width - 1, Math.max(0, x)); y = Math.min(im.height - 1, Math.max(0, y));
      const o = (y * im.width + x) * 4;
      return [srgb2lin(data[o] / 255), srgb2lin(data[o + 1] / 255), srgb2lin(data[o + 2] / 255)];
    };
    // colore medio (per la vernice "dipinta nella texture": serve solo come riferimento)
  }
  return info;
}

// --- orientamento, scala, ruote
function frame(model, parts, meta) {
  let lo = [1e9, 1e9, 1e9], hi = [-1e9, -1e9, -1e9];
  for (const p of parts) for (let k = 0; k < p.P.length; k += 3) for (let a = 0; a < 3; a++) { lo[a] = Math.min(lo[a], p.P[k + a]); hi[a] = Math.max(hi[a], p.P[k + a]); }
  let size = hi.map((h, a) => h - lo[a]);
  // in alto l'asse piu' corto (i modelli Sketchfab sono gia' a Y in alto: si controlla soltanto)
  const upAx = size.indexOf(Math.min(...size));
  if (upAx !== 1) {
    // ruota l'asse corto su Y
    for (const p of parts) for (const A of [p.P, p.N]) for (let k = 0; k < A.length; k += 3) {
      if (upAx === 2) { const y = A[k + 1], z = A[k + 2]; A[k + 1] = z; A[k + 2] = -y; } else { const x = A[k], y = A[k + 1]; A[k] = -y; A[k + 1] = x; }
    }
    return frame(model, parts, meta);
  }
  // pneumatici in basso: se la media dei vertici "gomma" sta sopra il centro, il modello e' capovolto
  {
    let s = 0, n = 0;
    for (const p of parts) if (p.mat.role === 'tyre') for (let k = 1; k < p.P.length; k += 3) { s += p.P[k]; n++; }
    if (n && s / n > (lo[1] + hi[1]) / 2) {
      for (const p of parts) for (const A of [p.P, p.N]) for (let k = 0; k < A.length; k += 3) { A[k + 1] = -A[k + 1]; A[k + 2] = -A[k + 2]; }
      return frame(model, parts, meta);
    }
  }
  const longX = size[0] > size[2];
  const L = longX ? size[0] : size[2];
  const s = meta.length / L;                // metri per unita'
  const mid = [(lo[0] + hi[0]) / 2, lo[1], (lo[2] + hi[2]) / 2];
  // zone d'appoggio: i vertici entro 3 cm da terra, divisi in quattro quadranti
  const band = lo[1] + 0.03 / s;
  const sum = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (const p of parts) {
    if (p.mat.role === 'hidden') continue;
    for (let k = 0; k < p.P.length; k += 3) {
      if (p.P[k + 1] > band) continue;
      const along = longX ? p.P[k] - mid[0] : p.P[k + 2] - mid[2], across = longX ? p.P[k + 2] - mid[2] : p.P[k] - mid[0];
      const g = (along < 0 ? 0 : 2) + (across < 0 ? 0 : 1);
      sum[g][0] += along; sum[g][1] += across; sum[g][2]++;
    }
  }
  if (sum.some((q) => q[2] === 0)) throw new Error(model.id + ': quattro appoggi non trovati');
  const C = sum.map((q) => [q[0] / q[2], q[1] / q[2]]);      // [along, across] in unita'
  // avanti: dal manifesto OSDS (flip), poi verifica coi fanali posteriori
  let fwdPos = longX ? !meta.flip : meta.flip;
  {
    let a = 0, n = 0;
    for (const p of parts) if (p.mat.role === 'lamp_rear') for (let k = 0; k < p.P.length; k += 3) { a += longX ? p.P[k] - mid[0] : p.P[k + 2] - mid[2]; n++; }
    if (n > 20) { const rearPos = a / n > 0; if (rearPos === fwdPos) { fwdPos = !fwdPos; console.log('  fanali posteriori: davanti e dietro invertiti'); } }
  }
  const sg = fwdPos ? 1 : -1;
  // nuovo sistema: z = avanti, x = sinistra (= su x avanti), y = su; origine: meta' tra gli assi, a terra
  const aMid = (C[0][0] + C[1][0] + C[2][0] + C[3][0]) / 4;
  const xMid = (C[0][1] + C[1][1] + C[2][1] + C[3][1]) / 4;
  const T = (x, y, z) => {
    const along = (longX ? x - mid[0] : z - mid[2]) - aMid, across = (longX ? z - mid[2] : x - mid[0]) - xMid;
    const fz = along * sg;
    // sinistra = Y x avanti. avanti lungo +X(sg=1): sinistra = -Z ; avanti lungo +Z: sinistra = +X
    const lx = longX ? -across * sg : across * sg;
    return [lx * s, (y - lo[1]) * s, fz * s];
  };
  const TN = (x, y, z) => {
    const along = longX ? x : z, across = longX ? z : x;
    return [longX ? -across * sg : across * sg, y, along * sg];
  };
  for (const p of parts) {
    for (let k = 0; k < p.P.length; k += 3) { const v = T(p.P[k], p.P[k + 1], p.P[k + 2]); p.P[k] = v[0]; p.P[k + 1] = v[1]; p.P[k + 2] = v[2]; }
    for (let k = 0; k < p.N.length; k += 3) { const v = TN(p.N[k], p.N[k + 1], p.N[k + 2]); p.N[k] = v[0]; p.N[k + 1] = v[1]; p.N[k + 2] = v[2]; }
    // se la trasformazione specchia, le facce vanno girate
  }
  const mirrored = (longX ? -1 : 1) * 1 < 0;   // (x,z)->(-z*sg? ...) vedi sotto
  // determinante della mappa (x,z) -> (lx, fz): longX: lx=-z*sg, fz=x*sg -> det = 0*0 - (-sg)(sg) = 1 ; altrimenti lx=x*sg, fz=z*sg -> det = 1
  void mirrored;
  // mozzi
  const hubs = C.map(([along, across]) => {
    const v = T(longX ? along + aMid + mid[0] : across + xMid + mid[0], lo[1], longX ? across + xMid + mid[2] : along + aMid + mid[2]);
    return [v[0], meta.tyreR, v[2]];
  });
  // ordine: FL FR RL RR (anteriori: z > 0; sinistra: x > 0)
  hubs.sort((a, b) => (b[2] > 0) - (a[2] > 0) || b[0] - a[0]);
  // simmetrizza: carreggiata e passo medi
  const zf = (hubs[0][2] + hubs[1][2]) / 2, zr = (hubs[2][2] + hubs[3][2]) / 2;
  const tf = (hubs[0][0] - hubs[1][0]) / 2, tr = (hubs[2][0] - hubs[3][0]) / 2;
  const out = { hubs: [[tf, meta.tyreR, zf], [-tf, meta.tyreR, zf], [tr, meta.tyreR, zr], [-tr, meta.tyreR, zr]], scale: s };
  // ingombri
  lo = [1e9, 1e9, 1e9]; hi = [-1e9, -1e9, -1e9];
  for (const p of parts) if (p.mat.role !== 'hidden') for (let k = 0; k < p.P.length; k += 3) for (let a = 0; a < 3; a++) { lo[a] = Math.min(lo[a], p.P[k + a]); hi[a] = Math.max(hi[a], p.P[k + a]); }
  out.box = { lo, hi };
  return out;
}

// --- divisione dei triangoli: scocca / ruota k
function split(parts, fr, R) {
  const body = new Map();   // mat -> {P,N,U,I}
  const wheels = [new Map(), new Map(), new Map(), new Map()];
  const add = (dst, p, a, b, c) => {
    let g = dst.get(p.mat);
    if (!g) dst.set(p.mat, g = { mat: p.mat, P: [], N: [], U: [], I: [], map: new Map(), src: null });
    if (g.src !== p) { g.src = p; g.map = new Map(); }
    for (const v of [a, b, c]) {
      let j = g.map.get(v);
      if (j === undefined) {
        j = g.P.length / 3; g.map.set(v, j);
        g.P.push(p.P[v * 3], p.P[v * 3 + 1], p.P[v * 3 + 2]); g.N.push(p.N[v * 3], p.N[v * 3 + 1], p.N[v * 3 + 2]);
        if (p.U) g.U.push(p.U[v * 2], p.U[v * 2 + 1]); else g.U.push(0, 0);
      }
      g.I.push(j);
    }
  };
  const inWheel = (p, v, k) => {
    const h = fr.hubs[k], x = p.P[v * 3], y = p.P[v * 3 + 1], z = p.P[v * 3 + 2];
    const out = (x - h[0]) * Math.sign(h[0]);
    if (out > 0.2 || out < -0.32) return false;
    return Math.hypot(y - h[1], z - h[2]) <= R * 1.04;
  };
  let nw = 0, nb = 0;
  for (const p of parts) {
    if (p.mat.role === 'hidden') continue;
    const canWheel = !['paint', 'glass', 'lamp_front', 'lamp_rear', 'lamp_amber'].includes(p.mat.role);
    for (let t = 0; t < p.I.length; t += 3) {
      const a = p.I[t], b = p.I[t + 1], c = p.I[t + 2];
      let w = -1;
      if (canWheel) for (let k = 0; k < 4; k++) if (inWheel(p, a, k) && inWheel(p, b, k) && inWheel(p, c, k)) { w = k; break; }
      if (w >= 0) { add(wheels[w], p, a, b, c); nw++; } else { add(body, p, a, b, c); nb++; }
    }
  }
  const fin = (m) => [...m.values()].map((g) => ({ mat: g.mat, P: new Float32Array(g.P), N: new Float32Array(g.N), U: new Float32Array(g.U), I: new Uint32Array(g.I) }));
  console.log(`  triangoli: scocca ${nb}, ruote ${nw}`);
  return { body: fin(body), wheels: wheels.map(fin) };
}

// --- saldatura e semplificazione
function weld(g) {
  const key = new Map(), remap = new Uint32Array(g.P.length / 3);
  const P = [], N = [], U = [];
  for (let v = 0; v < remap.length; v++) {
    const k = [g.P[v * 3], g.P[v * 3 + 1], g.P[v * 3 + 2]].map((x) => Math.round(x * 2e4)).join(',') + '|' + [g.N[v * 3], g.N[v * 3 + 1], g.N[v * 3 + 2]].map((x) => Math.round(x * 50)).join(',') + '|' + Math.round(g.U[v * 2] * 2048) + ',' + Math.round(g.U[v * 2 + 1] * 2048);
    let j = key.get(k);
    if (j === undefined) { j = P.length / 3; key.set(k, j); P.push(g.P[v * 3], g.P[v * 3 + 1], g.P[v * 3 + 2]); N.push(g.N[v * 3], g.N[v * 3 + 1], g.N[v * 3 + 2]); U.push(g.U[v * 2], g.U[v * 2 + 1]); }
    remap[v] = j;
  }
  const I = new Uint32Array(g.I.length);
  for (let k = 0; k < I.length; k++) I[k] = remap[g.I[k]];
  return { ...g, P: new Float32Array(P), N: new Float32Array(N), U: new Float32Array(U), I };
}
function compact(g, I) {
  const map = new Int32Array(g.P.length / 3).fill(-1), P = [], N = [], U = [], C = [];
  const J = new Uint32Array(I.length);
  for (let k = 0; k < I.length; k++) {
    const v = I[k];
    if (map[v] < 0) { map[v] = P.length / 3; P.push(g.P[v * 3], g.P[v * 3 + 1], g.P[v * 3 + 2]); N.push(g.N[v * 3], g.N[v * 3 + 1], g.N[v * 3 + 2]); U.push(g.U[v * 2], g.U[v * 2 + 1]); if (g.C) C.push(g.C[v * 3], g.C[v * 3 + 1], g.C[v * 3 + 2]); }
    J[k] = map[v];
  }
  return { ...g, P: new Float32Array(P), N: new Float32Array(N), U: new Float32Array(U), C: g.C ? new Float32Array(C) : null, I: J };
}
function simplify(g, ratio, err, sloppy = false) {
  const w = weld(g);
  if (ratio >= 1 || w.I.length < 300) return compact(w, w.I);
  const target = Math.max(36, Math.floor(w.I.length * ratio / 3) * 3);
  let I;
  if (sloppy) [I] = MeshoptSimplifier.simplify(w.I, w.P, 3, target, err * 3, []);
  else [I] = MeshoptSimplifier.simplify(w.I, w.P, 3, target, err, []);
  if (I.length > target * 1.3) [I] = MeshoptSimplifier.simplify(I, w.P, 3, target, err * 5, []);
  return compact(w, I);
}
const tris = (gs) => gs.reduce((a, g) => a + g.I.length / 3, 0);

// fonde gruppi diversi in uno solo, con i colori nei vertici
function mergeColoured(groups, colourOf) {
  const P = [], N = [], U = [], C = [], I = [];
  for (const g of groups) {
    const base = P.length / 3;
    for (let v = 0; v < g.P.length / 3; v++) {
      P.push(g.P[v * 3], g.P[v * 3 + 1], g.P[v * 3 + 2]); N.push(g.N[v * 3], g.N[v * 3 + 1], g.N[v * 3 + 2]); U.push(0, 0);
      const c = colourOf(g, v); C.push(c[0], c[1], c[2]);
    }
    for (const i of g.I) I.push(base + i);
  }
  return { P: new Float32Array(P), N: new Float32Array(N), U: new Float32Array(U), C: new Float32Array(C), I: new Uint32Array(I) };
}
function vertexColour(g, v) {
  const m = g.mat;
  if (m.role === 'lamp_front') return [0.9, 0.9, 0.82];
  if (m.role === 'lamp_rear') return [0.75, 0.03, 0.02];
  if (m.role === 'lamp_amber') return [0.9, 0.35, 0.02];
  let c = [m.color[0], m.color[1], m.color[2]];
  if (m.sample) { const t = m.sample(g.U[v * 2], g.U[v * 2 + 1]); c = [c[0] * t[0], c[1] * t[1], c[2] * t[2]]; }
  // il metallo (cromature, cerchi) senza riflessi sembrerebbe bianco gesso: lo si scurisce
  if (m.metal > 0.5) { const k = 0.35 + 0.25 * (1 - m.metal); c = c.map((x) => x * k); }
  return c;
}
// Semplificazione per il traffico: i vertici si saldano per sola posizione (gli spigoli vivi e i
// cambi di colore separano i vertici e bloccano la semplificazione), poi le normali si ricalcolano
// con uno spigolo vivo oltre i 40 gradi. Il colore segue il primo vertice saldato.
function simplifyColoured(g, ratio, err) {
  const key = new Map(), remap = new Uint32Array(g.P.length / 3), P = [], C = [];
  for (let v = 0; v < remap.length; v++) {
    const k = Math.round(g.P[v * 3] * 1e4) + ',' + Math.round(g.P[v * 3 + 1] * 1e4) + ',' + Math.round(g.P[v * 3 + 2] * 1e4);
    let j = key.get(k);
    if (j === undefined) { j = P.length / 3; key.set(k, j); P.push(g.P[v * 3], g.P[v * 3 + 1], g.P[v * 3 + 2]); if (g.C) C.push(g.C[v * 3], g.C[v * 3 + 1], g.C[v * 3 + 2]); }
    remap[v] = j;
  }
  let I = new Uint32Array(g.I.length);
  for (let k = 0; k < I.length; k++) I[k] = remap[g.I[k]];
  const Pf = new Float32Array(P);
  // via i triangoli degeneri della saldatura
  I = I.filter((_, k, a) => { const t = k - (k % 3); return a[t] !== a[t + 1] && a[t + 1] !== a[t + 2] && a[t] !== a[t + 2]; });
  if (ratio < 1) {
    const target = Math.max(36, Math.floor(I.length * ratio / 3) * 3);
    [I] = MeshoptSimplifier.simplify(I, Pf, 3, target, err, []);
    if (I.length > target * 1.3) [I] = MeshoptSimplifier.simplify(I, Pf, 3, target, 1, []);
  }
  return creaseNormals(Pf, g.C ? new Float32Array(C) : null, I, 40);
}
function creaseNormals(P, C, I, deg) {
  const nt = I.length / 3, FN = new Float32Array(nt * 3);
  const byV = new Map();
  for (let t = 0; t < nt; t++) {
    const a = I[t * 3] * 3, b = I[t * 3 + 1] * 3, c = I[t * 3 + 2] * 3;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    FN[t * 3] = uy * vz - uz * vy; FN[t * 3 + 1] = uz * vx - ux * vz; FN[t * 3 + 2] = ux * vy - uy * vx;
    for (let k = 0; k < 3; k++) { const v = I[t * 3 + k]; let l = byV.get(v); if (!l) byV.set(v, l = []); l.push(t); }
  }
  const cs = Math.cos(deg * Math.PI / 180);
  const unit = (t) => { const l = Math.hypot(FN[t * 3], FN[t * 3 + 1], FN[t * 3 + 2]) || 1; return [FN[t * 3] / l, FN[t * 3 + 1] / l, FN[t * 3 + 2] / l]; };
  const out = new Map(), OP = [], ON = [], OC = [], OI = [];
  for (let t = 0; t < nt; t++) {
    const ft = unit(t);
    for (let k = 0; k < 3; k++) {
      const v = I[t * 3 + k];
      let nx = 0, ny = 0, nz = 0;
      for (const s of byV.get(v)) { const fs = unit(s); if (fs[0] * ft[0] + fs[1] * ft[1] + fs[2] * ft[2] >= cs) { nx += FN[s * 3]; ny += FN[s * 3 + 1]; nz += FN[s * 3 + 2]; } }
      const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
      const key = v + ':' + Math.round(nx * 30) + ',' + Math.round(ny * 30) + ',' + Math.round(nz * 30);
      let j = out.get(key);
      if (j === undefined) { j = OP.length / 3; out.set(key, j); OP.push(P[v * 3], P[v * 3 + 1], P[v * 3 + 2]); ON.push(nx, ny, nz); if (C) OC.push(C[v * 3], C[v * 3 + 1], C[v * 3 + 2]); }
      OI.push(j);
    }
  }
  return { P: new Float32Array(OP), N: new Float32Array(ON), U: new Float32Array(OP.length / 3 * 2), C: C ? new Float32Array(OC) : null, I: new Uint32Array(OI) };
}

// --- texture ridotte
async function encodeTex(t, max, alpha) {
  if (!t) return null;
  let im = sharp(t.bytes);
  const md = await im.metadata();
  const w = Math.min(max, md.width || max), h = Math.min(max, md.height || max);
  im = im.resize(w, h, { fit: 'fill' });
  if (alpha) return { bytes: await im.png({ compressionLevel: 9, palette: false }).toBuffer(), mime: 'image/png' };
  return { bytes: await im.jpeg({ quality: 82, mozjpeg: true }).toBuffer(), mime: 'image/jpeg' };
}

// --- scrittura del GLB
async function writeCar(model, meta, fr, hero, heroWheels, fleet, body0) {
  const doc = new Document();
  const buf = doc.createBuffer();
  const scene = doc.createScene('scene');
  const rootN = doc.createNode('car');
  scene.addChild(rootN);
  const texCache = new Map();
  const tex = async (t, max, alpha, key) => {
    if (!t) return null;
    const k = key + ':' + max + ':' + alpha;
    if (texCache.has(t.bytes) && texCache.get(t.bytes)[k]) return texCache.get(t.bytes)[k];
    const e = await encodeTex(t, max, alpha);
    const T = doc.createTexture(key).setImage(e.bytes).setMimeType(e.mime);
    if (!texCache.has(t.bytes)) texCache.set(t.bytes, {});
    texCache.get(t.bytes)[k] = T;
    return T;
  };
  const matCache = new Map();
  const material = async (m) => {
    if (matCache.has(m)) return matCache.get(m);
    const M = doc.createMaterial(m.name).setBaseColorFactor(m.color).setMetallicFactor(m.metal).setRoughnessFactor(m.rough)
      .setAlphaMode(m.alpha).setAlphaCutoff(m.cutoff).setDoubleSided(m.double).setEmissiveFactor(m.emissive);
    M.setExtras({ role: m.role });
    const alpha = m.alpha !== 'OPAQUE';
    const big = model.id === 'accord' || model.id === 'mustang' ? 2048 : 1024;
    if (m.tex.base) M.setBaseColorTexture(await tex(m.tex.base, big, alpha, 'base'));
    if (m.tex.normal) M.setNormalTexture(await tex(m.tex.normal, 512, false, 'normal'));
    if (m.tex.mr) M.setMetallicRoughnessTexture(await tex(m.tex.mr, 512, false, 'mr'));
    if (m.tex.emissive) M.setEmissiveTexture(await tex(m.tex.emissive, 512, false, 'emi'));
    matCache.set(m, M);
    return M;
  };
  const acc = (arr, type) => doc.createAccessor().setArray(arr).setType(type).setBuffer(buf);
  const prim = (g, M) => {
    const p = doc.createPrimitive().setAttribute('POSITION', acc(g.P, 'VEC3')).setAttribute('NORMAL', acc(g.N, 'VEC3'));
    if (g.U && M && M.getBaseColorTexture && (M.getBaseColorTexture() || M.getNormalTexture() || M.getEmissiveTexture() || M.getMetallicRoughnessTexture())) p.setAttribute('TEXCOORD_0', acc(g.U, 'VEC2'));
    if (g.C) p.setAttribute('COLOR_0', acc(g.C, 'VEC3'));
    const nv = g.P.length / 3;
    p.setIndices(acc(nv < 65536 ? Uint16Array.from(g.I) : g.I, 'SCALAR'));
    if (M) p.setMaterial(M);
    return p;
  };
  // auto del giocatore: scocca per materiali + 4 perni ruota
  if (hero) {
  const heroN = doc.createNode('hero'); rootN.addChild(heroN);
  const bodyMesh = doc.createMesh('body');
  for (const g of hero) if (g.I.length) bodyMesh.addPrimitive(prim(g, await material(g.mat)));
  heroN.addChild(doc.createNode('body').setMesh(bodyMesh));
  for (let k = 0; k < 4; k++) {
    const n = ['wheelFL', 'wheelFR', 'wheelRL', 'wheelRR'][k];
    const node = doc.createNode(n).setTranslation(fr.hubs[k]);
    const mesh = doc.createMesh(n);
    for (const g of heroWheels[k]) if (g.I.length) mesh.addPrimitive(prim(g, await material(g.mat)));
    node.setMesh(mesh);
    heroN.addChild(node);
  }
  }
  // traffico: due livelli, ognuno con vernice / finiture / vetri / fanali / ruota
  if (fleet) for (const [name, set] of [['fleetHi', fleet.hi], ['fleetLo', fleet.lo]]) {
    const n = doc.createNode(name); rootN.addChild(n);
    for (const part of ['paint', 'trim', 'glass', 'lamps', 'wheel']) {
      const g = set[part];
      if (!g || !g.I.length) continue;
      n.addChild(doc.createNode(part).setMesh(doc.createMesh(part).addPrimitive(prim(g, null))));
    }
  }
  const [zf, zr] = [fr.hubs[0][2], fr.hubs[2][2]];
  rootN.setExtras({
    id: model.id, length: +(fr.box.hi[2] - fr.box.lo[2]).toFixed(3), width: +(fr.box.hi[0] - fr.box.lo[0]).toFixed(3), height: +fr.box.hi[1].toFixed(3),
    noseZ: +fr.box.hi[2].toFixed(3), tailZ: +fr.box.lo[2].toFixed(3), halfW: +fr.box.hi[0].toFixed(3),
    wheelR: meta.tyreR, wheelX: +((fr.hubs[0][0] + fr.hubs[2][0]) / 2).toFixed(3), wheelZ: [+zf.toFixed(3), +zr.toFixed(3)],
    paintable: body0.some((g) => g.mat.role === 'paint'),
  });
  const io = new NodeIO();
  const glb = await io.writeBinary(doc);
  return glb;
}

// --- dati di guida dalla scheda OSDS
function specFrom(model, car) {
  if (!car) return null;
  const tq = car.torque_curve || [];
  let kw = 0, nm = 0;
  for (const [rpm, t] of tq) { kw = Math.max(kw, (t * rpm) / 9549); nm = Math.max(nm, t); }
  return {
    name: (car.make ? car.make + ' ' : '') + (car.name || ''), mass: car.mass_kg, kw: Math.round(kw), nm: Math.round(nm),
    rpmMax: Math.round(car.fuel_cut_rpm || car.max_gear_rpm || 6500), gears: car.gears, final: car.final_drive,
    drive: car.layout === 'rwd' ? 'R' : car.layout === 'awd' || car.layout === '4wd' ? 'A' : 'F',
    cda: car.drag_area_m2, wb: car.wheelbase_m, mu: car.tmeasy_peak_mu_y || 0.9, transmission: car.transmission,
    tyre: { width: car.tire_width_m, aspect: car.tire_aspect_ratio, rim: car.rim_in },
  };
}

await MeshoptSimplifier.ready;
const index = fs.existsSync(path.join(OUT, 'index.json')) ? JSON.parse(fs.readFileSync(path.join(OUT, 'index.json'), 'utf8')) : { cars: {} };
for (const model of MODELS) {
  if (ONLY.length && !ONLY.includes(model.id)) continue;
  console.log('==', model.id);
  const man = manifest.find((m) => m.id === model.dir) || licenceInfo(model);
  const car = model.car ? JSON.parse(fs.readFileSync(path.join(OSDS, 'data/cars', model.car + '.json'), 'utf8')) : null;
  const tyreR = model.tyreR || (car ? +(car.rim_in * 0.0254 / 2 + car.tire_width_m * car.tire_aspect_ratio).toFixed(3) : 0.33);
  const meta = { length: man.length_m, flip: man.flip, tyreR };
  const { parts } = await readModel(model);
  const fr = frame(model, parts, meta);
  console.log('  ruote', fr.hubs.map((h) => h.map((v) => v.toFixed(2)).join('/')).join('  '), 'ingombro', fr.box.lo.map((v) => v.toFixed(2)), fr.box.hi.map((v) => v.toFixed(2)));
  const { body, wheels } = split(parts, fr, tyreR);
  // auto del giocatore: al massimo ~70.000 triangoli (ruote comprese)
  const all = tris(body) + wheels.reduce((a, w) => a + tris(w), 0);
  const ratio = Math.min(1, 70000 / all);
  const hero = body.map((g) => simplify(g, ratio, 0.002));
  // ruote: la stessa geometria riportata al mozzo
  const heroWheels = wheels.map((w, k) => w.map((g) => {
    const s = simplify(g, Math.min(1, ratio * 1.2), 0.002);
    const h = fr.hubs[k];
    for (let v = 0; v < s.P.length; v += 3) { s.P[v] -= h[0]; s.P[v + 1] -= h[1]; s.P[v + 2] -= h[2]; }
    return s;
  }));
  console.log(`  giocatore: ${Math.round(all)} -> ${Math.round(tris(hero) + heroWheels.reduce((a, w) => a + tris(w), 0))} triangoli`);
  // traffico: vernice (colore per istanza), finiture e fanali (colori nei vertici), vetri, una ruota
  const pick = (gs, f) => gs.filter((g) => f(g.mat.role));
  const noInt = (r) => r !== 'interior';
  const mk = (budget, sloppy, err) => {
    const paintG = pick(body, (r) => r === 'paint');
    const trimG = pick(body, (r) => !['paint', 'glass', 'lamp_front', 'lamp_rear', 'lamp_amber'].includes(r) && noInt(r));
    const glassG = pick(body, (r) => r === 'glass');
    const lampG = pick(body, (r) => r.startsWith('lamp'));
    const tot = tris(paintG) + tris(trimG) + tris(glassG) + tris(lampG);
    const r = Math.min(1, budget / tot);
    const one = (gs, rr) => gs.length ? simplifyColoured(mergePlain(gs), rr, err) : null;
    const col = (gs, rr) => gs.length ? simplifyColoured(mergeColoured(gs, vertexColour), rr, err) : null;
    const wFL = wheels[0];
    const h = fr.hubs[0];
    let wheel = wFL.length ? col(wFL, Math.min(1, (budget / 10) / Math.max(1, tris(wFL)))) : null;
    if (wheel) for (let v = 0; v < wheel.P.length; v += 3) { wheel.P[v] -= h[0]; wheel.P[v + 1] -= h[1]; wheel.P[v + 2] -= h[2]; }
    return { paint: one(paintG, r), trim: col(trimG, r), glass: one(glassG, r), lamps: col(lampG, Math.min(1, r * 2)), wheel };
  };
  const fleet = { hi: mk(7000, false, 0.02), lo: mk(1100, true, 0.08) };
  const ft = (s) => Object.values(s).reduce((a, g) => a + (g ? g.I.length / 3 : 0), 0);
  console.log(`  traffico: vicino ${ft(fleet.hi)} triangoli, lontano ${ft(fleet.lo)}`);
  // due file: il giocatore (con le texture, si carica quando serve) e il traffico (leggero, sempre)
  for (const [suffix, h, hw, f] of [['', hero, heroWheels, null], ['_fleet', null, null, fleet]]) {
    const glb = await writeCar(model, meta, fr, h, hw, f, hero);
    const gz = zlib.gzipSync(Buffer.from(glb), { level: 9 });
    fs.writeFileSync(path.join(OUT, model.id + suffix + '.js'), `BDS_DATA('car_${model.id}${suffix}','bin','${gz.toString('base64')}');\n`);
    console.log(`  ${suffix || 'giocatore'}: GLB ${(glb.byteLength / 1e6).toFixed(2)} MB, compresso ${(gz.length / 1e6).toFixed(2)} MB`);
  }
  index.cars[model.id] = {
    title: man.title, author: man.author, author_url: man.author_url, source_url: man.source_url, licence: man.licence,
    spec: specFrom(model, car), tyreR, wheelbase: +(fr.hubs[0][2] - fr.hubs[2][2]).toFixed(3),
    length: +(fr.box.hi[2] - fr.box.lo[2]).toFixed(3), width: +(fr.box.hi[0] - fr.box.lo[0]).toFixed(3), height: +fr.box.hi[1].toFixed(3),
  };
  fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify(index, null, 1));
  // gli stessi dati per il gioco (il gioco non legge JSON da disco: modulo incluso nel pacchetto)
  fs.writeFileSync(path.join(OUT, '..', '..', 'src', 'realcars-data.js'), '// Generato da tools/import-cars.mjs: modelli delle auto vere, crediti e schede tecniche (OSDS).\nexport const REAL_INDEX = ' + JSON.stringify(index.cars, null, 1) + ';\n');
}

// modelli fuori dal manifesto OSDS: titolo e autore dal license.txt di Sketchfab
function licenceInfo(model) {
  const t = fs.readFileSync(path.join(OSDS, 'data/art/traffic', model.dir, 'license.txt'), 'utf8');
  const get = (k) => (t.match(new RegExp('\\* ' + k + ':\\s*(.+)')) || [])[1] || '';
  const au = get('author'), m = au.match(/^(.*?)\s*\((.*)\)$/);
  return { length_m: model.length, flip: !!model.flip, title: get('title'), author: m ? m[1] : au, author_url: m ? m[2] : '', source_url: get('source'), licence: 'CC BY 4.0' };
}
function mergePlain(gs) {
  const P = [], N = [], U = [], I = [];
  for (const g of gs) { const b = P.length / 3; for (const x of g.P) P.push(x); for (const x of g.N) N.push(x); for (let v = 0; v < g.P.length / 3; v++) U.push(0, 0); for (const i of g.I) I.push(b + i); }
  return { P: new Float32Array(P), N: new Float32Array(N), U: new Float32Array(U), I: new Uint32Array(I) };
}
function weldColoured(g) {
  const key = new Map(), remap = new Uint32Array(g.P.length / 3), P = [], N = [], U = [], C = [];
  for (let v = 0; v < remap.length; v++) {
    const k = [g.P[v * 3], g.P[v * 3 + 1], g.P[v * 3 + 2]].map((x) => Math.round(x * 2e4)).join(',') + '|' + [g.N[v * 3], g.N[v * 3 + 1], g.N[v * 3 + 2]].map((x) => Math.round(x * 20)).join(',') + '|' + [g.C[v * 3], g.C[v * 3 + 1], g.C[v * 3 + 2]].map((x) => Math.round(x * 40)).join(',');
    let j = key.get(k);
    if (j === undefined) { j = P.length / 3; key.set(k, j); P.push(g.P[v * 3], g.P[v * 3 + 1], g.P[v * 3 + 2]); N.push(g.N[v * 3], g.N[v * 3 + 1], g.N[v * 3 + 2]); U.push(0, 0); C.push(g.C[v * 3], g.C[v * 3 + 1], g.C[v * 3 + 2]); }
    remap[v] = j;
  }
  const I = new Uint32Array(g.I.length);
  for (let k = 0; k < I.length; k++) I[k] = remap[g.I[k]];
  return { P: new Float32Array(P), N: new Float32Array(N), U: new Float32Array(U), C: new Float32Array(C), I };
}
