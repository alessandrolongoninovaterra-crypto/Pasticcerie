"""Lettura del DBGT (Database Geo-Topografico) di Regione Lombardia.

Si scaricano dal Geoportale della Lombardia i pacchetti DBGT dei comuni (zip con shapefile)
e li si mette in una cartella. Questo modulo:
  * estrae gli zip, cerca ricorsivamente tutti gli .shp;
  * riconosce i livelli dai NOMI DEI CAMPI, non dai nomi dei file (che cambiano tra le
    edizioni): le "unita' volumetriche" hanno il campo UN_VOL_AV (altezza del volume), i
    "corpi edificati" hanno campi CR_EDF_* (uso in EDIFC_USO);
  * legge il sistema di riferimento dal .prj (UTM32N, RDN2008, Gauss-Boaga...) e converte
    le coordinate nel piano locale del gioco.

Le unita' volumetriche sono porzioni di edificio di altezza omogenea: un palazzo con un corpo
basso e una torre sono due unita' con altezze diverse, ed e' proprio quello che serve al gioco.
"""
import os, zipfile, math
from collections import Counter



def _deps():
    # importati solo quando servono: lo script dbgt_solo_edifici.py usa solo la libreria standard
    try:
        import shapefile  # pyshp
        from pyproj import CRS, Transformer
    except ImportError as ex:  # pragma: no cover
        raise SystemExit('Per leggere il DBGT servono pyshp e pyproj: pip install pyshp pyproj') from ex
    return shapefile, CRS, Transformer


COMPANIONS = ('.shp', '.shx', '.dbf', '.prj', '.cpg')


def _wanted_fields(names):
    names = [n.lower() for n in names]
    return any(n.endswith('un_vol_av') for n in names) or any(n.startswith('cr_edf') or n.endswith('edifc_uso') for n in names)


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


def _extract(folder, work):
    """Dagli zip (anche annidati) estrae SOLO gli shapefile degli edifici: il pacchetto DBGT di
    una provincia supera 1 GB e contiene decine di temi che al gioco non servono. Un livello si
    riconosce leggendo l'intestazione del suo .dbf direttamente dentro lo zip."""
    os.makedirs(work, exist_ok=True)
    shps = []

    def scan_zip(zf, tag):
        members = zf.namelist()
        by_base = {}
        for m in members:
            base, ext = os.path.splitext(m)
            if ext.lower() in COMPANIONS:
                by_base.setdefault(base, {})[ext.lower()] = m
        for base, parts in by_base.items():
            if '.dbf' not in parts or '.shp' not in parts:
                continue
            with zf.open(parts['.dbf']) as fh:
                if not _wanted_fields(_dbf_fields(fh)):
                    continue
            dest = os.path.join(work, tag)
            for m in parts.values():
                zf.extract(m, dest)
            shps.append(os.path.join(dest, parts['.shp']))
        for m in members:
            if m.lower().endswith('.zip'):
                import io
                try:
                    inner = zipfile.ZipFile(io.BytesIO(zf.read(m)))
                except zipfile.BadZipFile:
                    continue
                scan_zip(inner, tag + '_' + os.path.splitext(os.path.basename(m))[0])

    for root, _, files in os.walk(folder):
        for f in files:
            p = os.path.join(root, f)
            if f.lower().endswith('.zip'):
                try:
                    with zipfile.ZipFile(p) as zf:
                        scan_zip(zf, os.path.splitext(f)[0])
                except zipfile.BadZipFile:
                    print('  zip non valido:', p)
            elif f.lower().endswith('.shp'):
                dbf = os.path.splitext(p)[0] + '.dbf'
                if os.path.exists(dbf):
                    with open(dbf, 'rb') as fh:
                        if _wanted_fields(_dbf_fields(fh)):
                            shps.append(p)
    print('  shapefile degli edifici trovati:', len(shps), *[os.path.relpath(x, work) if x.startswith(work) else x for x in shps[:12]], sep='\n    ')
    return sorted(set(shps))


