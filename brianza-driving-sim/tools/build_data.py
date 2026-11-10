#!/usr/bin/env python3
"""Step 3: converte l'estratto OpenStreetMap della Brianza nei dati del gioco.

Produce in data/:
  meta.js        proiezione, comuni (confini reali), localita', punti di interesse,
                 laghi, fiumi, ferrovie
  roads.js       rete stradale reale (vie OSM con nome, classe, sensi unici,
                 limiti, corsie, ponti/gallerie, semafori, stop, precedenze)
  landcover.js   immagine della copertura del suolo (boschi, prati, campi,
                 aree urbane/industriali, acqua) proiettata sul terreno
  tiles/*.js     edifici reali (impronte OSM + altezza/piani) e alberi, per
                 tessere di 1 km caricate in streaming

Uso: python3 build_data.py <estratto.osm.pbf> <bbox.json> <height_dir> <out_data_dir>
"""
import io, json, math, os, sys, base64
from collections import defaultdict
import numpy as np
import osmium
from PIL import Image, ImageDraw
from common import Proj, CFG, write_js

pbf, bbox_json, height_dir, OUT = sys.argv[1:5]
bbox = json.load(open(bbox_json))['bbox']
P = Proj(bbox)
S, W, N, E = bbox
TILE = CFG['tile_m']

# ------------------------------------------------------------------ altimetria
HMETA = json.load(open(os.path.join(height_dir, 'height.json')))
HGRID = np.load(os.path.join(height_dir, 'height.npy')).astype(np.float32).reshape(HMETA['nz'], HMETA['nx']) * 0.1


def terrain_h(x, z):
    gx = (x - HMETA['x0']) / HMETA['step']
    gz = (z - HMETA['z0']) / HMETA['step']
    ix = min(max(int(math.floor(gx)), 0), HMETA['nx'] - 2)
    iz = min(max(int(math.floor(gz)), 0), HMETA['nz'] - 2)
    fx = min(max(gx - ix, 0), 1)
    fz = min(max(gz - iz, 0), 1)
    a = HGRID[iz, ix]; b = HGRID[iz, ix + 1]; c = HGRID[iz + 1, ix]; d = HGRID[iz + 1, ix + 1]
    return float(a * (1 - fx) * (1 - fz) + b * fx * (1 - fz) + c * (1 - fx) * fz + d * fx * fz)


# ------------------------------------------------------------------ utilita'
class StrTable:
    def __init__(self):
        self.idx = {'': 0}
        self.list = ['']

    def __call__(self, s):
        if not s:
            return 0
        if s not in self.idx:
            self.idx[s] = len(self.list)
            self.list.append(s)
        return self.idx[s]


def q(v):  # metri -> decimetri interi
    return int(round(v * 10))


def dp_simplify(pts, tol):
    """Douglas-Peucker su lista di (x,z)."""
    if len(pts) < 3:
        return list(pts)
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        ax, az = pts[a]; bx, bz = pts[b]
        dx, dz = bx - ax, bz - az
        L = math.hypot(dx, dz)
        best, bi = -1, -1
        for i in range(a + 1, b):
            px, pz = pts[i]
            if L < 1e-6:  # anello chiuso: distanza dal punto iniziale
                d = math.hypot(px - ax, pz - az)
            else:
                d = abs((px - ax) * dz - (pz - az) * dx) / L
            if d > best:
                best, bi = d, i
        if best > tol:
            keep[bi] = True
            stack.append((a, bi)); stack.append((bi, b))
    return [p for p, k in zip(pts, keep) if k]


def enc_ring(pts):
    """anello -> [x0,z0,dx,dz,...] in decimetri"""
    out = []
    px = pz = 0
    for i, (x, z) in enumerate(pts):
        qx, qz = q(x), q(z)
        out.append(qx - px); out.append(qz - pz)
        px, pz = qx, qz
    return out


def ring_area(pts):
    a = 0
    for i in range(len(pts)):
        x1, z1 = pts[i]; x2, z2 = pts[(i + 1) % len(pts)]
        a += x1 * z2 - x2 * z1
    return a / 2


