#!/usr/bin/env python3
"""
Filtra data/pasticcerie_italia.{csv,geojson} tenendo solo i punti che
ricadono realmente entro i confini italiani.

La bounding box usata da fetch_pasticcerie_osm.py per interrogare Overpass
e' volutamente larga (per non perdere pezzi di territorio italiano vicino
al confine) e quindi cattura anche attivita' di Francia, Svizzera, Austria,
Slovenia, Croazia e Corsica nelle zone di frontiera: qui le scartiamo con
un test punto-in-poligono sui confini regionali italiani (con un piccolo
margine per non perdere attivita' costiere/portuali).
"""
import csv
import json
from pathlib import Path

from shapely.geometry import Point, shape
from shapely.ops import unary_union

REGIONS_PATH = Path("scripts/vendor/italy_regions_simplified.geojson")
CSV_PATH = Path("data/pasticcerie_italia.csv")
GEOJSON_PATH = Path("data/pasticcerie_italia.geojson")

# Margine di tolleranza in gradi (~3km) per non scartare attivita' costiere
# che nella versione semplificata dei confini cadono appena fuori.
BUFFER_DEG = 0.03


def main():
    regions = json.loads(REGIONS_PATH.read_text(encoding="utf-8"))
    italy = unary_union([shape(f["geometry"]) for f in regions["features"]]).buffer(BUFFER_DEG)

    geojson = json.loads(GEOJSON_PATH.read_text(encoding="utf-8"))
    kept, dropped = [], 0
    for feat in geojson["features"]:
        lon, lat = feat["geometry"]["coordinates"]
        if italy.contains(Point(lon, lat)):
            kept.append(feat)
        else:
            dropped += 1

    print(f"Tenute: {len(kept)}  Scartate (fuori Italia): {dropped}")

    geojson["features"] = kept
    GEOJSON_PATH.write_text(json.dumps(geojson, ensure_ascii=False), encoding="utf-8")

    kept_ids = {f["properties"]["osm_id"] for f in kept}
    rows = list(csv.DictReader(CSV_PATH.open(encoding="utf-8")))
    rows = [r for r in rows if r["osm_id"] in kept_ids]
    with CSV_PATH.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)
    print(f"CSV riscritto con {len(rows)} righe")


if __name__ == "__main__":
    main()
