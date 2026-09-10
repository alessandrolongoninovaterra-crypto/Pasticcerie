#!/usr/bin/env python3
"""
Genera un file HTML statico (mappa Leaflet con clustering) a partire da
data/pasticcerie_italia.geojson, da pubblicare come Artifact.

Il GeoJSON viene incorporato direttamente nella pagina come costante JS,
cosi' la mappa funziona anche offline una volta caricata.
"""
import json
from pathlib import Path

GEOJSON_PATH = Path("data/pasticcerie_italia.geojson")
OUTPUT_PATH = Path("scripts/out/mappa_pasticcerie.html")

TEMPLATE = """<title>Pasticcerie d'Italia</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap">
<style>
  :root {{
    --bg:#f1ede4; --surface:#ffffff; --surface-2:#faf8f3; --fg:#2c2620; --fg-dim:#6b6255;
    --border:#e2dbcb; --accent:#a8781f; --accent-fg:#ffffff; --shadow:0 8px 24px -12px rgba(44,38,32,.35);
    --sea:#dce8ea;
    --c1:#a8781f; --c2:#6b7c5c; --c3:#8a4a6b; --c4:#3f6b7a; --c5:#b2542f; --c6:#5a6b9c; --c7:#7a7248;
  }}
  @media (prefers-color-scheme: dark) {{
    :root:not([data-theme="light"]) {{
      --bg:#1a1611; --surface:#241f19; --surface-2:#1f1a15; --fg:#ecE6da; --fg-dim:#a89c88;
      --border:#3a3226; --accent:#d9a441; --accent-fg:#1a1611; --shadow:0 8px 24px -12px rgba(0,0,0,.6);
      --sea:#182428;
      --c1:#d9a441; --c2:#94ab7c; --c3:#c07aa3; --c4:#6fa8bb; --c5:#d97c4d; --c6:#8b9bd4; --c7:#a89c62;
    }}
  }}
  :root[data-theme="dark"] {{
    --bg:#1a1611; --surface:#241f19; --surface-2:#1f1a15; --fg:#ece6da; --fg-dim:#a89c88;
    --border:#3a3226; --accent:#d9a441; --accent-fg:#1a1611; --shadow:0 8px 24px -12px rgba(0,0,0,.6);
    --sea:#182428;
    --c1:#d9a441; --c2:#94ab7c; --c3:#c07aa3; --c4:#6fa8bb; --c5:#d97c4d; --c6:#8b9bd4; --c7:#a89c62;
  }}
  * {{ box-sizing:border-box; }}
  body {{ background:var(--bg); color:var(--fg); font-family:'IBM Plex Sans',-apple-system,Segoe UI,Roboto,sans-serif; }}
  #app {{ display:flex; flex-direction:column; height:100vh; }}
  header {{
    padding:14px 20px; border-bottom:1px solid var(--border); background:var(--surface);
    display:flex; gap:12px; align-items:center; flex-wrap:wrap;
  }}
  header h1 {{
    font-family:'Fraunces',Georgia,serif; font-size:19px; font-weight:600; margin:0 8px 0 0;
    letter-spacing:.2px; text-wrap:balance; color:var(--fg); white-space:nowrap;
  }}
  .controls {{ display:flex; gap:8px; flex-wrap:wrap; flex:1; }}
  select, input {{
    background:var(--surface-2); color:var(--fg); border:1px solid var(--border); border-radius:8px;
    padding:7px 10px; font-size:13px; font-family:inherit;
  }}
  select:focus, input:focus {{ outline:2px solid var(--accent); outline-offset:1px; }}
  input {{ min-width:180px; flex:1; max-width:280px; }}
  label.chk {{
    display:inline-flex; align-items:center; gap:5px; font-size:12.5px; color:var(--fg-dim);
    white-space:nowrap; user-select:none;
  }}
  label.chk input {{ min-width:0; width:auto; flex:none; accent-color:var(--accent); }}
  header .count {{
    font-size:12px; color:var(--fg-dim); font-variant-numeric:tabular-nums; white-space:nowrap; margin-left:auto;
  }}
  #map {{ flex:1; background:var(--sea); }}
  .leaflet-control-attribution {{ background:var(--surface); color:var(--fg-dim); }}
  .leaflet-control-attribution a {{ color:var(--accent); }}

  .leaflet-popup-content-wrapper {{ background:var(--surface); color:var(--fg); border-radius:10px; box-shadow:var(--shadow); }}
  .leaflet-popup-tip {{ background:var(--surface); }}
  .leaflet-popup-content {{ margin:12px 14px; font-family:'IBM Plex Sans',sans-serif; }}
  .popup-title {{ font-family:'Fraunces',Georgia,serif; font-weight:600; font-size:15px; margin-bottom:4px; }}
  .popup-cat {{
    display:inline-flex; align-items:center; gap:5px; font-size:10.5px; text-transform:uppercase;
    letter-spacing:.4px; color:var(--fg-dim); margin-bottom:7px;
  }}
  .popup-cat .dot {{ width:8px; height:8px; border-radius:50%; display:inline-block; }}
  .popup-content div {{ font-size:13px; line-height:1.5; }}
  .popup-content a {{ color:var(--accent); }}

  .dot-icon {{ border-radius:50%; border:2px solid var(--surface); box-shadow:0 1px 3px rgba(0,0,0,.4); }}
  .marker-cluster-custom {{
    background:var(--accent); color:var(--accent-fg); border-radius:50%; display:flex; align-items:center;
    justify-content:center; font-family:'IBM Plex Sans',sans-serif; font-weight:600; font-size:12px;
    box-shadow:0 2px 8px rgba(0,0,0,.3); border:2px solid var(--surface);
  }}
</style>

<div id="app">
  <header>
    <h1>Pasticcerie d'Italia</h1>
    <div class="controls">
      <select id="catFilter"><option value="">Tutte le categorie</option></select>
      <select id="provFilter"><option value="">Tutte le province</option></select>
      <input id="searchBox" list="searchSuggestions" placeholder="Cerca per comune o nome..." autocomplete="off" />
      <datalist id="searchSuggestions"></datalist>
      <label class="chk"><input type="checkbox" id="onlyPhone" /> con telefono</label>
      <label class="chk"><input type="checkbox" id="onlyWeb" /> con sito web</label>
    </div>
    <span class="count" id="count"></span>
  </header>
  <div id="map"></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.5.3/leaflet.markercluster.js"></script>
<style>__LEAFLET_CSS__</style>
<style>__MARKERCLUSTER_CSS__</style>
<script>
const DATA = __GEOJSON__;
const PALETTE = ['c1','c2','c3','c4','c5','c6','c7'];
const catColor = {{}};
function colorFor(cat) {{
  if (!(cat in catColor)) {{
    const idx = Object.keys(catColor).length % PALETTE.length;
    catColor[cat] = getComputedStyle(document.documentElement).getPropertyValue('--' + PALETTE[idx]).trim();
  }}
  return catColor[cat];
}}

// Mappa reale (strade, vie, edifici) con le tile di OpenStreetMap: richiede
// connessione internet nel browser in cui apri il file (non funziona dentro
// l'anteprima Artifact di Claude, che per sicurezza blocca il caricamento
// di immagini da server esterni — apri il file .html scaricato nel tuo
// browser per vedere le strade).
const map = L.map('map', {{ preferCanvas:true, minZoom:5, maxZoom:19 }}).setView([42.5, 12.5], 6);
L.tileLayer('https://{{s}}.tile.openstreetmap.org/{{z}}/{{x}}/{{y}}.png', {{
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
}}).addTo(map);

const clusterGroup = L.markerClusterGroup({{
  iconCreateFunction: cluster => L.divIcon({{
    html: `<div class="marker-cluster-custom" style="width:${{34 + Math.min(cluster.getChildCount(),200)/8}}px;height:${{34 + Math.min(cluster.getChildCount(),200)/8}}px">${{cluster.getChildCount()}}</div>`,
    className: '', iconSize: null
  }})
}});
const categories = new Set();
const province = new Set();
const suggestions = new Set();
const markers = [];

DATA.features.forEach(f => {{
  const p = f.properties;
  categories.add(p.categoria);
  if (p.provincia) province.add(p.provincia);
  if (p.nome) suggestions.add(p.nome);
  if (p.comune) suggestions.add(p.comune);
  const [lon, lat] = f.geometry.coordinates;
  const color = colorFor(p.categoria);
  const marker = L.marker([lat, lon], {{
    icon: L.divIcon({{
      className: '', iconSize: [12, 12],
      html: `<div class="dot-icon" style="width:12px;height:12px;background:${{color}}"></div>`
    }})
  }});
  const nome = p.nome || '(senza nome)';
  const indirizzo = [p.indirizzo, p.cap, p.comune, p.provincia].filter(Boolean).join(', ');
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${{lat}},${{lon}}`;
  marker.bindPopup(
    `<div class="popup-content"><div class="popup-cat"><span class="dot" style="background:${{color}}"></span>${{p.categoria}}</div>` +
    `<div class="popup-title">${{nome}}</div><div>${{indirizzo || 'Indirizzo non disponibile'}}</div>` +
    (p.telefono ? `<div>${{p.telefono}}</div>` : '') +
    (p.sito_web ? `<div><a href="${{p.sito_web}}" target="_blank" rel="noopener">sito web →</a></div>` : '') +
    `<div><a href="${{gmapsUrl}}" target="_blank" rel="noopener">📍 apri in Google Maps →</a></div>` +
    `</div>`
  );
  marker._meta = {{
    categoria: p.categoria,
    provincia: p.provincia || '',
    testo: (nome + ' ' + p.comune).toLowerCase(),
    haPhone: !!p.telefono,
    haWeb: !!p.sito_web
  }};
  markers.push(marker);
}});

const catSelect = document.getElementById('catFilter');
[...categories].sort().forEach(c => {{
  const opt = document.createElement('option');
  opt.value = c; opt.textContent = c;
  catSelect.appendChild(opt);
}});

const provSelect = document.getElementById('provFilter');
[...province].sort().forEach(p => {{
  const opt = document.createElement('option');
  opt.value = p; opt.textContent = p;
  provSelect.appendChild(opt);
}});

// Autocompletamento nativo (nomi attivita' + comuni) mentre si digita.
const suggestionList = document.getElementById('searchSuggestions');
const suggestionFrag = document.createDocumentFragment();
[...suggestions].sort((a, b) => a.localeCompare(b, 'it')).forEach(s => {{
  const opt = document.createElement('option');
  opt.value = s;
  suggestionFrag.appendChild(opt);
}});
suggestionList.appendChild(suggestionFrag);

const onlyPhone = document.getElementById('onlyPhone');
const onlyWeb = document.getElementById('onlyWeb');

function render() {{
  const cat = catSelect.value;
  const prov = provSelect.value;
  const q = document.getElementById('searchBox').value.trim().toLowerCase();
  const needPhone = onlyPhone.checked;
  const needWeb = onlyWeb.checked;
  clusterGroup.clearLayers();
  let shown = 0;
  markers.forEach(m => {{
    const meta = m._meta;
    const okCat = !cat || meta.categoria === cat;
    const okProv = !prov || meta.provincia === prov;
    const okQ = !q || meta.testo.includes(q);
    const okPhone = !needPhone || meta.haPhone;
    const okWeb = !needWeb || meta.haWeb;
    if (okCat && okProv && okQ && okPhone && okWeb) {{ clusterGroup.addLayer(m); shown++; }}
  }});
  document.getElementById('count').textContent = shown.toLocaleString('it-IT') + ' attivit\\u00e0 trovate';
}}

map.addLayer(clusterGroup);
[catSelect, provSelect, onlyPhone, onlyWeb].forEach(el => el.addEventListener('change', render));
document.getElementById('searchBox').addEventListener('input', render);
render();
</script>
"""


def main():
    geojson_text = GEOJSON_PATH.read_text(encoding="utf-8")
    # validazione minima
    json.loads(geojson_text)

    leaflet_css = Path("scripts/vendor/leaflet.css").read_text(encoding="utf-8")
    cluster_css = Path("scripts/vendor/MarkerCluster.css").read_text(
        encoding="utf-8"
    ) + Path("scripts/vendor/MarkerCluster.Default.css").read_text(encoding="utf-8")

    # Il template usa {{ }} raddoppiate per restare leggibile come CSS/JS
    # letterale; le riduciamo a singole PRIMA di iniettare i contenuti reali
    # (GeoJSON/CSS), che non devono essere toccati.
    html = (
        TEMPLATE.replace("{{", "{")
        .replace("}}", "}")
        .replace("__GEOJSON__", geojson_text)
        .replace("__LEAFLET_CSS__", leaflet_css)
        .replace("__MARKERCLUSTER_CSS__", cluster_css)
    )
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(html, encoding="utf-8")
    print(f"Scritto {OUTPUT_PATH} ({len(html)} bytes)")


if __name__ == "__main__":
    main()