def centroid(pts):
    xs = [p[0] for p in pts]; zs = [p[1] for p in pts]
    return sum(xs) / len(xs), sum(zs) / len(zs)


def inside(lat, lon, m=0.0):
    return S - m <= lat <= N + m and W - m <= lon <= E + m


def parse_float(s):
    if not s:
        return 0.0
    s = s.replace(',', '.').strip().split(' ')[0].split(';')[0]
    try:
        return float(s)
    except ValueError:
        return 0.0


def parse_speed(s):
    if not s:
        return 0
    s = s.strip()
    table = {'IT:urban': 50, 'IT:rural': 90, 'IT:trunk': 110, 'IT:motorway': 130, 'walk': 10,
             'IT:living_street': 30, 'IT:zone30': 30}
    if s in table:
        return table[s]
    try:
        v = float(s.split(' ')[0].split(';')[0])
        if 'mph' in s:
            v *= 1.609
        return int(v)
    except ValueError:
        return 0


# ------------------------------------------------------------------ strade
ROAD_CLASS = {'motorway': 0, 'trunk': 1, 'primary': 2, 'secondary': 3, 'tertiary': 4,
              'unclassified': 5, 'residential': 6, 'living_street': 7, 'service': 8,
              'track': 9, 'pedestrian': 10, 'road': 5}
LINK = {'motorway_link': 0, 'trunk_link': 1, 'primary_link': 2, 'secondary_link': 3, 'tertiary_link': 4}
# flag bit
F_ONEWAY, F_ROUNDABOUT, F_BRIDGE, F_TUNNEL, F_LINK, F_PRIVATE, F_UNPAVED, F_NOCAR = 1, 2, 4, 8, 16, 32, 64, 128

NODE_TAG = {('highway', 'traffic_signals'): 1, ('highway', 'stop'): 2, ('highway', 'give_way'): 3,
            ('highway', 'crossing'): 4, ('highway', 'mini_roundabout'): 5, ('railway', 'level_crossing'): 6,
            ('traffic_calming', 'bump'): 7, ('traffic_calming', 'table'): 7, ('highway', 'speed_camera'): 8,
            ('highway', 'street_lamp'): 9}

names = StrTable()
road_ways = []        # dict per via
node_xy = {}          # osm id -> (x,z) per i nodi delle strade
node_tags = {}        # osm id -> code
rails = []
rivers = []
trees_pt = []
tree_rows = []
places = []
landmarks = []
waters = []
comuni = []
buildings = []
landcover_polys = []  # (priority, color, outer_rings, inner_rings)
lc_lines = []         # (color, width_m, pts)

LC = {  # nome -> (priorita', colore RGB)
    'farmland': (1, (156, 164, 96)), 'meadow': (2, (118, 156, 74)), 'orchard': (2, (124, 146, 74)),
    'vineyard': (2, (130, 140, 80)), 'plant_nursery': (2, (120, 150, 80)), 'greenhouse_horticulture': (2, (170, 175, 165)),
    'residential': (3, (142, 144, 120)), 'retail': (4, (150, 148, 140)), 'commercial': (4, (150, 148, 140)),
    'industrial': (4, (152, 150, 144)), 'railway': (4, (130, 124, 112)), 'construction': (4, (160, 148, 120)),
    'brownfield': (4, (150, 140, 112)), 'farmyard': (4, (150, 140, 110)), 'quarry': (4, (176, 166, 146)),
    'landfill': (4, (150, 140, 112)), 'grass': (5, (112, 158, 72)), 'village_green': (5, (112, 158, 72)),
    'recreation_ground': (5, (108, 156, 70)), 'cemetery': (5, (128, 140, 112)), 'allotments': (5, (126, 150, 82)),
    'grassland': (5, (120, 152, 78)), 'heath': (5, (126, 140, 86)), 'park': (6, (96, 152, 66)),
    'garden': (6, (100, 150, 70)), 'playground': (7, (150, 140, 110)), 'pitch': (7, (82, 146, 64)),
    'golf_course': (6, (96, 160, 70)), 'sports_centre': (6, (120, 150, 90)), 'stadium': (6, (120, 150, 90)),
    'scrub': (7, (84, 116, 60)), 'wetland': (7, (90, 118, 90)), 'forest': (8, (54, 88, 44)), 'wood': (8, (54, 88, 44)),
    'parking': (9, (112, 112, 110)), 'water': (10, (62, 104, 142)), 'reservoir': (10, (62, 104, 142)),
    'basin': (10, (62, 104, 142)), 'riverbank': (10, (62, 104, 142)), 'bare_rock': (7, (160, 156, 146)),
}
LC_DEFAULT = (128, 150, 84)
WATER_RGB = (62, 104, 142)

