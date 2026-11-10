import * as THREE from 'three';
import { GeoBuilder, hash } from './geo.js';

// Edifici reali OSM estrusi con altezza da height / building:levels, o stimata
// per tipologia. Intonaci e tetti in coppi tipici della Brianza.
const PLASTER = ['#eadcbc', '#e9cf9f', '#dcab6e', '#f1e8d6', '#ddb7a2', '#cdbb9f', '#f0dc9e', '#c4bcae', '#e3c08e', '#d9c7a6', '#efe2c4', '#c98f6a'];
const INDUSTRIAL = ['#c6c6c0', '#a8aeb0', '#d4cfc2', '#b9b4a6', '#9aa3a6', '#cfd2cf'];
const ROOF_TILE = ['#b8694a', '#a9603f', '#c27752', '#9e5b43', '#b5704f', '#a46a52', '#8f5d4c'];
const ROOF_FLAT = ['#8d8a84', '#7d7b77', '#9a968e', '#6f6e6a'];
const tmpC = new THREE.Color();

function makeFacadeTextures() {
  const S = 512, bay = S / 8;
  const mk = () => { const c = document.createElement('canvas'); c.width = c.height = S; return c; };
  const res = mk(), ind = mk(), emiR = mk(), emiI = mk(), plain = mk();
  const r = res.getContext('2d'), e = emiR.getContext('2d'), n = ind.getContext('2d'), ei = emiI.getContext('2d'), p = plain.getContext('2d');
  for (const c of [r, n, p]) { c.fillStyle = '#ffffff'; c.fillRect(0, 0, S, S); }
  for (const c of [e, ei]) { c.fillStyle = '#000'; c.fillRect(0, 0, S, S); }
  // intonaco leggermente irregolare
  for (const c of [r, n, p]) {
    for (let i = 0; i < 2500; i++) { c.fillStyle = `rgba(0,0,0,${Math.random() * 0.05})`; c.fillRect(Math.random() * S, Math.random() * S, 3 + Math.random() * 8, 3 + Math.random() * 8); }
  }
  const shutters = ['#3f6b3a', '#4d5f2f', '#6b4a2b', '#355e4e', '#5a3d27'];
  for (let fy = 0; fy < 8; fy++) for (let bx = 0; bx < 8; bx++) {
    const x0 = bx * bay, y0 = fy * bay;
    // residenziale: finestra con persiane
    const ww = bay * 0.34, wh = bay * 0.52, wx = x0 + (bay - ww) / 2, wy = y0 + bay * 0.22;
    r.fillStyle = '#d8d2c4'; r.fillRect(wx - 3, wy - 3, ww + 6, wh + 7);
    r.fillStyle = '#2f3438'; r.fillRect(wx, wy, ww, wh);
    r.fillStyle = '#5c6a72'; r.fillRect(wx + 2, wy + 2, ww / 2 - 3, wh - 4); r.fillRect(wx + ww / 2 + 1, wy + 2, ww / 2 - 3, wh - 4);
    const open = Math.random();
    const sc = shutters[(bx * 7 + fy * 3) % shutters.length];
    r.fillStyle = sc;
    if (open < 0.6) { r.fillRect(wx - ww / 2 - 2, wy, ww / 2, wh); r.fillRect(wx + ww + 2, wy, ww / 2, wh); }
    else if (open < 0.85) { r.fillRect(wx, wy, ww, wh); }
    r.fillStyle = 'rgba(0,0,0,0.25)';
    for (let k = 0; k < 6; k++) r.fillRect(wx - ww / 2 - 2, wy + k * wh / 6, ww * 2 + 4, 1);
    if (open < 0.85 || Math.random() < 0.3) {
      const lit = Math.random() < 0.35;
      e.fillStyle = lit ? (Math.random() < 0.5 ? '#ffd890' : '#fff0c0') : '#000';
      if (open >= 0.6 && open < 0.85) e.fillStyle = '#000';
      e.fillRect(wx, wy, ww, wh);
    }
    // industriale / commerciale: nastro di finestre e pannelli
    n.fillStyle = 'rgba(0,0,0,0.08)'; n.fillRect(x0, y0, 2, bay);
    if (fy % 2 === 0) {
      n.fillStyle = '#4b5a63'; n.fillRect(x0 + 3, y0 + bay * 0.3, bay - 6, bay * 0.3);
      ei.fillStyle = Math.random() < 0.25 ? '#e8f0ff' : '#000'; ei.fillRect(x0 + 3, y0 + bay * 0.3, bay - 6, bay * 0.3);
    }
  }
  const tex = (c, srgb = true) => {
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    return t;
  };
  return { res: tex(res), ind: tex(ind), plain: tex(plain), emiR: tex(emiR), emiI: tex(emiI) };
}

