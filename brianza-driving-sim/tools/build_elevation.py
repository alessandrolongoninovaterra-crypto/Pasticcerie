#!/usr/bin/env python3
"""Step 2: modello altimetrico reale.

Scarica le tile altimetriche "Terrarium" (Mapzen/AWS Open Data, derivate da
SRTM/EU-DEM e altre fonti pubbliche), le ricampiona su una griglia metrica
regolare nel sistema locale del gioco e scrive data/height.js.

Uso: python3 build_elevation.py <bbox.json> <cache_dir> <out_data_dir>
"""
import base64, io, json, math, os, sys, urllib.request
import numpy as np
from PIL import Image
from common import Proj, CFG, write_js

bbox = json.load(open(sys.argv[1]))['bbox']
cache = sys.argv[2]
out = sys.argv[3]
os.makedirs(cache, exist_ok=True)
P = Proj(bbox)
Z = 14
N = 2 ** Z


def tile_xy(lat, lon):
    x = (lon + 180) / 360 * N
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * N
    return x, y


s, w, n, e = bbox
x0, y0 = tile_xy(n + 0.01, w - 0.01)
x1, y1 = tile_xy(s - 0.01, e + 0.01)
tx0, ty0, tx1, ty1 = int(x0), int(y0), int(x1), int(y1)
W = (tx1 - tx0 + 1) * 256
H = (ty1 - ty0 + 1) * 256
mosaic = np.zeros((H, W), np.float32)
for ty in range(ty0, ty1 + 1):
    for tx in range(tx0, tx1 + 1):
        fn = os.path.join(cache, f'{Z}_{tx}_{ty}.png')
        if not os.path.exists(fn):
            url = f'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{Z}/{tx}/{ty}.png'
            for attempt in range(4):
                try:
                    data = urllib.request.urlopen(url, timeout=60).read()
                    open(fn, 'wb').write(data)
                    break
                except Exception as ex:
                    print('retry', url, ex)
        im = np.asarray(Image.open(fn).convert('RGB')).astype(np.float32)
        h = im[:, :, 0] * 256 + im[:, :, 1] + im[:, :, 2] / 256 - 32768
        mosaic[(ty - ty0) * 256:(ty - ty0 + 1) * 256, (tx - tx0) * 256:(tx - tx0 + 1) * 256] = h
print('mosaic', mosaic.shape, mosaic.min(), mosaic.max())

step = CFG['height_grid_m']
nx = int(math.ceil((P.xmax - P.xmin) / step)) + 1
nz = int(math.ceil((P.zmax - P.zmin) / step)) + 1
xs = P.xmin + np.arange(nx) * step
zs = P.zmin + np.arange(nz) * step
X, Zg = np.meshgrid(xs, zs)
lat = P.lat0 - Zg / P.kz
lon = P.lon0 + X / P.kx
px = (lon + 180) / 360 * N * 256 - tx0 * 256 - 0.5
lr = np.radians(lat)
py = (1 - np.log(np.tan(lr) + 1 / np.cos(lr)) / np.pi) / 2 * N * 256 - ty0 * 256 - 0.5
ix = np.clip(np.floor(px).astype(int), 0, W - 2)
iy = np.clip(np.floor(py).astype(int), 0, H - 2)
fx = px - ix
fy = py - iy
hgt = (mosaic[iy, ix] * (1 - fx) * (1 - fy) + mosaic[iy, ix + 1] * fx * (1 - fy)
       + mosaic[iy + 1, ix] * (1 - fx) * fy + mosaic[iy + 1, ix + 1] * fx * fy)

# leggero filtro gaussiano (sigma ~ 1 cella) per togliere il rumore del DEM
k = np.array([1, 4, 6, 4, 1], np.float32); k /= k.sum()
pad = np.pad(hgt, 2, mode='edge')
tmp = sum(k[i] * pad[:, i:i + nx] for i in range(5))
hgt = sum(k[i] * tmp[i:i + nz, :] for i in range(5))
print('grid', nx, nz, 'h', hgt.min(), hgt.max())

q = np.clip(np.round(hgt * 10), 0, 65535).astype('<u2')  # decimetri
np.save(os.path.join(cache, 'height.npy'), q)
json.dump({'nx': nx, 'nz': nz, 'step': step, 'x0': P.xmin, 'z0': P.zmin, 'scale': 0.1},
          open(os.path.join(cache, 'height.json'), 'w'))
size = write_js(os.path.join(out, 'height.js'), 'height', raw=q.tobytes())
print('height.js', size)
