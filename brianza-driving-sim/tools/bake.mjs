// Dati del gioco "a blocchi": prende l'uscita completa di build_data.py (cartella di stadio) e la
// taglia per tessere da 1 km, cosi' il gioco carica solo la zona attorno al giocatore.
//
//   node tools/bake.mjs <stadio> <data>
//
// Nello stadio: meta.js, roads.js, height.js, landcover.js, far.js. In uscita (in <data>):
//   ground/g_i_j.js  per tessera: quote del terreno (gia' spianato sotto le strade), colori del
//                    suolo (PNG con un pixel di bordo), strade che la toccano (curve, larghezze,
//                    limiti e profilo di quota gia' calcolati), ferrovie, rotatorie
//   overview.js      terreno e colori a bassa risoluzione per l'orizzonte
//   net.js           rete carrabile semplificata per navigatore, mappa e ricerca vie
//   far/f_I_J.js     edifici semplificati per la vista da lontano, a blocchi di 4x4 km
//   meta.js          come prima, con l'indice dei blocchi e il livello dei laghi
// La preparazione delle strade usa lo stesso codice del gioco (src/roadprep.js).
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { RoadPrep } from '../src/roadprep.js';
import { CLS, F, NT } from '../src/roads.js';

const [STAGE, OUT] = process.argv.slice(2);
if (!STAGE || !OUT) { console.error('uso: node tools/bake.mjs <stadio> <data>'); process.exit(1); }
const t0 = Date.now();
const log = (...a) => console.log(((Date.now() - t0) / 1000).toFixed(1) + 's', ...a);

// ------------------------------------------------------------------ lettura e scrittura dei file .js
function readData(file) {
  const s = fs.readFileSync(file, 'utf8');
  const m = s.match(/^BDS_DATA\("([^"]*)","([^"]*)","([^"]*)"\)/);
  if (!m) throw new Error('formato inatteso: ' + file);
  const b = Buffer.from(m[3], 'base64');
  if (m[2] === 'png') return b;
  const z = zlib.gunzipSync(b);
  return m[2] === 'json' ? JSON.parse(z) : z;
}
function writeData(file, key, fmt, payload) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const b64 = fmt === 'png' ? payload.toString('base64') : zlib.gzipSync(payload, { level: 9 }).toString('base64');
  fs.writeFileSync(file, `BDS_DATA(${JSON.stringify(key)},${JSON.stringify(fmt)},"${b64}");\n`);
  return fs.statSync(file).size;
}
const json = (o) => Buffer.from(JSON.stringify(o));
// piu' parti in un solo file: [lunghezza u32][byte] ...
function multi(parts) {
  const bufs = [];
  for (const p of parts) {
    const u8 = new Uint8Array(p.buffer, p.byteOffset, p.byteLength), h = Buffer.alloc(4);
    h.writeUInt32LE(u8.length); bufs.push(h, u8);
  }
  return Buffer.concat(bufs);
}

