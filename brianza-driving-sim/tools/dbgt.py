"""Lettura del DBGT (Database Geo-Topografico) di Regione Lombardia.

Si scaricano dal Geoportale della Lombardia i pacchetti DBGT (zip con shapefile, anche quello
provinciale da oltre 1 GB) e li si mette in una cartella. Questo modulo:
  * cerca negli zip (anche annidati) e nelle cartelle i soli livelli degli edifici, riconoscendoli
    dai NOMI DEI CAMPI letti nell'intestazione del .dbf (i nomi dei file cambiano tra le edizioni):
    le "unita' volumetriche" hanno il campo UN_VOL_AV (altezza), i "corpi edificati" CR_EDF_* /
    EDIFC_USO;
  * legge anche i file compatti *.dbgt.json.gz prodotti da dbgt_solo_edifici.py;
  * converte le coordinate (sistema dal .prj: UTM32N, RDN2008, Gauss-Boaga...) nel piano del gioco.

Gli shapefile si leggono con codice in sola libreria standard; pyproj serve solo per la conversione
delle coordinate nella pipeline. Le unita' volumetriche sono porzioni di edificio di altezza
omogenea: un palazzo con un corpo basso e una torre sono due unita' con altezze diverse.
"""
import gzip, io, json, math, os, re, sqlite3, struct, zipfile
from collections import Counter

COMPANIONS = ('.shp', '.shx', '.dbf', '.prj', '.cpg')
COMPACT_EXT = '.dbgt.json.gz'


# ------------------------------------------------------------------ lettori in sola libreria standard
def _dbf_fields(fobj):
    """Nomi dei campi di un .dbf letti dalla sola intestazione (pochi byte)."""
    head = fobj.read(32)
    if len(head) < 32:
        return []
    hlen = int.from_bytes(head[8:10], 'little')
    rest = fobj.read(max(0, hlen - 32))
    out = []
    for i in range(0, len(rest) - 31, 32):
        if rest[i] == 0x0D:
            break
        out.append(rest[i:i + 11].split(b'\0')[0].decode('latin-1').strip())
    return out


def layer_kind(names):
    """Tipo di livello dai nomi dei campi: vol (unita' volumetriche), body (corpi edificati),
    quo (punti quotati), cv (curve di livello), str (assi stradali con quota)."""
    names = [n.lower() for n in names]
    if any(n.endswith('un_vol_av') for n in names):
        return 'vol'
    if any(n.startswith('cr_edf') or n.endswith('edifc_uso') for n in names):
        return 'body'
    if any(n.endswith('pt_quo_q') for n in names):
        return 'quo'
    if any(n.endswith('cv_liv_q') for n in names):
        return 'cv'
    if any(n.endswith('el_str_sed') for n in names):
        return 'str'
    return None


ALTI_KINDS = ('quo', 'cv', 'str')


def read_dbf(path):
    """Record del .dbf come dizionari {nome_campo_minuscolo: testo}."""
    with open(path, 'rb') as f:
        data = f.read()
    nrec = int.from_bytes(data[4:8], 'little')
    hlen = int.from_bytes(data[8:10], 'little')
    rlen = int.from_bytes(data[10:12], 'little')
    fields, i = [], 32
    while i + 32 <= hlen and data[i] != 0x0D:
        name = data[i:i + 11].split(b'\0')[0].decode('latin-1').strip().lower()
        fields.append((name, data[i + 16]))
        i += 32
    out = []
    for r in range(nrec):
        o = hlen + r * rlen
        rec = data[o:o + rlen]
        if not rec:
            break
        deleted = rec[:1] == b'*'
        vals, p = {}, 1
        for name, ln in fields:
            vals[name] = rec[p:p + ln].decode('latin-1', 'replace').strip()
            p += ln
        out.append(None if deleted else vals)
    return out


