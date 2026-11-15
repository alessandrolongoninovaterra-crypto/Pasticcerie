// ---------------------------------------------------------------------------------------------
// Adattato da "city" di donmutti — https://github.com/donmutti/city (commit 6a58ad4),
// file src/render/car.js. Licenza dichiarata nel package.json del progetto originale: ISC.
// Modifiche: import adattati; aggiunta registerBody() in fondo per derivare nuove carrozzerie.
// ---------------------------------------------------------------------------------------------
import {groundHeight, surfaceNormal} from './terrain-shim.js';
// Vehicles. One table of body specs (car / wagon / van / bus) drives BOTH the hero car and the
// instanced ambient fleet, so an NPC and the player's car are the same shape language.
//
// What a body is made of, in every case:
//   * a lofted lower body from a drawn side profile, with WHEEL ARCHES cut into its underside
//     so the tyres sit in wells instead of the shell floating on a flat sill;
//   * a greenhouse lofted on top of the belt line (windscreen, side glass, backlight);
//   * a body-colour roof skin over the greenhouse, so the roof is never a slab of black glass;
//   * four wheels.
// The hero adds chrome, lamps with bezels, mirrors and named wheel pivots. The fleet gets the
// same four parts as THREE InstancedMeshes per body type (body / trim / wheels) — twelve draw
// calls for the whole of traffic.
//
// FROZEN CONTRACT (the simulation drives these by name — guts may change, these may not):
//   makeCar(tint, {police, body}) -> Group with child pivots named wheelFL/FR/RL/RR and
//     userData.headlight (SpotLight), userData.tailGlow (PointLight), userData.lightbar when police.
//   makeCarFleet(count) -> {group, setAt(i, x, z, rotY, colourIndex), count, palette}
import * as THREE from 'three';
import {fleetTypeFor} from './vehicles.js';

// ---------------------------------------------------------------------------------------------
// Geometry helpers
// ---------------------------------------------------------------------------------------------

// Loft a closed shell between a top rail (per-station y) and a floor rail (per-station y too —
// this is what lets the underside arch up over each axle). Every face ring gets its OWN vertices,
// so computeVertexNormals cannot average the deck into the flank: the shoulder and the sill come
// out as CREASES. Sharing them was what made every body read as a soap bar — smooth along the
// length is right, smooth around the section is not.
// 12 vertices per station: 0,1 deck · 2,3 left flank · 4,5 right flank · 6,7 floor · 8..11 caps.
function loft(profile, widths, floorRail) {
  const n = profile.length, pos = [], idx = [];
  for (let i = 0; i < n; i++) {
    const [z, y] = profile[i], w = widths[i], f = floorRail[i];
    pos.push(-w, y, z,  w, y, z);            // 0 deckL   1 deckR
    pos.push(-w, y, z,  -w, f, z);           // 2 sideTL  3 sideBL
    pos.push( w, y, z,   w, f, z);           // 4 sideTR  5 sideBR
    pos.push(-w, f, z,   w, f, z);           // 6 floorL  7 floorR
    pos.push(-w, y, z,   w, y, z,  -w, f, z,  w, f, z); // 8..11 cap ring
  }
  const at = (i, k) => i * 12 + k;
  // Winding matters twice over: it decides which way computeVertexNormals points, and with
  // per-ring vertices there is no longer any smoothing to disguise a normal that points into the
  // body. Every ring below is wound so its normal faces OUT.
  for (let i = 0; i < n - 1; i++) {
    idx.push(at(i,0), at(i,1), at(i+1,0),  at(i,1), at(i+1,1), at(i+1,0));        // deck   (+y)
    idx.push(at(i,2), at(i+1,2), at(i,3),  at(i+1,2), at(i+1,3), at(i,3));        // left   (-x)
    idx.push(at(i,4), at(i,5), at(i+1,4),  at(i+1,4), at(i,5), at(i+1,5));        // right  (+x)
    idx.push(at(i,6), at(i+1,6), at(i,7),  at(i+1,6), at(i+1,7), at(i,7));        // floor  (-y)
  }
  idx.push(at(0,8), at(0,10), at(0,9), at(0,9), at(0,10), at(0,11));              // nose cap (+z)
  const L = n - 1;
  idx.push(at(L,8), at(L,9), at(L,10), at(L,9), at(L,11), at(L,10));              // tail cap (-z)
  return {pos, idx};
}

// ---- scocca arrotondata (Brianza Driving Simulator) -------------------------------------------
// Al posto del loft a sezione rettangolare: sezioni con spalle arrotondate, fianco appena bombato
// e tetto/cofano curvi in trasversale; il profilo e' lisciato (una stazione intermedia ogni due,
// interpolata con Catmull-Rom) e muso e coda si chiudono arrotondati anche in pianta. Normali
// lisce: la carrozzeria riflette il cielo come una lamiera vera.
const crPt = (p0, p1, p2, p3, t) => 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t);
function smoothStations(profile, widths) {
  const n = profile.length, P = [], W = [];
  for (let i = 0; i < n; i++) {
    P.push(profile[i].slice()); W.push(widths[i]);
    if (i === n - 1) break;
    const a = Math.max(0, i - 1), d = Math.min(n - 1, i + 2);
    if (Math.abs(profile[i][0] - profile[i + 1][0]) < 0.12) continue;     // stazioni gia' fitte (archi)
    P.push([(profile[i][0] + profile[i + 1][0]) / 2, crPt(profile[a][1], profile[i][1], profile[i + 1][1], profile[d][1], 0.5)]);
    W.push(Math.max(0.05, crPt(widths[a], widths[i], widths[i + 1], widths[d], 0.5)));
  }
  return {profile: P, widths: W};
}

// mezza sezione (x >= 0) dal centro del fondo al centro del tetto
function halfSection(w, f, y) {
  const h = Math.max(0.05, y - f);
  const rt = Math.min(0.24, h * 0.42, w * 0.38), rb = Math.min(0.07, h * 0.16), crown = Math.min(0.05, w * 0.035);
  const bul = Math.min(0.025, w * 0.02);                 // fianco appena bombato a meta' altezza
  const pts = [[0, f], [w - rb, f]];
  for (const a of [-60, -30, 0]) { const r = a * Math.PI / 180; pts.push([w - rb + Math.cos(r) * rb, f + rb + Math.sin(r) * rb]); }
  const ys = y - rt, ym = (f + rb + ys) / 2;
  if (ys - (f + rb) > 0.06) pts.push([w + bul, ym]);
  for (const a of [0, 22.5, 45, 67.5, 90]) { const r = a * Math.PI / 180; pts.push([w - rt + Math.cos(r) * rt, Math.max(f + rb, ys) + Math.sin(r) * rt]); }
  const xd = w - rt, top = pts[pts.length - 1][1];
  for (const t of [0.66, 0.33]) pts.push([xd * t, top + crown * (1 - t * t)]);
  pts.push([0, top + crown]);
  return pts;
}

function loftRound(spec, profile0, widths0) {
  const {profile, widths} = smoothStations(profile0, widths0);
  // muso e coda: stazioni in piu' che si stringono e si abbassano (spigoli arrotondati in pianta)
  const big = spec.bus ? 1.6 : 1;
  const ends = [[0.03, 0.985, 0.02, 0.015], [0.06, 0.94, 0.07, 0.05], [0.085, 0.85, 0.15, 0.12], [0.1, 0.7, 0.24, 0.2]];
  const st = profile.map(([z, y], i) => ({z, y, w: widths[i], drop: 0, rise: 0}));
  const nose = st[0], tail = st[st.length - 1];
  const pre = ends.map(([d, wf, dr, ri]) => ({z: nose.z + d * big, y: nose.y, w: nose.w * wf, drop: dr, rise: ri}));
  const post = ends.map(([d, wf, dr, ri]) => ({z: tail.z - d * big, y: tail.y, w: tail.w * wf, drop: dr, rise: ri}));
  const S = [...pre.reverse(), ...st, ...post];
  const floor = floorRailFor(spec, S.map((q) => [q.z, q.y]));
  const pos = [], idx = [];
  let M = 0;
  for (let i = 0; i < S.length; i++) {
    const q = S[i], f0 = floor[i], h = q.y - f0;
    const f = f0 + h * q.rise, y = q.y - h * q.drop;
    const half = halfSection(q.w, f, y);
    const ring = half.concat(half.slice(1, -1).reverse().map(([x, yy]) => [-x, yy]));
    if (!M) M = ring.length;
    for (const [x, yy] of ring) pos.push(x, yy, q.z);
  }
  const at = (i, k) => i * M + (k % M);
  for (let i = 0; i < S.length - 1; i++) for (let k = 0; k < M; k++) idx.push(at(i, k), at(i + 1, k), at(i, k + 1), at(i, k + 1), at(i + 1, k), at(i + 1, k + 1));
  // tappi: ventaglio dal centro della prima e dell'ultima sezione
  for (const [i, dz] of [[0, 0.012], [S.length - 1, -0.012]]) {
    let cx = 0, cy = 0;
    for (let k = 0; k < M; k++) cy += pos[(i * M + k) * 3 + 1];
    const c = pos.length / 3; pos.push(cx, cy / M, S[i].z + dz * big);
    for (let k = 0; k < M; k++) if (i === 0) idx.push(c, at(i, k + 1), at(i, k)); else idx.push(c, at(i, k), at(i, k + 1));
  }
  const g = geomFrom({pos, idx});
  // verso delle facce: le normali devono uscire (controllo sul punto piu' alto)
  const P = g.attributes.position, Nn = g.attributes.normal;
  let top = 0; for (let i = 1; i < P.count; i++) if (P.getY(i) > P.getY(top)) top = i;
  if (Nn.getY(top) < 0) { const ix = g.index.array; for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; } g.index.needsUpdate = true; g.computeVertexNormals(); }
  return g;
}