// ------------------------------------------------------------------ PNG con tavolozza (8 bit)
const CRC = new Int32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c; });
const crc32 = (buf) => { let c = -1; for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 255] ^ (c >>> 8); return (c ^ -1) >>> 0; };
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function decodePNG(buf) {
  let o = 8, w, h, depth, ctype, pal = null;
  const idat = [];
  while (o < buf.length) {
    const len = buf.readUInt32BE(o), type = buf.toString('ascii', o + 4, o + 8), d = buf.subarray(o + 8, o + 8 + len);
    if (type === 'IHDR') { w = d.readUInt32BE(0); h = d.readUInt32BE(4); depth = d[8]; ctype = d[9]; if (d[12]) throw new Error('PNG interlacciato'); }
    else if (type === 'PLTE') pal = Buffer.from(d);
    else if (type === 'IDAT') idat.push(d);
    o += 12 + len;
  }
  if (ctype !== 3 || depth !== 8) throw new Error(`PNG non supportato (tipo ${ctype}, ${depth} bit)`);
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const px = new Uint8Array(w * h);
  let prev = new Uint8Array(w), cur = new Uint8Array(w);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (w + 1)], row = raw.subarray(y * (w + 1) + 1, (y + 1) * (w + 1));
    for (let x = 0; x < w; x++) {
      const a = x ? cur[x - 1] : 0, b = prev[x], c = x ? prev[x - 1] : 0;
      let v = row[x];
      if (f === 1) v += a; else if (f === 2) v += b; else if (f === 3) v += (a + b) >> 1;
      else if (f === 4) { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      cur[x] = v & 255;
    }
    px.set(cur, y * w);
    [prev, cur] = [cur, prev];
  }
  return { w, h, px, pal };
}
function encodePNG(w, h, px, pal) {
  const raw = Buffer.alloc((w + 1) * h);
  for (let y = 0; y < h; y++) { raw[y * (w + 1)] = 0; raw.set(px.subarray(y * w, (y + 1) * w), y * (w + 1) + 1); }
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 3;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('PLTE', pal), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

// ------------------------------------------------------------------ ingressi
const meta = readData(path.join(STAGE, 'meta.js'));
const roads = readData(path.join(STAGE, 'roads.js'));
const hraw = readData(path.join(STAGE, 'height.js'));
const lcPng = decodePNG(readData(path.join(STAGE, 'landcover.js')));
const farIn = fs.existsSync(path.join(STAGE, 'far.js')) ? readData(path.join(STAGE, 'far.js')) : null;
const P = meta.proj, TILE = meta.tile, HM = meta.height, LC = meta.landcover;
log('ingressi letti: griglia', HM.nx, 'x', HM.nz, 'colori', lcPng.w, 'x', lcPng.h, 'vie', roads.ways.length);

// terreno completo (stesse formule di src/terrain.js)
const u16 = new Uint16Array(hraw.buffer, hraw.byteOffset, hraw.byteLength / 2);
const T = {
  nx: HM.nx, nz: HM.nz, step: HM.step, x0: HM.x0, z0: HM.z0, h0: Uint16Array.from(u16), hScale: HM.scale, proj: P,
  h: Float32Array.from(u16, (v) => v * HM.scale),
  tri(h, x, z, k) {
    let gx = (x - this.x0) / this.step, gz = (z - this.z0) / this.step;
    let ix = Math.floor(gx), iz = Math.floor(gz);
    if (ix < 0) ix = 0; else if (ix > this.nx - 2) ix = this.nx - 2;
    if (iz < 0) iz = 0; else if (iz > this.nz - 2) iz = this.nz - 2;
    let fx = gx - ix, fz = gz - iz;
    fx = fx < 0 ? 0 : fx > 1 ? 1 : fx; fz = fz < 0 ? 0 : fz > 1 ? 1 : fz;
    const i = iz * this.nx + ix;
    if (fx + fz <= 1) return (h[i] + (h[i + 1] - h[i]) * fx + (h[i + this.nx] - h[i]) * fz) * k;
    const h11 = h[i + this.nx + 1];
    return (h11 + (h[i + this.nx] - h11) * (1 - fx) + (h[i + 1] - h11) * (1 - fz)) * k;
  },
  height(x, z) { return this.tri(this.h, x, z, 1); },
  heightOrig(x, z) { return this.tri(this.h0, x, z, this.hScale); },
  landIdx(x, z) {
    const px = Math.floor((x - P.xmin) / LC.mpp), py = Math.floor((z - P.zmin) / LC.mpp);
    if (px < 0 || py < 0 || px >= lcPng.w || py >= lcPng.h) return -1;
    return lcPng.px[py * lcPng.w + px];
  },
};
// classe di ogni voce della tavolozza (colore piu' vicino tra quelli noti)
const palClass = [];
{
  const known = Object.entries(LC.palette).concat([['default', LC.default]]);
  for (let i = 0; i < lcPng.pal.length / 3; i++) {
    const r = lcPng.pal[i * 3], g = lcPng.pal[i * 3 + 1], b = lcPng.pal[i * 3 + 2];
    let best = 1e9, k = 'default';
    for (const [name, c] of known) { const e = (c[0] - r) ** 2 + (c[1] - g) ** 2 + (c[2] - b) ** 2; if (e < best) { best = e; k = name; } }
    palClass.push(k);
  }
}
const URBAN = new Set(['residential', 'commercial', 'retail', 'industrial', 'parking', 'construction']);
T.isUrban = (x, z) => { const i = T.landIdx(x, z); return i >= 0 && URBAN.has(palClass[i]); };
T.landClass = (x, z) => { const i = T.landIdx(x, z); return i >= 0 ? palClass[i] : 'default'; };

// ------------------------------------------------------------------ strade: preparazione completa
const R = new RoadPrep(roads, T, meta);
log('rete preparata: nodi', R.nodeCount, 'vie', R.ways.length, 'rotatorie', R.roundabouts.length);
let nCarved = 0;
for (const w of R.ways) if (!w.abs) { R.ensureProfile(w); R.carveWay(w); nCarved++; }
log('profili e spianamento:', nCarved, 'vie, angoli abbassati', R.loweredCorners);

const TX = meta.tilesX, TZ = meta.tilesZ;

// ------------------------------------------------------------------ acqua: quote e terreno scavato
// Laghi: un livello solo (come prima). Fiumi e canali disegnati come area: il livello scende con le
// rive (per ogni vertice la quota piu' bassa delle rive entro 45 m). Sotto l'acqua il terreno si
// scava, cosi' la riva coincide con il bordo dell'acqua. Corsi d'acqua disegnati come linee: nastro
// d'acqua con un profilo che non risale mai verso valle; i piu' larghi (da 4 m) hanno il letto scavato.
const WMASK = new Uint8Array(HM.nx * HM.nz);     // celle sotto uno specchio d'acqua
const wlines = meta.wlines || [];
delete meta.wlines;                               // servono solo qui: il gioco riceve i nastri per tessera
{
  const cellsOf = (x, z) => [Math.round((x - HM.x0) / HM.step), Math.round((z - HM.z0) / HM.step)];
  let nCarved = 0;
  for (const wt of meta.waters) {
    const holes = (wt.i || []).filter((h) => h.length >= 4);
    // livello dei laghi (come prima: 30% delle quote del bordo, piu' 35 cm)
    wt.lv = wt.o.map((ring) => {
      if (ring.length < 4) return null;
      const hs = ring.concat(...holes).map((p) => T.height(p[0], p[1])).sort((a, b) => a - b);
      return Math.round((hs[Math.floor(hs.length * 0.3)] + 0.35) * 100) / 100;
    });
    const rings = wt.o.filter((r) => r.length >= 4).concat(holes);
    if (!rings.length) continue;
    // fiumi: livello per vertice dalle rive vicine (griglia di ricerca da 45 m)
    let levelAt;
    if (wt.k === 'r') {
      const R = 45, pts = [];
      for (const r of rings) for (const p of r) pts.push([p[0], p[1], T.height(p[0], p[1])]);
      const grid = new Map(), key = (x, z) => Math.floor(x / R) * 100003 + Math.floor(z / R);
      for (const q of pts) { const k = key(q[0], q[1]); if (!grid.has(k)) grid.set(k, []); grid.get(k).push(q); }
      levelAt = (x, z) => {
        let m = Infinity;
        const gx = Math.floor(x / R), gz = Math.floor(z / R);
        for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (const q of grid.get((gx + a) * 100003 + gz + b) || []) {
          if ((q[0] - x) ** 2 + (q[1] - z) ** 2 <= R * R && q[2] < m) m = q[2];
        }
        if (m === Infinity) { for (const q of pts) if (q[2] < m) m = q[2]; }
        return m - 0.25;
      };
      const enc = (r) => r.map((p) => Math.round(levelAt(p[0], p[1]) * 100));
      wt.lvo = wt.o.map(enc); wt.lvi = (wt.i || []).map(enc);
    } else {
      const lv = Math.min(...wt.lv.filter((v) => v != null));
      levelAt = () => lv;
    }
    // scavo: riempimento a righe (pari/dispari su tutti gli anelli) della griglia da 10 m
    let zmin = Infinity, zmax = -Infinity;
    for (const r of rings) for (const p of r) { zmin = Math.min(zmin, p[1]); zmax = Math.max(zmax, p[1]); }
    const j0 = Math.max(0, Math.ceil((zmin - HM.z0) / HM.step)), j1 = Math.min(HM.nz - 1, Math.floor((zmax - HM.z0) / HM.step));
    const depth = wt.k === 'r' ? 1.0 : 1.5;
    for (let j = j0; j <= j1; j++) {
      const z = HM.z0 + j * HM.step, xs = [];
      for (const r of rings) for (let k = 0, n = r.length; k < n; k++) {
        const a = r[k], b = r[(k + 1) % n];
        if ((a[1] > z) !== (b[1] > z)) xs.push(a[0] + (b[0] - a[0]) * (z - a[1]) / (b[1] - a[1]));
      }
      xs.sort((p, q) => p - q);
      for (let k = 0; k + 1 < xs.length; k += 2) {
        const i0 = Math.max(0, Math.ceil((xs[k] - HM.x0) / HM.step)), i1 = Math.min(HM.nx - 1, Math.floor((xs[k + 1] - HM.x0) / HM.step));
        for (let i = i0; i <= i1; i++) {
          const o = j * HM.nx + i, lim = levelAt(HM.x0 + i * HM.step, z) - depth;
          WMASK[o] = 1;
          if (T.h[o] > lim) { T.h[o] = lim; nCarved++; }
        }
      }
    }
  }
  log('specchi d\'acqua:', meta.waters.length, '(fiumi come area', meta.waters.filter((w) => w.k === 'r').length + '), celle scavate', nCarved);
  void cellsOf;
}
// corsi d'acqua come linee -> nastri per tessera: [larghezza dm, punti, x, z, quota (cm, differenze)]
const tileRib = new Map();
{
  const cmw = (v) => Math.round(v * 100);
  let nRib = 0, nPts = 0, nCut = 0;
  const inWater = (x, z) => {
    const i = Math.round((x - HM.x0) / HM.step), j = Math.round((z - HM.z0) / HM.step);
    return i >= 0 && j >= 0 && i < HM.nx && j < HM.nz && WMASK[j * HM.nx + i] === 1;
  };
  for (const [kind, width, p0] of wlines) {
    if (p0.length < 2) continue;
    // punti: quelli della linea, piu' uno ogni 8 m sui tratti lunghi (per seguire il terreno)
    const pts = [];
    for (let k = 0; k < p0.length; k++) {
      if (k) {
        const [ax, az] = p0[k - 1], [bx, bz] = p0[k], L = Math.hypot(bx - ax, bz - az), n = Math.floor(L / 8);
        for (let s = 1; s < n; s++) pts.push([ax + (bx - ax) * s / n, az + (bz - az) * s / n]);
      }
      pts.push(p0[k]);
    }
    let hs = pts.map((p) => T.height(p[0], p[1]));
    // verso della corrente: dalla quota piu' alta (OSM la segue quasi sempre, ma non sempre)
    const rev = hs[0] < hs[hs.length - 1];
    if (rev) { pts.reverse(); hs.reverse(); }
    const lev = new Float64Array(hs.length);
    for (let k = 0, m = Infinity; k < hs.length; k++) { m = Math.min(m, hs[k]); lev[k] = m; }   // mai in salita
    const big = width >= 4, drop = big ? 0.45 : 0.15;
    // letto scavato per fiumi e canali larghi
    if (big) {
      const r = width / 2 + 2, bottom = width >= 8 ? 1.2 : 0.8;
      for (let k = 0; k < pts.length; k++) {
        const [x, z] = pts[k];
        const i0 = Math.max(0, Math.floor((x - r - HM.x0) / HM.step)), i1 = Math.min(HM.nx - 1, Math.ceil((x + r - HM.x0) / HM.step));
        const j0 = Math.max(0, Math.floor((z - r - HM.z0) / HM.step)), j1 = Math.min(HM.nz - 1, Math.ceil((z + r - HM.z0) / HM.step));
        for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
          const cx = HM.x0 + i * HM.step, cz = HM.z0 + j * HM.step;
          if ((cx - x) ** 2 + (cz - z) ** 2 > r * r) continue;
          const o = j * HM.nx + i, lim = lev[k] - drop - bottom;
          if (T.h[o] > lim) { T.h[o] = lim; nCut++; }
        }
      }
    }
    // quota del nastro: livello per i fiumi scavati, appoggiato sul terreno per i ruscelli
    const wh = pts.map((p, k) => big ? lev[k] - drop : T.height(p[0], p[1]) + 0.12);
    // pezzi fuori dagli specchi d'acqua, divisi per tessera
    let run = [];
    const flush = () => {
      if (run.length >= 2) {
        const m = run[run.length >> 1], ti = Math.floor((m[0] - P.xmin) / TILE), tj = Math.floor((m[1] - P.zmin) / TILE);
        if (ti >= 0 && tj >= 0 && ti < meta.tilesX && tj < meta.tilesZ) {
          const k = tj * 1000 + ti, ox = P.xmin + ti * TILE, oz = P.zmin + tj * TILE;
          const rec = [Math.round(width * 10), run.length];
          let px = 0, pz = 0, ph = 0;
          for (const [x, z, h] of run) { const qx = cmw(x - ox), qz = cmw(z - oz), qh = cmw(h); rec.push(qx - px, qz - pz, qh - ph); px = qx; pz = qz; ph = qh; }
          if (!tileRib.has(k)) tileRib.set(k, []);
          tileRib.get(k).push(...rec);
          nRib++; nPts += run.length;
        }
      }
      run = [];
    };
    let tkPrev = null;
    for (let k = 0; k < pts.length; k++) {
      const [x, z] = pts[k];
      if (inWater(x, z)) { flush(); tkPrev = null; continue; }
      const tk = Math.floor((x - P.xmin) / TILE) + ',' + Math.floor((z - P.zmin) / TILE);
      const cur = [x, z, wh[k]];
      if (tkPrev !== null && tk !== tkPrev && run.length) { const prev = run[run.length - 1]; run.push(cur); flush(); run = [prev, cur]; }
      else run.push(cur);
      tkPrev = tk;
    }
    flush();
  }
  log('corsi d\'acqua:', wlines.length, 'linee, nastri', nRib, 'punti', nPts, 'celle del letto scavate', nCut);
}