def read_shp(path):
    """Geometrie di un .shp: per ogni record (o None) [bbox, [parte, ...]], parte = [(x, y, z)...]
    (z None se il file non ha quote). Poligoni: anelli; linee: tratti; punti: un punto."""
    with open(path, 'rb') as f:
        data = f.read()
    out, o = [], 100
    while o + 8 <= len(data):
        clen = struct.unpack('>i', data[o + 4:o + 8])[0] * 2
        c = o + 8
        st = struct.unpack('<i', data[c:c + 4])[0] if clen >= 4 else 0
        if st in (5, 15, 25, 3, 13, 23) and clen >= 44:
            bb = struct.unpack('<4d', data[c + 4:c + 36])
            npart, npt = struct.unpack('<2i', data[c + 36:c + 44])
            parts = list(struct.unpack('<%di' % npart, data[c + 44:c + 44 + 4 * npart])) + [npt]
            p0 = c + 44 + 4 * npart
            xy = struct.unpack('<%dd' % (2 * npt), data[p0:p0 + 16 * npt])
            zs = None
            if st in (13, 15):
                z0 = p0 + 16 * npt + 16
                zs = struct.unpack('<%dd' % npt, data[z0:z0 + 8 * npt])
            rings = [[(xy[2 * j], xy[2 * j + 1], zs[j] if zs else None) for j in range(parts[k], parts[k + 1])] for k in range(npart)]
            out.append([bb, rings])
        elif st in (1, 11, 21) and clen >= 20:
            x, y = struct.unpack('<2d', data[c + 4:c + 20])
            z = struct.unpack('<d', data[c + 20:c + 28])[0] if st == 11 else None
            out.append([(x, y, x, y), [[(x, y, z)]]])
        else:
            out.append(None)
        o = c + clen
    return out


# ------------------------------------------------------------------ ricerca dei livelli
def _extract(folder, work):
    """Dagli zip (anche annidati) estrae SOLO gli shapefile degli edifici: un pacchetto DBGT
    provinciale supera 1 GB e contiene decine di temi che al gioco non servono. Un livello si
    riconosce leggendo l'intestazione del suo .dbf direttamente dentro lo zip.
    Restituisce (shapefile, file compatti)."""
    os.makedirs(work, exist_ok=True)
    shps, compact, gpkgs = [], [], []

    def scan_zip(zf, tag):
        members = zf.namelist()
        by_base = {}
        for m in members:
            base, ext = os.path.splitext(m)
            if ext.lower() in COMPANIONS:
                by_base.setdefault(base, {})[ext.lower()] = m
            if m.lower().endswith(COMPACT_EXT):
                dest = os.path.join(work, tag)
                zf.extract(m, dest)
                compact.append(os.path.join(dest, m))
            elif m.lower().endswith('.gpkg'):
                # i pacchetti del Geoportale sono GeoPackage (SQLite): si estrae e si controlla
                dest = os.path.join(work, tag)
                zf.extract(m, dest)
                p = os.path.join(dest, m)
                if gpkg_layers(p):
                    gpkgs.append(p)
                else:
                    os.remove(p)
        for base, parts in by_base.items():
            if '.dbf' not in parts or '.shp' not in parts:
                continue
            with zf.open(parts['.dbf']) as fh:
                if not layer_kind(_dbf_fields(fh)):
                    continue
            dest = os.path.join(work, tag)
            for m in parts.values():
                zf.extract(m, dest)
            shps.append(os.path.join(dest, parts['.shp']))
        for m in members:
            if m.lower().endswith('.zip'):
                try:
                    inner = zipfile.ZipFile(io.BytesIO(zf.read(m)))
                except zipfile.BadZipFile:
                    continue
                scan_zip(inner, tag + '_' + os.path.splitext(os.path.basename(m))[0])

    for root, _, files in os.walk(folder):
        if os.path.abspath(root).startswith(os.path.abspath(work)):
            continue
        for f in files:
            p = os.path.join(root, f)
            fl = f.lower()
            if fl.endswith('.zip'):
                try:
                    with zipfile.ZipFile(p) as zf:
                        scan_zip(zf, os.path.splitext(f)[0])
                except zipfile.BadZipFile:
                    print('  zip non valido:', p)
            elif fl.endswith(COMPACT_EXT):
                compact.append(p)
            elif fl.endswith('.gpkg') and gpkg_layers(p):
                gpkgs.append(p)
            elif fl.endswith('.shp'):
                dbf = os.path.splitext(p)[0] + '.dbf'
                if os.path.exists(dbf):
                    with open(dbf, 'rb') as fh:
                        if layer_kind(_dbf_fields(fh)):
                            shps.append(p)
    print('  livelli DBGT trovati:', len(shps), 'shapefile,', len(gpkgs), 'GeoPackage,', len(compact), 'file compatti')
    for x in (shps + gpkgs + compact)[:12]:
        print('    ', os.path.relpath(x, work) if os.path.abspath(x).startswith(os.path.abspath(work)) else x)
    return sorted(set(shps)), sorted(set(compact)), sorted(set(gpkgs))


