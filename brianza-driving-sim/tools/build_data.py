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
F_AISLE = 512  # corsia interna di un parcheggio

NODE_TAG = {('highway', 'traffic_signals'): 1, ('highway', 'stop'): 2, ('highway', 'give_way'): 3,
            ('highway', 'crossing'): 4, ('highway', 'mini_roundabout'): 5, ('railway', 'level_crossing'): 6,
            ('traffic_calming', 'bump'): 7, ('traffic_calming', 'table'): 7, ('highway', 'speed_camera'): 8,
            ('highway', 'street_lamp'): 9}

def node_code(t):
    """(codice, direzione) dei nodi con segnaletica: direzione 1=forward 2=backward"""
    hw = t.get('highway')
    dv = t.get('direction') or t.get('traffic_signals:direction') or ''
    d = 1 if dv == 'forward' else 2 if dv == 'backward' else 0
    if hw == 'traffic_signals':
        return 1, d
    if hw == 'stop':
        return 2, d
    if hw == 'give_way':
        return 3, d
    if hw == 'crossing':
        cr = t.get('crossing', ''); mk = t.get('crossing:markings', '')
        if cr in ('unmarked', 'no', 'informal') or mk == 'no':
            return 0, 0
        return (10 if cr == 'traffic_signals' or t.get('crossing:signals') == 'yes' else 4), 0
    if hw == 'mini_roundabout':
        return 5, 0
    if t.get('railway') == 'level_crossing':
        return 6, 0
    tc = t.get('traffic_calming')
    if tc in ('bump', 'hump', 'yes', 'cushion'):
        return 7, 0
    if tc == 'table':
        return 11, 0
    if hw in ('turning_circle', 'turning_loop'):
        return 12, 0
    if hw == 'motorway_junction':
        return 13, 0
    return 0, 0


STONE = {'sett', 'cobblestone', 'unhewn_cobblestone', 'paving_stones', 'pebblestone', 'cobblestone:flattened', 'bricks'}


def sidewalk_code(t, rev):
    """0 sconosciuto, 1 entrambi, 2 sinistra, 3 destra, 4 nessuno/mappato a parte"""
    sw = t.get('sidewalk') or ''
    yes = lambda v: v in ('yes', 'both')
    left = sw in ('both', 'left', 'yes') or yes(t.get('sidewalk:both', '')) or yes(t.get('sidewalk:left', ''))
    right = sw in ('both', 'right', 'yes') or yes(t.get('sidewalk:both', '')) or yes(t.get('sidewalk:right', ''))
    if rev:
        left, right = right, left
    if left and right:
        return 1
    if left:
        return 2
    if right:
        return 3
    if sw in ('no', 'none', 'separate') or t.get('sidewalk:both') in ('no', 'separate'):
        return 4
    return 0


