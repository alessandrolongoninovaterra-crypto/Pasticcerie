import * as THREE from 'three';
import { hash } from './geo.js';

// Alberi: punti OSM (natural=tree), filari (tree_row) e boschi/parchi/giardini
// ricavati dalla copertura del suolo reale.
const DENSITY = { forest: 0.85, wood: 0.85, scrub: 0.35, park: 0.18, garden: 0.12, cemetery: 0.08, residential: 0.035, grass: 0.03, meadow: 0.012, farmland: 0.004, default: 0.02, recreation_ground: 0.04, village_green: 0.05, orchard: 0.3, wetland: 0.2 };

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
    crown.computeVertexNormals();
    this.crownGeo = crown;
    this.coneGeo = new THREE.ConeGeometry(1, 1, 7); this.coneGeo.translate(0, 0.15, 0);
    this.trunkGeo = new THREE.CylinderGeometry(0.12, 0.18, 1, 5);
    this.crownMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this.trunkMat = new THREE.MeshLambertMaterial({ color: 0x5b4632 });
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
    let seed = (i * 7919 + j * 104729) | 0;
    for (let z = z0 + STEP / 2; z < z0 + size; z += STEP) for (let x = x0 + STEP / 2; x < x0 + size; x += STEP) {
      seed++;
      const jx = x + (hash(seed) - 0.5) * STEP, jz = z + (hash(seed * 3 + 1) - 0.5) * STEP;
      const cls = T.landClass(jx, jz);
      const d = (DENSITY[cls] || 0) * density;
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
    for (const [x, z, sc, conifer, tall] of ok) {
      const y = T.height(x, z);
      const h = (conifer ? 10 : tall ? 13 : 6.5) * sc * (0.8 + hash(k * 5 + 1) * 0.5);
      const cr = (conifer ? 2.1 : tall ? 1.5 : 2.6 + hash(k * 9) * 1.4) * sc;
      q.setFromAxisAngle(up, hash(k * 17) * 6.28);
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
      if (collision) collision.addCircle(tileKey, x, z, 0.35 * sc, y + h);
      k++;
    }
    crowns.castShadow = true; trunks.castShadow = false;
    crowns.computeBoundingSphere(); trunks.computeBoundingSphere();
    const g = new THREE.Group();
    g.add(crowns, trunks);
    if (cones) { cones.castShadow = true; cones.computeBoundingSphere(); g.add(cones); }
    return g;
  }
}