BTYPE = {
    'house': 1, 'detached': 1, 'semidetached_house': 1, 'terrace': 1, 'villa': 1, 'farm': 1, 'bungalow': 1,
    'residential': 2, 'apartments': 2, 'dormitory': 2, 'hotel': 2,
    'industrial': 3, 'warehouse': 3, 'manufacture': 3, 'factory': 3, 'hangar': 3,
    'commercial': 4, 'retail': 4, 'supermarket': 4, 'office': 4, 'kiosk': 4,
    'church': 5, 'chapel': 5, 'cathedral': 5, 'basilica': 5, 'religious': 5, 'shrine': 5,
    'garage': 6, 'garages': 6, 'shed': 6, 'carport': 6, 'roof': 6, 'hut': 6, 'greenhouse': 6, 'service': 6,
    'storage_tank': 6, 'cabin': 6, 'container': 6, 'toilets': 6,
    'school': 7, 'university': 7, 'hospital': 7, 'public': 7, 'civic': 7, 'government': 7, 'kindergarten': 7,
    'townhall': 7, 'college': 7, 'train_station': 7, 'sports_hall': 7, 'stadium': 7, 'fire_station': 7,
    'bell_tower': 8, 'tower': 8, 'campanile': 8,
    'farm_auxiliary': 9, 'barn': 9, 'stable': 9, 'cowshed': 9, 'silo': 9,
    'ruins': 10, 'construction': 10,
}
ROOF = {'flat': 1, 'gabled': 2, 'hipped': 3, 'pyramidal': 4, 'skillion': 5, 'dome': 6, 'half-hipped': 3, 'round': 6}

LM_TYPES = [  # (chiave, valori, codice)
    ('amenity', {'place_of_worship'}, 1), ('railway', {'station', 'halt'}, 2), ('amenity', {'townhall'}, 3),
    ('amenity', {'hospital'}, 4), ('amenity', {'fuel'}, 5), ('historic', {'castle', 'manor', 'monument', 'church',
     'archaeological_site', 'ruins', 'building', 'tower', 'villa'}, 6), ('tourism', {'attraction', 'museum', 'viewpoint'}, 7),
    ('leisure', {'park', 'stadium', 'sports_centre', 'golf_course', 'water_park'}, 8),
    ('shop', {'mall', 'supermarket', 'department_store'}, 9), ('amenity', {'theatre', 'cinema', 'library'}, 10),
    ('amenity', {'school', 'college', 'university'}, 11), ('natural', {'water'}, 12), ('natural', {'peak'}, 13),
]


def landmark_code(tags):
    for k, vals, code in LM_TYPES:
        if tags.get(k) in vals:
            if code == 11 and not tags.get('name'):
                return 0
            return code
    return 0


def xy(loc):
    return P.fwd(loc.lat, loc.lon)


class H(osmium.SimpleHandler):
    pass


