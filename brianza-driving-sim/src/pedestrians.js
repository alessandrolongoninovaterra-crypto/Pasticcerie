import { createCrowd, strikeRagdoll, stepRagdoll } from './vendor/city/figure.js';
import { CLS, F, NT } from './roads.js';

// Pedoni: camminano sui marciapiedi delle strade reali (e nelle vie pedonali), svoltano agli
// incroci, attraversano sulle strisce quando non arrivano auto, si scansano se un'auto punta
// verso di loro. Se vengono urtati cadono e poi si rialzano. La figura articolata e la caduta
// sono quelle del progetto "city" (src/vendor/city/figure.js, ragdoll.js).
const COUNT = 90;
const WALKABLE = (w) => w.cls >= CLS.PRIMARY && !(w.flags & (F.LINK | F.TUNNEL | F.PRIVATE)) && w.cls !== CLS.TRACK;

export class Pedestrians {
  constructor(world) {
    this.world = world; this.R = world.roads; this.T = world.terrain;
    this.crowd = createCrowd(COUNT);
    this.group = this.crowd.group;
    this.peds = this.crowd.people;
    this.target = 45;
    this.active = 0;
    this.clock = 0;
    this.onHit = null;          // callback(ped, speed)
    for (let i = 0; i < COUNT; i++) { this.peds[i].alive = false; this.crowd.hideAt(i); }
    this.me = COUNT - 1;       // l'ultima figura e' il giocatore quando scende dall'auto
    this.peds[this.me].reserved = true; this.peds[this.me].bag = false;
    this.crowd.commit();
    this.spawnTimer = 0;
  }

  setTarget(n) { this.target = Math.min(COUNT, n); }

  latTarget(w, side) {
    if (w.flags & F.NOCAR) return side * w.width * 0.3;
    return side * (w.width / 2 + 0.85);
  }

  spawn(px, pz, i) {
    const R = this.R, p = this.peds[i];
    for (let attempt = 0; attempt < 5; attempt++) {
      const ang = Math.random() * Math.PI * 2, dist = 35 + Math.random() * 130;
      const x = px + Math.cos(ang) * dist, z = pz + Math.sin(ang) * dist;
      if (!this.T.isUrban(x, z) && Math.random() < 0.85) continue;
      const nr = R.nearest(x, z, 45, WALKABLE);
      if (!nr) continue;
      const w = R.ways[nr.wi];
      if (w.cls <= CLS.SECONDARY && w.limit > 50) continue;
      p.wi = nr.wi; p.k = nr.k; p.dir = Math.random() < 0.5 ? 1 : -1;
      const L = w.cum[nr.k + 1] - w.cum[nr.k];
      p.s = (p.dir > 0 ? nr.t : 1 - nr.t) * L;
      p.side = Math.random() < 0.5 ? 1 : -1;
      p.lat = this.latTarget(w, p.side) * (0.9 + Math.random() * 0.25);
      p.latGoal = p.lat;
      p.alive = true; p.rag = null; p.down = 0; p.flee = 0; p.wait = 0; p.crossing = false;
      p.idle = Math.random() < 0.12 ? 3 + Math.random() * 8 : 0;
      p.gait = 1; p.h = 0; p.x = nr.px; p.z = nr.pz; p.y = 0;
      this.place(p, 0, true);
      return true;
    }
    return false;
  }

  ends(p) {
    const w = this.R.ways[p.wi];
    return p.dir > 0 ? [w.nodes[p.k], w.nodes[p.k + 1]] : [w.nodes[p.k + 1], w.nodes[p.k]];
  }

