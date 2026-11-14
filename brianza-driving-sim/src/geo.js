import * as THREE from 'three';

// Accumulatore di geometria: tutte le mesh di una tessera vengono unite in
// pochi BufferGeometry (una per materiale) per ridurre le draw call.
export class GeoBuilder {
  constructor(withColor = true, withUV = true) {
    this.p = []; this.c = withColor ? [] : null; this.u = withUV ? [] : null; this.i = []; this.n = 0;
  }
  v(x, y, z, r = 1, g = 1, b = 1, u = 0, w = 0) {
    this.p.push(x, y, z);
    if (this.c) this.c.push(r, g, b);
    if (this.u) this.u.push(u, w);
    return this.n++;
  }
  tri(a, b, c) { this.i.push(a, b, c); }
  quad(a, b, c, d) { this.i.push(a, b, c, a, c, d); }
  get empty() { return this.i.length === 0; }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    if (this.c) g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    if (this.u) g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2));
    g.setIndex(this.n > 65535 ? new THREE.Uint32BufferAttribute(this.i, 1) : new THREE.Uint16BufferAttribute(this.i, 1));
    g.computeVertexNormals();     // fixNormals applicato dall'aggancio qui sotto
    g.computeBoundingSphere();
    return g;
  }
  mesh(mat, shadows = false) {
    const m = new THREE.Mesh(this.build(), mat);
    m.castShadow = shadows; m.receiveShadow = true;
    return m;
  }
}

// Normali nulle (vertici di soli triangoli degeneri, o condivisi da facce opposte che si annullano):
// nello shader normalize(0) da' NaN, e di notte il bloom allarga quei pixel in quadrati neri.
// Le sostituiamo con la verticale.
export function fixNormals(g) {
  const n = g.attributes.normal;
  if (!n) return 0;
  const a = n.array;
  let bad = 0;
  for (let i = 0; i < a.length; i += 3) {
    const l = a[i] * a[i] + a[i + 1] * a[i + 1] + a[i + 2] * a[i + 2];
    if (!(l > 1e-8)) { a[i] = 0; a[i + 1] = 1; a[i + 2] = 0; bad++; }
  }
  if (bad) n.needsUpdate = true;
  return bad;
}

// aggancio globale: ogni computeVertexNormals (anche nei modelli importati) ripulisce le normali nulle
const _cvn = THREE.BufferGeometry.prototype.computeVertexNormals;
THREE.BufferGeometry.prototype.computeVertexNormals = function () { _cvn.call(this); fixNormals(this); };

// numero pseudo-casuale deterministico da un intero
export function hash(n) {
  n = (n ^ 61) ^ (n >>> 16); n = (n + (n << 3)) | 0; n ^= n >>> 4; n = Math.imul(n, 0x27d4eb2d); n ^= n >>> 15;
  return (n >>> 0) / 4294967296;
}

export function pointInRing(x, z, r) { // r: [[x,z],...]
  let inside = false;
  for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
    const xi = r[i][0], zi = r[i][1], xj = r[j][0], zj = r[j][1];
    if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

export function pointInFlat(x, z, f) { // f: Float32Array [x0,z0,x1,z1,...]
  let inside = false;
  const n = f.length / 2;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = f[i * 2], zi = f[i * 2 + 1], xj = f[j * 2], zj = f[j * 2 + 1];
    if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

export function canvasTexture(w, h, draw, repeat = true) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

export function noiseTexture(size = 256) {
  // rumore a due ottave (canali R e G) per il dettaglio di terreno e asfalto
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(size, size);
  const lowRes = 16, low = new Float32Array(lowRes * lowRes);
  for (let i = 0; i < low.length; i++) low[i] = Math.random();
  const sampleLow = (x, y) => {
    const gx = x / size * lowRes, gy = y / size * lowRes;
    const ix = Math.floor(gx), iy = Math.floor(gy), fx = gx - ix, fy = gy - iy;
    const g = (a, b) => low[((b + lowRes) % lowRes) * lowRes + ((a + lowRes) % lowRes)];
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    return (g(ix, iy) * (1 - sx) + g(ix + 1, iy) * sx) * (1 - sy) + (g(ix, iy + 1) * (1 - sx) + g(ix + 1, iy + 1) * sx) * sy;
  };
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const o = (y * size + x) * 4;
    img.data[o] = 140 + Math.random() * 115 * 0.9;
    img.data[o + 1] = sampleLow(x, y) * 255;
    img.data[o + 2] = 128;
    img.data[o + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}