const tkey = (i, j) => j * 1000 + i;
const tileOf = (x, z) => [Math.floor((x - P.xmin) / TILE), Math.floor((z - P.zmin) / TILE)];

// vie e ferrovie che toccano ogni tessera
const tileWays = new Map(), tileRails = new Map();
const addTo = (map, k, v) => { let s = map.get(k); if (!s) map.set(k, s = new Set()); s.add(v); };
R.ways.forEach((w, wi) => {
  for (let k = 0; k < w.nodes.length - 1; k++) {
    const a = w.nodes[k], b = w.nodes[k + 1];
    const [i0, j0] = tileOf(Math.min(R.nx[a], R.nx[b]), Math.min(R.nz[a], R.nz[b]));
    const [i1, j1] = tileOf(Math.max(R.nx[a], R.nx[b]), Math.max(R.nz[a], R.nz[b]));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) addTo(tileWays, tkey(i, j), wi);
  }
});
R.rails.forEach((r, ri) => {
  for (let k = 0; k < r.p.length - 1; k++) {
    const [i0, j0] = tileOf(Math.min(r.p[k][0], r.p[k + 1][0]), Math.min(r.p[k][1], r.p[k + 1][1]));
    const [i1, j1] = tileOf(Math.max(r.p[k][0], r.p[k + 1][0]), Math.max(r.p[k][1], r.p[k + 1][1]));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) addTo(tileRails, tkey(i, j), ri);
  }
});
const tileRb = new Map();
for (const rb of R.roundabouts) { const [i, j] = tileOf(rb.x, rb.z); const k = tkey(i, j); if (!tileRb.has(k)) tileRb.set(k, []); tileRb.get(k).push(rb); }