fp = osmium.FileProcessor(pbf).with_locations().with_areas()
n_obj = 0
for o in fp:
    n_obj += 1
    t = o.tags
    if o.is_node():
        lat, lon = o.location.lat, o.location.lon
        if not inside(lat, lon) or not len(t):
            continue
        for k in ('highway', 'railway', 'traffic_calming'):
            v = t.get(k)
            if v and (k, v) in NODE_TAG:
                node_tags[o.id] = NODE_TAG[(k, v)]
        x, z = P.fwd(lat, lon)
        if t.get('natural') == 'tree':
            trees_pt.append((x, z))
        pl = t.get('place')
        if pl in ('city', 'town', 'village', 'suburb', 'quarter', 'neighbourhood', 'hamlet', 'locality') and t.get('name'):
            places.append({'n': t['name'], 't': pl, 'x': round(x, 1), 'z': round(z, 1),
                           'p': int(parse_float(t.get('population')))})
        code = landmark_code(t)
        if code and t.get('name'):
            landmarks.append([code, round(x, 1), round(z, 1), t['name'], t.get('religion', '') if code == 1 else t.get(
                'brand', '')])
        continue

    if o.is_way():
        hw = t.get('highway')
        pts_ll = [(nd.ref, nd.location) for nd in o.nodes if nd.location.valid()]
        if len(pts_ll) < 2:
            continue
        if not any(inside(l.lat, l.lon, 0.002) for _, l in pts_ll):
            continue
        if hw and (hw in ROAD_CLASS or hw in LINK) and t.get('area') != 'yes':
            cls = ROAD_CLASS.get(hw, LINK.get(hw))
            flags = 0
            if hw in LINK:
                flags |= F_LINK
            ow = t.get('oneway')
            rev = False
            if ow in ('yes', '1', 'true') or t.get('junction') in ('roundabout', 'circular') or hw in ('motorway', 'motorway_link'):
                flags |= F_ONEWAY
            if ow == '-1':
                flags |= F_ONEWAY; rev = True
            if ow == 'no':
                flags &= ~F_ONEWAY
            if t.get('junction') in ('roundabout', 'circular'):
                flags |= F_ROUNDABOUT
            if t.get('bridge') and t.get('bridge') != 'no':
                flags |= F_BRIDGE
            if t.get('tunnel') and t.get('tunnel') not in ('no', 'building_passage'):
                flags |= F_TUNNEL
            acc = t.get('motor_vehicle') or t.get('motorcar') or t.get('access')
            if acc in ('private', 'no', 'agricultural', 'forestry', 'delivery', 'destination') and acc != 'destination':
                flags |= F_PRIVATE
            if hw == 'pedestrian':
                flags |= F_NOCAR
            surf = t.get('surface', '')
            if surf in ('unpaved', 'gravel', 'dirt', 'ground', 'grass', 'compacted', 'fine_gravel', 'earth', 'mud', 'sand') or (
                    hw == 'track' and surf not in ('asphalt', 'paved', 'concrete')):
                flags |= F_UNPAVED
            if t.get('service') in ('parking_aisle', 'drive-through'):
                continue  # corsie di parcheggio: troppe e inutili per la guida
            ids = [r for r, _ in pts_ll]
            for r, l in pts_ll:
                if r not in node_xy:
                    node_xy[r] = P.fwd(l.lat, l.lon)
            if rev:
                ids.reverse()
            road_ways.append({
                'ids': ids, 'name': t.get('name', ''), 'ref': t.get('ref', ''), 'cls': cls, 'flags': flags,
                'lanes': int(parse_float(t.get('lanes'))), 'speed': parse_speed(t.get('maxspeed')),
                'layer': int(parse_float(t.get('layer'))) if t.get('layer') else (1 if flags & F_BRIDGE else (-1 if flags & F_TUNNEL else 0)),
                'width': parse_float(t.get('width')), 'osm': o.id,
            })
            continue
        rw = t.get('railway')
        if rw in ('rail', 'light_rail', 'narrow_gauge') and t.get('service') not in ('yard', 'siding', 'spur', 'crossover'):
            pts = [P.fwd(l.lat, l.lon) for _, l in pts_ll]
            rails.append({'p': [[round(x, 1), round(z, 1)] for x, z in pts],
                          'b': 1 if t.get('bridge') and t.get('bridge') != 'no' else 0,
                          't': 1 if t.get('tunnel') and t.get('tunnel') != 'no' else 0,
                          'n': t.get('name', '')})
            continue
        ww = t.get('waterway')
        if ww in ('river', 'canal', 'stream', 'ditch', 'drain') and t.get('tunnel') not in ('culvert', 'yes'):
            pts = [P.fwd(l.lat, l.lon) for _, l in pts_ll]
            width = {'river': 12, 'canal': 8, 'stream': 3, 'ditch': 1.5, 'drain': 1.5}[ww]
            if t.get('width'):
                width = max(1.5, min(40, parse_float(t.get('width')) or width))
            lc_lines.append((WATER_RGB, width, pts))
            if ww in ('river', 'canal', 'stream'):
                rivers.append({'n': t.get('name', ''), 'w': ww, 'p': [[round(x), round(z)] for x, z in dp_simplify(pts, 3)]})
            continue
        if t.get('natural') == 'tree_row':
            tree_rows.append([(round(x, 1), round(z, 1)) for x, z in (P.fwd(l.lat, l.lon) for _, l in pts_ll)])
            continue
        if t.get('barrier') == 'hedge' and not o.is_closed():
            continue
        continue

    if o.is_area():
        try:
            outers = [[P.fwd(n.lat, n.lon) for n in r] for r in o.outer_rings()]
        except Exception:
            continue
        if not outers or not outers[0]:
            continue
        allpts = [p for r in outers for p in r]
        xs = [p[0] for p in allpts]; zs = [p[1] for p in allpts]
        if max(xs) < P.xmin - 200 or min(xs) > P.xmax + 200 or max(zs) < P.zmin - 200 or min(zs) > P.zmax + 200:
            continue
        inners = []
        for r in o.outer_rings():
            for ir in o.inner_rings(r):
                inners.append([P.fwd(n.lat, n.lon) for n in ir])

        if t.get('boundary') == 'administrative' and t.get('admin_level') == '8' and t.get('name'):
            rings = []
            for r in outers:
                s_ = dp_simplify(r, 12)
                rings.append([[round(x), round(z)] for x, z in s_])
            comuni.append({'n': t['name'], 'rings': rings, 'istat': t.get('ref:ISTAT', '')})
            continue

        b = t.get('building')
        if b and b != 'no':
            bt = BTYPE.get(b, 0)
            if t.get('man_made') == 'tower' or t.get('tower:type') == 'bell_tower':
                bt = 8
            if t.get('amenity') == 'place_of_worship' and bt == 0:
                bt = 5
            for r in outers:
                if len(r) < 4:
                    continue
                r = r[:-1] if r[0] == r[-1] else r
                r = dp_simplify(r + [r[0]], 0.25)[:-1]
                if len(r) < 3:
                    continue
                if ring_area(r) < 0:  # orario -> antiorario nel piano x,z
                    r = r[::-1]
                area = abs(ring_area(r))
                if area < 6:
                    continue
                buildings.append({
                    'r': r, 't': bt, 'h': parse_float(t.get('height')), 'mh': parse_float(t.get('min_height')),
                    'l': int(parse_float(t.get('building:levels'))), 'rs': ROOF.get(t.get('roof:shape', ''), 0),
                    'n': t.get('name', '') if (t.get('name') and (bt in (5, 7, 8) or t.get('historic') or t.get('tourism'))) else '',
                    'c': t.get('building:colour', ''), 'rc': t.get('roof:colour', ''),
                })
            code = landmark_code(t)
            if code and t.get('name'):
                cx, cz = centroid(outers[0])
                landmarks.append([code, round(cx, 1), round(cz, 1), t['name'], t.get('religion', '') if code == 1 else t.get('brand', '')])
            continue

        code = landmark_code(t)
        if code and t.get('name'):
            cx, cz = centroid(outers[0])
            landmarks.append([code, round(cx, 1), round(cz, 1), t['name'], ''])

        kind = None
        for k in ('natural', 'landuse', 'leisure', 'amenity', 'water', 'waterway'):
            v = t.get(k)
            if v in LC:
                kind = v
                break
        if kind:
            pr, col = LC[kind]
            landcover_polys.append((pr, col, outers, inners))
            is_water = kind in ('water', 'reservoir', 'basin', 'riverbank')
            if is_water:
                area = sum(abs(ring_area(r)) for r in outers)
                if area > 1500:
                    waters.append({
                        'n': t.get('name', ''), 'a': round(area),
                        'o': [[[round(x, 1), round(z, 1)] for x, z in dp_simplify(r, 1.0)] for r in outers],
                        'i': [[[round(x, 1), round(z, 1)] for x, z in dp_simplify(r, 1.0)] for r in inners]})
