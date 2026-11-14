// ---------------------------------------------------------------------------------------------
// Adattato da "city" di donmutti — https://github.com/donmutti/city (commit 6a58ad4),
// file src/game/pedestrians.js. Licenza dichiarata nel package.json del progetto originale: ISC.
// Estratto: palette, scheletro, geometria delle parti, posa della camminata e disegno della figura.
// La logica di comportamento originale (grafo dei marciapiedi di quel progetto) NON e' inclusa:
// qui c'e' solo createCrowd(), che espone la figura al nostro simulatore.
// ---------------------------------------------------------------------------------------------
import * as THREE from 'three'
import {createPose, strikeRagdoll, stepRagdoll, ragdollDuration} from './ragdoll.js'
export {createPose, strikeRagdoll, stepRagdoll, ragdollDuration}

const PED_PALETTE = [0xc65b4e, 0x4e7fc6, 0x59a06a, 0xc6a44e, 0x8a5ec6, 0x4ea9c6]
/** The other, larger half. */
const DRAB_PALETTE = [0x3c4350, 0x2b2f36, 0x6b6a63, 0x8f8b82, 0x574b40, 0x46533f, 0xb9b3a7,
  0x7d3f3a, 0x2f4a45, 0x51565e]
/** Share of the crowd in something bright. */
const BRIGHT_SHARE = 0.34
/**
 * Trousers, deliberately spanning the whole range from near-black to stone.
 *
 * The range exists so the contrast rule below always has somewhere to go. A palette of six dark
 * blues and browns guarantees that half the crowd ends up a single mud-coloured column whatever
 * the shirt was, and a figure with no value break at the waist reads as one dipped plastic piece.
 */
const TROUSER_PALETTE = [0x2f3440, 0x23262b, 0x3d4657, 0x4a4238, 0x6a6257, 0x2b3a4a, 0x55504a,
  0x8d8574, 0xa9a394, 0x4f6d8f, 0x6f7d8c, 0xbdb6a6]
/** Relative luminance of a packed hex, for the contrast rule. */
function lum(hex) {
  return (0.2126 * ((hex >> 16) & 255) + 0.7152 * ((hex >> 8) & 255) + 0.0722 * (hex & 255)) / 255
}
/** How far apart a top and a bottom must be in value before they read as two garments. */
const CONTRAST = 0.15
const SKIN_PALETTE = [0xf0d2b4, 0xe8c39e, 0xd7a678, 0xb87f52, 0x8d5a3b, 0x60402c]
const HAIR_PALETTE = [0x1b1614, 0x2a1d16, 0x4a3323, 0x6b4a2a, 0xa07940, 0xc9b27e, 0x8e8b86, 0x59544e]
/** A hat is a hair mesh in a colour hair never is, which is all it takes to read as one. */
const HAT_PALETTE = [0x8c2f2a, 0x2c4f7c, 0x1d1d1f, 0x3f6b45, 0xb0a48c, 0x6d5b8c]
const SHOE_PALETTE = [0x1a1a1c, 0x272428, 0x3a2f28, 0x45454a]
/** Bags are drabber than clothes — a bright bag on every third person reads as a toy. */
const BAG_PALETTE = [0x3b3a38, 0x5a4636, 0x2f3d4a, 0x6b6257, 0x7a3f3a]
/** Fraction of people carrying something. */
const BAG_SHARE = 0.34

const REFERENCE_HEIGHT = 1.75
const HIP_Y = 0.908            // hip joint above the sole; also the standing root height
const THIGH = 0.43             // hip -> knee
const SHIN = 0.42              // knee -> ankle
const ANKLE = 0.058            // ankle -> sole
const HIP_HALF = 0.085         // half the distance between the hip joints
const WAIST = 0.092            // hips -> the chest's pivot
/**
 * Chest pivot -> where the arm pivots.
 *
 * Deliberately BELOW the top of the shoulder slope. Hung level with it, the arm's own deltoid ball
 * stands proud above the torso as a nub on each corner, which is the robot-shoulder read.
 */
const CHEST_H = 0.372
const NECK_Y = 0.44            // chest pivot -> where the head pivots
const SHO_HALF = 0.196         // half the shoulder width
const UARM = 0.30              // shoulder -> elbow
const FARM = 0.265             // elbow -> wrist
/** Leg reach at full extension, which is what sets the standing height. */
const LEG = THIGH + SHIN + ANKLE

