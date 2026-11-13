import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { CLS, F, NT } from './roads.js';

// Segnaletica verticale italiana generata dai dati OpenStreetMap:
// semafori, STOP, dare precedenza, rotatoria, senso unico / senso vietato,
// attraversamento pedonale, dosso, passaggio a livello, limiti di velocita',
// inizio/fine centro abitato, targhe con i nomi delle vie, indicazioni di
// direzione, identificazione strada (SP/SS), fermate bus, autovelox, lampioni.

const CYCLE = 44;
export function signalState(group, t) {
  const c = ((t % CYCLE) + CYCLE) % CYCLE;
  const g = group === 0 ? c : (c + CYCLE / 2) % CYCLE;
  if (g < 17) return 'G';
  if (g < 20.5) return 'Y';
  return 'R';
}

function boxTo(g, x, y, z, sx, sy, sz, yaw, col) {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  const P = [];
  for (const [dx, dy, dz] of [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]]) {
    const lx = dx * sx / 2, lz = dz * sz / 2;
    P.push([x + lx * c + lz * s, y + dy * sy / 2, z - lx * s + lz * c]);
  }
  for (const f of [[0, 3, 2, 1], [4, 5, 6, 7], [0, 4, 7, 3], [1, 2, 6, 5], [3, 7, 6, 2], [0, 1, 5, 4]]) {
    const ids = f.map((k) => g.v(P[k][0], P[k][1], P[k][2], col[0], col[1], col[2], 0, 0));
    g.quad(ids[0], ids[1], ids[2], ids[3]);
  }
}

// quad verticale rivolto verso yaw (normale = (sin yaw, 0, cos yaw)) con riquadro UV
function plate(g, x, y, z, w, h, yaw, uv) {
  const c = Math.cos(yaw), s = Math.sin(yaw);
  const rx = c, rz = -s;
  const a = g.v(x - rx * w / 2, y - h / 2, z - rz * w / 2, 1, 1, 1, uv[0], uv[1]);
  const b = g.v(x + rx * w / 2, y - h / 2, z + rz * w / 2, 1, 1, 1, uv[2], uv[1]);
  const d = g.v(x + rx * w / 2, y + h / 2, z + rz * w / 2, 1, 1, 1, uv[2], uv[3]);
  const e = g.v(x - rx * w / 2, y + h / 2, z - rz * w / 2, 1, 1, 1, uv[0], uv[3]);
  g.quad(a, b, d, e);
}

// ---------------------------------------------------------------- atlante dei segnali
const STD = ['stop', 'giveway', 'roundabout', 'noentry', 'oneway', 'ped', 'bump', 'level', 'warn', 'parking', 'bus', 'fuel', 'camera', 'deadend',
  's10', 's20', 's30', 's40', 's50', 's60', 's70', 's80', 's90', 's100', 's110', 's130', 'back', 'curveR', 'curveL', 'steep', 'children'];
function uvStd(name, silhouette = false) {
  const i = STD.indexOf(name), col = i % 8, row = Math.floor(i / 8) + (silhouette ? 4 : 0);
  return [col / 8, 1 - (row + 1) / 8, (col + 1) / 8, 1 - row / 8];
}

function drawStd(c, name) {
  const S = 128, m = S / 2;
  const disc = (r, col) => { c.beginPath(); c.arc(m, m, r, 0, 7); c.fillStyle = col; c.fill(); };
  const poly = (pts, col) => { c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath(); c.fillStyle = col; c.fill(); };
  const rrect = (x, y, w, h, r, col) => { c.beginPath(); c.roundRect(x, y, w, h, r); c.fillStyle = col; c.fill(); };
  const text = (t, size, col, y = m + 3) => { c.fillStyle = col; c.font = `bold ${size}px Arial`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(t, m, y); };
  const RED = '#c8101a', BLUE = '#0a4fa6';
  const tri = () => { poly([[m, 6], [124, 118], [4, 118]], RED); poly([[m, 30], [103, 106], [25, 106]], '#fff'); };
  if (/^s\d+$/.test(name)) { disc(62, RED); disc(47, '#fff'); const v = name.slice(1); text(v, v.length > 2 ? 46 : 58, '#111'); return; }
  switch (name) {
    case 'stop': {
      const oct = (r) => Array.from({ length: 8 }, (_, i) => { const a = (i + 0.5) / 8 * Math.PI * 2; return [m + Math.cos(a) * r, m + Math.sin(a) * r]; });
      poly(oct(63), '#fff'); poly(oct(57), RED); text('STOP', 38, '#fff'); break;
    }
    case 'giveway': poly([[4, 8], [124, 8], [m, 122]], RED); poly([[28, 22], [100, 22], [m, 96]], '#fff'); break;
    case 'roundabout': {
      disc(62, '#fff'); disc(58, BLUE);
      c.strokeStyle = '#fff'; c.lineWidth = 11;
      for (let i = 0; i < 3; i++) {
        const a0 = i * 2.094 + 0.5, a1 = a0 + 1.35;
        c.beginPath(); c.arc(m, m, 30, a0, a1, false); c.stroke();
        const hx = m + Math.cos(a0) * 30, hy = m + Math.sin(a0) * 30;
        c.save(); c.translate(hx, hy); c.rotate(a0 - Math.PI / 2); c.beginPath(); c.moveTo(0, -17); c.lineTo(13, 6); c.lineTo(-13, 6); c.closePath(); c.fillStyle = '#fff'; c.fill(); c.restore();
      }
      break;
    }
    case 'noentry': disc(62, '#fff'); disc(58, RED); rrect(22, 53, 84, 22, 3, '#fff'); break;
    case 'oneway': rrect(4, 4, 120, 120, 8, '#fff'); rrect(8, 8, 112, 112, 6, BLUE); rrect(55, 48, 18, 60, 2, '#fff'); poly([[m, 16], [96, 58], [32, 58]], '#fff'); break;
    case 'ped': {
      rrect(4, 4, 120, 120, 8, '#fff'); rrect(8, 8, 112, 112, 6, BLUE); poly([[m, 18], [112, 106], [16, 106]], '#fff');
      c.fillStyle = '#111'; c.beginPath(); c.arc(m + 2, 52, 7, 0, 7); c.fill();
      c.strokeStyle = '#111'; c.lineWidth = 6; c.lineCap = 'round';
      c.beginPath(); c.moveTo(m, 62); c.lineTo(m - 2, 82); c.lineTo(m - 14, 100); c.moveTo(m - 2, 82); c.lineTo(m + 12, 100); c.moveTo(m - 12, 74); c.lineTo(m, 66); c.lineTo(m + 14, 76); c.stroke();
      c.lineCap = 'butt'; break;
    }
    case 'bump': tri(); c.fillStyle = '#111'; c.beginPath(); c.moveTo(36, 96); c.quadraticCurveTo(m, 56, 92, 96); c.closePath(); c.fill(); break;
    case 'warn': tri(); text('!', 56, '#111', 76); break;
    case 'curveR': case 'curveL': {   // curva pericolosa
      tri();
      c.save(); if (name === 'curveL') { c.translate(S, 0); c.scale(-1, 1); }
      c.strokeStyle = '#111'; c.lineWidth = 9; c.lineCap = 'butt';
      c.beginPath(); c.moveTo(52, 102); c.lineTo(52, 84); c.quadraticCurveTo(52, 62, 78, 58); c.stroke();
      poly([[92, 56], [74, 44], [74, 70]], '#111');
      c.restore(); break;
    }
    case 'steep': {                    // discesa pericolosa
      tri(); poly([[34, 100], [96, 100], [34, 66]], '#111');
      c.fillStyle = '#111'; c.font = 'bold 20px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('10%', 72, 74);
      break;
    }
    case 'children': {                 // attenzione bambini
      tri(); c.fillStyle = '#111'; c.strokeStyle = '#111'; c.lineWidth = 5; c.lineCap = 'round';
      for (const [x, sc] of [[52, 1], [78, 0.82]]) {
        c.beginPath(); c.arc(x, 62 + (1 - sc) * 14, 6 * sc, 0, 7); c.fill();
        c.beginPath(); c.moveTo(x, 70); c.lineTo(x, 86); c.lineTo(x - 8 * sc, 102); c.moveTo(x, 86); c.lineTo(x + 8 * sc, 102); c.moveTo(x - 9 * sc, 78); c.lineTo(x + 9 * sc, 76); c.stroke();
      }
      c.lineCap = 'butt'; break;
    }
    case 'level': {
      c.lineCap = 'butt';
      for (const s of [1, -1]) { c.save(); c.translate(m, m); c.rotate(s * 0.55); c.fillStyle = RED; c.fillRect(-62, -13, 124, 26); c.fillStyle = '#fff'; c.fillRect(-56, -8, 112, 16); c.fillStyle = RED; c.fillRect(-62, -13, 16, 26); c.fillRect(46, -13, 16, 26); c.restore(); }
      break;
    }
    case 'parking': rrect(4, 4, 120, 120, 8, '#fff'); rrect(8, 8, 112, 112, 6, BLUE); text('P', 92, '#fff', m + 6); break;
    case 'bus': rrect(4, 4, 120, 120, 8, '#fff'); rrect(8, 8, 112, 112, 6, BLUE); rrect(22, 34, 84, 60, 6, '#fff'); text('BUS', 34, '#111'); break;
    case 'fuel': rrect(4, 4, 120, 120, 8, '#fff'); rrect(8, 8, 112, 112, 6, BLUE); rrect(24, 22, 80, 84, 6, '#fff'); rrect(44, 36, 30, 58, 3, '#111'); rrect(49, 42, 20, 16, 2, '#fff'); c.strokeStyle = '#111'; c.lineWidth = 5; c.beginPath(); c.moveTo(74, 60); c.lineTo(86, 60); c.lineTo(86, 86); c.stroke(); break;
    case 'camera': rrect(2, 20, 124, 88, 6, '#fff'); rrect(6, 24, 116, 80, 4, BLUE); text('CONTROLLO', 15, '#fff', 44); text('ELETTRONICO', 15, '#fff', 62); text('VELOCITÀ', 17, '#fff', 84); break;
    case 'deadend': rrect(4, 4, 120, 120, 8, '#fff'); rrect(8, 8, 112, 112, 6, BLUE); rrect(54, 40, 20, 70, 2, '#fff'); rrect(34, 22, 60, 22, 2, RED); break;
    case 'back': c.fillStyle = '#7d8185'; c.fillRect(0, 0, S, S); break;
    default: break;
  }
}

