import * as THREE from 'three';
import { hash } from './geo.js';
import { loadData } from './data.js';

// Alberi vicini (entro ~110-160 m dalla telecamera): modelli veri di Quaternius (CC0, latifoglie,
// betulle per i filari, pini per le conifere, qualche albero autunnale; tools/import-trees.mjs).
// Piu' in la' restano le chiome semplici (molto piu' leggere: migliaia di alberi per km2). Il cambio
// e' esatto: le chiome semplici entro il raggio attorno al centro NEAR spariscono nello shader (anche
// nelle ombre) e al loro posto ci sono i modelli, scelti sulla CPU con lo stesso centro e raggio.
export const NEAR = { c: { value: new THREE.Vector3(1e9, 0, 1e9) }, r: { value: 0 } };
function hideNear(mat, key) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uNearC = NEAR.c; sh.uniforms.uNearR = NEAR.r;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform vec3 uNearC;\nuniform float uNearR;')
      .replace('#include <project_vertex>', `#include <project_vertex>
        #ifdef USE_INSTANCING
          vec4 nearO = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          if (uNearR > 0.0 && distance(nearO.xz, uNearC.xz) < uNearR) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        #endif`);
  };
  mat.customProgramCacheKey = () => 'veg-near-' + key;
  return mat;
}

// Alberi: punti OSM (natural=tree), filari (tree_row) e boschi/parchi/giardini
// ricavati dalla copertura del suolo reale.
const DENSITY = { bank: 0.07, shore: 0.03, island: 0.02, flowerbed: 0.02, forest: 0.85, wood: 0.85, scrub: 0.35, park: 0.18, garden: 0.12, cemetery: 0.08, residential: 0.035, grass: 0.03, meadow: 0.012, farmland: 0.004, default: 0.02, recreation_ground: 0.04, village_green: 0.05, orchard: 0.3, wetland: 0.2 };

const TS = 10;   // dati per albero: x, y, z, altezza, raggio della chioma, tipo, autunno, tinta, rotazione, caso

// mescola l'ordine delle istanze (matrici e colori) con un generatore ripetibile
function shuffleInstances(m, seed) {
  const M = m.instanceMatrix.array, C = m.instanceColor ? m.instanceColor.array : null;
  let r = seed >>> 0;
  const rnd = () => { r = (Math.imul(r ^ (r >>> 15), 2246822519) + 0x9e3779b9) >>> 0; return r / 4294967296; };
  for (let i = m.count - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    for (let k = 0; k < 16; k++) { const t = M[i * 16 + k]; M[i * 16 + k] = M[j * 16 + k]; M[j * 16 + k] = t; }
    if (C) for (let k = 0; k < 3; k++) { const t = C[i * 3 + k]; C[i * 3 + k] = C[j * 3 + k]; C[j * 3 + k] = t; }
  }
  m.instanceMatrix.needsUpdate = true; if (C) m.instanceColor.needsUpdate = true;
}