/**
 * Two adult builds, no children.
 *
 * The difference that actually reads at a distance is the shoulder-to-hip ratio, not height —
 * a broad upper body over narrow hips versus narrower shoulders over wider hips. Heights overlap
 * between the two, as real ones do, so nobody looks like a scaled copy of anybody else.
 */
function buildFor(rand) {
  const female = rand() < 0.5
  const height = female ? 1.58 + rand() * 0.16 : 1.70 + rand() * 0.18
  return {
    female,
    scale: height / REFERENCE_HEIGHT,
    shoulder: female ? 0.88 + rand() * 0.07 : 1.00 + rand() * 0.11,   // chest and shoulder width
    depth: 0.92 + rand() * 0.26,                                      // chest front-to-back
    hipW: female ? 1.04 + rand() * 0.10 : 0.94 + rand() * 0.08,
    limb: (female ? 0.90 : 1.0) + rand() * 0.14,                      // limb thickness
  }
}

// Deterministic noise, so a reload gives the same city rather than a different one each time —
// the difference between a place and a lava lamp.
function mulberry(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// --- geometry ------------------------------------------------------------------------------
/**
 * Merge a handful of primitives into one part geometry, keeping position and normal only.
 *
 * Written out rather than pulled from BufferGeometryUtils because a part is three or four
 * primitives and the whole job is twenty lines. Sub-geometries are never welded, so a shoe merged
 * onto a shin keeps its own hard edges when the normals are recomputed.
 */
function merge(pieces) {
  let vtx = 0, idx = 0
  for (const g of pieces) { vtx += g.attributes.position.count; idx += g.index.count }
  const pos = new Float32Array(vtx * 3), nor = new Float32Array(vtx * 3)
  const ind = new Uint16Array(idx)
  let vo = 0, io = 0
  for (const g of pieces) {
    pos.set(g.attributes.position.array, vo * 3)
    nor.set(g.attributes.normal.array, vo * 3)
    const gi = g.index.array
    for (let i = 0; i < gi.length; i++) ind[io + i] = gi[i] + vo
    vo += g.attributes.position.count
    io += gi.length
    g.dispose()
  }
  const out = new THREE.BufferGeometry()
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3))
  out.setIndex(new THREE.BufferAttribute(ind, 1))
  out.computeVertexNormals()
  return out
}

/** A tapered limb segment hanging DOWN from its joint, which is where every limb pivot sits. */
function segment(rTop, rBot, len, seg = 6) {
  const g = new THREE.CylinderGeometry(rTop, rBot, len, seg, 1, false)
  g.translate(0, -len / 2, 0)
  return g
}
function ball(r, w = 6, h = 4) { return new THREE.SphereGeometry(r, w, h) }
function block(x, y, z) { return new THREE.BoxGeometry(x, y, z) }