const cm = (v) => Math.round(v * 100);
function tileRoads(i, j) {
  const k = tkey(i, j), ox = P.xmin + i * TILE, oz = P.zmin + j * TILE;
  const strs = [''], sidx = new Map([['', 0]]);
  const S = (s) => { s = s || ''; let v = sidx.get(s); if (v === undefined) { v = strs.length; strs.push(s); sidx.set(s, v); } return v; };
  const wl = [...(tileWays.get(k) || [])].sort((a, b) => a - b);
  const nodes = new Set();
  for (const wi of wl) for (const n of R.ways[wi].nodes) nodes.add(n);
  const nl = [...nodes].sort((a, b) => a - b), li = new Map(nl.map((n, x) => [n, x]));
  const r = { s: strs, ni: [], nx: [], nz: [], dh: [], nt: [], mj: [], wh: 29, w: [], wn: [], wp: [], rl: [], rb: [] };
  let prev = 0, px = 0, pz = 0;
  nl.forEach((n, x) => {
    r.ni.push(n - prev); prev = n;
    const qx = cm(R.nx[n] - ox), qz = cm(R.nz[n] - oz);
    r.nx.push(qx - px); r.nz.push(qz - pz); px = qx; pz = qz;
    if (R.dh[n]) r.dh.push(x, cm(R.dh[n]));
    if (R.ntag[n]) r.nt.push(x, R.ntag[n], R.ndir[n]);
    const jn = R.junctionNames.get(n);
    if (jn) r.mj.push(x, S(jn.name), S(jn.ref));
  });
  for (const wi of wl) {
    const w = R.ways[wi];
    const prof = w.abs ? [] : Array.from(w.prof, cm);
    for (let q = prof.length - 1; q > 0; q--) prof[q] -= prof[q - 1];
    r.w.push(wi, S(w.name), S(w.ref), w.cls, w.flags, w.lanes, w.speed, w.layer, Math.round(w.widthTag * 10), w.surf, w.sw, w.lit, w.lf, w.lb,
      S(w.turnF), S(w.turnB), S(w.dest), w.limit, w.limitMapped ? 1 : 0,
      cm(w.width), cm(w.lw), cm(w.nF), cm(w.nB), cm(w.sh), cm(w.cOff), w.abs ? cm(w.h0) : 0, w.abs ? cm(w.h1) : 0, w.nodes.length, prof.length);
    let pl = 0;
    for (const n of w.nodes) { const v = li.get(n); r.wn.push(v - pl); pl = v; }
    for (const v of prof) r.wp.push(v);
  }
  for (const ri of [...(tileRails.get(k) || [])].sort((a, b) => a - b)) {
    const rr = R.rails[ri], p = [];
    for (const q of rr.p) p.push(cm(q[0] - ox), cm(q[1] - oz));
    r.rl.push({ id: ri, p, b: rr.bridge ? 1 : 0, t: rr.tunnel ? 1 : 0, n: S(rr.name), h0: cm(rr.h0), h1: cm(rr.h1) });
  }
  for (const rb of tileRb.get(k) || []) {
    const q = [cm(rb.x - ox), cm(rb.z - oz), cm(rb.r), cm(rb.dh)];
    for (const p of rb.poly) q.push(cm(p[0] - ox), cm(p[1] - oz));
    r.rb.push(q);
  }
  return r;
}

