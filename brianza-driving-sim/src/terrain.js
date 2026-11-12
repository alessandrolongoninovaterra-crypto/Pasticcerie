import * as THREE from 'three';

// Modello altimetrico reale (griglia regolare in metri) + copertura del suolo.
export class Terrain {
  constructor(meta, heightBuf, landcoverImg) {
    const hm = meta.height;
    this.nx = hm.nx; this.nz = hm.nz; this.step = hm.step; this.x0 = hm.x0; this.z0 = hm.z0;
    const u16 = new Uint16Array(heightBuf);
    this.h = new Float32Array(u16.length);
    for (let i = 0; i < u16.length; i++) this.h[i] = u16[i] * hm.scale;
    this.proj = meta.proj;
    // copertura del suolo: immagine RGB proiettata sul terreno
    const lc = meta.landcover;
    this.lc = lc;
    this.lcW = lc.w; this.lcH = lc.h; this.mpp = lc.mpp;
    const cv = document.createElement('canvas');
    cv.width = lc.w; cv.height = lc.h;
    const ctx = cv.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(landcoverImg, 0, 0);
    // classe di copertura per pixel: un byte invece dei 4 dell'immagine RGBA (la mappa allargata
    // fino a Lecco ha ~44 milioni di pixel: 44 MB invece di 176)
    {
      const px = new Uint32Array(ctx.getImageData(0, 0, lc.w, lc.h).data.buffer);
      const idx = new Uint8Array(px.length), keyIdx = new Map();
      this.lcKeys = [];
      let lastK = -1, lastI = 0;
      for (let i = 0; i < px.length; i++) {
        const k = px[i];
        if (k !== lastK) {
          lastK = k; lastI = keyIdx.get(k);
          if (lastI === undefined) { lastI = this.lcKeys.length; keyIdx.set(k, lastI); this.lcKeys.push(k); }
        }
        idx[i] = lastI;
      }
      this.lcIdx = idx;
    }
    this.lcCanvas = cv;
    this.texture = new THREE.CanvasTexture(cv);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = 8;
    this.texture.wrapS = this.texture.wrapT = THREE.ClampToEdgeWrapping;
    // classi copertura: colore -> nome
    this.classCache = new Map();
    this.palette = Object.entries(lc.palette).map(([k, c]) => ({ k, c }));
    this.palette.push({ k: 'default', c: lc.default });
  }

  height(x, z) {
    let gx = (x - this.x0) / this.step, gz = (z - this.z0) / this.step;
    let ix = Math.floor(gx), iz = Math.floor(gz);
    if (ix < 0) ix = 0; else if (ix > this.nx - 2) ix = this.nx - 2;
    if (iz < 0) iz = 0; else if (iz > this.nz - 2) iz = this.nz - 2;
    let fx = gx - ix, fz = gz - iz;
    fx = fx < 0 ? 0 : fx > 1 ? 1 : fx; fz = fz < 0 ? 0 : fz > 1 ? 1 : fz;
    const i = iz * this.nx + ix, h = this.h;
    // stessa triangolazione della mesh (diagonale da (0,1) a (1,0))
    if (fx + fz <= 1) return h[i] + (h[i + 1] - h[i]) * fx + (h[i + this.nx] - h[i]) * fz;
    const h11 = h[i + this.nx + 1];
    return h11 + (h[i + this.nx] - h11) * (1 - fx) + (h[i + 1] - h11) * (1 - fz);
  }

  inside(x, z) {
    return x >= this.x0 && z >= this.z0 && x <= this.x0 + (this.nx - 1) * this.step && z <= this.z0 + (this.nz - 1) * this.step;
  }

