// Dettaglio fotografico delle facciate (src/buildings.js): scarica da Poly Haven (polyhaven.com,
// licenza CC0) le foto delle superfici, le porta in scala di grigi a 512 px e ne tiene solo le
// variazioni locali (divise per la media sfocata: media 128), cosi' nel gioco moltiplicano il colore
// dell'edificio senza cambiarlo. Uscita: data/tex/<nome>.js (PNG in un file BDS_DATA).
// Uso: node tools/facade-detail.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
const OUT = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'data', 'tex');
fs.mkdirSync(OUT, { recursive: true });
const SETS = { plaster: 'painted_plaster_wall', concrete: 'concrete_wall_008', stone: 'large_sandstone_blocks_01', weathered: 'grey_plaster_02' };
for (const [name, id] of Object.entries(SETS)) {
  const files = await (await fetch('https://api.polyhaven.com/files/' + id)).json();
  const jpg = Buffer.from(await (await fetch(files.Diffuse['1k'].jpg.url)).arrayBuffer());
  const g = sharp(jpg).greyscale().resize(512, 512);
  const { data: v } = await g.clone().raw().toBuffer({ resolveWithObject: true });
  const { data: m } = await g.clone().blur(28).raw().toBuffer({ resolveWithObject: true });
  let mean = 0; for (const x of v) mean += x; mean /= v.length;
  const out = Buffer.alloc(v.length);
  for (let i = 0; i < v.length; i++) { const loc = 0.6 * m[i] + 0.4 * mean; out[i] = Math.max(0, Math.min(255, Math.round(128 * v[i] / Math.max(8, loc)))); }
  const png = await sharp(out, { raw: { width: 512, height: 512, channels: 1 } }).png({ compressionLevel: 9 }).toBuffer();
  fs.writeFileSync(path.join(OUT, name + '.js'), `BDS_DATA('tex_${name}','png','${png.toString('base64')}');\n`);
  console.log(name, id, png.length, 'byte');
}
