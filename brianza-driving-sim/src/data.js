// Caricamento dei dati generati dalla pipeline (data/*.js).
// Ogni file chiama BDS_DATA(chiave, formato, base64): usiamo <script> invece di
// fetch() cosi' il gioco funziona anche aprendo index.html da disco (file://).
const pending = new Map();

window.BDS_DATA = (key, fmt, b64) => {
  const p = pending.get(key);
  if (p) { pending.delete(key); p.resolve({ fmt, b64 }); }
};

function b64ToBytes(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function gunzip(bytes) {
  const ds = new DecompressionStream('gzip');
  const stream = new Blob([bytes]).stream().pipeThrough(ds);
  return await new Response(stream).arrayBuffer();
}

function injectScript(key, src) {
  return new Promise((resolve, reject) => {
    pending.set(key, { resolve });
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onerror = () => { pending.delete(key); reject(new Error('Impossibile caricare ' + src)); };
    s.onload = () => { s.remove(); setTimeout(() => { if (pending.has(key)) { pending.delete(key); reject(new Error('Dati mancanti in ' + src)); } }, 0); };
    document.head.appendChild(s);
  });
}

export async function loadData(key, src) {
  const { fmt, b64 } = await injectScript(key, src);
  if (fmt === 'png') {
    const img = new Image();
    img.src = 'data:image/png;base64,' + b64;
    await img.decode();
    return img;
  }
  const buf = await gunzip(b64ToBytes(b64));
  if (fmt === 'bin') return buf;
  return JSON.parse(new TextDecoder().decode(buf));
}

// Proiezione locale (identica a tools/common.py)
export class Projection {
  constructor(p) { Object.assign(this, p); }
  toLatLon(x, z) { return [this.lat0 - z / this.kz, this.lon0 + x / this.kx]; }
  fromLatLon(lat, lon) { return [(lon - this.lon0) * this.kx, -(lat - this.lat0) * this.kz]; }
}
