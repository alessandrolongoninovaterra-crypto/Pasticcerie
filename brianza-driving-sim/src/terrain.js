import * as THREE from 'three';

// Modello altimetrico reale e copertura del suolo, a tessere da 1 km caricate attorno al
// giocatore (data/ground/g_i_j.js). Dove una tessera non c'e' ancora si usa la panoramica a bassa
// risoluzione (data/overview.js): serve all'orizzonte e come ripiego. La memoria dipende dalla
// zona caricata, non dalla dimensione della mappa.
export class Terrain {
  constructor(meta, overview) {
    const hm = meta.height;
    this.step = hm.step;
    this.proj = meta.proj;
    this.xmin = meta.proj.xmin; this.zmin = meta.proj.zmin;
    this.tileSize = meta.tile;
    this.tilesX = meta.tilesX; this.tilesZ = meta.tilesZ;
    this.tiles = new Map();
    this._ck = -1; this._ct = null;
    // panoramica: quote (minimo locale, in decimetri) e colori a bassa risoluzione
    const [oh, hbuf, png] = overview;
    this.ov = oh;
    this.oh = new Float32Array(new Uint16Array(hbuf).length);
    { const u = new Uint16Array(hbuf); for (let i = 0; i < u.length; i++) this.oh[i] = u[i] * oh.hscale; }
    // classi di copertura: colore -> nome (tavolozza comune a tutte le tessere)
    const lc = meta.landcover;
    this.mpp = lc.mpp;
    this.palette = Object.entries(lc.palette).map(([k, c]) => ({ k, c }));
    this.palette.push({ k: 'default', c: lc.default });
    this.keyIdx = new Map(); this.lcKeys = []; this.classOf = [];
    this.ovPng = png;
  }

  // la panoramica dei colori (immagine) si decodifica a parte, prima di partire
  async init() {
    const { img, idx } = await this.decodePNG(this.ovPng);
    this.ovLc = idx;
    this.ovTex = this.makeTexture(img);
    this.ovPng = null;
  }

