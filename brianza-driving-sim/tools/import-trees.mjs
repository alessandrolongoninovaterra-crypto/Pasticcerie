// Alberi vicini (src/vegetation.js): modelli "Ultimate Nature Pack" di Quaternius (quaternius.com,
// licenza CC0), in OBJ dalla copia pubblica in github.com/ladybug-tools/3d-models. Per ogni modello:
// vertici con normali e colore del materiale (chioma o tronco), base del tronco in (0,0,0); le
// normali della chioma sono ammorbidite (meta' faccia, meta' dal centro della chioma), cosi' gli
// alberi non sembrano sfaccettati come nei giochi "low poly".
// Uscita: data/veg/trees.js (BDS_DATA 'bin': intestazione JSON + Float32 posizioni/normali/colori).
// Uso: node tools/import-trees.mjs
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const OUT = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'data', 'veg');
fs.mkdirSync(OUT, { recursive: true });
const SRC = 'https://raw.githubusercontent.com/ladybug-tools/3d-models/master/quaternius/ultimate-nature-pack/';
// gruppo: latifoglie comuni, autunnali, betulle (filari, pioppi), conifere
const MODELS = {
  broad: ['CommonTree_1', 'CommonTree_2', 'CommonTree_3', 'CommonTree_4', 'CommonTree_5'],
  autumn: ['CommonTree_Autumn_1', 'CommonTree_Autumn_3'],
  tall: ['BirchTree_1', 'BirchTree_2', 'BirchTree_3'],
  conifer: ['PineTree_1', 'PineTree_2', 'PineTree_3'],
};
const LEAF = /green|leaf|leaves|pine|orange|yellow|red/i;

function parseMtl(txt) {
  const m = {}; let cur = null;
  for (const l of txt.split('\n')) {
    const p = l.trim().split(/\s+/);
    if (p[0] === 'newmtl') cur = m[p[1]] = { kd: [0.5, 0.5, 0.5] };
    else if (p[0] === 'Kd' && cur) cur.kd = p.slice(1, 4).map(Number);
  }
  return m;
}

function parseObj(txt, mtl) {
  const V = [], N = [], pos = [], nor = [], col = [], leaf = [];
  let kd = [0.5, 0.5, 0.5], isLeaf = false;
  for (const l of txt.split('\n')) {
    const p = l.trim().split(/\s+/);
    if (p[0] === 'v') V.push(p.slice(1, 4).map(Number));
    else if (p[0] === 'vn') N.push(p.slice(1, 4).map(Number));
    else if (p[0] === 'usemtl') { kd = (mtl[p[1]] || { kd }).kd; isLeaf = LEAF.test(p[1]) && !/wood|bark|trunk/i.test(p[1]); }
    else if (p[0] === 'f') {
      const f = p.slice(1).map((s) => s.split('/').map((x) => (x ? parseInt(x, 10) : 0)));
      for (let k = 1; k < f.length - 1; k++) for (const q of [f[0], f[k], f[k + 1]]) {
        const v = V[q[0] - 1], n = q[2] ? N[q[2] - 1] : [0, 1, 0];
        pos.push(...v); nor.push(...n); col.push(...kd); leaf.push(isLeaf ? 1 : 0);
      }
    }
  }
  return { pos, nor, col, leaf };
}

const header = { models: [] }, bufs = [];
for (const [group, names] of Object.entries(MODELS)) {
  for (const name of names) {
    const obj = await (await fetch(SRC + name + '.obj')).text();
    const mtl = parseMtl(await (await fetch(SRC + name + '.mtl')).text());
    const g = parseObj(obj, mtl);
    const n = g.pos.length / 3;
    // base del tronco: minimo in y, centro dei vertici del tronco in xz
    let ymin = Infinity, ymax = -Infinity, tx = 0, tz = 0, tn = 0;
    for (let i = 0; i < n; i++) { ymin = Math.min(ymin, g.pos[i * 3 + 1]); ymax = Math.max(ymax, g.pos[i * 3 + 1]); }
    for (let i = 0; i < n; i++) if (!g.leaf[i] && g.pos[i * 3 + 1] < ymin + (ymax - ymin) * 0.15) { tx += g.pos[i * 3]; tz += g.pos[i * 3 + 2]; tn++; }
    tx /= tn || 1; tz /= tn || 1;
    // centro della chioma (per le normali morbide) e raggio
    let cx = 0, cy = 0, cz = 0, cn = 0, rad = 0;
    for (let i = 0; i < n; i++) if (g.leaf[i]) { cx += g.pos[i * 3]; cy += g.pos[i * 3 + 1]; cz += g.pos[i * 3 + 2]; cn++; }
    cx /= cn || 1; cy /= cn || 1; cz /= cn || 1;
    const P = new Float32Array(n * 3), Nn = new Float32Array(n * 3), C = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const x = g.pos[i * 3], y = g.pos[i * 3 + 1], z = g.pos[i * 3 + 2];
      P[i * 3] = x - tx; P[i * 3 + 1] = y - ymin; P[i * 3 + 2] = z - tz;
      rad = Math.max(rad, Math.hypot(x - tx, z - tz));
      let nx = g.nor[i * 3], ny = g.nor[i * 3 + 1], nz = g.nor[i * 3 + 2];
      if (g.leaf[i]) {
        let sx = x - cx, sy = (y - cy) * 1.2, sz = z - cz; const sl = Math.hypot(sx, sy, sz) || 1;
        sx /= sl; sy = sy / sl + 0.25; sz /= sl;
        nx = nx * 0.45 + sx * 0.55; ny = ny * 0.45 + sy * 0.55; nz = nz * 0.45 + sz * 0.55;
      }
      const l = Math.hypot(nx, ny, nz) || 1; Nn[i * 3] = nx / l; Nn[i * 3 + 1] = ny / l; Nn[i * 3 + 2] = nz / l;
      // colori dei materiali (lineari) un po' schiariti: nel gioco li moltiplica la tinta per albero
      C[i * 3] = g.col[i * 3] * 1.6; C[i * 3 + 1] = g.col[i * 3 + 1] * 1.6; C[i * 3 + 2] = g.col[i * 3 + 2] * 1.6;
    }
    header.models.push({ name, group, n, h: +(ymax - ymin).toFixed(3), r: +rad.toFixed(3) });
    bufs.push(P, Nn, C);
    console.log(group, name, n / 3, 'triangoli, altezza', (ymax - ymin).toFixed(2), 'raggio', rad.toFixed(2));
  }
}
const hj = Buffer.from(JSON.stringify(header));
const parts = [hj, ...bufs.map((b) => Buffer.from(b.buffer))];
const chunks = [];
for (const p of parts) { const len = Buffer.alloc(4); len.writeUInt32LE(p.length); chunks.push(len, p); }
const gz = zlib.gzipSync(Buffer.concat(chunks), { level: 9 });
fs.writeFileSync(path.join(OUT, 'trees.js'), `BDS_DATA('veg_trees','multi','${gz.toString('base64')}');\n`);
fs.writeFileSync(path.join(OUT, 'LICENSE-Quaternius-Nature.txt'), 'Ultimate Nature Pack by Quaternius - https://quaternius.com/packs/ultimatenature.html\nLicense: CC0 1.0 Universal (Public Domain Dedication) - https://creativecommons.org/publicdomain/zero/1.0/\nObtained from the public copy in https://github.com/ladybug-tools/3d-models (quaternius/ultimate-nature-pack).\nModels: ' + Object.values(MODELS).flat().join(', ') + '\n');
console.log('trees.js', gz.length, 'byte');