  landClass(x, z) {
    const px = Math.floor((x - this.proj.xmin) / this.mpp), py = Math.floor((z - this.proj.zmin) / this.mpp);
    if (px < 0 || py < 0 || px >= this.lcW || py >= this.lcH) return 'default';
    const i = this.lcIdx[py * this.lcW + px];
    let k = this.classCache.get(i);
    if (k === undefined) {
      const u = this.lcKeys[i], r = u & 255, g = (u >>> 8) & 255, bl = (u >>> 16) & 255;   // RGBA little endian
      let best = 1e9;
      for (const p of this.palette) {
        const e = (p.c[0] - r) ** 2 + (p.c[1] - g) ** 2 + (p.c[2] - bl) ** 2;
        if (e < best) { best = e; k = p.k; }
      }
      this.classCache.set(i, k);
    }
    return k;
  }

  isUrban(x, z) {
    const k = this.landClass(x, z);
    return k === 'residential' || k === 'commercial' || k === 'retail' || k === 'industrial' || k === 'parking' || k === 'construction';
  }

  makeMaterial(detailTex) {
    const mat = new THREE.MeshLambertMaterial({ map: this.texture });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.detailMap = { value: detailTex };
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying float vUp;')
        .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nvUp = normalize(mat3(modelMatrix) * objectNormal).y;')
        .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying float vUp;\nuniform sampler2D detailMap;')
        .replace('#include <map_fragment>', `#include <map_fragment>
          // imbocchi delle gallerie: il colore riservato (magenta) apre il terreno; sul bordo, dove
          // il filtro lo mescola ai colori vicini, lo si toglie per non lasciare aloni
          float hole = min(diffuseColor.r, diffuseColor.b) - diffuseColor.g;
          if (hole > 0.5) discard;
          if (hole > 0.04) diffuseColor.rgb = clamp((diffuseColor.rgb - hole * vec3(1.0, 0.0, 1.0)) / (1.0 - hole), 0.0, 1.0);
          float d1 = texture2D(detailMap, vWPos.xz * 0.11).r;
          float d2 = texture2D(detailMap, vWPos.xz * 0.013).g;
          diffuseColor.rgb *= 0.72 + 0.32 * d1 + 0.22 * (d2 - 0.5);
          // sui pendii molto ripidi (oltre ~45 gradi) affiora la roccia
          float steep = smoothstep(0.26, 0.46, 1.0 - vUp);
          vec3 rock = vec3(0.47, 0.45, 0.42) * (0.75 + 0.5 * d1) * (0.9 + 0.3 * d2);
          diffuseColor.rgb = mix(diffuseColor.rgb, rock, steep * 0.85);`);
    };
    return mat;
  }

  // mesh di una tessera di terreno (dimensione size, origine x0,z0) con passo step
  // (drop > 0: terreno lontano, sempre sotto quello vicino: si prende il minimo attorno al vertice,
  //  cosi' non spunta nelle trincee e nelle valli strette)
  buildChunk(x0, z0, size, step, material, drop = 0) {
    const n = Math.round(size / step) + 1;
    const pos = new Float32Array(n * n * 3), uv = new Float32Array(n * n * 2);
    const W = this.proj.xmax - this.proj.xmin, H = this.proj.zmax - this.proj.zmin;
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const x = x0 + i * step, z = z0 + j * step, k = j * n + i;
      let y = this.height(x, z);
      if (drop > 0) for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) y = Math.min(y, this.height(x + a * step / 2, z + b * step / 2));
      pos[k * 3] = x; pos[k * 3 + 1] = y - drop; pos[k * 3 + 2] = z;
      uv[k * 2] = (x - this.proj.xmin) / W; uv[k * 2 + 1] = 1 - (z - this.proj.zmin) / H;
    }
    const idx = new Uint32Array((n - 1) * (n - 1) * 6);
    let t = 0;
    for (let j = 0; j < n - 1; j++) for (let i = 0; i < n - 1; i++) {
      const a = j * n + i, b = a + 1, c = a + n, d = c + 1;
      idx[t++] = a; idx[t++] = c; idx[t++] = b; idx[t++] = b; idx[t++] = c; idx[t++] = d;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, material);
    m.receiveShadow = true;
    return m;
  }
}
