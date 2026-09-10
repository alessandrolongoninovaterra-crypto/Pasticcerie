#!/usr/bin/env python3
"""
Scarica da OpenStreetMap (Overpass API) l'elenco di panetterie, pasticcerie,
gelaterie, cioccolaterie e confetterie artigianali in Italia e li esporta
in CSV e GeoJSON.

Copre le categorie corrispondenti ai codici ATECO:
  10.71.10 Produzione di pane e prodotti di panetteria simili
  10.71.20 Produzione di prodotti di pasticceria freschi
  10.72.00 Fette biscottate, biscotti, prodotti di pasticceria conservati
  10.52.00 Produzione di gelati
  56.11.21 / 56.11.22 / 56.11.2 Gelaterie e pasticcerie
  10.82.00 Produzione di cacao, cioccolato, caramelle e confetterie

OpenStreetMap non riporta il codice ATECO o la P.IVA (dati presenti solo
nel Registro Imprese/Telemaco, servizio a pagamento): qui otteniamo nome,
categoria, indirizzo e coordinate, sufficienti per costruire una mappa.
"""
import csv
import json
import sys
import time
import urllib.parse
import urllib.request

# Bounding box che copre l'intero territorio italiano (con margine).
BBOX = "35.2,6.5,47.3,18.6"

# Alcuni mirror pubblici Overpass falliscono o hanno dati parziali/instabili:
# proviamo in ordine e passiamo al successivo in caso di errore.
MIRRORS = [
    "https://overpass.openstreetmap.fr/api/interpreter",
    "https://maps.mail.ru/osm/tools/overpass/api/interpreter",
    "https://overpass-api.de/api/interpreter",
]

# tag OSM -> categoria leggibile
CATEGORIES = [
    ('node["shop"="bakery"]', "Panetteria"),
    ('node["shop"="pastry"]', "Pasticceria"),
    ('node["shop"="confectionery"]', "Confetteria/Dolciumi"),
    ('node["shop"="chocolate"]', "Cioccolateria"),
    ('node["shop"="ice_cream"]', "Gelateria"),
    ('node["craft"="bakery"]', "Panificio artigianale"),
    ('node["craft"="confectionery"]', "Pasticceria artigianale"),
]


def run_query(query, timeout=200):
    last_err = None
    for mirror in MIRRORS:
        try:
            data = urllib.parse.urlencode({"data": query}).encode()
            req = urllib.request.Request(mirror, data=data)
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                return json.load(resp)
        except Exception as e:  # noqa: BLE001
            last_err = e
            print(f"  mirror {mirror} failed: {e}", file=sys.stderr)
            continue
    raise RuntimeError(f"Tutti i mirror Overpass hanno fallito: {last_err}")


def fetch_category(tag_filter, label):
    query = f'[out:json][timeout:180];{tag_filter}({BBOX});out body;'
    print(f"Scarico categoria: {label} ...", file=sys.stderr)
    result = run_query(query)
    elements = result.get("elements", [])
    print(f"  -> {len(elements)} risultati", file=sys.stderr)
    for el in elements:
        el["_categoria"] = label
    return elements


def normalize(el):
    tags = el.get("tags", {})
    return {
        "nome": tags.get("name", ""),
        "categoria": el.get("_categoria", ""),
        "indirizzo": " ".join(
            filter(None, [tags.get("addr:street", ""), tags.get("addr:housenumber", "")])
        ).strip(),
        "cap": tags.get("addr:postcode", ""),
        "comune": tags.get("addr:city", ""),
        "provincia": tags.get("addr:state", tags.get("addr:province", "")),
        "telefono": tags.get("phone", tags.get("contact:phone", "")),
        "sito_web": tags.get("website", tags.get("contact:website", "")),
        "lat": el.get("lat"),
        "lon": el.get("lon"),
        "osm_id": el.get("id"),
    }


def main():
    seen_ids = set()
    rows = []
    for tag_filter, label in CATEGORIES:
        try:
            elements = fetch_category(tag_filter, label)
        except RuntimeError as e:
            print(f"ERRORE categoria {label}: {e}", file=sys.stderr)
            continue
        for el in elements:
            if el["id"] in seen_ids:
                continue
            seen_ids.add(el["id"])
            rows.append(normalize(el))
        time.sleep(2)  # rispetta il rate limit dei server pubblici Overpass

    rows.sort(key=lambda r: (r["provincia"], r["comune"], r["nome"]))

    with open("data/pasticcerie_italia.csv", "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=[
                "nome", "categoria", "indirizzo", "cap", "comune",
                "provincia", "telefono", "sito_web", "lat", "lon", "osm_id",
            ],
        )
        writer.writeheader()
        writer.writerows(rows)

    geojson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [r["lon"], r["lat"]]},
                "properties": {k: v for k, v in r.items() if k not in ("lat", "lon")},
            }
            for r in rows
            if r["lat"] is not None and r["lon"] is not None
        ],
    }
    with open("data/pasticcerie_italia.geojson", "w", encoding="utf-8") as f:
        json.dump(geojson, f, ensure_ascii=False)

    print(f"Totale attività trovate (bounding box, include zone di confine estere): {len(rows)}", file=sys.stderr)
    print("Filtro le attività fuori dai confini italiani...", file=sys.stderr)
    import filter_to_italy  # noqa: E402
    filter_to_italy.main()


if __name__ == "__main__":
    main()