print('oggetti', n_obj, 'vie', len(road_ways), 'nodi strada', len(node_xy), 'edifici', len(buildings),
      'landcover', len(landcover_polys), 'alberi', len(trees_pt), 'ferrovie', len(rails), 'acque', len(waters))

# ------------------------------------------------------------------ rete stradale: nodi, semplificazione
use_count = defaultdict(int)
for w in road_ways:
    for r in w['ids']:
        use_count[r] += 1
    use_count[w['ids'][0]] += 1
    use_count[w['ids'][-1]] += 1

node_index = {}
node_list = []


def nid(r):
    if r not in node_index:
        node_index[r] = len(node_list)
        node_list.append(r)
    return node_index[r]


way_out = []
for w in road_ways:
    ids = w['ids']
    # mantieni i nodi topologicamente importanti, semplifica il resto (0.4 m)
    keep_ids = [ids[0]]
    seg = [ids[0]]
    for r in ids[1:]:
        seg.append(r)
        if use_count[r] > 1 or r in node_tags or r == ids[-1]:
            pts = [node_xy[x] for x in seg]
            if len(seg) > 2:
                simp = dp_simplify(pts, 0.4)
                sset = set(simp)
                for x in seg[1:-1]:
                    if node_xy[x] in sset:
                        keep_ids.append(x)
            keep_ids.append(r)
            seg = [r]
    # elimina duplicati consecutivi
    clean = [keep_ids[0]]
    for r in keep_ids[1:]:
        if r != clean[-1]:
            clean.append(r)
    if len(clean) < 2:
        continue
    w['ids'] = clean
    way_out.append(w)