/** Every part, authored with its pivot at its joint and the figure facing local +Z. */
function buildParts() {
  // Head: pivot where the neck leaves the shoulders. Skull, jaw and nose — three primitives, and
  // the nose is what tells you which way somebody is facing from across the street.
  // The skull sits FORWARD of the neck, not on top of it. A head balanced dead centre over the
  // spine is the pose of a shop mannequin; a real one carries an inch or two ahead of it, and that
  // small offset is worth more than any amount of face.
  // A skull is an EGG, longer front to back than it is wide, and it overhangs the neck behind as
  // well as in front. Shifted forward on a round ball it grew a flat wall at the back of the head
  // where the neck met it; the fix is length in Z, not offset.
  const skull = ball(0.10, 9, 6); skull.scale(0.84, 1.13, 1.16); skull.translate(0, 0.176, 0.008)
  const jaw = block(0.102, 0.072, 0.112); jaw.translate(0, 0.120, 0.040)
  const neck = new THREE.CylinderGeometry(0.050, 0.058, 0.09, 6); neck.translate(0, 0.045, -0.008)
  const nose = block(0.024, 0.028, 0.034); nose.translate(0, 0.158, 0.122)
  const head = merge([neck, jaw, skull, nose])

  // Hair is a shell over the skull with the FACE cut out of it, not a beanie sitting on top. The
  // cut is a phi range: three.js measures phi from -X, so +Z (the face) is at pi/2, and leaving
  // 70 degrees open there gives a hairline round a face instead of a helmet with a tab on the back.
  // Wraps down past the widest point of the skull and round the nape, rather than perching on top
  // like a sliced bowl. The phi gap is the face.
  const cap = new THREE.SphereGeometry(0.104, 9, 6, Math.PI / 2 + 0.60, Math.PI * 2 - 1.20, 0, 1.92)
  cap.scale(0.89, 1.17, 1.20); cap.translate(0, 0.174, 0.008)
  const hair = merge([cap])

  const mane = block(0.175, 0.22, 0.062); mane.translate(0, 0.005, -0.062)
  const hairLong = merge([mane])

  // Torso and hips are LATHES, not stacks of primitives.
  //
  // Every earlier version built them from a cylinder plus a sphere plus another cylinder, and
  // every one of them had a sawtooth somewhere — because two low-poly surfaces that meet almost
  // tangentially intersect along a ragged line, and "almost tangentially" is exactly what happens
  // when a hem sits on a hip or a shoulder dome sits on a ribcage. Turning the profile on a lathe
  // means there is no intersection to be ragged: one surface, one silhouette, the waist and the
  // shoulder slope built into the curve. It is also fewer triangles than the stack it replaces.
  const prof = (pts) => {
    const g = new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), 8)
    g.scale(1, 1, 0.66)
    return g
  }
  // Hem, waist, chest, shoulder line, neck base — heights are relative to the waist pivot, so the
  // shoulder at 0.40 is 1.40m up on the reference figure and the collar closes at 1.50.
  //
  // The profile SLOPES from the widest point down to the collar over 15cm. Held wide to 0.39 and
  // then dropped to the neck in one step, the same lathe produced square corners that read as
  // shoulder pads — an armoured, hunched silhouette. A trapezius runs downhill from the neck to
  // the arm, and the shoulder line is the END of that slope, not a shelf.
  const chest = merge([prof([
    [0.001, -0.115], [0.176, -0.110], [0.182, -0.060], [0.158, 0.020],
    [0.196, 0.240], [0.188, 0.345], [0.168, 0.405], [0.118, 0.452], [0.068, 0.490],
    [0.001, 0.500],
  ])])
  // Hips: widest BELOW the shirt hem, so the shirt always clears them and the seam is the trousers
  // emerging from under it rather than two near-equal ellipses fighting.
  const pelvis = merge([prof([
    [0.001, 0.125], [0.148, 0.120], [0.166, 0.020], [0.170, -0.050], [0.160, -0.090],
    [0.001, -0.095],
  ])])

  // NO ball at the elbow or the knee. A sphere at a joint has to be fatter than the limb to cover
  // the seam, and a 6x4 sphere that is fatter than the limb is a ring of facets catching the light
  // — the "torn sleeve" sawtooth that survived three attempts to shrink it. Instead the DISTAL
  // segment is built long and starts a few centimetres ABOVE its joint at a radius just under the
  // segment above: straight, the overrun is hidden inside the parent; bent, it is exactly the wedge
  // of material a real joint needs. One primitive fewer per limb as well.
  const OVER = 0.05
  const upperArm = merge([ball(0.049), segment(0.047, 0.040, UARM)])
  const foreTube = segment(0.037, 0.031, FARM + OVER); foreTube.translate(0, OVER, 0)
  const handGeo = ball(0.044, 5, 4); handGeo.scale(0.85, 1.25, 0.62); handGeo.translate(0, -FARM - 0.035, 0)
  const forearm = merge([foreTube, handGeo])

  const thigh = merge([ball(0.086), segment(0.082, 0.060, THIGH)])
  const shinTube = segment(0.057, 0.043, SHIN + 0.06); shinTube.translate(0, 0.06, 0)
  const shin = merge([shinTube])
  const shoe = block(0.088, 0.055, 0.235); shoe.translate(0, -0.030, 0.052)
  const foot = merge([shoe])

  const sack = block(0.24, 0.28, 0.13); sack.translate(0, -0.15, 0)
  const bag = merge([sack])

  return {head, hair, hairLong, chest, pelvis, upperArm, forearm, thigh, shin, foot, bag}
}