  // posizione nel mondo dalla posizione lungo la via; lat e' rispetto al verso dei nodi
  place(p, dt, snap = false) {
    const R = this.R, w = R.ways[p.wi];
    const a = w.nodes[p.k], b = w.nodes[p.k + 1];
    const ax = R.nx[a], az = R.nz[a], bx = R.nx[b], bz = R.nz[b];
    const L = Math.hypot(bx - ax, bz - az) || 0.01;
    const dx = (bx - ax) / L, dz = (bz - az) / L;
    const along = p.dir > 0 ? p.s : L - p.s;
    const tx = ax + dx * along - dz * p.lat, tz = az + dz * along + dx * p.lat;
    // segue il punto ideale con un po' di inerzia: taglia gli angoli come una persona
    const kk = snap ? 1 : Math.min(1, dt * 5);
    const ox = p.x, oz = p.z;
    p.x += (tx - p.x) * kk; p.z += (tz - p.z) * kk;
    const mvx = p.x - ox, mvz = p.z - oz;
    if (snap) p.h = Math.atan2(dx * p.dir, dz * p.dir);
    else if (mvx * mvx + mvz * mvz > 1e-7) {
      let dh = Math.atan2(mvx, mvz) - p.h; while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
      p.h += dh * Math.min(1, dt * 8);
    }
    const onRoad = Math.abs(p.lat) < w.width / 2 + 0.2;
    p.onRoad = onRoad && !(w.flags & F.NOCAR);
    const t = Math.min(1, Math.max(0, along / L));
    p.y = onRoad ? R.heightOn(p.wi, p.k, t, p.x, p.z) : this.T.height(p.x, p.z) + ((w.sw !== 4 && this.R.sidewalkSides(w, p.x, p.z)) ? 0.31 : 0.12);
  }

  next(p) {
    const R = this.R, w = R.ways[p.wi];
    const [A, B] = this.ends(p);
    const atEnd = p.dir > 0 ? p.k + 1 === w.nodes.length - 1 : p.k === 0;
    // strisce pedonali: ogni tanto si attraversa
    if ((R.ntag[B] === NT.CROSSING || R.ntag[B] === NT.CROSSING_SIGNALS) && Math.random() < 0.4 && !(w.flags & F.NOCAR)) { p.side = -p.side; p.wait = 0.01; }
    if (!atEnd && R.degree[B] < 3) { p.k += p.dir; return; }
    const inAng = Math.atan2(R.nx[B] - R.nx[A], R.nz[B] - R.nz[A]);
    const opts = [];
    for (let o = R.adjStart[B]; o < R.adjStart[B + 1]; o++) {
      const wi = R.adjWay[o], pos = R.adjPos[o], w2 = R.ways[wi];
      if (!WALKABLE(w2) || (w2.cls <= CLS.SECONDARY && w2.limit > 50)) continue;
      for (const [k, dir, to] of [[pos, 1, w2.nodes[pos + 1]], [pos - 1, -1, w2.nodes[pos - 1]]]) {
        if (to === undefined || (wi === p.wi && k === p.k)) continue;
        let turn = Math.atan2(R.nx[to] - R.nx[B], R.nz[to] - R.nz[B]) - inAng;
        while (turn > Math.PI) turn -= 2 * Math.PI; while (turn < -Math.PI) turn += 2 * Math.PI;
        opts.push({ wi, k, dir, wgt: (Math.abs(turn) < 0.5 ? 3 : Math.abs(turn) > 2.6 ? 0.1 : 1) * (w2.flags & F.NOCAR ? 2.5 : 1) * (w2.cls >= CLS.SERVICE ? 0.4 : 1) });
      }
    }
    if (!opts.length) { p.dir = -p.dir; return; }
    let r = Math.random() * opts.reduce((s, o) => s + o.wgt, 0), pick = opts[opts.length - 1];
    for (const o of opts) { r -= o.wgt; if (r <= 0) { pick = o; break; } }
    // resta sullo stesso lato fisico della nuova via
    const w2 = R.ways[pick.wi], a = w2.nodes[pick.k], b = w2.nodes[pick.k + 1];
    const dx = R.nx[b] - R.nx[a], dz = R.nz[b] - R.nz[a], L = Math.hypot(dx, dz) || 1;
    const lat = ((p.x - R.nx[a]) * -dz + (p.z - R.nz[a]) * dx) / L;
    p.wi = pick.wi; p.k = pick.k; p.dir = pick.dir;
    p.side = lat >= 0 ? 1 : -1;
    p.lat = Math.max(-w2.width / 2 - 2.5, Math.min(w2.width / 2 + 2.5, lat));
  }

