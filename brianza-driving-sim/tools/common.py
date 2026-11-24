"""Proiezione condivisa tra pipeline dati e gioco.

Piano tangente locale equirettangolare centrato sul centro del bbox:
  x = R * dlon * cos(lat0)   (metri verso Est)
  z = -R * dlat              (metri verso Sud: -z = Nord, convenzione Three.js)
Su ~25 km l'errore di scala e' inferiore allo 0,01%.
"""
import base64, gzip, json, math, os

R = 6378137.0
HERE = os.path.dirname(os.path.abspath(__file__))
CFG = json.load(open(os.path.join(HERE, 'config.json')))


class Proj:
    def __init__(self, bbox):
        s, w, n, e = bbox
        self.bbox = bbox
        self.lat0 = (s + n) / 2
        self.lon0 = (w + e) / 2
        self.kx = R * math.radians(1) * math.cos(math.radians(self.lat0))
        self.kz = R * math.radians(1)
        self.xmin, self.zmax = self.fwd(s, w)
        self.xmax, self.zmin = self.fwd(n, e)

    def fwd(self, lat, lon):
        return (lon - self.lon0) * self.kx, -(lat - self.lat0) * self.kz

    def inv(self, x, z):
        return self.lat0 - z / self.kz, self.lon0 + x / self.kx

    def meta(self):
        return {'lat0': self.lat0, 'lon0': self.lon0, 'kx': self.kx, 'kz': self.kz,
                'bbox': self.bbox, 'xmin': self.xmin, 'xmax': self.xmax,
                'zmin': self.zmin, 'zmax': self.zmax}


def write_js(path, key, obj=None, raw=None):
    """I dati sono file .js (non .json) cosi' il gioco funziona anche aprendo
    index.html con doppio clic (file://), dove fetch() e' bloccato.
    Il contenuto e' compresso gzip + base64 e viene decompresso nel browser
    con DecompressionStream."""
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if raw is None:
        payload, fmt = json.dumps(obj, separators=(',', ':')).encode(), 'json'
    else:
        payload, fmt = raw, 'bin'
    b64 = base64.b64encode(gzip.compress(payload, 9, mtime=0)).decode()
    with open(path, 'w') as f:
        f.write('BDS_DATA(%s,%s,"%s");\n' % (json.dumps(key), json.dumps(fmt), b64))
    return os.path.getsize(path)