export class Vegetation {
  constructor(terrain, roads) {
    this.terrain = terrain; this.roads = roads;
    const crown = new THREE.IcosahedronGeometry(1, 1);
    const pos = crown.attributes.position;
    for (let i = 0; i < pos.count; i++) { // chioma irregolare
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      const f = 0.85 + 0.3 * Math.abs(Math.sin(x * 5.1 + y * 3.7 + z * 4.3));
      pos.setXYZ(i, x * f, y * f * 0.9 + 0.1, z * f);
    }
    // normali "sferiche" (dal centro della chioma, con un po' di rumore): la chioma appare tonda e
    // morbida senza aggiungere triangoli (prima ogni faccia era piatta e si vedevano gli spigoli)
    const roundNormals = (geo) => {
      const p = geo.attributes.position, n = new Float32Array(p.count * 3);
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i), y = p.getY(i) - 0.1, z = p.getZ(i), l = Math.hypot(x, y * 1.1, z) || 1, j = 0.12 * Math.sin(i * 12.9898);
        n[i * 3] = x / l + j; n[i * 3 + 1] = y * 1.1 / l + 0.15; n[i * 3 + 2] = z / l - j;
        const m = Math.hypot(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]); n[i * 3] /= m; n[i * 3 + 1] /= m; n[i * 3 + 2] /= m;
      }
      geo.setAttribute('normal', new THREE.BufferAttribute(n, 3));
    };
    crown.computeVertexNormals(); roundNormals(crown);
    this.crownGeo = crown;
    // chioma semplificata (20 triangoli invece di 80) per gli alberi lontani
    const lo = new THREE.IcosahedronGeometry(1, 0), lp = lo.attributes.position;
    for (let i = 0; i < lp.count; i++) {
      const x = lp.getX(i), y = lp.getY(i), z = lp.getZ(i);
      lp.setXYZ(i, x * 1.02, y * 0.92 + 0.1, z * 1.02);
    }
    lo.computeVertexNormals(); roundNormals(lo);
    this.crownLoGeo = lo;
    this.coneGeo = new THREE.ConeGeometry(1, 1, 10); this.coneGeo.translate(0, 0.15, 0);
    this.trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 1, 7);
    this.crownMat = hideNear(new THREE.MeshLambertMaterial({ color: 0xffffff }), 'c');
    this.trunkMat = hideNear(new THREE.MeshLambertMaterial({ color: 0x5b4632 }), 't');
    this.depthMat = hideNear(new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking }), 'd');
    this.near = null; this.NEAR = NEAR;
  }

  // modelli vicini (qualita' media e alta): radius in metri, cap = alberi al massimo
  enableNear(scene, radius, cap) {
    this.near = { scene, radius, cap, meshes: [], groups: {}, ready: false, last: null, t: 0 };
    loadData('veg_trees', 'data/veg/trees.js').then((parts) => {
      const H = parts[0], N = this.near, mat = new THREE.MeshLambertMaterial({ vertexColors: true });
      H.models.forEach((m, k) => {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(parts[1 + k * 3]), 3));
        g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(parts[2 + k * 3]), 3));
        g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(parts[3 + k * 3]), 3));
        const im = new THREE.InstancedMesh(g, mat, cap);
        im.count = 0; im.castShadow = true; im.frustumCulled = false;
        im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(cap * 3), 3);
        im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        im.userData.model = m;
        scene.add(im);
        N.meshes.push(im);
        (N.groups[m.group] = N.groups[m.group] || []).push(im);
      });
      N.ready = true;
    }).catch((e) => console.warn('alberi vicini non disponibili', e));
  }

  // a ogni fotogramma: ricostruisce gli alberi vicini quando la telecamera si e' spostata
  updateNear(dt, cam, tiles) {
    const N = this.near;
    if (!N || !N.ready) return;
    N.t -= dt;
    // si rifa' quando la telecamera si e' spostata, quando sono arrivati alberi nuovi (tessere appena
    // costruite) e comunque ogni tanto
    if (N.last && N.t > 0 && N.gen === this.gen && Math.hypot(cam.x - N.last.x, cam.z - N.last.z) < 12) return;
    N.t = 1.5; N.last = { x: cam.x, z: cam.z }; N.gen = this.gen;
    const R = this.roads, size = R.tileSize, rad = N.radius, cand = [];
    for (const t of tiles.values()) {
      const veg = t.parts && t.parts.veg;
      if (!veg || !veg.userData.trees || !veg.visible) continue;
      const x0 = R.xmin + t.i * size, z0 = R.zmin + t.j * size;
      const dx = Math.max(x0 - cam.x, 0, cam.x - x0 - size), dz = Math.max(z0 - cam.z, 0, cam.z - z0 - size);
      if (Math.hypot(dx, dz) > rad) continue;
      const T = veg.userData.trees;
      for (let i = 0; i < T.length; i += TS) { const d = Math.hypot(T[i] - cam.x, T[i + 2] - cam.z); if (d < rad) cand.push(d, T, i); }
    }
    // troppi alberi (bosco fitto): il raggio si riduce a quello dei piu' vicini
    let r = rad, n = cand.length / 3;
    if (n > N.cap) {
      const ds = []; for (let k = 0; k < cand.length; k += 3) ds.push(cand[k]);
      ds.sort((a, b) => a - b); r = ds[N.cap - 1];
    }
    for (const im of N.meshes) im.count = 0;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color(), up = new THREE.Vector3(0, 1, 0);
    for (let k = 0; k < cand.length; k += 3) {
      if (cand[k] >= r) continue;
      const T = cand[k + 1], i = cand[k + 2];
      const kind = T[i + 5], autumn = T[i + 6], seed = T[i + 9];
      const grp = kind === 1 ? 'conifer' : kind === 2 ? 'tall' : autumn ? 'autumn' : 'broad';
      const list = N.groups[grp];
      const im = list[Math.floor(seed * list.length) % list.length];
      if (im.count >= N.cap) continue;
      const M = im.userData.model, h = T[i + 3], cr = T[i + 4];
      const sc = h / M.h * 1.15, sxz = Math.max(0.9, Math.min(1.6, cr * 1.2 / (M.r * sc))) * sc;
      q.setFromAxisAngle(up, T[i + 8]); p.set(T[i], T[i + 1], T[i + 2]); s.set(sxz, sc, sxz);
      m.compose(p, q, s); im.setMatrixAt(im.count, m);
      const g = T[i + 7];
      c.setRGB(g * (0.92 + 0.16 * seed), g, g * (0.95 + 0.1 * (1 - seed))); im.setColorAt(im.count, c);
      im.count++;
    }
    for (const im of N.meshes) { im.instanceMatrix.needsUpdate = true; im.instanceColor.needsUpdate = true; im.instanceMatrix.clearUpdateRanges(); im.instanceColor.clearUpdateRanges(); }
    NEAR.c.value.set(cam.x, 0, cam.z); NEAR.r.value = r; N.rEff = r; N.nCand = n;
  }

  build(tile, i, j, collision, tileKey, density = 1) {
    const T = this.terrain, R = this.roads;
    const size = R.tileSize, x0 = R.xmin + i * size, z0 = R.zmin + j * size;
    const pts = [];
    const add = (x, z, s, conifer = false, tall = false) => pts.push([x, z, s, conifer, tall]);
    if (tile) {
      for (let k = 0; k < tile.tr.length; k += 2) add(tile.tr[k] / 10, tile.tr[k + 1] / 10, 0.9 + hash(k) * 0.5);
      for (const row of tile.rows) {
        let x = 0, z = 0; const p = [];
        for (let k = 0; k < row.length; k += 2) { x += row[k]; z += row[k + 1]; p.push([x / 10, z / 10]); }
        for (let k = 0; k < p.length - 1; k++) {
          const L = Math.hypot(p[k + 1][0] - p[k][0], p[k + 1][1] - p[k][1]);
          for (let d = 0; d < L; d += 7) add(p[k][0] + (p[k + 1][0] - p[k][0]) * d / L, p[k][1] + (p[k + 1][1] - p[k][1]) * d / L, 0.8 + hash(k * 31 + d) * 0.4, false, hash(row.length * 7 + row[0]) < 0.45);
        }
      }
    }
    const STEP = 11;
    // dove gli alberi sono rilevati uno per uno (DBGT: migliaia per km2) quelli sparsi a caso nei
    // giardini e nei parchi si riducono, nei boschi restano
    const real = tile ? tile.tr.length / 2 : 0, thin = real > 400 ? 0.25 : real > 150 ? 0.6 : 1;
    let seed = (i * 7919 + j * 104729) | 0;
    for (let z = z0 + STEP / 2; z < z0 + size; z += STEP) for (let x = x0 + STEP / 2; x < x0 + size; x += STEP) {
      seed++;
      const jx = x + (hash(seed) - 0.5) * STEP, jz = z + (hash(seed * 3 + 1) - 0.5) * STEP;
      const cls = T.landClass(jx, jz);
      const d = (DENSITY[cls] || 0) * density * (cls === 'forest' || cls === 'wood' ? 1 : thin);
      if (hash(seed * 7 + 5) > d) continue;
      add(jx, jz, 0.75 + hash(seed * 11) * 0.6, (cls === 'forest' || cls === 'wood') && hash(seed * 13) < 0.12);
    }
    // scarta alberi su strade
    const ok = pts.filter(([x, z]) => {
      const nr = R.nearest(x, z, 9);
      return !nr || nr.d > R.ways[nr.wi].width / 2 + 1.5;
    });
    if (!ok.length) return null;
    const n = ok.length;
    const nCon = ok.filter((o) => o[3]).length;
    const crowns = new THREE.InstancedMesh(this.crownGeo, this.crownMat, n - nCon);
    const cones = nCon ? new THREE.InstancedMesh(this.coneGeo, this.crownMat, nCon) : null;
    const trunks = new THREE.InstancedMesh(this.trunkGeo, this.trunkMat, n);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color();
    const up = new THREE.Vector3(0, 1, 0);
    let k = 0, ki = 0, kc = 0;
    const trees = new Float32Array(n * TS);
    for (const [x, z, sc, conifer, tall] of ok) {
      const y = T.height(x, z);
      const h = (conifer ? 10 : tall ? 13 : 6.5) * sc * (0.8 + hash(k * 5 + 1) * 0.5);
      const cr = (conifer ? 2.1 : tall ? 1.5 : 2.6 + hash(k * 9) * 1.4) * sc;
      q.setFromAxisAngle(up, hash(k * 17) * 6.28);
      const g0 = 0.75 + hash(k * 23) * 0.4;
      trees.set([x, y, z, h, cr, conifer ? 1 : tall ? 2 : 0, !conifer && hash(k * 41) < 0.06 ? 1 : 0, g0, hash(k * 17) * 6.28, hash(k * 53 + 7)], k * TS);
      p.set(x, y + h * 0.3, z); s.set(1, h * 0.6, 1); m.compose(p, q, s); trunks.setMatrixAt(k, m);
      const g = 0.75 + hash(k * 23) * 0.4;
      if (conifer) {
        p.set(x, y + h * 0.55, z); s.set(cr, h * 0.85, cr); m.compose(p, q, s); cones.setMatrixAt(kc, m);
        c.setRGB(0.1 * g, 0.26 * g, 0.12 * g); cones.setColorAt(kc++, c);
      } else {
        p.set(x, y + h * 0.62, z); s.set(cr, tall ? h * 0.42 : cr * 1.05, cr); m.compose(p, q, s); crowns.setMatrixAt(ki, m);
        const autumn = hash(k * 41) < 0.06;
        c.setRGB(autumn ? 0.42 * g : 0.17 * g, autumn ? 0.3 * g : (0.29 + hash(k * 31) * 0.07) * g, 0.09 * g); crowns.setColorAt(ki++, c);
      }
      // alberi dentro la carreggiata (larghezze stimate, alberature negli spartitraffico): solo grafica
      if (collision && !(this.roads && this.roads.inCarriageway(x, z, this.terrain))) { const co = collision.addCircle(tileKey, x, z, 0.35 * sc, y + h, y - 0.5); co.src = 'albero'; }
      k++;
    }
    crowns.castShadow = true; trunks.castShadow = false;
    crowns.customDepthMaterial = this.depthMat;
    crowns.computeBoundingSphere(); trunks.computeBoundingSphere();
    // stessi alberi in versione leggera: World.setVegLod sceglie quale mostrare in base alla distanza
    const crownsLo = new THREE.InstancedMesh(this.crownLoGeo, this.crownMat, crowns.count);
    crownsLo.instanceMatrix.array.set(crowns.instanceMatrix.array);
    if (crowns.instanceColor) { crownsLo.instanceColor = new THREE.InstancedBufferAttribute(crowns.instanceColor.array, 3); }
    crownsLo.castShadow = true; crownsLo.computeBoundingSphere(); crownsLo.visible = false; crownsLo.customDepthMaterial = this.depthMat;
    // ordine casuale delle istanze lontane: mostrandone solo una parte (World.update, tessere
    // lontane) il bosco si dirada in modo uniforme invece di perdere interi gruppi di alberi
    shuffleInstances(crownsLo, 0x51f1);
    if (cones) shuffleInstances(cones, 0x2b9);
    crownsLo.userData.full = crownsLo.count; if (cones) cones.userData.full = cones.count;
    const g = new THREE.Group();
    g.add(crowns, trunks, crownsLo);
    g.userData.lod = { near: [crowns, trunks], far: [crownsLo], isNear: true };
    g.userData.trees = trees;
    this.gen = (this.gen || 0) + 1;
    if (cones) { cones.castShadow = true; cones.customDepthMaterial = this.depthMat; cones.computeBoundingSphere(); g.add(cones); }
    return g;
  }
}