// ------------------------------------------------------------------ tessere di terreno
const S = Math.round(TILE / HM.step), LN = Math.round(TILE / LC.mpp);
if (S * HM.step !== TILE || LN * LC.mpp !== TILE) throw new Error('la tessera deve contenere un numero intero di celle');
fs.rmSync(path.join(OUT, 'ground'), { recursive: true, force: true });
let gBytes = 0, nRoadTiles = 0;
for (let j = 0; j < TZ; j++) for (let i = 0; i < TX; i++) {
  // quote: (S+1)x(S+1) campioni, il bordo e' in comune con le tessere vicine. Centimetri sopra la
  // quota minima della tessera, arrotondati per difetto (il terreno non risale mai sopra le strade)
  const n = S + 1, hv = new Float32Array(n * n);
  let mn = 1e9, mx = -1e9;
  for (let b = 0; b < n; b++) for (let a = 0; a < n; a++) {
    const gx = Math.min(HM.nx - 1, i * S + a), gz = Math.min(HM.nz - 1, j * S + b);
    const v = T.h[gz * HM.nx + gx];
    hv[b * n + a] = v; if (v < mn) mn = v; if (v > mx) mx = v;
  }
  const base = Math.floor(mn * 100), sc = Math.max(1, Math.ceil((mx * 100 - base) / 65535));
  const q = new Uint16Array(n * n);
  for (let o = 0; o < n * n; o++) q[o] = Math.max(0, Math.min(65535, Math.floor((hv[o] * 100 - base) / sc)));
  // colori: (LN+2)^2 pixel, uno di bordo per lato preso dalle tessere vicine (niente cuciture)
  const lw = LN + 2, lp = new Uint8Array(lw * lw);
  for (let b = 0; b < lw; b++) for (let a = 0; a < lw; a++) {
    const px = Math.max(0, Math.min(lcPng.w - 1, i * LN - 1 + a)), py = Math.max(0, Math.min(lcPng.h - 1, j * LN - 1 + b));
    lp[b * lw + a] = lcPng.px[py * lcPng.w + px];
  }
  const rd = tileRoads(i, j);
  if (rd.w.length) nRoadTiles++;
  const head = { hb: base, hs: sc, hn: n, lw, wr: tileRib.get(tkey(i, j)) || [] };
  gBytes += writeData(path.join(OUT, 'ground', `g_${i}_${j}.js`), `g_${i}_${j}`, 'multi', multi([json({ ...head, r: rd }), q, encodePNG(lw, lw, lp, lcPng.pal)]));
}
log('tessere di terreno', TX * TZ, '(con strade', nRoadTiles + ')', (gBytes / 1e6).toFixed(1), 'MB');