// --- frames ------------------------------------------------------------------------------------
// A frame is twelve numbers: the part's local X, Y and Z axes in world (columns 0-2, 3-5, 6-8) and
// its origin (9-11). Every part IS a frame, so drawing one is a scaled copy of its own numbers into
// the instance matrix, and a child joint is the parent's frame times a small rotation.

/** The root frame, from a yaw and an optional pitch/roll. Nothing above it in the hierarchy. */
function rootFrame(f, x, y, z, yaw, swing, lean) {
  const ca = Math.cos(yaw), sa = Math.sin(yaw)
  const cb = Math.cos(swing), sb = Math.sin(swing)
  const cc = Math.cos(lean), sc = Math.sin(lean)
  // Ry(yaw) * Rx(swing), column by column.
  const u0x = ca, u0y = 0, u0z = -sa
  const u1x = sa * sb, u1y = cb, u1z = ca * sb
  const u2x = sa * cb, u2y = -sb, u2z = ca * cb
  // ... * Rz(lean).
  f[0] = u0x * cc + u1x * sc; f[1] = u0y * cc + u1y * sc; f[2] = u0z * cc + u1z * sc
  f[3] = -u0x * sc + u1x * cc; f[4] = -u0y * sc + u1y * cc; f[5] = -u0z * sc + u1z * cc
  f[6] = u2x; f[7] = u2y; f[8] = u2z
  f[9] = x; f[10] = y; f[11] = z
}

/** The root frame taken straight from a ragdoll's rotation columns. */
function rootFromColumns(f, col, x, y, z) {
  f[0] = col[0]; f[1] = col[1]; f[2] = col[2]
  f[3] = col[3]; f[4] = col[4]; f[5] = col[5]
  f[6] = col[6]; f[7] = col[7]; f[8] = col[8]
  f[9] = x; f[10] = y; f[11] = z
}

/** A child joint: offset in the parent's frame, then rotated by a YXZ triple within it. */
function joint(f, p, ox, oy, oz, swing, lean, yaw) {
  const p0 = p[0], p1 = p[1], p2 = p[2], p3 = p[3], p4 = p[4], p5 = p[5], p6 = p[6], p7 = p[7], p8 = p[8]
  f[9] = p[9] + p0 * ox + p3 * oy + p6 * oz
  f[10] = p[10] + p1 * ox + p4 * oy + p7 * oz
  f[11] = p[11] + p2 * ox + p5 * oy + p8 * oz

  const ca = Math.cos(yaw), sa = Math.sin(yaw)
  const cb = Math.cos(swing), sb = Math.sin(swing)
  const cc = Math.cos(lean), sc = Math.sin(lean)
  const u0x = ca, u0z = -sa
  const u1x = sa * sb, u1y = cb, u1z = ca * sb
  const v0x = u0x * cc + u1x * sc, v0y = u1y * sc, v0z = u0z * cc + u1z * sc
  const v1x = -u0x * sc + u1x * cc, v1y = u1y * cc, v1z = -u0z * sc + u1z * cc
  const v2x = sa * cb, v2y = -sb, v2z = ca * cb

  f[0] = p0 * v0x + p3 * v0y + p6 * v0z
  f[1] = p1 * v0x + p4 * v0y + p7 * v0z
  f[2] = p2 * v0x + p5 * v0y + p8 * v0z
  f[3] = p0 * v1x + p3 * v1y + p6 * v1z
  f[4] = p1 * v1x + p4 * v1y + p7 * v1z
  f[5] = p2 * v1x + p5 * v1y + p8 * v1z
  f[6] = p0 * v2x + p3 * v2y + p6 * v2z
  f[7] = p1 * v2x + p4 * v2y + p7 * v2z
  f[8] = p2 * v2x + p5 * v2y + p8 * v2z
}

/** A hinge — a child that only pitches. Knees, elbows and ankles, which is half of all joints. */
function hinge(f, p, oy, swing) {
  const p0 = p[0], p1 = p[1], p2 = p[2], p3 = p[3], p4 = p[4], p5 = p[5], p6 = p[6], p7 = p[7], p8 = p[8]
  f[9] = p[9] + p3 * oy
  f[10] = p[10] + p4 * oy
  f[11] = p[11] + p5 * oy
  const cb = Math.cos(swing), sb = Math.sin(swing)
  f[0] = p0; f[1] = p1; f[2] = p2
  f[3] = p3 * cb + p6 * sb; f[4] = p4 * cb + p7 * sb; f[5] = p5 * cb + p8 * sb
  f[6] = -p3 * sb + p6 * cb; f[7] = -p4 * sb + p7 * cb; f[8] = -p5 * sb + p8 * cb
}

