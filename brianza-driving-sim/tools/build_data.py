#!/usr/bin/env python3
"""Step 3: converte l'estratto OpenStreetMap della Brianza nei dati del gioco.

Produce in una cartella di stadio (default <out_data_dir>/../.stage, oppure $BDS_STAGE) i dati
completi, che tools/bake.mjs poi taglia a tessere per il gioco:
  meta.js        proiezione, comuni (confini reali), localita', punti di interesse,
                 laghi, fiumi, ferrovie
  roads.js       rete stradale reale (vie OSM con nome, classe, sensi unici,
                 limiti, corsie, ponti/gallerie, semafori, stop, precedenze)
  landcover.js   immagine della copertura del suolo (boschi, prati, campi,
                 aree urbane/industriali, acqua) proiettata sul terreno
  far.js         edifici semplificati per la vista da lontano
  height.js      quote del terreno (griglia DBGT/Terrarium corretta)
e direttamente in <out_data_dir>:
  tiles/*.js     edifici reali (impronte OSM + altezza/piani) e alberi, per
                 tessere di 1 km caricate in streaming

Uso: python3 build_data.py <estratto.osm.pbf> <bbox.json> <height_dir> <out_data_dir>
"""
import io, json, math, os, sys, base64
from collections import Counter, defaultdict
import numpy as np
import osmium
from PIL import Image, ImageDraw
from common import Proj, CFG, write_js

pbf, bbox_json, height_dir, OUT = sys.argv[1:5]
STAGE = os.environ.get('BDS_STAGE') or os.path.join(OUT, '..', '.stage')


