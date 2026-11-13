#!/usr/bin/env python3
"""Riduce un pacchetto DBGT di Regione Lombardia (anche quello provinciale da oltre 1 GB) a uno o
piu' file compatti con i soli edifici e l'altimetria dell'area del gioco, ognuno sotto i 28 MB.

Uso:  python3 tools/dbgt_solo_edifici.py <pacchetto.zip o cartella> [nome_uscita] [--tutto] [--bbox=S,O,N,E]

  * tiene solo gli edifici (unita' volumetriche con la quota del piede), l'altimetria
    (punti quotati a terra, curve di livello, assi stradali con la quota) e i dettagli
    dell'ambiente (alberi, filari, recinzioni, muri, carreggiate, marciapiedi, ciclabili, cortili,
    aree verdi, manufatti industriali, impianti sportivi, pali, isole di traffico);
  * ritaglia sull'area del gioco letta da data/meta.js (con --tutto non ritaglia; con
    --bbox=lat_sud,lon_ovest,lat_nord,lon_est su un'area a scelta);
  * conserva solo i campi che servono (altezza, tipo di porzione/estrusione, uso);
  * scrive file <nome_uscita>_N.dbgt.json.gz da mettere in brianza-driving-sim/dbgt/ o da inviare.

Usa solo la libreria standard di Python: non serve installare nulla.
"""
import base64, gzip, json, math, os, re, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from dbgt import iter_layers, ALTI_KINDS, DETAIL_KINDS  # noqa: E402  (solo libreria standard)

LIMIT = float(os.environ.get('BDS_DBGT_LIMIT_MB', 28)) * 1024 * 1024
args = [a for a in sys.argv[1:] if not a.startswith('--')]
if not args:
    sys.exit(__doc__)
src = args[0]
out_base = args[1] if len(args) > 1 else 'DBGT_edifici'
out_base = re.sub(r'(\.dbgt\.json\.gz|\.zip)$', '', out_base)
clip = '--tutto' not in sys.argv


def game_bbox():
    p = os.path.join(HERE, '..', 'data', 'meta.js')
    try:
        s = open(p).read()
        m = re.search(r'BDS_DATA\("meta","json","(.*)"\)', s, re.S)
        return json.loads(gzip.decompress(base64.b64decode(m.group(1))))['proj']['bbox']
    except Exception:
        return None


def tm_forward(lat, lon, a, f, lon0, k0, fe, fn=0.0):
    """Proiezione trasversa di Mercatore (formule di Snyder), sufficiente per ritagliare."""
    e2 = f * (2 - f); ep2 = e2 / (1 - e2)
    phi, lam = math.radians(lat), math.radians(lon - lon0)
    N = a / math.sqrt(1 - e2 * math.sin(phi) ** 2)
    T = math.tan(phi) ** 2; C = ep2 * math.cos(phi) ** 2; A = lam * math.cos(phi)
    M = a * ((1 - e2 / 4 - 3 * e2 ** 2 / 64 - 5 * e2 ** 3 / 256) * phi - (3 * e2 / 8 + 3 * e2 ** 2 / 32 + 45 * e2 ** 3 / 1024) * math.sin(2 * phi)
             + (15 * e2 ** 2 / 256 + 45 * e2 ** 3 / 1024) * math.sin(4 * phi) - (35 * e2 ** 3 / 3072) * math.sin(6 * phi))
    x = fe + k0 * N * (A + (1 - T + C) * A ** 3 / 6 + (5 - 18 * T + T * T + 72 * C - 58 * ep2) * A ** 5 / 120)
    y = fn + k0 * (M + N * math.tan(phi) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A ** 4 / 24 + (61 - 58 * T + T * T + 600 * C - 330 * ep2) * A ** 6 / 720))
    return x, y


def clip_rect(prj, bbox):
    """Rettangolo di ritaglio nelle coordinate del livello (None = non ritagliare)."""
    if not bbox:
        return None
    s, w, n, e = bbox
    t = prj.lower()
    if 'gauss' in t or 'monte_mario' in t or 'monte mario' in t:
        fe = 2520000 if 'zone_2' in t or 'east' in t or 'fuso_e' in t else 1500000
        proj = lambda la, lo: tm_forward(la, lo, 6378388.0, 1 / 297.0, 15.0 if fe > 2e6 else 9.0, 0.9996, fe)
        margin = 400   # differenza di datum non modellata
    elif not t or 'utm' in t or 'transverse_mercator' in t:
        zone = 32
        m = re.search(r'utm[^0-9]{0,12}(3[23])', t)
        if m:
            zone = int(m.group(1))
        proj = lambda la, lo: tm_forward(la, lo, 6378137.0, 1 / 298.257222101, zone * 6 - 183, 0.9996, 500000)
        margin = 150
    else:
        print('  sistema di riferimento non riconosciuto: nessun ritaglio')
        return None
    pts = [proj(la, lo) for la in (s, n) for lo in (w, e)]
    return (min(p[0] for p in pts) - margin, min(p[1] for p in pts) - margin, max(p[0] for p in pts) + margin, max(p[1] for p in pts) + margin)


opt_bbox = next((a.split('=', 1)[1] for a in sys.argv[1:] if a.startswith('--bbox=')), None)
bbox = [float(v) for v in opt_bbox.split(',')] if opt_bbox else (game_bbox() if clip else None)
print('Area del gioco:', bbox if bbox else 'tutta (nessun ritaglio)')
folder = src
if os.path.isfile(src):
    folder = tempfile.mkdtemp(prefix='dbgt_in_')
    try:
        os.symlink(os.path.abspath(src), os.path.join(folder, os.path.basename(src)))
    except OSError:  # Windows senza permessi per i link: copia
        import shutil
        shutil.copy(src, folder)