names = StrTable()
junctions = {}        # osm id -> (nome, ref) degli svincoli
points = []           # elementi puntuali: (tipo, x, z, testo)
paths = []            # percorsi pedonali/ciclabili: (tipo, larghezza, punti)
barriers = []         # muri, siepi, guardrail: (tipo, altezza, punti)
power_lines = []
parkings = []         # aree amenity=parking
spaces = []           # singoli stalli amenity=parking_space
aisles = []           # corsie service=parking_aisle
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
    'pedestrian': (9, (176, 168, 152)), 'parking_space': (9, (112, 112, 110)),
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
        code, ndir = node_code(t)
        if code:
            node_tags[o.id] = (code, ndir)
            if code == 13:
                junctions[o.id] = (t.get('name', ''), t.get('ref', ''))
        x, z = P.fwd(lat, lon)
        hw = t.get('highway')
        ts = t.get('traffic_sign', '')
        if hw == 'bus_stop':
            points.append((1, x, z, t.get('name', '')))
        elif hw == 'street_lamp':
            points.append((2, x, z, ''))
        elif hw == 'speed_camera':
            points.append((4, x, z, t.get('maxspeed', '')))
        elif 'city_limit' in ts and t.get('name'):
            points.append((3, x, z, t['name']))
        elif ts == 'maxspeed' and parse_speed(t.get('maxspeed')):
            points.append((7, x, z, str(parse_speed(t.get('maxspeed')))))
        elif hw == 'traffic_mirror':
            points.append((8, x, z, ''))
        am = t.get('amenity')
        if am == 'fuel':
            points.append((5, x, z, t.get('brand') or t.get('name') or ''))
        # arredo urbano reale
        elif am == 'bench':
            points.append((10, x, z, t.get('direction', '')))
        elif am in ('waste_basket', 'waste_disposal'):
            points.append((11, x, z, ''))
        elif am == 'bicycle_parking':
            points.append((14, x, z, ''))
        elif am in ('fountain', 'drinking_water'):
            points.append((15, x, z, ''))
        if t.get('barrier') == 'bollard':
            points.append((12, x, z, ''))
        elif t.get('emergency') == 'fire_hydrant':
            points.append((13, x, z, ''))
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
            if t.get('service') == 'drive-through':
                continue
            if t.get('service') == 'parking_aisle':
                flags |= F_AISLE
                aisles.append([P.fwd(l.lat, l.lon) for _, l in pts_ll])
            ids = [r for r, _ in pts_ll]
            for r, l in pts_ll:
                if r not in node_xy:
                    node_xy[r] = P.fwd(l.lat, l.lon)
            if rev:
                ids.reverse()
            oneway_f = bool(flags & F_ONEWAY)
            if oneway_f:
                tf = (t.get('turn:lanes:backward') if rev else None) or t.get('turn:lanes') or t.get('turn:lanes:forward') or ''
                tb = ''
            else:
                tf = t.get('turn:lanes:forward') or ''
                tb = t.get('turn:lanes:backward') or ''
            dest = t.get('destination') or t.get('destination:forward') or ''
            if dest and t.get('destination:ref'):
                dest = t.get('destination:ref') + '|' + dest
            surf_c = 1 if surf in STONE else 0
            lit_c = 0 if not t.get('lit') else (2 if t.get('lit') == 'no' else 1)
            lf, lb = int(parse_float(t.get('lanes:forward'))), int(parse_float(t.get('lanes:backward')))
            if rev:
                lf, lb = lb, lf
            road_ways.append({
                'surf': surf_c, 'sw': sidewalk_code(t, rev), 'lit': lit_c, 'lf': lf, 'lb': lb, 'tf': tf, 'tb': tb, 'dest': dest,
                'ids': ids, 'name': t.get('name', ''), 'ref': t.get('ref', ''), 'cls': cls, 'flags': flags,
                'lanes': int(parse_float(t.get('lanes'))), 'speed': parse_speed(t.get('maxspeed')),
                'layer': int(parse_float(t.get('layer'))) if t.get('layer') else (1 if flags & F_BRIDGE else (-1 if flags & F_TUNNEL else 0)),
                'width': parse_float(t.get('width')), 'osm': o.id,
            })
            continue
        if hw in ('footway', 'cycleway', 'path', 'steps', 'bridleway') and t.get('area') != 'yes':
            if t.get('footway') == 'crossing' or t.get('tunnel') in ('yes', 'building_passage') or t.get('indoor') == 'yes':
                continue
            pts = [P.fwd(l.lat, l.lon) for _, l in pts_ll]
            psurf = t.get('surface', '')
            if hw == 'cycleway':
                kind = 1
            elif hw == 'steps':
                kind = 3
            elif t.get('footway') == 'sidewalk':
                kind = 4
            elif hw in ('path', 'bridleway') and psurf not in ('asphalt', 'paved', 'paving_stones', 'concrete', 'sett'):
                kind = 2
            else:
                kind = 0
            pw = parse_float(t.get('width')) or {0: 1.8, 1: 2.4, 2: 1.2, 3: 1.8, 4: 1.6}[kind]
            paths.append((kind, max(0.8, min(6, pw)), dp_simplify(pts, 0.3), 1 if t.get('bridge') and t.get('bridge') != 'no' else 0))
            continue
        br = t.get('barrier')
        if br in ('wall', 'hedge', 'retaining_wall', 'city_wall', 'guard_rail', 'jersey_barrier'):
            pts = dp_simplify([P.fwd(l.lat, l.lon) for _, l in pts_ll], 0.3)
            kind = {'wall': 0, 'hedge': 1, 'retaining_wall': 2, 'city_wall': 2, 'guard_rail': 3, 'jersey_barrier': 3}[br]
            bh = parse_float(t.get('height')) or {0: 1.9, 1: 1.5, 2: 2.2, 3: 0.8}[kind]
            barriers.append((kind, max(0.4, min(8, bh)), pts))
            continue
        if t.get('power') == 'line':
            power_lines.append([[round(x, 1), round(z, 1)] for x, z in (P.fwd(l.lat, l.lon) for _, l in pts_ll)])
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

        if t.get('amenity') == 'parking' and t.get('parking') not in ('underground', 'multi-storey', 'rooftop', 'carports', 'garage_boxes'):
            for r in outers:
                if len(r) >= 4:
                    parkings.append({'r': r, 'i': [h for h in inners if len(h) >= 4], 'kind': t.get('parking', ''),
                                     'orient': t.get('orientation', ''), 'cap': int(parse_float(t.get('capacity')))})
        elif t.get('amenity') == 'parking_space':
            if len(outers[0]) >= 4:
                spaces.append(outers[0])
        if t.get('amenity') == 'fuel':
            cx, cz = centroid(outers[0])
            points.append((5, cx, cz, t.get('brand') or t.get('name') or ''))
        kind = None
        for k in ('natural', 'landuse', 'leisure', 'amenity', 'water', 'waterway', 'highway'):
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