def rss(tag):
    """memoria del processo (MB), per seguire i passaggi pesanti"""
    try:
        kb = int(next(l for l in open('/proc/self/status') if l.startswith('VmRSS')).split()[1])
        print('  [memoria] %s: %d MB' % (tag, kb // 1024), flush=True)
    except Exception:
        pass
os.makedirs(STAGE, exist_ok=True)
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
barriers = []         # muri, siepi, guardrail, recinzioni: (tipo, altezza, punti)
fence_areas = []      # aree di solito recintate (scuole, cimiteri, campi sportivi...): (tipo, altezza, anello)
gate_nodes = {}       # osm id -> dict del cancello (nodi barrier=gate/lift_gate/...)
gate_ctx = {}         # osm id -> contesto dalla via che lo contiene
gate_lines = []       # cancelli mappati come linea (barrier=gate su una via)
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
    # superfici dal DBGT
    'asphalt': (9, (104, 104, 106)), 'yard': (9, (168, 162, 148)), 'cycleway': (9, (152, 98, 88)),
    'flowerbed': (9, (76, 126, 56)), 'island': (9, (110, 138, 88)), 'clay': (9, (178, 106, 74)),
    'running_track': (9, (170, 90, 72)), 'pool': (9, (78, 160, 200)), 'solar': (9, (46, 56, 80)),
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


GATE_KIND = {'gate': 0, 'swing_gate': 0, 'hampshire_gate': 0, 'wicket_gate': 3, 'kissing_gate': 3,
             'sliding_gate': 1, 'lift_gate': 2, 'chain': 4}
GATE_W = {'service': 3.6, 'track': 3.2, 'footway': 1.3, 'path': 1.3, 'cycleway': 2.2, 'bridleway': 2,
          'pedestrian': 3.5, 'steps': 1.4, 'living_street': 5, 'residential': 6, 'unclassified': 6}


def gate_access(t):
    """1 = chiuso/privato, -1 = esplicitamente aperto, 0 = non indicato"""
    a = t.get('access') or t.get('motor_vehicle') or t.get('vehicle')
    if t.get('locked') == 'yes' or a in ('private', 'no'):
        return 1
    if t.get('locked') == 'no' or a in ('yes', 'permissive', 'destination', 'customers', 'public'):
        return -1
    return 0


def gate_context(r, t, pts_ll, i):
    """Direzione e tipo della via che passa per il cancello (le strade hanno la precedenza sulle recinzioni)."""
    hw = t.get('highway')
    if not hw and not t.get('barrier'):
        return
    prio = 2 if hw else 1
    old = gate_ctx.get(r)
    if old and old['prio'] >= prio:
        return
    a = pts_ll[max(0, i - 1)][1]; b = pts_ll[min(len(pts_ll) - 1, i + 1)][1]
    ax, az = P.fwd(a.lat, a.lon); bx, bz = P.fwd(b.lat, b.lon)
    if math.hypot(bx - ax, bz - az) < 0.05:
        return
    ctx = {'prio': prio, 'dx': bx - ax, 'dz': bz - az, 'hw': hw or '', 'acc': gate_access(t),
           'w': parse_float(t.get('width')) or GATE_W.get(hw, 7 if hw else 3.2),
           'drive': bool(hw) and hw in ROAD_CLASS and hw not in ('track', 'pedestrian') and t.get('service') not in (
               'driveway', 'parking_aisle') and gate_access(t) < 1,
           'foot': hw in ('footway', 'path', 'cycleway', 'steps', 'bridleway')}
    gate_ctx[r] = ctx


def fenced_area(t):
    """(tipo di recinzione, altezza) per le aree che nella realta' sono quasi sempre recintate,
    oppure None. Tipi come le recinzioni: 0 muro, 4 cancellata su muretto, 5 rete, 7 ringhiera."""
    am, le, lu = t.get('amenity'), t.get('leisure'), t.get('landuse')
    if am in ('school', 'kindergarten', 'college'):
        return 4, 1.8
    if lu == 'cemetery' or am == 'grave_yard':
        return 0, 2.4
    if t.get('power') == 'substation' or t.get('man_made') in ('wastewater_plant', 'water_works'):
        return 5, 2.2
    if le == 'pitch' and t.get('sport') in ('soccer', 'tennis', 'basketball', 'multi', 'volleyball', 'padel', 'five-a-side', 'futsal'):
        return 5, 3.0 if t.get('sport') in ('tennis', 'padel') else 2.2
    if le in ('stadium', 'sports_centre', 'track'):
        return 5, 2.2
    if le == 'playground':
        return 7, 1.0
    if le == 'dog_park':
        return 5, 1.5
    if le == 'swimming_pool' and t.get('access') not in ('private',):
        return 5, 1.6
    return None


def split_at_gates(pts_ll):
    """Spezza muri e recinzioni in corrispondenza dei cancelli lasciando il varco."""
    pts = [(r, P.fwd(l.lat, l.lon)) for r, l in pts_ll]
    pieces, cur = [], []
    for i, (r, p) in enumerate(pts):
        g = gate_nodes.get(r)
        if not g:
            cur.append(p)
            continue
        half = (g['w'] or (1.1 if g['k'] == 3 else 3.4)) / 2 + 0.25
        if cur:   # chiude il tratto prima del cancello
            q = cur[-1]; d = math.dist(q, p)
            if d > half:
                cur.append((p[0] + (q[0] - p[0]) * half / d, p[1] + (q[1] - p[1]) * half / d))
            pieces.append(cur)
        cur = []
        if i + 1 < len(pts):   # riapre dopo il cancello
            q = pts[i + 1][1]; d = math.dist(q, p)
            if d > half:
                cur = [(p[0] + (q[0] - p[0]) * half / d, p[1] + (q[1] - p[1]) * half / d)]
    if cur:
        pieces.append(cur)
    return [c for c in pieces if len(c) >= 2]


def seg_cells_g(a, b, cell):
    x0, x1 = sorted((a[0], b[0])); z0, z1 = sorted((a[1], b[1]))
    for i in range(int(math.floor(x0 / cell)), int(math.floor(x1 / cell)) + 1):
        for j in range(int(math.floor(z0 / cell)), int(math.floor(z1 / cell)) + 1):
            yield (i, j)


def clip_water(outers, inners):
    """Ritaglia uno specchio d'acqua sull'area della mappa (con 300 m di margine).
    Restituisce [(anelli esterni, fori)]: un elemento per ogni pezzo che resta."""
    xs = [p[0] for r in outers for p in r]; zs = [p[1] for r in outers for p in r]
    m = 300
    if min(xs) >= P.xmin - m and max(xs) <= P.xmax + m and min(zs) >= P.zmin - m and max(zs) <= P.zmax + m:
        return [(outers, inners)]
    from shapely.geometry import Polygon as _WP, box as _box
    g = None
    for r in outers:
        if len(r) >= 4:
            try:
                p_ = _WP(r).buffer(0)
                g = p_ if g is None else g.union(p_)
            except Exception:
                pass
    if g is None:
        return []
    for r in inners:
        if len(r) >= 4:
            try:
                g = g.difference(_WP(r).buffer(0))
            except Exception:
                pass
    g = g.intersection(_box(P.xmin - m, P.zmin - m, P.xmax + m, P.zmax + m))
    polys = [g] if g.geom_type == 'Polygon' else [q for q in getattr(g, 'geoms', []) if q.geom_type == 'Polygon']
    return [([list(q.exterior.coords)[:-1]], [list(h.coords)[:-1] for h in q.interiors]) for q in polys if q.area >= 1500]


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
        gk = GATE_KIND.get(t.get('barrier'))
        if gk is not None:
            gate_nodes[o.id] = {'k': gk, 'x': x, 'z': z, 'acc': gate_access(t), 'w': parse_float(t.get('width') or t.get('maxwidth'))}
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
        if gate_nodes:
            for gi, (r, _) in enumerate(pts_ll):
                if r in gate_nodes:
                    gate_context(r, t, pts_ll, gi)
        if t.get('barrier') in GATE_KIND and len(pts_ll) <= 4:
            gp = [P.fwd(l.lat, l.lon) for _, l in pts_ll]
            if math.dist(gp[0], gp[-1]) < 14:
                gate_lines.append((GATE_KIND[t['barrier']], gp[0], gp[-1], gate_access(t)))
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
        if br in ('wall', 'hedge', 'retaining_wall', 'city_wall', 'guard_rail', 'jersey_barrier', 'fence', 'handrail'):
            kind = {'wall': 0, 'hedge': 1, 'retaining_wall': 2, 'city_wall': 2, 'guard_rail': 3, 'jersey_barrier': 3,
                    'handrail': 7}.get(br)
            if br == 'fence':   # 4 cancellata su muretto, 5 rete metallica, 6 staccionata in legno
                ft = t.get('fence_type', '')
                kind = 5 if ft in ('chain_link', 'wire', 'barbed_wire', 'electric', 'mesh', 'metal_bars') else 6 if ft in (
                    'wood', 'split_rail', 'pole', 'hedge_bank') else 4
            bh = parse_float(t.get('height')) or {0: 1.9, 1: 1.5, 2: 2.2, 3: 0.8, 4: 1.7, 5: 1.8, 6: 1.2, 7: 1.0}[kind]
            for piece in split_at_gates(pts_ll):
                pts = dp_simplify(piece, 0.3)
                if len(pts) >= 2:
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

        fa = fenced_area(t)
        if fa and t.get('fenced') != 'no' and t.get('barrier') is None:
            for r in outers:
                if len(r) >= 4 and 60 < abs(ring_area(r)) and len(r) < 400:
                    fence_areas.append((fa[0], fa[1], r))

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
                    # i laghi grandi (Como) escono dalla mappa: si tiene solo la parte dentro l'area
                    for wo, wi in clip_water(outers, inners):
                        waters.append({
                            'n': t.get('name', ''), 'a': round(area),
                            'o': [[[round(x, 1), round(z, 1)] for x, z in dp_simplify(r, 1.0)] for r in wo],
                            'i': [[[round(x, 1), round(z, 1)] for x, z in dp_simplify(r, 1.0)] for r in wi]})
rss('dopo lettura OSM')
print('oggetti', n_obj, 'vie', len(road_ways), 'nodi strada', len(node_xy), 'edifici', len(buildings),
      'landcover', len(landcover_polys), 'alberi', len(trees_pt), 'ferrovie', len(rails), 'acque', len(waters))

# ------------------------------------------------------------------ edifici dal DBGT di Regione Lombardia
# Se e' disponibile una cartella con i pacchetti DBGT (config "dbgt_dir" o variabile BDS_DBGT),
# nei comuni coperti le forme OSM vengono sostituite dalle "unita' volumetriche" del DBGT,
# con la loro altezza misurata. Tipologia, nome e colori restano quelli di OSM (per sovrapposizione).
dbgt_comuni = []
dets = {}                          # dettagli dell'ambiente dal DBGT (vedi sotto)
alti = {'pts': [], 'roads': []}   # altimetria del DBGT (punti a terra, assi stradali con quota)
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
    vols, bodies, dinfo, alti, dets = load_dbgt(DBGT_DIR, os.path.join(height_dir, 'dbgt_extract'), P.fwd, bbox)
    # la quota del piede di ogni edificio e' un punto del terreno in piu'
    alti['bld'] = [centroid(v['ring']) + (v['z0'],) for v in vols if v.get('z0')]
    rss('dopo load_dbgt')
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

def min_rect(pts):
    """Rettangolo orientato di area minima attorno a un poligono: (cx, cz, mezza lunghezza,
    mezza larghezza, angolo dell'asse lungo). Calibri rotanti sull'inviluppo convesso."""
    P_ = sorted(set((round(x, 2), round(z, 2)) for x, z in pts))
    if len(P_) < 3:
        return None

    def half(seq):
        h = []
        for p_ in seq:
            while len(h) >= 2 and (h[-1][0] - h[-2][0]) * (p_[1] - h[-2][1]) - (h[-1][1] - h[-2][1]) * (p_[0] - h[-2][0]) <= 0:
                h.pop()
            h.append(p_)
        return h[:-1]
    hull = half(P_) + half(P_[::-1])
    if len(hull) < 3:
        return None
    best = None
    for i in range(len(hull)):
        ax, az = hull[i]; bx, bz = hull[(i + 1) % len(hull)]
        L = math.hypot(bx - ax, bz - az)
        if L < 1e-6:
            continue
        ux, uz = (bx - ax) / L, (bz - az) / L
        us = [(x - ax) * ux + (z - az) * uz for x, z in hull]; vs = [-(x - ax) * uz + (z - az) * ux for x, z in hull]
        u0, u1, v0, v1 = min(us), max(us), min(vs), max(vs)
        area = (u1 - u0) * (v1 - v0)
        if best is None or area < best[0]:
            cu, cv = (u0 + u1) / 2, (v0 + v1) / 2
            best = (area, ax + ux * cu - uz * cv, az + uz * cu + ux * cv, (u1 - u0) / 2, (v1 - v0) / 2, math.atan2(ux, uz))
    if best is None:
        return None
    _, cx_, cz_, hu, hv, ang = best
    if hv > hu:
        hu, hv, ang = hv, hu, ang + math.pi / 2
    return cx_, cz_, hu, hv, ang


# ------------------------------------------------------------------ dettagli dell'ambiente dal DBGT
# Alberi isolati, filari e siepi, recinzioni, muri di sostegno, superfici (carreggiate, marciapiedi,
# ciclabili, cortili, aree verdi, impianti sportivi, isole di traffico), manufatti industriali e pali.
# Dove il DBGT c'e' sostituisce i doppioni OSM; i codici sono quelli del Catalogo dei dati
# territoriali (D.M. 10/11/2011).
# recinzione (EL_DIV_TY) -> (tipo come le barriere OSM, altezza): 0 muro, 1 siepe, 4 cancellata
# su muretto, 5 rete metallica, 6 staccionata
# '95' (altro) e' quasi meta' degli elementi nei pacchetti provinciali: muretto basso, il caso piu' comune
DIV_KIND = {'02': (4, 1.7), '04': (5, 1.5), '13': (5, 1.8), '17': (4, 1.6), '18': (6, 1.2), '19': (1, 1.5), '95': (0, 1.2)}
# superfici -> nome della copertura del suolo e priorita' di disegno (sopra quelle OSM, sotto l'acqua)
SURF_PRIO = {'asphalt': 9.1, 'yard': 9.2, 'pedestrian': 9.3, 'cemetery': 9.3, 'cycleway': 9.4, 'garden': 9.5, 'grass': 9.5,
             'park': 9.5, 'scrub': 9.5, 'flowerbed': 9.6, 'island': 9.6, 'pitch': 9.7, 'clay': 9.7, 'running_track': 9.7,
             'pool': 9.8, 'solar': 9.8, 'water': 9.8}


def _surf_class(kind, ty):
    ty = str(ty or '')
    if kind == 'veh':
        return 'asphalt'
    if kind == 'ped':
        return 'pedestrian'
    if kind == 'cyc':
        return 'cycleway'
    if kind == 'yard':
        return 'cemetery' if ty == '10' else 'yard'
    if kind == 'green':
        return {'02': 'grass', '03': 'park', '04': 'flowerbed', '07': 'scrub'}.get(ty, 'garden' if ty.startswith('01') else 'grass')
    if kind == 'sport':
        if ty.startswith('01'):
            return 'pool'
        if ty == '0202':
            return 'clay'
        if ty.startswith('08'):
            return 'running_track'
        return 'pedestrian' if ty == '15' else 'pitch'
    if kind == 'isl':
        return {'01': 'island', '02': 'island', '03': 'grass', '12': 'pedestrian'}.get(ty)
    if kind == 'ind':
        return {'11': 'water', '0802': 'solar', '0803': 'solar', '08': 'solar'}.get(ty)
    return None


def _centerline(ring):
    """Linea mediana di un poligono stretto e lungo (muro di sostegno): media dei due lati tra le
    estremita' del rettangolo minimo."""
    r = ring[:-1] if ring[0] == ring[-1] else ring
    mr = min_rect(r)
    if not mr or len(r) < 4:
        return None
    cx, cz, hu, hv, ang = mr
    if hv > 2.5 or hu < 1.5:
        return None
    ux, uz = math.sin(ang), math.cos(ang)
    ends = [(cx - ux * hu, cz - uz * hu), (cx + ux * hu, cz + uz * hu)]
    ia = min(range(len(r)), key=lambda i: math.dist(r[i], ends[0]))
    ib = min(range(len(r)), key=lambda i: math.dist(r[i], ends[1]))
    if ia == ib:
        return [ends[0], ends[1]]
    n = len(r)
    c1 = [r[(ia + k) % n] for k in range((ib - ia) % n + 1)]
    c2 = [r[(ia - k) % n] for k in range((ia - ib) % n + 1)]

    def resample(c, m):
        cum = [0.0]
        for a, b in zip(c, c[1:]):
            cum.append(cum[-1] + math.dist(a, b))
        out, k = [], 0
        for i in range(m):
            s = cum[-1] * i / (m - 1)
            while k < len(c) - 2 and cum[k + 1] < s:
                k += 1
            L = (cum[k + 1] - cum[k]) or 1e-9
            t = min(1.0, max(0.0, (s - cum[k]) / L))
            out.append((c[k][0] + (c[k + 1][0] - c[k][0]) * t, c[k][1] + (c[k + 1][1] - c[k][1]) * t))
        return out
    m = max(2, int(2 * hu / 2) + 1)
    if len(c1) < 2 or len(c2) < 2:
        return [ends[0], ends[1]]
    a, b = resample(c1, m), resample(c2, m)
    return dp_simplify([((p[0] + q_[0]) / 2, (p[1] + q_[1]) / 2) for p, q_ in zip(a, b)], 0.2)


rss('prima dei dettagli')
if dets:
    from shapely.geometry import LineString as _DL, Point as _DP, Polygon as _DPg
    from shapely.strtree import STRtree as _DT
    dstat = Counter()
    # alberi: quelli del DBGT sostituiscono gli alberi OSM entro 3 m
    dt = [(round(p[0][0], 1), round(p[0][1], 1)) for _, p in dets.get('tree', []) if p]
    if dt:
        tt = _DT([_DP(*p) for p in dt])
        before = len(trees_pt)
        trees_pt = [p for p in trees_pt if not len(tt.query(_DP(*p).buffer(3.0)))] + dt
        dstat['alberi'] = len(dt); dstat['alberi OSM doppi tolti'] = before - (len(trees_pt) - len(dt))
    # filari di alberi e siepi
    new_bar = []
    for ty, pts in dets.get('row', []):
        if len(pts) < 2:
            continue
        if ty == '01':
            tree_rows.append([(round(x, 1), round(z, 1)) for x, z in pts]); dstat['filari'] += 1
        else:
            new_bar.append((1, 1.5, dp_simplify(pts, 0.2))); dstat['siepi'] += 1
    # recinzioni e muri di cinta
    for ty, pts in dets.get('div', []):
        if len(pts) >= 2:
            k_, h_ = DIV_KIND.get(ty, (0, 1.7))
            new_bar.append((k_, h_, dp_simplify(pts, 0.2)))
    # muri di sostegno: linea mediana del poligono
    for ty, ring in dets.get('wall', []):
        if ty in ('04', '06', '03', '05', '95') and len(ring) >= 4:
            cl = _centerline(ring)
            if cl and len(cl) >= 2:
                new_bar.append((2, 1.6, cl)); dstat['muri di sostegno'] += 1
    if new_bar:
        # mai attraverso la carreggiata (errori o varchi non disegnati): si taglia dove passa una strada
        rb = []
        for w in road_ways:
            pts_ = [node_xy[r] for r in w['ids']]
            if len(pts_) >= 2 and not (w['flags'] & (F_BRIDGE | F_TUNNEL)):
                rb.append(_DL(pts_).buffer((w['width'] or 5.0) / 2 + 0.4, cap_style=2))
        rtree = _DT(rb)
        cut = []
        for k_, h_, pts in new_bar:
            line = _DL(pts)
            near = [rb[i] for i in rtree.query(line)]
            g_ = line
            for o_ in near:
                if g_.is_empty:
                    break
                g_ = g_.difference(o_)
            for piece in ([g_] if g_.geom_type == 'LineString' else getattr(g_, 'geoms', [])):
                if piece.geom_type == 'LineString' and piece.length >= 1.0:
                    cut.append((k_, h_, list(piece.coords)))
        # recinzioni e muri OSM gia' presenti nel DBGT (entro 1,5 m per oltre meta' della lunghezza): tolti
        db_ = [_DL(p).buffer(1.5) for _, _, p in cut]
        dtree = _DT(db_)
        keep, gone = [], 0
        for k_, h_, pts in barriers:
            if k_ == 3 or len(pts) < 2:       # guardrail: restano
                keep.append((k_, h_, pts)); continue
            line = _DL(pts)
            cand = [db_[i] for i in dtree.query(line)]
            cov = 0.0
            if cand:
                rest = line
                for c_ in cand:
                    rest = rest.difference(c_)
                    if rest.is_empty:
                        break
                cov = 1 - rest.length / max(line.length, 1e-6)
            if cov > 0.5:
                gone += 1
            else:
                keep.append((k_, h_, pts))
        barriers[:] = keep + cut
        dstat['recinzioni e muri'] = len(cut); dstat['recinzioni OSM doppie tolte'] = gone
    # superfici nella mappa dei colori del terreno
    for kind in ('veh', 'ped', 'cyc', 'yard', 'green', 'sport', 'isl', 'ind'):
        for ty, ring in dets.get(kind, []):
            cls = _surf_class(kind, ty)
            if not cls or len(ring) < 4:
                continue
            landcover_polys.append((SURF_PRIO[cls], LC[cls][1], [ring], []))
            dstat['superfici ' + cls] += 1
    # manufatti industriali come piccoli edifici (se non ci sono gia')
    if dets.get('ind'):
        bt = _DT([_DPg(b['r']) for b in buildings if len(b['r']) >= 3])
        for ty, ring in dets['ind']:
            if _surf_class('ind', ty) or len(ring) < 4 or ty in ('04', '15'):
                continue
            r = ring[:-1] if ring[0] == ring[-1] else ring
            r = dp_simplify(r + [r[0]], 0.15)[:-1]
            if len(r) < 3:
                continue
            if ring_area(r) < 0:
                r = r[::-1]
            area = abs(ring_area(r))
            if area < 1.5:
                continue
            c_ = _DP(*centroid(r))
            if any(_DPg(buildings[i]['r']).contains(c_) for i in bt.query(c_) if len(buildings[i]['r']) >= 3):
                continue
            diam = 2 * math.sqrt(area / math.pi)
            h_, col, t_ = {
                '01': (3.0, '#d9d1bc', 6), '02': (2.6, '#d9d1bc', 6), '03': (2.6, '#d9d1bc', 6),
                '0703': (max(9.0, min(32.0, 2.6 * diam)), '#b9bdc0', 3), '0702': (max(4.0, min(16.0, 0.7 * diam)), '#cfd3d6', 3),
                '0701': (3.5, '#b0b4b6', 3), '07': (6.0, '#c0c4c6', 3), '06': (30.0, '#9b5b42', 3), '05': (24.0, '#c8c6c0', 3),
                '12': (24.0, '#d6d0c4', 3), '13': (3.2, '#dfe9e6', 6), '10': (5.0, '#a88f74', 6), '09': (2.5, '#c9c2b4', 6),
            }.get(ty, (3.0, '#cdc6b6', 6))
            buildings.append({'r': r, 't': t_, 'h': h_, 'mh': 0.0, 'l': 0, 'rs': 1, 'n': '', 'c': col, 'rc': ''})
            dstat['manufatti ' + ty] += 1
    # pali: illuminazione pubblica come lampioni, linee elettriche e telefoniche come pali
    lamps_osm = [(x, z) for k_, x, z, _ in points if k_ == 2]
    lt = _DT([_DP(*p) for p in lamps_osm]) if lamps_osm else None
    for ty, pts in dets.get('pole', []):
        if not pts:
            continue
        x, z = pts[0]
        if ty.startswith('08'):
            if lt is not None and len(lt.query(_DP(x, z).buffer(4.0))):
                continue
            points.append((2, x, z, '')); dstat['lampioni'] += 1
        elif ty.startswith('06') or ty == '07':
            points.append((16, x, z, '')); dstat['pali di linea'] += 1
    print('DBGT dettagli:', dict(dstat))
    rss('dettagli DBGT')
dets = None      # i dati grezzi non servono piu'
import gc
gc.collect()

# cancelli: [tipo, x, z, direzione dell'apertura (decimi di grado), larghezza (dm), stato]
# tipo 0 battente, 1 scorrevole, 2 sbarra, 3 cancelletto pedonale, 4 catena
# stato 0 aperto, 1 chiuso (ostacolo), 2 automatico (si apre quando arriva un veicolo)
gates_out = []

for r, g in gate_nodes.items():
    c = gate_ctx.get(r)
    if not c:
        continue
    kind, acc = g['k'], g['acc'] or c['acc']
    if c['prio'] == 2:   # su una strada o un sentiero: il cancello attraversa la via
        sx, sz = -c['dz'], c['dx']
        wd = g['w'] or min(8, c['w'])
        if kind == 0 and c['foot'] and wd < 2.2:
            kind = 3
        if kind == 2:
            state = 2
        elif c['drive']:
            state = 2 if acc == 1 else 0
        elif c['foot']:
            state = 1 if acc == 1 else 0
        else:
            state = 0 if acc == -1 else 1
    else:                # solo su una recinzione: il cancello sta lungo la recinzione
        sx, sz = c['dx'], c['dz']
        wd = g['w'] or (1.1 if kind == 3 else 3.4)
        state = 0 if acc == -1 else 1
    if state == 1 and c['prio'] == 2 and r not in node_tags:
        node_tags[r] = (14, 0)       # il navigatore non ci passa
    gates_out.append((kind, g['x'], g['z'], sx, sz, wd, state))
for kind, a, b, acc in gate_lines:
    gates_out.append((kind, (a[0] + b[0]) / 2, (a[1] + b[1]) / 2, b[0] - a[0], b[1] - a[1], math.dist(a, b),
             2 if kind == 2 else (0 if acc == -1 else 1)))


rss('prima altimetria')
# ------------------------------------------------------------------ altimetria di dettaglio dal DBGT
# Se i pacchetti DBGT contengono l'altimetria (punti quotati a terra, curve di livello, quota del
# piede degli edifici, assi stradali con la quota) il modello del terreno passa a una griglia piu'
# fitta e viene corretto sui dati misurati; le strade seguono il loro profilo reale (trincee,
# rilevati, rampe). Dove il DBGT non c'e' resta il modello satellitare.
HEIGHT_CHANGED = False


def _box(a, r, axis):
    """media mobile di raggio r lungo un asse (bordi a zero: si usa su numeratore e denominatore)"""
    a = np.moveaxis(a, axis, 0)
    c = np.cumsum(np.pad(a, [(r + 1, r)] + [(0, 0)] * (a.ndim - 1)), axis=0)
    return np.moveaxis((c[2 * r + 1:] - c[:-2 * r - 1]) / (2 * r + 1), 0, axis)


def _smooth(a, r):
    for _ in range(3):   # tre passate di media mobile ~ gaussiana
        a = _box(_box(a, r, 0), r, 1)
    return a


def _bilin(G, x0, z0, step, xs, zs):
    gx = np.clip((xs - x0) / step, 0, G.shape[1] - 1.001); gz = np.clip((zs - z0) / step, 0, G.shape[0] - 1.001)
    ix = gx.astype(int); iz = gz.astype(int); fx = gx - ix; fz = gz - iz
    return (G[iz, ix] * (1 - fx) * (1 - fz) + G[iz, ix + 1] * fx * (1 - fz) + G[iz + 1, ix] * (1 - fx) * fz + G[iz + 1, ix + 1] * fx * fz)


if alti['pts'] or alti['roads']:
    from PIL import Image as _Img, ImageDraw as _Draw
    STEP2 = float(CFG.get('height_grid_dbgt_m', 10))
    f = HMETA['step'] / STEP2
    nx2 = int(round((HMETA['nx'] - 1) * f)) + 1; nz2 = int(round((HMETA['nz'] - 1) * f)) + 1
    x0g, z0g = HMETA['x0'], HMETA['z0']
    gxs = x0g + np.arange(nx2) * STEP2; gzs = z0g + np.arange(nz2) * STEP2
    GX, GZ = np.meshgrid(gxs, gzs)
    G = _bilin(HGRID, x0g, z0g, HMETA['step'], GX.ravel(), GZ.ravel()).reshape(nz2, nx2).astype(np.float64)
    del GX, GZ
    # maschera di ponti e gallerie (li' l'asse stradale non e' il terreno)
    mimg = _Img.new('L', (nx2, nz2), 0); md = _Draw.Draw(mimg)
    for w in road_ways:
        if w['flags'] & (F_BRIDGE | F_TUNNEL) or w['layer'] != 0:
            pts = [((node_xy[r][0] - x0g) / STEP2, (node_xy[r][1] - z0g) / STEP2) for r in w['ids']]
            md.line(pts, fill=255, width=max(2, int(round(((w['width'] or 7.0) + 14) / STEP2))))
    for rl in rails:
        if rl['b'] or rl['t']:
            md.line([((x - x0g) / STEP2, (z - z0g) / STEP2) for x, z in rl['p']], fill=255, width=3)
    MASK = np.asarray(mimg) > 0
    del mimg, md

    def masked(xs, zs):
        ix = np.clip(np.round((xs - x0g) / STEP2).astype(int), 0, nx2 - 1); iz = np.clip(np.round((zs - z0g) / STEP2).astype(int), 0, nz2 - 1)
        return MASK[iz, ix]
    # campioni: punti a terra, piedi degli edifici, assi stradali a raso (ogni 5 m)
    rs = []
    for line in alti['roads']:
        for (ax, az, ah), (bx, bz, bh) in zip(line, line[1:]):
            n = max(1, int(math.dist((ax, az), (bx, bz)) // 5))
            for k in range(n):
                t_ = k / n
                rs.append((ax + (bx - ax) * t_, az + (bz - az) * t_, ah + (bh - ah) * t_))
        rs.append(line[-1])
    P_ = np.array(alti['pts'], np.float64).reshape(-1, 3)
    B_ = np.array(alti.get('bld', []), np.float64).reshape(-1, 3)
    R_ = np.array(rs, np.float64).reshape(-1, 3)
    if len(R_):
        R_ = R_[~masked(R_[:, 0], R_[:, 1])]
    rng = np.random.default_rng(7)
    inP = (P_[:, 0] > gxs[0]) & (P_[:, 0] < gxs[-1]) & (P_[:, 1] > gzs[0]) & (P_[:, 1] < gzs[-1])
    hold = (rng.random(len(P_)) < 0.05) & inP  # 5% dei punti (dentro la mappa) tenuti da parte per la verifica
    S = np.vstack([P_[~hold], B_, R_]); W_ = np.concatenate([np.full((~hold).sum(), 1.0), np.full(len(B_), 1.0), np.full(len(R_), 1.5)])
    inside_ = (S[:, 0] > gxs[0]) & (S[:, 0] < gxs[-1]) & (S[:, 1] > gzs[0]) & (S[:, 1] < gzs[-1])
    S, W_ = S[inside_], W_[inside_]
    base_err = P_[hold, 2] - _bilin(G, x0g, z0g, STEP2, P_[hold, 0], P_[hold, 1])
    r0 = S[:, 2] - _bilin(G, x0g, z0g, STEP2, S[:, 0], S[:, 1])
    ok = np.abs(r0) < 40                       # errori grossolani
    S, W_ = S[ok], W_[ok]
    print('altimetria DBGT: campioni', len(S), '(punti %d, edifici %d, strade %d)' % ((~hold).sum(), len(B_), len(R_)))
    gx = (S[:, 0] - x0g) / STEP2; gz = (S[:, 1] - z0g) / STEP2
    ix = np.clip(gx.astype(int), 0, nx2 - 2); iz = np.clip(gz.astype(int), 0, nz2 - 2); fx = gx - ix; fz = gz - iz
    corners = [(0, 0, (1 - fx) * (1 - fz)), (0, 1, fx * (1 - fz)), (1, 0, (1 - fx) * fz), (1, 1, fx * fz)]
    n_out = 0
    for it, (rad, eps) in enumerate(((4, 0.02), (1, 0.05), (1, 0.05), (1, 0.05))):   # correzione larga (~40 m), poi fine (~14 m) ripetuta
        res = S[:, 2] - _bilin(G, x0g, z0g, STEP2, S[:, 0], S[:, 1])
        if it == 1:   # dopo la prima correzione: le quote lontane da tutte le altre sono errori dei dati
            bad = np.abs(res) > 15
            n_out = int(bad.sum())
            W_ = np.where(bad, 0.0, W_)
        num = np.zeros_like(G); den = np.zeros_like(G)
        for di, dj, wc in corners:
            np.add.at(num, (iz + di, ix + dj), W_ * wc * res)
            np.add.at(den, (iz + di, ix + dj), W_ * wc)
        num = _smooth(num, rad); den = _smooth(den, rad)
        G += num / (den + eps)
    after = P_[hold, 2] - _bilin(G, x0g, z0g, STEP2, P_[hold, 0], P_[hold, 1])
    print('altimetria DBGT: quote scartate perche\' incoerenti con quelle vicine (oltre 15 m)', n_out)
    cov = np.abs(base_err) < 1e9
    if hold.sum():
        okh = np.abs(after) <= 15   # oltre 15 m dal terreno ricostruito con tutti gli altri dati: errore del dato
        print('altimetria DBGT: errore sui punti di verifica (%d, esclusi %d dati errati): prima media %.2f m, 95%% %.2f m; '
              'dopo media %.2f m, 95%% %.2f m' % (okh.sum(), (~okh).sum(), np.mean(np.abs(base_err[okh])), np.percentile(np.abs(base_err[okh]), 95),
                                                 np.mean(np.abs(after[okh])), np.percentile(np.abs(after[okh]), 95)))
    # profilo delle strade a raso: quota dei nodi OSM dall'asse DBGT piu' vicino e parallelo
    seg = defaultdict(list)
    for line in alti['roads']:
        for a_, b_ in zip(line, line[1:]):
            if masked(np.array([(a_[0] + b_[0]) / 2]), np.array([(a_[1] + b_[1]) / 2]))[0]:
                continue
            for c in seg_cells_g(a_, b_, 25.0):
                seg[c].append((a_, b_))
    node_h = {}
    for w in road_ways:
        if w['flags'] & (F_BRIDGE | F_TUNNEL) or w['layer'] != 0:
            continue
        ids = w['ids']
        lim = max(5.0, (w['width'] or 7.0) / 2 + 2.5)
        for k, r in enumerate(ids):
            px, pz = node_xy[r]
            qa = node_xy[ids[max(0, k - 1)]]; qb = node_xy[ids[min(len(ids) - 1, k + 1)]]
            dx, dz = qb[0] - qa[0], qb[1] - qa[1]; L = math.hypot(dx, dz) or 1; dx /= L; dz /= L
            best = None
            for (a_, b_) in seg.get((int(px // 25), int(pz // 25)), ()):
                sx, sz = b_[0] - a_[0], b_[1] - a_[1]; sl = math.hypot(sx, sz)
                if sl < 0.01 or abs((sx * dx + sz * dz) / sl) < 0.75:
                    continue
                t_ = max(0.0, min(1.0, ((px - a_[0]) * sx + (pz - a_[1]) * sz) / (sl * sl)))
                d = math.hypot(a_[0] + sx * t_ - px, a_[1] + sz * t_ - pz)
                if d < lim and (best is None or d < best[0]):
                    best = (d, a_[2] + (b_[2] - a_[2]) * t_)
            if best:
                node_h.setdefault(r, []).append(best[1])
    node_h = {r: sum(v) / len(v) for r, v in node_h.items()}
    # quota della strada troppo lontana dal terreno corretto (oltre 12 m): dato errato, si ignora
    if node_h:
        rr = list(node_h)
        hz = _bilin(G, x0g, z0g, STEP2, np.array([node_xy[r][0] for r in rr]), np.array([node_xy[r][1] for r in rr]))
        badn = [r for r, g_ in zip(rr, hz) if abs(node_h[r] - g_) > 12]
        for r in badn:
            del node_h[r]
        print('altimetria DBGT: nodi strada con quota incoerente ignorati', len(badn))
    # strade senza quota DBGT: profilo del terreno corretto, lisciato lungo la via (media su ~25 m)
    n_dbgt_nodes = len(node_h)
    acc_h = {}
    for w in road_ways:
        if w['flags'] & (F_BRIDGE | F_TUNNEL) or w['layer'] != 0 or w['cls'] > 9:
            continue
        ids = w['ids']
        if all(r in node_h for r in ids):
            continue
        xs_ = np.array([node_xy[r][0] for r in ids]); zs_ = np.array([node_xy[r][1] for r in ids])
        th_ = _bilin(G, x0g, z0g, STEP2, xs_, zs_)
        cum_ = np.concatenate([[0.0], np.cumsum(np.hypot(np.diff(xs_), np.diff(zs_)))])
        if cum_[-1] > 12 and len(ids) > 1:
            # ricampiona ogni 5 m, media mobile triangolare, torna sui nodi
            s_ = np.arange(0.0, cum_[-1] + 5, 5.0)
            hs_ = _bilin(G, x0g, z0g, STEP2, np.interp(s_, cum_, xs_), np.interp(s_, cum_, zs_))
            ker = np.array([1, 2, 3, 2, 1], float); ker /= ker.sum()
            hs_ = np.convolve(np.pad(hs_, 2, mode='edge'), ker, mode='valid')
            th_ = np.interp(cum_, s_, hs_)
        for r, hv in zip(ids, th_):
            if r not in node_h:
                acc_h.setdefault(r, []).append(float(hv))
    for r, v in acc_h.items():
        node_h[r] = sum(v) / len(v)
    # profilo lungo ogni via: prima si tolgono i valori isolati (sui tornanti la quota DBGT puo' essere
    # quella del ramo accanto), poi si liscia su ~25 m; ai nodi in comune tra piu' vie si fa la media
    acc_h = {}
    for w in road_ways:
        if w['flags'] & (F_BRIDGE | F_TUNNEL) or w['layer'] != 0 or w['cls'] > 9:
            continue
        ids = w['ids']
        if len(ids) < 2 or any(r not in node_h for r in ids):
            continue
        hv = np.array([node_h[r] for r in ids])
        if len(hv) >= 3:
            med = np.median(np.vstack([np.concatenate([[hv[0]], hv[:-1]]), hv, np.concatenate([hv[1:], [hv[-1]]])]), axis=0)
            hv = np.where(np.abs(hv - med) > 1.0, med, hv)
        xs_ = np.array([node_xy[r][0] for r in ids]); zs_ = np.array([node_xy[r][1] for r in ids])
        cum_ = np.concatenate([[0.0], np.cumsum(np.hypot(np.diff(xs_), np.diff(zs_)))])
        if cum_[-1] > 12 and np.all(np.diff(cum_) > 0):
            s_ = np.arange(0.0, cum_[-1] + 5, 5.0)
            hs_ = np.interp(s_, cum_, hv)
            ker = np.array([1, 2, 3, 2, 1], float); ker /= ker.sum()
            hs_ = np.convolve(np.pad(hs_, 2, mode='edge'), ker, mode='valid')
            hv = np.interp(cum_, s_, hs_)
        for r, h_ in zip(ids, hv):
            acc_h.setdefault(r, []).append(float(h_))
    for r, v in acc_h.items():
        node_h[r] = sum(v) / len(v)
    # scavo/riporto: il terreno sotto ogni strada prende la quota della strada per una fascia larga
    # quanto serve perche' la carreggiata cada tutta su celle spianate (mezza larghezza + 8 m):
    # cosi' la strada non fa gobbe passando da una cella all'altra, e a mezza costa nasce lo
    # sbancamento che c'e' anche nella realta'
    smp = []
    for w in road_ways:
        if w['flags'] & (F_BRIDGE | F_TUNNEL) or w['layer'] != 0 or w['cls'] > 9:
            continue
        rad_ = (w['width'] or 7.0) / 2 + 8.0
        for a_, b_ in zip(w['ids'], w['ids'][1:]):
            if a_ not in node_h or b_ not in node_h:
                continue
            (ax, az), (bx, bz) = node_xy[a_], node_xy[b_]
            n = max(1, int(math.dist((ax, az), (bx, bz)) // 3.0))
            for k in range(n + 1):
                t_ = k / n
                smp.append((ax + (bx - ax) * t_, az + (bz - az) * t_, node_h[a_] + (node_h[b_] - node_h[a_]) * t_, rad_))
    if smp:
        A_ = np.array(smp); del smp
        tsum = np.zeros(nx2 * nz2); wsum = np.zeros(nx2 * nz2)
        ci = np.round((A_[:, 0] - x0g) / STEP2).astype(int); cj = np.round((A_[:, 1] - z0g) / STEP2).astype(int)
        for di in (-2, -1, 0, 1, 2):
            for dj in (-2, -1, 0, 1, 2):
                ii = np.clip(ci + di, 0, nx2 - 1); jj = np.clip(cj + dj, 0, nz2 - 1)
                d = np.hypot(gxs[ii] - A_[:, 0], gzs[jj] - A_[:, 1])
                m = d < A_[:, 3]
                # peso che cala in fretta con la distanza: dove due strade vicine hanno quote diverse vince la piu' vicina
                wgt = 1.0 / (d[m] ** 4 + 1.0)
                flat = jj[m] * nx2 + ii[m]
                tsum += np.bincount(flat, weights=wgt * A_[m, 2], minlength=nx2 * nz2)
                wsum += np.bincount(flat, weights=wgt, minlength=nx2 * nz2)
        sel = (wsum > 0).reshape(nz2, nx2) & ~MASK
        tgt = (tsum / np.maximum(wsum, 1e-12)).reshape(nz2, nx2)
        moved = np.abs(G[sel] - tgt[sel])
        G[sel] = tgt[sel]
        print('altimetria DBGT: nodi strada con quota reale', n_dbgt_nodes, '+ lisciati dal terreno', len(node_h) - n_dbgt_nodes,
              '- celle spianate sotto le strade', int(sel.sum()), 'spostate in media di %.2f m (95%% %.1f, max %.1f)' % (moved.mean(), np.percentile(moved, 95), moved.max()))
    HMETA = {'nx': nx2, 'nz': nz2, 'step': STEP2, 'x0': x0g, 'z0': z0g, 'scale': 0.1}
    HGRID = G.astype(np.float32)
    HEIGHT_CHANGED = True

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
rss('dopo cavalcavia')
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
rss('dopo stalli')
print('stalli', len(stalls), 'mappati/corsie/strada/piazzale', n_src, 'aree', len(parkings))

# ------------------------------------------------------------------ gallerie: profilo e imbocchi
# Una galleria e' spesso spezzata in piu' vie OSM: la quota si fissa agli imbocchi veri (dove la
# galleria incontra una strada all'aperto) e si interpola lungo tutta la catena, cosi' la strada non
# risale in superficie a ogni giunzione. Dove la copertura di terreno sopra la strada e' sotto i
# 7 m (i tratti vicini agli imbocchi e i sottopassi) il terreno va "aperto": lo si segna in una
# maschera che finisce nella mappa dei colori con un colore riservato (HOLE_RGB).
HOLE_RGB = (255, 0, 255)
tunnel_h = {}      # osm id del nodo -> quota della strada in galleria
tunnel_holes = []  # [(larghezza m, [(x, z)...])] tratti da aprire nel terreno
t_ways = [w for w in road_ways if w['flags'] & F_TUNNEL]
if t_ways:
    open_nodes = set()
    for w in road_ways:
        if not (w['flags'] & F_TUNNEL):
            open_nodes.update(w['ids'])
    tadj = defaultdict(list)
    for w in t_ways:
        for a_, b_ in zip(w['ids'], w['ids'][1:]):
            d_ = math.dist(node_xy[a_], node_xy[b_])
            tadj[a_].append((b_, d_)); tadj[b_].append((a_, d_))
    seen_t = set()
    n_comp = n_portal = 0
    for start in list(tadj):
        if start in seen_t:
            continue
        comp, stack = [], [start]
        seen_t.add(start)
        while stack:
            u = stack.pop(); comp.append(u)
            for v_, _ in tadj[u]:
                if v_ not in seen_t:
                    seen_t.add(v_); stack.append(v_)
        portals = [u for u in comp if u in open_nodes or len(tadj[u]) == 1]
        n_comp += 1; n_portal += len(portals)
        dists = []
        for p_ in portals:
            dist = {p_: 0.0}; hp = [(0.0, p_)]
            while hp:
                d_, u = heapq.heappop(hp)
                if d_ > dist.get(u, 1e18):
                    continue
                for v_, w_ in tadj[u]:
                    nd_ = d_ + w_
                    if nd_ < dist.get(v_, 1e18):
                        dist[v_] = nd_; heapq.heappush(hp, (nd_, v_))
            dists.append((terrain_h(*node_xy[p_]) + dh.get(p_, 0.0), dist))
        for u in comp:
            near = sorted((dist.get(u, 1e18), hq) for hq, dist in dists)[:2]
            if not near:
                tunnel_h[u] = terrain_h(*node_xy[u])
            elif len(near) == 1 or near[0][0] + near[1][0] < 1e-6:
                tunnel_h[u] = near[0][1]
            else:
                (d1, h1), (d2, h2) = near
                tunnel_h[u] = (h1 * d2 + h2 * d1) / (d1 + d2)
        # una galleria non sta mai sopra il terreno: dove la linea retta tra gli imbocchi uscirebbe
        # all'aperto (avvallamenti a meta' percorso) la strada segue il terreno, e i nodi vicini si
        # abbassano quanto serve per non superare il 7% di pendenza. Gli imbocchi restano fermi.
        pset = set(portals)
        for u in comp:
            if u not in pset:
                tunnel_h[u] = min(tunnel_h[u], terrain_h(*node_xy[u]) - 0.3)
        hp = [(tunnel_h[u], u) for u in comp]
        heapq.heapify(hp)
        while hp:
            hu, u = heapq.heappop(hp)
            if hu > tunnel_h[u] + 1e-9:
                continue
            for v_, w_ in tadj[u]:
                lim = hu + 0.07 * w_
                if v_ not in pset and tunnel_h[v_] > lim + 1e-6:
                    tunnel_h[v_] = lim; heapq.heappush(hp, (lim, v_))
    for w in t_ways:
        ids = w['ids']; wd = max(12.0, (w['width'] or 7.0) + 7.0)
        run = []
        for a_, b_ in zip(ids, ids[1:]):
            (ax, az), (bx, bz) = node_xy[a_], node_xy[b_]
            n_ = max(1, int(math.dist((ax, az), (bx, bz)) // 4))
            for k_ in range(n_ + 1):
                t_ = k_ / n_
                x_, z_ = ax + (bx - ax) * t_, az + (bz - az) * t_
                cover = terrain_h(x_, z_) - (tunnel_h[a_] + (tunnel_h[b_] - tunnel_h[a_]) * t_)
                if -1.5 < cover < 7.0:      # il terreno entrerebbe nel tubo: qui va aperto
                    run.append((x_, z_))
                else:
                    if len(run) >= 2:
                        tunnel_holes.append((wd, run))
                    run = []
        if len(run) >= 2:
            tunnel_holes.append((wd, run))
    print('gallerie: vie', len(t_ways), 'catene', n_comp, 'imbocchi', n_portal, 'tratti da aprire nel terreno', len(tunnel_holes),
          '(%.1f km)' % (sum(sum(math.dist(a_, b_) for a_, b_ in zip(r_, r_[1:])) for _, r_ in tunnel_holes) / 1000))

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

th_flat = []
for r, v in tunnel_h.items():
    if r in node_index:
        th_flat += [node_index[r], int(round(v * 10))]

sz = write_js(os.path.join(STAGE, 'roads.js'), 'roads', {
    'names': names.list, 'nodes': nodes_flat, 'ways': ways_flat, 'ntags': ntags, 'dh': dh_flat, 'th': th_flat,
    'rails': rails, 'mj': mj, 'wayHead': 16})
print('roads.js', sz, 'nodi', len(node_list))

# ------------------------------------------------------------------ copertura del suolo (immagine)
MPP = CFG['landcover_m_per_px']
LW = int(math.ceil((P.xmax - P.xmin) / MPP))
LH = int(math.ceil((P.zmax - P.zmin) / MPP))
rss('prima mappa colori')
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
rss('colori disegnati')
arr = np.array(img)
isdef = np.all(arr == np.array(LC_DEFAULT, np.uint8), axis=2)
arr[isdef & (np.asarray(mask) > 0)] = LC['residential'][1]
img = Image.fromarray(arr)
del arr, mask
d = ImageDraw.Draw(img)
for col, width, pts in lc_lines:
    d.line(to_px(pts), fill=col, width=max(1, int(round(width / MPP))))
buf = io.BytesIO()
rss('prima quantize')
imq = img.quantize(colors=47, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
if tunnel_holes:
    # colore riservato per le aperture delle gallerie: una voce in piu' nella tavolozza
    pal = imq.getpalette()[:47 * 3] + list(HOLE_RGB)
    imq.putpalette(pal + [0] * (768 - len(pal)))
    hd = ImageDraw.Draw(imq)
    for wd, run in tunnel_holes:
        hd.line(to_px(run), fill=47, width=max(2, int(round(wd / MPP))))
imq.save(buf, 'PNG', optimize=True)
png = buf.getvalue()
lcjs = os.path.join(STAGE, 'landcover.js')
with open(lcjs, 'w') as f:
    f.write('BDS_DATA("landcover","png","%s");\n' % base64.b64encode(png).decode())
img.resize((LW // 4, LH // 4)).save(os.path.join(height_dir, 'landcover_preview.png'))
print('landcover', LW, LH, os.path.getsize(lcjs))
rss('mappa dei colori')

# ------------------------------------------------------------------ tessere edifici + alberi
tiles = defaultdict(lambda: {'b': [], 'tr': [], 'rows': [], 'pa': [], 'ba': [], 'pt': [], 'pk': [], 'gt': []})
TX = int(math.ceil((P.xmax - P.xmin) / TILE)); TZ = int(math.ceil((P.zmax - P.zmin) / TILE))


def tile_of(x, z):
    i = int((x - P.xmin) // TILE); j = int((z - P.zmin) // TILE)
    if 0 <= i < TX and 0 <= j < TZ:
        return (i, j)
    return None




# edifici semplificati per la vista da lontano (soprattutto in volo): un rettangolo orientato per
# edificio con altezza e tipo di tetto, nella stessa tessera dell'edificio dettagliato.
# Record (7 interi): x, z relativi alla tessera (dm), mezza lunghezza, mezza larghezza (dm),
# angolo (gradi), altezza (dm), flag (1 tetto a falde, 2 industriale/commerciale)
far_tiles = defaultdict(list)
FAR_H = {1: 7.5, 2: 9.0, 3: 9.5, 4: 9.5, 5: 15.0, 6: 3.2, 7: 12.0, 8: 34.0, 9: 7.0}
n_far = 0

bnames = StrTable()
for b in buildings:
    cx, cz = centroid(b['r'])
    k = tile_of(cx, cz)
    if not k:
        continue
    area = abs(ring_area(b['r']))
    if area >= 30:
        kind = b['t'] or (6 if area < 45 else 3 if area > 1800 else 2)
        hgt = b['h'] or (b['l'] * 3.1 + 0.6 if b['l'] > 0 else (14.0 if kind == 2 and area > 500 else FAR_H.get(kind, 5.5)))
        mr = min_rect(b['r']) if hgt >= 2.5 else None
        if mr:
            rx, rz, hu, hv, ang = mr
            sc = math.sqrt(min(1.0, area / max(1e-6, 4 * hu * hv)))   # stessa area del poligono vero
            pitched = (kind == 1 or (kind == 2 and (area < 1400 or b['l'] <= 4)) or kind in (5, 9) or (kind == 7 and area < 900)
                       or kind == 6) and b['rs'] != 1
            far_tiles[k] += [int(round((rx - (P.xmin + k[0] * TILE)) * 10)), int(round((rz - (P.zmin + k[1] * TILE)) * 10)),
                             max(10, int(round(hu * sc * 10))), max(10, int(round(hv * sc * 10))),
                             int(round(math.degrees(ang))) % 180, int(round(min(hgt, 200) * 10)),
                             (1 if pitched else 0) | (2 if kind in (3, 4) else 0)]
            n_far += 1
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
# ---- recinzioni dedotte: perimetro delle aree di solito recintate (scuole, cimiteri, campi
# sportivi, cabine elettriche, parchi giochi...). Si lascia il varco dove passano strade e vialetti,
# non si attraversano gli edifici e non si raddoppiano muri e recinzioni gia' mappati in OSM.
n_fence_add = 0
if fence_areas:
    try:
        from shapely.geometry import LineString as _LS, Polygon as _FP
        from shapely.strtree import STRtree as _FT
        from shapely.ops import unary_union as _uu
        # ostacoli come geometrie semplici; l'ingombro si calcola solo per quelli vicini a ogni area
        # (con il DBGT le recinzioni sono centinaia di migliaia: bufferizzarle tutte prima esaurisce la memoria)
        obst, opad = [], []
        for w in road_ways:
            pts_ = [node_xy[r] for r in w['ids']]
            if len(pts_) >= 2:
                obst.append(_LS(pts_)); opad.append(((w['width'] or 6.0) / 2 + 1.6, 2))
        for kind_, pw_, pts_, brg_ in paths:
            if len(pts_) >= 2:
                obst.append(_LS(pts_)); opad.append((pw_ / 2 + 0.7, 2))
        for kind_, bh_, pts_ in barriers:
            if len(pts_) >= 2 and kind_ != 3:
                obst.append(_LS(pts_)); opad.append((2.5, 1))
        for b in buildings:
            try:
                obst.append(_FP(b['r'])); opad.append((0.4, 1))
            except Exception:
                pass
        otree = _FT(obst)
        rss('ostacoli per le recinzioni dedotte')
        new_b = []
        for kind_, bh_, ring in fence_areas:
            try:
                line = _LS(ring if ring[0] == ring[-1] else ring + [ring[0]])
                if line.length > 2500 or line.length < 20:
                    continue
                near = [obst[i].buffer(opad[i][0], cap_style=opad[i][1]) for i in otree.query(line.buffer(3.0))]
                rest = line.difference(_uu(near)) if near else line
            except Exception:
                continue
            for g_ in ([rest] if rest.geom_type == 'LineString' else getattr(rest, 'geoms', [])):
                if g_.geom_type != 'LineString' or g_.length < 4:
                    continue
                pts_ = dp_simplify(list(g_.coords), 0.3)
                if len(pts_) >= 2:
                    new_b.append((kind_, bh_, pts_))
                    # una recinzione nuova fa da ostacolo per quelle dopo (aree che si toccano)
        del obst, opad, otree
        # perimetri in comune tra aree vicine: si tiene un solo tratto
        seen_mid = set()
        for kind_, bh_, pts_ in new_b:
            m_ = pts_[len(pts_) // 2]
            key_ = (round(m_[0] / 3), round(m_[1] / 3))
            if key_ in seen_mid:
                continue
            seen_mid.add(key_)
            barriers.append((kind_, bh_, pts_)); n_fence_add += 1
    except ImportError:
        print('recinzioni dedotte: shapely non disponibile, saltate')
print('recinzioni dedotte dal perimetro delle aree recintate:', n_fence_add, 'tratti da', len(fence_areas), 'aree')

for kind, bh, pts in barriers:
    k = tile_of(*pts[len(pts) // 2])
    if k and len(pts) >= 2:
        tiles[k]['ba'].append([kind, int(bh * 10)] + enc_ring(pts))
for x, z, hd, wd, ln, typ in stalls:
    k = tile_of(x, z)
    if k:
        tiles[k]['pk'] += [q(x), q(z), int(round(math.degrees(hd) * 10)) % 3600, int(round(wd * 10)), int(round(ln * 10)) * 2 + typ]
gstat = Counter()


def add_gate(kind, x, z, sx, sz, wd, state):
    k = tile_of(x, z)
    if not k:
        return
    L = math.hypot(sx, sz) or 1
    tiles[k]['gt'] += [kind, q(x), q(z), int(round(math.degrees(math.atan2(sx / L, sz / L)) * 10)) % 3600,
                       int(round(max(0.9, min(9, wd)) * 10)), state]
    gstat[(kind, state)] += 1


for g in gates_out:
    add_gate(*g)
print('cancelli (tipo, stato):', dict(sorted(gstat.items())))
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
far_idx, far_data = [], []
for (i, j), arr in sorted(far_tiles.items()):
    far_idx.append([i, j, len(arr) // 7]); far_data += arr
print('edifici semplificati per la vista da lontano', n_far, 'byte', write_js(os.path.join(STAGE, 'far.js'), 'far', {'t': far_idx, 'd': far_data}))

# ------------------------------------------------------------------ meta
if True:     # sempre nello stadio: bake.mjs ne ricava le tessere
    qh = np.clip(np.round(HGRID * 10), 0, 65535).astype('<u2')
    print('height.js (griglia %g m)' % HMETA['step'], write_js(os.path.join(STAGE, 'height.js'), 'height', raw=qh.tobytes()))
lm_seen = set()
lm_out = []
for lm in landmarks:
    key = (lm[0], lm[3], round(lm[1] / 50), round(lm[2] / 50))
    if key in lm_seen:
        continue
    lm_seen.add(key)
    lm_out.append(lm)
config_comuni = CFG['comuni'] + [c for c in CFG.get('featured_extra', []) if c in {x['n'] for x in comuni}]
meta = {
    'proj': P.meta(), 'height': HMETA, 'tile': TILE, 'tilesX': TX, 'tilesZ': TZ, 'tiles': tile_keys,
    'landcover': {'w': LW, 'h': LH, 'mpp': MPP, 'palette': dict({k: v[1] for k, v in LC.items()}, tunnel=HOLE_RGB), 'default': LC_DEFAULT},
    'comuni': comuni, 'featured': config_comuni, 'dbgt': dbgt_comuni, 'places': places, 'landmarks': lm_out, 'waters': waters,
    'rivers': rivers, 'power': power_lines,
    'source': 'Dati (c) OpenStreetMap contributors, ODbL. Altimetria: Terrarium tiles (Mapzen / AWS Open Data).'
              + (' Edifici: DBGT Regione Lombardia (comuni: ' + ', '.join(dbgt_comuni) + ').' if dbgt_comuni else ''),
}
print('meta.js', write_js(os.path.join(STAGE, 'meta.js'), 'meta', meta), 'landmarks', len(lm_out), 'places', len(places))
