#!/usr/bin/env python3
"""Riduce un pacchetto DBGT (anche quello provinciale da 1 GB) ai soli livelli degli edifici.

Uso:  python3 dbgt_solo_edifici.py <pacchetto.zip o cartella> [uscita.zip]

Crea uno zip piccolo (di solito poche decine di MB) con gli shapefile delle unita' volumetriche e
dei corpi edificati, da mettere in brianza-driving-sim/dbgt/ o da inviare per l'importazione.
Usa solo la libreria standard di Python: non serve installare nulla.
"""
import os, sys, tempfile, zipfile
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

src = sys.argv[1] if len(sys.argv) > 1 else sys.exit(__doc__)
out = sys.argv[2] if len(sys.argv) > 2 else 'DBGT_solo_edifici.zip'

from dbgt import _extract  # solo libreria standard

folder = src
tmp_in = None
if os.path.isfile(src):
    tmp_in = tempfile.mkdtemp(prefix='dbgt_in_')
    try:
        os.symlink(os.path.abspath(src), os.path.join(tmp_in, os.path.basename(src)))
    except OSError:  # Windows senza permessi per i link: copia
        import shutil
        shutil.copy(src, tmp_in)
    folder = tmp_in
work = tempfile.mkdtemp(prefix='dbgt_ed_')
shps = _extract(folder, work)
n = 0
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    for shp in shps:
        base = os.path.splitext(shp)[0]
        for ext in ('.shp', '.shx', '.dbf', '.prj', '.cpg'):
            p = base + ext
            if os.path.exists(p):
                z.write(p, os.path.relpath(p, work if p.startswith(work) else os.path.dirname(folder)))
                n += 1
print(f'{out}: {len(shps)} livelli, {n} file, {os.path.getsize(out) / 1e6:.1f} MB')