// ------------------------------------------------------------------ panoramica a bassa risoluzione
// quote: minimo dei campioni attorno (l'orizzonte resta sempre sotto il terreno vicino)
const OK = 4, OST = HM.step * OK;
const onx = Math.ceil((HM.nx - 1) / OK) + 1, onz = Math.ceil((HM.nz - 1) / OK) + 1;
const oh = new Uint16Array(onx * onz);
for (let b = 0; b < onz; b++) for (let a = 0; a < onx; a++) {
  let m = 1e9;
  for (let dz = -2; dz <= 2; dz++) for (let dx = -2; dx <= 2; dx++) {
    const gx = Math.max(0, Math.min(HM.nx - 1, a * OK + dx)), gz = Math.max(0, Math.min(HM.nz - 1, b * OK + dz));
    m = Math.min(m, T.h[gz * HM.nx + gx]);
  }
  oh[b * onx + a] = Math.max(0, Math.floor(m * 10));
}
let f = 1;
while (Math.max(lcPng.w, lcPng.h) / f > 2048) f *= 2;
const ow = Math.ceil(lcPng.w / f), ohh = Math.ceil(lcPng.h / f), op = new Uint8Array(ow * ohh);
const holeI = palClass.indexOf('tunnel'), defI = palClass.indexOf('default');
for (let b = 0; b < ohh; b++) for (let a = 0; a < ow; a++) {
  let v = lcPng.px[Math.min(lcPng.h - 1, b * f + (f >> 1)) * lcPng.w + Math.min(lcPng.w - 1, a * f + (f >> 1))];
  if (v === holeI) v = defI >= 0 ? defI : 0;
  op[b * ow + a] = v;
}
const ovHead = { hx0: HM.x0, hz0: HM.z0, hstep: OST, hnx: onx, hnz: onz, hscale: 0.1, lmpp: LC.mpp * f, lw: ow, lh: ohh };
log('panoramica', onx, 'x', onz, 'colori', ow, 'x', ohh, writeData(path.join(OUT, 'overview.js'), 'overview', 'multi', multi([json(ovHead), oh, encodePNG(ow, ohh, op, lcPng.pal)])));

