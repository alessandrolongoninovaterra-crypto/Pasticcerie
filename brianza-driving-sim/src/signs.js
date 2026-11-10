import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { CLS, F, NT } from './roads.js';

// Segnaletica verticale italiana: semafori, STOP, dare precedenza, limiti di
// velocita', cartelli di inizio/fine centro abitato ai confini comunali, lampioni.

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
  const faces = [[0, 3, 2, 1], [4, 5, 6, 7], [0, 4, 7, 3], [1, 2, 6, 5], [3, 7, 6, 2], [0, 1, 5, 4]];
  for (const f of faces) {
    const ids = f.map((k) => g.v(P[k][0], P[k][1], P[k][2], col[0], col[1], col[2], 0, 0));
    g.quad(ids[0], ids[1], ids[2], ids[3]);
  }
}

function plate(g, x, y, z, w, h, yaw) {
  // quad rivolto verso la direzione yaw (normale = (sin yaw, 0, cos yaw))
  const c = Math.cos(yaw), s = Math.sin(yaw);
  const rx = c, rz = -s;
  const a = g.v(x - rx * w / 2, y - h / 2, z - rz * w / 2, 1, 1, 1, 0, 0);
  const b = g.v(x + rx * w / 2, y - h / 2, z + rz * w / 2, 1, 1, 1, 1, 0);
  const d = g.v(x + rx * w / 2, y + h / 2, z + rz * w / 2, 1, 1, 1, 1, 1);
  const e = g.v(x - rx * w / 2, y + h / 2, z - rz * w / 2, 1, 1, 1, 0, 1);
  g.quad(a, b, d, e);
}

export class Signage {
  constructor(roads, terrain, comuneAt) {
    this.roads = roads; this.terrain = terrain; this.comuneAt = comuneAt;
    this.texCache = new Map();
    this.poleMat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    this.lights = [0, 1].map(() => ({
      R: new THREE.MeshBasicMaterial({ color: 0x330000 }), Y: new THREE.MeshBasicMaterial({ color: 0x332200 }), G: new THREE.MeshBasicMaterial({ color: 0x002200 }),
    }));
    this.lampMat = new THREE.MeshBasicMaterial({ color: 0x555550 });
    this.lampPoleMat = new THREE.MeshLambertMaterial({ color: 0x55585a });
    this.lampPoleGeo = new THREE.CylinderGeometry(0.07, 0.1, 7, 5); this.lampPoleGeo.translate(0, 3.5, 0);
    this.lampHeadGeo = new THREE.BoxGeometry(0.9, 0.18, 0.35); this.lampHeadGeo.translate(0.9, 7, 0);
    this.markMat = roads.materials().mark;
    this.nodeComune = new Map();
  }

  update(time, night) {
    for (let gI = 0; gI < 2; gI++) {
      const st = signalState(gI, time), L = this.lights[gI];
      L.R.color.setHex(st === 'R' ? 0xff2a1a : 0x2a0806);
      L.Y.color.setHex(st === 'Y' ? 0xffb000 : 0x2a1e04);
      L.G.color.setHex(st === 'G' ? 0x20ff60 : 0x062a10);
    }
    this.lampMat.color.setHex(night > 0.3 ? 0xfff2c8 : 0x77797a);
  }