# ------------------------------------------------------------------ GeoPackage
def gpkg_layers(path):
    """[(tabella, colonna geometria, wkt del sistema, tipo, colonne)] dei livelli degli edifici."""
    try:
        db = sqlite3.connect('file:%s?mode=ro' % path, uri=True)
        out = []
        srs = dict(db.execute('select srs_id, definition from gpkg_spatial_ref_sys'))
        for table, col, srs_id in db.execute('select table_name, column_name, srs_id from gpkg_geometry_columns').fetchall():
            cols = [r[1] for r in db.execute('pragma table_info("%s")' % table.replace('"', '""'))]
            kind = layer_kind(cols)
            if kind:
                out.append((table, col, srs.get(srs_id, ''), kind, cols))
        db.close()
        return out
    except sqlite3.Error:
        return []


def gpkg_parts(b):
    """Geometria GeoPackage (intestazione + WKB, anche Z/M) -> [parte], parte = [(x, y, z)...]:
    anello esterno per i poligoni, tratto per le linee, un punto per i punti (z None se assente)."""
    env = (b[3] >> 1) & 7
    out = []

    def geom(o):
        bo = '<' if b[o] == 1 else '>'
        t = struct.unpack(bo + 'I', b[o + 1:o + 5])[0]
        hz, hm = bool(t & 0x80000000), bool(t & 0x40000000)
        t &= 0x0FFFFFFF
        base, dim = t % 1000, t // 1000
        hz = hz or dim in (1, 3)
        nd = 2 + hz + (hm or dim in (2, 3))
        o += 5

        def coords(o, n):
            v = struct.unpack(bo + '%dd' % (n * nd), b[o:o + 8 * n * nd])
            return [(v[i * nd], v[i * nd + 1], v[i * nd + 2] if hz else None) for i in range(n)]
        if base == 1:
            out.append(coords(o, 1))
            return o + 8 * nd
        if base == 2:
            n = struct.unpack(bo + 'I', b[o:o + 4])[0]; o += 4
            out.append(coords(o, n))
            return o + 8 * n * nd
        if base == 3:
            nr = struct.unpack(bo + 'I', b[o:o + 4])[0]; o += 4
            for r in range(nr):
                n = struct.unpack(bo + 'I', b[o:o + 4])[0]; o += 4
                if r == 0:
                    out.append(coords(o, n))
                o += 8 * n * nd
            return o
        if base in (4, 5, 6, 7):
            n = struct.unpack(bo + 'I', b[o:o + 4])[0]; o += 4
            for _ in range(n):
                o = geom(o)
            return o
        raise ValueError('geometria non gestita %d' % t)
    geom(8 + {0: 0, 1: 32, 2: 48, 3: 48, 4: 64}[env])
    return out


def gpkg_polys(b):
    """Solo planimetria: [anello esterno per poligono] con punti (x, y)."""
    return [[(p[0], p[1]) for p in part] for part in gpkg_parts(b)]


def read_prj(shp):
    prj = os.path.splitext(shp)[0] + '.prj'
    return open(prj, encoding='latin-1').read() if os.path.exists(prj) else ''


# ------------------------------------------------------------------ conversione nel piano del gioco
def _num(v):
    try:
        v = float(str(v).replace(',', '.'))
        return v if math.isfinite(v) else 0.0
    except (TypeError, ValueError):
        return 0.0


def _attrs(kind, rec):
    """Attributi utili, indipendentemente dal prefisso dei nomi dei campi."""
    get = lambda suffix: next((v for k, v in rec.items() if k.endswith(suffix)), '')
    if kind == 'vol':
        return [get('un_vol_av'), get('un_vol_por'), get('un_vol_ex')]
    if kind == 'quo':
        return [get('pt_quo_sed')]
    if kind == 'cv':
        return [get('cv_liv_q'), get('cv_liv_ty')]
    if kind == 'str':
        return [get('el_str_sed'), get('el_str_liv'), get('el_str_ty')]
    return [get('edifc_uso'), get('cr_edf_ct')]


