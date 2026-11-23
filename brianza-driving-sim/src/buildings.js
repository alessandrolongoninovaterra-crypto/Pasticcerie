import * as THREE from 'three';
import { GeoBuilder, hash } from './geo.js';
import { loadData } from './data.js';

// Dettaglio fotografico delle facciate: foto CC0 di Poly Haven (polyhaven.com) ridotte a rilievo in
// scala di grigi (media 128, tools/facade-detail.mjs) e moltiplicate sull'intonaco disegnato, in
// coordinate del mondo (si ripetono ogni ~2-3 m qualunque sia la facciata). Il colore resta quello
// dell'edificio; finestre, persiane e vetrine (zone scure dell'immagine della facciata) non lo prendono.
const DETAIL = {
  plaster: { scale: 2.2, amt: 0.55 },     // intonaco tinteggiato (painted_plaster_wall)
  concrete: { scale: 2.7, amt: 0.6 },     // cemento a casseri (concrete_wall_008)
  stone: { scale: 3.0, amt: 0.75 },       // blocchi di arenaria (large_sandstone_blocks_01)
  weathered: { scale: 1.6, amt: 0.6 },    // intonaco vissuto (grey_plaster_02)
};
const DETAIL_OF = { res: 'plaster', villa: 'plaster', pal: 'plaster', condo: 'plaster', shop: 'plaster', modern: 'concrete', ind: 'concrete', glass: 'concrete', church: 'stone', plain: 'weathered' };
function detailTextures() {
  const out = {};
  for (const k of Object.keys(DETAIL)) {
    // finche' la foto non e' caricata: grigio medio (nessun effetto)
    const c = document.createElement('canvas'); c.width = c.height = 4;
    const x = c.getContext('2d'); x.fillStyle = '#808080'; x.fillRect(0, 0, 4, 4);
    const t = new THREE.Texture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; t.colorSpace = THREE.NoColorSpace; t.needsUpdate = true;
    out[k] = t;
    loadData('tex_' + k, 'data/tex/' + k + '.js').then((img) => { t.image = img; t.needsUpdate = true; }).catch(() => {});
  }
  return out;
}
function addDetail(mat, tex, d) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uDetail = { value: tex };
    sh.uniforms.uDetailK = { value: new THREE.Vector2(1 / d.scale, d.amt) };
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vDW;\nvarying vec3 vDN;')
      .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nvDN = normalize(mat3(modelMatrix) * objectNormal);')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvDW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vDW;\nvarying vec3 vDN;\nuniform sampler2D uDetail;\nuniform vec2 uDetailK;')
      .replace('#include <map_fragment>', `#include <map_fragment>
        {
          vec3 dn = normalize(vDN);
          vec2 duv = abs(dn.y) < 0.6 ? vec2(dot(vDW.xz, vec2(-dn.z, dn.x)), vDW.y) : vDW.xz;
          float dd = texture2D(uDetail, duv * uDetailK.x).r * 2.0;
          // solo dove la facciata e' muro (chiaro nell'immagine), sfuma con la distanza
          float wallM = smoothstep(0.55, 0.85, dot(sampledDiffuseColor.rgb, vec3(0.3333)));
          float fade = clamp(1.6 - distance(cameraPosition, vDW) / 160.0, 0.0, 1.0);
          diffuseColor.rgb *= mix(1.0, dd, uDetailK.y * wallM * fade);
        }`);
  };
  mat.customProgramCacheKey = () => 'facade-detail';
}

// Edifici reali OSM estrusi con altezza da height / building:levels, o stimata
// per tipologia. Intonaci e tetti in coppi tipici della Brianza.
const PLASTER = ['#eadcbc', '#e9cf9f', '#dcab6e', '#f1e8d6', '#ddb7a2', '#cdbb9f', '#f0dc9e', '#c4bcae', '#e3c08e', '#d9c7a6', '#efe2c4', '#c98f6a'];
const INDUSTRIAL = ['#c6c6c0', '#a8aeb0', '#d4cfc2', '#b9b4a6', '#9aa3a6', '#cfd2cf'];
const ROOF_TILE = ['#b8694a', '#a9603f', '#c27752', '#9e5b43', '#b5704f', '#a46a52', '#8f5d4c'];
const ROOF_FLAT = ['#8d8a84', '#7d7b77', '#9a968e', '#6f6e6a'];
const CHURCH = ['#e8dcc4', '#d9c09a', '#c98f6a', '#b9a58a', '#efe6d2', '#a95b43', '#ddd2bd'];   // intonaci, pietra, mattone
const tmpC = new THREE.Color();

// parallelepipedo orientato (asse lungo dx,dz) in un GeoBuilder a colori per vertice
function boxV(g, cx, y0, cz, sx, sy, sz, dx, dz, c) {
  const hx = sx / 2, hz = sz / 2, ex = [dx * hx, dz * hx], ez = [-dz * hz, dx * hz];
  const P = (i, j, k) => [cx + ex[0] * i + ez[0] * k, y0 + j * sy, cz + ex[1] * i + ez[1] * k];
  const F = [[P(-1, 1, -1), P(-1, 1, 1), P(1, 1, 1), P(1, 1, -1), 1], [P(-1, 0, 1), P(1, 0, 1), P(1, 1, 1), P(-1, 1, 1), 0.8],
    [P(1, 0, -1), P(-1, 0, -1), P(-1, 1, -1), P(1, 1, -1), 0.8], [P(1, 0, 1), P(1, 0, -1), P(1, 1, -1), P(1, 1, 1), 0.7], [P(-1, 0, -1), P(-1, 0, 1), P(-1, 1, 1), P(-1, 1, -1), 0.7]];
  for (const [a, b, d, e, sh] of F) {
    const v = [a, b, d, e].map((p) => g.v(p[0], p[1], p[2], c.r * sh, c.g * sh, c.b * sh));
    g.quad(v[0], v[1], v[2], v[3]);   // il materiale e' a doppia faccia: una sola faccia, normali giuste
  }
}

// cilindro verticale (colonna) con normali lisce, raggio r0 alla base e r1 in cima
function cylV(g, x, y0, z, h, r0, r1, c, seg = 12) {
  const A = [], B = [];
  for (let k = 0; k < seg; k++) {
    const a = k / seg * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a);
    A.push(g.v(x + ca * r0, y0, z + sa * r0, c.r * 0.92, c.g * 0.92, c.b * 0.92));
    B.push(g.v(x + ca * r1, y0 + h, z + sa * r1, c.r, c.g, c.b));
  }
  for (let k = 0; k < seg; k++) { const k2 = (k + 1) % seg; g.quad(A[k], B[k], B[k2], A[k2]); }
}

