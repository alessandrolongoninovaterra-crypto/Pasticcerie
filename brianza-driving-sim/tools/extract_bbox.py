#!/usr/bin/env python3
"""Step 1: calcola il bounding box dai confini comunali reali (OSM admin_level=8)
e ritaglia dall'estratto regionale un file .osm.pbf piccolo con tutti gli oggetti
della zona (con riferimenti completi).

Uso: python3 extract_bbox.py <lombardia.osm.pbf> <out.osm.pbf>
"""
import json, os, sys
import osmium

HERE = os.path.dirname(os.path.abspath(__file__))
cfg = json.load(open(os.path.join(HERE, 'config.json')))
src, dst = sys.argv[1], sys.argv[2]

# 1) bounding box dei comuni configurati
names = set(cfg['comuni'])
found = {}
fp = (osmium.FileProcessor(src)
      .with_areas(osmium.filter.TagFilter(('boundary', 'administrative')))
      .with_filter(osmium.filter.EntityFilter(osmium.osm.AREA)))
for a in fp:
    if a.tags.get('admin_level') == '8' and a.tags.get('name') in names:
        lats, lons = [], []
        for r in a.outer_rings():
            for n in r:
                lats.append(n.lat); lons.append(n.lon)
        found[a.tags['name']] = (min(lats), min(lons), max(lats), max(lons))
missing = names - set(found)
if missing:
    print('ATTENZIONE: comuni non trovati:', missing)
m = cfg['margin_deg']
s = min(v[0] for v in found.values()) - m
w = min(v[1] for v in found.values()) - m
n = max(v[2] for v in found.values()) + m
e = max(v[3] for v in found.values()) + m
if cfg.get('extra_bbox'):
    xs, xw, xn, xe = cfg['extra_bbox']
    s, w, n, e = min(s, xs), min(w, xw), max(n, xn), max(e, xe)
bbox = [round(s, 5), round(w, 5), round(n, 5), round(e, 5)]
print('bbox', bbox)
json.dump({'bbox': bbox, 'comuni': found}, open(dst + '.bbox.json', 'w'), indent=1)

# 2) ritaglio
way_ids = set()
with osmium.BackReferenceWriter(dst, ref_src=src, overwrite=True) as writer:
    for o in osmium.FileProcessor(src).with_locations():
        if o.is_node():
            if s <= o.location.lat <= n and w <= o.location.lon <= e:
                writer.add_node(o)
        elif o.is_way():
            for nd in o.nodes:
                loc = nd.location
                if loc.valid() and s <= loc.lat <= n and w <= loc.lon <= e:
                    writer.add_way(o)
                    way_ids.add(o.id)
                    break
        elif o.is_relation():
            for mb in o.members:
                if mb.type == 'w' and mb.ref in way_ids:
                    writer.add_relation(o)
                    break
print('ways', len(way_ids))
