import * as THREE from 'three';
import { GeoBuilder, canvasTexture, hash } from './geo.js';

// Cancelli, sbarre e recinzioni reali (OSM barrier=gate/lift_gate/fence...).
// Record dei cancelli nella tessera (campo gt, 6 numeri per cancello):
//   tipo (0 battente, 1 scorrevole, 2 sbarra, 3 cancelletto pedonale, 4 catena),
//   x, z (dm), direzione dell'apertura (decimi di grado), larghezza (dm),
//   stato (0 aperto, 1 chiuso, 2 automatico: si apre quando arriva un veicolo).

// atlante a fasce (dall'alto): 0 cancellata, 1 rete metallica, 2 staccionata, 3 anta di cancello
const BANDS = 4;
let MATS = null;
export function fenceMaterials() {
  if (MATS) return MATS;
  const tex = canvasTexture(256, 256, (ctx) => {
    ctx.clearRect(0, 0, 256, 256);
    const iron = '#ffffff';
    // 0: cancellata a sbarre verticali con correnti e punte
    ctx.fillStyle = iron;
    ctx.fillRect(0, 6, 256, 4); ctx.fillRect(0, 54, 256, 4);
    for (let i = 0; i < 10; i++) {
      const x = i * 25.6 + 11;
      ctx.fillRect(x, 2, 3.5, 60);
      ctx.beginPath(); ctx.moveTo(x - 2, 4); ctx.lineTo(x + 1.75, 0); ctx.lineTo(x + 5.5, 4); ctx.fill();
    }
    // 1: rete a maglie romboidali
    ctx.strokeStyle = iron; ctx.lineWidth = 1.6;
    for (let i = -8; i < 24; i++) {
      ctx.beginPath(); ctx.moveTo(i * 16, 64); ctx.lineTo(i * 16 + 64, 128); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(i * 16 + 64, 64); ctx.lineTo(i * 16, 128); ctx.stroke();
    }
    ctx.fillRect(0, 65, 256, 3); ctx.fillRect(0, 124, 256, 3);
    // 2: staccionata: due traverse e montanti
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 140, 256, 12); ctx.fillRect(0, 166, 256, 12);
    for (const x of [6, 134]) ctx.fillRect(x, 130, 14, 62);
    // 3: anta di cancello in ferro: telaio, sbarre fitte, fascia decorativa
    ctx.fillRect(0, 194, 256, 5); ctx.fillRect(0, 250, 256, 6); ctx.fillRect(0, 214, 256, 3);
    for (let i = 0; i < 16; i++) ctx.fillRect(i * 16 + 6, 194, 3, 62);
    ctx.lineWidth = 2;
    for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.arc(i * 32 + 16, 214, 9, Math.PI, 0); ctx.stroke(); }
    ctx.fillRect(0, 192, 4, 64); ctx.fillRect(252, 192, 4, 64);
  });
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.anisotropy = 4;
  MATS = {
    grille: new THREE.MeshLambertMaterial({ map: tex, vertexColors: true, alphaTest: 0.45, side: THREE.DoubleSide, transparent: false }),
    solid: new THREE.MeshLambertMaterial({ vertexColors: true }),
  };
  // ombre delle griglie: un solo materiale condiviso da tutte le tessere
  MATS.depth = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: tex, alphaTest: 0.45, side: THREE.DoubleSide });
  return MATS;
}

const vband = (b) => [1 - (b + 1) / BANDS + 0.004, 1 - b / BANDS - 0.004];

// pannello verticale con texture: da (ax,az) a (bx,bz), quote ya/yb alla base, altezza da h0 a h1
export function panel(g, ax, az, ya, bx, bz, yb, h0, h1, band, period, col, u0 = 0) {
  const L = Math.hypot(bx - ax, bz - az);
  const [v0, v1] = vband(band), u1 = u0 + L / period;
  const a = g.v(ax, ya + h0, az, col[0], col[1], col[2], u0, v0), b = g.v(bx, yb + h0, bz, col[0], col[1], col[2], u1, v0);
  const c = g.v(bx, yb + h1, bz, col[0], col[1], col[2], u1, v1), d = g.v(ax, ya + h1, az, col[0], col[1], col[2], u0, v1);
  g.quad(a, b, c, d);
  return u1;
}