  async decodePNG(bytes) {
    const url = URL.createObjectURL(new Blob([bytes], { type: 'image/png' }));
    const img = new Image();
    img.src = url;
    try { await img.decode(); } finally { URL.revokeObjectURL(url); }
    const cv = document.createElement('canvas');
    cv.width = img.width; cv.height = img.height;
    const ctx = cv.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0);
    const px = new Uint32Array(ctx.getImageData(0, 0, cv.width, cv.height).data.buffer);
    const idx = new Uint8Array(px.length);
    let lastK = -1, lastI = 0;
    for (let i = 0; i < px.length; i++) {
      const k = px[i];
      if (k !== lastK) { lastK = k; lastI = this.colorIndex(k); }
      idx[i] = lastI;
    }
    return { img: cv, idx };
  }

  // indice comune di un colore RGBA e sua classe (colore noto piu' vicino)
  colorIndex(k) {
    let i = this.keyIdx.get(k);
    if (i !== undefined) return i;
    i = this.lcKeys.length;
    this.keyIdx.set(k, i); this.lcKeys.push(k);
    const r = k & 255, g = (k >>> 8) & 255, b = (k >>> 16) & 255;   // RGBA little endian
    let best = 1e9, cls = 'default';
    for (const p of this.palette) {
      const e = (p.c[0] - r) ** 2 + (p.c[1] - g) ** 2 + (p.c[2] - b) ** 2;
      if (e < best) { best = e; cls = p.k; }
    }
    this.classOf.push(cls);
    return i;
  }

  makeTexture(cv) {
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    return t;
  }

  // dati di una tessera: [intestazione+strade, quote u16, PNG dei colori]
  async addTile(tk, parts) {
    const [head, hbuf, png] = parts;
    const n = head.hn, u = new Uint16Array(hbuf), h = new Float32Array(n * n);
    for (let i = 0; i < h.length; i++) h[i] = (head.hb + u[i] * head.hs) / 100;
    const { img, idx } = await this.decodePNG(png);
    const i = tk % 1000, j = Math.floor(tk / 1000);
    const t = { h, n, cell: this.tileSize / (n - 1), x0: this.xmin + i * this.tileSize, z0: this.zmin + j * this.tileSize, lc: idx, lw: head.lw, img, tex: null, mat: null };
    this.tiles.set(tk, t);
    this._ck = -1;
    return t;
  }

  dropTile(tk) {
    const t = this.tiles.get(tk);
    if (!t) return;
    if (t.tex) t.tex.dispose();
    if (t.mat) t.mat.dispose();
    this.tiles.delete(tk);
    this._ck = -1;
  }

  hasTile(tk) { return this.tiles.has(tk); }

  tileAt(x, z) {
    const i = Math.floor((x - this.xmin) / this.tileSize), j = Math.floor((z - this.zmin) / this.tileSize);
    const k = j * 1000 + i;
    if (k === this._ck && i >= 0) return this._ct;
    const t = i >= 0 && j >= 0 ? this.tiles.get(k) || null : null;
    this._ck = i >= 0 ? k : -1; this._ct = t;
    return t;
  }

  // stessa triangolazione della mesh (diagonale da (0,1) a (1,0))
  static tri(h, nx, nz, gx, gz) {
    let ix = Math.floor(gx), iz = Math.floor(gz);
    if (ix < 0) ix = 0; else if (ix > nx - 2) ix = nx - 2;
    if (iz < 0) iz = 0; else if (iz > nz - 2) iz = nz - 2;
    let fx = gx - ix, fz = gz - iz;
    fx = fx < 0 ? 0 : fx > 1 ? 1 : fx; fz = fz < 0 ? 0 : fz > 1 ? 1 : fz;
    const i = iz * nx + ix;
    if (fx + fz <= 1) return h[i] + (h[i + 1] - h[i]) * fx + (h[i + nx] - h[i]) * fz;
    const h11 = h[i + nx + 1];
    return h11 + (h[i + nx] - h11) * (1 - fx) + (h[i + 1] - h11) * (1 - fz);
  }

  height(x, z) {
    const t = this.tileAt(x, z);
    if (t) return Terrain.tri(t.h, t.n, t.n, (x - t.x0) / t.cell, (z - t.z0) / t.cell);
    return this.heightCoarse(x, z);
  }

  // panoramica (minimo locale: sta sempre un po' sotto il terreno vero)
  heightCoarse(x, z) {
    const o = this.ov;
    return Terrain.tri(this.oh, o.hnx, o.hnz, (x - o.hx0) / o.hstep, (z - o.hz0) / o.hstep);
  }

  inside(x, z) {
    const p = this.proj;
    return x >= p.xmin && z >= p.zmin && x <= p.xmax && z <= p.zmax;
  }

  landClass(x, z) {
    const t = this.tileAt(x, z);
    if (t) {
      const px = Math.floor((x - t.x0) / this.mpp) + 1, py = Math.floor((z - t.z0) / this.mpp) + 1;
      return this.classOf[t.lc[Math.min(t.lw - 1, py) * t.lw + Math.min(t.lw - 1, px)]];
    }
    const o = this.ov, px = Math.floor((x - this.xmin) / o.lmpp), py = Math.floor((z - this.zmin) / o.lmpp);
    if (px < 0 || py < 0 || px >= o.lw || py >= o.lh) return 'default';
    return this.classOf[this.ovLc[py * o.lw + px]];
  }

  isUrban(x, z) {
    const k = this.landClass(x, z);
    return k === 'residential' || k === 'commercial' || k === 'retail' || k === 'industrial' || k === 'parking' || k === 'construction';
  }

  makeMaterial(detailTex, map) {
    const mat = new THREE.MeshLambertMaterial({ map });
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
    // stesso programma per tutte le tessere (cambia solo la tessitura)
    mat.customProgramCacheKey = () => 'bds-terrain';
    return mat;
  }

  // materiale della tessera caricata tk (la tessitura dei colori si crea alla prima richiesta)
  tileMaterial(tk, detailTex) {
    const t = this.tiles.get(tk);
    if (!t.mat) { t.tex = this.makeTexture(t.img); t.img = null; t.mat = this.makeMaterial(detailTex, t.tex); }
    return t.mat;
  }

  overviewMaterial(detailTex) { return this.makeMaterial(detailTex, this.ovTex); }

  // mesh della tessera caricata tk con passo step
  buildTile(tk, step, material) {
    const t = this.tiles.get(tk), lw = t.lw, m = this.mpp;
    return this.buildChunk(t.x0, t.z0, this.tileSize, step, material, 0,
      (x, z) => [(1 + (x - t.x0) / m) / lw, 1 - (1 + (z - t.z0) / m) / lw], (x, z) => Terrain.tri(t.h, t.n, t.n, (x - t.x0) / t.cell, (z - t.z0) / t.cell));
  }

  // pezzo di terreno lontano dalla panoramica, sempre sotto quello vicino (minimo attorno al
  // vertice), cosi' non spunta nelle trincee e nelle valli strette
  buildFarChunk(x0, z0, size, step, material, drop) {
    const o = this.ov, W = o.lw * o.lmpp, H = o.lh * o.lmpp;
    return this.buildChunk(x0, z0, size, step, material, drop,
      (x, z) => [(x - this.xmin) / W, 1 - (z - this.zmin) / H], (x, z) => this.heightCoarse(x, z));
  }

  buildChunk(x0, z0, size, step, material, drop, uvf, hf) {
    const n = Math.round(size / step) + 1;
    const pos = new Float32Array(n * n * 3), uv = new Float32Array(n * n * 2);
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const x = x0 + i * step, z = z0 + j * step, k = j * n + i;
      let y = hf(x, z);
      if (drop > 0) for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) y = Math.min(y, hf(x + a * step / 2, z + b * step / 2));
      pos[k * 3] = x; pos[k * 3 + 1] = y - drop; pos[k * 3 + 2] = z;
      const [u, v] = uvf(x, z);
      uv[k * 2] = u; uv[k * 2 + 1] = v;
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