function geomFrom({pos, idx}) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// ---- wheel arches ---------------------------------------------------------------------------
// The underside of the shell is not a flat plane at the sill: over each axle it lifts to just
// clear the tyre, in a cosine hump one and a third tyre-radii wide. A tyre sitting under a flat
// sill is buried to its axle and reads as a half-round lump; in an arch it reads as a wheel.
const ARCH_SPAN = 1.12;                       // hump half-width, in tyre radii
const archTopOf = (spec) => spec.wheelR * 2 + 0.02;

// The hump is FLAT over the middle third and ramps down either side: a pure cosine peaks in a
// knife point directly over the axle, which reads as a cartoon chevron rather than an arch.
const ARCH_FLAT = 0.34;
function archLift(t) {
  if (t >= 1) return 0;
  if (t <= ARCH_FLAT) return 1;
  return 0.5 * (1 + Math.cos(Math.PI * (t - ARCH_FLAT) / (1 - ARCH_FLAT)));
}

function floorRailFor(spec, profile) {
  const top = archTopOf(spec), span = spec.wheelR * ARCH_SPAN;
  return profile.map(([z]) => {
    let lift = 0;
    for (const az of spec.wheelZ) lift = Math.max(lift, archLift(Math.abs(z - az) / span));
    return spec.sill + (top - spec.sill) * lift;
  });
}

// The authored profiles have ten or twelve stations placed for the SIDE view; an arch needs
// stations of its own or the hump lands between two of them and flattens out. Insert five per
// axle (the peak, the two shoulders, the two feet), interpolating the top rail and the plan width
// so the silhouette above the arch is unchanged.
function stationsWithArches(spec) {
  const pts = spec.profile.map(p => [p[0], p[1]]), ws = spec.widths.slice();
  const span = spec.wheelR * ARCH_SPAN;
  const wanted = [];
  for (const az of spec.wheelZ) for (const f of [-1, -ARCH_FLAT, ARCH_FLAT, 1]) wanted.push(az + f * span);
  wanted.sort((a, b) => b - a);               // z runs nose(+) -> tail(-)
  for (const z of wanted) {
    let k = -1;
    for (let i = 0; i < pts.length - 1; i++) if (pts[i][0] > z && z > pts[i + 1][0]) { k = i; break; }
    if (k < 0) continue;                                              // outside the body
    if (Math.abs(pts[k][0] - z) < 0.03 || Math.abs(pts[k + 1][0] - z) < 0.03) continue;
    const t = (pts[k][0] - z) / (pts[k][0] - pts[k + 1][0]);
    pts.splice(k + 1, 0, [z, pts[k][1] + (pts[k + 1][1] - pts[k][1]) * t]);
    ws.splice(k + 1, 0, ws[k] + (ws[k + 1] - ws[k]) * t);
  }
  return {profile: pts, widths: ws};
}

// B/C (and on a bus, mullion) posts standing on the glass between the greenhouse stations, so the
// side glass reads as framed panes rather than one dark sheet. Body colour, not black: on already
// dark glass a black post reads as a bar across a window.
function pillarBoxes(spec) {
  const base = cabBaseOf(spec), tumble = spec.tumble || 0, out = [];
  for (const i of spec.pillars || []) {
    // The top stops BELOW the roof skin. A post whose cap breaks the roof surface reads as a
    // tooth on the roof silhouette from the chase camera — the one thing worse than no pillar.
    const [z, y] = spec.cab[i], w = spec.cabw[i], h = (y - cabRound(w, y, base[i]) - base[i]) - 0.02;
    if (h <= 0.10) continue;
    for (const s of [1, -1]) {
      out.push(box(0.04, h, spec.bus ? 0.16 : 0.09, (w + tumble * 0.5 + 0.004) * s, base[i] + h / 2, z));
    }
  }
  return out;
}

// Wing mirrors at the base of the A-pillar. Twelve triangles that break the flat flank, and at
// ten to forty metres behind an NPC that break is most of what says "car" rather than "box".
function mirrorBoxes(spec) {
  const a = anchors(spec), base = cabBaseOf(spec), out = [];
  const y = base[0] + (spec.bus ? 0.22 : 0.02), z = spec.cab[0][0] - (spec.bus ? 0.30 : 0.22);
  for (const s of [1, -1]) out.push(box(0.16, 0.12, 0.07, (a.halfW + 0.08) * s, y, z));
  return out;
}

function hull(spec) {
  const {profile, widths} = stationsWithArches(spec);
  return loftRound(spec, profile, widths);
}

// ---- greenhouse -----------------------------------------------------------------------------
// Per-station glass base: a bus windscreen starts far lower than its side-window sill, and a van's
// screen starts on the cowl, below the flank belt line. A single scalar belt could not say that,
// which is why the van's greenhouse ended up buried inside its own hull.
const cabBaseOf = (spec) => spec.cabBase || spec.cab.map(() => spec.beltY);

// The greenhouse shell. `omitRoof` drops the top quads that the body-colour roof skin covers, so
// the fleet's single dark material never paints a roof. Each face ring again gets its own
// vertices: the crease where the windscreen meets the side glass is a real edge on a car.
// 10 vertices per station: 0,1 roof · 2,3 left · 4,5 right · 6..9 cap ring.
// raggio del raccordo tetto-vetri laterali di una stazione dell'abitacolo
const cabRound = (w, y, b) => Math.min(0.12, Math.max(0.02, (y - b) * 0.3), w * 0.3);

function cabinGeometry(spec, omitRoof = false) {
  const cab = spec.cab, cabw = spec.cabw, base = cabBaseOf(spec), tumble = spec.tumble || 0;
  const [rs0, rs1] = spec.roofSlice;
  const skinned = !(rs0 === 0 && rs1 === 0), rEnd = cab.length + rs1;
  // sezione: base sx, vetro sx in alto, raccordo (2 punti), raccordo dx (2 punti), vetro dx, base dx
  // vetri laterali e tetto condividono i vertici: il raccordo viene arrotondato dalle normali lisce
  const K = 8, pos = [], idx = [];
  for (let i = 0; i < cab.length; i++) {
    const [z, y] = cab[i], w = cabw[i], wb = w + tumble, b = base[i], r = cabRound(w, y, b);
    pos.push(-wb, b, z,  -w, y - r, z,  -w + r * 0.3, y - r * 0.3, z,  -w + r, y, z,
              w - r, y, z,  w - r * 0.3, y - r * 0.3, z,  w, y - r, z,  wb, b, z);
  }
  const at = (i, k) => i * K + k;
  for (let i = 0; i < cab.length - 1; i++) {
    const covered = omitRoof && skinned && i >= rs0 && i < rEnd - 1;
    for (let k = 0; k < K - 1; k++) {
      if (covered && k === 3) continue;                     // tetto coperto dalla lamiera in tinta
      idx.push(at(i, k), at(i + 1, k), at(i, k + 1), at(i, k + 1), at(i + 1, k), at(i + 1, k + 1));
    }
  }
  // parabrezza e lunotto: ventaglio dal centro
  for (const [i, front] of [[0, true], [cab.length - 1, false]]) {
    const [z] = cab[i]; let cy = 0;
    for (let k = 0; k < K; k++) cy += pos[at(i, k) * 3 + 1];
    const c = pos.length / 3; pos.push(0, cy / K, z);
    for (let k = 0; k < K; k++) { const a = at(i, k), bb = at(i, (k + 1) % K); if (front) idx.push(c, bb, a); else idx.push(c, a, bb); }
  }
  const g = geomFrom({pos, idx});
  const P = g.attributes.position, Nn = g.attributes.normal;
  let top = 0; for (let i = 1; i < P.count; i++) if (P.getY(i) > P.getY(top)) top = i;
  if (Nn.getY(top) < 0) { const ix = g.index.array; for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; } g.index.needsUpdate = true; g.computeVertexNormals(); }
  return g;
}