def _split_vol(kind, attrs, parts):
    """Per gli edifici: anelli in pianta + quota del piede (dalla Z della geometria) come 4o attributo."""
    if kind not in ('vol', 'body'):
        return attrs, parts
    z = next((p[2] for part in parts for p in part if len(p) > 2 and p[2] is not None and math.isfinite(p[2])), None)
    a = list(attrs[:3]) + ['' if z is None else '%.2f' % z] if kind == 'vol' else attrs
    return a, [[(p[0], p[1]) for p in part] for part in parts]


def _undelta(flat, n):
    """Decodifica una lista piatta di differenze (n valori per punto)."""
    acc = [0] * n
    out = []
    for i in range(0, len(flat) - n + 1, n):
        for k in range(n):
            acc[k] += flat[i + k]
        out.append(tuple(acc))
    return out


def _source_name(path):
    """Nome del pacchetto di provenienza: le parti _1, _2... dello stesso pacchetto sono una sola fonte."""
    n = os.path.basename(path)
    for ext in (COMPACT_EXT, '.gpkg', '.shp'):
        if n.lower().endswith(ext):
            n = n[:-len(ext)]
    return re.sub(r'_\d+$', '', n)


def iter_layers(folder, work):
    """(tipo, wkt del sistema di riferimento, [(attributi, anelli)]) per ogni livello trovato."""
    shps, compact, gpkgs = _extract(folder, work)
    for gp in gpkgs:
        for table, col, wkt, kind, cols in gpkg_layers(gp):
            db = sqlite3.connect('file:%s?mode=ro' % gp, uri=True)
            n = db.execute('select count(*) from "%s"' % table).fetchone()[0]
            print('  lettura', os.path.basename(gp), table, n, 'oggetti')
            q = 'select "%s", %s from "%s"' % (col, ', '.join('"%s"' % c for c in cols if c != col), table)
            other = [c.lower() for c in cols if c != col]

            def gen(db=db, q=q, other=other, kind=kind):
                for row in db.execute(q):
                    if not row[0]:
                        continue
                    rec = {k: ('' if v is None else str(v).strip()) for k, v in zip(other, row[1:])}
                    try:
                        parts = gpkg_parts(row[0])
                    except (ValueError, struct.error):
                        continue
                    for part in parts:          # un record per poligono (anello esterno) o per tratto
                        yield _split_vol(kind, _attrs(kind, rec), [part])
            yield kind, wkt, gen(), _source_name(gp)
    for shp in shps:
        recs = read_dbf(os.path.splitext(shp)[0] + '.dbf')
        kind = layer_kind(list(recs[0].keys()) if recs and recs[0] else [])
        if not kind:
            continue
        geoms = read_shp(shp)
        print('  lettura', os.path.basename(shp), len(geoms), 'oggetti')
        yield kind, read_prj(shp), (_split_vol(kind, _attrs(kind, r), g[1]) for r, g in zip(recs, geoms) if r and g), _source_name(shp)
    for cp in compact:
        d = json.loads(gzip.decompress(open(cp, 'rb').read()))
        for lay in d['layers']:
            print('  lettura', os.path.basename(cp), lay['kind'], len(lay['recs']), 'oggetti')

            def gen(lay=lay):
                kind = lay['kind']
                for rec in lay['recs']:
                    if kind == 'quo':          # punti: terne (dm, dm, cm) in differenze
                        for x, y, z in _undelta(rec['p'], 3):
                            yield [''], [[(x / 10, y / 10, z / 100)]]
                        continue
                    if kind in ALTI_KINDS:     # linee con quota
                        yield rec.get('a', []), [[(x / 10, y / 10, z / 100) for x, y, z in _undelta(f, 3)] for f in rec['r']]
                        continue
                    rings = [[(x / 10, y / 10) for x, y in _undelta(f, 2)] for f in rec['r']]
                    a = list(rec['a'])
                    if kind == 'vol':
                        a = a[:3] + ['%.2f' % (rec['z'] / 100) if rec.get('z') is not None else '']
                    yield a, rings
            yield lay['kind'], d.get('prj', ''), gen(), _source_name(cp)


