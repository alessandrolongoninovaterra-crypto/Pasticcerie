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
import gzip, io, json, math, os, struct, zipfile
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
    names = [n.lower() for n in names]
    if any(n.endswith('un_vol_av') for n in names):
        return 'vol'
    if any(n.startswith('cr_edf') or n.endswith('edifc_uso') for n in names):
        return 'body'
    return None


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
    """Poligoni di un .shp: per ogni record (o None se vuoto) [bbox, [anello, ...]]."""
    with open(path, 'rb') as f:
        data = f.read()
    out, o = [], 100
    while o + 8 <= len(data):
        clen = struct.unpack('>i', data[o + 4:o + 8])[0] * 2
        c = o + 8
        st = struct.unpack('<i', data[c:c + 4])[0] if clen >= 4 else 0
        if st in (5, 15, 25) and clen >= 44:
            bb = struct.unpack('<4d', data[c + 4:c + 36])
            npart, npt = struct.unpack('<2i', data[c + 36:c + 44])
            parts = list(struct.unpack('<%di' % npart, data[c + 44:c + 44 + 4 * npart])) + [npt]
            p0 = c + 44 + 4 * npart
            xy = struct.unpack('<%dd' % (2 * npt), data[p0:p0 + 16 * npt])
            rings = [[(xy[2 * j], xy[2 * j + 1]) for j in range(parts[k], parts[k + 1])] for k in range(npart)]
            out.append([bb, rings])
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
    shps, compact = [], []

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
            elif fl.endswith('.shp'):
                dbf = os.path.splitext(p)[0] + '.dbf'
                if os.path.exists(dbf):
                    with open(dbf, 'rb') as fh:
                        if layer_kind(_dbf_fields(fh)):
                            shps.append(p)
    print('  livelli degli edifici trovati:', len(shps), 'shapefile,', len(compact), 'file compatti')
    for x in (shps + compact)[:12]:
        print('    ', os.path.relpath(x, work) if os.path.abspath(x).startswith(os.path.abspath(work)) else x)
    return sorted(set(shps)), sorted(set(compact))


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
    return [get('edifc_uso'), get('cr_edf_ct')]


def iter_layers(folder, work):
    """(tipo, wkt del sistema di riferimento, [(attributi, anelli)]) per ogni livello trovato."""
    shps, compact = _extract(folder, work)
    for shp in shps:
        recs = read_dbf(os.path.splitext(shp)[0] + '.dbf')
        kind = layer_kind(list(recs[0].keys()) if recs and recs[0] else [])
        if not kind:
            continue
        geoms = read_shp(shp)
        print('  lettura', os.path.basename(shp), len(geoms), 'oggetti')
        yield kind, read_prj(shp), ((_attrs(kind, r), g[1]) for r, g in zip(recs, geoms) if r and g)
    for cp in compact:
        d = json.loads(gzip.decompress(open(cp, 'rb').read()))
        for lay in d['layers']:
            print('  lettura', os.path.basename(cp), lay['kind'], len(lay['recs']), 'oggetti')

            def gen(lay=lay):
                for rec in lay['recs']:
                    rings = []
                    for flat in rec['r']:
                        x = y = 0
                        pts = []
                        for i in range(0, len(flat), 2):
                            x += flat[i]; y += flat[i + 1]
                            pts.append((x / 10, y / 10))
                        rings.append(pts)
                    yield rec['a'], rings
            yield lay['kind'], d.get('prj', ''), gen()


def load_dbgt(folder, work, fwd, bbox):
    """fwd(lat, lon) -> (x, z) del gioco; bbox = [s, w, n, e].

    Restituisce (volumi, corpi, info):
      volumi: [{'ring': [(x, z)...], 'h': altezza m, 'por': tipo porzione, 'ex': tipo estrusione}]
      corpi:  [{'ring': [...], 'uso': codice uso, 'cat': categoria}]
    """
    try:
        from pyproj import CRS, Transformer
    except ImportError as ex:  # pragma: no cover
        raise SystemExit('Per convertire le coordinate del DBGT serve pyproj: pip install pyproj') from ex
    s, w, n, e = bbox
    vols, bodies = [], []
    info = Counter()
    for kind, wkt, recs in iter_layers(folder, work):
        try:
            crs = CRS.from_wkt(wkt) if wkt else CRS.from_epsg(32632)  # standard attuale: UTM 32N
        except Exception:
            crs = CRS.from_epsg(32632)
        tr = Transformer.from_crs(crs, CRS.from_epsg(4326), always_xy=True)
        info['crs:' + crs.name] += 1
        info['livelli_' + kind] += 1
        for attrs, rings in recs:
            for pts in rings:
                if len(pts) < 4:
                    continue
                # negli shapefile gli anelli esterni sono orari, i fori antiorari: tieni gli esterni
                a2 = sum(pts[i][0] * pts[i + 1][1] - pts[i + 1][0] * pts[i][1] for i in range(len(pts) - 1))
                if a2 > 0 and len(rings) > 1:
                    continue
                lonlat = [tr.transform(x, y) for x, y in pts]
                if not any(s - 0.002 <= la <= n + 0.002 and w - 0.002 <= lo <= e + 0.002 for lo, la in lonlat):
                    continue
                ring = [fwd(la, lo) for lo, la in lonlat]
                if kind == 'vol':
                    vols.append({'ring': ring, 'h': _num(attrs[0]), 'por': str(attrs[1]), 'ex': str(attrs[2])})
                    info['por:' + str(attrs[1] or '-')] += 1
                else:
                    bodies.append({'ring': ring, 'uso': str(attrs[0]), 'cat': str(attrs[1])})
                    info['uso:' + str(attrs[0] or '-')] += 1
    return vols, bodies, info