// The body-colour roof skin: three rails (left edge, raised centreline, right edge) over the
// greenhouse stations named by roofSlice, so the roof domes across its width and tapers to the
// tail instead of reading as a flat lid.
function roofSkin(spec) {
  const [rs0, rs1] = spec.roofSlice;
  if (rs0 === 0 && rs1 === 0) return null;
  const sub = spec.cab.slice(rs0, spec.cab.length + rs1);
  const subw = spec.cabw.slice(rs0, spec.cabw.length + rs1);
  if (sub.length < 2) return null;
  const crown = spec.crown || 0, pos = [], idx = [];
  const base = cabBaseOf(spec).slice(rs0, spec.cab.length + rs1);
  // la lamiera del tetto avvolge il raccordo arrotondato dell'abitacolo (5 binari)
  for (let i = 0; i < sub.length; i++) {
    const [z, y] = sub[i], w = subw[i], r = cabRound(w, y, base[i]), o = 0.007;
    pos.push(-w - o, y - r * 0.55, z,  -w + r * 0.3 - o * 0.7, y - r * 0.3 + o * 0.7, z,  0, y + o + crown, z,
              w - r * 0.3 + o * 0.7, y - r * 0.3 + o * 0.7, z,  w + o, y - r * 0.55, z);
  }
  const at = (i, k) => i * 5 + k;
  for (let i = 0; i < sub.length - 1; i++) for (let k = 0; k < 4; k++) idx.push(at(i, k), at(i, k + 1), at(i + 1, k), at(i, k + 1), at(i + 1, k + 1), at(i + 1, k));
  return {pos, idx};
}

// ---- merging into one vertex-coloured buffer --------------------------------------------------
// The fleet's trim (glass, bumpers, lamps, pillars, underbody) is ONE instanced mesh with vertex
// colours rather than one mesh per material: a dozen extra draw calls per body type would cost
// more than the whole of traffic. Colours are set through THREE.Color so they land in the
// renderer's working colour space exactly as a material colour would.
const _c = new THREE.Color();
function parts() { return {pos: [], idx: [], col: []}; }
function addRaw(dst, {pos, idx}, hex) {
  const base = dst.pos.length / 3;
  _c.set(hex);
  for (let i = 0; i < pos.length; i += 3) { dst.pos.push(pos[i], pos[i+1], pos[i+2]); dst.col.push(_c.r, _c.g, _c.b); }
  for (const v of idx) dst.idx.push(base + v);
}
function addGeo(dst, geo, hex) {
  const p = geo.attributes.position, base = dst.pos.length / 3;
  _c.set(hex);
  for (let i = 0; i < p.count; i++) { dst.pos.push(p.getX(i), p.getY(i), p.getZ(i)); dst.col.push(_c.r, _c.g, _c.b); }
  const ix = geo.index;
  if (ix) for (let i = 0; i < ix.count; i++) dst.idx.push(base + ix.getX(i));
  else for (let i = 0; i < p.count; i++) dst.idx.push(base + i);
  geo.dispose();
}
function colouredGeom(dst) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(dst.pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(dst.col, 3));
  g.setIndex(dst.idx);
  g.computeVertexNormals();
  return g;
}
const box = (w, h, d, x, y, z) => new THREE.BoxGeometry(w, h, d).translate(x, y, z);

// Shared trim palette, so hero and NPC agree on what a bumper is.
const TRIM = {
  glass: 0x33475c, black: 0x14161a, bumper: 0x1b1d21, lamp: 0xf4f7ff,
  tail: 0xe0202c, amber: 0xe09420, under: 0x0b0c0e, rim: 0xb9bec6, tyre: 0x15161a, plate: 0xeeeeea, hub: 0x55595f,
};

// ---------------------------------------------------------------------------------------------
// Body types. Real-world metres: a sedan is 4.4 x 1.8 x 1.44, a bus 10 x 2.5 x 3.0. The old table
// was 20-40% too flat and (for the car) 2.08 m WIDE, which is what made every render read as a
// squashed lozenge. z runs nose(+) -> tail(-); `profile` y is the top of the LOWER body — the belt
// line — and the greenhouse rides above it.
// ---------------------------------------------------------------------------------------------
const BODIES = {
  // Sedan. Three-box: bonnet rising to a cowl, a level belt, a short boot deck, a tail lip.
  car: {
    sill: 0.24,
    profile: [
      [ 2.21, 0.74], [ 2.12, 0.86], [ 1.90, 0.91], [ 1.45, 0.95],
      [ 1.05, 0.98], [ 0.55, 1.00], [ 0.00, 1.00], [-0.60, 1.01],
      [-1.10, 1.02], [-1.55, 1.00], [-1.95, 0.93], [-2.21, 0.80],
    ],
    widths: [0.74, 0.83, 0.88, 0.90, 0.89, 0.88, 0.88, 0.89, 0.91, 0.89, 0.84, 0.76],
    cab: [[1.00, 1.02], [0.48, 1.38], [-0.05, 1.44], [-0.62, 1.43], [-1.02, 1.30], [-1.35, 1.06]],
    cabw: [0.75, 0.76, 0.76, 0.75, 0.71, 0.61],
    tumble: 0.12, pillars: [2],
    beltY: 1.00, wheelZ: [1.32, -1.32], wheelX: 0.76, wheelR: 0.33, wheelW: 0.22,
    roofSlice: [1, -1], crown: 0.02,
  },
  // Estate. The sedan's nose, then a level roof carried to a near-vertical tailgate.
  wagon: {
    sill: 0.24,
    profile: [
      [ 2.24, 0.74], [ 2.15, 0.86], [ 1.92, 0.91], [ 1.48, 0.95],
      [ 1.08, 0.98], [ 0.55, 1.00], [ 0.00, 1.01], [-0.65, 1.02],
      [-1.25, 1.03], [-1.80, 1.03], [-2.20, 1.00], [-2.38, 0.86],
    ],
    widths: [0.74, 0.83, 0.88, 0.90, 0.89, 0.88, 0.88, 0.89, 0.91, 0.90, 0.87, 0.80],
    cab: [[1.02, 1.03], [0.50, 1.42], [-0.05, 1.50], [-0.90, 1.50], [-1.72, 1.49], [-2.14, 1.26]],
    cabw: [0.77, 0.79, 0.79, 0.79, 0.78, 0.73],
    tumble: 0.09, pillars: [2, 4],
    beltY: 1.00, wheelZ: [1.35, -1.38], wheelX: 0.76, wheelR: 0.33, wheelW: 0.22,
    roofSlice: [1, -1], crown: 0.035,
  },
  // MPV. Two-box: a short bonnet breaking to a steeply raked screen, a long tall roof, a vertical
  // tailgate. The old van was 1.31 m tall overall with its glass INSIDE the hull.
  van: {
    sill: 0.26,
    profile: [
      [ 2.28, 0.80], [ 2.22, 0.96], [ 2.00, 1.02], [ 1.72, 1.06],
      [ 1.30, 1.10], [ 0.60, 1.12], [-0.20, 1.12], [-1.00, 1.13],
      [-1.70, 1.13], [-2.15, 1.12], [-2.35, 1.05], [-2.42, 0.88],
    ],
    widths: [0.78, 0.86, 0.90, 0.92, 0.94, 0.94, 0.94, 0.94, 0.94, 0.93, 0.90, 0.84],
    cab: [[1.78, 1.05], [1.12, 1.62], [0.72, 1.84], [-0.30, 1.86], [-1.30, 1.85], [-2.05, 1.80], [-2.28, 1.40]],
    cabw: [0.87, 0.89, 0.90, 0.90, 0.90, 0.88, 0.80],
    cabBase: [1.04, 1.10, 1.11, 1.12, 1.13, 1.13, 1.12],
    tumble: 0.04, pillars: [2, 4],
    beltY: 1.10, wheelZ: [1.42, -1.42], wheelX: 0.79, wheelR: 0.35, wheelW: 0.24,
    roofSlice: [2, -1], crown: 0.04,
  },
  // City bus. Sheer sides, a vertical full-height windscreen, a deep window band starting at the
  // 1.6 m sill, kerb-side doors. The old bus was 2.02 m tall with a window band that intersected
  // its own flank and a blank front face.
  bus: {
    sill: 0.42,
    profile: [
      [ 5.05, 1.16], [ 4.98, 1.17], [ 4.86, 1.58], [ 4.55, 1.59], [ 2.00, 1.58],
      [-1.50, 1.58], [-4.05, 1.58], [-4.28, 2.16], [-5.00, 2.18],
    ],
    widths: [1.14, 1.20, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, 1.17],
    cab: [[5.02, 2.72], [4.80, 2.86], [2.20, 2.90], [-1.50, 2.90], [-4.05, 2.88], [-4.92, 2.80]],
    cabw: [1.20, 1.24, 1.26, 1.26, 1.24, 1.18],
    // the rear engine bay is a solid bulkhead to 2.16 m with only a shallow pane above it — a
    // transit bus has no full-height rear window, and the old one read as a glass box on a shelf
    cabBase: [1.15, 1.58, 1.60, 1.60, 1.60, 2.22],
    tumble: 0, pillars: [1, 2, 3, 4],
    beltY: 1.60, wheelZ: [3.55, -3.15], wheelX: 1.05, wheelR: 0.50, wheelW: 0.28,
    roofSlice: [1, 0], crown: 0.05,
    bus: true,
  },
};

