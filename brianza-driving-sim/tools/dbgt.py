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

try:
    import shapefile  # pyshp
    from pyproj import CRS, Transformer
except ImportError as ex:  # pragma: no cover
    raise SystemExit('Per il DBGT servono i pacchetti pyshp e pyproj: pip install pyshp pyproj') from ex


def _extract(folder, work):
    """Estrae gli zip (anche annidati) in work e restituisce l'elenco degli .shp."""
    os.makedirs(work, exist_ok=True)
    pending = []
    for root, _, files in os.walk(folder):
        for f in files:
            if f.lower().endswith('.zip'):
                pending.append(os.path.join(root, f))
    seen = set()
    while pending:
        z = pending.pop()
        if z in seen:
            continue
        seen.add(z)
        dest = os.path.join(work, os.path.splitext(os.path.basename(z))[0] + '_%d' % len(seen))
        try:
            with zipfile.ZipFile(z) as zf:
                zf.extractall(dest)
        except zipfile.BadZipFile:
            print('  zip non valido:', z)
            continue
        for root, _, files in os.walk(dest):
            for f in files:
                if f.lower().endswith('.zip'):
                    pending.append(os.path.join(root, f))
    shps = []
    for base in (folder, work):
        for root, _, files in os.walk(base):
            for f in files:
                if f.lower().endswith('.shp'):
                    shps.append(os.path.join(root, f))
    return sorted(set(shps))


def _transformer(shp):
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