# ------------------------------------------------------------------ edifici dal DBGT di Regione Lombardia
# Se e' disponibile una cartella con i pacchetti DBGT (config "dbgt_dir" o variabile BDS_DBGT),
# nei comuni coperti le forme OSM vengono sostituite dalle "unita' volumetriche" del DBGT,
# con la loro altezza misurata. Tipologia, nome e colori restano quelli di OSM (per sovrapposizione).
dbgt_comuni = []
DBGT_DIR = os.environ.get('BDS_DBGT') or CFG.get('dbgt_dir') or ''
if DBGT_DIR and not os.path.isabs(DBGT_DIR):
    DBGT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', DBGT_DIR)
if DBGT_DIR and os.path.isdir(DBGT_DIR):
    from collections import Counter
    from shapely.geometry import Polygon as _SP, Point as _Pt
    from shapely.ops import unary_union
    from shapely.prepared import prep as _prep
    from shapely.strtree import STRtree as _Tree
    from dbgt import load_dbgt
    vols, bodies, dinfo = load_dbgt(DBGT_DIR, os.path.join(height_dir, 'dbgt_extract'), P.fwd, bbox)
    print('DBGT: unita volumetriche', len(vols), 'corpi edificati', len(bodies), dict(dinfo.most_common(15)))
    if vols:
        # controllo di qualita' sui dati:
        #  - porzioni di tipo 08 senza altezza: piccole e quasi mai corrispondenti a edifici OSM,
        #    non sono volumi fuori terra -> scartate
        #  - altezze non plausibili per l'impronta (es. 212 m su 13 m2: comignoli/antenne o
        #    errori) -> trattate come mancanti e stimate dalla tipologia
        n_08 = n_bad_h = 0
        clean = []
        for v in vols:
            if v['por'] == '08' and v['h'] <= 0:
                n_08 += 1
                continue
            a = abs(ring_area(v['ring']))
            if v['h'] > 150 or v['h'] > max(30.0, 12 * math.sqrt(max(a, 0.0))):
                v['h'] = 0.0
                n_bad_h += 1
            clean.append(v)
        vols = clean
        print('DBGT: scartate porzioni 08 senza altezza', n_08, '- altezze non plausibili stimate', n_bad_h)
        cpolys = []
        for c in comuni:
            try:
                g = unary_union([_SP(r) for r in c['rings'] if len(r) >= 4]).buffer(0)
                if not g.is_empty:
                    cpolys.append((c['n'], g))
            except Exception:
                pass
        ctree = _Tree([g for _, g in cpolys])
        # comune di ogni volume
        vcom = []
        for v in vols:
            pt = _Pt(*centroid(v['ring']))
            ci = -1
            for i in ctree.query(pt):
                if cpolys[i][1].contains(pt):
                    ci = i
                    break
            vcom.append(ci)
        # piu' file possono coprire lo stesso comune (pacchetto comunale e provinciale, edizioni
        # diverse): per ogni comune si usa un solo file, quello con piu' volumi (il piu' dettagliato)
        per = Counter((ci, v['src']) for ci, v in zip(vcom, vols) if ci >= 0)
        best = {}
        for (ci, src), k in per.items():
            if k > best.get(ci, ('', -1))[1]:
                best[ci] = (src, k)
        dup = sum(1 for ci, v in zip(vcom, vols) if ci >= 0 and v['src'] != best[ci][0])
        if dup:
            for ci in sorted(best):
                others = [(s_, k) for (c_, s_), k in per.items() if c_ == ci and s_ != best[ci][0] and k >= 30]
                if others:
                    print('  %s: uso %s (%d volumi), scarto %s' % (cpolys[ci][0], best[ci][0], best[ci][1], ', '.join('%s (%d)' % o for o in others)))
            keep = [i for i, (ci, v) in enumerate(zip(vcom, vols)) if ci < 0 or v['src'] == best[ci][0]]
            vols = [vols[i] for i in keep]
            vcom = [vcom[i] for i in keep]
            print('DBGT: volumi di altri file nello stesso comune scartati', dup)
        # volumi contenuti per oltre l'80% in un volume piu' alto (porzioni interne): invisibili
        vg = []
        for v in vols:
            try:
                vg.append(_SP(v['ring']).buffer(0))
            except Exception:
                vg.append(None)
        vtree0 = _Tree([g if g is not None else _SP() for g in vg])
        drop = set()
        for i, g in enumerate(vg):
            if g is None or g.is_empty or g.area <= 0:
                drop.add(i); continue
            for j in vtree0.query(g, predicate='intersects'):
                if j != i and vg[j] is not None and vols[j]['h'] > vols[i]['h'] + 0.3 and vg[j].intersection(g).area > 0.8 * g.area:
                    drop.add(i); break
        if drop:
            print('DBGT: volumi interni a volumi piu alti scartati', len(drop))
            vols = [v for i, v in enumerate(vols) if i not in drop]
            vcom = [c_ for i, c_ in enumerate(vcom) if i not in drop]
        cnt = Counter(ci for ci in vcom if ci >= 0)
        # un comune e' "coperto" se la maggior parte dei suoi edifici OSM trova un volume DBGT:
        # cosi' i pochi volumi di confine dei comuni vicini non cancellano gli edifici OSM.
        vtree = _Tree([_SP(v['ring']) for v in vols if len(v['ring']) >= 4])
        osm_n, osm_hit = Counter(), Counter()
        for b in buildings:
            pt = _Pt(*centroid(b['r']))
            for i in ctree.query(pt):
                if cpolys[i][1].contains(pt):
                    osm_n[i] += 1
                    if len(vtree.query(pt.buffer(0.5), predicate='intersects')):
                        osm_hit[i] += 1
                    break
        covered = [i for i, k in cnt.items() if (osm_n[i] and osm_hit[i] / osm_n[i] >= 0.6) or (not osm_n[i] and k >= 30)]
        for i, k in cnt.items():
            if i not in covered and k >= 30:
                print('  DBGT parziale, resta OSM:', cpolys[i][0], '%d/%d edifici OSM corrispondenti' % (osm_hit[i], osm_n[i]))
        dbgt_comuni = sorted(cpolys[i][0] for i in covered)
        cov = _prep(unary_union([cpolys[i][1] for i in covered]).buffer(1.0)) if covered else None
        # indice degli edifici OSM per ereditarne tipologia, nome e colori
        osm_idx = []
        for b in buildings:
            try:
                g = _SP(b['r'])
                if g.is_valid and not g.is_empty:
                    osm_idx.append((g, b))
            except Exception:
                pass
        otree = _Tree([g for g, _ in osm_idx]) if osm_idx else None
        kept = [b for b in buildings if not (cov and cov.contains(_Pt(*centroid(b['r']))))]
        added = 0
        for v in vols:
            r = v['ring']
            if r[0] == r[-1]:
                r = r[:-1]
            r = dp_simplify(r + [r[0]], 0.2)[:-1]
            if len(r) < 3:
                continue
            if ring_area(r) < 0:
                r = r[::-1]
            if abs(ring_area(r)) < 4:
                continue
            pt = _Pt(*centroid(r))
            if not (cov and cov.contains(pt)):
                continue
            src = None
            if otree is not None:
                best = 0
                for i in otree.query(pt):
                    g, b = osm_idx[i]
                    if g.contains(pt) and (src is None or g.area < best):
                        src, best = b, g.area
            h = v['h'] if 0.8 < v['h'] < 250 else 0.0
            kept.append({'r': r, 't': src['t'] if src else 0, 'h': h, 'mh': 0.0, 'l': 0,
                         'rs': src['rs'] if src else 0, 'n': src['n'] if src else '',
                         'c': src['c'] if src else '', 'rc': src['rc'] if src else ''})
            added += 1
        print('DBGT: comuni coperti', len(dbgt_comuni), dbgt_comuni[:20], '- edifici OSM sostituiti',
              len(buildings) - (len(kept) - added), 'volumi DBGT aggiunti', added)
        buildings = kept