// ------------------------------------------------------------------ rete del navigatore
function dpKeep(pts, keep, tol) {
  // Douglas-Peucker sui tratti tra due nodi da tenere
  const stack = [];
  let a = 0;
  for (let b = 1; b < pts.length; b++) if (keep[b]) { if (b - a > 1) stack.push([a, b]); a = b; }
  while (stack.length) {
    const [s, e] = stack.pop();
    const [ax, az] = pts[s], [bx, bz] = pts[e], dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz) || 1e-9;
    let best = -1, bd = tol;
    for (let k = s + 1; k < e; k++) { const d = Math.abs((pts[k][0] - ax) * dz - (pts[k][1] - az) * dx) / L; if (d > bd) { bd = d; best = k; } }
    if (best > 0) { keep[best] = true; stack.push([s, best], [best, e]); }
  }
}
{
  const navW = R.ways.map((w, wi) => wi).filter((wi) => R.ways[wi].drivable && R.ways[wi].cls !== CLS.PEDESTRIAN);
  const uses = new Map();
  for (const wi of navW) for (const n of R.ways[wi].nodes) uses.set(n, (uses.get(n) || 0) + 1);
  const strs = [''], sidx = new Map([['', 0]]);
  const Sx = (s) => { s = s || ''; let v = sidx.get(s); if (v === undefined) { v = strs.length; strs.push(s); sidx.set(s, v); } return v; };
  const id = new Map(), nodes = [], gate = [];
  const nid = (n) => { let v = id.get(n); if (v === undefined) { v = nodes.length; id.set(n, v); nodes.push(n); if (R.ntag[n] === NT.GATE) gate.push(v); } return v; };
  const w = [], wn = [];
  for (const wi of navW) {
    const W = R.ways[wi], nn = W.nodes.length;
    const pts = Array.from(W.nodes, (n) => [R.nx[n], R.nz[n]]);
    const keep = Array.from(W.nodes, (n, k) => k === 0 || k === nn - 1 || uses.get(n) > 1 || R.ntag[n] === NT.GATE || R.ntag[n] === NT.SIGNALS);
    dpKeep(pts, keep, 2);
    const kept = [];
    for (let k = 0; k < nn; k++) if (keep[k]) kept.push(nid(W.nodes[k]));
    w.push(Sx(W.name), Sx(W.ref), W.cls, W.flags, W.limit, cm(W.width), cm(W.lw), cm(W.nF), cm(W.nB), cm(W.sh), cm(W.cOff), kept.length);
    for (const v of kept) wn.push(v);
  }
  const nq = [];
  let px = 0, pz = 0;
  for (const n of nodes) { const x = Math.round(R.nx[n] * 10), z = Math.round(R.nz[n] * 10); nq.push(x - px, z - pz); px = x; pz = z; }
  const rl = R.rails.map((r) => {
    const keep = r.p.map((_, k) => k === 0 || k === r.p.length - 1);
    dpKeep(r.p, keep, 10);
    const out = []; let x0 = 0, z0 = 0;
    r.p.forEach((q, k) => { if (!keep[k]) return; const x = Math.round(q[0] * 10), z = Math.round(q[1] * 10); out.push(x - x0, z - z0); x0 = x; z0 = z; });
    return out;
  });
  const sz = writeData(path.join(OUT, 'net.js'), 'net', 'json', json({ s: strs, n: nq, gate, w, wn, rl }));
  log('rete del navigatore: vie', navW.length, 'nodi', nodes.length, '(su', R.nodeCount + ')', sz, 'byte');
}