// Facciate: ogni immagine ha 8 x 8 campate da 3 m. La riga in basso e' il PIANO TERRA (portoni,
// garage, ingressi), quelle sopra i piani tipo: l'edificio le usa dal basso, con un numero intero
// di piani, cosi' le finestre sono allineate sia alla gronda sia a terra.
// Stili: res (casa con persiane), condo (condominio con balconi), modern (palazzina recente),
// ind (capannone / commerciale), plain (muro cieco: chiese, torri, box).
const hashN = (n) => { n = Math.imul(n ^ 0x9e3779b9, 0x85ebca6b); n ^= n >>> 13; n = Math.imul(n, 0xc2b2ae35); n ^= n >>> 16; return (n >>> 0) / 4294967296; };
function makeFacadeTextures() {
  const S = 512, bay = S / 8;
  const mk = () => { const c = document.createElement('canvas'); c.width = c.height = S; return c; };
  const cv = { res: mk(), condo: mk(), modern: mk(), ind: mk(), plain: mk(), church: mk(), glass: mk(), shop: mk(), villa: mk(), pal: mk(), emiR: mk(), emiC: mk(), emiM: mk(), emiI: mk(), emiCh: mk(), emiG: mk(), emiS: mk(), emiV: mk(), emiP: mk() };
  const x2 = Object.fromEntries(Object.entries(cv).map(([k, c]) => [k, c.getContext('2d')]));
  for (const k of ['res', 'condo', 'modern', 'ind', 'plain', 'villa', 'pal']) {
    const c = x2[k]; c.fillStyle = '#ffffff'; c.fillRect(0, 0, S, S);
    // intonaco leggermente irregolare
    for (let i = 0; i < 2500; i++) { c.fillStyle = `rgba(0,0,0,${Math.random() * 0.05})`; c.fillRect(Math.random() * S, Math.random() * S, 3 + Math.random() * 8, 3 + Math.random() * 8); }
  }
  for (const k of ['emiR', 'emiC', 'emiM', 'emiI', 'emiCh', 'emiG', 'emiV', 'emiP']) { x2[k].fillStyle = '#000'; x2[k].fillRect(0, 0, S, S); }
  // chiesa: tutta l'altezza del muro e' una sola immagine (vedi buildGen): conci di pietra, lesene
  // a campate alterne, finestroni ad arco con vetrate scure, oculo in alto, zoccolo
  {
    const c = x2.church, e = x2.emiCh;
    c.fillStyle = '#ffffff'; c.fillRect(0, 0, S, S);
    for (let y = 0; y < S; y += 16) { c.fillStyle = 'rgba(0,0,0,0.06)'; c.fillRect(0, y, S, 1.5); for (let x = (y / 16) % 2 ? 0 : 24; x < S; x += 48) c.fillRect(x, y, 1.5, 16); }
    for (let bx = 0; bx < 8; bx++) {
      const x0 = bx * bay;
      if (bx % 2 === 1) {      // lesena / contrafforte
        c.fillStyle = 'rgba(0,0,0,0.12)'; c.fillRect(x0 + bay * 0.3, 0, bay * 0.4, S);
        c.fillStyle = 'rgba(255,255,255,0.35)'; c.fillRect(x0 + bay * 0.3, 0, 3, S);
        continue;
      }
      const wx = x0 + bay * 0.24, ww = bay * 0.52, wy = S * 0.3, wh = S * 0.38;
      c.fillStyle = 'rgba(0,0,0,0.18)'; c.beginPath(); c.roundRect(wx - 4, wy - 4, ww + 8, wh + 8, [ww / 2 + 4, ww / 2 + 4, 0, 0]); c.fill();
      c.fillStyle = '#2b3140'; c.beginPath(); c.roundRect(wx, wy, ww, wh, [ww / 2, ww / 2, 0, 0]); c.fill();
      // vetrata: piombi e qualche tessera colorata
      for (let k = 0; k < 14; k++) { c.fillStyle = ['#5a3a5e', '#3d4f7a', '#7a4a32', '#3f6650'][k % 4]; c.fillRect(wx + 3 + (k % 3) * (ww - 6) / 3, wy + ww / 2 + Math.floor(k / 3) * (wh - ww / 2) / 5, (ww - 6) / 3 - 2, (wh - ww / 2) / 5 - 2); }
      c.fillStyle = 'rgba(200,200,200,0.5)'; c.fillRect(wx + ww / 2 - 1, wy + 4, 2, wh - 4);
      e.fillStyle = '#806040'; e.beginPath(); e.roundRect(wx, wy, ww, wh, [ww / 2, ww / 2, 0, 0]); e.fill();
      // oculo
      c.fillStyle = 'rgba(0,0,0,0.2)'; c.beginPath(); c.arc(x0 + bay / 2, S * 0.17, bay * 0.2, 0, 7); c.fill();
      c.fillStyle = '#2f3542'; c.beginPath(); c.arc(x0 + bay / 2, S * 0.17, bay * 0.15, 0, 7); c.fill();
    }
    c.fillStyle = 'rgba(60,50,40,0.25)'; c.fillRect(0, S * 0.9, S, S * 0.1);        // zoccolo
    c.fillStyle = 'rgba(0,0,0,0.15)'; c.fillRect(0, S * 0.04, S, 6);                 // cornice sotto la gronda
  }
  // grattacielo: facciata continua in vetro, montanti ogni 1,5 m, fascia marcapiano per piano
  {
    const c = x2.glass, e = x2.emiG;
    for (let fy = 0; fy < 8; fy++) for (let bx = 0; bx < 16; bx++) {
      const x0 = bx * bay / 2, y0 = fy * bay;
      const t = 0.85 + Math.random() * 0.15;
      c.fillStyle = `rgb(${Math.round(92 * t)},${Math.round(118 * t)},${Math.round(138 * t)})`; c.fillRect(x0, y0, bay / 2, bay);
      c.fillStyle = 'rgba(255,255,255,0.12)'; c.fillRect(x0 + 2, y0 + 4, bay / 4, bay * 0.6);
      c.fillStyle = '#2c3237'; c.fillRect(x0, y0, 2, bay);
      e.fillStyle = Math.random() < 0.35 ? (Math.random() < 0.5 ? '#e8f0ff' : '#fff0c8') : '#000'; e.fillRect(x0 + 2, y0 + bay * 0.15, bay / 2 - 4, bay * 0.7);
    }
    for (let fy = 0; fy < 8; fy++) { c.fillStyle = '#3a4146'; c.fillRect(0, fy * bay, S, bay * 0.12); }
  }
  const shutters = ['#3f6b3a', '#4d5f2f', '#6b4a2b', '#355e4e', '#5a3d27'];
  const lit = (e, x, y, w, h, p = 0.35) => { e.fillStyle = Math.random() < p ? (Math.random() < 0.5 ? '#ffd890' : '#fff0c0') : '#000'; e.fillRect(x, y, w, h); };
  const glass = (c, x, y, w, h) => { c.fillStyle = '#2f3438'; c.fillRect(x, y, w, h); c.fillStyle = '#5c6a72'; c.fillRect(x + 2, y + 2, w / 2 - 3, h - 4); c.fillRect(x + w / 2 + 1, y + 2, w / 2 - 3, h - 4); };
  for (let fy = 0; fy < 8; fy++) for (let bx = 0; bx < 8; bx++) {
    const x0 = bx * bay, y0 = fy * bay, ground = fy === 7;
    const { res: r, condo: c, modern: m, ind: n } = x2;
    // marcapiano: una linea sottile tra un piano e l'altro
    for (const q of [r, c]) { q.fillStyle = 'rgba(0,0,0,0.07)'; q.fillRect(x0, y0, bay, 2); }
    if (ground) {
      // --- piano terra
      // casa: portone ogni 4 campate, finestre con inferriata altrove, zoccolo scuro
      r.fillStyle = 'rgba(60,50,40,0.28)'; r.fillRect(x0, y0 + bay * 0.8, bay, bay * 0.2);
      if (bx % 4 === 1) {
        r.fillStyle = '#d8d2c4'; r.fillRect(x0 + bay * 0.26, y0 + bay * 0.2, bay * 0.48, bay * 0.8);
        r.fillStyle = shutters[(bx + 2) % shutters.length]; r.beginPath(); r.roundRect(x0 + bay * 0.3, y0 + bay * 0.24, bay * 0.4, bay * 0.76, [bay * 0.2, bay * 0.2, 0, 0]); r.fill();
        r.fillStyle = 'rgba(0,0,0,0.3)'; r.fillRect(x0 + bay * 0.495, y0 + bay * 0.3, 1.5, bay * 0.7);
      } else {
        const ww = bay * 0.3, wh = bay * 0.4, wx = x0 + (bay - ww) / 2, wy = y0 + bay * 0.26;
        r.fillStyle = '#d8d2c4'; r.fillRect(wx - 3, wy - 3, ww + 6, wh + 7); glass(r, wx, wy, ww, wh);
        r.strokeStyle = 'rgba(20,20,20,0.7)'; r.lineWidth = 1; for (let i = 1; i < 5; i++) { r.beginPath(); r.moveTo(wx + ww * i / 5, wy); r.lineTo(wx + ww * i / 5, wy + wh); r.stroke(); }
        lit(x2.emiR, wx, wy, ww, wh, 0.25);
      }
      // condominio: ingresso vetrato ogni 4 campate, serrande dei box altrove
      c.fillStyle = 'rgba(70,70,70,0.3)'; c.fillRect(x0, y0, bay, bay);
      if (bx % 4 === 2) { c.fillStyle = '#39424a'; c.fillRect(x0 + bay * 0.2, y0 + bay * 0.22, bay * 0.6, bay * 0.78); c.fillStyle = '#7d8f9c'; c.fillRect(x0 + bay * 0.24, y0 + bay * 0.26, bay * 0.24, bay * 0.74); c.fillRect(x0 + bay * 0.52, y0 + bay * 0.26, bay * 0.24, bay * 0.74); lit(x2.emiC, x0 + bay * 0.24, y0 + bay * 0.26, bay * 0.52, bay * 0.7, 0.8); }
      else { c.fillStyle = '#b9bcbd'; c.fillRect(x0 + bay * 0.12, y0 + bay * 0.3, bay * 0.76, bay * 0.7); c.fillStyle = 'rgba(0,0,0,0.18)'; for (let i = 0; i < 9; i++) c.fillRect(x0 + bay * 0.12, y0 + bay * (0.33 + i * 0.075), bay * 0.76, 1.5); }
      // palazzina moderna: vetrata continua
      m.fillStyle = '#3d4850'; m.fillRect(x0 + 3, y0 + bay * 0.18, bay - 6, bay * 0.82); m.fillStyle = '#8fa3b0'; m.fillRect(x0 + 6, y0 + bay * 0.22, bay - 12, bay * 0.74);
      lit(x2.emiM, x0 + 6, y0 + bay * 0.22, bay - 12, bay * 0.74, 0.5);
      // capannone: portone carrabile ogni 4 campate, zoccolo
      n.fillStyle = 'rgba(0,0,0,0.12)'; n.fillRect(x0, y0 + bay * 0.75, bay, bay * 0.25);
      if (bx % 4 === 0) { n.fillStyle = '#6d7479'; n.fillRect(x0 + bay * 0.08, y0 + bay * 0.08, bay * 0.84, bay * 0.92); n.fillStyle = 'rgba(0,0,0,0.2)'; for (let i = 0; i < 8; i++) n.fillRect(x0 + bay * 0.08, y0 + bay * (0.12 + i * 0.11), bay * 0.84, 1.5); }
      continue;
    }
    // --- piani tipo
    // casa: finestra con persiane
    const ww = bay * 0.34, wh = bay * 0.52, wx = x0 + (bay - ww) / 2, wy = y0 + bay * 0.22;
    r.fillStyle = '#d8d2c4'; r.fillRect(wx - 3, wy - 3, ww + 6, wh + 7);
    glass(r, wx, wy, ww, wh);
    const open = Math.random();
    r.fillStyle = shutters[(bx * 7 + fy * 3) % shutters.length];
    if (open < 0.6) { r.fillRect(wx - ww / 2 - 2, wy, ww / 2, wh); r.fillRect(wx + ww + 2, wy, ww / 2, wh); }
    else if (open < 0.85) { r.fillRect(wx, wy, ww, wh); }
    r.fillStyle = 'rgba(0,0,0,0.25)';
    for (let k = 0; k < 6; k++) r.fillRect(wx - ww / 2 - 2, wy + k * wh / 6, ww * 2 + 4, 1);
    if (open < 0.6 || open >= 0.85) lit(x2.emiR, wx, wy, ww, wh);
    // condominio: portafinestra e balcone con parapetto (a campate alterne finestra semplice)
    if ((bx + fy) % 3 !== 0) {
      const dw = bay * 0.4, dh = bay * 0.66, dx = x0 + (bay - dw) / 2, dy = y0 + bay * 0.2;
      c.fillStyle = '#e4e0d6'; c.fillRect(dx - 3, dy - 3, dw + 6, dh + 3); glass(c, dx, dy, dw, dh);
      lit(x2.emiC, dx, dy, dw, dh);
      c.fillStyle = 'rgba(0,0,0,0.3)'; c.fillRect(x0 + 3, y0 + bay * 0.88, bay - 6, 4);          // ombra sotto la soletta
      c.fillStyle = '#c9c6bd'; c.fillRect(x0 + 2, y0 + bay * 0.84, bay - 4, 4);                  // soletta
      c.fillStyle = 'rgba(40,44,48,0.75)'; c.fillRect(x0 + 2, y0 + bay * 0.56, bay - 4, 2.5);     // corrimano
      for (let i = 0; i <= 10; i++) c.fillRect(x0 + 2 + (bay - 6) * i / 10, y0 + bay * 0.56, 1.5, bay * 0.28);
    } else {
      const w2 = bay * 0.34, h2 = bay * 0.44, wx2 = x0 + (bay - w2) / 2, wy2 = y0 + bay * 0.26;
      c.fillStyle = '#e4e0d6'; c.fillRect(wx2 - 3, wy2 - 3, w2 + 6, h2 + 7); glass(c, wx2, wy2, w2, h2); lit(x2.emiC, wx2, wy2, w2, h2);
      c.fillStyle = '#8f9499'; c.fillRect(wx2, wy2, w2, h2 * (Math.random() < 0.5 ? 0.35 : 0.1));   // tapparella
    }
    // moderna: finestre larghe a nastro, senza persiane
    m.fillStyle = '#3d4850'; m.fillRect(x0 + bay * 0.1, y0 + bay * 0.24, bay * 0.8, bay * 0.5);
    m.fillStyle = '#7f95a3'; m.fillRect(x0 + bay * 0.13, y0 + bay * 0.27, bay * 0.35, bay * 0.44); m.fillRect(x0 + bay * 0.52, y0 + bay * 0.27, bay * 0.35, bay * 0.44);
    m.fillStyle = 'rgba(0,0,0,0.1)'; m.fillRect(x0, y0 + bay * 0.82, bay, 2);
    lit(x2.emiM, x0 + bay * 0.13, y0 + bay * 0.27, bay * 0.74, bay * 0.44, 0.4);
    // industriale / commerciale: nastro di finestre e pannelli
    n.fillStyle = 'rgba(0,0,0,0.08)'; n.fillRect(x0, y0, 2, bay);
    if (fy % 2 === 0) {
      n.fillStyle = '#4b5a63'; n.fillRect(x0 + 3, y0 + bay * 0.3, bay - 6, bay * 0.3);
      x2.emiI.fillStyle = Math.random() < 0.25 ? '#e8f0ff' : '#000'; x2.emiI.fillRect(x0 + 3, y0 + bay * 0.3, bay - 6, bay * 0.3);
    }
  }
  // villetta: finestre ampie con persiane in legno e davanzale in pietra, una portafinestra con
  // balconcino ogni tre campate; al piano terra garage, portoncino con pensilina e zoccolo in pietra
  {
    const c = x2.villa, e = x2.emiV, SH = ['#5b3a24', '#3f5d3a', '#6e4a2c', '#7a7a72', '#4a5560'];
    for (let fy = 0; fy < 8; fy++) for (let bx = 0; bx < 8; bx++) {
      const x0 = bx * bay, y0 = fy * bay, sh = SH[(bx >> 2) % SH.length];
      if (fy === 7) {
        c.fillStyle = 'rgba(90,80,70,0.35)'; c.fillRect(x0, y0 + bay * 0.82, bay, bay * 0.18);           // zoccolo in pietra
        c.fillStyle = 'rgba(255,255,255,0.18)'; for (let k = 0; k < 4; k++) c.fillRect(x0 + k * bay / 4, y0 + bay * 0.82, 1, bay * 0.18);
        if (bx % 4 === 0) {        // garage sezionale
          c.fillStyle = '#d9d4c8'; c.fillRect(x0 + bay * 0.06, y0 + bay * 0.18, bay * 0.88, bay * 0.82);
          c.fillStyle = bx % 8 ? '#8a6a4a' : '#9aa0a3'; c.fillRect(x0 + bay * 0.1, y0 + bay * 0.22, bay * 0.8, bay * 0.78);
          c.fillStyle = 'rgba(0,0,0,0.18)'; for (let k = 1; k < 6; k++) c.fillRect(x0 + bay * 0.1, y0 + bay * (0.22 + k * 0.13), bay * 0.8, 1.5);
        } else if (bx % 4 === 2) { // portoncino con pensilina
          c.fillStyle = 'rgba(0,0,0,0.25)'; c.fillRect(x0 + bay * 0.2, y0 + bay * 0.14, bay * 0.6, bay * 0.06);
          c.fillStyle = '#e6e0d2'; c.fillRect(x0 + bay * 0.28, y0 + bay * 0.22, bay * 0.44, bay * 0.78);
          c.fillStyle = '#5a3a22'; c.fillRect(x0 + bay * 0.32, y0 + bay * 0.26, bay * 0.36, bay * 0.74);
          c.fillStyle = 'rgba(255,255,255,0.12)'; for (let k = 0; k < 3; k++) c.fillRect(x0 + bay * 0.35, y0 + bay * (0.3 + k * 0.22), bay * 0.3, bay * 0.16);
          c.fillStyle = '#c9b27a'; c.fillRect(x0 + bay * 0.62, y0 + bay * 0.62, 3, 3);
          e.fillStyle = '#ffd890'; e.fillRect(x0 + bay * 0.45, y0 + bay * 0.16, bay * 0.1, bay * 0.04);
        } else {                   // finestra con persiane e inferriata
          const wx = x0 + bay * 0.3, ww = bay * 0.4, wy = y0 + bay * 0.28, wh = bay * 0.46;
          c.fillStyle = '#e8e2d4'; c.fillRect(wx - 3, wy - 3, ww + 6, wh + 8); glass(c, wx, wy, ww, wh);
          c.fillStyle = sh; c.fillRect(wx - ww / 2 - 2, wy, ww / 2, wh); c.fillRect(wx + ww + 2, wy, ww / 2, wh);
          c.fillStyle = 'rgba(0,0,0,0.25)'; for (let k = 0; k < 7; k++) { c.fillRect(wx - ww / 2 - 2, wy + k * wh / 7, ww / 2, 1); c.fillRect(wx + ww + 2, wy + k * wh / 7, ww / 2, 1); }
          lit(e, wx, wy, ww, wh, 0.35);
        }
        continue;
      }
      // piani: davanzale in pietra, persiane in legno; portafinestra con balconcino ogni tre campate
      const door = bx % 3 === 1;
      const ww = bay * (door ? 0.36 : 0.4), wh = bay * (door ? 0.68 : 0.48), wx = x0 + (bay - ww) / 2, wy = y0 + bay * (door ? 0.2 : 0.24);
      c.fillStyle = '#ebe5d8'; c.fillRect(wx - 3, wy - 3, ww + 6, wh + 3);
      glass(c, wx, wy, ww, wh);
      const open = hashN(bx * 13 + fy * 7);
      c.fillStyle = sh;
      if (open < 0.65) { c.fillRect(wx - ww / 2 - 2, wy, ww / 2, wh); c.fillRect(wx + ww + 2, wy, ww / 2, wh); }
      else c.fillRect(wx, wy, ww, wh);
      c.fillStyle = 'rgba(0,0,0,0.25)'; for (let k = 0; k < 8; k++) c.fillRect(wx - ww / 2 - 2, wy + k * wh / 8, ww * 2 + 4, 1);
      c.fillStyle = '#d7d0c0'; c.fillRect(wx - 5, wy + wh, ww + 10, 4);                                   // davanzale
      if (door) {                  // balconcino in ferro battuto
        c.fillStyle = 'rgba(0,0,0,0.3)'; c.fillRect(x0 + bay * 0.18, y0 + bay * 0.9, bay * 0.64, 3);
        c.fillStyle = 'rgba(30,30,30,0.85)'; c.fillRect(x0 + bay * 0.18, y0 + bay * 0.62, bay * 0.64, 2);
        for (let k = 0; k <= 8; k++) c.fillRect(x0 + bay * 0.18 + k * bay * 0.08, y0 + bay * 0.62, 1.5, bay * 0.28);
      }
      if (open < 0.65 || open >= 0.9) lit(e, wx, wy, ww, wh, 0.35);
      c.fillStyle = 'rgba(0,0,0,0.06)'; c.fillRect(x0, y0, bay, 2);
    }
  }
  // palazzina: finestre con cassonetto e tapparella, logge con parapetto alternate, marcapiano;
  // al piano terra androne vetrato con pensilina, box e zoccolo rivestito
  {
    const c = x2.pal, e = x2.emiP;
    for (let fy = 0; fy < 8; fy++) for (let bx = 0; bx < 8; bx++) {
      const x0 = bx * bay, y0 = fy * bay;
      c.fillStyle = 'rgba(0,0,0,0.09)'; c.fillRect(x0, y0 + bay - 4, bay, 4);                              // marcapiano
      if (fy === 7) {
        c.fillStyle = 'rgba(120,110,100,0.35)'; c.fillRect(x0, y0 + bay * 0.4, bay, bay * 0.6);              // rivestimento
        if (bx % 8 === 3) {
          c.fillStyle = 'rgba(0,0,0,0.3)'; c.fillRect(x0 + bay * 0.05, y0 + bay * 0.12, bay * 0.9, bay * 0.07);
          c.fillStyle = '#3a4248'; c.fillRect(x0 + bay * 0.15, y0 + bay * 0.22, bay * 0.7, bay * 0.78);
          c.fillStyle = '#8fa3ad'; c.fillRect(x0 + bay * 0.19, y0 + bay * 0.26, bay * 0.3, bay * 0.74); c.fillRect(x0 + bay * 0.51, y0 + bay * 0.26, bay * 0.3, bay * 0.74);
          e.fillStyle = '#ffe4b0'; e.fillRect(x0 + bay * 0.19, y0 + bay * 0.26, bay * 0.62, bay * 0.74);
        } else if (bx % 2 === 0) {
          c.fillStyle = '#a9adae'; c.fillRect(x0 + bay * 0.1, y0 + bay * 0.3, bay * 0.8, bay * 0.7);
          c.fillStyle = 'rgba(0,0,0,0.2)'; for (let k = 0; k < 9; k++) c.fillRect(x0 + bay * 0.1, y0 + bay * (0.33 + k * 0.075), bay * 0.8, 1.5);
        } else {
          const wx = x0 + bay * 0.25, ww = bay * 0.5, wy = y0 + bay * 0.24, wh = bay * 0.36;
          glass(c, wx, wy, ww, wh); c.strokeStyle = 'rgba(20,20,20,0.7)'; for (let k = 1; k < 6; k++) { c.beginPath(); c.moveTo(wx + ww * k / 6, wy); c.lineTo(wx + ww * k / 6, wy + wh); c.stroke(); }
          lit(e, wx, wy, ww, wh, 0.2);
        }
        continue;
      }
      if (bx % 2 === 1) {          // loggia con portafinestra e parapetto pieno
        c.fillStyle = 'rgba(0,0,0,0.28)'; c.fillRect(x0 + 3, y0 + bay * 0.14, bay - 6, bay * 0.78);
        const dx = x0 + bay * 0.3, dw = bay * 0.4; glass(c, dx, y0 + bay * 0.2, dw, bay * 0.66); lit(e, dx, y0 + bay * 0.2, dw, bay * 0.66, 0.4);
        c.fillStyle = hashN(fy * 5 + bx) < 0.5 ? '#d8d4ca' : 'rgba(150,170,180,0.9)'; c.fillRect(x0 + 3, y0 + bay * 0.58, bay - 6, bay * 0.34);
        c.fillStyle = 'rgba(0,0,0,0.2)'; c.fillRect(x0 + 3, y0 + bay * 0.58, bay - 6, 2);
      } else {                     // finestra con cassonetto e tapparella
        const wx = x0 + bay * 0.27, ww = bay * 0.46, wy = y0 + bay * 0.26, wh = bay * 0.44;
        c.fillStyle = '#e2ded4'; c.fillRect(wx - 3, wy - 7, ww + 6, wh + 11); glass(c, wx, wy, ww, wh);
        const down = hashN(fy * 11 + bx * 3);
        c.fillStyle = '#9a9c98'; c.fillRect(wx, wy, ww, wh * (down < 0.4 ? 0.12 : down < 0.75 ? 0.45 : 0.95));
        c.fillStyle = 'rgba(0,0,0,0.15)'; for (let k = 0; k < 6; k++) c.fillRect(wx, wy + k * wh * 0.08, ww, 1);
        if (down < 0.75) lit(e, wx, wy + wh * 0.45, ww, wh * 0.55, 0.4);
      }
    }
  }
  // vetrine del piano terra: 8 campate da 3 m per 4 varianti (righe dall'alto): negozio, bar e
  // ristorante, farmacia, banca e servizi. Insegna in alto, vetrina con l'interno, porta ogni 4 campate.
  {
    const SH = 256, rows = 4, rh = SH / rows;
    cv.shop.height = SH; cv.emiS.height = SH;
    const c = x2.shop, e = x2.emiS;
    c.fillStyle = '#ffffff'; c.fillRect(0, 0, S, SH); e.fillStyle = '#000'; e.fillRect(0, 0, S, SH);
    const SIGN = [['#7a1f2a', '#1f3f6b', '#2e5a32', '#6b4a1f', '#3b3b3b', '#8a2f6a', '#205a5a', '#b5651d'], ['#5b2a17', '#1d3b2a', '#6e1f1f', '#2b2b2b'], ['#1f7a3a'], ['#1d3557', '#3b4652']];
    const FRAME = ['#2b2d2f', '#4a2f1d', '#3a3f45', '#6d6e70'];
    for (let r = 0; r < rows; r++) for (let bx = 0; bx < 8; bx++) {
      const x0 = bx * bay, y0 = r * rh, door = bx % 4 === 1;
      // muro attorno (prende il colore dell'edificio) e zoccolo
      c.fillStyle = 'rgba(0,0,0,0.10)'; c.fillRect(x0, y0 + rh * 0.9, bay, rh * 0.1);
      // insegna
      const sc = SIGN[r][(bx >> 1) % SIGN[r].length];
      c.fillStyle = sc; c.fillRect(x0 + 1, y0 + rh * 0.06, bay - 2, rh * 0.17);
      if (r === 2 && bx % 4 === 0) {   // croce verde della farmacia
        e.fillStyle = '#30ff70'; e.fillRect(x0 + bay * 0.44, y0 + rh * 0.07, bay * 0.12, rh * 0.15); e.fillRect(x0 + bay * 0.36, y0 + rh * 0.115, bay * 0.28, rh * 0.06);
        c.fillStyle = '#9dffb8'; c.fillRect(x0 + bay * 0.44, y0 + rh * 0.07, bay * 0.12, rh * 0.15); c.fillRect(x0 + bay * 0.36, y0 + rh * 0.115, bay * 0.28, rh * 0.06);
      } else {                          // scritta: lettere chiare
        c.fillStyle = 'rgba(255,248,230,0.85)'; e.fillStyle = r === 1 ? '#ffd27a' : '#fff4dc';
        for (let k = 0; k < 5; k++) { const lx = x0 + bay * (0.14 + k * 0.15), lw = bay * 0.09; c.fillRect(lx, y0 + rh * 0.1, lw, rh * 0.09); e.fillRect(lx, y0 + rh * 0.1, lw, rh * 0.09); }
      }
      // vetrina o porta
      const fr = FRAME[r], wx = x0 + bay * 0.06, ww = bay * 0.88, wy = y0 + rh * 0.28, wh = rh * 0.62;
      c.fillStyle = fr; c.fillRect(wx, wy, ww, wh);
      if (door) {
        c.fillStyle = '#56656c'; c.fillRect(wx + ww * 0.2, wy + 3, ww * 0.6, wh - 3);
        c.fillStyle = 'rgba(255,255,255,0.18)'; c.fillRect(wx + ww * 0.24, wy + 5, ww * 0.12, wh - 8);
        c.fillStyle = '#c9b27a'; c.fillRect(wx + ww * 0.46, wy + wh * 0.5, 3, 6);
        e.fillStyle = '#c8a060'; e.fillRect(wx + ww * 0.2, wy + 3, ww * 0.6, wh - 3);
      } else {
        const gx = wx + 3, gy = wy + 3, gw = ww - 6, gh = wh - rh * 0.1;
        c.fillStyle = r === 1 ? '#4a3a2c' : r === 3 ? '#4c5961' : '#5d6c74'; c.fillRect(gx, gy, gw, gh);
        // interno: mensole e merce (o tavolini nel bar)
        for (let k = 0; k < 7; k++) {
          c.fillStyle = ['#c0392b', '#e1b12c', '#2f6f9f', '#e8e2d0', '#8e44ad', '#27ae60', '#d35400'][(k + bx * 3 + r) % 7];
          if (r === 1) { c.fillRect(gx + 4 + k * gw / 7, gy + gh * 0.62, gw / 10, 3); c.fillRect(gx + 4 + k * gw / 7 + gw / 26, gy + gh * 0.62, 2, gh * 0.3); }
          else c.fillRect(gx + 3 + k * gw / 7, gy + gh * (k % 2 ? 0.35 : 0.6), gw / 9, gh * 0.18);
        }
        c.fillStyle = 'rgba(255,255,255,0.16)'; c.beginPath(); c.moveTo(gx, gy + gh); c.lineTo(gx + gw * 0.35, gy); c.lineTo(gx + gw * 0.5, gy); c.lineTo(gx + gw * 0.15, gy + gh); c.fill();
        c.fillStyle = fr; c.fillRect(wx, wy + wh - rh * 0.1, ww, rh * 0.1);        // davanzale
        e.fillStyle = r === 3 ? '#b8c8d8' : Math.random() < 0.15 ? '#000' : r === 1 ? '#ffc070' : '#ffe8c0'; e.fillRect(gx, gy, gw, gh);
      }
    }
  }
  const tex = (c) => {
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  };
  return Object.fromEntries(Object.entries(cv).map(([k, c]) => [k, tex(c)]));
}