// parallelepipedo orientato (asse x locale lungo (dx,dz)) con facce separate
export function box(g, cx, cy, cz, sx, sy, sz, dx, dz, col, topCol = null) {
  const hx = sx / 2, hz = sz / 2;
  const ex = [dx * hx, dz * hx], ez = [-dz * hz, dx * hz];
  const P = (i, j, k) => [cx + ex[0] * i + ez[0] * k, cy + j * sy, cz + ex[1] * i + ez[1] * k];
  const sh = [1, 0.62, 0.8, 0.8, 0.72, 0.72];
  const faces = [
    [P(-1, 1, -1), P(-1, 1, 1), P(1, 1, 1), P(1, 1, -1)],
    [P(-1, 0, -1), P(1, 0, -1), P(1, 0, 1), P(-1, 0, 1)],
    [P(-1, 0, 1), P(1, 0, 1), P(1, 1, 1), P(-1, 1, 1)],
    [P(1, 0, -1), P(-1, 0, -1), P(-1, 1, -1), P(1, 1, -1)],
    [P(1, 0, 1), P(1, 0, -1), P(1, 1, -1), P(1, 1, 1)],
    [P(-1, 0, -1), P(-1, 0, 1), P(-1, 1, 1), P(-1, 1, -1)],
  ];
  faces.forEach((f, fi) => {
    if (fi === 1) return;                       // la faccia di sotto poggia a terra: non si vede mai
    const c = fi === 0 && topCol ? topCol : col, s = fi === 0 && topCol ? 1 : sh[fi];
    const ids = f.map((p) => g.v(p[0], p[1], p[2], c[0] * s, c[1] * s, c[2] * s));
    g.quad(ids[0], ids[1], ids[2], ids[3]);
  });
}

const IRON = [0.17, 0.19, 0.18], IRON_GREEN = [0.13, 0.22, 0.16], WOOD = [0.45, 0.32, 0.2], ZINC = [0.62, 0.64, 0.62];
const PLASTER = [[0.86, 0.8, 0.66], [0.78, 0.7, 0.55], [0.72, 0.72, 0.7], [0.82, 0.62, 0.48], [0.62, 0.36, 0.28]];

// recinzioni: 4 cancellata su muretto, 5 rete metallica, 6 staccionata, 7 ringhiera
export function buildFence(gs, gg, pts, kind, H, T, seed) {
  const iron = hash(seed) < 0.6 ? IRON : IRON_GREEN;
  const wall = PLASTER[Math.floor(hash(seed + 7) * PLASTER.length)];
  const base = kind === 4 ? Math.min(0.6, H * 0.35) : 0;
  let u = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
    const L = Math.hypot(bx - ax, bz - az);
    if (L < 0.2) continue;
    const dx = (bx - ax) / L, dz = (bz - az) / L;
    const n = Math.max(1, Math.ceil(L / 6));
    for (let s = 0; s < n; s++) {
      const x0 = ax + (bx - ax) * s / n, z0 = az + (bz - az) * s / n, x1 = ax + (bx - ax) * (s + 1) / n, z1 = az + (bz - az) * (s + 1) / n;
      const y0 = T.height(x0, z0), y1 = T.height(x1, z1);
      if (kind === 4) {   // muretto intonacato con copertina
        const l = L / n, my = Math.min(y0, y1);
        box(gs, (x0 + x1) / 2, my - 0.3, (z0 + z1) / 2, l + 0.02, base + 0.3 + Math.abs(y1 - y0) * 0.5, 0.3, dx, dz, wall, [0.74, 0.73, 0.7]);
      }
      const band = kind === 5 ? 1 : kind === 6 ? 2 : 0;
      const col = kind === 6 ? WOOD : kind === 5 ? ZINC : iron;
      u = panel(gg, x0, z0, y0, x1, z1, y1, base, H, band, kind === 6 ? 5 : kind === 5 ? 1.2 : 1.2, col, u);
    }
    // montanti (rete e ringhiera)
    if (kind === 5 || kind === 7) {
      const m = Math.max(1, Math.round(L / 3));
      for (let s = 0; s <= m; s++) {
        const px = ax + (bx - ax) * s / m, pz = az + (bz - az) * s / m;
        box(gs, px, T.height(px, pz) - 0.2, pz, 0.06, H + 0.25, 0.06, dx, dz, kind === 5 ? [0.36, 0.4, 0.36] : iron);
      }
    }
  }
}

