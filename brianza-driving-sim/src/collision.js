// Collisioni 2D (pianta) con edifici, alberi e isole delle rotatorie.
const CELL = 24;

export class Collision {
  constructor() { this.grid = new Map(); this.byTile = new Map(); }

  _cells(minx, minz, maxx, maxz, cb) {
    const i0 = Math.floor(minx / CELL), i1 = Math.floor(maxx / CELL), j0 = Math.floor(minz / CELL), j1 = Math.floor(maxz / CELL);
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) cb(j * 100000 + i);
  }

  _add(tile, obj) {
    this._cells(obj.minx, obj.minz, obj.maxx, obj.maxz, (k) => {
      let a = this.grid.get(k);
      if (!a) this.grid.set(k, a = []);
      a.push(obj);
    });
    let list = this.byTile.get(tile);
    if (!list) this.byTile.set(tile, list = []);
    list.push(obj);
  }

  addPolygon(tile, ring) {
    let minx = 1e9, minz = 1e9, maxx = -1e9, maxz = -1e9;
    for (let i = 0; i < ring.length; i += 2) {
      minx = Math.min(minx, ring[i]); maxx = Math.max(maxx, ring[i]);
      minz = Math.min(minz, ring[i + 1]); maxz = Math.max(maxz, ring[i + 1]);
    }
    if (maxx - minx < 1.5 && maxz - minz < 1.5) return null;
    const o = { ring, tile, minx, minz, maxx, maxz };
    this._add(tile, o);
    return o;
  }

  addCircle(tile, x, z, r) { const o = { x, z, r, tile, minx: x - r, minz: z - r, maxx: x + r, maxz: z + r }; this._add(tile, o); return o; }

  remove(obj) {
    this._cells(obj.minx, obj.minz, obj.maxx, obj.maxz, (k) => {
      const a = this.grid.get(k);
      if (!a) return;
      const i = a.indexOf(obj);
      if (i >= 0) a.splice(i, 1);
      if (!a.length) this.grid.delete(k);
    });
    const list = this.byTile.get(obj.tile);
    if (list) { const i = list.indexOf(obj); if (i >= 0) list.splice(i, 1); }
  }

  removeTile(tile) {
    const list = this.byTile.get(tile);
    if (!list) return;
    const set = new Set(list);
    for (const obj of list) {
      this._cells(obj.minx, obj.minz, obj.maxx, obj.maxz, (k) => {
        const a = this.grid.get(k);
        if (!a) return;
        const f = a.filter((o) => !set.has(o));
        if (f.length) this.grid.set(k, f); else this.grid.delete(k);
      });
    }
    this.byTile.delete(tile);
  }

  // cerchio (x,z,r) contro ostacoli: restituisce la spinta minima {nx,nz,depth} o null
  resolveCircle(x, z, r) {
    let best = null;
    const seen = new Set();
    this._cells(x - r, z - r, x + r, z + r, (k) => {
      const a = this.grid.get(k);
      if (!a) return;
      for (const o of a) {
        if (seen.has(o)) continue;
        seen.add(o);
        if (x + r < o.minx || x - r > o.maxx || z + r < o.minz || z - r > o.maxz) continue;
        let res = null;
        if (o.ring) res = circlePoly(x, z, r, o.ring);
        else {
          const dx = x - o.x, dz = z - o.z, d = Math.hypot(dx, dz);
          if (d < r + o.r) res = { nx: d > 1e-6 ? dx / d : 1, nz: d > 1e-6 ? dz / d : 0, depth: r + o.r - d };
        }
        if (res && (!best || res.depth > best.depth)) best = res;
      }
    });
    return best;
  }
}

function circlePoly(x, z, r, ring) {
  const n = ring.length / 2;
  let inside = false, bestD = 1e9, bx = 0, bz = 0;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = ring[i * 2], zi = ring[i * 2 + 1], xj = ring[j * 2], zj = ring[j * 2 + 1];
    if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) inside = !inside;
    const dx = xi - xj, dz = zi - zj, L2 = dx * dx + dz * dz || 1e-9;
    let t = ((x - xj) * dx + (z - zj) * dz) / L2;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const px = xj + dx * t, pz = zj + dz * t, d = Math.hypot(x - px, z - pz);
    if (d < bestD) { bestD = d; bx = px; bz = pz; }
  }
  if (!inside && bestD >= r) return null;
  let nx = x - bx, nz = z - bz;
  const L = Math.hypot(nx, nz) || 1e-6;
  nx /= L; nz /= L;
  if (inside) return { nx: -nx, nz: -nz, depth: bestD + r };
  return { nx, nz, depth: r - bestD };
}