elif DBGT_DIR:
    print('DBGT: cartella non trovata', DBGT_DIR)

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

# ------------------------------------------------------------------ stalli dei parcheggi
# Ogni posto auto viene da dati reali, in quest'ordine di affidabilita':
#  1. stalli mappati uno per uno (amenity=parking_space): posizione e orientamento esatti;
#  2. parcheggi con corsie interne (service=parking_aisle): stalli a pettine sui due lati;
#  3. parcheggi lungo strada (parking=street_side/lane o aree strette): fila parallela,
#     a pettine o a spina secondo il tag orientation (o la profondita' dell'area);
#  4. piazzali senza corsie mappate: file doppie separate da corsie da 6 m lungo l'asse maggiore.
from shapely.geometry import Polygon as SPoly, LineString as SLine, Point as SPoint
from shapely.prepared import prep
from shapely.strtree import STRtree

HALF_W = {0: 6.0, 1: 5.0, 2: 4.0, 3: 3.8, 4: 3.5, 5: 3.0, 6: 3.0, 7: 2.8, 8: 2.3, 9: 1.8, 10: 3.0}
road_lines, road_half = [], []
for w in road_ways:
    pts = [node_xy[r] for r in w['ids']]
    if len(pts) >= 2:
        road_lines.append(SLine(pts)); road_half.append(2.75 if w['flags'] & F_AISLE else HALF_W.get(w['cls'], 3.0))