road_ways = way_out
for w in road_ways:
    w['n'] = [nid(r) for r in w['ids']]

# ------------------------------------------------------------------ ponti / cavalcavia: quota delle strade
# Per ogni nodo strada calcoliamo uno scostamento verticale (dh) rispetto al terreno:
# i ponti che scavalcano altre strade/ferrovie vengono sollevati (cavalcavia) e le
# rampe di accesso salgono con pendenza massima del 6%.
GRID = 50.0
seg_grid = defaultdict(list)


def seg_cells(a, b):
    x0, x1 = sorted((a[0], b[0])); z0, z1 = sorted((a[1], b[1]))
    for i in range(int(math.floor(x0 / GRID)), int(math.floor(x1 / GRID)) + 1):
        for j in range(int(math.floor(z0 / GRID)), int(math.floor(z1 / GRID)) + 1):
            yield (i, j)


def seg_inter(p1, p2, p3, p4):
    d = (p2[0] - p1[0]) * (p4[1] - p3[1]) - (p2[1] - p1[1]) * (p4[0] - p3[0])
    if abs(d) < 1e-9:
        return False
    t = ((p3[0] - p1[0]) * (p4[1] - p3[1]) - (p3[1] - p1[1]) * (p4[0] - p3[0])) / d
    u = ((p3[0] - p1[0]) * (p2[1] - p1[1]) - (p3[1] - p1[1]) * (p2[0] - p1[0])) / d
    return 0.02 < t < 0.98 and 0.02 < u < 0.98


for wi, w in enumerate(road_ways):
    if w['flags'] & F_BRIDGE:
        continue
    for k in range(len(w['ids']) - 1):
        a, b = node_xy[w['ids'][k]], node_xy[w['ids'][k + 1]]
        for c in seg_cells(a, b):
            seg_grid[c].append((a, b, wi, w['layer']))
for ri, rl in enumerate(rails):
    if rl['b']:
        continue
    for k in range(len(rl['p']) - 1):
        a, b = tuple(rl['p'][k]), tuple(rl['p'][k + 1])
        for c in seg_cells(a, b):
            seg_grid[c].append((a, b, -1 - ri, -1 if rl['t'] else 0))