/** Write a frame into an instance matrix, scaling each axis as it goes. */
function put(mesh, i, f, sx, sy, sz) {
  const a = mesh.instanceMatrix.array, o = i * 16
  a[o] = f[0] * sx; a[o + 1] = f[1] * sx; a[o + 2] = f[2] * sx; a[o + 3] = 0
  a[o + 4] = f[3] * sy; a[o + 5] = f[4] * sy; a[o + 6] = f[5] * sy; a[o + 7] = 0
  a[o + 8] = f[6] * sz; a[o + 9] = f[7] * sz; a[o + 10] = f[8] * sz; a[o + 11] = 0
  a[o + 12] = f[9]; a[o + 13] = f[10]; a[o + 14] = f[11]; a[o + 15] = 1
}

/** An instance nobody should see. An InstancedMesh has no per-instance visibility; this is it. */
function hide(mesh, i) {
  const a = mesh.instanceMatrix.array, o = i * 16
  for (let j = 0; j < 16; j++) a[o + j] = 0
  a[o] = 1e-5; a[o + 5] = 1e-5; a[o + 10] = 1e-5; a[o + 15] = 1
  a[o + 13] = -60
}

const clamp = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v)
/** Shortest signed angle from a to b. */
function wrap(d) {
  while (d > Math.PI) d -= Math.PI * 2
  while (d < -Math.PI) d += Math.PI * 2

  return d
}