  // threats: veicoli che possono investire: [{x, z, vx, vz, halfL, halfW, h}]
  update(dt, cx, cz, threats, horn) {
    this.clock += dt;
    const R = this.R, crowd = this.crowd;
    // popolazione attorno al giocatore
    this.spawnTimer -= dt;
    let alive = 0;
    for (let i = 0; i < COUNT; i++) {
      const p = this.peds[i];
      if (p.alive && Math.hypot(p.x - cx, p.z - cz) > 230) { p.alive = false; crowd.hideAt(i); }
      if (p.alive) alive++;
    }
    if (alive < this.target && this.spawnTimer <= 0) {
      this.spawnTimer = 0.08;
      const i = this.peds.findIndex((p) => !p.alive && !p.reserved);
      if (i >= 0) this.spawn(cx, cz, i);
    }
    this.active = alive;
    const roadPts = [];
    for (let i = 0; i < COUNT; i++) {
      const p = this.peds[i];
      if (!p.alive) continue;
      if (p.rag) {
        stepRagdoll(p.rag, dt);
        p.x = p.rag.x; p.z = p.rag.z;
        const g = R.surfaceAt(p.x, p.z, p.y + 1).h;
        crowd.drawRagdoll(i, p.rag, g);
        roadPts.push([p.x, p.z]);
        if (p.rag.done) { p.rag = null; p.flee = 4; p.h = Math.atan2(p.x - cx, p.z - cz); this.rejoin(p); }
        continue;
      }
      const w = R.ways[p.wi];
      // pericolo: un veicolo che arriva addosso
      let danger = false, hit = null;
      for (const t of threats) {
        const rx = p.x - t.x, rz = p.z - t.z, d2 = rx * rx + rz * rz;
        if (d2 > 900) continue;
        const sp = Math.hypot(t.vx, t.vz);
        const fx = Math.sin(t.h), fz = Math.cos(t.h);
        const al = rx * fx + rz * fz, la = rx * fz - rz * fx;
        if (Math.abs(al) < t.halfL + 0.25 && Math.abs(la) < t.halfW + 0.25) { if (sp > 1.6) hit = t; else { p.x += (la >= 0 ? fz : -fz) * 0.05; p.z += (la >= 0 ? -fx : fx) * 0.05; } }
        else if (sp > 2.5) {
          const dirx = t.vx / sp, dirz = t.vz / sp, ahead = rx * dirx + rz * dirz, side = Math.abs(rx * dirz - rz * dirx);
          if (ahead > 0 && ahead < 4 + sp * 1.4 && side < t.halfW + 1.3) { danger = true; p.fleeSide = (rx * dirz - rz * dirx) >= 0 ? 1 : -1; p.fdx = dirz * p.fleeSide; p.fdz = -dirx * p.fleeSide; }
        }
        if (horn && t.player && d2 < 400) { const sp1 = Math.max(sp, 1), ahead = (rx * (t.vx || fx) + rz * (t.vz || fz)) / sp1; if (ahead > -2) { danger = true; p.fdx = (la >= 0 ? fz : -fz); p.fdz = (la >= 0 ? -fx : fx); } }
      }
      if (hit) {
        const sp = Math.hypot(hit.vx, hit.vz), tx = hit.vx / sp, tz = hit.vz / sp;
        const ax = p.x - hit.x, az = p.z - hit.z, al = Math.hypot(ax, az) || 1;
        p.rag = strikeRagdoll({ facing: p.h, scale: p.build.scale, x: p.x, z: p.z, travelX: tx, travelZ: tz, awayX: ax / al, awayZ: az / al, speed: sp, pose: p.pose, rand: crowd.rand });
        if (this.onHit) this.onHit(p, sp, hit);
        crowd.drawRagdoll(i, p.rag, p.y);
        continue;
      }
      if (danger) p.flee = 1.6;
      let speed = p.pace;
      if (p.flee > 0) {
        // scarto di lato, di corsa, fuori dalla traiettoria
        p.flee -= dt;
        p.gait += (1.6 - p.gait) * Math.min(1, dt * 6);
        if (p.fdx !== undefined && p.flee > 0.6) { p.x += p.fdx * 3.6 * dt; p.z += p.fdz * 3.6 * dt; const g = this.world.collision.resolveCircle(p.x, p.z, 0.3); if (g) { p.x += g.nx * g.depth; p.z += g.nz * g.depth; } }
        if (p.flee <= 0) this.rejoin(p);
        p.phase += dt * Math.PI * 3.4 / 0.55;
        p.y = R.surfaceAt(p.x, p.z, p.y + 1).h;
        crowd.drawWalking(i, p.x, p.y, p.z, p.fdx !== undefined ? Math.atan2(p.fdx, p.fdz) : p.h, this.clock);
        continue;
      }
      if (p.idle > 0) { p.idle -= dt; p.gait += (0 - p.gait) * Math.min(1, dt * 5); p.phase += dt * 0.7; crowd.drawWalking(i, p.x, p.y, p.z, p.h, this.clock); continue; }
      // attraversamento: aspetta sul bordo se arriva un'auto
      const goal = this.latTarget(w, p.side);
      if (p.wait > 0) {
        let busy = false;
        for (const t of threats) { const sp = Math.hypot(t.vx, t.vz); if (sp < 1.5) continue; const rx = p.x - t.x, rz = p.z - t.z, d = Math.hypot(rx, rz); if (d < 12 + sp * 3 && (rx * t.vx + rz * t.vz) / (d * sp) > 0.5) busy = true; }
        p.wait += dt;
        if (!busy || p.wait > 9) p.wait = 0; else speed = 0;
      }
      if (p.wait <= 0) p.lat += Math.max(-1.4 * dt, Math.min(1.4 * dt, goal - p.lat));
      const crossing = Math.abs(goal - p.lat) > 0.3;
      const along = crossing ? speed * 0.25 : speed;
      p.gait += ((speed > 0 ? 1 : 0) - p.gait) * Math.min(1, dt * 5);
      p.s += along * dt;
      const stride = 0.20 + 0.26 * Math.min(1.7, p.gait);
      p.phase += dt * Math.PI * Math.max(along, crossing && speed > 0 ? 1.2 : 0) / Math.max(0.25, stride);
      let guard = 0;
      while (guard++ < 6) {
        const [A, B] = this.ends(p);
        const L = Math.hypot(R.nx[B] - R.nx[A], R.nz[B] - R.nz[A]);
        if (p.s < L) break;
        p.s -= L;
        this.next(p);
      }
      this.place(p, dt);
      if (p.onRoad) roadPts.push([p.x, p.z]);
      crowd.drawWalking(i, p.x, p.y, p.z, p.h, this.clock);
    }
    crowd.commit();
    return roadPts;
  }

