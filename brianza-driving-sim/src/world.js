import * as THREE from 'three';
import { loadData } from './data.js';
import { noiseTexture, pointInRing, GeoBuilder } from './geo.js';
import { box } from './gates.js';
import { BuildingFactory } from './buildings.js';
import { Vegetation } from './vegetation.js';
import { Signage } from './signs.js';
import { Collision } from './collision.js';
import { Gates } from './gates.js';
import { makeBollards, makeBins, makeBenches, makeHydrants, makeBikeRacks, makeFountains } from './vendor/city/streetprops.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Gestione del mondo a tessere da 1 km: caricamento in streaming dei dati
// (edifici), costruzione progressiva delle mesh e rilascio delle tessere lontane.
const LM_LABEL = { 1: '#7a3d1a', 2: '#1d4f91', 3: '#4b2f73', 4: '#b3261e', 6: '#6b4f1d', 7: '#1f6b3a', 8: '#2f6b2a', 9: '#555', 10: '#6b1d5a', 12: '#1d6b8a', 13: '#555' };

export class World {
  constructor(scene, meta, terrain, roads, settings) {
    this.scene = scene; this.meta = meta; this.terrain = terrain; this.roads = roads; this.settings = settings;
    this.collision = new Collision();
    this.gates = new Gates(roads, terrain, this.collision);
    this.tiles = new Map();
    this.queue = [];
    this.detail = noiseTexture(256);
    this.farMat = terrain.overviewMaterial(this.detail);
    // dati del terreno (quote, colori, strade) per tessera: si caricano in un anello piu' largo di
    // quello costruito, cosi' ogni tessera trova pronte anche le vicine
    this.ground = new Map();       // chiave tessera -> 'loading' | 'ready' | 'none'
    this.groundWant = [];
    this.groundBusy = 0;
    this.ribbons = new Map();      // nastri dei corsi d'acqua per tessera (dalle tessere di terreno)
    this.buildings = new BuildingFactory(terrain);
    this.vegetation = new Vegetation(terrain, roads);
    this.comuniIdx = meta.comuni.map((c) => {
      let minx = 1e9, minz = 1e9, maxx = -1e9, maxz = -1e9;
      for (const r of c.rings) for (const p of r) { minx = Math.min(minx, p[0]); maxx = Math.max(maxx, p[0]); minz = Math.min(minz, p[1]); maxz = Math.max(maxz, p[1]); }
      return { n: c.n, rings: c.rings, minx, minz, maxx, maxz };
    });
    this.signage = new Signage(roads, terrain, (x, z) => this.comuneAt(x, z), meta);
    this.signage.collision = this.collision;
    this.signals = [];
    this.cameras = [];      // autovelox reali nelle tessere caricate
    this.tileSet = new Set(meta.tiles.map(([i, j]) => j * 1000 + i));
    this.root = new THREE.Group();
    scene.add(this.root);
    this.far = new THREE.Group();
    this.farChunks = new Map();
    this.root.add(this.far);
    this.buildWaters();
    this.labelsOn = true;
  }

  comuneAt(x, z) {
    for (const c of this.comuniIdx) {
      if (x < c.minx || x > c.maxx || z < c.minz || z > c.maxz) continue;
      let inside = false;
      for (const r of c.rings) if (pointInRing(x, z, r)) inside = !inside;
      if (inside) return c.n;
    }
    return null;
  }

  // terreno lontano (orizzonte) dalla panoramica, a pezzi da 2 km entro un raggio attorno al
  // giocatore: con mappe grandi non si costruisce mai tutta l'area
  updateFarTerrain(x, z, budget = 2) {
    const p = this.meta.proj, size = 2000, step = 80, R = 11000;     // la foschia in volo arriva a ~8 km
    const ci = Math.floor((x - p.xmin) / size), cj = Math.floor((z - p.zmin) / size), r = Math.ceil(R / size);
    const nI = Math.ceil((p.xmax - p.xmin) / size), nJ = Math.ceil((p.zmax - p.zmin) / size);
    const want = [];
    for (let j = Math.max(0, cj - r); j <= Math.min(nJ - 1, cj + r); j++) for (let i = Math.max(0, ci - r); i <= Math.min(nI - 1, ci + r); i++) {
      const d = Math.hypot(p.xmin + (i + 0.5) * size - x, p.zmin + (j + 0.5) * size - z);
      if (d < R && !this.farChunks.has(j * 1000 + i)) want.push([d, i, j]);
    }
    want.sort((a, b) => a[0] - b[0]);
    for (const [, i, j] of want.slice(0, budget)) {
      const m = this.terrain.buildFarChunk(p.xmin + i * size, p.zmin + j * size, size, step, this.farMat, 1.5);
      m.receiveShadow = false;
      this.far.add(m); this.farChunks.set(j * 1000 + i, m);
    }
    for (const [k, m] of this.farChunks) {
      const i = k % 1000, j = Math.floor(k / 1000);
      if (Math.hypot(p.xmin + (i + 0.5) * size - x, p.zmin + (j + 0.5) * size - z) > R + 3000) { this.far.remove(m); m.geometry.dispose(); this.farChunks.delete(k); }
    }
  }