// Anchors every fascia detail is measured from, hero and fleet alike. Lamps, grille and bumpers
// are placed on the FRONT and REAR FACES of the loft — the flat cap between the sill and the
// first station's top rail — and sized from the width of that cap. Measuring them off the body's
// widest point instead is what drove the old grille out through the flanks at the nose, where
// the shell is barely half as wide.
function anchors(spec) {
  const zs = spec.profile.map(p => p[0]);
  const noseZ = Math.max(...zs), tailZ = Math.min(...zs);
  const halfW = Math.max(...spec.widths);
  const noseW = spec.widths[0], rearW = spec.widths[spec.widths.length - 1];
  const faceTop = spec.profile[0][1], rearTop = spec.profile[spec.profile.length - 1][1];
  const fh = faceTop - spec.sill, rh = rearTop - spec.sill;
  // Three bands up the nose cap — bumper, grille, lamps — sized as fractions of the cap's own
  // height so they never overlap. Two fascia boxes that share a face z-fight into a hatched mess,
  // which is exactly what the first pass did where the bumper met the grille.
  return {
    noseZ, tailZ, halfW, noseW, rearW, faceTop, rearTop, fh, rh,
    headY:   spec.sill + fh * (spec.bus ? 0.42 : 0.74), headH:   fh * 0.26,
    grilleY: spec.sill + fh * (spec.bus ? 0.14 : 0.44), grilleH: fh * 0.24,
    lampY:   spec.sill + rh * (spec.bus ? 0.36 : 0.66), lampH:   rh * 0.30,
    bumperY: spec.sill + fh * 0.12,                     bumperH: fh * 0.30,
  };
}
// ---------------------------------------------------------------------------------------------
// Fleet geometry: body (paint, per-instance colour) / trim (vertex-coloured) / wheel
// ---------------------------------------------------------------------------------------------

// Lower body + the body-colour roof skin merged into ONE buffer, so the instance colour paints
// the roof too. Before this the roof triangles belonged to the greenhouse and every NPC drove
// around under a black lid.
function fleetBodyGeometry(spec) {
  const {profile, widths} = stationsWithArches(spec);
  const hg = loftRound(spec, profile, widths), hp = hg.attributes.position;
  const b = {pos: Array.from(hp.array), idx: Array.from(hg.index.array)};
  hg.dispose();
  const skin = roofSkin(spec);
  if (skin) {
    const n0 = b.pos.length / 3;
    b.pos.push(...skin.pos);
    for (const v of skin.idx) b.idx.push(n0 + v);
  }
  for (const post of [...pillarBoxes(spec), ...mirrorBoxes(spec)]) {
    const n0 = b.pos.length / 3, p = post.attributes.position, ix = post.index;
    for (let i = 0; i < p.count; i++) b.pos.push(p.getX(i), p.getY(i), p.getZ(i));
    for (let i = 0; i < ix.count; i++) b.idx.push(n0 + ix.getX(i));
    post.dispose();
  }
  return geomFrom(b);
}

// Everything dark or lit: glass, underbody, bumpers, lamps, and the bus's doors. One mesh.
function fleetGlassGeometry(spec) { return cabinGeometry(spec, true); }

// fari, fanali e frecce del traffico: materiale a parte che di notte si accende
// superficie vera di muso e coda (scocca arrotondata): z alla quota y e alla x data
const _surfCache = new Map();
function surfFor(spec) {
  let f = _surfCache.get(spec);
  if (f) return f;
  const mesh = new THREE.Mesh(hull(spec), new THREE.MeshBasicMaterial({side: THREE.DoubleSide}));
  const a = anchors(spec), rc = new THREE.Raycaster(), o = new THREE.Vector3(), dir = new THREE.Vector3();
  f = (x, y, front) => {
    o.set(x, y, front ? a.noseZ + 3 : a.tailZ - 3); dir.set(0, 0, front ? -1 : 1); rc.set(o, dir);
    const h = rc.intersectObject(mesh, false)[0];
    return h ? h.point.z : (front ? a.noseZ : a.tailZ);
  };
  _surfCache.set(spec, f);
  return f;
}
// i dettagli del traffico si appoggiano alla superficie (sporgono di 1,5 cm rispetto al disegno)
function surfShift(spec) {
  const a = anchors(spec), S = surfFor(spec);
  return {
    F: (x, y, z) => z + S(x, y, true) - a.noseZ + 0.015,
    R: (x, y, z) => z + S(x, y, false) - a.tailZ - 0.015,
  };
}

// fari, fanali e frecce del traffico: materiale a parte che di notte si accende
function fleetLampGeometry(spec) {
  const d = parts(), a = anchors(spec), {F, R} = surfShift(spec);
  if (spec.bus) {
    for (const s of [1, -1]) {
      addGeo(d, box(0.36, a.headH, 0.06, 0.74 * s, a.headY, F(0.74 * s, a.headY, a.noseZ - 0.014)), TRIM.lamp);
      addGeo(d, box(0.32, a.lampH, 0.06, 0.86 * s, a.lampY, R(0.86 * s, a.lampY, a.tailZ + 0.014)), TRIM.tail);
    }
  } else {
    const hx = a.noseW * 0.56;
    for (const s of [1, -1]) {
      addGeo(d, box(0.34, a.headH, 0.07, hx * s, a.headY, F(hx * s, a.headY, a.noseZ - 0.019)), TRIM.lamp);
      addGeo(d, box(0.12, a.headH * 0.8, 0.06, (hx + 0.24) * s, a.headY, F((hx + 0.24) * s, a.headY, a.noseZ - 0.032)), TRIM.amber);
      const tx = a.rearW * 0.58 * s;
      addGeo(d, box(a.rearW * 0.58, a.lampH, 0.07, tx, a.lampY, R(tx, a.lampY, a.tailZ + 0.019)), TRIM.tail);
    }
  }
  return colouredGeom(d);
}

function fleetTrimGeometry(spec) {
  const d = parts();
  const a = anchors(spec), {F, R} = surfShift(spec);
  const pY = a.lampY - a.rh * 0.22;
  // targhe (bianche: da lontano basta la sagoma) davanti e dietro
  if (!spec.bus) {
    addGeo(d, box(0.52, 0.11, 0.02, 0, a.bumperY, F(0, a.bumperY, a.noseZ + 0.012)), TRIM.plate);
    addGeo(d, box(0.52, 0.11, 0.02, 0, pY, R(0, pY, a.tailZ - 0.004)), TRIM.plate);
  }

  // Underbody: a dark slab between the arches. Without it you see daylight straight through the
  // wheel wells and the car reads as a shell on castors.
  const uw = spec.wheelX - spec.wheelW / 2 - 0.02, uy = spec.sill * 0.70;
  addGeo(d, box(uw * 2, archTopOf(spec) - uy, (a.noseZ - a.tailZ) * 0.84, 0,
    (archTopOf(spec) + uy) / 2, (a.noseZ + a.tailZ) / 2), TRIM.under);

  // Bumpers, sitting just proud of the nose and tail caps and no wider than those caps are.
  addGeo(d, box(a.noseW * 1.92, a.bumperH, 0.10, 0, a.bumperY, F(0, a.bumperY, a.noseZ - 0.04)), TRIM.bumper);
  addGeo(d, box(a.rearW * 1.92, a.bumperH, 0.10, 0, a.bumperY, R(0, a.bumperY, a.tailZ + 0.04)), TRIM.bumper);

  if (spec.bus) {
    // Kerb-side doors (right-hand traffic, so the vehicle's right is -x) and a destination board.
    for (const z of [4.30, 0.60, -1.40]) {
      addGeo(d, box(0.04, 1.14, 1.05, -(a.halfW + 0.005), spec.sill + 0.60, z), TRIM.black);
    }
    addGeo(d, box(a.noseW * 1.30, 0.24, 0.05, 0, 2.54, F(0, 2.54, a.noseZ - 0.01)), TRIM.black);
  } else {
    // Grille (fari e fanali stanno nella geometria delle luci)
    addGeo(d, box(a.noseW * 1.10, a.grilleH, 0.07, 0, a.grilleY, F(0, a.grilleY, a.noseZ - 0.023)), TRIM.black);
    addGeo(d, box(a.rearW * 0.56, a.lampH * 0.7, 0.05, 0, pY, R(0, pY, a.tailZ + 0.018)), TRIM.black);
  }

  return colouredGeom(d);
}

// One wheel, scaled to this body's tyre. A 14-sided cylinder on the X axis with a pale rim disc
// on each face: 76 triangles, and at ten metres that is a wheel.
function wheelGeometry(spec) {
  const d = parts();
  const r = spec.wheelR, w = spec.wheelW;
  addGeo(d, new THREE.CylinderGeometry(r, r, w, 14).rotateZ(Math.PI / 2), TRIM.tyre);
  for (const s of [1, -1]) {
    addGeo(d, new THREE.CircleGeometry(r * 0.60, 12).rotateY(s * Math.PI / 2).translate(s * (w / 2 + 0.004), 0, 0), TRIM.rim);
    // cinque fori scuri tra le razze e il mozzo: da qualche metro il cerchio "a razze" si legge
    for (let k = 0; k < 5; k++) {
      const an = k / 5 * Math.PI * 2;
      addGeo(d, new THREE.CircleGeometry(r * 0.13, 6).rotateY(s * Math.PI / 2).translate(s * (w / 2 + 0.007), Math.cos(an) * r * 0.36, Math.sin(an) * r * 0.36), TRIM.tyre);
    }
    addGeo(d, new THREE.CircleGeometry(r * 0.1, 8).rotateY(s * Math.PI / 2).translate(s * (w / 2 + 0.008), 0, 0), TRIM.hub);
  }
  return colouredGeom(d);
}

