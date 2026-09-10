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

TEMPLATE = """<title>Panetterie e Pasticcerie d'Italia</title>
<style>
  :root {{ --bg:#faf7f2; --fg:#2b2320; --card:#ffffff; --border:#e4dccf; --accent:#b5651d; }}
  @media (prefers-color-scheme: dark) {{
    :root:not([data-theme="light"]) {{ --bg:#1c1815; --fg:#ece5db; --card:#26201b; --border:#3a322a; --accent:#e0975a; }}
  }}
  :root[data-theme="dark"] {{ --bg:#1c1815; --fg:#ece5db; --card:#26201b; --border:#3a322a; --accent:#e0975a; }}
  body {{ background:var(--bg); color:var(--fg); font-family:-apple-system,Segoe UI,Roboto,sans-serif; }}
  #app {{ display:flex; flex-direction:column; height:100vh; }}
  header {{ padding:10px 16px; border-bottom:1px solid var(--border); display:flex; gap:10px; align-items:center; flex-wrap:wrap; }}
  header h1 {{ font-size:15px; margin:0; font-weight:600; }}
  header .count {{ font-size:12px; opacity:.7; }}
  select, input {{ background:var(--card); color:var(--fg); border:1px solid var(--border); border-radius:6px; padding:6px 8px; font-size:13px; }}
  #map {{ flex:1; }}
  .leaflet-popup-content-wrapper {{ background:var(--card); color:var(--fg); }}
  .leaflet-popup-tip {{ background:var(--card); }}
  .popup-title {{ font-weight:600; margin-bottom:2px; }}
  .popup-cat {{ display:inline-block; font-size:11px; color:var(--accent); border:1px solid var(--accent); border-radius:10px; padding:1px 7px; margin-bottom:6px; }}
</style>

<div id="app">
  <header>
    <h1>Panetterie &amp; Pasticcerie d'Italia</h1>
    <select id="catFilter"><option value="">Tutte le categorie</option></select>
    <input id="searchBox" placeholder="Cerca per comune o nome..." />
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

const map = L.map('map').setView([42.5, 12.5], 6);
L.tileLayer('https://{{s}}.tile.openstreetmap.org/{{z}}/{{x}}/{{y}}.png', {{
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}}).addTo(map);

const clusterGroup = L.markerClusterGroup();
const categories = new Set();
const markers = [];

DATA.features.forEach(f => {{
  const p = f.properties;
  categories.add(p.categoria);
  const [lon, lat] = f.geometry.coordinates;
  const marker = L.marker([lat, lon]);
  const nome = p.nome || '(senza nome)';
  const indirizzo = [p.indirizzo, p.cap, p.comune, p.provincia].filter(Boolean).join(', ');
  marker.bindPopup(
    `<div class="popup-cat">${{p.categoria}}</div><div class="popup-title">${{nome}}</div><div>${{indirizzo || 'Indirizzo non disponibile'}}</div>` +
    (p.telefono ? `<div>${{p.telefono}}</div>` : '') +
    (p.sito_web ? `<div><a href="${{p.sito_web}}" target="_blank" rel="noopener">sito web</a></div>` : '')
  );
  marker._meta = {{ categoria: p.categoria, testo: (nome + ' ' + p.comune + ' ' + p.provincia).toLowerCase() }};
  markers.push(marker);
}});

const catSelect = document.getElementById('catFilter');
[...categories].sort().forEach(c => {{
  const opt = document.createElement('option');
  opt.value = c; opt.textContent = c;
  catSelect.appendChild(opt);
}});

function render() {{
  const cat = catSelect.value;
  const q = document.getElementById('searchBox').value.trim().toLowerCase();
  clusterGroup.clearLayers();
  let shown = 0;
  markers.forEach(m => {{
    const okCat = !cat || m._meta.categoria === cat;
    const okQ = !q || m._meta.testo.includes(q);
    if (okCat && okQ) {{ clusterGroup.addLayer(m); shown++; }}
  }});
  document.getElementById('count').textContent = shown + ' attivita\\u0300 trovate';
}}

map.addLayer(clusterGroup);
catSelect.addEventListener('change', render);
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

    html = (
        TEMPLATE.replace("__GEOJSON__", geojson_text)
        .replace("__LEAFLET_CSS__", leaflet_css)
        .replace("__MARKERCLUSTER_CSS__", cluster_css)
    )
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(html, encoding="utf-8")
    print(f"Scritto {OUTPUT_PATH} ({len(html)} bytes)")


if __name__ == "__main__":
    main()