  buildWaters() {
    // laghi e specchi d'acqua reali
    const mat = new THREE.MeshPhongMaterial({ color: 0x2f6688, specular: 0xaabbcc, shininess: 110, transparent: true, opacity: 0.94, side: THREE.DoubleSide });
    // piccole onde animate (normale perturbata) e riflesso del cielo verso l'orizzonte (Fresnel)
    this.waterU = { uTime: { value: 0 }, uSky: { value: new THREE.Color(0.75, 0.84, 0.92) } };
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, this.waterU);
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
        .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nuniform float uTime;\nuniform vec3 uSky;')
        .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
          vec2 wp = vWPos.xz;
          float wd = distance(cameraPosition, vWPos);
          float amp = clamp(1.0 - wd / 700.0, 0.12, 1.0);
          vec2 wg = vec2(cos(wp.x * 0.33 + uTime * 1.1), cos(wp.y * 0.29 + uTime * 0.9)) * 0.04
                  + vec2(cos(dot(wp, vec2(0.9, 0.5)) * 0.8 + uTime * 1.7), cos(dot(wp, vec2(-0.4, 0.8)) * 0.74 + uTime * 1.5)) * 0.03
                  + vec2(cos(dot(wp, vec2(0.3, -0.95)) * 2.1 + uTime * 2.6), cos(dot(wp, vec2(0.8, 0.6)) * 1.9 + uTime * 2.3)) * 0.015;
          vec3 nW = normalize(vec3(-wg.x * amp, 1.0, -wg.y * amp));
          normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);
          vec3 vdirW = normalize(cameraPosition - vWPos);
          float fres = pow(1.0 - max(dot(vdirW, nW), 0.0), 3.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, uSky, clamp(fres, 0.0, 1.0) * 0.8);
          diffuseColor.a = mix(0.9, 1.0, fres);`);
    };
    this.waterMat = mat;
    const g = new THREE.Group();
    // tutti gli specchi d'acqua di un blocco da 4 km in una sola mesh (con gli stagni piccoli sono
    // migliaia: una mesh ciascuno erano migliaia di chiamate di disegno). Laghi piatti; fiumi e canali
    // disegnati come area con la quota di ogni vertice, che scende con le rive (lvo/lvi dalla pipeline)
    const blocks = new Map(), B = 4000, p = this.meta.proj;
    for (const wt of this.meta.waters) {
      const hk = (wt.i || []).map((h, i) => i).filter((i) => wt.i[i].length >= 4);
      const holes = hk.map((i) => wt.i[i].map((q) => new THREE.Vector2(q[0], q[1])));
      wt.o.forEach((ring, oi) => {
        if (ring.length < 4) return;
        const lvl = wt.lv[oi];
        if (lvl == null && !wt.lvo) return;
        const pts = ring.map((q) => new THREE.Vector2(q[0], q[1]));
        let tris;
        try { tris = THREE.ShapeUtils.triangulateShape(pts, holes); } catch (e) { return; }
        const all = pts.concat(...holes);
        const ys = wt.lvo ? wt.lvo[oi].concat(...hk.map((i) => wt.lvi[i])).map((v) => v / 100) : null;
        const key = Math.floor((ring[0][1] - p.zmin) / B) * 1000 + Math.floor((ring[0][0] - p.xmin) / B);
        let bk = blocks.get(key);
        if (!bk) blocks.set(key, bk = { pos: [], idx: [] });
        const base = bk.pos.length / 3;
        all.forEach((v, i) => bk.pos.push(v.x, ys ? ys[i] : lvl, v.y));
        for (const [a, b, c] of tris) {
          // faccia verso l'alto: componente y della normale di (b-a)x(c-a) positiva
          const A = all[a], Bv = all[b], C = all[c];
          const up = (Bv.y - A.y) * (C.x - A.x) - (Bv.x - A.x) * (C.y - A.y) > 0;
          if (up) bk.idx.push(base + a, base + b, base + c); else bk.idx.push(base + a, base + c, base + b);
        }
      });
    }
    for (const bk of blocks.values()) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(bk.pos, 3));
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(new Float32Array(bk.pos.length).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
      geo.setIndex(bk.idx);
      geo.computeBoundingSphere();
      g.add(new THREE.Mesh(geo, mat));
    }
    this.root.add(g);
  }

  // ---------------------------------------------------------------- edifici in lontananza
  // Oltre il raggio degli edifici dettagliati (soprattutto in volo) i paesi si vedono come volumi
  // semplici: un parallelepipedo per edificio, con il tetto colorato. Dati: data/far/f_I_J.js (blocchi 4x4 km).
  initFar() {
    if (this.farIdx) return;
    const st = this.meta.stream;
    this.farFB = st.farBlock;
    this.farBlocks = new Map(st.far.map(([I, J]) => [J * 1000 + I, null]));   // null = da caricare
    this.farIdx = new Map();      // tessera -> [dati del blocco, inizio, numero]
    this.farMeshes = new Map();
    this.farQueue = [];
    this.farGroup = new THREE.Group();
    this.root.add(this.farGroup);
    this.farBMat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const lin = (list, k = 1) => list.map((h) => new THREE.Color(h).convertSRGBToLinear().multiplyScalar(k));
    this.farPal = { wall: lin(['#eadcbc', '#e9cf9f', '#dcab6e', '#f1e8d6', '#ddb7a2', '#cdbb9f', '#f0dc9e', '#e3c08e', '#d9c7a6']), ind: lin(['#c6c6c0', '#a8aeb0', '#d4cfc2', '#b9b4a6', '#9aa3a6']),
      tile: lin(['#b8694a', '#a9603f', '#c27752', '#9e5b43', '#b5704f', '#a46a52'], 1.2), flat: lin(['#8d8a84', '#7d7b77', '#9a968e', '#6f6e6a']) };
  }

  // blocchi di edifici lontani (4x4 km) da caricare o da togliere attorno al punto x,z
  farBlocksNear(x, z, R) {
    const p = this.meta.proj, B = this.farFB * 1000;
    for (const [k, st] of this.farBlocks) {
      const I = k % 1000, J = Math.floor(k / 1000);
      const d = Math.hypot(Math.max(0, Math.abs(p.xmin + (I + 0.5) * B - x) - B / 2), Math.max(0, Math.abs(p.zmin + (J + 0.5) * B - z) - B / 2));
      if (d <= R && st === null) {
        this.farBlocks.set(k, 'loading');
        loadData(`f_${I}_${J}`, `data/far/f_${I}_${J}.js`).then((data) => {
          if (this.farBlocks.get(k) !== 'loading') return;
          let o = 0;
          for (const [i, j, n] of data.t) { this.farIdx.set(j * 1000 + i, [data.d, o, n]); o += n * 8; }
          this.farBlocks.set(k, data);
          this.farR = -1;      // ricalcola la coda
        }).catch(() => this.farBlocks.set(k, 'none'));
      } else if (d > R + 6000 && st && st !== 'loading' && st !== 'none') {
        for (const [i, j] of st.t) this.farIdx.delete(j * 1000 + i);
        this.farBlocks.set(k, null);
      }
    }
  }

  // tessere lontane da costruire o da togliere (chiamata a ogni fotogramma, lavora 3 volte al secondo)
  updateFar(x, z, R) {
    if (!this.farIdx) return;
    this.farTick = (this.farTick || 0) + 1;
    if (this.farTick % 20 !== 1 && R === this.farR) return;
    this.farR = R;
    this.farBlocksNear(x, z, R);
    const p = this.meta.proj, ci = Math.floor((x - p.xmin) / 1000), cj = Math.floor((z - p.zmin) / 1000), r = Math.ceil(R / 1000);
    const want = [];
    for (let j = cj - r; j <= cj + r; j++) for (let i = ci - r; i <= ci + r; i++) {
      const key = j * 1000 + i;
      if (i < 0 || j < 0 || !this.farIdx.has(key) || this.farMeshes.has(key)) continue;
      const d = Math.hypot(p.xmin + (i + 0.5) * 1000 - x, p.zmin + (j + 0.5) * 1000 - z);
      if (d <= R) want.push([d, key]);
    }
    want.sort((a, b) => a[0] - b[0]);
    this.farQueue = want.map((w) => w[1]);
    for (const [key, m] of this.farMeshes) {
      const i = key % 1000, j = Math.floor(key / 1000);
      if (Math.hypot(p.xmin + (i + 0.5) * 1000 - x, p.zmin + (j + 0.5) * 1000 - z) > R + 1500) { this.farGroup.remove(m); m.geometry.dispose(); this.farMeshes.delete(key); }
    }
  }

  pumpFar(budget = 3) {
    if (!this.farIdx) return;
    const t0 = performance.now();
    while (this.farQueue.length && performance.now() - t0 < budget) {
      const key = this.farQueue.shift();
      if (this.farMeshes.has(key)) continue;
      const m = this.buildFarTile(key);
      this.farMeshes.set(key, m); this.farGroup.add(m);
    }
    // dove ci sono gia' gli edifici dettagliati quelli semplificati spariscono
    for (const [key, m] of this.farMeshes) { const t = this.tiles.get(key); m.visible = !(t && t.parts.buildings); }
  }

  buildFarTile(key) {
    const [d, o, n] = this.farIdx.get(key), p = this.meta.proj, P = this.farPal;
    const x0 = p.xmin + (key % 1000) * 1000, z0 = p.zmin + Math.floor(key / 1000) * 1000;
    const pos = new Float32Array(n * 60), col = new Float32Array(n * 60), nor = new Float32Array(n * 60), idx = new Uint32Array(n * 30);
    let v = 0, t = 0;
    const put = (x, y, z, c, s, nx, ny, nz) => { pos[v * 3] = x; pos[v * 3 + 1] = y; pos[v * 3 + 2] = z; col[v * 3] = c.r * s; col[v * 3 + 1] = c.g * s; col[v * 3 + 2] = c.b * s; nor[v * 3] = nx; nor[v * 3 + 1] = ny; nor[v * 3 + 2] = nz; return v++; };
    for (let b = 0; b < n; b++) {
      const q = o + b * 8, cx = x0 + d[q] / 10, cz = z0 + d[q + 1] / 10, hu = d[q + 2] / 10, hv = d[q + 3] / 10, a = d[q + 4] * Math.PI / 180, H = d[q + 5] / 10, f = d[q + 6];
      const ux = Math.sin(a), uz = Math.cos(a), wx = -uz, wz = ux;      // asse lungo e asse corto
      const g = d[q + 7] / 10, y0 = g - 2.5, y1 = g + H + ((f & 1) ? 1.0 : 0.2);
      const r1 = ((d[q] * 73 + d[q + 1] * 151 + b * 7) % 97) / 97, r2 = ((d[q] * 31 + d[q + 1] * 17 + b * 13) % 89) / 89;
      const wc = (f & 2) ? P.ind[Math.floor(r1 * P.ind.length)] : P.wall[Math.floor(r1 * P.wall.length)];
      const rc = (f & 1) ? P.tile[Math.floor(r2 * P.tile.length)] : P.flat[Math.floor(r2 * P.flat.length)];
      const c = [[cx + ux * hu + wx * hv, cz + uz * hu + wz * hv], [cx - ux * hu + wx * hv, cz - uz * hu + wz * hv], [cx - ux * hu - wx * hv, cz - uz * hu - wz * hv], [cx + ux * hu - wx * hv, cz + uz * hu - wz * hv]];
      const nrm = [[wx, wz], [-ux, -uz], [-wx, -wz], [ux, uz]];           // normale esterna di ogni parete
      for (let k = 0; k < 4; k++) {
        const A = c[k], B = c[(k + 1) % 4], [nx, nz] = nrm[k];
        const i0 = put(A[0], y0, A[1], wc, 1, nx, 0, nz), i1 = put(B[0], y0, B[1], wc, 1, nx, 0, nz), i2 = put(B[0], y1, B[1], wc, 1, nx, 0, nz), i3 = put(A[0], y1, A[1], wc, 1, nx, 0, nz);
        // verso dei triangoli: la faccia anteriore guarda fuori
        if (-(B[1] - A[1]) * nx + (B[0] - A[0]) * nz > 0) { idx[t++] = i0; idx[t++] = i1; idx[t++] = i2; idx[t++] = i0; idx[t++] = i2; idx[t++] = i3; }
        else { idx[t++] = i0; idx[t++] = i2; idx[t++] = i1; idx[t++] = i0; idx[t++] = i3; idx[t++] = i2; }
      }
      const j0 = put(c[0][0], y1, c[0][1], rc, 1, 0, 1, 0), j1 = put(c[1][0], y1, c[1][1], rc, 1, 0, 1, 0), j2 = put(c[2][0], y1, c[2][1], rc, 1, 0, 1, 0), j3 = put(c[3][0], y1, c[3][1], rc, 1, 0, 1, 0);
      const up = (c[1][1] - c[0][1]) * (c[2][0] - c[0][0]) - (c[1][0] - c[0][0]) * (c[2][1] - c[0][1]) > 0;   // componente y di (c1-c0)x(c2-c0)
      if (up) { idx[t++] = j0; idx[t++] = j1; idx[t++] = j2; idx[t++] = j0; idx[t++] = j2; idx[t++] = j3; }
      else { idx[t++] = j0; idx[t++] = j2; idx[t++] = j1; idx[t++] = j0; idx[t++] = j3; idx[t++] = j2; }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.computeBoundingSphere();
    const m = new THREE.Mesh(geo, this.farBMat);
    m.matrixAutoUpdate = false;
    return m;
  }

  // corsi d'acqua della tessera: nastri con la quota calcolata dalla pipeline (dati delle tessere di terreno)
  buildRibbons(tk) {
    const d = this.ribbons.get(tk);
    if (!d || !d.length) return null;
    const p = this.meta.proj, ox = p.xmin + (tk % 1000) * 1000, oz = p.zmin + Math.floor(tk / 1000) * 1000;
    const pos = [], idx = [];
    for (let o = 0; o < d.length;) {
      const hw = d[o] / 20, n = d[o + 1];
      o += 2;
      const pts = [];
      for (let k = 0, x = 0, z = 0, h = 0; k < n; k++, o += 3) { x += d[o]; z += d[o + 1]; h += d[o + 2]; pts.push([ox + x / 100, oz + z / 100, h / 100]); }
      const base = pos.length / 3;
      for (let k = 0; k < n; k++) {
        const a = pts[Math.max(0, k - 1)], b = pts[Math.min(n - 1, k + 1)];
        let dx = b[0] - a[0], dz = b[1] - a[1]; const L = Math.hypot(dx, dz) || 1; dx /= L; dz /= L;
        const [x, z, h] = pts[k];
        pos.push(x - dz * hw, h, z + dx * hw, x + dz * hw, h, z - dx * hw);
        if (k) { const q = base + 2 * k; idx.push(q - 2, q - 1, q, q - 1, q + 1, q); }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(new Float32Array(pos.length).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
    geo.setIndex(idx);
    geo.computeBoundingSphere();
    const m = new THREE.Mesh(geo, this.waterMat);
    m.renderOrder = 1;
    return m;
  }

  // pontili (OSM man_made=pier): impalcato in legno su pali, all'altezza della riva
  buildPiers(t) {
    const list = t.data && t.data.pr;
    if (!list || !list.length) return null;
    const T = this.terrain, g = new GeoBuilder(true, false);
    const WOOD = [0.47, 0.36, 0.25], POST = [0.3, 0.26, 0.22];
    for (const rec of list) {
      const pts = [];
      for (let i = 2, x = 0, z = 0; i < rec.length; i += 2) { x += rec[i]; z += rec[i + 1]; pts.push([x / 10, z / 10]); }
      if (pts.length < 2) continue;
      if (rec[0] === 0) {
        const w = rec[1] / 10, y = Math.max(T.height(pts[0][0], pts[0][1]), T.height(pts[pts.length - 1][0], pts[pts.length - 1][1])) + 0.25;
        for (let i = 0; i < pts.length - 1; i++) {
          const [ax, az] = pts[i], [bx, bz] = pts[i + 1], L = Math.hypot(bx - ax, bz - az);
          if (L < 0.2) continue;
          const dx = (bx - ax) / L, dz = (bz - az) / L;
          box(g, (ax + bx) / 2, y - 0.25, (az + bz) / 2, L + 0.05, 0.25, w, dx, dz, WOOD, [0.55, 0.43, 0.3]);
          for (let s = 0; s <= L; s += 4) for (const sd of [-1, 1]) {
            const px = ax + dx * s - dz * sd * (w / 2 - 0.15), pz = az + dz * s + dx * sd * (w / 2 - 0.15);
            box(g, px, y - 4.2, pz, 0.2, 4.0, 0.2, dx, dz, POST);
          }
        }
      } else {
        let y = -1e9;
        for (const [x, z] of pts) y = Math.max(y, T.height(x, z));
        y += 0.25;
        const v2 = pts.map(([x, z]) => new THREE.Vector2(x, z));
        let tris;
        try { tris = THREE.ShapeUtils.triangulateShape(v2, []); } catch (e) { continue; }
        const top = pts.map(([x, z]) => g.v(x, y, z, 0.55, 0.43, 0.3));
        for (const [a, b, c] of tris) {
          const up = (v2[b].y - v2[a].y) * (v2[c].x - v2[a].x) - (v2[b].x - v2[a].x) * (v2[c].y - v2[a].y) > 0;
          if (up) g.tri(top[a], top[b], top[c]); else g.tri(top[a], top[c], top[b]);
        }
        for (let i = 0; i < pts.length; i++) {        // bordo dell'impalcato
          const [ax, az] = pts[i], [bx, bz] = pts[(i + 1) % pts.length];
          const q = [g.v(ax, y - 0.4, az, ...WOOD), g.v(bx, y - 0.4, bz, ...WOOD), g.v(bx, y, bz, ...WOOD), g.v(ax, y, az, ...WOOD)];
          g.quad(q[0], q[1], q[2], q[3]); g.quad(q[0], q[3], q[2], q[1]);
        }
      }
    }
    if (g.empty) return null;
    this.pierMat = this.pierMat || new THREE.MeshLambertMaterial({ vertexColors: true });
    const m = g.mesh ? g.mesh(this.pierMat) : new THREE.Mesh(g.build(), this.pierMat);
    m.castShadow = true;
    return m;
  }

  // acqua: tempo per le onde e colore del cielo per il riflesso
  updateWater(time, sky) { if (this.waterU) { this.waterU.uTime.value = time % 10000; this.waterU.uSky.value.copy(sky); } }

  tileKeyAt(x, z) { const p = this.meta.proj; return Math.floor((z - p.zmin) / 1000) * 1000 + Math.floor((x - p.xmin) / 1000); }

  // aggiorna l'insieme di tessere necessarie attorno al giocatore
  update(x, z) {
    const p = this.meta.proj;
    const ci = Math.floor((x - p.xmin) / 1000), cj = Math.floor((z - p.zmin) / 1000);
    const rad = this.settings.viewTiles;
    const want = new Set();
    for (let j = cj - rad; j <= cj + rad; j++) for (let i = ci - rad; i <= ci + rad; i++) {
      if (i < 0 || j < 0 || i >= this.meta.tilesX || j >= this.meta.tilesZ) continue;
      const tcx = p.xmin + (i + 0.5) * 1000, tcz = p.zmin + (j + 0.5) * 1000;
      const d = Math.hypot(tcx - x, tcz - z);
      if (d > (rad + 0.3) * 1000) continue;
      want.add(j * 1000 + i);
      if (!this.tiles.has(j * 1000 + i)) {
        const t = { i, j, key: j * 1000 + i, parts: {}, state: 'new', d };
        this.tiles.set(t.key, t);
      }
      const t = this.tiles.get(j * 1000 + i);
      t.d = d;
      t.vegWanted = d < 1700;
      // edifici dettagliati solo vicino: piu' in la' bastano quelli semplificati (se ci sono)
      const detail = this.farIdx ? (this.settings.detailKm || 1.5) * 1000 : 1e9;
      if (d < detail) { if (t.bldPending) { t.bldPending = false; delete t.parts.buildings; } }
      else if (d > detail + 400 && t.parts.buildings && !t.gen) {
        const o = t.parts.buildings;
        this.root.remove(o); o.traverse((m) => { if (m.geometry) m.geometry.dispose(); });
        t.parts.buildings = null; t.bldPending = true;
      }
      t.bldFar = d >= detail;
      if (t.fence) t.fence.visible = d < 1100;
      const veg = t.parts.veg;
      if (veg && veg.userData.lod) {         // alberi: chioma piena vicino, semplificata lontano
        const L = veg.userData.lod, near = d < (L.isNear ? 750 : 650);
        if (near !== L.isNear) { L.isNear = near; for (const m of L.near) m.visible = near; for (const m of L.far) m.visible = !near; }
      }
    }
    for (const [k, t] of this.tiles) {
      if (!want.has(k) && t.d > (rad + 0.9) * 1000) this.unload(t);
      else if (!want.has(k)) t.d = Math.hypot(p.xmin + (t.i + 0.5) * 1000 - x, p.zmin + (t.j + 0.5) * 1000 - z);
    }
    // dati del terreno: anello di una tessera in piu'; si liberano le tessere lontane
    const gw = [], gr = rad + 1;
    for (let j = cj - gr; j <= cj + gr; j++) for (let i = ci - gr; i <= ci + gr; i++) {
      if (i < 0 || j < 0 || i >= this.meta.tilesX || j >= this.meta.tilesZ) continue;
      const k = j * 1000 + i;
      if (this.ground.has(k)) continue;
      const d = Math.hypot(p.xmin + (i + 0.5) * 1000 - x, p.zmin + (j + 0.5) * 1000 - z);
      if (d <= (gr + 0.8) * 1000) gw.push([d, k]);
    }
    gw.sort((a, b) => a[0] - b[0]);
    this.groundWant = gw.map((q) => q[1]);
    for (const [k, st] of this.ground) {
      if (st !== 'ready' || this.tiles.has(k)) continue;
      const i = k % 1000, j = Math.floor(k / 1000);
      if (Math.hypot(p.xmin + (i + 0.5) * 1000 - x, p.zmin + (j + 0.5) * 1000 - z) > (gr + 1.8) * 1000) { this.terrain.dropTile(k); this.ground.delete(k); }
    }
    this.loadGround();
    this.updateFarTerrain(x, z);
  }

  // al massimo 6 file in arrivo alla volta, prima i piu' vicini
  loadGround() {
    while (this.groundBusy < 6 && this.groundWant.length) {
      const k = this.groundWant.shift();
      if (this.ground.has(k)) continue;
      const i = k % 1000, j = Math.floor(k / 1000);
      this.ground.set(k, 'loading'); this.groundBusy++;
      loadData(`g_${i}_${j}`, `data/ground/g_${i}_${j}.js`)
        .then(async (parts) => {
          this.roads.addTile(k, parts[0].r);
          if (parts[0].wr && parts[0].wr.length) this.ribbons.set(k, parts[0].wr);
          await this.terrain.addTile(k, parts);
          if (this.ground.get(k) === 'loading') this.ground.set(k, 'ready'); else this.terrain.dropTile(k);
        })
        .catch((e) => { console.warn('tessera di terreno', i, j, e); this.ground.set(k, 'none'); })
        .finally(() => { this.groundBusy--; this.loadGround(); });
    }
  }

  // la tessera e le otto vicine hanno quote, colori e strade?
  groundReady(t) {
    for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
      const i = t.i + di, j = t.j + dj;
      if (i < 0 || j < 0 || i >= this.meta.tilesX || j >= this.meta.tilesZ) continue;
      const st = this.ground.get(j * 1000 + i);
      if (st !== 'ready' && st !== 'none') return false;
    }
    return true;
  }

  unload(t) {
    for (const k of Object.keys(t.parts)) {
      const o = t.parts[k];
      if (!o) continue;
      this.root.remove(o);
      if (o.userData.dispose) o.userData.dispose();
      o.traverse((m) => { if (m.geometry) m.geometry.dispose(); if (m.isSprite && m.material.map) { m.material.map.dispose(); m.material.dispose(); } });
    }
    this.collision.removeTile(t.key);
    if (this.traffic) this.traffic.removeTile(t.key);
    this.cameras = this.cameras.filter((c) => c.tile !== t.key);
    this.signals = this.signals.filter((s) => s.tile !== t.key);
    this.tiles.delete(t.key);
    t.dead = true;
  }

  // esegue lavori di costruzione entro un budget di tempo (ms)
  pump(budget = 10) {
    const t0 = performance.now();
    const list = [...this.tiles.values()].sort((a, b) => a.d - b.d);
    for (const t of list) {
      if (performance.now() - t0 > budget) return false;
      if (t.state === 'new') {
        t.state = 'loading';
        if (this.tileSet.has(t.key)) {
          loadData('t_' + t.i + '_' + t.j, `data/tiles/t_${t.i}_${t.j}.js`).then((d) => { t.data = d; t.state = 'ready'; }).catch(() => { t.data = null; t.state = 'ready'; });
        } else { t.data = null; t.state = 'ready'; }
        continue;
      }
      if (t.state !== 'ready' || t.dead) continue;
      const add = (name, obj) => { t.parts[name] = obj; if (obj) this.root.add(obj); };
      if (!('terrain' in t.parts)) {
        if (!this.groundReady(t)) continue;
        add('terrain', this.terrain.hasTile(t.key) ? this.terrain.buildTile(t.key, Math.max(5, this.terrain.step), this.terrain.tileMaterial(t.key, this.detail)) : null);
        continue;
      }
      if (!('roads' in t.parts)) {
        // strade ed edifici si costruiscono a passi: si lavora finche' c'e' tempo in questo fotogramma
        if (!t.gen) t.gen = this.roads.buildTileGen(t.key);
        let r;
        do { r = t.gen.next(); } while (!r.done && performance.now() - t0 < budget);
        if (!r.done) return false;
        t.gen = null; add('roads', r.value); continue;
      }
      if (!('signs' in t.parts)) {
        const s = this.signage.build(t.key, t.data);
        for (const sg of s.signals) this.signals.push({ ...sg, tile: t.key });
        for (const c of s.cameras || []) this.cameras.push({ x: c[0], z: c[1], tile: t.key });
        add('signs', s.group); continue;
      }
      if (!('buildings' in t.parts)) {
        if (t.data && t.bldFar && this.farIdx && this.farIdx.has(t.key)) { t.parts.buildings = null; t.bldPending = true; continue; }   // lontano: restano i volumi semplici
        if (t.data) {
          // (le collisioni si registrano una volta sola, anche se il dettaglio viene tolto e rimesso)
          if (!t.gen) { t.gen = this.buildings.buildGen(t.data, t.bldCol ? null : this.collision, t.key); t.bldCol = true; }
          let r;
          do { r = t.gen.next(); } while (!r.done && performance.now() - t0 < budget);
          if (!r.done) return false;
          t.gen = null; add('buildings', r.value.group);
        } else add('buildings', null);
        if (!t.rbDone) { t.rbDone = true; for (const rb of this.roads.roundabouts) if (this.roads.tileKey(rb.x, rb.z) === t.key) this.collision.addCircle(t.key, rb.x, rb.z, rb.r); }
        continue;
      }
      if (!('paths' in t.parts)) {
        const g = new THREE.Group();
        const pa = this.roads.buildPaths(t.data), ba = this.roads.buildBarriers(t.data, this.collision, t.key), pw = this.buildPower(t), st = this.roads.buildStalls(t.data);
        const rib = this.buildRibbons(t.key), pr = this.buildPiers(t);
        t.fence = ba;          // muri e recinzioni: sottili, da lontano non si vedono (vedi update)
        if (ba) ba.visible = t.d < 1100;
        for (const o of [pa, ba, pw, st, rib, pr]) if (o) g.add(o);
        add('paths', g.children.length ? g : null); continue;
      }
      if (!('gates' in t.parts)) { add('gates', this.gates.build(t.key, t.data)); continue; }
      if (!('props' in t.parts)) {
        add('props', this.buildProps(t));
        if (this.traffic) this.traffic.computeParkSpots(t.key, t.data);
        continue;
      }
      if (!('labels' in t.parts)) { add('labels', this.buildLabels(t)); continue; }
      if (t.vegWanted && !('veg' in t.parts)) { add('veg', this.vegetation.build(t.data, t.i, t.j, this.collision, t.key, this.settings.trees)); continue; }
    }
    return true;
  }

  ready(x, z) {
    const t = this.tiles.get(this.tileKeyAt(x, z));
    return t && 'buildings' in t.parts;
  }

  progress() {
    let done = 0, total = 0;
    for (const t of this.tiles.values()) { total += 9; done += Object.keys(t.parts).length; }
    return total ? done / total : 0;
  }

  // elettrodotti reali (power=line): tralicci ai vertici e conduttori con catenaria
  buildPower(t) {
    const lines = this.meta.power || [];
    if (!lines.length) return null;
    const p = this.meta.proj, x0 = p.xmin + t.i * 1000, z0 = p.zmin + t.j * 1000;
    const inTile = (q) => q[0] >= x0 && q[0] < x0 + 1000 && q[1] >= z0 && q[1] < z0 + 1000;
    const H = 30, pos = [], tw = [];
    const T = this.terrain;
    for (const ln of lines) {
      for (let i = 0; i < ln.length; i++) {
        if (!inTile(ln[i])) continue;
        const a = ln[i], prev = ln[i - 1] || ln[i + 1], next = ln[i + 1] || ln[i - 1];
        let dx = next[0] - prev[0], dz = next[1] - prev[1]; const L = Math.hypot(dx, dz) || 1; dx /= L; dz /= L;
        tw.push([a[0], T.height(a[0], a[1]), a[1], Math.atan2(dx, dz)]);
        if (i < ln.length - 1) {
          const b = ln[i + 1];
          const ya = T.height(a[0], a[1]) + H, yb = T.height(b[0], b[1]) + H, span = Math.hypot(b[0] - a[0], b[1] - a[1]);
          const rx = -(b[1] - a[1]) / (span || 1), rz = (b[0] - a[0]) / (span || 1);
          for (const [off, dy] of [[-5, -4], [5, -4], [-3.5, 0], [3.5, 0]]) {
            for (let s = 0; s < 8; s++) {
              for (const tt of [s / 8, (s + 1) / 8]) {
                const sag = Math.min(9, span * 0.03) * 4 * tt * (1 - tt);
                pos.push(a[0] + (b[0] - a[0]) * tt + rx * off, ya + (yb - ya) * tt + dy - sag, a[1] + (b[1] - a[1]) * tt + rz * off);
              }
            }
          }
        }
      }
    }
    if (!tw.length) return null;
    const g = new THREE.Group();
    if (pos.length) {
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      this.wireMat = this.wireMat || new THREE.LineBasicMaterial({ color: 0x2a2c2e });
      g.add(new THREE.LineSegments(geo, this.wireMat));
    }
    if (!this.towerGeo) {
      // traliccio schematico: quattro montanti rastremati e due mensole
      const parts = [];
      const leg = new THREE.CylinderGeometry(0.12, 0.2, H, 4);
      for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) { const l = leg.clone(); l.rotateZ(-sx * 0.08); l.rotateX(sz * 0.08); l.translate(sx * 1.6, H / 2, sz * 1.6); parts.push(l); }
      for (const [y, wd] of [[H - 4, 11], [H, 8]]) { const arm = new THREE.BoxGeometry(wd, 0.25, 0.25); arm.translate(0, y, 0); parts.push(arm); }
      for (let y = 5; y < H; y += 6) { const br = new THREE.BoxGeometry(3.4 - y * 0.06, 0.12, 3.4 - y * 0.06); br.translate(0, y, 0); parts.push(br); }
      this.towerGeo = mergeGeometries(parts.map((q) => q.toNonIndexed()));
      this.towerMat = new THREE.MeshLambertMaterial({ color: 0x8a9096 });
    }
    const inst = new THREE.InstancedMesh(this.towerGeo, this.towerMat, tw.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), one = new THREE.Vector3(1, 1, 1), v = new THREE.Vector3();
    tw.forEach(([x, y, z, yaw], i) => { q.setFromAxisAngle(up, yaw); v.set(x, y - 0.5, z); m.compose(v, q, one); inst.setMatrixAt(i, m); this.collision.addCircle(t.key, x, z, 2.2, y + 29); });
    inst.computeBoundingSphere();
    g.add(inst);
    return g;
  }

  // arredo urbano reale da OSM: panchine, cestini, paletti, idranti, rastrelliere, fontanelle
  // (modelli del progetto "city")
  buildProps(t) {
    const pts = (t.data && t.data.pt) || [];
    const kinds = { 10: makeBenches, 11: makeBins, 12: makeBollards, 13: makeHydrants, 14: makeBikeRacks, 15: makeFountains };
    const by = {};
    for (const q of pts) if (kinds[q[0]]) (by[q[0]] = by[q[0]] || []).push(q);
    const g = new THREE.Group();
    for (const k of Object.keys(by)) {
      const list = by[k], set = kinds[k](list.length);
      list.forEach((q, i) => {
        const x = q[1] / 10, z = q[2] / 10;
        let rot = ((q[1] * 7 + q[2] * 13) % 628) / 100;
        const nr = this.roads.nearest(x, z, 25, (w) => w.drivable);
        if (nr && (+k === 10 || +k === 14)) rot = Math.atan2(nr.px - x, nr.pz - z);
        const dir = +k === 10 ? parseFloat(t.data.s[q[3]]) : NaN;
        if (!Number.isNaN(dir)) rot = Math.PI - dir * Math.PI / 180;
        const onWalk = nr && nr.d < this.roads.ways[nr.wi].width / 2 + 1.9 && this.roads.sidewalkSides(this.roads.ways[nr.wi], x, z);
        set.setAt(i, x, z, rot, this.terrain.height(x, z) + (onWalk ? 0.31 : 0.08));
        if (+k === 12 || +k === 13) this.collision.addCircle(t.key, x, z, 0.16);
      });
      set.mesh.traverse((o) => { if (o.isInstancedMesh) { o.computeBoundingSphere(); o.castShadow = true; } });
      g.add(set.mesh);
    }
    return g.children.length ? g : null;
  }

  buildLabels(t) {
    const p = this.meta.proj;
    const x0 = p.xmin + t.i * 1000, z0 = p.zmin + t.j * 1000;
    const g = new THREE.Group();
    for (const lm of this.meta.landmarks) {
      const [code, x, z, name] = lm;
      if (x < x0 || x >= x0 + 1000 || z < z0 || z >= z0 + 1000) continue;
      if (code === 5 || code === 11 || code === 9 || !name) continue;
      const cv = document.createElement('canvas');
      const ctx = cv.getContext('2d');
      ctx.font = 'bold 30px Arial';
      const w = Math.min(900, ctx.measureText(name).width + 30);
      cv.width = w; cv.height = 48;
      ctx.font = 'bold 30px Arial';
      ctx.fillStyle = 'rgba(255,255,255,0.88)';
      ctx.beginPath(); ctx.roundRect(2, 2, w - 4, 44, 12); ctx.fill();
      ctx.fillStyle = LM_LABEL[code] || '#333'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(name, w / 2, 26);
      const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: true, fog: false, transparent: true }));
      const y = this.terrain.height(x, z) + (code === 1 ? 32 : code === 12 ? 6 : 18);
      sp.position.set(x, y, z);
      sp.scale.set(w / 48 * 3.2, 3.2, 1);
      sp.userData.lm = true;
      g.add(sp);
    }
    return g;
  }

  // Etichette dei luoghi: solo le piu' vicine e senza sovrapposizioni sullo schermo (prima in
  // citta' se ne accavallavano una decina). In volo il raggio si allarga.
  updateLabels(cam, high = false) {
    const cand = [], R = high ? 1100 : 520;
    for (const t of this.tiles.values()) {
      const g = t.parts.labels;
      if (!g) continue;
      for (const sp of g.children) {
        sp.visible = false;
        if (!this.labelsOn) continue;
        const d = sp.position.distanceTo(cam.position);
        if (d < R && d > 15) cand.push([d, sp]);
      }
    }
    cand.sort((p, q) => p[0] - q[0]);
    const boxes = [], v = this._lv || (this._lv = new THREE.Vector3());
    for (const [d, sp] of cand) {
      if (boxes.length >= 7) break;
      v.copy(sp.position).project(cam);
      if (v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05) continue;
      const sc = Math.max(1, d / 120), asp = sp.userData.asp || (sp.userData.asp = sp.scale.x / sp.scale.y);
      // ingombro sullo schermo in coordinate normalizzate (approssimato dalla distanza)
      const hh = 3.2 * sc / d * 1.9, hw = hh * asp * 0.56;
      if (boxes.some((bx) => Math.abs(bx[0] - v.x) < bx[2] + hw && Math.abs(bx[1] - v.y) < bx[3] + hh)) continue;
      boxes.push([v.x, v.y, hw, hh]);
      sp.visible = true;
      sp.scale.set(asp * 3.2 * sc, 3.2 * sc, 1);
    }
  }
}