export class BuildingFactory {
  constructor(terrain) {
    this.terrain = terrain;
    const t = makeFacadeTextures();
    this.mats = {
      res: new THREE.MeshLambertMaterial({ map: t.res, vertexColors: true, emissiveMap: t.emiR, emissive: 0xffffff, emissiveIntensity: 0 }),
      ind: new THREE.MeshLambertMaterial({ map: t.ind, vertexColors: true, emissiveMap: t.emiI, emissive: 0xffffff, emissiveIntensity: 0 }),
      plain: new THREE.MeshLambertMaterial({ map: t.plain, vertexColors: true }),
      roof: new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }),
    };
  }

  setNight(f) { this.mats.res.emissiveIntensity = f * 0.55; this.mats.ind.emissiveIntensity = f * 0.4; }

  build(tile, collision, tileKey) {
    const T = this.terrain;
    const gb = { res: new GeoBuilder(), ind: new GeoBuilder(), plain: new GeoBuilder() };
    const roof = new GeoBuilder(true, false);
    const names = tile.s;
    const labels = [];
    for (const rec of tile.b) {
      const type = rec[0];
      let H = rec[1] / 10;
      const minH = rec[2] / 10;
      const levels = rec[3], roofShape = rec[4];
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
      const base = minT - 0.6 + minH;
      const eave = (minT + maxT) / 2 + H;
      const style = (kind === 3 || kind === 4) ? 'ind' : (kind === 5 || kind === 6 || kind === 8 || kind === 9 || kind === 10) ? 'plain' : 'res';
      let col;
      if (colTag && /^#?[0-9a-f]{6}$|^[a-z]+$/i.test(colTag)) { try { tmpC.set(colTag); col = tmpC.clone(); } catch (e) { col = null; } }
      if (!col) col = new THREE.Color(style === 'ind' ? INDUSTRIAL[Math.floor(rnd2 * INDUSTRIAL.length)] : kind === 8 || kind === 5 ? (rnd2 < 0.5 ? '#d8c9a8' : '#c9a77f') : PLASTER[Math.floor(rnd2 * PLASTER.length)]);
      col.convertSRGBToLinear();
      const g = gb[style];
      let per = 0;
      for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const ax = ring[i * 2], az = ring[i * 2 + 1], bx = ring[j * 2], bz = ring[j * 2 + 1];
        const len = Math.hypot(bx - ax, bz - az);
        const u0 = per / 24, u1 = (per + len) / 24;
        // allinea le finestre: numero intero di campate per facciata
        const bays = Math.max(1, Math.round(len / 3));
        const ue = u0 + bays / 8;
        const vTop = 0, vBot = (eave - base) / 24;
        const a = g.v(ax, base, az, col.r, col.g, col.b, u0, vBot);
        const b = g.v(ax, eave, az, col.r, col.g, col.b, u0, vTop);
        const c = g.v(bx, eave, bz, col.r, col.g, col.b, ue, vTop);
        const d = g.v(bx, base, bz, col.r, col.g, col.b, ue, vBot);
        g.quad(a, b, c, d);
        per += len;
      }
      // tetto
      let rc;
      const pitched = (kind === 1 || (kind === 2 && (area < 1400 || levels <= 4)) || kind === 5 || kind === 9 || (kind === 7 && area < 900) || (kind === 6 && area > 18)) && roofShape !== 1;
      if (roofTag && /^#?[0-9a-f]{6}$|^[a-z]+$/i.test(roofTag)) { try { rc = new THREE.Color(roofTag); } catch (e) { rc = null; } }
      if (!rc) rc = new THREE.Color(pitched ? ROOF_TILE[Math.floor(rnd * ROOF_TILE.length)] : ROOF_FLAT[Math.floor(rnd * ROOF_FLAT.length)]);
      rc.convertSRGBToLinear();
      this.roof(roof, ring, n, eave, pitched, rc, area, kind, col, rnd2);
      if (collision) collision.addPolygon(tileKey, Float32Array.from(ring));
      if (name && (kind === 5 || kind === 8 || type === 7)) labels.push({ name, x: cx, z: cz, y: eave + 4 });
    }
    const group = new THREE.Group();
    for (const k of ['res', 'ind', 'plain']) if (!gb[k].empty) group.add(gb[k].mesh(this.mats[k], true));
    if (!roof.empty) group.add(roof.mesh(this.mats.roof, true));
    return { group, labels };
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