export class BuildingFactory {
  constructor(terrain) {
    this.terrain = terrain;
    const t = makeFacadeTextures();
    const wall = (map, emi) => new THREE.MeshLambertMaterial({ map, vertexColors: true, emissiveMap: emi, emissive: 0xffffff, emissiveIntensity: 0 });
    this.mats = {
      res: wall(t.res, t.emiR), condo: wall(t.condo, t.emiC), modern: wall(t.modern, t.emiM), ind: wall(t.ind, t.emiI),
      plain: new THREE.MeshLambertMaterial({ map: t.plain, vertexColors: true }),
      church: wall(t.church, t.emiCh), glass: wall(t.glass, t.emiG), shop: wall(t.shop, t.emiS), villa: wall(t.villa, t.emiV), pal: wall(t.pal, t.emiP),
      roof: new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }),
    };
    const det = detailTextures();
    for (const [k, d] of Object.entries(DETAIL_OF)) addDetail(this.mats[k], det[d], DETAIL[d]);
    // tetti a falde: file di coppi (bande lungo le linee di livello della falda), da vicino
    this.mats.roof.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vRW;\nvarying float vRUp;')
        .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nvRUp = abs(normalize(mat3(modelMatrix) * objectNormal).y);')
        .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvRW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vRW;\nvarying float vRUp;')
        .replace('#include <color_fragment>', `#include <color_fragment>
          float pitch = smoothstep(0.995, 0.96, vRUp) * clamp(1.0 - distance(cameraPosition, vRW) / 260.0, 0.0, 1.0);
          float rowsT = 0.84 + 0.16 * smoothstep(0.0, 0.35, fract(vRW.y * 2.6));
          float colsT = 0.94 + 0.06 * step(0.5, fract((vRW.x + vRW.z) * 2.4));
          diffuseColor.rgb *= mix(1.0, rowsT * colsT, pitch);`);
    };
  }

  setNight(f) { for (const k of ['res', 'condo', 'modern', 'glass']) this.mats[k].emissiveIntensity = f * 0.55; this.mats.ind.emissiveIntensity = f * 0.4; this.mats.church.emissiveIntensity = f * 0.3; this.mats.shop.emissiveIntensity = f * 0.95; this.mats.villa.emissiveIntensity = f * 0.5; this.mats.pal.emissiveIntensity = f * 0.55; }

  build(tile, collision, tileKey) {
    const g = this.buildGen(tile, collision, tileKey);
    let r;
    while (!(r = g.next()).done);
    return r.value;
  }

  // costruzione a passi (vedi RoadNetwork.buildTileGen): una pausa ogni 12 edifici
  *buildGen(tile, collision, tileKey) {
    const T = this.terrain;
    const gb = { res: new GeoBuilder(), condo: new GeoBuilder(), modern: new GeoBuilder(), ind: new GeoBuilder(), plain: new GeoBuilder(), church: new GeoBuilder(), glass: new GeoBuilder(), shop: new GeoBuilder(), villa: new GeoBuilder(), pal: new GeoBuilder() };
    // vicini nella tessera: per ogni lato si capisce se e' muro in comune, sotto un portico o su strada
    const nb = this.neighbours(tile.b);
    const roof = new GeoBuilder(true, false);
    // dettagli a livello strada (tende, cornicioni, soffitti e pilastri dei portici): mesh a parte,
    // nascosta sulle tessere lontane (World.tileLod) dove non si distinguono
    const trim = new GeoBuilder(true, false);
    const names = tile.s;
    const labels = [];
    let nDone = 0;
    for (let bi = 0; bi < tile.b.length; bi++) {
      const rec = tile.b[bi];
      if (++nDone % 12 === 0) yield;
      const type = rec[0];
      let H = rec[1] / 10;
      let minH = rec[2] / 10;
      const levels = rec[3], roofShape = rec[4] & 15, portico = (rec[4] & 16) !== 0, shopKind = rec[4] & 32 ? (rec[4] >> 6) & 3 : -1;
      const name = names[rec[5]], colTag = names[rec[6]], roofTag = names[rec[7]];
      const ring = [];
      let x = 0, z = 0;
      for (let i = 8; i < rec.length; i += 2) { x += rec[i]; z += rec[i + 1]; ring.push(x / 10, z / 10); }
      const n = ring.length / 2;
      if (n < 3) continue;
      let area = 0, cx = 0, cz = 0, minT = 1e9, maxT = -1e9;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        area += ring[i * 2] * ring[j * 2 + 1] - ring[j * 2] * ring[i * 2 + 1];
        cx += ring[i * 2]; cz += ring[i * 2 + 1];
        const th = T.height(ring[i * 2], ring[i * 2 + 1]);
        minT = Math.min(minT, th); maxT = Math.max(maxT, th);
      }
      const ccw = area > 0;
      area = Math.abs(area / 2); cx /= n; cz /= n;
      const rnd = hash(Math.floor(ring[0] * 10) * 7919 + Math.floor(ring[1] * 10));
      const rnd2 = hash(Math.floor(ring[1] * 10) * 104729 + 17);
      // altezza
      let kind = type;
      if (kind === 0) kind = area < 45 ? 6 : area > 1800 ? 3 : 2;
      if (!(H > 0)) {
        if (levels > 0) H = levels * 3.1 + 0.6;
        else {
          switch (kind) {
            case 1: H = 6.2 + rnd * 2.5; break;
            case 2: H = area > 500 ? 11 + rnd * 7 : 7 + rnd * 4; break;
            case 3: H = 7.5 + rnd * 4; break;
            case 4: H = 7 + rnd * 5; break;
            case 5: H = 13 + Math.min(10, area / 80); break;
            case 6: H = 2.8 + rnd * 0.8; break;
            case 7: H = 10 + rnd * 4; break;
            case 8: H = 28 + rnd * 12; break;
            case 9: H = 6 + rnd * 2; break;
            default: H = 4 + rnd * 3;
          }
        }
      }
      // volumi sospesi (portici, sottopassaggi, sporti del DBGT): il muro parte dal soffitto
      // una strada carrozzabile passa sotto l'edificio (androne, passaggio, pensilina del distributore):
      // il volume parte dall'alto e sotto si passa
      let passage = false, noCol = false;
      this.curH = H > 0 ? H : 12;
      const cross = !(minH > 2.2) && this.roads ? this.crossedByRoad(ring, n, minT) : null;
      if (cross && cross[1] > 0) noCol = true;              // la carreggiata entra nell'edificio ai bordi: niente ostacolo
      if (cross && cross[0] >= 3 && kind !== 5 && kind !== 8) {
        passage = true;
        minH = H > 7 ? 4.2 : Math.max(2.6, H - 0.6);
        if (H - minH < 0.4) H = minH + 0.6;
      }
      const base = minH > 0 ? minT + minH : minT - 0.6;
      const eave = (minT + maxT) / 2 + H;
      // piani interi: l'altezza di interpiano si adatta (2,7-3,4 m) e le finestre restano allineate
      const floors = Math.max(1, Math.round(H / 3.05));
      // campanile: torre vera o volume alto e stretto dentro una chiesa (il DBGT divide la chiesa in volumi)
      const tower = kind === 8 || (kind === 5 && H > 22 && area < 260 && H > 2 * Math.sqrt(area));
      const church = kind === 5 && !tower;
      let style = (kind === 3 || kind === 4) ? 'ind' : church ? 'church' : (kind === 5 || kind === 6 || kind === 8 || kind === 9 || kind === 10) ? 'plain' : 'res';
      // grattacieli: facciata continua in vetro (Porta Nuova, CityLife, torri per uffici)
      if (H > 38 && area > 250 && !church && !tower && kind !== 9 && (style === 'res' || style === 'ind' || rnd < 0.7)) style = 'glass';
      // tipologia residenziale (il DBGT non ha l'uso: forma, altezza vera e muri in comune)
      //  villetta: isolata, fino a 3 piani; case in linea/a schiera e centri storici: muri in comune
      //  (stile con persiane); palazzina: 3-5 piani isolata; condominio: 6 piani e oltre
      let shared = 0;
      if (style === 'res' && kind <= 2) {
        const sk = this.sideKinds(nb, bi, ring, n, ccw);
        let tot = 0, sh = 0;
        for (let i = 0; i < n; i++) { const j = (i + 1) % n, L = Math.hypot(ring[j * 2] - ring[i * 2], ring[j * 2 + 1] - ring[i * 2 + 1]); tot += L; if (sk[i] === 1) sh += L; }
        shared = tot > 0 ? sh / tot : 0;
        if (floors >= 6 && area > 160) style = rnd2 < 0.75 ? 'condo' : 'modern';
        else if (shared >= 0.45) style = floors >= 4 && area > 300 ? (rnd2 < 0.6 ? 'condo' : 'pal') : 'res';
        else if (floors <= 3 && area <= 320 && area >= 40) style = rnd < 0.12 ? 'modern' : 'villa';
        else if (floors >= 3) style = rnd < 0.2 ? 'modern' : rnd < 0.45 ? 'condo' : 'pal';
        else if (area > 110 && rnd < 0.16) style = 'modern';
      }
      let col;
      if (colTag && /^#?[0-9a-f]{6}$|^[a-z]+$/i.test(colTag)) { try { tmpC.set(colTag); col = tmpC.clone(); } catch (e) { col = null; } }
      if (!col) {
        let hex;
        if (style === 'ind') hex = INDUSTRIAL[Math.floor(rnd2 * INDUSTRIAL.length)];
        else if (style === 'glass') hex = '#e6eef2';
        else if (church) hex = area > 1200 || H > 30 ? '#fbf6ee' : CHURCH[Math.floor(rnd2 * CHURCH.length)];   // le cattedrali in marmo chiaro
        else if (tower) hex = CHURCH[Math.floor(rnd2 * CHURCH.length)];
        else hex = PLASTER[Math.floor(rnd2 * PLASTER.length)];
        col = new THREE.Color(hex);
      }
      col.convertSRGBToLinear();
      const g = gb[style];
      // lati: 0 su strada, 1 muro in comune con un edificio a terra, 2 sotto un portico
      const sides = (shopKind >= 0 || portico) ? this.sideKinds(nb, bi, ring, n, ccw) : null;
      // negozi: il piano terra (una riga di piani) diventa una fila di vetrine
      const shopRow = shopKind >= 0 && minH <= 2.2 && style !== 'church' && style !== 'glass' && floors >= 1 && H >= 3.2;
      const gTop = eave - H + H / floors;
      const sv0 = 1 - (shopKind + 1) / 4, sv1 = 1 - shopKind / 4;
      const sg = gb.shop, tint = 0.92 + rnd * 0.08;
      let per = 0;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const ax = ring[i * 2], az = ring[i * 2 + 1], bx = ring[j * 2], bz = ring[j * 2 + 1];
        const len = Math.hypot(bx - ax, bz - az);
        const u0 = per / 24;
        // allinea le finestre: numero intero di campate per facciata
        const bays = Math.max(1, Math.round(len / 3));
        const ue = u0 + bays / 8;
        // v = 0 al piano di campagna (riga del piano terra), floors/8 alla gronda
        const vTop = style === 'church' ? 1 : floors / 8, vBot = vTop * (base - (eave - H)) / H;
        const shopHere = shopRow && sides[i] !== 1 && len > 1.5;
        if (shopHere) {
          // il muro attorno alle vetrine prende il colore dell'edificio (schiarito: le insegne restano vive)
          const tr = Math.min(1, col.r * 0.5 + 0.5) * tint, tg = Math.min(1, col.g * 0.5 + 0.5) * tint, tb = Math.min(1, col.b * 0.5 + 0.5) * tint;
          const s0 = sg.v(ax, base, az, tr, tg, tb, u0, sv0 - 0.012), s1 = sg.v(ax, gTop, az, tr, tg, tb, u0, sv1);
          const s2 = sg.v(bx, gTop, bz, tr, tg, tb, ue, sv1), s3 = sg.v(bx, base, bz, tr, tg, tb, ue, sv0 - 0.012);
          sg.quad(s0, s1, s2, s3);
          if (sides[i] === 0 && rnd2 < 0.75) this.awnings(trim, ax, az, bx, bz, len, bays, gTop, ccw, rnd + i);
        }
        const y0 = shopHere ? gTop : base, v0 = shopHere ? 1 / 8 : vBot;
        // base dei muri piu' scura (ombra di contatto col suolo)
        const k0 = shopHere ? 1 : 0.78;
        const a = g.v(ax, y0, az, col.r * k0, col.g * k0, col.b * k0, u0, v0);
        const b = g.v(ax, eave, az, col.r, col.g, col.b, u0, vTop);
        const c = g.v(bx, eave, bz, col.r, col.g, col.b, ue, vTop);
        const d = g.v(bx, y0, bz, col.r * k0, col.g * k0, col.b * k0, ue, v0);
        g.quad(a, b, c, d);
        per += len;
      }
      // tetto
      let rc;
      const pitched = (kind === 1 || (kind === 2 && (area < 1400 || levels <= 4)) || church || kind === 9 || (kind === 7 && area < 900) || (kind === 6 && area > 18)) && roofShape !== 1 && style !== 'glass';
      if (roofTag && /^#?[0-9a-f]{6}$|^[a-z]+$/i.test(roofTag)) { try { rc = new THREE.Color(roofTag); } catch (e) { rc = null; } }
      if (!rc) rc = new THREE.Color(church && (area > 1200 || H > 30) ? '#cfc9bd' : pitched ? ROOF_TILE[Math.floor(rnd * ROOF_TILE.length)] : ROOF_FLAT[Math.floor(rnd * ROOF_FLAT.length)]);   // cattedrali: terrazze in marmo
      rc.convertSRGBToLinear();
      this.roof(roof, ring, n, eave, pitched, rc, area, kind, col, rnd2);
      if (tower) this.towerTop(roof, ring, n, eave, col, area, rnd);
      if (church && area > 350 && H > 12) this.pinnacles(roof, ring, n, eave, col, area > 1500 || H > 30);
      if ((style === 'res' || style === 'condo' || style === 'modern' || style === 'pal') && floors >= 3) this.cornice(trim, ring, n, eave, col);
      if (minH > 2.2 || passage) {
        // sotto si passa: soffitto visto dal basso e, nei portici, pilastri (sono loro l'ostacolo)
        this.ceiling(trim, ring, n, base, col);
        if (portico) this.pillars(trim, ring, n, minT, base, col, collision, tileKey, sides);
      } else if (collision && !noCol && !(cross && cross[0] > 0)) { const co = collision.addPolygon(tileKey, Float32Array.from(ring), eave + (pitched ? 3 : 1), false, minT - 0.6); if (co) co.src = 'edificio ' + type; }
      if (name && (kind === 5 || kind === 8 || type === 7)) labels.push({ name, x: cx, z: cz, y: eave + 4 });
    }
    const group = new THREE.Group();
    const glassRoof = this.glassRoofs(tile);
    if (glassRoof) group.add(glassRoof);
    for (const k of ['res', 'condo', 'modern', 'ind', 'plain', 'church', 'glass', 'shop', 'villa', 'pal']) if (!gb[k].empty) { yield; group.add(yield* gb[k].meshGen(this.mats[k], true)); }
    yield;
    if (!roof.empty) group.add(yield* roof.meshGen(this.mats.roof, true));
    if (!trim.empty) { yield; const m = yield* trim.meshGen(this.mats.roof, true); m.userData.detail = true; group.add(m); }
    return { group, labels };
  }

  // quanto una via carrozzabile (non in galleria) entra nella pianta alla quota del suolo:
  // [campioni dell'asse dentro (ogni metro), campioni del bordo della corsia dentro]
  crossedByRoad(ring, n, gy) {
    const R = this.roads;
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
    for (let i = 0; i < n; i++) { x0 = Math.min(x0, ring[i * 2]); x1 = Math.max(x1, ring[i * 2]); z0 = Math.min(z0, ring[i * 2 + 1]); z1 = Math.max(z1, ring[i * 2 + 1]); }
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, rad = Math.hypot(x1 - x0, z1 - z0) / 2;
    let inside = 0, edge = 0;
    const inRing = (x, z) => {
      let ins = false;
      for (let i = 0, j = n - 1; i < n; j = i++) {
        const xi = ring[i * 2], zi = ring[i * 2 + 1], xj = ring[j * 2], zj = ring[j * 2 + 1];
        if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) ins = !ins;
      }
      return ins;
    };
    R.segmentsNear(cx, cz, rad + 8, (wi, k) => {
      const w = R.ways[wi];
      if (!w.drivable || w.cls > 8) return;      // gallerie comprese: quelle profonde le scarta il controllo di quota
      const a = w.nodes[k], b = w.nodes[k + 1], ax = R.nx[a], az = R.nz[a], bx = R.nx[b], bz = R.nz[b];
      const L = Math.hypot(bx - ax, bz - az) || 1, m = Math.max(1, Math.ceil(L));
      const ox = (bz - az) / L * (w.width / 2 - 1.0), oz = -(bx - ax) / L * (w.width / 2 - 1.0);
      for (let s = 0; s <= m; s++) {
        const x = ax + (bx - ax) * s / m, z = az + (bz - az) * s / m;
        if (x < x0 - 8 || x > x1 + 8 || z < z0 - 8 || z > z1 + 8) continue;
        const c = inRing(x, z), e = w.width > 3 && (inRing(x + ox, z + oz) || inRing(x - ox, z - oz));
        if (!(c || e)) continue;
        const dh = R.heightOn(wi, k, s / m, x, z) - gy;
        if (Math.abs(dh) < 3) { if (c) inside++; else edge++; } else if (dh > 0 && dh < this.curH + 1) edge++;   // passa in quota dentro l'edificio
      }
    });
    return inside || edge ? [inside, edge] : null;
  }

  // soffitto di un volume sospeso, visto dal basso
  ceiling(g, ring, n, y, col) {
    const pts = [];
    for (let i = 0; i < n; i++) pts.push(new THREE.Vector2(ring[i * 2], ring[i * 2 + 1]));
    let tris;
    try { tris = THREE.ShapeUtils.triangulateShape(pts, []); } catch (e) { return; }
    const c = col.clone().multiplyScalar(0.62);
    const v = pts.map((p) => g.v(p.x, y, p.y, c.r, c.g, c.b));
    for (const [a, b, d] of tris) g.tri(v[a], v[b], v[d]);
  }

  // pilastri del portico: ai vertici e ogni ~4 m lungo i lati aperti (non contro l'edificio dietro),
  // con capitello e archi a tutto sesto tra un pilastro e l'altro
  pillars(g, ring, n, y0, y1, col, collision, tileKey, sides) {
    const c = col.clone().multiplyScalar(0.95), cap = col.clone().multiplyScalar(1.05), arc = col.clone().multiplyScalar(0.9);
    const done = new Set();
    const post = (x, z, dx, dz) => {
      const key = Math.round(x * 5) * 100003 + Math.round(z * 5);
      if (done.has(key)) return;
      done.add(key);
      // un pilastro non sta in mezzo alla carreggiata (portici disegnati sopra vie strette)
      if (this.roads && this.roads.inCarriageway(x, z, this.terrain)) return;
      // colonna tonda: plinto, fusto rastremato, echino svasato e abaco
      boxV(g, x, y0 - 0.3, z, 0.78, 0.5, 0.78, dx, dz, cap);
      cylV(g, x, y0 + 0.2, z, y1 - y0 - 0.65, 0.31, 0.27, c);
      cylV(g, x, y1 - 0.45, z, 0.22, 0.27, 0.4, cap);
      boxV(g, x, y1 - 0.23, z, 0.88, 0.23, 0.88, dx, dz, cap);
      if (collision) collision.addCircle(tileKey, x, z, 0.4, y1);
    };
    const AS = 7;
    for (let i = 0; i < n; i++) {
      if (sides && sides[i] === 1) continue;     // lato contro l'edificio dietro il portico
      const j = (i + 1) % n;
      const ax = ring[i * 2], az = ring[i * 2 + 1], bx = ring[j * 2], bz = ring[j * 2 + 1];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 0.5) continue;
      const dx = (bx - ax) / L, dz = (bz - az) / L, m = Math.max(1, Math.round(L / 4.2));
      for (let k = 0; k <= m; k++) post(ax + (bx - ax) * k / m, az + (bz - az) * k / m, dx, dz);
      // archi: pannello tra l'intradosso a semicerchio e il soffitto, sui due lati
      const span = L / m, inner = span - 0.85, rise = Math.min(inner / 2, (y1 - y0) * 0.38, 2.6);
      if (inner < 1 || rise < 0.4) continue;
      const yc = y1 - 0.3 - rise;
      for (let k = 0; k < m; k++) {
        const mx = ax + (bx - ax) * (k + 0.5) / m, mz = az + (bz - az) * (k + 0.5) / m;
        let prev = null;
        for (let q = 0; q <= AS; q++) {
          const t = Math.PI * q / AS, off = -Math.cos(t) * inner / 2, y = yc + Math.sin(t) * rise;
          const px = mx + dx * off, pz = mz + dz * off;
          const lo = g.v(px, y, pz, arc.r, arc.g, arc.b), hi = g.v(px, y1, pz, arc.r, arc.g, arc.b);
          if (prev) g.quad(prev[0], lo, hi, prev[1]);
          prev = [lo, hi];
        }
        // piedritti fino all'imposta dell'arco
        for (const sgn of [-1, 1]) {
          const px = mx + dx * sgn * inner / 2, pz = mz + dz * sgn * inner / 2, ex = mx + dx * sgn * span / 2, ez = mz + dz * sgn * span / 2;
          const a0 = g.v(px, yc, pz, arc.r, arc.g, arc.b), a1 = g.v(px, y1, pz, arc.r, arc.g, arc.b), a2 = g.v(ex, y1, ez, arc.r, arc.g, arc.b), a3 = g.v(ex, yc, ez, arc.r, arc.g, arc.b);
          g.quad(a0, a1, a2, a3);
        }
      }
    }
  }

  // tende da sole sopra le vetrine su strada: una per campata, inclinata, con la mantovana
  awnings(g, ax, az, bx, bz, len, bays, y, ccw, seed) {
    const AW = ['#7a1f1f', '#1f4d2b', '#24365e', '#8a6d1f', '#4d4d4d', '#9a4a22', '#5b2a4a', '#2c5e5e'];
    const h0 = hash(Math.floor(seed * 1000) + 7), col = new THREE.Color(AW[Math.floor(h0 * AW.length)]).convertSRGBToLinear();
    const dark = col.clone().multiplyScalar(0.7);
    // la tela vista da sotto e' in controluce: lato inferiore a parte, piu' chiaro (da sotto arriva poca luce)
    const und = new THREE.Color(Math.min(1, col.r * 2.6 + 0.08), Math.min(1, col.g * 2.6 + 0.08), Math.min(1, col.b * 2.6 + 0.08));
    const dx = (bx - ax) / len, dz = (bz - az) / len, s = ccw ? 1 : -1, nx = s * dz, nz = -s * dx;
    const D = 0.95, drop = 0.45, top = y - 0.12;
    for (let k = 0; k < bays; k++) {
      if (hash(Math.floor(seed * 1000) + k * 31) < 0.3) continue;
      const t0 = (k + 0.08) / bays, t1 = (k + 0.92) / bays;
      const p0 = [ax + (bx - ax) * t0, az + (bz - az) * t0], p1 = [ax + (bx - ax) * t1, az + (bz - az) * t1];
      const a = g.v(p0[0] + nx * 0.05, top, p0[1] + nz * 0.05, col.r, col.g, col.b), b = g.v(p1[0] + nx * 0.05, top, p1[1] + nz * 0.05, col.r, col.g, col.b);
      const c = g.v(p1[0] + nx * D, top - drop, p1[1] + nz * D, col.r, col.g, col.b), d = g.v(p0[0] + nx * D, top - drop, p0[1] + nz * D, col.r, col.g, col.b);
      g.quad(a, b, c, d);
      const ua = g.v(p0[0] + nx * 0.05, top - 0.03, p0[1] + nz * 0.05, und.r, und.g, und.b), ub = g.v(p1[0] + nx * 0.05, top - 0.03, p1[1] + nz * 0.05, und.r, und.g, und.b);
      const uc = g.v(p1[0] + nx * D, top - drop - 0.03, p1[1] + nz * D, und.r, und.g, und.b), ud = g.v(p0[0] + nx * D, top - drop - 0.03, p0[1] + nz * D, und.r, und.g, und.b);
      g.quad(ua, ud, uc, ub);
      const e = g.v(p0[0] + nx * D, top - drop - 0.25, p0[1] + nz * D, dark.r, dark.g, dark.b), f = g.v(p1[0] + nx * D, top - drop - 0.25, p1[1] + nz * D, dark.r, dark.g, dark.b);
      const c2 = g.v(p1[0] + nx * D, top - drop, p1[1] + nz * D, dark.r, dark.g, dark.b), d2 = g.v(p0[0] + nx * D, top - drop, p0[1] + nz * D, dark.r, dark.g, dark.b);
      g.quad(d2, c2, f, e);
    }
  }

  // anelli e riquadri degli edifici della tessera su una griglia di 16 m
  neighbours(recs) {
    const C = 16, grid = new Map(), rings = [], lifted = [], box = [];
    recs.forEach((rec, bi) => {
      const r = []; let x = 0, z = 0, x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9;
      for (let i = 8; i < rec.length; i += 2) { x += rec[i]; z += rec[i + 1]; const X = x / 10, Z = z / 10; r.push(X, Z); x0 = Math.min(x0, X); x1 = Math.max(x1, X); z0 = Math.min(z0, Z); z1 = Math.max(z1, Z); }
      rings.push(r); lifted.push(rec[2] / 10 > 2.2); box.push([x0, z0, x1, z1]);
      for (let i = Math.floor(x0 / C); i <= Math.floor(x1 / C); i++) for (let j = Math.floor(z0 / C); j <= Math.floor(z1 / C); j++) {
        const k = i * 100003 + j; let l = grid.get(k); if (!l) grid.set(k, l = []); l.push(bi);
      }
    });
    return { C, grid, rings, lifted, box };
  }

  // tipo di ogni lato: 0 su strada (libero), 1 contro un edificio a terra, 2 sotto un volume sospeso (portico)
  sideKinds(nb, bi, ring, n, ccw) {
    const out = new Uint8Array(n), s = ccw ? 1 : -1;
    const at = (x, z) => {
      let res = 0;
      for (const o of nb.grid.get(Math.floor(x / nb.C) * 100003 + Math.floor(z / nb.C)) || []) {
        if (o === bi) continue;
        const b = nb.box[o];
        if (x < b[0] || x > b[2] || z < b[1] || z > b[3]) continue;
        const r = nb.rings[o];
        let ins = false;
        for (let i = 0, j = r.length / 2 - 1; i < r.length / 2; j = i++) {
          const xi = r[i * 2], zi = r[i * 2 + 1], xj = r[j * 2], zj = r[j * 2 + 1];
          if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) ins = !ins;
        }
        if (ins) { if (!nb.lifted[o]) return 1; res = 2; }
      }
      return res;
    };
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const ax = ring[i * 2], az = ring[i * 2 + 1], bx = ring[j * 2], bz = ring[j * 2 + 1];
      const L = Math.hypot(bx - ax, bz - az) || 1, nx = s * (bz - az) / L * 0.6, nz = -s * (bx - ax) / L * 0.6;
      let c1 = 0, c2 = 0;
      for (const f of [0.2, 0.5, 0.8]) {
        const k = at(ax + (bx - ax) * f + nx, az + (bz - az) * f + nz);
        if (k === 1) c1++; else if (k === 2) c2++;
      }
      out[i] = c1 >= 2 ? 1 : c2 >= 2 ? 2 : 0;
    }
    return out;
  }

  // coperture in vetro della tessera: volte a botte (gv) lungo i passaggi e cupole (gd)
  glassRoofs(tile) {
    const gv = tile.gv || [], gd = tile.gd || [];
    if (!gv.length && !gd.length) return null;
    const T = this.terrain, pos = [], uv = [], idx = [];
    const vtx = (x, y, z, u, w) => { pos.push(x, y, z); uv.push(u, w); return pos.length / 3 - 1; };
    const SEG = 10;
    for (const rec of gv) {
      const w = rec[0] / 10, sp = rec[1] / 10, pts = [];
      for (let i = 2, x = 0, z = 0; i < rec.length; i += 2) { x += rec[i]; z += rec[i + 1]; pts.push([x / 10, z / 10]); }
      let gmin = 1e9;
      for (const [x, z] of pts) gmin = Math.min(gmin, T.height(x, z));
      const y0 = gmin + sp, r = w / 2;
      let s = 0, prev = null;
      for (let k = 0; k < pts.length; k++) {
        const a = pts[Math.max(0, k - 1)], b = pts[Math.min(pts.length - 1, k + 1)];
        let dx = b[0] - a[0], dz = b[1] - a[1]; const L = Math.hypot(dx, dz) || 1; dx /= L; dz /= L;
        if (k) s += Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]);
        const row = [];
        for (let q = 0; q <= SEG; q++) {
          const t = Math.PI * q / SEG, off = -Math.cos(t) * r, up = Math.sin(t) * r * 0.85;
          row.push(vtx(pts[k][0] - dz * off, y0 + up, pts[k][1] + dx * off, q / SEG * (Math.PI * r / 1.4), s / 1.4));
        }
        if (prev) for (let q = 0; q < SEG; q++) idx.push(prev[q], row[q], prev[q + 1], prev[q + 1], row[q], row[q + 1]);
        prev = row;
      }
    }
    for (let o = 0; o + 3 < gd.length; o += 4) {
      const r = gd[o] / 10, sp = gd[o + 1] / 10, cx = gd[o + 2] / 10, cz = gd[o + 3] / 10, y0 = T.height(cx, cz) + sp;
      const LAT = 8, LON = 16, base = pos.length / 3;
      for (let a = 0; a <= LAT; a++) for (let b = 0; b <= LON; b++) {
        const th = (a / LAT) * Math.PI / 2, ph = (b / LON) * Math.PI * 2;
        vtx(cx + Math.cos(th) * Math.cos(ph) * r, y0 + Math.sin(th) * r * 0.95, cz + Math.cos(th) * Math.sin(ph) * r, b / LON * (2 * Math.PI * r / 1.4) / 4, a / LAT * (Math.PI * r / 2 / 1.4));
      }
      for (let a = 0; a < LAT; a++) for (let b = 0; b < LON; b++) {
        const p0 = base + a * (LON + 1) + b, p1 = p0 + LON + 1;
        idx.push(p0, p0 + 1, p1, p0 + 1, p1 + 1, p1);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setIndex(idx); geo.computeVertexNormals();
    if (!this.glassRoofMat) {
      // vetro con l'intelaiatura in ferro (nervature ogni 1,4 m nei due versi)
      const cv = document.createElement('canvas'); cv.width = cv.height = 64;
      const c = cv.getContext('2d');
      c.fillStyle = 'rgba(200,220,230,0.28)'; c.fillRect(0, 0, 64, 64);
      c.fillStyle = 'rgba(40,44,46,1)'; c.fillRect(0, 0, 64, 5); c.fillRect(0, 0, 4, 64);
      c.fillStyle = 'rgba(40,44,46,0.8)'; c.fillRect(31, 0, 2, 64);
      const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
      this.glassRoofMat = new THREE.MeshPhongMaterial({ map: t, transparent: true, side: THREE.DoubleSide, shininess: 90, specular: 0x99aabb, depthWrite: false });
    }
    const m = new THREE.Mesh(geo, this.glassRoofMat);
    m.renderOrder = 2;
    return m;
  }

  // cornicione dei palazzi: fascia in aggetto sotto la gronda, un po' piu' chiara del muro
  cornice(g, ring, n, eave, col) {
    const out = this.offsetRing(ring, n, -0.38);
    if (!out) return;
    const c = col.clone().multiplyScalar(1.08), d = col.clone().multiplyScalar(0.62), y0 = eave - 0.55, y1 = eave - 0.05;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const ax = ring[i * 2], az = ring[i * 2 + 1], bx = ring[j * 2], bz = ring[j * 2 + 1];
      const oax = out[i * 2], oaz = out[i * 2 + 1], obx = out[j * 2], obz = out[j * 2 + 1];
      // fronte
      const f = [g.v(oax, y0, oaz, c.r, c.g, c.b), g.v(obx, y0, obz, c.r, c.g, c.b), g.v(obx, y1, obz, c.r, c.g, c.b), g.v(oax, y1, oaz, c.r, c.g, c.b)];
      g.quad(f[0], f[1], f[2], f[3]);
      // sotto (in ombra) e sopra
      const u = [g.v(ax, y0, az, d.r, d.g, d.b), g.v(bx, y0, bz, d.r, d.g, d.b), g.v(obx, y0, obz, d.r, d.g, d.b), g.v(oax, y0, oaz, d.r, d.g, d.b)];
      g.quad(u[0], u[1], u[2], u[3]);
      const t = [g.v(oax, y1, oaz, c.r, c.g, c.b), g.v(obx, y1, obz, c.r, c.g, c.b), g.v(bx, y1, bz, c.r, c.g, c.b), g.v(ax, y1, az, c.r, c.g, c.b)];
      g.quad(t[0], t[1], t[2], t[3]);
    }
  }

  // pinnacoli lungo la gronda delle chiese grandi (le guglie dei duomi); gotico = piu' alti e fitti
  pinnacles(g, ring, n, eave, col, gothic) {
    const c = col.clone().multiplyScalar(1.05), sh = col.clone().multiplyScalar(0.8);
    const step = gothic ? 5.5 : 9, hgt = gothic ? 5.5 : 3, w = gothic ? 0.45 : 0.35;
    let count = 0;
    for (let i = 0; i < n && count < 120; i++) {
      const j = (i + 1) % n;
      const ax = ring[i * 2], az = ring[i * 2 + 1], bx = ring[j * 2], bz = ring[j * 2 + 1];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 3) continue;
      const m = Math.max(1, Math.round(L / step));
      for (let k = 0; k < m && count < 120; k++, count++) {      // uno per spigolo: l'ultimo e' il primo del lato dopo
        const x = ax + (bx - ax) * k / m, z = az + (bz - az) * k / m;
        // basamento quadrato e cuspide a piramide
        const P = [[x - w, z - w], [x + w, z - w], [x + w, z + w], [x - w, z + w]], yb = eave - 0.3, ym = eave + hgt * 0.35, top = eave + hgt;
        for (let q = 0; q < 4; q++) {
          const [px, pz] = P[q], [qx, qz] = P[(q + 1) % 4], cc = q % 2 ? c : sh;
          const a = g.v(px, yb, pz, cc.r, cc.g, cc.b), b = g.v(qx, yb, qz, cc.r, cc.g, cc.b), e = g.v(qx, ym, qz, cc.r, cc.g, cc.b), f = g.v(px, ym, pz, cc.r, cc.g, cc.b);
          g.quad(a, b, e, f);
          const t = g.v(x, top, z, cc.r, cc.g, cc.b), f2 = g.v(px, ym, pz, cc.r, cc.g, cc.b), e2 = g.v(qx, ym, qz, cc.r, cc.g, cc.b);
          g.tri(f2, e2, t); g.tri(f2, t, e2);
        }
      }
    }
  }

  // campanile: cella campanaria (aperture scure ad arco su ogni lato) e cuspide a piramide
  towerTop(g, ring, n, eave, col, area, rnd) {
    let cx = 0, cz = 0;
    for (let i = 0; i < n; i++) { cx += ring[i * 2]; cz += ring[i * 2 + 1]; }
    cx /= n; cz /= n;
    const dark = [0.08, 0.08, 0.09];
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const ax = ring[i * 2], az = ring[i * 2 + 1], bx = ring[j * 2], bz = ring[j * 2 + 1];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 2) continue;
      const nx = (bz - az) / L, nz = -(bx - ax) / L;              // normale esterna (anello antiorario)
      const o = 0.04, ow = Math.min(1.6, L * 0.32), mx = (ax + bx) / 2 + nx * o, mz = (az + bz) / 2 + nz * o, dx = (bx - ax) / L, dz = (bz - az) / L;
      const y0 = eave - 4.2, y1 = eave - 1.6, ya = eave - 0.9;
      const p = [g.v(mx - dx * ow / 2, y0, mz - dz * ow / 2, ...dark), g.v(mx + dx * ow / 2, y0, mz + dz * ow / 2, ...dark), g.v(mx + dx * ow / 2, y1, mz + dz * ow / 2, ...dark), g.v(mx - dx * ow / 2, y1, mz - dz * ow / 2, ...dark)];
      g.quad(p[0], p[1], p[2], p[3]);
      const t = g.v(mx, ya, mz, ...dark);
      g.tri(p[3], p[2], t); g.tri(p[3], t, p[2]);
    }
    // cuspide: rame verde oppure coppi
    const rc = new THREE.Color(rnd < 0.4 ? '#6f9a83' : rnd < 0.75 ? '#a9603f' : '#8d8a84').convertSRGBToLinear();
    const top = eave + Math.max(3.5, Math.sqrt(area) * 1.1);
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n, s = i % 2 ? 1 : 0.82;
      const a = g.v(ring[i * 2], eave, ring[i * 2 + 1], rc.r * s, rc.g * s, rc.b * s), b = g.v(ring[j * 2], eave, ring[j * 2 + 1], rc.r * s, rc.g * s, rc.b * s), t = g.v(cx, top, cz, rc.r * s, rc.g * s, rc.b * s);
      g.tri(a, b, t); g.tri(a, t, b);
    }
  }

  // anello spostato di d verso l'interno (d<0: verso l'esterno); null se degenera
  offsetRing(ring, n, d) {
    const out = new Array(n * 2);
    for (let i = 0; i < n; i++) {
      const p = (i + n - 1) % n, q = (i + 1) % n;
      let ax = ring[i * 2] - ring[p * 2], az = ring[i * 2 + 1] - ring[p * 2 + 1], bx = ring[q * 2] - ring[i * 2], bz = ring[q * 2 + 1] - ring[i * 2 + 1];
      const la = Math.hypot(ax, az) || 1, lb = Math.hypot(bx, bz) || 1;
      ax /= la; az /= la; bx /= lb; bz /= lb;
      // normali interne dei due lati (anello antiorario nel piano x,z)
      const n1x = -az, n1z = ax, n2x = -bz, n2z = bx;
      const k = Math.max(0.35, 1 + n1x * n2x + n1z * n2z);
      out[i * 2] = ring[i * 2] + d * (n1x + n2x) / k;
      out[i * 2 + 1] = ring[i * 2 + 1] + d * (n1z + n2z) / k;
    }
    if (d > 0) {
      // valido se l'area resta positiva e i lati non si invertono
      let area = 0;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        area += out[i * 2] * out[j * 2 + 1] - out[j * 2] * out[i * 2 + 1];
        const ex = ring[j * 2] - ring[i * 2], ez = ring[j * 2 + 1] - ring[i * 2 + 1], fx = out[j * 2] - out[i * 2], fz = out[j * 2 + 1] - out[i * 2 + 1];
        if (ex * fx + ez * fz <= 0) return null;
      }
      if (area <= 0) return null;
    }
    return out;
  }

  roof(g, ring, n, eave, pitched, rc, area, kind, wallCol, rnd) {
    const addTri = (p, q, r, c = rc) => {
      const ux = q[0] - p[0], uz = q[2] - p[2], vx = r[0] - p[0], vz = r[2] - p[2];
      const ny = uz * vx - ux * vz;
      const a = g.v(p[0], p[1], p[2], c.r, c.g, c.b), b = g.v(q[0], q[1], q[2], c.r, c.g, c.b), d = g.v(r[0], r[1], r[2], c.r, c.g, c.b);
      if (ny >= 0) g.tri(a, b, d); else g.tri(a, d, b);
    };
    const quad = (a, b, c, d, col) => { addTri(a, b, c, col); addTri(a, c, d, col); };
    const dark = rc.clone().multiplyScalar(0.84), light = rc.clone().multiplyScalar(1.06);
    const OVER = 0.45; // sporto di gronda
    const chimney = (x, z, y) => {
      if (rnd > 0.55) return;
      const s = 0.3, h = 1.1, c = wallCol.clone().multiplyScalar(0.9), P = [[x - s, z - s], [x + s, z - s], [x + s, z + s], [x - s, z + s]];
      for (let i = 0; i < 4; i++) { const [ax, az] = P[i], [bx, bz] = P[(i + 1) % 4]; quad([ax, y - 0.6, az], [bx, y - 0.6, bz], [bx, y + h, bz], [ax, y + h, az], c); }
      quad([P[0][0], y + h, P[0][1]], [P[1][0], y + h, P[1][1]], [P[2][0], y + h, P[2][1]], [P[3][0], y + h, P[3][1]], dark);
    };
    if (pitched && n === 4 && area < 2500) {
      // pianta rettangolare: tetto a due falde (capanna) o a padiglione
      const P = [0, 1, 2, 3].map((i) => [ring[i * 2], ring[i * 2 + 1]]);
      const e0 = Math.hypot(P[1][0] - P[0][0], P[1][1] - P[0][1]), e1 = Math.hypot(P[2][0] - P[1][0], P[2][1] - P[1][1]);
      const Q = e1 > e0 ? [P[1], P[2], P[3], P[0]] : P;
      const L = Math.max(e0, e1), S = Math.min(e0, e1);
      const cx = (Q[0][0] + Q[1][0] + Q[2][0] + Q[3][0]) / 4, cz = (Q[0][1] + Q[1][1] + Q[2][1] + Q[3][1]) / 4;
      const ux = ((Q[1][0] - Q[0][0]) + (Q[2][0] - Q[3][0])) / 2 / L, uz = ((Q[1][1] - Q[0][1]) + (Q[2][1] - Q[3][1])) / 2 / L;
      const hh = Math.min(S * 0.27, 5);
      const ex = this.offsetRing(Q.flat(), 4, -OVER);
      const c = [0, 1, 2, 3].map((i) => [ex[i * 2], eave - OVER * 0.5, ex[i * 2 + 1]]);
      const gable = rnd > 0.4;
      const rh = gable ? L / 2 + OVER : Math.max(0, L / 2 - S / 2);
      const r0 = [cx - ux * rh, eave + hh, cz - uz * rh], r1 = [cx + ux * rh, eave + hh, cz + uz * rh];
      quad(c[0], c[1], r1, r0, light); quad(c[2], c[3], r0, r1, rc);
      if (gable) {
        // timpani in muratura
        const w = [0, 1, 2, 3].map((i) => [Q[i][0], eave, Q[i][1]]);
        addTri(w[1], w[2], [cx + ux * L / 2, eave + hh, cz + uz * L / 2], wallCol);
        addTri(w[3], w[0], [cx - ux * L / 2, eave + hh, cz - uz * L / 2], wallCol);
      } else { addTri(c[1], c[2], r1, dark); addTri(c[3], c[0], r0, dark); }
      chimney(cx + ux * L * 0.2, cz + uz * L * 0.2, eave + hh);
      return;
    }
    if (pitched && area < 6000 && n <= 60) {
      // pianta qualsiasi: falde inclinate lungo il perimetro e colmo piano
      let d = Math.max(1.2, Math.min(4.2, Math.sqrt(area) * 0.2));
      let inner = this.offsetRing(ring, n, d);
      if (!inner) { d *= 0.5; inner = this.offsetRing(ring, n, d); }
      if (inner) {
        const outer = this.offsetRing(ring, n, -OVER);
        const top = eave + d * 0.5;
        for (let i = 0; i < n; i++) {
          const j = (i + 1) % n;
          quad([outer[i * 2], eave - OVER * 0.4, outer[i * 2 + 1]], [outer[j * 2], eave - OVER * 0.4, outer[j * 2 + 1]], [inner[j * 2], top, inner[j * 2 + 1]], [inner[i * 2], top, inner[i * 2 + 1]], i % 2 ? rc : dark);
        }
        const pts = [];
        for (let i = 0; i < n; i++) pts.push(new THREE.Vector2(inner[i * 2], inner[i * 2 + 1]));
        let tris = [];
        try { tris = THREE.ShapeUtils.triangulateShape(pts, []); } catch (e) { tris = []; }
        for (const [a, b, c] of tris) addTri([pts[a].x, top, pts[a].y], [pts[b].x, top, pts[b].y], [pts[c].x, top, pts[c].y], light);
        if (kind === 1 || kind === 2) chimney(inner[0] * 0.5 + inner[2] * 0.5, inner[1] * 0.5 + inner[3] * 0.5, top);
        return;
      }
    }
    // tetto piano con bordo (capannoni, palazzi)
    const pts = [];
    for (let i = 0; i < n; i++) pts.push(new THREE.Vector2(ring[i * 2], ring[i * 2 + 1]));
    let tris;
    try { tris = THREE.ShapeUtils.triangulateShape(pts, []); } catch (e) { return; }
    for (const [a, b, c] of tris) addTri([pts[a].x, eave - 0.25, pts[a].y], [pts[b].x, eave - 0.25, pts[b].y], [pts[c].x, eave - 0.25, pts[c].y]);
  }
}