  // la figura del giocatore a piedi
  drawPlayer(on, x, y, z, h, gait, speed, dt) {
    const p = this.peds[this.me];
    if (!on) { this.crowd.hideAt(this.me); this.crowd.commit(); return; }
    p.gait += (Math.min(1.7, gait) - p.gait) * Math.min(1, dt * 8);
    p.idle = Math.abs(speed) < 0.15 ? 1 : 0;
    const stride = 0.20 + 0.26 * Math.min(1.7, p.gait);
    p.phase += dt * Math.PI * Math.abs(speed) / Math.max(0.25, stride);
    this.crowd.drawWalking(this.me, x, y, z, h, this.clock);
    this.crowd.commit();
  }

  // dopo una fuga o una caduta: riaggancia la via piu' vicina
  rejoin(p) {
    const R = this.R;
    const nr = R.nearest(p.x, p.z, 40, WALKABLE);
    if (!nr) { p.alive = false; return; }
    const w = R.ways[nr.wi], L = w.cum[nr.k + 1] - w.cum[nr.k], dl = Math.hypot(nr.dx, nr.dz) || 1;
    p.wi = nr.wi; p.k = nr.k; p.s = (p.dir > 0 ? nr.t : 1 - nr.t) * L;
    const lat = ((p.x - nr.px) * -nr.dz + (p.z - nr.pz) * nr.dx) / dl;
    p.side = lat >= 0 ? 1 : -1; p.lat = lat; p.wait = 0; p.fdx = undefined;
  }

  // persone vicine a un punto (per il giocatore a piedi)
  near(x, z, r) { return this.peds.filter((p) => p.alive && !p.rag && Math.hypot(p.x - x, p.z - z) < r); }
}