work = tempfile.mkdtemp(prefix='dbgt_ed_')

layers = []   # (tipo, prj, [record compatti])
kept = total = 0
def delta(pts, scale):
    flat, prev = [], [0] * len(scale)
    for p in pts:
        for k, sc in enumerate(scale):
            q = int(round(p[k] * sc))
            flat.append(q - prev[k]); prev[k] = q
    return flat


def simplify(pts, tol):
    """Douglas-Peucker in pianta (le quote seguono i punti tenuti)."""
    if len(pts) < 3:
        return pts
    keep = [False] * len(pts); keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        ax, ay = pts[a][0], pts[a][1]; bx, by = pts[b][0], pts[b][1]
        dx, dy = bx - ax, by - ay; L = math.hypot(dx, dy)
        best, bi = -1.0, -1
        for i in range(a + 1, b):
            px, py = pts[i][0] - ax, pts[i][1] - ay
            d = abs(px * dy - py * dx) / L if L > 1e-9 else math.hypot(px, py)
            if d > best:
                best, bi = d, i
        if best > tol:
            keep[bi] = True
            stack += [(a, bi), (bi, b)]
    return [p for p, k in zip(pts, keep) if k]


# curve di livello: il terreno del gioco ha una griglia di 10 m, basta una tolleranza di 1,5 m
CV_TOL = 1.5

NAMES = {'vol': 'unita volumetriche', 'body': 'corpi edificati', 'quo': 'punti quotati',
         'cv': 'curve di livello', 'str': 'assi stradali', 'tree': 'alberi', 'row': 'filari e siepi',
         'div': 'recinzioni', 'wall': 'muri di sostegno', 'veh': 'carreggiate', 'ped': 'aree pedonali',
         'cyc': 'piste ciclabili', 'yard': 'cortili', 'green': 'aree verdi', 'ind': 'manufatti industriali',
         'sport': 'impianti sportivi', 'pole': 'pali', 'isl': 'isole di traffico'}
for kind, prj, recs, _src in iter_layers(folder, work):
    rect = clip_rect(prj, bbox)
    out, seen, qbuf = [], 0, []
    for attrs, rings in recs:
        seen += 1
        xs = [p[0] for r in rings for p in r]; ys = [p[1] for r in rings for p in r]
        if not xs or (rect and (max(xs) < rect[0] or min(xs) > rect[2] or max(ys) < rect[1] or min(ys) > rect[3])):
            continue
        if kind == 'quo':        # punti a terra: le quote in gronda (0302) non servono
            if attrs and str(attrs[0]).strip() == '0302':
                continue
            qbuf += [p for r in rings for p in r if p[2] is not None]
            if len(qbuf) >= 4000:
                out.append({'p': delta(qbuf, (10, 10, 100))}); qbuf = []
            continue
        if kind in ALTI_KINDS:   # linee con quota: terne (dm, dm, cm)
            enc = [delta(simplify(r, CV_TOL) if kind == 'cv' else r, (10, 10, 100)) for r in rings if all(p[2] is not None for p in r)]
            if enc:
                out.append({'a': [str(a) for a in attrs], 'r': enc})
            continue
        if kind in DETAIL_KINDS:     # dettagli: anelli/linee semplificati a 20 cm, punti cosi' come sono
            rr = [delta(simplify(r, 0.2) if len(r) > 2 else r, (10, 10)) for r in rings if r]
            if rr:
                out.append({'a': [str(a) for a in attrs], 'r': rr})
            continue
        if kind == 'vol':
            rec = {'a': [str(a) for a in attrs[:3]], 'r': [delta(r, (10, 10)) for r in rings]}
            if len(attrs) > 3 and str(attrs[3]).strip():
                rec['z'] = int(round(float(attrs[3]) * 100))
        else:
            rec = {'a': [str(a) for a in attrs], 'r': [delta(r, (10, 10)) for r in rings]}
        out.append(rec)
    if qbuf:
        out.append({'p': delta(qbuf, (10, 10, 100))})
    total += seen; kept += len(out)
    print('  %s: %d di %d oggetti nell\'area' % (NAMES.get(kind, kind), len(out), seen))
    layers.append((kind, prj, out))

# scrittura in parti sotto il limite
files, part, cur, cur_size = [], 1, {}, 0
def flush():
    global part, cur, cur_size
    if not cur:
        return
    payload = {'v': 1, 'source': 'DBGT Regione Lombardia', 'layers': []}
    prj = ''
    for (kind, prj_), recs in cur.items():
        payload['layers'].append({'kind': kind, 'recs': recs}); prj = prj_
    payload['prj'] = prj
    name = '%s_%d.dbgt.json.gz' % (out_base, part)
    with open(name, 'wb') as f:
        f.write(gzip.compress(json.dumps(payload, separators=(',', ':')).encode(), 9))
    files.append(name)
    part += 1; cur = {}; cur_size = 0

for kind, prj, recs in layers:
    for rec in recs:
        est = 6 + (len(rec['p']) if 'p' in rec else sum(len(r) for r in rec['r'])) * 1.6      # byte compressi stimati
        if cur_size + est > LIMIT * 0.9 or (cur and next(iter(cur))[1] != prj):
            flush()
        cur.setdefault((kind, prj), []).append(rec)
        cur_size += est
flush()
for f in files:
    print('%s  %.1f MB' % (f, os.path.getsize(f) / 1e6))
print('Oggetti tenuti: %d su %d. Metti i file in brianza-driving-sim/dbgt/ oppure inviali.' % (kept, total))
if any(os.path.getsize(f) > 30e6 for f in files):
    print('ATTENZIONE: un file supera 30 MB')