def load_dbgt(folder, work, fwd, bbox):
    """fwd(lat, lon) -> (x, z) del gioco; bbox = [s, w, n, e].

    Restituisce (volumi, corpi, info, alti):
      volumi: [{'ring': [(x, z)...], 'h': altezza m, 'por', 'ex', 'src', 'z0': quota del piede o None}]
      corpi:  [{'ring': [...], 'uso': codice uso, 'cat': categoria}]
      alti:   {'pts': [(x, z, quota)] punti a terra (punti quotati e curve di livello),
               'roads': [[(x, z, quota)...]] assi stradali con la quota}
    """
    try:
        from pyproj import CRS, Transformer
    except ImportError as ex:  # pragma: no cover
        raise SystemExit('Per convertire le coordinate del DBGT serve pyproj: pip install pyproj') from ex
    s, w, n, e = bbox
    vols, bodies = [], []
    alti = {'pts': [], 'roads': []}
    info = Counter()
    inside = lambda lo, la: s - 0.002 <= la <= n + 0.002 and w - 0.002 <= lo <= e + 0.002
    for kind, wkt, recs, src in iter_layers(folder, work):
        try:
            crs = CRS.from_wkt(wkt) if wkt else CRS.from_epsg(32632)  # standard attuale: UTM 32N
        except Exception:
            crs = CRS.from_epsg(32632)
        tr = Transformer.from_crs(crs, CRS.from_epsg(4326), always_xy=True)
        info['crs:' + crs.name] += 1
        info['livelli_' + kind] += 1
        if kind in ALTI_KINDS:
            # le quote sono molte: si convertono a blocchi
            buf = []

            def flush(buf=buf, tr=tr, kind=kind):
                if not buf:
                    return
                xs = [p[0] for part in buf for p in part]; ys = [p[1] for part in buf for p in part]
                lo, la = tr.transform(xs, ys)
                i = 0
                for part in buf:
                    g = []
                    for p in part:
                        if inside(lo[i], la[i]):
                            g.append(fwd(la[i], lo[i]) + (p[2],))
                        i += 1
                    if not g:
                        continue
                    if kind == 'str':
                        if len(g) >= 2:
                            alti['roads'].append(g)
                    else:
                        alti['pts'].extend(g)
                    info['quote_' + kind] += len(g)
                buf.clear()
            npt = 0
            for attrs, parts in recs:
                if kind == 'quo' and attrs and str(attrs[0]).strip() == '0302':
                    info['quo_gronda_scartati'] += 1   # quote in gronda: non sono il terreno
                    continue
                for part in parts:
                    pts = [p for p in part if len(p) > 2 and p[2] is not None and math.isfinite(p[2]) and -50 < p[2] < 5000]
                    if pts:
                        buf.append(pts); npt += len(pts)
                if npt > 50000:
                    flush(); npt = 0
            flush()
            continue
        for attrs, rings in recs:
            for pts in rings:
                if len(pts) < 4:
                    continue
                # negli shapefile gli anelli esterni sono orari, i fori antiorari: tieni gli esterni
                a2 = sum(pts[i][0] * pts[i + 1][1] - pts[i + 1][0] * pts[i][1] for i in range(len(pts) - 1))
                if a2 > 0 and len(rings) > 1:
                    continue
                lonlat = [tr.transform(x, y) for x, y in pts]
                if not any(inside(lo, la) for lo, la in lonlat):
                    continue
                ring = [fwd(la, lo) for lo, la in lonlat]
                if kind == 'vol':
                    z0 = _num(attrs[3]) if len(attrs) > 3 and str(attrs[3]).strip() else None
                    vols.append({'ring': ring, 'h': _num(attrs[0]), 'por': str(attrs[1]), 'ex': str(attrs[2]), 'src': src,
                                 'z0': z0 if z0 and z0 > 1 else None})
                    info['por:' + str(attrs[1] or '-')] += 1
                else:
                    bodies.append({'ring': ring, 'uso': str(attrs[0]), 'cat': str(attrs[1])})
                    info['uso:' + str(attrs[0] or '-')] += 1
    return vols, bodies, info, alti