// ---------------------------------------------------------------------------------------------
// Aggiunta (Brianza Driving Simulator): la folla come insieme di figure articolate istanziate.
// ---------------------------------------------------------------------------------------------
export function createCrowd(COUNT, seed = 20260919) {
  const rand = mulberry(seed)
  const geo = buildParts()
  const mat = new THREE.MeshLambertMaterial()
  const mesh = {}
  const ORDER = ['head', 'hair', 'hairLong', 'chest', 'pelvis',
    'armL', 'armR', 'foreL', 'foreR', 'thighL', 'thighR', 'shinL', 'shinR', 'footL', 'footR', 'bag']
  const GEO_OF = {
    head: 'head', hair: 'hair', hairLong: 'hairLong', chest: 'chest', pelvis: 'pelvis',
    armL: 'upperArm', armR: 'upperArm', foreL: 'forearm', foreR: 'forearm',
    thighL: 'thigh', thighR: 'thigh', shinL: 'shin', shinR: 'shin',
    footL: 'foot', footR: 'foot', bag: 'bag',
  }
  for (const name of ORDER) mesh[name] = new THREE.InstancedMesh(geo[GEO_OF[name]], mat, COUNT)
  const parts = ORDER.map(n => mesh[n])
  const group = new THREE.Group()
  for (const m of parts) { m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); m.frustumCulled = false; group.add(m) }
  for (const m of [mesh.chest, mesh.pelvis, mesh.head, mesh.thighL, mesh.thighR, mesh.bag]) m.castShadow = true
  const tint = new THREE.Color()
  const pick = (palette) => palette[(rand() * palette.length) | 0]
  const people = []
  for (let i = 0; i < COUNT; i++) {
    const build = buildFor(rand)
    const ped = {
      phase: rand() * Math.PI * 2, build, pace: 1.02 + rand() * 0.52,
      lean: 0.03 + rand() * 0.07, swagger: 0.85 + rand() * 0.35,
      bag: rand() < BAG_SHARE, bagSide: rand() < 0.5 ? 1 : -1,
      idle: 0, gait: 1, pose: createPose(), rag: null,
    }
    people.push(ped)
    const bright = rand() < BRIGHT_SHARE
    const shirt = bright ? pick(PED_PALETTE) : pick(DRAB_PALETTE)
    let trouser = pick(TROUSER_PALETTE)
    for (let tries = 0; tries < 10 && Math.abs(lum(trouser) - lum(shirt)) < CONTRAST; tries++) trouser = pick(TROUSER_PALETTE)
    const skin = pick(SKIN_PALETTE)
    const bald = rand() < 0.10
    const hatted = rand() < 0.14
    ped.longHair = !bald && !hatted && rand() < 0.34
    ped.bald = bald
    ped.hatted = hatted
    const sleeves = rand() < 0.45 ? shirt : skin
    mesh.chest.setColorAt(i, tint.setHex(shirt))
    mesh.armL.setColorAt(i, tint.setHex(shirt))
    mesh.armR.setColorAt(i, tint.setHex(shirt))
    mesh.foreL.setColorAt(i, tint.setHex(sleeves))
    mesh.foreR.setColorAt(i, tint.setHex(sleeves))
    mesh.head.setColorAt(i, tint.setHex(skin))
    mesh.pelvis.setColorAt(i, tint.setHex(trouser))
    mesh.thighL.setColorAt(i, tint.setHex(trouser))
    mesh.thighR.setColorAt(i, tint.setHex(trouser))
    mesh.shinL.setColorAt(i, tint.setHex(trouser))
    mesh.shinR.setColorAt(i, tint.setHex(trouser))
    mesh.footL.setColorAt(i, tint.setHex(pick(SHOE_PALETTE)))
    mesh.footR.setColorAt(i, tint.setHex(pick(SHOE_PALETTE)))
    const hairCol = hatted ? pick(HAT_PALETTE) : pick(HAIR_PALETTE)
    mesh.hair.setColorAt(i, tint.setHex(hairCol))
    mesh.hairLong.setColorAt(i, tint.setHex(hairCol))
    mesh.bag.setColorAt(i, tint.setHex(pick(BAG_PALETTE)))
  }
  for (const m of parts) if (m.instanceColor) m.instanceColor.needsUpdate = true

  const F = {
    root: new Float64Array(12), chest: new Float64Array(12), head: new Float64Array(12),
    armL: new Float64Array(12), armR: new Float64Array(12),
    foreL: new Float64Array(12), foreR: new Float64Array(12),
    thighL: new Float64Array(12), thighR: new Float64Array(12),
    shinL: new Float64Array(12), shinR: new Float64Array(12),
    footL: new Float64Array(12), footR: new Float64Array(12), bag: new Float64Array(12),
  }

  // ---- dal progetto originale (invariato): camminata e disegno --------------------------------
  function strideOf(ped) {
    return 0.20 + 0.26 * Math.min(1.7, ped.gait)
  }

  // --- the walk ----------------------------------------------------------------------------------
  /**
   * Fill a pose from the walk cycle.
   *
   * The whole figure comes out of one phase angle. Legs swing in opposition; knees flex through the
   * SWING half and again at toe-off, which is the difference between walking and marching; arms
   * counter the legs; and the shoulders and hips twist against each other, because a person walking
   * is a body rotating about its own spine and a doll is not.
   */
  function walkPose(ped, pose, clock) {
    const p = ped.phase
    const s = Math.sin(p), c = Math.cos(p)
    const amp = strideOf(ped) * (ped.idle > 0 ? 0 : 1)
    const run = Math.max(0, ped.gait - 1)

    // Legs. Positive swing is backward, so a leg is furthest FORWARD at phase 3pi/2.
    const hipL = amp * s
    const hipR = -amp * s
    pose.hipLs = hipL
    pose.hipRs = hipR
    pose.kneeL = kneeFlex(p, amp, run)
    pose.kneeR = kneeFlex(p + Math.PI, amp, run)
    // The ankle: flat through mid-stance, TOE DOWN at push-off, TOE UP at heel strike. Those two
    // are the ends of the cycle and they are what a foot is for. Held at a right angle throughout,
    // the trailing foot leaves the ground as an L-bracket and the leading one lands flat, which
    // together are the difference between walking and being slid along on rails.
    const push = 0.62, heel = 0.38
    const flat = -(hipL + pose.kneeL), flatR = -(hipR + pose.kneeR)
    pose.ankL = clamp(flat + push * Math.max(0, s) ** 1.4 - heel * Math.max(0, -s) ** 1.6, -1.05, 0.40)
    pose.ankR = clamp(flatR + push * Math.max(0, -s) ** 1.4 - heel * Math.max(0, s) ** 1.6, -1.05, 0.40)
    pose.hipLz = 0.02
    pose.hipRz = -0.02

    // Arms counter the legs, and the elbow bends more on the forward swing than the back one.
    const swing = -hipL * 0.62 * ped.swagger * (1 + run * 0.5)
    pose.shLs = swing
    pose.shRs = -swing
    const out = 0.11 + (ped.build.shoulder - 0.95) * 0.35 + run * 0.06
    pose.shLz = out
    pose.shRz = -out
    // An arm is never straight while walking. A resting flexion of about 20 degrees, opening on
    // the back swing and closing to nearly 60 on the forward one — an arm that reaches forward
    // straight is a zombie reach, and it is one of the loudest stiffness tells at distance.
    pose.elbL = 0.34 + 2.05 * Math.max(0, -swing) - 0.18 * Math.max(0, swing) + run * 0.55
    pose.elbR = 0.34 + 2.05 * Math.max(0, swing) - 0.18 * Math.max(0, -swing) + run * 0.55
    // A carried bag keeps that arm still and away from the body; it is not swinging with a bag on it.
    if (ped.bag) {
      if (ped.bagSide > 0) { pose.shLs *= 0.25; pose.elbL = 0.32; pose.shLz = out * 1.5 }
      else { pose.shRs *= 0.25; pose.elbR = 0.32; pose.shRz = -out * 1.5 }
    }

    // Spine. The chest twists against the pelvis, dips toward the swinging leg, and breathes.
    // With the pelvis yawing +7 degrees with the leading leg, this puts about 8 degrees of
    // counter-rotation into the shoulders — the transverse twist that stops a walking figure
    // reading as a cardboard cut-out sliding along a rail when you pass it at an angle.
    pose.twist = -0.26 * s * (1 + run * 0.4)
    pose.spine = -0.02 + 0.03 * Math.abs(c) + Math.sin(clock * 1.6 + ped.phase * 0.1) * 0.012
    pose.spineZ = 0.035 * c
    // The head stays level while the body rolls under it, which is a real thing bodies do and a
    // surprisingly strong cue: a head that bobs with the shoulders reads as a puppet on a stick.
    // It is also carried slightly AHEAD of the spine rather than stacked on it.
    pose.headZ = -pose.spineZ * 0.8
    pose.neck = 0.13 - pose.spine * 0.5
  }

  /** Knee flexion through the cycle: a big lobe through the swing, a small one at toe-off. */
  function kneeFlex(p, amp, run) {
    const swingLobe = Math.max(0, -Math.cos(p))
    const toeOff = Math.max(0, Math.sin(p))
    return 0.08 + (2.1 + run * 1.4) * amp * swingLobe ** 1.15 + (0.75 + run) * amp * toeOff ** 2
  }

  /**
   * Standing height of the hips: whichever foot can reach the ground is the one that is on it.
   *
   * This is where the vertical bob comes from, and it comes for free — nobody authors it. At
   * mid-stance the leg is straight and the hips are at their highest; with the legs split they
   * cannot reach as far and the hips drop about 6cm, twice per cycle, which is the real thing.
   *
   * The dorsiflexion term matters: lift the toe and the HEEL becomes the lowest point of the foot,
   * a couple of centimetres below where a flat sole would be, and without it the leading foot
   * sinks into the road on every step.
   */
  function hipHeight(pose, k) {
    const heelL = 0.062 * Math.max(0, -pose.ankL), heelR = 0.062 * Math.max(0, -pose.ankR)
    const reachL = THIGH * Math.cos(pose.hipLs) + SHIN * Math.cos(pose.hipLs + pose.kneeL) + ANKLE + heelL
    const reachR = THIGH * Math.cos(pose.hipRs) + SHIN * Math.cos(pose.hipRs + pose.kneeR) + ANKLE + heelR
    return Math.max(reachL, reachR) * k
  }

  // --- drawing -------------------------------------------------------------------------------
  /**
   * Draw one figure from its root frame and its pose. The only place the meshes are touched.
   *
   * Used by BOTH the walk and the ragdoll: the root frame is a yaw for one and a tumbling
   * quaternion for the other, and everything below the hips is identical.
   */
  function drawFigure(i, ped, pose) {
    const b = ped.build
    const k = b.scale
    const limb = b.limb * k
    const root = F.root

    joint(F.chest, root, 0, WAIST * k, 0, pose.spine, pose.spineZ, pose.twist)
    joint(F.head, F.chest, 0, NECK_Y * k, 0, pose.neck, pose.headZ, pose.headYaw)

    const sho = SHO_HALF * b.shoulder * k
    joint(F.armL, F.chest, sho, CHEST_H * k, 0, pose.shLs, pose.shLz, 0)
    joint(F.armR, F.chest, -sho, CHEST_H * k, 0, pose.shRs, pose.shRz, 0)
    // Elbows bend the opposite way to knees — a hand comes up in FRONT of the body — so the
    // flexion, which is a positive number everywhere in the pose, is negated on the way in.
    hinge(F.foreL, F.armL, -UARM * k, -pose.elbL)
    hinge(F.foreR, F.armR, -UARM * k, -pose.elbR)

    const hip = HIP_HALF * b.hipW * k
    joint(F.thighL, root, hip, 0, 0, pose.hipLs, pose.hipLz, 0)
    joint(F.thighR, root, -hip, 0, 0, pose.hipRs, pose.hipRz, 0)
    hinge(F.shinL, F.thighL, -THIGH * k, pose.kneeL)
    hinge(F.shinR, F.thighR, -THIGH * k, pose.kneeR)
    hinge(F.footL, F.shinL, -SHIN * k, pose.ankL)
    hinge(F.footR, F.shinR, -SHIN * k, pose.ankR)

    put(mesh.pelvis, i, root, k * b.hipW, k, k * b.depth)
    put(mesh.chest, i, F.chest, k * b.shoulder, k, k * b.depth)
    put(mesh.head, i, F.head, k, k, k)
    if (ped.bald) hide(mesh.hair, i)
    else put(mesh.hair, i, F.head, k * (ped.hatted ? 1.1 : 1), k * (ped.hatted ? 1.12 : 1), k * (ped.hatted ? 1.1 : 1))
    if (ped.longHair) put(mesh.hairLong, i, F.head, k, k, k)
    else hide(mesh.hairLong, i)
    put(mesh.armL, i, F.armL, limb, k, limb)
    put(mesh.armR, i, F.armR, limb, k, limb)
    put(mesh.foreL, i, F.foreL, limb, k, limb)
    put(mesh.foreR, i, F.foreR, limb, k, limb)
    put(mesh.thighL, i, F.thighL, limb, k, limb)
    put(mesh.thighR, i, F.thighR, limb, k, limb)
    put(mesh.shinL, i, F.shinL, limb, k, limb)
    put(mesh.shinR, i, F.shinR, limb, k, limb)
    put(mesh.footL, i, F.footL, limb, k, limb)
    put(mesh.footR, i, F.footR, limb, k, limb)
    if (ped.bag) {
      // Hanging from a hand, so it swings with the arm that carries it — but only half as far as
      // the wrist does: a heavy bag hangs closer to plumb than the arm holding it.
      const hand = ped.bagSide > 0 ? F.foreL : F.foreR
      const elbow = ped.bagSide > 0 ? pose.elbL : pose.elbR
      hinge(F.bag, hand, -(FARM + 0.05) * k, elbow * 0.5)
      put(mesh.bag, i, F.bag, k, k, k)
    } else {
      hide(mesh.bag, i)
    }
  }

  // ---- fine del codice originale ---------------------------------------------------------------

  return {
    group, people, rand, count: COUNT,
    /** Figura in piedi/in cammino: (x, quota del suolo, z), rotta (avanti = sin, cos), orologio. */
    drawWalking(i, x, ground, z, yaw, clock) {
      const ped = people[i], k = ped.build.scale
      walkPose(ped, ped.pose, clock)
      rootFrame(F.root, x, ground + hipHeight(ped.pose, k), z,
        yaw + 0.12 * Math.sin(ped.phase) * (ped.idle > 0 ? 0 : 1),
        ped.lean + 0.12 * Math.max(0, ped.gait - 1), 0.022 * Math.cos(ped.phase))
      drawFigure(i, ped, ped.pose)
    },
    /** Figura investita: la posa e l'orientamento vengono dal ragdoll. */
    drawRagdoll(i, rag, ground) {
      rootFromColumns(F.root, rag.col, rag.x, ground + rag.y, rag.z)
      drawFigure(i, people[i], rag.pose)
    },
    hideAt(i) { for (const m of parts) hide(m, i) },
    commit() { for (const m of parts) m.instanceMatrix.needsUpdate = true },
  }
}