// ---------------------------------------------------------------------------------------------
// Ambient traffic
// ---------------------------------------------------------------------------------------------
// Targa italiana generica (bande blu ai lati, caratteri neri): una texture per auto del giocatore
// e volanti, una sola condivisa per il traffico (da lontano non si legge).
const PLATE_L = 'ABCDEFGHJKLMNPRSTVWXYZ';
function plateText() {
  const r = (n) => Math.floor(Math.random() * n), L = () => PLATE_L[r(PLATE_L.length)];
  return 'G' + L() + ' ' + String(100 + r(900)) + ' ' + L() + L();
}
export function plateTexture(text = plateText()) {
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 56;
  const c = cv.getContext('2d');
  c.fillStyle = '#f4f4f0'; c.fillRect(0, 0, 256, 56);
  c.fillStyle = '#1b3c9a'; c.fillRect(0, 0, 24, 56); c.fillRect(232, 0, 24, 56);
  c.fillStyle = '#f2c200';
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; c.fillRect(12 + Math.cos(a) * 7 - 1, 17 + Math.sin(a) * 7 - 1, 2, 2); }
  c.fillStyle = '#fff'; c.font = 'bold 15px Arial'; c.textAlign = 'center'; c.fillText('I', 12, 48);
  c.fillStyle = '#111'; c.font = 'bold 38px "Arial Narrow", Arial'; c.textBaseline = 'middle'; c.fillText(text, 128, 30);
  c.strokeStyle = '#222'; c.lineWidth = 2; c.strokeRect(1, 1, 254, 54);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