road_tree = STRtree(road_lines)
bpolys = []
for b in buildings:
    try:
        bpolys.append(SPoly(b['r']))
    except Exception:
        pass
btree = STRtree(bpolys)
aisle_lines = [SLine(a) for a in aisles if len(a) >= 2]
aisle_tree = STRtree(aisle_lines) if aisle_lines else None

stalls = []           # (x, z, rotta, larghezza, lunghezza, tipo) tipo 0 = pettine/spina, 1 = in linea
occ = defaultdict(list)
tree_grid = defaultdict(list)   # alberi mappati: niente auto sopra un tronco
for tx, tz in trees_pt:
    tree_grid[(int(tx // 3), int(tz // 3))].append((tx, tz))


def on_tree(x, z, fx, fz):
    for s in (1.5, 0, -1.5):
        px, pz = x + fx * s, z + fz * s
        cx, cz = int(px // 3), int(pz // 3)
        for i in range(cx - 1, cx + 2):
            for j in range(cz - 1, cz + 2):
                for (ox, oz) in tree_grid.get((i, j), ()):
                    if (ox - px) ** 2 + (oz - pz) ** 2 < 1.15:
                        return True
    return False


def free_spot(x, z, mind):
    cx, cz = int(x // 3), int(z // 3)
    for i in range(cx - 1, cx + 2):
        for j in range(cz - 1, cz + 2):
            for (ox, oz) in occ[(i, j)]:
                if (ox - x) ** 2 + (oz - z) ** 2 < mind * mind:
                    return False
    return True


def add_stall(x, z, hd, wd, ln, typ, check=True, pp=None):
    """hd: rotta dell'auto (avanti = sin, cos). Verifica area, strade, edifici, sovrapposizioni."""
    fx, fz = math.sin(hd), math.cos(hd)
    if on_tree(x, z, fx, fz):
        return False
    if check:
        if pp is not None:
            for a, b in ((ln / 2 - 0.3, wd / 2 - 0.2), (ln / 2 - 0.3, -wd / 2 + 0.2), (-ln / 2 + 0.3, wd / 2 - 0.2), (-ln / 2 + 0.3, -wd / 2 + 0.2), (0, 0)):
                if not pp.contains(SPoint(x + fx * a - fz * b, z + fz * a + fx * b)):
                    return False
        pt = SPoint(x, z)
        for i in road_tree.query(pt, predicate='dwithin', distance=7.5):
            if road_lines[i].distance(pt) < road_half[i] + (1.0 if typ == 1 else 1.2):
                return False
        if len(btree.query(pt.buffer(1.0), predicate='intersects')):
            return False
    if not free_spot(x, z, 2.15 if typ == 0 else 2.3):
        return False
    # i due estremi dell'auto non devono cadere su un posto gia' occupato
    occ[(int(x // 3), int(z // 3))].append((x, z))
    for s in (1.4, -1.4):
        occ[(int((x + fx * s) // 3), int((z + fz * s) // 3))].append((x + fx * s, z + fz * s))
    stalls.append((x, z, hd % (2 * math.pi), wd, ln, typ))
    return True


def obb(poly):
    """rettangolo orientato minimo: centro, asse lungo (ux,uz), lunghezza, larghezza"""
    c = list(poly.minimum_rotated_rectangle.exterior.coords)
    e0 = (c[1][0] - c[0][0], c[1][1] - c[0][1]); e1 = (c[2][0] - c[1][0], c[2][1] - c[1][1])
    l0, l1 = math.hypot(*e0), math.hypot(*e1)
    cx = sum(p[0] for p in c[:4]) / 4; cz = sum(p[1] for p in c[:4]) / 4
    if l0 >= l1:
        return cx, cz, e0[0] / (l0 or 1), e0[1] / (l0 or 1), l0, l1
    return cx, cz, e1[0] / (l1 or 1), e1[1] / (l1 or 1), l1, l0


n_src = [0, 0, 0, 0]
# 1) stalli mappati
space_polys = []
for r in spaces:
    try:
        sp = SPoly(r)
        if not sp.is_valid or sp.area < 6 or sp.area > 60:
            continue
        cx, cz, ux, uz, ln, wd = obb(sp)
    except Exception:
        continue
    if wd < 1.7 or wd > 4.2 or ln < 3.5 or ln > 8.5:
        continue
    space_polys.append(sp)
    # in linea se l'asse lungo e' parallelo alla strada adiacente
    typ = 0
    pt = SPoint(cx, cz)
    best, bd = None, 9.0
    for i in road_tree.query(pt, predicate='dwithin', distance=9):
        d = road_lines[i].distance(pt)
        if d < bd:
            bd, best = d, road_lines[i]
    if best is not None and bd < wd / 2 + 4.5:
        s0 = best.project(pt); a = best.interpolate(max(0, s0 - 1)); b = best.interpolate(min(best.length, s0 + 1))
        dl = math.hypot(b.x - a.x, b.y - a.y) or 1
        if abs((b.x - a.x) / dl * ux + (b.y - a.y) / dl * uz) > 0.85:
            typ = 1
    if add_stall(cx, cz, math.atan2(ux, uz), min(wd, 2.6), min(ln, 6.0), typ, check=False):
        n_src[0] += 1
space_tree = STRtree(space_polys) if space_polys else None

for pk in parkings:
    try:
        poly = SPoly(pk['r'], pk['i'])
        if not poly.is_valid:
            poly = poly.buffer(0)
        if poly.is_empty or poly.area < 12 or poly.geom_type != 'Polygon':
            continue
    except Exception:
        continue
    # gia' mappato stallo per stallo?
    if space_tree is not None:
        inside = [i for i in space_tree.query(poly, predicate='intersects')]
        if len(inside) >= 3 or (inside and poly.area < 80):
            continue
    pp = prep(poly.buffer(0.35))
    cx, cz, ux, uz, L, Wd = obb(poly)
    before = len(stalls)
    orient = pk['orient']
    ais = [aisle_lines[i] for i in aisle_tree.query(poly, predicate='intersects')] if aisle_tree is not None else []
    ais = [a.intersection(poly.buffer(1.0)) for a in ais]
    ais = [g for a in ais for g in (a.geoms if hasattr(a, 'geoms') else [a]) if g.geom_type == 'LineString' and g.length > 4]
    street = pk['kind'] in ('street_side', 'lane') or (not ais and Wd < 7.5)
    if ais and not street:
        # 2) a pettine (o a spina) sui due lati delle corsie
        ang = math.radians(60) if orient == 'diagonal' else math.pi / 2
        step = 2.9 if orient == 'diagonal' else 2.5
        for a in ais:
            n = int(a.length // step)
            for k in range(n):
                s0 = (a.length - n * step) / 2 + (k + 0.5) * step
                p0 = a.interpolate(s0); p1 = a.interpolate(min(a.length, s0 + 0.5)); p9 = a.interpolate(max(0, s0 - 0.5))
                dx, dz = p1.x - p9.x, p1.y - p9.y
                dl = math.hypot(dx, dz) or 1; dx /= dl; dz /= dl
                for side in (1, -1):
                    ox, oz = -dz * side, dx * side              # verso l'esterno della corsia
                    x, z = p0.x + ox * 5.3, p0.y + oz * 5.3
                    hx = ox * math.sin(ang) + dx * math.cos(ang); hz = oz * math.sin(ang) + dz * math.cos(ang)
                    if add_stall(x, z, math.atan2(hx, hz), 2.5, 5.0, 0, pp=pp):
                        n_src[1] += 1
    elif street:
        # 3) lungo strada: allineati alla via piu' vicina
        pt = poly.representative_point()
        best, bd = None, 14.0
        for i in road_tree.query(poly, predicate='dwithin', distance=12):
            d = road_lines[i].distance(poly)
            ln_in = road_lines[i].intersection(poly.buffer(12)).length
            if ln_in > 3 and d - ln_in * 0.01 < bd:
                bd, best = d - ln_in * 0.01, road_lines[i]
        if not orient:
            orient = 'parallel' if Wd < 3.7 else 'perpendicular'
        step, depth, wd_s, typ = {'parallel': (5.8, 2.3, 2.3, 1), 'diagonal': (2.9, 5.0, 2.5, 0)}.get(orient, (2.5, 5.0, 2.5, 0))
        if best is not None:
            near = best.intersection(poly.buffer(14))
            parts = [g for g in (near.geoms if hasattr(near, 'geoms') else [near]) if g.geom_type == 'LineString' and g.length > 2]
            for a in parts:
                n = int(a.length // step)
                for k in range(n):
                    s0 = (a.length - n * step) / 2 + (k + 0.5) * step
                    p0 = a.interpolate(s0); p1 = a.interpolate(min(a.length, s0 + 0.5)); p9 = a.interpolate(max(0, s0 - 0.5))
                    dx, dz = p1.x - p9.x, p1.y - p9.y
                    dl = math.hypot(dx, dz) or 1; dx /= dl; dz /= dl
                    for side in (1, -1):
                        ox, oz = -dz * side, dx * side
                        # intervallo di scostamenti laterali che cade dentro l'area
                        o0 = o1 = None
                        o = 1.2
                        while o < 16:
                            if pp.contains(SPoint(p0.x + ox * o, p0.y + oz * o)):
                                if o0 is None:
                                    o0 = o
                                o1 = o
                            elif o0 is not None:
                                break
                            o += 0.4
                        if o0 is None or o1 - o0 < depth * 0.55:
                            continue
                        rows = max(1, min(2, int((o1 - o0 + 0.6) // depth)))
                        for rw in range(rows):
                            c = (o0 + o1) / 2 if rows == 1 else o0 + depth * (rw + 0.5)
                            x, z = p0.x + ox * c, p0.y + oz * c
                            if orient == 'parallel':
                                hd = math.atan2(dx * side, dz * side)   # nel verso di marcia di quel lato
                            elif orient == 'diagonal':
                                hd = math.atan2(ox * 0.866 + dx * side * 0.5, oz * 0.866 + dz * side * 0.5)
                            else:
                                hd = math.atan2(ox, oz)
                            if add_stall(x, z, hd, wd_s, 5.8 if typ else 5.0, typ, pp=pp):
                                n_src[2] += 1
        if len(stalls) == before and Wd >= 2.0:
            # nessuna via vicina: fila lungo l'asse dell'area
            n = int(L // step)
            for k in range(n):
                t0 = -L / 2 + (L - n * step) / 2 + (k + 0.5) * step
                hd = math.atan2(ux, uz) if orient == 'parallel' else math.atan2(-uz, ux)
                if add_stall(cx + ux * t0, cz + uz * t0, hd, wd_s, 5.8 if typ else 5.0, typ, pp=pp):
                    n_src[2] += 1
    else:
        # 4) piazzale: file a pettine lungo l'asse maggiore, corsie da 6 m
        vx, vz = -uz, ux
        rows, v, first = [], -Wd / 2 + 2.9, True
        while v < Wd / 2 - 2.4:
            rows.append((v, 1 if first else -1))            # la prima fila guarda la corsia successiva
            if not first and v + 5.0 < Wd / 2 - 2.4:
                rows.append((v + 5.0, 1)); v += 5.0
            v += 5.0 + 6.0
            first = False
        n = int(L // 2.5)
        for (v, face) in rows:
            for k in range(n):
                t0 = -L / 2 + (L - n * 2.5) / 2 + (k + 0.5) * 2.5
                if add_stall(cx + ux * t0 + vx * v, cz + uz * t0 + vz * v, math.atan2(vx * face, vz * face), 2.5, 5.0, 0, pp=pp):
                    n_src[3] += 1
    # capienza dichiarata: non superarla
    made = len(stalls) - before
    if pk['cap'] and made > pk['cap'] * 1.15 and pk['cap'] > 0:
        keep = set(int(i * made / pk['cap']) for i in range(pk['cap']))
        chunk = stalls[before:]
        del stalls[before:]
        stalls.extend(sv for i, sv in enumerate(chunk) if i in keep)
print('stalli', len(stalls), 'mappati/corsie/strada/piazzale', n_src, 'aree', len(parkings))

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
                      w['lanes'], w['speed'], w['layer'], int(round(w['width'] * 10)),
                      w['surf'], w['sw'], w['lit'], w['lf'], w['lb'], names(w['tf']), names(w['tb']), names(w['dest'])] + w['n'])
ntags = []
mj = []
for r, (code, ndir) in node_tags.items():
    if r in node_index:
        ntags += [node_index[r], code, ndir]
        if code == 13 and r in junctions:
            mj += [node_index[r], names(junctions[r][0]), names(junctions[r][1])]
dh_flat = []
for r, v in dh.items():
    if v > 0.05 and r in node_index:
        dh_flat += [node_index[r], int(round(v * 10))]

sz = write_js(os.path.join(OUT, 'roads.js'), 'roads', {
    'names': names.list, 'nodes': nodes_flat, 'ways': ways_flat, 'ntags': ntags, 'dh': dh_flat,
    'rails': rails, 'mj': mj, 'wayHead': 16})
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
# aree edificate non mappate come landuse: attorno agli edifici reali il terreno
# "non classificato" diventa tessuto urbano (serve anche a marciapiedi e lampioni)
mask = Image.new('L', (LW, LH), 0)
md = ImageDraw.Draw(mask)
bw = max(3, int(round(46 / MPP)))
for b in buildings:
    pp = to_px(b['r'])
    md.polygon(pp, fill=255)
    md.line(pp + [pp[0]], fill=255, width=bw)
arr = np.array(img)
isdef = np.all(arr == np.array(LC_DEFAULT, np.uint8), axis=2)
arr[isdef & (np.asarray(mask) > 0)] = LC['residential'][1]
img = Image.fromarray(arr)
del arr, mask
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
tiles = defaultdict(lambda: {'b': [], 'tr': [], 'rows': [], 'pa': [], 'ba': [], 'pt': [], 'pk': []})
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
for kind, pw, pts, brg in paths:
    k = tile_of(*pts[len(pts) // 2])
    if k and len(pts) >= 2:
        tiles[k]['pa'].append([kind, int(pw * 10), brg] + enc_ring(pts))
for kind, bh, pts in barriers:
    k = tile_of(*pts[len(pts) // 2])
    if k and len(pts) >= 2:
        tiles[k]['ba'].append([kind, int(bh * 10)] + enc_ring(pts))
for x, z, hd, wd, ln, typ in stalls:
    k = tile_of(x, z)
    if k:
        tiles[k]['pk'] += [q(x), q(z), int(round(math.degrees(hd) * 10)) % 3600, int(round(wd * 10)), int(round(ln * 10)) * 2 + typ]
for kind, x, z, text in points:
    k = tile_of(x, z)
    if k:
        tiles[k]['pt'].append([kind, q(x), q(z), bnames(text)])
tile_keys = []
total = 0
for (i, j), tdata in tiles.items():
    # tabella stringhe locale alla tessera
    local = StrTable()
    for rec in tdata['b']:
        for c in (5, 6, 7):
            rec[c] = local(bnames.list[rec[c]])
    for rec in tdata['pt']:
        rec[3] = local(bnames.list[rec[3]])
    tdata['s'] = local.list
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
    'comuni': comuni, 'featured': config_comuni, 'dbgt': dbgt_comuni, 'places': places, 'landmarks': lm_out, 'waters': waters,
    'rivers': rivers, 'power': power_lines,
    'source': 'Dati (c) OpenStreetMap contributors, ODbL. Altimetria: Terrarium tiles (Mapzen / AWS Open Data).'
              + (' Edifici: DBGT Regione Lombardia (comuni: ' + ', '.join(dbgt_comuni) + ').' if dbgt_comuni else ''),
}
print('meta.js', write_js(os.path.join(OUT, 'meta.js'), 'meta', meta), 'landmarks', len(lm_out), 'places', len(places))
