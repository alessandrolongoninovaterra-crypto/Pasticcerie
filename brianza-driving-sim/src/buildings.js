import * as THREE from 'three';
import { GeoBuilder, hash } from './geo.js';

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
    g.quad(v[0], v[1], v[2], v[3]); g.quad(v[0], v[3], v[2], v[1]);
  }
}

// Facciate: ogni immagine ha 8 x 8 campate da 3 m. La riga in basso e' il PIANO TERRA (portoni,
// garage, ingressi), quelle sopra i piani tipo: l'edificio le usa dal basso, con un numero intero
// di piani, cosi' le finestre sono allineate sia alla gronda sia a terra.
// Stili: res (casa con persiane), condo (condominio con balconi), modern (palazzina recente),
// ind (capannone / commerciale), plain (muro cieco: chiese, torri, box).
function makeFacadeTextures() {
  const S = 512, bay = S / 8;
  const mk = () => { const c = document.createElement('canvas'); c.width = c.height = S; return c; };
  const cv = { res: mk(), condo: mk(), modern: mk(), ind: mk(), plain: mk(), church: mk(), glass: mk(), emiR: mk(), emiC: mk(), emiM: mk(), emiI: mk(), emiCh: mk(), emiG: mk() };
  const x2 = Object.fromEntries(Object.entries(cv).map(([k, c]) => [k, c.getContext('2d')]));
  for (const k of ['res', 'condo', 'modern', 'ind', 'plain']) {
    const c = x2[k]; c.fillStyle = '#ffffff'; c.fillRect(0, 0, S, S);
    // intonaco leggermente irregolare
    for (let i = 0; i < 2500; i++) { c.fillStyle = `rgba(0,0,0,${Math.random() * 0.05})`; c.fillRect(Math.random() * S, Math.random() * S, 3 + Math.random() * 8, 3 + Math.random() * 8); }
  }
  for (const k of ['emiR', 'emiC', 'emiM', 'emiI', 'emiCh', 'emiG']) { x2[k].fillStyle = '#000'; x2[k].fillRect(0, 0, S, S); }
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
      church: wall(t.church, t.emiCh), glass: wall(t.glass, t.emiG),
      roof: new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }),
    };
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

  setNight(f) { for (const k of ['res', 'condo', 'modern', 'glass']) this.mats[k].emissiveIntensity = f * 0.55; this.mats.ind.emissiveIntensity = f * 0.4; this.mats.church.emissiveIntensity = f * 0.3; }

  build(tile, collision, tileKey) {
    const g = this.buildGen(tile, collision, tileKey);
    let r;
    while (!(r = g.next()).done);
    return r.value;
  }

  // costruzione a passi (vedi RoadNetwork.buildTileGen): una pausa ogni 12 edifici
  *buildGen(tile, collision, tileKey) {
    const T = this.terrain;
    const gb = { res: new GeoBuilder(), condo: new GeoBuilder(), modern: new GeoBuilder(), ind: new GeoBuilder(), plain: new GeoBuilder(), church: new GeoBuilder(), glass: new GeoBuilder() };
    const roof = new GeoBuilder(true, false);
    const names = tile.s;
    const labels = [];
    let nDone = 0;
    for (const rec of tile.b) {
      if (++nDone % 12 === 0) yield;
      const type = rec[0];
      let H = rec[1] / 10;
      const minH = rec[2] / 10;
      const levels = rec[3], roofShape = rec[4] & 15, portico = (rec[4] & 16) !== 0;
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
      if (style === 'res') {
        if (floors >= 4 && area > 160) style = rnd2 < 0.75 ? 'condo' : 'modern';      // palazzi: quasi sempre condomini con balconi
        else if (floors >= 2 && area > 110 && rnd < 0.16) style = 'modern';          // qualche palazzina recente
        else if (floors === 3 && area > 220 && rnd2 < 0.45) style = 'condo';
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
        // base dei muri piu' scura (ombra di contatto col suolo)
        const a = g.v(ax, base, az, col.r * 0.78, col.g * 0.78, col.b * 0.78, u0, vBot);
        const b = g.v(ax, eave, az, col.r, col.g, col.b, u0, vTop);
        const c = g.v(bx, eave, bz, col.r, col.g, col.b, ue, vTop);
        const d = g.v(bx, base, bz, col.r * 0.78, col.g * 0.78, col.b * 0.78, ue, vBot);
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
      if ((style === 'res' || style === 'condo' || style === 'modern') && floors >= 3) this.cornice(roof, ring, n, eave, col);
      if (minH > 2.2) {
        // sotto si passa: soffitto visto dal basso e, nei portici, pilastri (sono loro l'ostacolo)
        this.ceiling(roof, ring, n, base, col);
        if (portico) this.pillars(roof, ring, n, minT, base, col, collision, tileKey);
      } else if (collision) collision.addPolygon(tileKey, Float32Array.from(ring), eave + (pitched ? 3 : 1));
      if (name && (kind === 5 || kind === 8 || type === 7)) labels.push({ name, x: cx, z: cz, y: eave + 4 });
    }
    const group = new THREE.Group();
    const glassRoof = this.glassRoofs(tile);
    if (glassRoof) group.add(glassRoof);
    for (const k of ['res', 'condo', 'modern', 'ind', 'plain', 'church', 'glass']) if (!gb[k].empty) { yield; group.add(gb[k].mesh(this.mats[k], true)); }
    yield;
    if (!roof.empty) group.add(roof.mesh(this.mats.roof, true));
    return { group, labels };
  }

  // soffitto di un volume sospeso, visto dal basso
  ceiling(g, ring, n, y, col) {
    const pts = [];
    for (let i = 0; i < n; i++) pts.push(new THREE.Vector2(ring[i * 2], ring[i * 2 + 1]));
    let tris;
    try { tris = THREE.ShapeUtils.triangulateShape(pts, []); } catch (e) { return; }
    const c = col.clone().multiplyScalar(0.62);
    const v = pts.map((p) => g.v(p.x, y, p.y, c.r, c.g, c.b));
    for (const [a, b, d] of tris) { g.tri(v[a], v[b], v[d]); g.tri(v[a], v[d], v[b]); }
  }

  // pilastri del portico: ai vertici e ogni ~4 m lungo i lati, con un capitello appena piu' largo
  pillars(g, ring, n, y0, y1, col, collision, tileKey) {
    const c = col.clone().multiplyScalar(0.95), cap = col.clone().multiplyScalar(1.05);
    const post = (x, z, dx, dz) => {
      boxV(g, x, y0 - 0.3, z, 0.62, y1 - y0 + 0.3, 0.62, dx, dz, c);
      boxV(g, x, y1 - 0.45, z, 0.85, 0.45, 0.85, dx, dz, cap);
      if (collision) collision.addCircle(tileKey, x, z, 0.4, y1);
    };
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const ax = ring[i * 2], az = ring[i * 2 + 1], bx = ring[j * 2], bz = ring[j * 2 + 1];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 0.5) continue;
      const dx = (bx - ax) / L, dz = (bz - az) / L, m = Math.max(1, Math.round(L / 4.2));
      for (let k = 0; k < m; k++) post(ax + (bx - ax) * k / m, az + (bz - az) * k / m, dx, dz);
    }
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
          g.quad(a, b, e, f); g.quad(a, f, e, b);
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
      g.quad(p[0], p[1], p[2], p[3]); g.quad(p[0], p[3], p[2], p[1]);
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