  tex(key, draw, w = 256, h = 256) {
    let m = this.texCache.get(key);
    if (m) return m;
    const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
    draw(cv.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    m = new THREE.MeshLambertMaterial({ map: t, transparent: false, alphaTest: 0.5, side: THREE.FrontSide });
    this.texCache.set(key, m);
    return m;
  }

  speedMat(v) {
    return this.tex('speed' + v, (c, w, h) => {
      c.clearRect(0, 0, w, h);
      c.beginPath(); c.arc(w / 2, h / 2, w / 2 - 2, 0, 7); c.fillStyle = '#d0121b'; c.fill();
      c.beginPath(); c.arc(w / 2, h / 2, w * 0.38, 0, 7); c.fillStyle = '#fff'; c.fill();
      c.fillStyle = '#111'; c.font = `bold ${v >= 100 ? 92 : 112}px Arial`; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText(String(v), w / 2, h / 2 + 6);
    });
  }
  stopMat() {
    return this.tex('stop', (c, w, h) => {
      c.clearRect(0, 0, w, h); c.beginPath();
      for (let i = 0; i < 8; i++) { const a = (i + 0.5) / 8 * Math.PI * 2; c.lineTo(w / 2 + Math.cos(a) * w / 2.05, h / 2 + Math.sin(a) * h / 2.05); }
      c.closePath(); c.fillStyle = '#fff'; c.fill();
      c.beginPath();
      for (let i = 0; i < 8; i++) { const a = (i + 0.5) / 8 * Math.PI * 2; c.lineTo(w / 2 + Math.cos(a) * w / 2.3, h / 2 + Math.sin(a) * h / 2.3); }
      c.closePath(); c.fillStyle = '#c8101a'; c.fill();
      c.fillStyle = '#fff'; c.font = 'bold 74px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('STOP', w / 2, h / 2 + 4);
    });
  }
  giveWayMat() {
    return this.tex('giveway', (c, w, h) => {
      c.clearRect(0, 0, w, h);
      c.beginPath(); c.moveTo(4, 10); c.lineTo(w - 4, 10); c.lineTo(w / 2, h - 6); c.closePath(); c.fillStyle = '#c8101a'; c.fill();
      c.beginPath(); c.moveTo(44, 34); c.lineTo(w - 44, 34); c.lineTo(w / 2, h - 52); c.closePath(); c.fillStyle = '#fff'; c.fill();
    });
  }
  townMat(name, end) {
    return this.tex('town' + (end ? 'E' : 'S') + name, (c, w, h) => {
      c.fillStyle = '#fff'; c.fillRect(0, 0, w, h);
      c.strokeStyle = '#111'; c.lineWidth = 10; c.strokeRect(14, 14, w - 28, h - 28);
      c.fillStyle = '#111'; c.textAlign = 'center'; c.textBaseline = 'middle';
      let fs = 96; c.font = `bold ${fs}px Arial`;
      while (c.measureText(name).width > w - 70 && fs > 30) { fs -= 4; c.font = `bold ${fs}px Arial`; }
      c.fillText(name, w / 2, h / 2 + 4);
      if (end) { c.strokeStyle = '#c8101a'; c.lineWidth = 22; c.beginPath(); c.moveTo(30, h - 30); c.lineTo(w - 30, 30); c.stroke(); }
    }, 512, 220);
  }

  comuneOfNode(nd) {
    let v = this.nodeComune.get(nd);
    if (v === undefined) { v = this.comuneAt(this.roads.nx[nd], this.roads.nz[nd]); this.nodeComune.set(nd, v); }
    return v;
  }

  build(tk) {
    const R = this.roads, T = this.terrain;
    const segs = R.tileSegs.get(tk) || [];
    const poles = new GeoBuilder(true, false);
    const lampsByGroup = [0, 1].map(() => ({ R: new GeoBuilder(false, false), Y: new GeoBuilder(false, false), G: new GeoBuilder(false, false) }));
    const plates = new Map(); // materiale -> GeoBuilder
    const marks = new GeoBuilder(true, false);
    const plateG = (mat) => { let g = plates.get(mat); if (!g) plates.set(mat, g = new GeoBuilder(true, true)); return g; };
    const lampPos = [];
    const signals = [];
    const doneNode = new Set();
    const grey = [0.42, 0.43, 0.44];

    const signPole = (x, z, yaw, h = 2.6) => {
      const y = T.height(x, z);
      boxTo(poles, x, y + h / 2, z, 0.07, h, 0.07, yaw, grey);
      return y;
    };
    const roadY = (wi, k, t, x, z) => R.heightOn(wi, k, t, x, z);

    for (const packed of segs) {
      const wi = Math.floor(packed / 16384), k = packed % 16384;
      const w = R.ways[wi];
      if (!w.drivable) continue;
      const a = w.nodes[k], b = w.nodes[k + 1];
      const ax = R.nx[a], az = R.nz[a], bx = R.nx[b], bz = R.nz[b];
      const L = Math.hypot(bx - ax, bz - az);
      if (L < 0.5) continue;
      const sx = (bx - ax) / L, sz = (bz - az) / L, rx = -sz, rz = sx;
      const hw = w.width / 2;

      // --- nodi con segnaletica
      for (const [nd, kk] of [[a, k], [b, k + 1]]) {
        const tag = R.ntag[nd];
        if (!tag || doneNode.has(nd)) continue;
        if (tag !== NT.SIGNALS && tag !== NT.STOP && tag !== NT.GIVE_WAY) continue;
        doneNode.add(nd);
        // direzioni di arrivo al nodo
        const approaches = [];
        for (let o = R.adjStart[nd]; o < R.adjStart[nd + 1]; o++) {
          const w2 = R.ways[R.adjWay[o]], p = R.adjPos[o];
          if (!w2.drivable) continue;
          if (p > 0) approaches.push({ from: w2.nodes[p - 1], w: w2, wi: R.adjWay[o], seg: p - 1, t: 1 });
          if (p < w2.nodes.length - 1 && !w2.oneway) approaches.push({ from: w2.nodes[p + 1], w: w2, wi: R.adjWay[o], seg: p, t: 0 });
        }
        let use = approaches;
        if (tag !== NT.SIGNALS && R.degree[nd] >= 3) {
          const maxCls = Math.min(...approaches.map((q) => q.w.cls));
          use = approaches.filter((q) => q.w.cls > maxCls);
          if (!use.length) use = approaches.slice(0, 1);
        } else if (R.degree[nd] < 3) {
          // nodo sull'accesso all'incrocio: tieni la direzione che porta all'incrocio
          const toward = approaches.filter((q) => this.leadsToJunction(nd, q.from));
          if (toward.length) use = toward;
        }
        const isJunction = R.degree[nd] >= 3;
        for (const q of use) {
          const fx = R.nx[q.from], fz = R.nz[q.from];
          let dx = R.nx[nd] - fx, dz = R.nz[nd] - fz;
          const dl = Math.hypot(dx, dz) || 1; dx /= dl; dz /= dl;
          const qrx = -dz, qrz = dx;
          const qhw = q.w.width / 2;
          const back = isJunction ? Math.min(dl * 0.6, qhw + 3) : 0;
          const px = R.nx[nd] - dx * back + qrx * (qhw + 0.7), pz = R.nz[nd] - dz * back + qrz * (qhw + 0.7);
          const yaw = Math.atan2(-dx, -dz); // la faccia guarda verso chi arriva
          if (tag === NT.SIGNALS) {
            const group = Math.abs(dx) > Math.abs(dz) ? 1 : 0;
            const y = signPole(px, pz, yaw, 3.1);
            boxTo(poles, px, y + 3.0, pz, 0.38, 1.05, 0.3, yaw, [0.12, 0.12, 0.12]);
            const fxo = -dx * 0.16, fzo = -dz * 0.16;
            const L3 = lampsByGroup[group];
            boxTo(L3.R, px + fxo, y + 3.33, pz + fzo, 0.22, 0.22, 0.04, yaw, [1, 1, 1]);
            boxTo(L3.Y, px + fxo, y + 3.0, pz + fzo, 0.22, 0.22, 0.04, yaw, [1, 1, 1]);
            boxTo(L3.G, px + fxo, y + 2.67, pz + fzo, 0.22, 0.22, 0.04, yaw, [1, 1, 1]);
            signals.push({ node: nd, group });
          } else {
            const y = signPole(px, pz, yaw, 2.2);
            plate(plateG(tag === NT.STOP ? this.stopMat() : this.giveWayMat()), px + -dx * 0.06, y + 2.15, pz + -dz * 0.06, 0.8, 0.8, yaw);
          }
          // linea di arresto
          if (tag !== NT.GIVE_WAY || true) {
            const cx = R.nx[nd] - dx * (back + 0.8), cz = R.nz[nd] - dz * (back + 0.8);
            const o0 = q.w.oneway ? -qhw + 0.3 : 0.1, o1 = qhw - 0.3;
            const yy = roadY(q.wi, q.seg, q.t, cx, cz) + 0.03;
            const dash = tag === NT.GIVE_WAY;
            for (let o = o0; o < o1 - 0.05; o += dash ? 0.9 : o1 - o0) {
              const e = Math.min(o1, o + (dash ? 0.5 : o1 - o0));
              const p1 = marks.v(cx + qrx * o - dx * 0.25, yy, cz + qrz * o - dz * 0.25), p2 = marks.v(cx + qrx * e - dx * 0.25, yy, cz + qrz * e - dz * 0.25);
              const p3 = marks.v(cx + qrx * e + dx * 0.25, yy, cz + qrz * e + dz * 0.25), p4 = marks.v(cx + qrx * o + dx * 0.25, yy, cz + qrz * o + dz * 0.25);
              marks.quad(p1, p2, p3, p4);
            }
          }
        }
      }

      // --- limiti di velocita' all'inizio delle vie (solo se mappati)
      if (k === 0 && w.limitMapped && w.cls <= CLS.RESIDENTIAL && w.len > 80 && !(w.flags & F.ROUNDABOUT)) {
        const prevLimit = this.neighbourLimit(a, wi);
        if (prevLimit !== w.limit) {
          const d = Math.min(12, L * 0.4);
          const px = ax + sx * d + rx * (hw + 0.7), pz = az + sz * d + rz * (hw + 0.7);
          const yaw = Math.atan2(-sx, -sz);
          const y = signPole(px, pz, yaw, 2.3);
          plate(plateG(this.speedMat(w.limit)), px - sx * 0.06, y + 2.2, pz - sz * 0.06, 0.75, 0.75, yaw);
        }
      }
      if (k === w.nodes.length - 2 && !w.oneway && w.limitMapped && w.cls <= CLS.RESIDENTIAL && w.len > 80 && !(w.flags & F.ROUNDABOUT)) {
        const prevLimit = this.neighbourLimit(b, wi);
        if (prevLimit !== w.limit) {
          const d = Math.min(12, L * 0.4);
          const px = bx - sx * d - rx * (hw + 0.7), pz = bz - sz * d - rz * (hw + 0.7);
          const yaw = Math.atan2(sx, sz);
          const y = signPole(px, pz, yaw, 2.3);
          plate(plateG(this.speedMat(w.limit)), px + sx * 0.06, y + 2.2, pz + sz * 0.06, 0.75, 0.75, yaw);
        }
      }

      // --- cartelli di centro abitato ai confini comunali
      if (w.cls <= CLS.RESIDENTIAL && !(w.flags & (F.LINK | F.BRIDGE | F.TUNNEL)) && w.cls >= CLS.PRIMARY - 1) {
        const ca = this.comuneOfNode(a), cb = this.comuneOfNode(b);
        if (ca && cb && ca !== cb) {
          let lo = 0, hi = 1;
          for (let it = 0; it < 12; it++) { const m = (lo + hi) / 2; if (this.comuneAt(ax + (bx - ax) * m, az + (bz - az) * m) === ca) lo = m; else hi = m; }
          const cx = ax + (bx - ax) * lo, cz = az + (bz - az) * lo;
          const off = hw + 1.0;
          // direzione a->b: entro in cb
          let px = cx + rx * off, pz = cz + rz * off, yaw = Math.atan2(-sx, -sz);
          let y = T.height(px, pz);
          boxTo(poles, px - rx * 0.7, y + 1.2, pz - rz * 0.7, 0.08, 2.4, 0.08, yaw, grey); boxTo(poles, px + rx * 0.7, y + 1.2, pz + rz * 0.7, 0.08, 2.4, 0.08, yaw, grey);
          plate(plateG(this.townMat(cb, false)), px - sx * 0.06, y + 2.3, pz - sz * 0.06, 2.1, 0.9, yaw);
          plate(plateG(this.townMat(cb, true)), px + sx * 0.06, y + 2.3, pz + sz * 0.06, 2.1, 0.9, yaw + Math.PI);
          if (!w.oneway) {
            px = cx - rx * off; pz = cz - rz * off; yaw = Math.atan2(sx, sz);
            y = T.height(px, pz);
            boxTo(poles, px - rx * 0.7, y + 1.2, pz - rz * 0.7, 0.08, 2.4, 0.08, yaw, grey); boxTo(poles, px + rx * 0.7, y + 1.2, pz + rz * 0.7, 0.08, 2.4, 0.08, yaw, grey);
            plate(plateG(this.townMat(ca, false)), px + sx * 0.06, y + 2.3, pz + sz * 0.06, 2.1, 0.9, yaw);
            plate(plateG(this.townMat(ca, true)), px - sx * 0.06, y + 2.3, pz - sz * 0.06, 2.1, 0.9, yaw + Math.PI);
          }
        }
      }

      // --- lampioni lungo le strade urbane
      if (w.cls >= CLS.PRIMARY && w.cls <= CLS.LIVING && !w.abs && !(w.flags & F.ROUNDABOUT)) {
        const s0 = w.cum[k];
        const first = Math.ceil(s0 / 30) * 30 - s0;
        for (let d = first; d < L; d += 30) {
          const cx = ax + sx * d, cz = az + sz * d;
          if (!T.isUrban(cx, cz)) continue;
          const side = (Math.floor((s0 + d) / 30) % 2 === 0) ? 1 : (w.oneway ? 1 : -1);
          const px = cx + rx * side * (hw + 0.9), pz = cz + rz * side * (hw + 0.9);
          const nr = R.nearest(px, pz, 6);
          if (nr && nr.d < R.ways[nr.wi].width / 2 + 0.4) continue;
          lampPos.push([px, T.height(px, pz), pz, Math.atan2(rz * side, -rx * side)]);
        }
      }
    }

    const group = new THREE.Group();
    if (!poles.empty) group.add(poles.mesh(this.poleMat, true));
    if (!marks.empty) group.add(marks.mesh(this.markMat));
    for (let gI = 0; gI < 2; gI++) for (const c of ['R', 'Y', 'G']) if (!lampsByGroup[gI][c].empty) group.add(lampsByGroup[gI][c].mesh(this.lights[gI][c]));
    for (const [mat, g] of plates) group.add(g.mesh(mat));
    if (lampPos.length) {
      const poleI = new THREE.InstancedMesh(this.lampPoleGeo, this.lampPoleMat, lampPos.length);
      const headI = new THREE.InstancedMesh(this.lampHeadGeo, this.lampMat, lampPos.length);
      const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
      lampPos.forEach(([x, y, z, yaw], i) => {
        q.setFromAxisAngle(up, yaw); p.set(x, y, z); m.compose(p, q, one);
        poleI.setMatrixAt(i, m); headI.setMatrixAt(i, m);
      });
      poleI.computeBoundingSphere(); headI.computeBoundingSphere();
      group.add(poleI, headI);
    }
    return { group, signals, lamps: lampPos };
  }

  leadsToJunction(nd, from) {
    // percorrendo from -> nd si raggiunge un incrocio entro 60 m?
    const R = this.roads;
    let prev = from, cur = nd, dist = 0;
    for (let it = 0; it < 12 && dist < 60; it++) {
      if (R.degree[cur] >= 3) return true;
      let next = -1;
      for (let o = R.adjStart[cur]; o < R.adjStart[cur + 1]; o++) {
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
    for (let o = R.adjStart[nd]; o < R.adjStart[nd + 1]; o++) {
      const w2 = R.adjWay[o];
      if (w2 !== wi && R.ways[w2].drivable && R.ways[w2].cls === R.ways[wi].cls) return R.ways[w2].limit;
    }
    for (let o = R.adjStart[nd]; o < R.adjStart[nd + 1]; o++) {
      const w2 = R.adjWay[o];
      if (w2 !== wi && R.ways[w2].drivable) return R.ways[w2].limit;
    }
    return -1;
  }
}