let _shadowTex = null;
export function contactShadowTexture() {
  if (_shadowTex) return _shadowTex;
  const cv = document.createElement('canvas'); cv.width = cv.height = 64;
  const c = cv.getContext('2d'), g = c.createRadialGradient(32, 32, 6, 32, 32, 32);
  g.addColorStop(0, 'rgba(0,0,0,0.72)'); g.addColorStop(0.55, 'rgba(0,0,0,0.45)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  c.fillStyle = g; c.fillRect(0, 0, 64, 64);
  _shadowTex = new THREE.CanvasTexture(cv);
  return _shadowTex;
}
const shadowMat = () => new THREE.MeshBasicMaterial({ map: contactShadowTexture(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });

export function trafficCarGeometry() {
  return hull(BODIES.car);
}

// A believable spread of real-world car colours: the greys/silvers/white/black that dominate
// real traffic, plus a handful of saturated ones so a street is varied but not a clown parade.
const FLEET_PALETTE = [
  0xe8eaed, 0xf2f3f5, 0xb9bec6, 0x8b929b, 0x4a4f57, 0x1b1d22, 0xb1362f,
  0x2f5c93, 0x203f6b, 0x2f5d43, 0xb7a37a, 0x7a2f3a, 0x365a6b, 0xc9852b,
];

// The mix, by slot, imported from the simulation side rather than declared here. The simulation
// needs it too — a bus knocks people over along ten metres of flank and only this list says which
// slots are buses — and two copies of a list like this drift the first time one is edited.

export function makeCarFleet(count) {
  // con la mappa d'ambiente (src/envmap.js): vernice metallizzata con trasparente lucido, vetri
  // scuri che riflettono il cielo, luci che di notte si accendono (setNight)
  const paint = new THREE.MeshPhysicalMaterial({color: 0xffffff, metalness: 0.45, roughness: 0.38, clearcoat: 1.0, clearcoatRoughness: 0.08, side: THREE.DoubleSide, envMapIntensity: 1.6});
  const trimM = new THREE.MeshStandardMaterial({vertexColors: true, roughness: 0.45, metalness: 0.2, side: THREE.DoubleSide});
  const wheelM = new THREE.MeshStandardMaterial({vertexColors: true, roughness: 0.6, metalness: 0.35});
  const glassM = new THREE.MeshPhysicalMaterial({color: 0x121a22, metalness: 0.1, roughness: 0.04, clearcoat: 1.0, clearcoatRoughness: 0.02, side: THREE.DoubleSide, envMapIntensity: 1.5});
  const lampM = new THREE.MeshBasicMaterial({vertexColors: true});
  lampM.color.setScalar(0.85);
  const shadowM = shadowMat();
  const shadowGeo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
  const group = new THREE.Group();

  const types = Object.keys(BODIES);
  const slotsOf = {}; for (const t of types) slotsOf[t] = [];
  for (let i = 0; i < count; i++) slotsOf[fleetTypeFor(i)].push(i);

  const meshes = {};              // type -> {body, trim, wheels, spec}
  const route = new Array(count); // slot i -> {type, local}
  for (const t of types) {
    const n = slotsOf[t].length;
    if (n === 0) continue;
    const spec = BODIES[t];
    const body = new THREE.InstancedMesh(fleetBodyGeometry(spec), paint, n);
    const trim = new THREE.InstancedMesh(fleetTrimGeometry(spec), trimM, n);
    const glass = new THREE.InstancedMesh(fleetGlassGeometry(spec), glassM, n);
    const lamps = new THREE.InstancedMesh(fleetLampGeometry(spec), lampM, n);
    const wheels = new THREE.InstancedMesh(wheelGeometry(spec), wheelM, n * 4);
    const shadow = new THREE.InstancedMesh(shadowGeo, shadowM, n);
    body.castShadow = true;
    for (const m of [body, trim, glass, lamps, wheels, shadow]) m.frustumCulled = false;
    shadow.renderOrder = 1;
    group.add(body, trim, glass, lamps, wheels, shadow);
    const an = anchors(spec);
    meshes[t] = {body, trim, glass, lamps, wheels, shadow, spec,
      shadowM: new THREE.Matrix4().compose(new THREE.Vector3(0, 0.035, (an.noseZ + an.tailZ) / 2), new THREE.Quaternion(), new THREE.Vector3(an.halfW * 2 + 0.6, 1, an.noseZ - an.tailZ + 0.7))};
    slotsOf[t].forEach((slot, local) => { route[slot] = {type: t, local}; });
  }

  // Wheels must ROLL, or instanced traffic slides through town on skids — the one failure mode
  // that is invisible in a portrait and glaring in motion. The simulation only tells us where a
  // car IS, so roll is integrated from how far it moved along its own heading since the last
  // frame, and steer from how much that heading turned over the same distance (the bicycle
  // model, damped). A slot parked off-screen at 1e6 jumps further than any car can travel in a
  // frame, so a big delta is discarded rather than spinning the wheels up.
  const prevX = new Float32Array(count).fill(NaN), prevZ = new Float32Array(count);
  const prevR = new Float32Array(count), spinA = new Float32Array(count), steerA = new Float32Array(count);
  const mW = new THREE.Matrix4(), mL = new THREE.Matrix4(), mS = new THREE.Matrix4(), mOut = new THREE.Matrix4();
  const c = new THREE.Color();
  const up = new THREE.Vector3(0, 1, 0), normal = new THREE.Vector3(), tilt = new THREE.Quaternion();
  const slope = new THREE.Matrix4();

  const setAt = (i, x, z, rotY, colourIndex = 0, elevation = groundHeight(x, z)) => {
    const r = route[i]; if (!r) return;
    const {body, trim, glass, lamps, wheels, shadow, spec, shadowM: sm} = meshes[r.type];
    const n = surfaceNormal(x, z, elevation);
    normal.set(n.x, n.y, n.z);
    tilt.setFromUnitVectors(up, normal);
    slope.makeRotationFromQuaternion(tilt);
    mW.makeRotationY(rotY).premultiply(slope).setPosition(x, elevation, z);
    body.setMatrixAt(r.local, mW); trim.setMatrixAt(r.local, mW); glass.setMatrixAt(r.local, mW); lamps.setMatrixAt(r.local, mW);
    mOut.multiplyMatrices(mW, sm); shadow.setMatrixAt(r.local, mOut);
    c.set(FLEET_PALETTE[colourIndex % FLEET_PALETTE.length]);
    body.setColorAt(r.local, c);

    const fwdX = Math.sin(rotY), fwdZ = Math.cos(rotY);
    let ds = 0;
    if (prevX[i] === prevX[i]) {
      const dx = x - prevX[i], dz = z - prevZ[i];
      if (dx * dx + dz * dz < 36) ds = dx * fwdX + dz * fwdZ;
      let dh = rotY - prevR[i];
      while (dh > Math.PI) dh -= Math.PI * 2;
      while (dh < -Math.PI) dh += Math.PI * 2;
      const wheelbase = spec.wheelZ[0] - spec.wheelZ[1];
      const want = Math.abs(ds) > 0.004
        ? Math.max(-0.6, Math.min(0.6, (dh * wheelbase) / ds))
        : 0;
      steerA[i] += (want - steerA[i]) * 0.3;
    }
    prevX[i] = x; prevZ[i] = z; prevR[i] = rotY;
    spinA[i] = (spinA[i] + ds / spec.wheelR) % (Math.PI * 2);

    const [zf, zr] = spec.wheelZ, wx = spec.wheelX, wy = spec.wheelR;
    for (let k = 0; k < 4; k++) {
      const front = k < 2, sx = (k % 2) ? -wx : wx;
      mL.makeRotationX(spinA[i]);
      if (front && steerA[i]) { mS.makeRotationY(steerA[i]); mL.premultiply(mS); }
      mL.setPosition(sx, wy, front ? zf : zr);
      mOut.multiplyMatrices(mW, mL);
      wheels.setMatrixAt(r.local * 4 + k, mOut);
    }

    body.instanceMatrix.needsUpdate = true;
    trim.instanceMatrix.needsUpdate = true;
    glass.instanceMatrix.needsUpdate = true; lamps.instanceMatrix.needsUpdate = true; shadow.instanceMatrix.needsUpdate = true;
    wheels.instanceMatrix.needsUpdate = true;
    if (body.instanceColor) body.instanceColor.needsUpdate = true;
  };
  // di notte fari e fanali accesi (le auto parcheggiate restano spente: dim < 1)
  const setNight = (f, dim = 1) => { lampM.color.setScalar(0.85 + f * 2.6 * dim); };
  return {group, setAt, count, palette: FLEET_PALETTE.length, setNight};
}
// ---------------------------------------------------------------------------------------------
// Wheel — real tyre, dished rim with a chrome lip, five twin-spokes and a hub (hero only)
// ---------------------------------------------------------------------------------------------
const wheelParts = (() => ({
  tireGeo: new THREE.TorusGeometry(0.30, 0.12, 14, 26).rotateY(Math.PI / 2),
  rimBarrelGeo: new THREE.CylinderGeometry(0.20, 0.20, 0.19, 22).rotateZ(Math.PI / 2),
  rimLipGeo: new THREE.TorusGeometry(0.185, 0.03, 8, 24).rotateY(Math.PI / 2),
  hubGeo: new THREE.CylinderGeometry(0.06, 0.06, 0.12, 14).rotateZ(Math.PI / 2),
  spokeGeo: new THREE.BoxGeometry(0.05, 0.17, 0.045),
  brakeGeo: new THREE.CylinderGeometry(0.15, 0.15, 0.03, 20).rotateZ(Math.PI / 2),
}))();
// No env map ships with the scene, so metals must read from DIRECT light: moderate metalness
// with a bright base colour gives a crisp specular highlight, where a metalness-1 chrome goes
// black. This is the documented no-env compromise.
const wheelMats = {
  tire: new THREE.MeshStandardMaterial({color: 0x141519, roughness: 0.85, metalness: 0.1}),
  rim:  new THREE.MeshStandardMaterial({color: 0xd5d9df, metalness: 0.9, roughness: 0.28}),
  lip:  new THREE.MeshStandardMaterial({color: 0xf4f6fa, metalness: 1.0, roughness: 0.12}),
  hub:  new THREE.MeshStandardMaterial({color: 0x3a3d44, metalness: 0.45, roughness: 0.4}),
  brake:new THREE.MeshStandardMaterial({color: 0x54585f, metalness: 0.3, roughness: 0.6}),
};

function wheel() {
  const g = new THREE.Group();
  const tire = new THREE.Mesh(wheelParts.tireGeo, wheelMats.tire);
  const brake = new THREE.Mesh(wheelParts.brakeGeo, wheelMats.brake);
  brake.position.x = 0.04;
  const lip = new THREE.Mesh(wheelParts.rimLipGeo, wheelMats.lip);
  lip.position.x = 0.095;
  const barrel = new THREE.Mesh(wheelParts.rimBarrelGeo, wheelMats.rim);
  const hub = new THREE.Mesh(wheelParts.hubGeo, wheelMats.hub);
  hub.position.x = 0.085;
  g.add(tire, brake, barrel, lip, hub);
  const rMid = 0.115;
  for (let i = 0; i < 5; i++) {
    const ang = (i / 5) * Math.PI * 2;
    const s = new THREE.Mesh(wheelParts.spokeGeo, wheelMats.rim);
    s.rotation.x = -ang;
    s.position.set(0.088, Math.cos(ang) * rMid, -Math.sin(ang) * rMid);
    g.add(s);
  }
  return g;
}

// ---------------------------------------------------------------------------------------------
// The hero
// ---------------------------------------------------------------------------------------------
export function makeCar(tint = 0xc22f1f, {police = false, body = 'car'} = {}) {
  const spec = BODIES[body] || BODIES.car;
  const car = new THREE.Group();
  const bodyColor = police ? 0xf2f4f7 : tint;
  const a = anchors(spec);
  const {noseZ, tailZ, halfW, noseW, rearW} = a;
  const beltY = spec.beltY;
  const [wzF, wzR] = spec.wheelZ, wx = spec.wheelX, wr = spec.wheelR;
  const base = cabBaseOf(spec), tumble = spec.tumble || 0;

  // Physical paint tuned WITHOUT an env map: modest metalness keeps the colour, a MODERATE
  // clearcoat gives the wet sheen without the blown specular pool that bloom turned into a
  // glowing blob on the old car's rear.
  // Con la mappa d'ambiente del gioco (src/envmap.js) la vernice e' metallizzata con un trasparente
  // lucido che riflette il cielo, le cromature sono metallo vero, i vetri scuri e speculari.
  const paint = new THREE.MeshPhysicalMaterial({
    color: bodyColor, metalness: 0.45, roughness: 0.36,
    clearcoat: 1.0, clearcoatRoughness: 0.06, side: THREE.DoubleSide, envMapIntensity: 1.6,
  });
  const darkTrim = new THREE.MeshStandardMaterial({color: 0x111216, roughness: 0.6, metalness: 0.3});
  const chrome = new THREE.MeshStandardMaterial({color: 0xf0f2f5, metalness: 1.0, roughness: 0.14});

  const hullMesh = new THREE.Mesh(hull(spec), paint);
  car.add(hullMesh);
  // superficie vera del muso e della coda a una data altezza: i dettagli (fari, calandra, fanali,
  // targhe) si appoggiano li'. Con il muso inclinato, a noseZ fisso finivano dentro la carrozzeria.
  const rc = new THREE.Raycaster(), rO = new THREE.Vector3(), rD = new THREE.Vector3();
  const surfZ = (x, y, front) => {
    rO.set(x, y, front ? noseZ + 3 : tailZ - 3); rD.set(0, 0, front ? -1 : 1); rc.set(rO, rD);
    const h = rc.intersectObject(hullMesh, false)[0];
    return h ? h.point.z : (front ? noseZ : tailZ);
  };

  // Underbody: dark mass behind the wheel arches, so they are wells and not holes.
  const underM = new THREE.MeshStandardMaterial({color: 0x0b0c0e, roughness: 1.0});
  const uw = wx - spec.wheelW / 2 - 0.02;
  car.add(new THREE.Mesh(
    new THREE.BoxGeometry(uw * 2, archTopOf(spec) - 0.10, (noseZ - tailZ) * 0.80)
      .translate(0, (archTopOf(spec) + 0.10) / 2, (noseZ + tailZ) / 2), underM));

  // Rocker / side skirt: a darker band along the sill between the arches.
  const rockerM = new THREE.MeshStandardMaterial({color: 0x1a1b1f, roughness: 0.65, metalness: 0.2});
  const rockerLen = Math.abs(wzF - wzR) - spec.wheelR * 2.2;
  if (rockerLen > 0.3) for (const s of [1, -1]) {
    const rocker = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.13, rockerLen), rockerM);
    rocker.position.set((halfW - 0.05) * s, spec.sill + 0.04, (wzF + wzR) / 2);
    car.add(rocker);
  }

  // A fender lip hugging the arch the hull now cuts, so the flare reads as pressed bodywork
  // rather than a ring stuck on a slab. Radius follows the arch, not a fixed 0.40.
  const flareGeo = new THREE.TorusGeometry(spec.wheelR * 1.26, spec.wheelR * 0.11, 8, 16, Math.PI).rotateY(Math.PI / 2);
  for (const [x, z] of [[wx, wzF], [-wx, wzF], [wx, wzR], [-wx, wzR]]) {
    const f = new THREE.Mesh(flareGeo, paint);
    f.position.set(x + 0.02 * Math.sign(x), wr, z);
    car.add(f);
  }

  // Interior fill: a solid dark shell just inside the glass, so the greenhouse reads as tinted
  // windows over an interior rather than a see-through black cavity.
  const interiorM = new THREE.MeshStandardMaterial({color: 0x3c4048, roughness: 0.85, metalness: 0.05});
  {
    const cab = spec.cab, cabw = spec.cabw, ipos = [], iidx = [];
    for (let i = 0; i < cab.length; i++) {
      const [z, y] = cab[i], w = cabw[i] * 0.9, wb = (cabw[i] + tumble) * 0.9;
      ipos.push(-wb, base[i] - 0.02, z,  wb, base[i] - 0.02, z,  -w, y - 0.06, z,  w, y - 0.06, z);
    }
    const iat = (i, k) => i * 4 + k;
    for (let i = 0; i < cab.length - 1; i++) {
      iidx.push(iat(i,2), iat(i+1,2), iat(i,3), iat(i,3), iat(i+1,2), iat(i+1,3));
      iidx.push(iat(i,0), iat(i,2), iat(i+1,0), iat(i+1,0), iat(i,2), iat(i+1,2));
      iidx.push(iat(i,1), iat(i+1,1), iat(i,3), iat(i+1,1), iat(i+1,3), iat(i,3));
    }
    iidx.push(iat(0,0), iat(0,1), iat(0,2), iat(0,1), iat(0,3), iat(0,2));
    const L = cab.length - 1;
    iidx.push(iat(L,0), iat(L,2), iat(L,1), iat(L,1), iat(L,2), iat(L,3));
    car.add(new THREE.Mesh(geomFrom({pos: ipos, idx: iidx}), interiorM));
  }

  // Glasshouse — light blue-grey, mostly OPAQUE so it catches the sky from the chase cam instead
  // of showing the interior void. The roof panels are omitted; the body-colour skin covers them.
  const glassM = new THREE.MeshPhysicalMaterial({
    color: 0x16202a, metalness: 0.1, roughness: 0.03,
    transparent: true, opacity: 0.95, clearcoat: 1.0, clearcoatRoughness: 0.02,
    side: THREE.DoubleSide, envMapIntensity: 1.5,
  });
  car.add(new THREE.Mesh(cabinGeometry(spec, true), glassM));

  // Body-colour roof skin, domed across its width.
  const roofM = paint;
  const skin = roofSkin(spec);
  if (skin) {
    car.add(new THREE.Mesh(geomFrom(skin), roofM));
    const [rs0] = spec.roofSlice;
    const [hz, hy] = spec.cab[rs0], hw = spec.cabw[rs0];
    const header = new THREE.Mesh(new THREE.BoxGeometry(hw * 2, 0.03, 0.06), roofM);
    header.position.set(0, hy - 0.005, hz + 0.02); car.add(header);
  }

  // Belt-line chrome at the base of the side glass, so the greenhouse has a crisp lower edge.
  const beltM = new THREE.MeshStandardMaterial({color: 0xd6d9df, metalness: 1.0, roughness: 0.2});
  const cabZ0 = spec.cab[0][0], cabZ1 = spec.cab[spec.cab.length - 1][0];
  const cabWMax = Math.max(...spec.cabw) + tumble;
  for (const s of [1, -1]) {
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.03, Math.abs(cabZ0 - cabZ1) - 0.08), beltM);
    belt.position.set((cabWMax + 0.01) * s, beltY + 0.02, (cabZ0 + cabZ1) / 2);
    car.add(belt);
  }

  // Window pillars (B/C): slim DARK posts flush against the side glass, kept well below the roof
  // edge so their tops never read as spikes above the roofline.
  const pillarM = new THREE.MeshStandardMaterial({color: 0x0d0f12, metalness: 0.2, roughness: 0.3});   // montanti neri lucidi
  for (const g of pillarBoxes(spec)) car.add(new THREE.Mesh(g, pillarM));

  // ---------------- Front + rear treatments ----------------
  const nBefore = car.children.length;
  const tailLensM = new THREE.MeshPhysicalMaterial({color: 0xb0101a, emissive: 0xff1020, emissiveIntensity: 0.4, roughness: 0.15, metalness: 0.0, clearcoat: 1.0});
  const revM = new THREE.MeshPhysicalMaterial({color: 0xe8e8e8, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.15, clearcoat: 1.0});
  const bumpM = new THREE.MeshStandardMaterial({color: 0x17181c, roughness: 0.55, metalness: 0.25});

  if (spec.bus) {
    const band = new THREE.Mesh(new THREE.BoxGeometry(noseW * 1.3, 0.26, 0.05),
      new THREE.MeshStandardMaterial({color: 0x11131a, emissive: 0x223018, emissiveIntensity: 0.25, roughness: 0.5}));
    band.position.set(0, 2.54, noseZ - 0.01); car.add(band);
    for (const s of [1, -1]) {
      const hl2 = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.22, 0.06),
        new THREE.MeshStandardMaterial({color: 0xf3f6ff, emissive: 0xbcd0f0, emissiveIntensity: 0.3, roughness: 0.2}));
      hl2.position.set(0.74 * s, a.headY, noseZ - 0.02); car.add(hl2);
      const bez = new THREE.Mesh(new THREE.BoxGeometry(0.40, 0.26, 0.02), chrome);
      bez.position.set(0.74 * s, a.headY, noseZ - 0.05); car.add(bez);
      const tl = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.34, 0.06), tailLensM);
      tl.position.set(0.86 * s, a.lampY, tailZ + 0.03); car.add(tl);
    }
    const fb = new THREE.Mesh(new THREE.BoxGeometry(noseW * 1.92, a.bumperH, 0.12), bumpM);
    fb.position.set(0, a.bumperY, noseZ - 0.05);
    const rb = new THREE.Mesh(new THREE.BoxGeometry(rearW * 1.92, a.bumperH, 0.12), bumpM);
    rb.position.set(0, a.bumperY, tailZ + 0.05);
    car.add(fb, rb);
    for (const z of [4.30, 0.60, -1.40]) {
      const dr = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.14, 1.05), darkTrim);
      dr.position.set(-(halfW + 0.005), spec.sill + 0.60, z); car.add(dr);
    }
  } else {
    // Grille + badge, headlight buckets with chrome bezels, indicator wedges.
    const grilleW = noseW * 1.10;
    const grille = new THREE.Mesh(new THREE.BoxGeometry(grilleW, a.grilleH, 0.07), darkTrim);
    grille.position.set(0, a.grilleY, noseZ - 0.04); car.add(grille);
    const slatM = new THREE.MeshStandardMaterial({color: 0x2b2e34, metalness: 0.6, roughness: 0.4});
    for (let i = 0; i < 3; i++) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(grilleW - 0.03, 0.02, 0.02), slatM);
      slat.position.set(0, a.grilleY - 0.05 + i * 0.05, noseZ - 0.015); car.add(slat);
    }
    const intake = new THREE.Mesh(new THREE.BoxGeometry(noseW * 1.4, 0.09, 0.05), darkTrim);
    intake.position.set(0, spec.sill + 0.05, noseZ - 0.05); car.add(intake);

    const housingM = new THREE.MeshStandardMaterial({color: 0x0a0b0d, roughness: 0.5, metalness: 0.2});
    const reflectorM = new THREE.MeshStandardMaterial({color: 0xdfe6f2, emissive: 0xfff4dd, emissiveIntensity: 0.15, metalness: 1.0, roughness: 0.15});
    car.userData.lamps = { head: reflectorM, tail: tailLensM, rev: revM };
    const headGlassM = new THREE.MeshPhysicalMaterial({color: 0xcfe0ff, metalness: 0, roughness: 0.05, transparent: true, opacity: 0.35, clearcoat: 1.0});
    const amberM = new THREE.MeshStandardMaterial({color: 0xd2861f, roughness: 0.35, metalness: 0.1});
    const hx = noseW * 0.56;
    for (const s of [1, -1]) {
      const housing = new THREE.Mesh(new THREE.BoxGeometry(0.34, a.headH, 0.10), housingM);
      housing.position.set(hx * s, a.headY, noseZ - 0.09); car.add(housing);
      const refl = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.02), reflectorM);
      refl.position.set(hx * s, a.headY, noseZ - 0.022); car.add(refl);   // davanti alla cornice: la cornice fa da bordo
      const bezel = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.16, 0.02), chrome);
      bezel.position.set(hx * s, a.headY, noseZ - 0.03); car.add(bezel);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.13, 0.015), headGlassM);
      cap.position.set(hx * s, a.headY, noseZ - 0.018); car.add(cap);
      const ind = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.11, 0.06), amberM);
      ind.position.set((hx + 0.24) * s, a.headY, noseZ - 0.05); car.add(ind);
    }
    const badge = new THREE.Mesh(new THREE.CircleGeometry(0.05, 16), chrome);
    badge.position.set(0, a.grilleY, noseZ - 0.003); car.add(badge);

    // Rear: the face the chase cam stares at. Two red blocks high on the tail, a dark plate
    // recess between them, sitting PROUD of the tail cap so the body skin cannot occlude them.
    const lampY = a.lampY, lampZ = tailZ + 0.035;
    for (const s of [1, -1]) {
      const hb = new THREE.Mesh(new THREE.BoxGeometry(rearW * 0.68, 0.20, 0.04),
        new THREE.MeshStandardMaterial({color: 0x120306, roughness: 0.5, metalness: 0.2}));
      hb.position.set(rearW * 0.58 * s, lampY, lampZ + 0.03); car.add(hb);
      const t = new THREE.Mesh(new THREE.BoxGeometry(rearW * 0.60, 0.17, 0.07), tailLensM);
      t.position.set(rearW * 0.58 * s, lampY, lampZ); car.add(t);
    }
    const inset = new THREE.Mesh(new THREE.BoxGeometry(rearW * 0.56, 0.14, 0.04),
      new THREE.MeshStandardMaterial({color: 0x111216, roughness: 0.6, metalness: 0.3}));
    inset.position.set(0, lampY - 0.03, lampZ + 0.03); car.add(inset);
    // targhe italiane (generiche) dietro e davanti; luci di retromarcia accanto alla targa
    const plateM = new THREE.MeshStandardMaterial({ map: plateTexture(), roughness: 0.35, metalness: 0.1 });
    const plateGeo = new THREE.PlaneGeometry(0.52, 0.114);
    const rp = new THREE.Mesh(plateGeo, plateM); rp.rotation.y = Math.PI; rp.position.set(0, lampY - 0.03, tailZ - 0.012); car.add(rp);
    const rpb = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.14, 0.03), darkTrim); rpb.position.set(0, lampY - 0.03, tailZ + 0.004); car.add(rpb);
    const fp = new THREE.Mesh(plateGeo, plateM); fp.position.set(0, a.bumperY, noseZ + 0.012); car.add(fp);
    for (const s of [1, -1]) {
      const rv = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.04), revM);
      rv.position.set(rearW * 0.62 * s, lampY - 0.13, tailZ - 0.005); car.add(rv);
    }

    // Bumper bars, recessed into the nose/tail planes so no top face juts out behind the car.
    const bumperBar = (w, z, dir) => {
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, a.bumperH, 0.09), bumpM);
      b.position.set(0, a.bumperY, z + dir * 0.04); return b;
    };
    car.add(bumperBar(noseW * 1.92, noseZ, -1), bumperBar(rearW * 1.92, tailZ, 1));
    for (const s of [1, -1]) {
      const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.06, 12).rotateX(Math.PI / 2), chrome);
      exhaust.position.set(halfW * 0.42 * s, spec.sill - 0.02, tailZ + 0.05); car.add(exhaust);
    }
  }

  // dettagli davanti e dietro portati sulla superficie vera (se e' piu' arretrata di 2 cm)
  car.updateMatrixWorld(true);
  for (const o of car.children.slice(nBefore)) {
    if (!o.isMesh) continue;
    const front = o.position.z > (noseZ + tailZ) / 2;
    const sz = surfZ(o.position.x, o.position.y, front);
    // i dettagli erano disegnati qualche centimetro dentro il muso e la coda: tutti fuori di 4 cm
    // rispetto alla superficie vera (gli strati tra loro restano uguali)
    if (front) o.position.z += sz - noseZ + 0.04;
    else o.position.z += sz - tailZ - 0.04;
  }

  // Mirrors on stalks, just below the A-pillar base — for every type.
  const mirBodyM = new THREE.MeshStandardMaterial({color: bodyColor, metalness: 0.5, roughness: 0.35});
  const mirGlassM = new THREE.MeshStandardMaterial({color: 0xcfd6dd, metalness: 1.0, roughness: 0.03});
  for (const g of mirrorBoxes(spec)) car.add(new THREE.Mesh(g, mirBodyM));
  {
    const my = cabBaseOf(spec)[0] + (spec.bus ? 0.22 : 0.02), mz = spec.cab[0][0] - (spec.bus ? 0.30 : 0.22);
    for (const s of [1, -1]) {
      const glass = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.09, 0.05), mirGlassM);
      glass.position.set((halfW + 0.16) * s, my, mz); car.add(glass);
    }
  }

  // ------- Dettagli: tergicristalli, linee delle portiere, maniglie, ombra di contatto -------
  if (!spec.bus) {
    const [wsZ] = spec.cab[0], wsY = cabBaseOf(spec)[0], wsW = spec.cabw[0];
    for (const s of [1, -1]) {
      const wip = new THREE.Mesh(new THREE.BoxGeometry(wsW * 0.85, 0.018, 0.022), darkTrim);
      wip.position.set(s * wsW * 0.38, wsY + 0.035, wsZ - 0.04); wip.rotation.z = s * 0.08; wip.rotation.x = -0.35; car.add(wip);
    }
    const seamM = new THREE.MeshStandardMaterial({color: 0x08090b, roughness: 0.8});
    const handleM = new THREE.MeshStandardMaterial({color: 0x15171a, metalness: 0.6, roughness: 0.3});
    const zA = spec.cab[0][0] - 0.02, zC = spec.cab[spec.cab.length - 1][0] + 0.08;
    const twoDoor = body === 'coupe' || (spec.cab[0][0] - spec.cab[spec.cab.length - 1][0]) < 1.5;
    const zB = twoDoor ? zA - (zA - zC) * 0.72 : (zA + zC) / 2 + 0.05;
    const seams = twoDoor ? [zA, zB] : [zA, zB, zC];
    const sh = beltY - spec.sill - 0.14, sy = spec.sill + 0.06 + sh / 2;
    for (const s of [1, -1]) {
      for (const z of seams) { const sm = new THREE.Mesh(new THREE.BoxGeometry(0.012, sh, 0.012), seamM); sm.position.set(s * (halfW + 0.004), sy, z); car.add(sm); }
      for (const z of twoDoor ? [zB + 0.2] : [zB + 0.2, zC + 0.2]) { const hd = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.035, 0.15), handleM); hd.position.set(s * (halfW + 0.012), beltY - 0.11, z); car.add(hd); }
    }
  }
  {
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(halfW * 2 + 0.6, noseZ - tailZ + 0.7).rotateX(-Math.PI / 2), shadowMat());
    sh.position.set(0, 0.035, (noseZ + tailZ) / 2); sh.renderOrder = 1; sh.userData.noShadow = true;
    car.add(sh);
  }

  // ------- Wheels on NAMED pivots — sim owns spin (local X) and steer (fronts, Y) -------
  const stations = [['wheelFL', wx, wzF], ['wheelFR', -wx, wzF], ['wheelRL', wx, wzR], ['wheelRR', -wx, wzR]];
  const wheelScale = wr / 0.30;
  for (const [name, x, z] of stations) {
    const pivot = new THREE.Group();
    pivot.name = name;
    pivot.position.set(x, wr, z);
    const w = wheel(); w.scale.setScalar(wheelScale);
    pivot.add(w);
    car.add(pivot);
  }

  // ------- Police lightbar (sits on whatever roof height this body has) -------
  if (police) {
    const roofTop = Math.max(...spec.cab.map(c => c[1]));
    const barBase = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.05, 0.30), darkTrim);
    barBase.position.set(0, roofTop + 0.05, 0.05); car.add(barBase);
    const barB = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.10, 0.30),
      new THREE.MeshStandardMaterial({color: 0x2244cc, emissive: 0x2255ff, emissiveIntensity: 1.6}));
    barB.position.set(-0.17, roofTop + 0.11, 0.05);
    const barR = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.10, 0.30),
      new THREE.MeshStandardMaterial({color: 0xcc2222, emissive: 0xff2222, emissiveIntensity: 1.6}));
    barR.position.set(0.17, roofTop + 0.11, 0.05);
    car.add(barB, barR);
    car.userData.lightbar = {blue: barB.material, red: barR.material};
  }

  // ------- Lights (contract): headlight spot, tail glow -------
  const hl = new THREE.SpotLight(0xfff1cf, 0, 80, 0.62, 0.5, 1.2);
  hl.position.set(0, a.headY + 0.2, noseZ - 0.05); hl.target.position.set(0, 0.2, noseZ + 10);
  car.add(hl, hl.target);
  car.userData.headlight = hl;
  // The renderer owns this light's intensity each frame; we own only its reach — a short range
  // and high decay keep the glow a tight halo at the lamps, not an orange pool on the road.
  const tail = new THREE.PointLight(0xff2a12, 0.0, 1.4, 3.4);
  tail.position.set(0, a.lampY, tailZ + 0.05);
  car.add(tail);
  car.userData.tailGlow = tail;

  car.traverse(o => { if (o.isMesh && !o.userData.noShadow) o.castShadow = true; });
  return car;
}