const angY = (dx, dz) => Math.atan2(-dz, dx);   // rotation.y che porta l'asse x locale su (dx,dz)

export class Gates {
  constructor(roads, terrain, collision) {
    this.R = roads; this.T = terrain; this.col = collision;
    this.dyn = [];
  }

  baseY(x, z) {
    const s = this.R.surfaceAt(x, z, 1e9);
    return s && s.road ? s.h : this.T.height(x, z) + 0.02;
  }

  // anta in coordinate locali: cerniera nell'origine, si estende lungo +x
  leafGeo(len, h, kind) {
    const g = new GeoBuilder(true, true);
    const band = kind === 4 ? 1 : 3, col = IRON;
    panel(g, 0, 0, 0, len, 0, 0, 0.08, h, band, kind === 3 ? 1.1 : 1.6, col);
    return g.build();
  }

  build(tileKey, tile) {
    const gt = tile && tile.gt;
    if (!gt || !gt.length) return null;
    const M = fenceMaterials();
    const gs = new GeoBuilder(true, false), gg = new GeoBuilder(true, true);
    const group = new THREE.Group();
    for (let i = 0; i < gt.length; i += 6) {
      const kind = gt[i], x = gt[i + 1] / 10, z = gt[i + 2] / 10, a = gt[i + 3] / 1800 * Math.PI, w = gt[i + 4] / 10, state = gt[i + 5];
      const sx = Math.sin(a), sz = Math.cos(a);           // direzione dell'apertura
      const nx = sz, nz = -sx;                            // normale (verso in cui si aprono le ante)
      const y = this.baseY(x, z), seed = Math.round(x * 7 + z * 13);
      const Ax = x - sx * w / 2, Az = z - sz * w / 2, Bx = x + sx * w / 2, Bz = z + sz * w / 2;
      const H = kind === 3 ? 1.25 : 1.8;
      const ped = PLASTER[Math.floor(hash(seed) * PLASTER.length)];
      if (kind <= 1 || kind === 3) {   // pilastri intonacati con cappello
        const pw = kind === 3 ? 0.3 : 0.42;
        for (const s of [-1, 1]) {
          const px = x + sx * (w / 2 + pw / 2) * s, pz = z + sz * (w / 2 + pw / 2) * s;
          box(gs, px, y - 0.3, pz, pw, H + 0.6, pw, sx, sz, ped);
          box(gs, px, y + H + 0.3, pz, pw + 0.08, 0.08, pw + 0.08, sx, sz, [0.7, 0.69, 0.66]);
        }
      } else if (kind === 2) {          // sbarra: colonnina, forcella dalla parte opposta
        box(gs, Ax - sx * 0.25, y, Az - sz * 0.25, 0.38, 1.05, 0.38, sx, sz, [0.92, 0.92, 0.9]);
        box(gs, Ax - sx * 0.25, y + 0.75, Az - sz * 0.25, 0.4, 0.12, 0.4, sx, sz, [0.8, 0.1, 0.08]);
        box(gs, Bx, y, Bz, 0.1, 0.85, 0.1, sx, sz, [0.85, 0.85, 0.85]);
      } else {                          // catena: due paletti
        for (const [px, pz] of [[Ax, Az], [Bx, Bz]]) box(gs, px, y, pz, 0.12, 0.9, 0.12, sx, sz, [0.85, 0.2, 0.15]);
      }
      if (state === 2) { this.addDynamic(group, tileKey, kind, x, y, z, sx, sz, w, H); continue; }
      const closed = state === 1;
      if (closed) this.col.addPolygon(tileKey, Float32Array.from([Ax - nx * 0.2, Az - nz * 0.2, Bx - nx * 0.2, Bz - nz * 0.2, Bx + nx * 0.2, Bz + nz * 0.2, Ax + nx * 0.2, Az + nz * 0.2]), undefined, true);
      if (kind === 0) {
        const two = w > 2.6, len = two ? w / 2 : w;
        const leaves = two ? [[Ax, Az, sx, sz], [Bx, Bz, -sx, -sz]] : [[Ax, Az, sx, sz]];
        for (const [hx, hz, dx, dz] of leaves) {
          const ex = closed ? dx : nx, ez = closed ? dz : nz;
          panel(gg, hx, hz, y, hx + ex * len, hz + ez * len, y, 0.08, H, 3, 1.6, IRON);
        }
      } else if (kind === 1) {
        const o = closed ? 0 : w;
        panel(gg, Ax + sx * o + nx * 0.18, Az + sz * o + nz * 0.18, y, Bx + sx * o + nx * 0.18, Bz + sz * o + nz * 0.18, y, 0.08, H, 3, 1.6, IRON);
      } else if (kind === 3) {
        const c = closed ? 0 : 1.2, ex = sx * Math.cos(c) + nx * Math.sin(c), ez = sz * Math.cos(c) + nz * Math.sin(c);
        panel(gg, Ax, Az, y, Ax + ex * w, Az + ez * w, y, 0.06, H, 3, 1.1, IRON);
      } else if (kind === 2) {           // sbarra ferma (aperta = alzata)
        this.boom(gs, Ax, Az, y, sx, sz, w, closed ? 0 : 1.45);
      } else if (kind === 4 && closed) { // catena tesa con bandierina
        const n = 8;
        for (let k = 0; k < n; k++) {
          const t0 = k / n, t1 = (k + 1) / n, sag = (t) => 0.3 * 4 * t * (1 - t);
          const px = Ax + (Bx - Ax) * (t0 + t1) / 2, pz = Az + (Bz - Az) * (t0 + t1) / 2;
          box(gs, px, y + 0.8 - sag((t0 + t1) / 2), pz, w / n, 0.04, 0.04, sx, sz, k % 2 ? [0.85, 0.15, 0.1] : [0.95, 0.95, 0.95]);
        }
      }
    }
    if (!gs.empty) group.add(gs.mesh(M.solid, true));
    if (!gg.empty) { const m = gg.mesh(M.grille, true); m.customDepthMaterial = this.depthMat(); group.add(m); }
    group.userData.dispose = () => { this.dyn = this.dyn.filter((d) => { if (d.tile !== tileKey) return true; if (d.colObj) this.col.remove(d.colObj); return false; }); };
    return group;
  }