dh = defaultdict(float)
pinned = set()
n_over = 0
for w in road_ways:
    if not (w['flags'] & F_BRIDGE):
        continue
    crossed = set()
    for k in range(len(w['ids']) - 1):
        a, b = node_xy[w['ids'][k]], node_xy[w['ids'][k + 1]]
        for c in seg_cells(a, b):
            for (p3, p4, wi, lay) in seg_grid[c]:
                if lay < w['layer'] and seg_inter(a, b, p3, p4):
                    crossed.add(wi)
    if crossed:
        n_over += 1
        target = min(13.0, 6.5 * max(1, w['layer']))
        w['over'] = 1
        for r in w['ids']:
            dh[r] = max(dh[r], target)
        for wi in crossed:
            if wi >= 0:
                for r in road_ways[wi]['ids']:
                    pinned.add(r)
print('cavalcavia', n_over)

# propagazione delle rampe (Dijkstra "al contrario": dh decresce con la distanza)
adj = defaultdict(list)
for w in road_ways:
    ids = w['ids']
    for k in range(len(ids) - 1):
        a, b = ids[k], ids[k + 1]
        d = math.dist(node_xy[a], node_xy[b])
        adj[a].append((b, d)); adj[b].append((a, d))
import heapq
heap = [(-v, r) for r, v in dh.items() if v > 0]
heapq.heapify(heap)
GRADE = 0.06
while heap:
    nv, r = heapq.heappop(heap)
    v = -nv
    if v < dh[r] - 1e-6:
        continue
    for nb, d in adj[r]:
        if nb in pinned:
            continue
        nvv = v - GRADE * d
        if nvv > dh[nb] + 0.05 and nvv > 0.2:
            dh[nb] = nvv
            heapq.heappush(heap, (-nvv, nb))

# ------------------------------------------------------------------ scrittura strade
nodes_flat = []
px = pz = 0
for r in node_list:
    x, z = node_xy[r]
    qx, qz = q(x), q(z)
    nodes_flat.append(qx - px); nodes_flat.append(qz - pz)
    px, pz = qx, qz
ways_flat = []
for w in road_ways:
    ways_flat.append([names(w['name']), names(w['ref']), w['cls'], w['flags'] | (256 if w.get('over') else 0),
                      w['lanes'], w['speed'], w['layer'], int(round(w['width'] * 10))] + w['n'])
ntags = []
for r, code in node_tags.items():
    if r in node_index:
        ntags += [node_index[r], code]
dh_flat = []
for r, v in dh.items():
    if v > 0.05 and r in node_index:
        dh_flat += [node_index[r], int(round(v * 10))]

sz = write_js(os.path.join(OUT, 'roads.js'), 'roads', {
    'names': names.list, 'nodes': nodes_flat, 'ways': ways_flat, 'ntags': ntags, 'dh': dh_flat,
    'rails': rails})
print('roads.js', sz, 'nodi', len(node_list))

# ------------------------------------------------------------------ copertura del suolo (immagine)
MPP = CFG['landcover_m_per_px']
LW = int(math.ceil((P.xmax - P.xmin) / MPP))
LH = int(math.ceil((P.zmax - P.zmin) / MPP))
img = Image.new('RGB', (LW, LH), LC_DEFAULT)


def to_px(pts):
    return [((x - P.xmin) / MPP, (z - P.zmin) / MPP) for x, z in pts]


landcover_polys.sort(key=lambda p: p[0])
for pr, col, outers, inners in landcover_polys:
    if not inners:
        d = ImageDraw.Draw(img)
        for r in outers:
            if len(r) >= 3:
                d.polygon(to_px(r), fill=col)
        continue
    allp = [p for r in outers for p in to_px(r)]
    x0 = max(0, int(min(p[0] for p in allp)) - 1); x1 = min(LW, int(max(p[0] for p in allp)) + 2)
    y0 = max(0, int(min(p[1] for p in allp)) - 1); y1 = min(LH, int(max(p[1] for p in allp)) + 2)
    if x1 <= x0 or y1 <= y0:
        continue
    mask = Image.new('L', (x1 - x0, y1 - y0), 0)
    md = ImageDraw.Draw(mask)
    for r in outers:
        if len(r) >= 3:
            md.polygon([(a - x0, b - y0) for a, b in to_px(r)], fill=255)
    for r in inners:
        if len(r) >= 3:
            md.polygon([(a - x0, b - y0) for a, b in to_px(r)], fill=0)
    img.paste(Image.new('RGB', mask.size, col), (x0, y0), mask)