// ---------------------------------------------------------------------------------------------
// Aggiunta (Brianza Driving Simulator): deriva una carrozzeria da una esistente scalandone il
// profilo, cosi' le ruote restano tonde e gli archi passaruota seguono il nuovo raggio.
// ---------------------------------------------------------------------------------------------
export function registerBody(name, base, {sz = 1, sy = 1, sx = 1, wheelR} = {}) {
  const b = BODIES[base];
  const s = JSON.parse(JSON.stringify(b));
  s.profile = b.profile.map(([z, y]) => [z * sz, y * sy]);
  s.widths = b.widths.map((w) => w * sx);
  s.cab = b.cab.map(([z, y]) => [z * sz, y * sy]);
  s.cabw = b.cabw.map((w) => w * sx);
  if (b.cabBase) s.cabBase = b.cabBase.map((y) => y * sy);
  s.beltY = b.beltY * sy;
  s.wheelZ = b.wheelZ.map((z) => z * sz);
  s.wheelX = b.wheelX * sx;
  if (wheelR) { s.sill = b.sill + (wheelR - b.wheelR) * 0.6; s.wheelR = wheelR; }
  BODIES[name] = s;
  return s;
}
export function bodySpec(name) { return BODIES[name]; }
export const fleetPalette = FLEET_PALETTE;