function makeStdAtlas() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 1024;
  const ctx = cv.getContext('2d');
  const tmp = document.createElement('canvas'); tmp.width = tmp.height = 128;
  const tc = tmp.getContext('2d');
  STD.forEach((name, i) => {
    tc.clearRect(0, 0, 128, 128); tc.globalCompositeOperation = 'source-over';
    drawStd(tc, name);
    ctx.drawImage(tmp, (i % 8) * 128, Math.floor(i / 8) * 128);
    // sagoma grigia per il retro del cartello
    tc.globalCompositeOperation = 'source-in'; tc.fillStyle = '#7d8185'; tc.fillRect(0, 0, 128, 128);
    ctx.drawImage(tmp, (i % 8) * 128, (Math.floor(i / 8) + 4) * 128);
  });
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

// atlante dei cartelli con testo (uno per tessera)
class TextAtlas {
  constructor(size = 1024) { this.S = size; this.x = 0; this.y = 0; this.rowH = 0; this.map = new Map(); this.cv = null; }
  add(key, w, h, draw) {
    if (this.map.has(key)) return this.map.get(key);
    if (!this.cv) { this.cv = document.createElement('canvas'); this.cv.width = this.cv.height = this.S; this.ctx = this.cv.getContext('2d'); }
    if (this.x + w > this.S) { this.x = 0; this.y += this.rowH + 2; this.rowH = 0; }
    if (this.y + h > this.S) return null;
    const c = this.ctx;
    c.save(); c.translate(this.x, this.y); c.beginPath(); c.rect(0, 0, w, h); c.clip(); draw(c, w, h); c.restore();
    const S = this.S, e = 0.5;
    const uv = [(this.x + e) / S, 1 - (this.y + h - e) / S, (this.x + w - e) / S, 1 - (this.y + e) / S];
    this.map.set(key, uv);
    this.x += w + 2; this.rowH = Math.max(this.rowH, h);
    return uv;
  }
  material() {
    const t = new THREE.CanvasTexture(this.cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    return new THREE.MeshLambertMaterial({ map: t, vertexColors: true });
  }
}

function fitText(c, text, maxW, size, weight = 'bold') {
  c.font = `${weight} ${size}px Arial`;
  while (c.measureText(text).width > maxW && size > 9) { size -= 1; c.font = `${weight} ${size}px Arial`; }
  return size;
}

export class Signage {
  constructor(roads, terrain, comuneAt, meta) {
    this.roads = roads; this.terrain = terrain; this.comuneAt = comuneAt; this.meta = meta;
    this.inferred = {};   // cartelli dedotti: quanti per tipo e posizione dell'ultimo (per le verifiche)
    const M = roads.materials();
    this.markMat = M.mark; this.decalMat = M.decal;
    this.stdMat = new THREE.MeshLambertMaterial({ map: makeStdAtlas(), vertexColors: true, alphaTest: 0.5 });
    this.poleMat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    this.lights = [0, 1].map(() => ({
      R: new THREE.MeshBasicMaterial({ color: 0x330000 }), Y: new THREE.MeshBasicMaterial({ color: 0x332200 }), G: new THREE.MeshBasicMaterial({ color: 0x002200 }),
    }));
    this.greenMat = new THREE.MeshBasicMaterial({ color: 0x20ff60 });
    this.lampMat = new THREE.MeshBasicMaterial({ color: 0x555550 });
    this.lampPoleMat = new THREE.MeshLambertMaterial({ color: 0x55585a });
    this.lampPoleGeo = new THREE.CylinderGeometry(0.07, 0.1, 7, 5); this.lampPoleGeo.translate(0, 3.5, 0);
    this.lampHeadGeo = new THREE.BoxGeometry(0.9, 0.16, 0.34); this.lampHeadGeo.translate(0.9, 7, 0);
    // alone di luce a terra sotto i lampioni (solo di notte)
    const pc = document.createElement('canvas'); pc.width = pc.height = 64;
    const pctx = pc.getContext('2d'), gr = pctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,214,150,0.85)'); gr.addColorStop(0.45, 'rgba(255,200,130,0.3)'); gr.addColorStop(1, 'rgba(255,190,120,0)');
    pctx.fillStyle = gr; pctx.fillRect(0, 0, 64, 64);
    this.poolMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(pc), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0, polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -12, fog: false });
    this.poolGeo = new THREE.PlaneGeometry(17, 17); this.poolGeo.rotateX(-Math.PI / 2); this.poolGeo.translate(1.8, 0.3, 0);
    this.nodeComune = new Map();
    // indice delle localita' (per le indicazioni di direzione)
    this.places = new Map();
    for (const p of (meta ? meta.places : [])) {
      if (!['town', 'city', 'village', 'hamlet', 'suburb', 'quarter'].includes(p.t)) continue;
      const k = Math.floor(p.z / 500) * 10000 + Math.floor(p.x / 500);
      if (!this.places.has(k)) this.places.set(k, []);
      this.places.get(k).push(p);
    }
    this.night = 0;
  }

  update(time, night) {
    for (let gI = 0; gI < 2; gI++) {
      const st = signalState(gI, time), L = this.lights[gI];
      L.R.color.setHex(st === 'R' ? 0xff2a1a : 0x2a0806);
      L.Y.color.setHex(st === 'Y' ? 0xffb000 : 0x2a1e04);
      L.G.color.setHex(st === 'G' ? 0x20ff60 : 0x062a10);
    }
    this.night = night;
    this.lampMat.color.setHex(night > 0.3 ? 0xfff2c8 : 0x77797a);
    this.poolMat.opacity = Math.max(0, night - 0.25) * 0.75;
    this.poolMat.visible = night > 0.26;
  }

  comuneOfNode(nd) {
    let v = this.nodeComune.get(nd);
    if (v === undefined) { v = this.comuneAt(this.roads.nx[nd], this.roads.nz[nd]); this.nodeComune.set(nd, v); }
    return v;
  }

  placeNear(x, z, r = 260) {
    let best = null, bd = r;
    const ci = Math.floor(x / 500), cj = Math.floor(z / 500);
    for (let j = cj - 1; j <= cj + 1; j++) for (let i = ci - 1; i <= ci + 1; i++) {
      for (const p of this.places.get(j * 10000 + i) || []) { const d = Math.hypot(p.x - x, p.z - z); if (d < bd) { bd = d; best = p.n; } }
    }
    return best;
  }

  // direzioni di arrivo a un nodo: [{from, w, wi, seg, t, fwd}]
  approaches(nd) {
    const R = this.roads, out = [];
    for (let o = R.adjHead[nd]; o >= 0; o = R.adjNext[o]) {
      const w2 = R.ways[R.adjWay[o]], p = R.adjPos[o];
      if (!w2.drivable) continue;
      if (p > 0) out.push({ from: w2.nodes[p - 1], w: w2, wi: R.adjWay[o], seg: p - 1, t: 1, fwd: true });
      if (p < w2.nodes.length - 1 && !w2.oneway) out.push({ from: w2.nodes[p + 1], w: w2, wi: R.adjWay[o], seg: p, t: 0, fwd: false });
    }
    return out;
  }

  leadsToJunction(nd, from) {
    const R = this.roads;
    let prev = from, cur = nd, dist = 0;
    for (let it = 0; it < 40 && dist < 60; it++) {
      if (R.degMain[cur] >= 3) return true;
      let next = -1;
      for (let o = R.adjHead[cur]; o >= 0; o = R.adjNext[o]) {
        const w = R.ways[R.adjWay[o]], p = R.adjPos[o];
        for (const nb of [w.nodes[p - 1], w.nodes[p + 1]]) if (nb !== undefined && nb !== prev && nb !== cur) next = nb;
      }
      if (next < 0) return false;
      dist += Math.hypot(R.nx[next] - R.nx[cur], R.nz[next] - R.nz[cur]);
      prev = cur; cur = next;
    }
    return false;
  }

  neighbourLimit(nd, wi) {
    const R = this.roads;
    let other = -1;
    for (let o = R.adjHead[nd]; o >= 0; o = R.adjNext[o]) {
      const w2 = R.adjWay[o];
      if (w2 === wi || !R.ways[w2].drivable) continue;
      if (R.ways[w2].cls === R.ways[wi].cls) return R.ways[w2].limit;
      other = R.ways[w2].limit;
    }
    return other;
  }

  // segue la strada in uscita e restituisce il primo comune/localita' diverso raggiunto
  traceDestination(wi, pos, dir, startNode) {
    const R = this.roads;
    const startCom = this.comuneOfNode(startNode);
    const startPlace = this.placeNear(R.nx[startNode], R.nz[startNode], 600);
    let dist = 0, prev = startNode;
    for (let step = 0; step < 1500 && dist < 7000; step++) {
      const w = R.ways[wi], np = pos + dir;
      const cur = w.nodes[pos];
      if (np < 0 || np >= w.nodes.length) {
        // fine della via: prosecuzione piu' diritta (attraversando le rotatorie)
        const inA = Math.atan2(R.nx[cur] - R.nx[prev], R.nz[cur] - R.nz[prev]);
        let best = null, bestA = 1.15;
        const consider = (wj, pj, dj, fromNode) => {
          const w2 = R.ways[wj], to = w2.nodes[pj + dj];
          if (to === undefined) return;
          let a = Math.atan2(R.nx[to] - R.nx[fromNode], R.nz[to] - R.nz[fromNode]) - inA;
          while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI;
          if (Math.abs(a) < bestA) { bestA = Math.abs(a); best = [wj, pj, dj]; }
        };
        const exitsFrom = (nd, viaRb) => {
          for (let o = R.adjHead[nd]; o >= 0; o = R.adjNext[o]) {
            const wj = R.adjWay[o], w2 = R.ways[wj], pj = R.adjPos[o];
            if (!w2.drivable || w2.cls > CLS.UNCLASSIFIED) continue;
            if (wj === wi && pj === pos) continue;
            if (w2.flags & F.ROUNDABOUT) { if (!viaRb) ring(wj, pj); continue; }
            if (pj < w2.nodes.length - 1) consider(wj, pj, 1, viaRb ? cur : nd);
            if (pj > 0 && !w2.oneway) consider(wj, pj, -1, viaRb ? cur : nd);
          }
        };
        const ring = (wj, pj) => { // percorre l'anello raccogliendo le uscite
          let cw = wj, cp = pj;
          for (let i = 0; i < 120; i++) {
            const rw = R.ways[cw];
            if (cp >= rw.nodes.length - 1) {
              const nd = rw.nodes[rw.nodes.length - 1];
              let found = false;
              if (rw.nodes[0] === nd && rw.nodes.length > 2) { cp = 0; found = true; }
              else for (let o = R.adjHead[nd]; o >= 0; o = R.adjNext[o]) { const wq = R.adjWay[o]; if (wq !== cw && (R.ways[wq].flags & F.ROUNDABOUT) && R.adjPos[o] === 0) { cw = wq; cp = 0; found = true; break; } }
              if (!found) return;
            }
            cp++;
            const nd = rw === R.ways[cw] ? R.ways[cw].nodes[cp] : R.ways[cw].nodes[cp];
            if (nd === cur) return;
            if (R.degree[nd] >= 3) exitsFrom(nd, true);
          }
        };
        exitsFrom(cur, false);
        if (!best) return null;
        // l'uscita scelta puo' partire da un altro nodo dell'anello
        prev = cur;
        [wi, pos, dir] = best;
        continue;
      }
      const nb = w.nodes[np];
      dist += Math.hypot(R.nx[nb] - R.nx[cur], R.nz[nb] - R.nz[cur]);
      prev = cur; pos = np;
      if (step % 6 === 0 && dist > 250) {
        const c = this.comuneOfNode(nb);
        if (c && startCom && c !== startCom) return { name: c, dist };
        const pl = this.placeNear(R.nx[nb], R.nz[nb]);
        if (pl && pl !== startPlace && pl !== startCom && dist > 500) return { name: pl, dist };
      }
    }
    return null;
  }

  build(tk, tile) {
    const R = this.roads, T = this.terrain;
    const segs = R.tileSegs.get(tk) || [];
    const poles = new GeoBuilder(true, false), std = new GeoBuilder(true, true), txt = new GeoBuilder(true, true);
    const marks = new GeoBuilder(true, false), decal = new GeoBuilder(true, true);
    const lampsByGroup = [0, 1].map(() => ({ R: new GeoBuilder(false, false), Y: new GeoBuilder(false, false), G: new GeoBuilder(false, false) }));
    const greenLamp = new GeoBuilder(false, false);
    const atlas = new TextAtlas();
    const lampPos = [], signals = [], cameras = [];
    const grey = [0.42, 0.43, 0.44];
    const S = (name, size = 0.7) => ({ uv: uvStd(name), back: uvStd(name, true), w: size, h: size, name });
    const INF = new Set(['deadend', 'parking', 'curveR', 'curveL', 'steep', 'children']);

    // palo con cartelli impilati, letto dal traffico che viaggia in direzione (dx,dz)
    const post = (x, z, dx, dz, items, base = 2.0) => {
      items = items.filter((i) => i && i.uv);
      if (!items.length) return;
      for (const it of items) if (INF.has(it.name)) { const e = this.inferred[it.name] || (this.inferred[it.name] = { n: 0 }); e.n++; e.x = x; e.z = z; e.dx = dx; e.dz = dz; }
      const yaw = Math.atan2(-dx, -dz);
      const y0 = T.height(x, z);
      const total = items.reduce((s, i) => s + i.h + 0.06, 0);
      boxTo(poles, x, y0 + (base + total) / 2, z, 0.07, base + total, 0.07, yaw, grey);
      let yy = y0 + base + total;
      for (const it of items) {
        yy -= it.h / 2 + 0.03;
        plate(it.text ? txt : std, x - dx * 0.05, yy, z - dz * 0.05, it.w, it.h, yaw, it.uv);
        if (it.text && it.double) plate(txt, x + dx * 0.05, yy, z + dz * 0.05, it.w, it.h, yaw + Math.PI, it.uv);
        else plate(std, x + dx * 0.05, yy, z + dz * 0.05, it.w, it.h, yaw + Math.PI, it.back || uvStd('back'));
        yy -= it.h / 2 + 0.03;
      }
    };
    // cartelli con testo
    const streetPlate = (name) => {
      const uv = atlas.add('st' + name, 190, 42, (c, w, h) => {
        c.fillStyle = '#f7f7f2'; c.fillRect(0, 0, w, h); c.strokeStyle = '#1b2f6b'; c.lineWidth = 3; c.strokeRect(2.5, 2.5, w - 5, h - 5);
        c.fillStyle = '#16255a'; c.textAlign = 'center'; c.textBaseline = 'middle'; fitText(c, name, w - 16, 22); c.fillText(name, w / 2, h / 2 + 1);
      });
      return uv && { uv, w: 1.25, h: 0.28, text: true, double: true };
    };
    const townPlate = (name, end) => {
      const uv = atlas.add('tw' + (end ? 'E' : 'S') + name, 300, 116, (c, w, h) => {
        c.fillStyle = '#fff'; c.fillRect(0, 0, w, h); c.strokeStyle = '#111'; c.lineWidth = 6; c.strokeRect(7, 7, w - 14, h - 14);
        c.fillStyle = '#111'; c.textAlign = 'center'; c.textBaseline = 'middle'; fitText(c, name, w - 44, 50); c.fillText(name, w / 2, h / 2 + 2);
        if (end) { c.strokeStyle = '#c8101a'; c.lineWidth = 12; c.beginPath(); c.moveTo(16, h - 16); c.lineTo(w - 16, 16); c.stroke(); }
      });
      return uv && { uv, w: 2.1, h: 0.82, text: true };
    };
    const dirPlate = (name, km, blue) => {
      const label = km ? `${name}  ${km}` : name;
      const uv = atlas.add('dr' + (blue ? 'B' : 'W') + label, 300, 64, (c, w, h) => {
        c.fillStyle = blue ? '#0a4fa6' : '#fff'; c.fillRect(0, 0, w, h); c.strokeStyle = blue ? '#fff' : '#111'; c.lineWidth = 3; c.strokeRect(3.5, 3.5, w - 7, h - 7);
        c.fillStyle = blue ? '#fff' : '#111';
        c.beginPath(); c.moveTo(34, 12); c.lineTo(54, 34); c.lineTo(41, 34); c.lineTo(41, 54); c.lineTo(27, 54); c.lineTo(27, 34); c.lineTo(14, 34); c.closePath(); c.fill();
        c.textAlign = 'left'; c.textBaseline = 'middle'; fitText(c, label, w - 76, 30); c.fillText(label, 66, h / 2 + 2);
      });
      return uv && { uv, w: 1.9, h: 0.42, text: true };
    };
    const boardPlate = (lines, color) => {
      const hpx = 26 + lines.length * 46;
      const uv = atlas.add('bd' + color + lines.join('|'), 400, hpx, (c, w, h) => {
        const bg = { green: '#0b7a3b', blue: '#0a4fa6', white: '#fff' }[color], fg = color === 'white' ? '#111' : '#fff';
        c.fillStyle = bg; c.fillRect(0, 0, w, h); c.strokeStyle = fg; c.lineWidth = 4; c.strokeRect(5, 5, w - 10, h - 10);
        c.fillStyle = fg; c.textBaseline = 'middle';
        lines.forEach((ln, i) => { const y = 36 + i * 46; c.textAlign = 'left'; fitText(c, ln, w - 90, 34); c.fillText(ln, 22, y); });
        c.beginPath(); c.moveTo(w - 28, 18); c.lineTo(w - 28, 46); c.lineTo(w - 56, 18); c.closePath(); c.fill();
        c.lineWidth = 8; c.strokeStyle = fg; c.beginPath(); c.moveTo(w - 62, 52); c.lineTo(w - 36, 26); c.stroke();
      });
      return uv && { uv, w: 3.2, h: 3.2 * hpx / 400, text: true };
    };
    const refPlate = (ref) => {
      const uv = atlas.add('rf' + ref, 130, 56, (c, w, h) => {
        const moto = /^A\d/.test(ref);
        c.fillStyle = '#fff'; c.fillRect(0, 0, w, h); c.fillStyle = moto ? '#0b7a3b' : '#0a4fa6'; c.fillRect(4, 4, w - 8, h - 8);
        c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle'; fitText(c, ref, w - 18, 30); c.fillText(ref, w / 2, h / 2 + 2);
      });
      return uv && { uv, w: 0.8, h: 0.34, text: true };
    };
    const busPlate = (name) => {
      const uv = atlas.add('bs' + name, 190, 36, (c, w, h) => {
        c.fillStyle = '#f2c417'; c.fillRect(0, 0, w, h); c.fillStyle = '#111'; c.textAlign = 'center'; c.textBaseline = 'middle'; fitText(c, name, w - 12, 20); c.fillText(name, w / 2, h / 2 + 1);
      });
      return uv && { uv, w: 1.0, h: 0.2, text: true, double: true };
    };
    const totemPlate = (name) => {
      const uv = atlas.add('ft' + name, 150, 150, (c, w, h) => {
        c.fillStyle = '#f4f4f4'; c.fillRect(0, 0, w, h); c.fillStyle = '#d6202a'; c.fillRect(0, 0, w, 52);
        c.fillStyle = '#fff'; c.textAlign = 'center'; c.textBaseline = 'middle'; fitText(c, name || 'CARBURANTI', w - 14, 26); c.fillText(name || 'CARBURANTI', w / 2, 27);
        c.fillStyle = '#111'; c.font = 'bold 20px Arial'; c.textAlign = 'left'; c.fillText('Benzina', 10, 80); c.fillText('Gasolio', 10, 108); c.fillText('GPL', 10, 134);
        c.fillStyle = '#0b7a3b'; c.textAlign = 'right'; c.fillText('1.7' + (name.length % 9), w - 10, 80); c.fillText('1.6' + ((name.length * 3) % 9), w - 10, 108); c.fillText('0.7' + ((name.length * 7) % 9), w - 10, 134);
      });
      return uv && { uv, w: 1.5, h: 1.5, text: true, double: true };
    };
    const speedItem = (v) => (STD.includes('s' + v) ? S('s' + v, 0.66) : null);
    const roadY = (wi, k, t, x, z) => R.heightOn(wi, k, t, x, z);
    const stopLine = (q, nd, dx, dz, back, dash) => {
      const qrx = -dz, qrz = dx, qhw = q.w.width / 2;
      const cx = R.nx[nd] - dx * (back + 0.8), cz = R.nz[nd] - dz * (back + 0.8);
      const lc = q.w.oneway ? -qhw + 0.3 : (q.fwd ? q.w.cOff : -q.w.cOff) + 0.1;
      const o1 = qhw - 0.3;
      const yy = roadY(q.wi, q.seg, q.t, cx, cz) + 0.03;
      if (dash) {
        for (let o = lc; o + 0.5 <= o1; o += 0.75) {
          const P = [[o, -0.3], [o + 0.5, -0.3], [o + 0.25, 0.35]].map(([la, lo]) => marks.v(cx + qrx * la - dx * lo, yy, cz + qrz * la - dz * lo));
          marks.tri(P[0], P[1], P[2]); marks.tri(P[0], P[2], P[1]);
        }
      } else {
        const p1 = marks.v(cx + qrx * lc - dx * 0.25, yy, cz + qrz * lc - dz * 0.25), p2 = marks.v(cx + qrx * o1 - dx * 0.25, yy, cz + qrz * o1 - dz * 0.25);
        const p3 = marks.v(cx + qrx * o1 + dx * 0.25, yy, cz + qrz * o1 + dz * 0.25), p4 = marks.v(cx + qrx * lc + dx * 0.25, yy, cz + qrz * lc + dz * 0.25);
        marks.quad(p1, p2, p3, p4);
      }
      return [cx + qrx * (lc + o1) / 2, cz + qrz * (lc + o1) / 2, o1 - lc];
    };

    const doneNode = new Set(), doneName = new Set(), doneRef = new Set();
    const donePark = new Set(), curveDone = new Map(), steepDone = new Map();
    let plateCount = 0;

    for (const packed of segs) {
      const wi = Math.floor(packed / 16384), k = packed % 16384;
      const w = R.ways[wi];
      if (!w.drivable) continue;
      const a = w.nodes[k], b = w.nodes[k + 1];
      const ax = R.nx[a], az = R.nz[a], bx = R.nx[b], bz = R.nz[b];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 0.3) continue;
      const sx = (bx - ax) / L, sz = (bz - az) / L, rx = -sz, rz = sx;
      const hw = w.width / 2;
      const last = w.nodes.length - 2;
      const side = hw + 0.9;

      for (const nd of [a, b]) {
        if (doneNode.has(nd)) continue;
        doneNode.add(nd);
        const tag = R.ntag[nd];
        // --- targhe con il nome delle vie agli incroci
        if (R.degMain[nd] >= 3 && plateCount < 240) {
          const seenN = new Set();
          for (let o = R.adjHead[nd]; o >= 0; o = R.adjNext[o]) {
            const w2 = R.ways[R.adjWay[o]], p = R.adjPos[o];
            if (!w2.name || !w2.drivable || w2.cls > CLS.LIVING || seenN.has(w2.name) || doneName.has(w2.name + '@' + nd)) continue;
            seenN.add(w2.name); doneName.add(w2.name + '@' + nd);
            const to = p < w2.nodes.length - 1 ? w2.nodes[p + 1] : w2.nodes[p - 1];
            let dx = R.nx[to] - R.nx[nd], dz = R.nz[to] - R.nz[nd]; const dl = Math.hypot(dx, dz) || 1; dx /= dl; dz /= dl;
            const off = R.w1[nd] / 2 + 2.4, s2 = w2.width / 2 + 0.9;
            const px = R.nx[nd] + dx * off - dz * s2, pz = R.nz[nd] + dz * off + dx * s2;
            const it = streetPlate(w2.name);
            if (it) { post(px, pz, -dz, dx, [it], 2.45); plateCount++; }
          }
        }
        if (!tag) continue;
        const appr = this.approaches(nd).filter((q) => q.w.cls <= CLS.SERVICE);
        if (!appr.length) continue;
        const isJunction = R.degMain[nd] >= 3;
        const dirOf = (q) => { let dx = R.nx[nd] - R.nx[q.from], dz = R.nz[nd] - R.nz[q.from]; const dl = Math.hypot(dx, dz) || 1; return [dx / dl, dz / dl, dl]; };
        if (tag === NT.SIGNALS || tag === NT.STOP || tag === NT.GIVE_WAY || tag === NT.CROSSING_SIGNALS) {
          let use = appr;
          const dirTag = R.ndir[nd];
          if (dirTag && !isJunction) { const f = appr.filter((q) => q.fwd === (dirTag === 1)); if (f.length) use = f; }
          else if (tag !== NT.SIGNALS && tag !== NT.CROSSING_SIGNALS && isJunction) {
            const best = Math.min(...appr.map((q) => q.w.cls));
            use = appr.filter((q) => q.w.cls > best);
            if (!use.length) use = appr.slice(0, 1);
          } else if (!isJunction && tag !== NT.CROSSING_SIGNALS) {
            const toward = appr.filter((q) => this.leadsToJunction(nd, q.from));
            if (toward.length) use = toward;
          }
          for (const q of use) {
            const [dx, dz, dl] = dirOf(q);
            const qrx = -dz, qrz = dx, qhw = q.w.width / 2;
            const back = isJunction ? Math.min(dl * 0.6 + 2, R.w1[nd] / 2 + 1.5) : (tag === NT.CROSSING_SIGNALS ? 2.5 : 0);
            const px = R.nx[nd] - dx * back + qrx * (qhw + 0.9), pz = R.nz[nd] - dz * back + qrz * (qhw + 0.9);
            const yaw = Math.atan2(-dx, -dz);
            if (tag === NT.SIGNALS || tag === NT.CROSSING_SIGNALS) {
              const y = T.height(px, pz);
              boxTo(poles, px, y + 1.55, pz, 0.09, 3.1, 0.09, yaw, grey);
              boxTo(poles, px, y + 3.0, pz, 0.38, 1.05, 0.3, yaw, [0.1, 0.1, 0.1]);
              const fxo = -dx * 0.16, fzo = -dz * 0.16;
              if (tag === NT.SIGNALS) {
                const group = Math.abs(dx) > Math.abs(dz) ? 1 : 0, L3 = lampsByGroup[group];
                boxTo(L3.R, px + fxo, y + 3.33, pz + fzo, 0.22, 0.22, 0.04, yaw, [1, 1, 1]);
                boxTo(L3.Y, px + fxo, y + 3.0, pz + fzo, 0.22, 0.22, 0.04, yaw, [1, 1, 1]);
                boxTo(L3.G, px + fxo, y + 2.67, pz + fzo, 0.22, 0.22, 0.04, yaw, [1, 1, 1]);
                signals.push({ node: nd, group });
              } else boxTo(greenLamp, px + fxo, y + 2.67, pz + fzo, 0.22, 0.22, 0.04, yaw, [1, 1, 1]);
              stopLine(q, nd, dx, dz, back + (tag === NT.CROSSING_SIGNALS ? 0.5 : 0), false);
            } else if (tag === NT.STOP) {
              post(px, pz, dx, dz, [S('stop', 0.75)]);
              const [lx, lz, lw] = stopLine(q, nd, dx, dz, back, false);
              if (q.w.cls <= CLS.RESIDENTIAL && lw > 2) R.addDecal(decal, q.wi, q.seg, q.t, lx - dx * 2.6, lz - dz * 2.6, dx, dz, Math.min(2.4, lw - 0.4), 3.0, 'stop');
            } else {
              post(px, pz, dx, dz, [S('giveway', 0.8)]);
              stopLine(q, nd, dx, dz, back, true);
            }
          }
        } else if (tag === NT.CROSSING && !isJunction && w.cls <= CLS.UNCLASSIFIED) {
          for (const q of appr) { const [dx, dz] = dirOf(q); post(R.nx[nd] - dx * 2.6 - dz * (q.w.width / 2 + 0.9), R.nz[nd] - dz * 2.6 + dx * (q.w.width / 2 + 0.9), dx, dz, [S('ped', 0.6)]); }
        } else if (tag === NT.BUMP || tag === NT.TABLE) {
          for (const q of appr) { const [dx, dz] = dirOf(q); post(R.nx[nd] - dx * 7 - dz * (q.w.width / 2 + 0.9), R.nz[nd] - dz * 7 + dx * (q.w.width / 2 + 0.9), dx, dz, [S('bump', 0.8), tag === NT.TABLE ? null : speedItem(30)]); }
        } else if (tag === NT.LEVEL_CROSSING) {
          for (const q of appr) {
            const [dx, dz] = dirOf(q);
            const px = R.nx[nd] - dx * 5 - dz * (q.w.width / 2 + 0.9), pz = R.nz[nd] - dz * 5 + dx * (q.w.width / 2 + 0.9);
            post(px, pz, dx, dz, [S('level', 0.95)], 1.7);
            // sbarra alzata
            const y = T.height(px, pz), yaw = Math.atan2(-dx, -dz);
            boxTo(poles, px - dx * 0.8, y + 0.55, pz - dz * 0.8, 0.3, 1.1, 0.3, yaw, [0.75, 0.75, 0.75]);
            for (let i = 0; i < 6; i++) boxTo(poles, px - dx * 0.8 + dz * 0.25, y + 1.4 + i * 0.7, pz - dz * 0.8 - dx * 0.25, 0.1, 0.7, 0.1, yaw, i % 2 ? [0.85, 0.1, 0.1] : [0.95, 0.95, 0.95]);
          }
        }
      }

      // --- limiti di velocita' mappati, all'inizio delle vie quando cambiano
      const speedOK = w.limitMapped && w.cls <= CLS.RESIDENTIAL && w.len > 80 && !(w.flags & F.ROUNDABOUT);
      if (k === 0 && speedOK && this.neighbourLimit(a, wi) !== w.limit) {
        const d = Math.min(14, w.len * 0.3), [px, pz] = R.pointAt(w, d);
        post(px + rx * side, pz + rz * side, sx, sz, [speedItem(w.limit)], 2.1);
      }
      if (k === last && !w.oneway && speedOK && this.neighbourLimit(b, wi) !== w.limit) {
        const d = Math.min(14, w.len * 0.3), [px, pz] = R.pointAt(w, w.len - d);
        post(px - rx * side, pz - rz * side, -sx, -sz, [speedItem(w.limit)], 2.1);
      }

      // --- senso unico (ingresso) e senso vietato (uscita) dai tag oneway
      if (w.oneway && !(w.flags & (F.ROUNDABOUT | F.LINK)) && w.cls >= CLS.TERTIARY && w.cls <= CLS.LIVING && w.len > 25) {
        const chained = (nd, atStart) => {
          for (let o = R.adjHead[nd]; o >= 0; o = R.adjNext[o]) {
            const wj = R.adjWay[o], w2 = R.ways[wj];
            if (wj !== wi && w2.oneway && (w2.name === w.name || R.degMain[nd] < 3) && R.adjPos[o] === (atStart ? w2.nodes.length - 1 : 0)) return true;
          }
          return false;
        };
        if (k === 0 && R.degMain[a] >= 3 && !R.onRb[a] && !chained(a, true)) {
          const [px, pz] = R.pointAt(w, Math.min(6, w.len * 0.3));
          post(px + rx * side, pz + rz * side, sx, sz, [S('oneway', 0.6)]);
        }
        if (k === last && R.degMain[b] >= 3 && !R.onRb[b] && !chained(b, false)) {
          const back = Math.min(w.len * 0.3, R.w1[b] / 2 + 1.5);
          for (const sg of [1, -1]) post(bx - sx * back + rx * side * sg, bz - sz * back + rz * side * sg, -sx, -sz, [S('noentry', 0.6)]);
        }
      }

      // --- strada senza uscita: all'imbocco delle vie che finiscono in un vicolo cieco
      if (!w.oneway && w.cls >= CLS.UNCLASSIFIED && w.cls <= CLS.LIVING && w.len > 50 && !(w.flags & (F.PRIVATE | F.ROUNDABOUT))) {
        const n0 = w.nodes[0], n1 = w.nodes[w.nodes.length - 1];
        if (k === 0 && R.degMain[n0] >= 3 && R.degree[n1] === 1) {
          const [px, pz] = R.pointAt(w, Math.min(9, w.len * 0.2));
          post(px + rx * side, pz + rz * side, sx, sz, [S('deadend', 0.6)]);
        }
        if (k === last && R.degMain[n1] >= 3 && R.degree[n0] === 1) {
          const [px, pz] = R.pointAt(w, w.len - Math.min(9, w.len * 0.2));
          post(px - rx * side, pz - rz * side, -sx, -sz, [S('deadend', 0.6)]);
        }
      }

      // --- parcheggio: dove una corsia di parcheggio si stacca da una strada
      if (w.flags & F.AISLE) {
        for (const [nd, at, ddx, ddz] of [[w.nodes[0], k === 0, sx, sz], [w.nodes[w.nodes.length - 1], k === last, -sx, -sz]]) {
          if (!at) continue;
          let fromRoad = false;
          for (let o = R.adjHead[nd]; o >= 0; o = R.adjNext[o]) { const w2 = R.ways[R.adjWay[o]]; if (w2 !== w && w2.drivable && !(w2.flags & F.AISLE) && w2.cls <= CLS.SERVICE) fromRoad = true; }
          const cell = Math.round(R.nx[nd] / 70) + '_' + Math.round(R.nz[nd] / 70);
          if (!fromRoad || donePark.has(cell)) continue;
          donePark.add(cell);
          post(R.nx[nd] + ddx * 3 - ddz * (hw + 0.8), R.nz[nd] + ddz * 3 + ddx * (hw + 0.8), ddx, ddz, [S('parking', 0.6)]);
        }
      }

      // --- curva pericolosa e discesa ripida sulle strade extraurbane (dalla geometria e dalle quote reali)
      if (w.cls <= CLS.UNCLASSIFIED && w.limit >= 50 && !(w.flags & (F.ROUNDABOUT | F.LINK | F.TUNNEL)) && w.len > 160) {
        const s0 = w.cum[k];
        const dirAt = (s) => { const p = R.pointAt(w, s - 12), q = R.pointAt(w, s + 12); const l = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1; return [(q[0] - p[0]) / l, (q[1] - p[1]) / l]; };
        const bendAt = (s) => { if (s < 40 || s > w.len - 40) return 0; const d0 = dirAt(s - 22), d1 = dirAt(s + 22); return Math.atan2(d0[0] * d1[1] - d0[1] * d1[0], d0[0] * d1[0] + d0[1] * d1[1]); };
        const lastC = curveDone.get(wi);
        if (s0 > 75 && s0 < w.len - 75 && R.degMain[a] < 3 && (lastC === undefined || Math.abs(s0 - lastC) > 150) && !T.isUrban(ax, az)) {
          const th = bendAt(s0);
          // apice della curva: svolta di oltre ~32 gradi in 45 m (raggio sotto gli 80 m) e massimo locale
          if (Math.abs(th) > 0.56 && Math.abs(th) >= Math.abs(bendAt(s0 - 12)) && Math.abs(th) >= Math.abs(bendAt(s0 + 12))) {
            curveDone.set(wi, s0);
            // th > 0: la strada gira a destra per chi la percorre in avanti (sinistra = (dz, -dx))
            const p1 = R.pointAt(w, s0 - 65), d1 = dirAt(s0 - 65);
            post(p1[0] - d1[1] * side, p1[1] + d1[0] * side, d1[0], d1[1], [S(th > 0 ? 'curveR' : 'curveL', 0.8)]);
            if (!w.oneway) {
              const p2 = R.pointAt(w, s0 + 65), d2 = dirAt(s0 + 65);
              post(p2[0] + d2[1] * side, p2[1] - d2[0] * side, -d2[0], -d2[1], [S(th > 0 ? 'curveL' : 'curveR', 0.8)]);
            }
          }
        }
        const lastS = steepDone.get(wi);
        if (!w.abs && s0 > 30 && s0 < w.len - 130 && (lastS === undefined || Math.abs(s0 - lastS) > 450)) {
          const hAt = (s) => { const p = R.pointAt(w, s); return T.height(p[0], p[1]); };
          const h0 = hAt(s0), drop = h0 - hAt(s0 + 110), before = hAt(Math.max(0, s0 - 90)) - h0;
          // inizio di una discesa (o, nell'altro senso, cima di una salita) oltre il 9%
          if (Math.abs(drop) > 10 && Math.abs(before) < 4.5) {
            steepDone.set(wi, s0);
            if (drop > 0) post(ax + rx * side, az + rz * side, sx, sz, [S('steep', 0.8)]);
            else if (!w.oneway) { const p2 = R.pointAt(w, s0 + 110), d2 = dirAt(Math.min(w.len - 15, s0 + 110)); post(p2[0] + d2[1] * side, p2[1] - d2[0] * side, -d2[0], -d2[1], [S('steep', 0.8)]); }
          }
        }
      }

      // --- tabelle di direzione dal tag OSM destination (svincoli)
      if (k === 0 && w.dest && w.len > 30) {
        const parts = w.dest.split('|');
        const names = parts[parts.length - 1].split(';').map((s) => s.trim()).filter(Boolean).slice(0, 4);
        if (parts.length > 1) names[0] = parts[0].split(';')[0] + '  ' + names[0];
        const color = w.cls === 0 ? 'green' : (w.cls <= 3 || w.limit > 50) ? 'blue' : 'white';
        const it = boardPlate(names, color);
        if (it) {
          const [px, pz] = R.pointAt(w, Math.min(18, w.len * 0.4));
          const bx2 = px + rx * (side + 1.8), bz2 = pz + rz * (side + 1.8), y = T.height(bx2, bz2), yaw = Math.atan2(-sx, -sz);
          for (const sg of [1, -1]) boxTo(poles, bx2 + rx * 1.3 * sg, y + 1.6 + it.h / 2, bz2 + rz * 1.3 * sg, 0.1, 3.2 + it.h, 0.1, yaw, grey);
          plate(txt, bx2 - sx * 0.08, y + 3.2 + it.h / 2, bz2 - sz * 0.08, it.w, it.h, yaw, it.uv);
          plate(std, bx2 + sx * 0.08, y + 3.2 + it.h / 2, bz2 + sz * 0.08, it.w, it.h, yaw + Math.PI, uvStd('back'));
        }
      }

      // --- identificazione della strada (SP / SS) dal tag ref
      if (w.ref && w.cls <= CLS.TERTIARY && !(w.flags & (F.LINK | F.ROUNDABOUT)) && w.len > 160) {
        const ref = w.ref.split(';')[0].trim();
        if (k === 0 && R.degMain[a] >= 3 && !doneRef.has(ref + a)) {
          doneRef.add(ref + a);
          const [px, pz] = R.pointAt(w, 38);
          post(px + rx * side, pz + rz * side, sx, sz, [refPlate(ref)], 1.9);
        }
        if (k === last && !w.oneway && R.degMain[b] >= 3 && !doneRef.has(ref + b)) {
          doneRef.add(ref + b);
          const [px, pz] = R.pointAt(w, w.len - 38);
          post(px - rx * side, pz - rz * side, -sx, -sz, [refPlate(ref)], 1.9);
        }
      }

      // --- inizio/fine centro abitato ai confini comunali reali
      if (w.cls <= CLS.RESIDENTIAL && w.cls >= CLS.TRUNK && !(w.flags & (F.LINK | F.BRIDGE | F.TUNNEL | F.ROUNDABOUT))) {
        const ca = this.comuneOfNode(a), cb = this.comuneOfNode(b);
        if (ca && cb && ca !== cb) {
          let lo = 0, hi = 1;
          for (let it = 0; it < 10; it++) { const m = (lo + hi) / 2; if (this.comuneAt(ax + (bx - ax) * m, az + (bz - az) * m) === ca) lo = m; else hi = m; }
          const cx = ax + (bx - ax) * lo, cz = az + (bz - az) * lo;
          this.townSign(poles, txt, std, cx + rx * (side + 0.4), cz + rz * (side + 0.4), sx, sz, townPlate(cb, false), townPlate(cb, true));
          if (!w.oneway) this.townSign(poles, txt, std, cx - rx * (side + 0.4), cz - rz * (side + 0.4), -sx, -sz, townPlate(ca, false), townPlate(ca, true));
        }
      }

      // --- lampioni: dal tag lit=yes, altrimenti lungo le strade urbane
      if (w.cls >= CLS.PRIMARY && w.cls <= CLS.LIVING && !w.abs && !(w.flags & F.ROUNDABOUT) && w.lit !== 2) {
        const s0 = w.cum[k];
        for (let d = Math.ceil(s0 / 30) * 30 - s0; d < L; d += 30) {
          const cx = ax + sx * d, cz = az + sz * d;
          if (w.lit !== 1 && !T.isUrban(cx, cz)) continue;
          const sd = (Math.floor((s0 + d) / 30 + 0.5) % 2 === 0) ? 1 : (w.oneway ? 1 : -1);
          const px = cx + rx * sd * (hw + 1.1), pz = cz + rz * sd * (hw + 1.1);
          const nr = R.nearest(px, pz, 6);
          if (nr && nr.d < R.ways[nr.wi].width / 2 + 0.4) continue;
          lampPos.push([px, T.height(px, pz), pz, Math.atan2(rz * sd, -rx * sd)]);
        }
      }
    }

    // --- attenzione bambini: sulla strada davanti alle scuole (dai luoghi OSM)
    const x0t = this.meta.proj.xmin + (tk % 1000) * 1000, z0t = this.meta.proj.zmin + Math.floor(tk / 1000) * 1000;
    for (const lm of this.meta.landmarks) {
      if (lm[0] !== 11 || lm[1] < x0t || lm[1] >= x0t + 1000 || lm[2] < z0t || lm[2] >= z0t + 1000) continue;
      const nr = R.nearest(lm[1], lm[2], 90, (w) => w.drivable && w.cls >= CLS.TERTIARY && w.cls <= CLS.LIVING && !(w.flags & F.PRIVATE));
      if (!nr) continue;
      const w = R.ways[nr.wi], sC = w.cum[nr.k] + (w.cum[nr.k + 1] - w.cum[nr.k]) * nr.t, sd = w.width / 2 + 0.9;
      for (const [s, sg] of [[sC - 45, 1], [sC + 45, -1]]) {
        if (s < 5 || s > w.len - 5 || (sg < 0 && w.oneway)) continue;
        const p = R.pointAt(w, s), q = R.pointAt(w, s + sg * 4);
        const l = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1, dx = (q[0] - p[0]) / l, dz = (q[1] - p[1]) / l;
        post(p[0] - dz * sd, p[1] + dx * sd, dx, dz, [S('children', 0.75)]);
      }
    }

    // --- ingressi in rotatoria: dare precedenza + rotatoria
    for (const e of R.roundaboutEntries(tk)) {
      const w = R.ways[e.wi];
      let dx = R.nx[e.nd] - R.nx[e.from], dz = R.nz[e.nd] - R.nz[e.from];
      const dl = Math.hypot(dx, dz) || 1; dx /= dl; dz /= dl;
      const back = R.w1[e.nd] / 2 + 2.5;
      // c'e' gia' un dare precedenza/STOP mappato sull'accesso?
      let mapped = false, dist = 0, pos = e.dir > 0 ? w.nodes.length - 1 : 0;
      while (dist < 30 && pos - e.dir >= 0 && pos - e.dir < w.nodes.length) {
        const p0 = w.nodes[pos], p1 = w.nodes[pos - e.dir];
        dist += Math.hypot(R.nx[p1] - R.nx[p0], R.nz[p1] - R.nz[p0]); pos -= e.dir;
        if (R.ntag[p1] === NT.GIVE_WAY || R.ntag[p1] === NT.STOP) { mapped = true; break; }
      }
      const px = R.nx[e.nd] - dx * back - dz * (w.width / 2 + 0.9), pz = R.nz[e.nd] - dz * back + dx * (w.width / 2 + 0.9);
      post(px, pz, dx, dz, [mapped ? null : S('giveway', 0.8), S('roundabout', 0.62)]);
    }

    // --- indicazioni di direzione alle uscite delle rotatorie (prossimo comune o localita')
    const doneExit = new Set();
    for (const packed of segs) {
      const wi = Math.floor(packed / 16384), k = packed % 16384, w = R.ways[wi];
      if (w.flags & F.ROUNDABOUT || !w.drivable || w.cls > CLS.TERTIARY) continue;
      const lastSeg = w.nodes.length - 2;
      for (const [pos, dir] of [[0, 1], [w.nodes.length - 1, -1]]) {
        if ((dir > 0 ? k !== 0 : k !== lastSeg) || (dir < 0 && w.oneway)) continue;
        const nd = w.nodes[pos];
        if (!R.onRb[nd] || doneExit.has(wi * 2 + (dir > 0 ? 0 : 1))) continue;
        doneExit.add(wi * 2 + (dir > 0 ? 0 : 1));
        const dest = this.traceDestination(wi, pos, dir, nd);
        if (!dest) continue;
        const to = w.nodes[pos + dir];
        let dx = R.nx[to] - R.nx[nd], dz = R.nz[to] - R.nz[nd]; const dl = Math.hypot(dx, dz) || 1; dx /= dl; dz /= dl;
        const blue = w.limit > 50 || w.cls <= CLS.SECONDARY;
        const it = dirPlate(dest.name, blue ? Math.max(1, Math.round(dest.dist / 1000)) : 0, blue);
        const off = R.w1[nd] / 2 + 3.5;
        post(R.nx[nd] + dx * off - dz * (w.width / 2 + 1.2), R.nz[nd] + dz * off + dx * (w.width / 2 + 1.2), dx, dz, [it], 2.3);
      }
    }

    // --- elementi puntuali OSM: fermate, lampioni, cartelli di localita', autovelox, distributori
    for (const [kind, qx, qz, si] of (tile && tile.pt) || []) {
      const x = qx / 10, z = qz / 10, text = tile.s[si] || '';
      const nr = R.nearest(x, z, 30, (ww) => ww.drivable && ww.cls <= CLS.SERVICE);
      let dx = 0, dz = 1;
      if (nr) { const dl = Math.hypot(nr.dx, nr.dz) || 1; dx = nr.dx / dl; dz = nr.dz / dl; }
      // lato della strada su cui si trova l'elemento
      const sideSign = nr ? Math.sign((x - nr.px) * -dz + (z - nr.pz) * dx) || 1 : 1;
      const hw2 = nr ? R.ways[nr.wi].width / 2 : 0;
      const clear = nr ? Math.max(nr.d, hw2 + 1.0) : 0;
      const px = nr ? nr.px - dz * sideSign * clear : x, pz = nr ? nr.pz + dx * sideSign * clear : z;
      const fx = dx * sideSign, fz = dz * sideSign; // verso di marcia sul lato dell'elemento
      if (kind === 1) {
        post(px, pz, fx, fz, [S('bus', 0.5), text ? busPlate(text) : null], 2.0);
        // pensilina
        const y = T.height(px, pz), yaw = Math.atan2(-fx, -fz), ox = -dz * sideSign, oz = dx * sideSign;
        const cx = px + fx * 2.2 + ox * 0.9, cz = pz + fz * 2.2 + oz * 0.9;
        boxTo(poles, cx, y + 2.45, cz, 1.5, 0.08, 3.0, yaw, [0.25, 0.3, 0.34]);
        boxTo(poles, cx + ox * 0.7, y + 1.25, cz + oz * 0.7, 0.05, 2.4, 3.0, yaw, [0.55, 0.68, 0.74]);
        for (const e of [-1.45, 1.45]) boxTo(poles, cx + fx * e - ox * 0.6, y + 1.2, cz + fz * e - oz * 0.6, 0.07, 2.4, 0.07, yaw, grey);
      } else if (kind === 2) {
        const yaw = nr ? Math.atan2(dx * sideSign, dz * sideSign) : 0;
        lampPos.push([x, T.height(x, z), z, yaw, 1]);
      } else if (kind === 3 && nr) {
        // cartello di localita' mappato: l'ingresso e' il verso che avvicina al centro abitato
        const pl = [...this.places.values()].flat().find((p) => p.n === text);
        let ex = fx, ez = fz;
        if (pl) { const sgn = Math.sign((pl.x - px) * dx + (pl.z - pz) * dz) || 1; ex = dx * sgn; ez = dz * sgn; }
        const sx2 = nr.px - ez * (hw2 + 1.3), sz2 = nr.pz + ex * (hw2 + 1.3);
        this.townSign(poles, txt, std, sx2, sz2, ex, ez, townPlate(text, false), townPlate(text, true));
      } else if (kind === 4 && nr) {
        post(px, pz, fx, fz, [S('camera', 0.9)], 2.0);
        cameras.push([nr.px + dx * sideSign * 14, nr.pz + dz * sideSign * 14]);
        const y = T.height(px, pz), yaw = Math.atan2(-fx, -fz);
        boxTo(poles, px + fx * 14, y + 1.4, pz + fz * 14, 0.5, 2.8, 0.5, yaw, [0.95, 0.5, 0.1]);
        boxTo(poles, px + fx * 14 - fx * 0.26, y + 2.3, pz + fz * 14 - fz * 0.26, 0.3, 0.3, 0.04, yaw, [0.05, 0.05, 0.05]);
      } else if (kind === 5) {
        const it = totemPlate(text);
        if (it) {
          const y = T.height(px, pz), yaw = Math.atan2(-fx, -fz);
          boxTo(poles, px, y + 2.6, pz, 1.6, 5.2, 0.3, yaw, [0.9, 0.9, 0.9]);
          plate(txt, px - fx * 0.16, y + 4.3, pz - fz * 0.16, it.w, it.h, yaw, it.uv);
          plate(txt, px + fx * 0.16, y + 4.3, pz + fz * 0.16, it.w, it.h, yaw + Math.PI, it.uv);
        }
      }
    }

    const group = new THREE.Group();
    const mats = [];
    if (!poles.empty) group.add(poles.mesh(this.poleMat, true));
    if (!std.empty) group.add(std.mesh(this.stdMat));
    if (!txt.empty && atlas.cv) { const m = atlas.material(); mats.push(m); group.add(txt.mesh(m)); }
    if (!marks.empty) group.add(marks.mesh(this.markMat));
    if (!decal.empty) group.add(decal.mesh(this.decalMat));
    for (let gI = 0; gI < 2; gI++) for (const c of ['R', 'Y', 'G']) if (!lampsByGroup[gI][c].empty) group.add(lampsByGroup[gI][c].mesh(this.lights[gI][c]));
    if (!greenLamp.empty) group.add(greenLamp.mesh(this.greenMat));
    if (lampPos.length) {
      // evita doppioni tra lampioni mappati e stimati
      const mapped = lampPos.filter((l) => l[4]);
      const list = lampPos.filter((l) => l[4] || !mapped.some((m) => Math.hypot(m[0] - l[0], m[2] - l[2]) < 22));
      const poleI = new THREE.InstancedMesh(this.lampPoleGeo, this.lampPoleMat, list.length);
      const headI = new THREE.InstancedMesh(this.lampHeadGeo, this.lampMat, list.length);
      const poolI = new THREE.InstancedMesh(this.poolGeo, this.poolMat, list.length);
      const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
      list.forEach(([x, y, z, yaw], i) => {
        q.setFromAxisAngle(up, yaw); p.set(x, y, z); m.compose(p, q, one);
        poleI.setMatrixAt(i, m); headI.setMatrixAt(i, m); poolI.setMatrixAt(i, m);
      });
      poleI.computeBoundingSphere(); headI.computeBoundingSphere(); poolI.computeBoundingSphere();
      poolI.renderOrder = 2;
      group.add(poleI, headI, poolI);
    }
    group.userData.dispose = () => { for (const m of mats) { m.map.dispose(); m.dispose(); } };
    return { group, signals, lamps: lampPos, cameras };
  }

  // pannello di localita' su due pali: fronte = inizio, retro = fine (barra rossa)
  townSign(poles, txt, std, x, z, dx, dz, front, back) {
    if (!front) return;
    const T = this.terrain, y = T.height(x, z), yaw = Math.atan2(-dx, -dz), rx = -dz, rz = dx, grey = [0.42, 0.43, 0.44];
    boxTo(poles, x - rx * 0.75, y + 1.35, z - rz * 0.75, 0.08, 2.7, 0.08, yaw, grey);
    boxTo(poles, x + rx * 0.75, y + 1.35, z + rz * 0.75, 0.08, 2.7, 0.08, yaw, grey);
    plate(txt, x - dx * 0.06, y + 2.25, z - dz * 0.06, front.w, front.h, yaw, front.uv);
    if (back) plate(txt, x + dx * 0.06, y + 2.25, z + dz * 0.06, back.w, back.h, yaw + Math.PI, back.uv);
    else plate(std, x + dx * 0.06, y + 2.25, z + dz * 0.06, front.w, front.h, yaw + Math.PI, uvStd('back'));
  }
}