  depthMat() {
    return fenceMaterials().depth;
  }

  // sbarra ferma: orizzontale (chiusa) o alzata
  boom(g, Ax, Az, y, sx, sz, w, ang) {
    const n = Math.max(2, Math.round(w / 0.5));
    for (let k = 0; k < n; k++) {
      const c = k % 2 ? [0.8, 0.08, 0.06] : [0.95, 0.95, 0.95], r = (k + 0.5) / n * w;
      if (ang > 0.7) box(g, Ax, y + 0.95 + k / n * w, Az, 0.09, w / n + 0.005, 0.06, sx, sz, c);
      else box(g, Ax + sx * r, y + 0.905, Az + sz * r, w / n + 0.005, 0.09, 0.06, sx, sz, c);
    }
  }

  addDynamic(group, tileKey, kind, x, y, z, sx, sz, w, H) {
    const nx = sz, nz = -sx;
    const Ax = x - sx * w / 2, Az = z - sz * w / 2, Bx = x + sx * w / 2, Bz = z + sz * w / 2;
    const d = { tile: tileKey, kind, x, z, w, open: 0, target: 0, hold: 0, parts: [], colObj: null,
      ring: Float32Array.from([Ax - nx * 0.2, Az - nz * 0.2, Bx - nx * 0.2, Bz - nz * 0.2, Bx + nx * 0.2, Bz + nz * 0.2, Ax + nx * 0.2, Az + nz * 0.2]) };
    const M = fenceMaterials();
    if (kind === 2 || kind === 4) {      // sbarra (anche la catena automatica diventa una sbarra)
      const g = new GeoBuilder(true, false);
      const n = Math.max(2, Math.round(w / 0.5));
      for (let k = 0; k < n; k++) box(g, (k + 0.5) / n * w, -0.045, 0, w / n + 0.005, 0.09, 0.06, 1, 0, k % 2 ? [0.8, 0.08, 0.06] : [0.95, 0.95, 0.95]);
      const outer = new THREE.Group(), inner = g.mesh(M.solid, true);
      outer.position.set(Ax, y + 0.95, Az); outer.rotation.y = angY(sx, sz);
      outer.add(inner); group.add(outer);
      d.parts.push({ obj: inner, apply: (o) => { inner.rotation.z = o * 1.45; } });
    } else if (kind === 1) {             // scorrevole: l'anta scorre lungo la recinzione
      const leaf = new THREE.Mesh(this.leafGeo(w, H, kind), M.grille);
      leaf.castShadow = true; leaf.customDepthMaterial = this.depthMat();
      leaf.rotation.y = angY(sx, sz); group.add(leaf);
      d.parts.push({ obj: leaf, apply: (o) => { leaf.position.set(Ax + sx * w * o + nx * 0.18, y, Az + sz * w * o + nz * 0.18); } });
    } else {                             // battente motorizzato a una o due ante
      const two = w > 2.6, len = two ? w / 2 : w;
      const geo = this.leafGeo(len, H, kind);
      const hinges = two ? [[Ax, Az, sx, sz], [Bx, Bz, -sx, -sz]] : [[Ax, Az, sx, sz]];
      for (const [hx, hz, dx, dz] of hinges) {
        const leaf = new THREE.Mesh(geo, M.grille);
        leaf.castShadow = true; leaf.customDepthMaterial = this.depthMat();
        leaf.position.set(hx, y, hz); group.add(leaf);
        const a0 = angY(dx, dz); let a1 = angY(nx, nz);
        while (a1 - a0 > Math.PI) a1 -= 2 * Math.PI; while (a1 - a0 < -Math.PI) a1 += 2 * Math.PI;
        d.parts.push({ obj: leaf, apply: (o) => { leaf.rotation.y = a0 + (a1 - a0) * o; } });
      }
    }
    for (const p of d.parts) p.apply(0);
    d.colObj = this.col.addPolygon(tileKey, d.ring, undefined, true);
    this.dyn.push(d);
  }

  // i cancelli automatici si aprono quando un veicolo si avvicina e si richiudono dopo qualche secondo
  update(dt, movers) {
    for (const d of this.dyn) {
      let near = false;
      for (const m of movers) {
        if (Math.abs(m.x - d.x) < 14 && Math.abs(m.z - d.z) < 14 && Math.hypot(m.x - d.x, m.z - d.z) < 11 + d.w / 2) { near = true; break; }
      }
      if (near) d.hold = 3; else d.hold -= dt;
      d.target = d.hold > 0 ? 1 : 0;
      if (d.open === d.target) continue;
      const sp = d.kind === 2 || d.kind === 4 ? 0.9 : 0.45;
      d.open = d.target > d.open ? Math.min(1, d.open + dt * sp) : Math.max(0, d.open - dt * sp);
      for (const p of d.parts) p.apply(d.open);
      const block = d.open < 0.8;
      if (block && !d.colObj) d.colObj = this.col.addPolygon(d.tile, d.ring, undefined, true);
      else if (!block && d.colObj) { this.col.remove(d.colObj); d.colObj = null; }
    }
  }
}
