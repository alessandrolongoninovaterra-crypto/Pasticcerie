#!/usr/bin/env bash
# Rigenera tutti i dati del gioco dalla cartografia reale.
# Uso: tools/run_pipeline.sh [cartella_di_lavoro]
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
WORK="${1:-$HERE/../.work}"
DATA="$HERE/../data"
mkdir -p "$WORK"
URL=$(python3 -c "import json;print(json.load(open('$HERE/config.json'))['source_pbf_url'])")
PBF="$WORK/$(basename "$URL")"
[ -f "$PBF" ] || curl -L -o "$PBF" "$URL"                       # ~360 MB, Lombardia
python3 "$HERE/extract_bbox.py" "$PBF" "$WORK/area.osm.pbf"       # ritaglio sui comuni configurati
python3 "$HERE/build_elevation.py" "$WORK/area.osm.pbf.bbox.json" "$WORK/terrarium" "$DATA"
rm -rf "$DATA/tiles"
python3 "$HERE/build_data.py" "$WORK/area.osm.pbf" "$WORK/area.osm.pbf.bbox.json" "$WORK/terrarium" "$DATA"
echo "Dati aggiornati in $DATA"