// ------------------------------------------------------------------ edifici lontani a blocchi
const FB = 4, farBlocks = [];
fs.rmSync(path.join(OUT, 'far'), { recursive: true, force: true });
if (farIn) {
  const blocks = new Map();
  let o = 0;
  for (const [i, j, n] of farIn.t) {
    const x0 = P.xmin + i * TILE, z0 = P.zmin + j * TILE, k = Math.floor(j / FB) * 1000 + Math.floor(i / FB);
    if (!blocks.has(k)) blocks.set(k, { t: [], d: [] });
    const B = blocks.get(k);
    B.t.push([i, j, n]);
    for (let b = 0; b < n; b++, o += 7) {
      const q = farIn.d.slice(o, o + 7);
      q.push(Math.round(T.height(x0 + q[0] / 10, z0 + q[1] / 10) * 10));   // quota del suolo (dm)
      B.d.push(...q);
    }
  }
  let bytes = 0;
  for (const [k, B] of blocks) {
    const I = k % 1000, J = Math.floor(k / 1000);
    farBlocks.push([I, J]);
    bytes += writeData(path.join(OUT, 'far', `f_${I}_${J}.js`), `f_${I}_${J}`, 'json', json(B));
  }
  log('edifici lontani: blocchi', blocks.size, (bytes / 1e6).toFixed(1), 'MB');
}

// ------------------------------------------------------------------ meta (livelli dell'acqua calcolati sopra)
meta.stream = { v: 1, ground: TX * TZ, farBlock: FB, far: farBlocks };
log('meta.js', writeData(path.join(OUT, 'meta.js'), 'meta', 'json', json(meta)));
for (const f of ['roads.js', 'height.js', 'landcover.js', 'far.js']) fs.rmSync(path.join(OUT, f), { force: true });   // vecchio formato
log('fatto');