def _transformer(shp):
    _, CRS, Transformer = _deps()
    prj = os.path.splitext(shp)[0] + '.prj'
    crs = None
    if os.path.exists(prj):
        try:
            crs = CRS.from_wkt(open(prj, encoding='latin-1').read())
        except Exception:
            crs = None
    if crs is None:
        crs = CRS.from_epsg(32632)  # standard attuale del DBT lombardo (UTM 32N)
    return Transformer.from_crs(crs, CRS.from_epsg(4326), always_xy=True), crs.name


def _num(v):
    try:
        v = float(str(v).replace(',', '.'))
        return v if math.isfinite(v) else 0.0
    except (TypeError, ValueError):
        return 0.0


def load_dbgt(folder, work, fwd, bbox):
    """fwd(lat, lon) -> (x, z) del gioco; bbox = [s, w, n, e].

    Restituisce (volumi, corpi, info):
      volumi: [{'ring': [(x, z)...], 'h': altezza m, 'por': tipo porzione, 'ex': tipo estrusione}]
      corpi:  [{'ring': [...], 'uso': codice uso, 'cat': categoria}]
    """
    shapefile, _, _ = _deps()
    s, w, n, e = bbox
    vols, bodies = [], []
    info = Counter()
    for shp in _extract(folder, work):
        try:
            rd = shapefile.Reader(shp, encoding='latin-1')
        except Exception as ex:
            print('  shapefile illeggibile:', shp, ex)
            continue
        names = [f[0].lower() for f in rd.fields[1:]]
        print('  lettura', os.path.basename(shp), len(rd), 'oggetti')
        is_vol = any(nm.endswith('un_vol_av') for nm in names)
        is_body = (not is_vol) and any(nm.startswith('cr_edf') or nm.endswith('edifc_uso') for nm in names)
        if not (is_vol or is_body) or rd.shapeType not in (shapefile.POLYGON, shapefile.POLYGONZ, shapefile.POLYGONM):
            continue
        tr, crs_name = _transformer(shp)
        info['crs:' + crs_name] += 1
        col = lambda suffix: next((i for i, nm in enumerate(names) if nm.endswith(suffix)), None)
        i_h, i_por, i_ex = col('un_vol_av'), col('un_vol_por'), col('un_vol_ex')
        i_uso, i_cat = col('edifc_uso'), col('cr_edf_ct')
        for sr in rd.iterShapeRecords():
            shp_ = sr.shape
            if not shp_.points:
                continue
            parts = list(shp_.parts) + [len(shp_.points)]
            for k in range(len(parts) - 1):
                pts = shp_.points[parts[k]:parts[k + 1]]
                if len(pts) < 4:
                    continue
                # negli shapefile gli anelli esterni sono orari, i fori antiorari: tieni i soli esterni
                a2 = sum(pts[i][0] * pts[i + 1][1] - pts[i + 1][0] * pts[i][1] for i in range(len(pts) - 1))
                if a2 > 0 and len(parts) > 2:
                    continue
                lonlat = [tr.transform(x, y) for x, y in pts]
                if not any(s - 0.002 <= la <= n + 0.002 and w - 0.002 <= lo <= e + 0.002 for lo, la in lonlat):
                    continue
                ring = [fwd(la, lo) for lo, la in lonlat]
                rec = sr.record
                if is_vol:
                    vols.append({'ring': ring, 'h': _num(rec[i_h]) if i_h is not None else 0.0,
                                 'por': str(rec[i_por]).strip() if i_por is not None else '',
                                 'ex': str(rec[i_ex]).strip() if i_ex is not None else ''})
                    info['por:' + (str(rec[i_por]).strip() if i_por is not None else '-')] += 1
                else:
                    bodies.append({'ring': ring, 'uso': str(rec[i_uso]).strip() if i_uso is not None else '',
                                   'cat': str(rec[i_cat]).strip() if i_cat is not None else ''})
                    info['uso:' + (str(rec[i_uso]).strip() if i_uso is not None else '-')] += 1
        info['file_vol' if is_vol else 'file_corpi'] += 1
    return vols, bodies, info
