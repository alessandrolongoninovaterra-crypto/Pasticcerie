// Materiali fisici (PBR) di strade e marciapiedi (src/roads.js): scarica da Poly Haven (polyhaven.com,
// licenza CC0) colore, rilievo (normal map OpenGL) e rugosita' di tre superfici, li riduce e porta
// il colore alla luminosita' media dei materiali di prima (il tono per tipo di strada resta nei
// colori dei vertici). Uscita: data/tex/road_<nome>_{c,n,r}.js (JPEG in file BDS_DATA).
// Uso: node tools/road-pbr.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
const OUT = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'data', 'tex');
fs.mkdirSync(OUT, { recursive: true });
// nome: [asset Poly Haven, luminosita' media voluta del colore (0-255, sRGB), lato in pixel]
const SETS = {
  asphalt: ['asphalt_04', 138, 1024],          // asfalto grigio consumato
  stone: ['cobblestone_04', 150, 1024],        // cubetti di porfido / pave'
  walk: ['concrete_pavement_02', 178, 512],    // lastre di cemento dei marciapiedi
};
const save = (name, kind, buf) => fs.writeFileSync(path.join(OUT, `road_${name}_${kind}.js`), `BDS_DATA('tex_road_${name}_${kind}','jpg','${buf.toString('base64')}');\n`);
for (const [name, [id, target, size]] of Object.entries(SETS)) {
  const files = await (await fetch('https://api.polyhaven.com/files/' + id)).json();
  const get = async (k) => Buffer.from(await (await fetch(files[k]['1k'].jpg.url)).arrayBuffer());
  // colore: stessa media voluta (si moltiplica ai colori dei vertici), saturazione ridotta
  const col = sharp(await get('Diffuse')).resize(size, size).modulate({ saturation: 0.55 }).removeAlpha();
  const st = await col.clone().greyscale().stats();
  const k = target / st.channels[0].mean;
  const c = await col.clone().linear(k, 0).jpeg({ quality: 84 }).toBuffer();
  const n = await sharp(await get('nor_gl')).resize(size / 2, size / 2).removeAlpha().jpeg({ quality: 90 }).toBuffer();
  const r = await sharp(await get('Rough')).resize(size / 2, size / 2).greyscale().jpeg({ quality: 88 }).toBuffer();
  save(name, 'c', c); save(name, 'n', n); save(name, 'r', r);
  console.log(name, id, 'colore', c.length, 'rilievo', n.length, 'rugosita', r.length, 'byte (x' + k.toFixed(2) + ')');
}