d = ImageDraw.Draw(img)
for col, width, pts in lc_lines:
    d.line(to_px(pts), fill=col, width=max(1, int(round(width / MPP))))
buf = io.BytesIO()
img.quantize(colors=48, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(buf, 'PNG', optimize=True)
png = buf.getvalue()
lcjs = os.path.join(OUT, 'landcover.js')
with open(lcjs, 'w') as f:
    f.write('BDS_DATA("landcover","png","%s");\n' % base64.b64encode(png).decode())
img.resize((LW // 4, LH // 4)).save(os.path.join(height_dir, 'landcover_preview.png'))
print('landcover', LW, LH, os.path.getsize(lcjs))

# ------------------------------------------------------------------ tessere edifici + alberi
tiles = defaultdict(lambda: {'b': [], 'tr': [], 'rows': []})
TX = int(math.ceil((P.xmax - P.xmin) / TILE)); TZ = int(math.ceil((P.zmax - P.zmin) / TILE))


def tile_of(x, z):
    i = int((x - P.xmin) // TILE); j = int((z - P.zmin) // TILE)
    if 0 <= i < TX and 0 <= j < TZ:
        return (i, j)
    return None


bnames = StrTable()
for b in buildings:
    cx, cz = centroid(b['r'])
    k = tile_of(cx, cz)
    if not k:
        continue
    rec = [b['t'], int(b['h'] * 10), int(b['mh'] * 10), b['l'], b['rs'], bnames(b['n']),
           bnames(b['c']), bnames(b['rc'])] + enc_ring(b['r'])
    tiles[k]['b'].append(rec)
for x, z in trees_pt:
    k = tile_of(x, z)
    if k:
        tiles[k]['tr'] += [q(x), q(z)]
for row in tree_rows:
    k = tile_of(*row[0])
    if k:
        tiles[k]['rows'].append(enc_ring(row))
tile_keys = []
total = 0
for (i, j), tdata in tiles.items():
    used = set()
    for rec in tdata['b']:
        used.update(rec[5:8])
    tdata['s'] = bnames.list  # tabella condivisa (piccola)
    key = 't_%d_%d' % (i, j)
    total += write_js(os.path.join(OUT, 'tiles', key + '.js'), key, tdata)
    tile_keys.append([i, j, len(tdata['b'])])
print('tessere', len(tile_keys), 'byte', total)

# ------------------------------------------------------------------ meta
lm_seen = set()
lm_out = []
for lm in landmarks:
    key = (lm[0], lm[3], round(lm[1] / 50), round(lm[2] / 50))
    if key in lm_seen:
        continue
    lm_seen.add(key)
    lm_out.append(lm)
config_comuni = CFG['comuni']
meta = {
    'proj': P.meta(), 'height': HMETA, 'tile': TILE, 'tilesX': TX, 'tilesZ': TZ, 'tiles': tile_keys,
    'landcover': {'w': LW, 'h': LH, 'mpp': MPP, 'palette': {k: v[1] for k, v in LC.items()}, 'default': LC_DEFAULT},
    'comuni': comuni, 'featured': config_comuni, 'places': places, 'landmarks': lm_out, 'waters': waters,
    'rivers': rivers,
    'source': 'Dati (c) OpenStreetMap contributors, ODbL. Altimetria: Terrarium tiles (Mapzen / AWS Open Data).',
}
print('meta.js', write_js(os.path.join(OUT, 'meta.js'), 'meta', meta), 'landmarks', len(lm_out), 'places', len(places))
