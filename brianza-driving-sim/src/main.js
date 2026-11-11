import * as THREE from 'three';
import { loadData, Projection } from './data.js';
import { Terrain } from './terrain.js';
import { RoadNetwork, CLS } from './roads.js';
import { World } from './world.js';
import { Sky } from './sky.js';
import { CARS, buildCarModel, drawCluster } from './cars.js';
import { Vehicle } from './vehicle.js';
import { Plane, buildPlaneModel, drawPlaneCluster } from './plane.js';
import { Input } from './input.js';
import { Traffic } from './traffic.js';
import { Router, routeProgress } from './router.js';
import { Maps } from './maps.js';
import { EngineAudio } from './audio.js';
import { Pedestrians } from './pedestrians.js';
import { signalState } from './signs.js';
import { NT } from './roads.js';
import { fleetPalette } from './vendor/city/car.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const $ = (id) => document.getElementById(id);
const QUALITY = {
  // farKm: raggio degli edifici semplificati in lontananza (in volo; a terra bastano 3 km per la foschia)
  low: { viewTiles: 1, shadows: false, pixelRatio: 1, trees: 0.5, bloom: false, peds: 20, parked: 132, farKm: 0 },
  mid: { viewTiles: 2, shadows: true, softShadows: false, pixelRatio: 1.25, trees: 0.8, bloom: true, peds: 45, parked: 288, farKm: 5, detailKm: 1.5 },
  high: { viewTiles: 3, shadows: true, softShadows: true, pixelRatio: 2, trees: 1, bloom: true, peds: 70, parked: 432, farKm: 7, detailKm: 2.2 },
};

const G = { started: false, paused: false, mapOpen: false, camMode: 0, route: null, dest: null, voice: true, carIdx: 0,
  foot: { on: false, x: 0, z: 0, y: 0, h: 0, u: 0, gait: 0 },       // giocatore a piedi
  orbit: { yaw: 0, pitch: 0, idle: 9 },                              // telecamera orbitale (mouse)
  licence: 20, fines: 0, cool: {} };                                 // patente a punti e multe
// posizione "viva" del giocatore: l'auto oppure la persona a piedi
const focus = () => (G.foot.on ? G.foot : G.vehicle);
window.BDS = G; // utile per il debug dalla console
if (new URLSearchParams(location.search).get('auto') === '0') G.autoOff = true;

// Caricamento a fasi: tra una fase e l'altra si lascia respirare la pagina, cosi' barra e messaggi
// si aggiornano anche sui computer lenti; un contatore mostra che il lavoro prosegue e un errore
// indica la fase in cui e' avvenuto.
const BOOT = { stage: '', t0: performance.now(), timer: 0 };
function bootStatus() {
  const s = Math.round((performance.now() - BOOT.t0) / 1000);
  let hint = '';
  if (s >= 25) hint = ' — sui computer meno potenti può servire fino a un minuto; chiudi le altre schede del browser';
  $('loadmsg').textContent = BOOT.stage + (s >= 3 ? ` (${s} s)` : '') + hint;
}
function bootFail(e) {
  clearInterval(BOOT.timer);
  console.error(e);
  const ua = navigator.userAgent.match(/(Edg|Chrome|Firefox|Safari)\/[\d.]+/);
  $('loadmsg').textContent = `Errore durante "${BOOT.stage}": ${e && e.message ? e.message : e}` +
    ` — browser: ${ua ? ua[0] : navigator.userAgent}. Usa Chrome, Edge o Firefox aggiornati su computer.`;
  $('loadmsg').style.color = '#ff8a7a';
}
addEventListener('error', (ev) => { if (!G.meta || !G.router) bootFail(ev.error || ev.message); });

async function boot() {
  const pause = () => new Promise((r) => setTimeout(r, 30));
  const setLoad = (f, msg) => { $('loadbar').style.width = (f * 100).toFixed(0) + '%'; if (msg) { BOOT.stage = msg; bootStatus(); } };
  BOOT.timer = setInterval(bootStatus, 1000);
  setLoad(0.03, 'Caricamento della cartografia reale');
  let done = 0;
  const files = [['meta', 'data/meta.js'], ['roads', 'data/roads.js'], ['height', 'data/height.js'], ['landcover', 'data/landcover.js']];
  const res = await Promise.all(files.map(([k, src]) => loadData(k, src).then((r) => { done++; setLoad(0.03 + done / 4 * 0.42, `Caricamento della cartografia reale: ${done} di 4 file`); return r; })));
  const [meta, roadsData, heightBuf, lcImg] = res;
  G.meta = meta;
  G.proj = new Projection(meta.proj);
  setLoad(0.5, 'Altimetria e colori del terreno'); await pause();
  G.terrain = new Terrain(meta, heightBuf, lcImg);
  setLoad(0.62, `Costruzione della rete stradale (${roadsData.ways.length.toLocaleString('it')} vie OSM)`); await pause();
  G.roads = new RoadNetwork(roadsData, G.terrain, meta);
  setLoad(0.9, 'Preparazione del navigatore'); await pause();
  G.router = new Router(G.roads);
  setLoad(1, 'Pronto');
  clearInterval(BOOT.timer);
  $('loading').classList.add('hidden');
  setupMenu();
}

// ------------------------------------------------------------------ menu
function findStreet(name, comune) {
  const R = G.roads, arr = R.streets.get(name) || [];
  let best = null;
  for (const s of arr) {
    const c = G.world.comuneAt(s.x, s.z);
    if (comune && c !== comune) continue;
    if (!best || s.len > best.len) best = s;
  }
  return best;
}

// Partenza predefinita: Via Arturo Toscanini 22A, Giussano. Il civico non e'
// mappato in OSM: si parte a meta' della via reale. Per un punto esatto:
// index.html?lat=45.6829&lon=9.2116 oppure window.BDS_START = { lat, lon } in index.html.
const HOME = { label: 'Giussano – Via Arturo Toscanini 22A (casa)', street: 'Via Arturo Toscanini', comune: 'Giussano', frac: 0.5 };

function homeSpawn() {
  const qs = new URLSearchParams(location.search);
  const cfg = window.BDS_START || {};
  const lat = +(qs.get('lat') || cfg.lat || 0), lon = +(qs.get('lon') || cfg.lon || 0);
  if (lat && lon) { G.pickedStart = G.proj.fromLatLon(lat, lon); return 'picked'; }
  return null;
}

function startOptions() {
  const meta = G.meta, opts = [];
  opts.push({ id: 'casa', label: HOME.label });
  opts.push({ id: 'viamilano', label: 'Giussano – Via Milano' });
  for (const c of meta.featured) opts.push({ id: 'comune:' + c, label: c + ' – centro' });
  const others = meta.comuni.map((c) => c.n).filter((n) => !meta.featured.includes(n)).sort();
  for (const c of others) opts.push({ id: 'comune:' + c, label: c + ' (fuori area principale)' });
  return opts;
}

function setupMenu() {
  const menu = $('menu');
  menu.classList.remove('hidden');
  if (G.meta.dbgt && G.meta.dbgt.length && !$('dbgtcredit')) {
    const p = document.createElement('div'); p.id = 'dbgtcredit';
    p.textContent = `Forme e altezze degli edifici${G.meta.height.step < 20 ? ' e altimetria di dettaglio' : ''}: DBGT – Database Geo-Topografico di Regione Lombardia (${G.meta.dbgt.join(', ')}).`;
    document.querySelector('#menu .credits').appendChild(p);
  }
  const carsEl = $('cars');
  carsEl.innerHTML = '';
  CARS.forEach((c, i) => {
    if (c.hidden) return;
    const d = document.createElement('div');
    d.className = 'car panel' + (i === G.carIdx ? ' sel' : '');
    const spec = c.kind === 'plane'
      ? `<span>${Math.round(c.kw * 1.36)} CV</span><span>${c.mass} kg</span><span>apertura ${c.W} m</span><span>decollo ~${Math.round(c.vRot * 3.6)} km/h</span>`
      : `<span>${Math.round(c.kw * 1.36)} CV</span><span>${c.mass} kg</span><span>${c.gears.length} marce aut.</span><span>${{ F: 'Anteriore', R: 'Posteriore', A: '4x4' }[c.drive]}</span>`;
    d.innerHTML = `<div class="sw" style="background:${c.kind === 'plane' ? c.stripe : c.color}"></div><b>${c.kind === 'plane' ? '✈ ' : ''}${c.name}</b><small>${c.desc}</small>
      <div class="spec">${spec}</div>`;
    d.onclick = () => { G.carIdx = i; [...carsEl.children].forEach((e) => e.classList.toggle('sel', e === d)); };
    carsEl.appendChild(d);
  });
  const sel = $('start');
  sel.innerHTML = '';
  for (const o of startOptions()) { const op = document.createElement('option'); op.value = o.id; op.textContent = o.label; sel.appendChild(op); }
  if (G.pickedStart) { const op = document.createElement('option'); op.value = 'picked'; op.textContent = 'Punto scelto sulla mappa'; sel.prepend(op); sel.value = 'picked'; }
  $('go').onclick = () => startGame();
  $('pickstart').onclick = () => { ensureGame(); openMap('start'); };
}

// ------------------------------------------------------------------ gioco
function ensureGame() {
  if (G.renderer) return;
  const canvas = $('game');
  const q = QUALITY[$('quality').value] || QUALITY.mid;
  G.settings = { ...q };
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, q.pixelRatio));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = q.shadows;
  renderer.shadowMap.type = q.softShadows ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  G.renderer = renderer;
  const scene = new THREE.Scene();
  G.scene = scene;
  G.camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.5, 5000);
  G.sky = new Sky(scene, G.meta.proj.lat0);
  G.world = new World(scene, G.meta, G.terrain, G.roads, G.settings);
  G.traffic = new Traffic(G.world);
  G.world.traffic = G.traffic;
  scene.add(G.traffic.group);
  G.peds = new Pedestrians(G.world);
  G.peds.setTarget(q.peds);
  G.peds.onHit = (p, speed, t) => { if (t.player) fine('ped', speed); };
  scene.add(G.peds.group);
  if (q.bloom) {
    // alone delle luci di notte (lampioni, fari, finestre)
    G.composer = new EffectComposer(renderer);
    G.composer.addPass(new RenderPass(scene, G.camera));
    G.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0, 0.4, 0.82);
    G.composer.addPass(G.bloom);
    G.composer.addPass(new OutputPass());
  }
  // telecamera orbitale: trascina con il mouse
  let drag = null;
  canvas.addEventListener('mousedown', (e) => { drag = [e.clientX, e.clientY]; });
  addEventListener('mouseup', () => { drag = null; });
  addEventListener('mousemove', (e) => {
    if (!drag || G.mapOpen || G.paused || !G.started) return;
    G.orbit.yaw -= (e.clientX - drag[0]) * 0.006; G.orbit.pitch = Math.max(-0.25, Math.min(1.1, G.orbit.pitch + (e.clientY - drag[1]) * 0.004));
    G.orbit.idle = 0; drag = [e.clientX, e.clientY];
  });
  G.maps = new Maps(G.world, G.meta);
  G.input = new Input();
  G.audio = new EngineAudio();
  addEventListener('resize', () => {
    renderer.setSize(innerWidth, innerHeight);
    if (G.composer) G.composer.setSize(innerWidth, innerHeight);
    G.camera.aspect = innerWidth / innerHeight; G.camera.updateProjectionMatrix();
    if (G.mapOpen) { G.maps.resizeBig(); G.mapDirty = true; }
  });
  setupMapUI();
  setupPauseUI();
  requestAnimationFrame(loop);
}

function spawnPoint(id) {
  const R = G.roads, W = G.world;
  const along = (wi, frac, preferSouth = false) => {
    const w = R.ways[wi];
    const [x, z, k] = R.pointAt(w, w.len * frac);
    const a = w.nodes[k], b = w.nodes[k + 1];
    let h = Math.atan2(R.nx[b] - R.nx[a], R.nz[b] - R.nz[a]);
    if (preferSouth && !w.oneway && Math.cos(h) < 0) h += Math.PI;
    const fwd = Math.cos(h - Math.atan2(R.nx[b] - R.nx[a], R.nz[b] - R.nz[a])) > 0;
    const off = R.laneCenter(w, fwd ? 1 : -1); // corsia di marcia
    return { x: x - Math.cos(h) * off, z: z + Math.sin(h) * off, h };
  };
  if (id === 'picked' && G.pickedStart) {
    const nr = R.nearest(G.pickedStart[0], G.pickedStart[1], 300, (w) => w.drivable && w.cls <= CLS.SERVICE);
    if (nr) return along(nr.wi, (R.ways[nr.wi].cum[nr.k] + (R.ways[nr.wi].cum[nr.k + 1] - R.ways[nr.wi].cum[nr.k]) * nr.t) / R.ways[nr.wi].len);
  }
  if (id === 'casa') {
    if (homeSpawn() === 'picked') return spawnPoint('picked');
    // tratto carrabile piu' lungo di Via Arturo Toscanini dentro Giussano
    let best = -1;
    R.ways.forEach((w, wi) => {
      if (w.name !== HOME.street || !w.drivable || w.cls > CLS.RESIDENTIAL) return;
      const [mx, mz] = R.pointAt(w, w.len / 2);
      if (W.comuneAt(mx, mz) !== HOME.comune) return;
      if (best < 0 || w.len > R.ways[best].len) best = wi;
    });
    if (best >= 0) return along(best, HOME.frac);
    id = 'comune:Giussano';
  }
  if (id === 'viamilano') {
    const s = findStreet('Via Milano', 'Giussano');
    if (s) return along(s.wi, 0.35, true);
    id = 'comune:Giussano';
  }
  if (id.startsWith('comune:')) {
    const name = id.slice(7);
    const pl = G.meta.places.find((p) => p.n === name && (p.t === 'town' || p.t === 'city' || p.t === 'village'));
    let x, z;
    if (pl) { x = pl.x; z = pl.z; } else {
      const c = G.maps.comuni.find((c) => c.n === name);
      [x, z] = c && c.label ? c.label : [0, 0];
    }
    const nr = R.nearest(x, z, 400, (w) => w.drivable && w.cls <= CLS.RESIDENTIAL && w.cls >= CLS.SECONDARY);
    if (nr) {
      const w = R.ways[nr.wi];
      return along(nr.wi, (w.cum[nr.k] + (w.cum[nr.k + 1] - w.cum[nr.k]) * nr.t) / w.len);
    }
    return { x, z, h: 0 };
  }
  return { x: 0, z: 0, h: 0 };
}

function makePlayer(spec = CARS[G.carIdx], color = null) {
  if (G.carModel) G.scene.remove(G.carModel.root);
  if (spec.kind === 'plane') {
    G.vehicle = new Plane(spec, G.world);
    G.carModel = buildPlaneModel(spec, { color });
  } else {
    G.vehicle = new Vehicle(spec, G.world);
    G.carModel = buildCarModel(spec, { interior: true, color });
  }
  G.scene.add(G.carModel.root);
  G.lightsOn = false;
  $('helpbar').textContent = spec.kind === 'plane'
    ? 'W/S manetta · ↑/↓ cabra/picchia · A/D vira · Spazio freni a terra · R riparti in volo · C visuale · F scendi (a terra)'
    : 'F scendi/sali · E clacson · M mappa · C visuale · mouse: telecamera · Esc pausa';
  flashHelp(spec.kind === 'plane' ? 20000 : 12000);
}

// la barra dei comandi non resta fissa sullo schermo: compare quando serve e poi sparisce
let helpT = 0;
function flashHelp(ms = 8000) {
  const el = $('helpbar');
  el.style.transition = 'opacity .6s'; el.style.opacity = '0.85';
  clearTimeout(helpT);
  helpT = setTimeout(() => { el.style.opacity = '0'; }, ms);
}

// comandi dell'aereo: W/S spostano la manetta, frecce su/giu' l'equilibratore, A/D o frecce gli alettoni
function planeInput(ctl) {
  const k = G.input.keys;
  return {
    throttle: Math.max(k.has('KeyW') ? 1 : 0, ctl.padThr || 0), brake: Math.max(k.has('KeyS') ? 1 : 0, ctl.padBrk || 0),
    pitch: Math.max(-1, Math.min(1, (k.has('ArrowUp') ? 1 : 0) - (k.has('ArrowDown') ? 1 : 0) - (ctl.stickY || 0))),
    steer: ctl.steer, handbrake: ctl.handbrake,
  };
}
const flying = () => !G.foot.on && G.vehicle && G.vehicle.isPlane && !G.vehicle.onGround;

// ------------------------------------------------------------------ a piedi / veicoli
const TYPE_SPECS = { car: ['compact', 'sedan', 'sport', 'sedan'], wagon: ['city', 'suv', 'compact'], van: ['van'], bus: ['bus'] };
const ownBox = () => ({ halfL: G.vehicle.spec.L / 2, halfW: G.vehicle.spec.W / 2 });

function exitCar() {
  const v = G.vehicle, f = G.foot;
  if (v.isPlane && !v.onGround) { showToast('Atterra prima di scendere', 1200); return; }
  if (Math.abs(v.u) > 2.5) { showToast('Fermati prima di scendere', 1200); return; }
  const lx = Math.cos(v.h), lz = -Math.sin(v.h); // lato guida (sinistra)
  f.x = v.x + lx * (v.spec.W / 2 + 0.75); f.z = v.z + lz * (v.spec.W / 2 + 0.75); f.h = v.h; f.u = 0; f.y = v.y; f.on = true;
  if (G.camMode === 1 || G.camMode === 2) G.camMode = 0;
  G.orbit.yaw = 0; G.camInit = true;
  showToast('A piedi — F per salire su un veicolo', 1800);
  flashHelp(6000);
}

function enterCar() {
  const f = G.foot, v = G.vehicle, T = G.traffic;
  const dOwn = Math.hypot(v.x - f.x, v.z - f.z) - v.spec.W / 2;
  const car = T.nearestCar(f.x, f.z, 2.6), spot = T.nearestParked(f.x, f.z, 2.6);
  const dCar = car ? Math.hypot(car.x - f.x, car.z - f.z) - car.box.halfW : 1e9, dSpot = spot ? Math.hypot(spot.x - f.x, spot.z - f.z) - spot.box.halfW : 1e9;
  const best = Math.min(dOwn, dCar, dSpot);
  if (best > 2.6) { showToast('Nessun veicolo abbastanza vicino', 1200); return; }
  if (best !== dOwn) {
    // lascia l'auto precedente dov'e' e prende l'altra
    const old = G.carModel; old.interior.visible = false; for (const e of old.exterior) e.visible = true;
    T.statics.push({ x: v.x, z: v.z, h: v.h, box: ownBox(), model: old });
    G.carModel = null;
    if (T.statics.length > 6) { const s = T.statics.shift(); G.scene.remove(s.model.root); }
    const got = best === dCar ? T.take(car) : T.takeParked(spot);
    const ids = TYPE_SPECS[got.type] || TYPE_SPECS.car;
    const spec = CARS.find((c) => c.id === ids[got.colour % ids.length]);
    makePlayer(spec, '#' + fleetPalette[got.colour % fleetPalette.length].toString(16).padStart(6, '0'));
    G.vehicle.place(got.x, got.z, got.h);
    showToast(spec.name, 1500);
  }
  f.on = false; G.orbit.yaw = 0; G.camInit = true;
}

function updateFoot(dt, ctl) {
  const f = G.foot, k = G.input.keys;
  const run = k.has('ShiftLeft') || k.has('ShiftRight');
  f.h += ctl.steer * 2.6 * dt;
  const fwd = (k.has('KeyW') || k.has('ArrowUp') || ctl.throttle > 0.3 ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') || ctl.brake > 0.3 ? 0.55 : 0);
  const sp = fwd * (run ? 6.2 : 2.3);
  f.u += (sp - f.u) * Math.min(1, dt * 8);
  f.x += Math.sin(f.h) * f.u * dt; f.z += Math.cos(f.h) * f.u * dt;
  // ostacoli: edifici, muri, alberi, veicoli
  const own = { x: G.vehicle.x, z: G.vehicle.z, h: G.vehicle.h, box: ownBox() };
  for (let pass = 0; pass < 2; pass++) {
    const a = G.world.collision.resolveCircle(f.x, f.z, 0.32);
    if (a) { f.x += a.nx * a.depth; f.z += a.nz * a.depth; }
    G.traffic.statics.push(own);
    const b = G.traffic.resolveCircle(f.x, f.z, 0.32);
    G.traffic.statics.pop();
    if (b) { f.x += b.nx * b.depth; f.z += b.nz * b.depth; }
  }
  f.surface = G.roads.surfaceAt(f.x, f.z, f.y + 0.7);
  f.y = f.surface.h;
  f.gait = Math.abs(f.u) / 2.3;
}

// ------------------------------------------------------------------ patente a punti
function fine(kind, value, key = kind) {
  const now = performance.now();
  if (G.cool[key] && now - G.cool[key] < (kind === 'camera' ? 20000 : 5000)) return;
  G.cool[key] = now;
  let euro = 0, pts = 0, msg = '';
  if (kind === 'ped') { euro = 870; pts = 8; msg = 'Hai urtato un pedone!'; }
  else if (kind === 'red') { euro = 167; pts = 6; msg = 'Passaggio con il rosso'; }
  else if (kind === 'camera') {
    const over = value;
    if (over <= 10) { euro = 42; pts = 0; } else if (over <= 40) { euro = 173; pts = 3; } else if (over <= 60) { euro = 543; pts = 6; } else { euro = 845; pts = 10; }
    msg = `Autovelox: +${Math.round(over)} km/h oltre il limite`;
    const fl = $('flash'); fl.classList.remove('go'); void fl.offsetWidth; fl.classList.add('go');
  }
  G.fines += euro; G.licence -= pts;
  showToast(`🚨 ${msg} — multa € ${euro}${pts ? `, −${pts} punti` : ''}`, 3200);
  if (G.licence <= 0) { G.licence = 20; setTimeout(() => showToast('🪪 Patente sospesa! Corso di recupero: riparti da 20 punti', 4000), 3300); }
  $('licence').textContent = `🪪 ${G.licence} punti · multe € ${G.fines.toLocaleString('it')}`;
}

function checkInfractions(v, kmh, now) {
  if (G.foot.on || v.isPlane || !v.surface || !v.surface.road) return;
  const R = G.roads, rd = v.surface.road, w = R.ways[rd.wi];
  // semaforo rosso
  if (v.u > 3) for (const nd of [w.nodes[rd.k], w.nodes[rd.k + 1]]) {
    if (R.ntag[nd] !== NT.SIGNALS || Math.hypot(R.nx[nd] - v.x, R.nz[nd] - v.z) > 4.5) continue;
    const fx = Math.sin(v.h), fz = Math.cos(v.h);
    if (signalState(Math.abs(fx) > Math.abs(fz) ? 1 : 0, now / 1000) === 'R') fine('red', 0, 'red' + nd);
  }
  // autovelox
  if (kmh > w.limit + 5) for (const c of G.world.cameras) if (Math.hypot(c.x - v.x, c.z - v.z) < 16) fine('camera', kmh - w.limit, 'cam' + Math.round(c.x) + '_' + Math.round(c.z));
}

function startGame() {
  G.audio && G.audio.start();
  ensureGame();
  G.settings.viewTiles = (QUALITY[$('quality').value] || QUALITY.mid).viewTiles;
  G.settings.farKm = (QUALITY[$('quality').value] || QUALITY.mid).farKm;
  G.settings.detailKm = (QUALITY[$('quality').value] || QUALITY.mid).detailKm;
  if (G.settings.farKm > 0 && !G.world.farIdx && !G.farLoading) {   // edifici in lontananza: si caricano in sottofondo
    G.farLoading = true;
    loadData('far', 'data/far.js').then((d) => G.world.initFar(d)).catch(() => { /* dati non presenti: si gioca senza */ });
  }
  G.traffic.target = +$('traffic').value;
  $('ptraffic').value = $('traffic').value;
  G.sky.hours = +$('tod').value;
  makePlayer();
  const sp = spawnPoint($('start').value);
  G.vehicle.place(sp.x, sp.z, sp.h);
  if (G.vehicle.isPlane) G.vehicle.pendingLaunch = true;   // l'aereo parte in volo sopra il punto scelto
  G.traffic.clear();
  for (const s of G.traffic.statics) G.scene.remove(s.model.root);
  G.traffic.statics = [];
  G.foot.on = false; G.orbit.yaw = 0; G.orbit.pitch = 0;
  G.peds.setTarget((QUALITY[$('quality').value] || QUALITY.mid).peds);
  G.camInit = true;
  $('menu').classList.add('hidden');
  $('hud').classList.remove('hidden');
  G.started = true; G.paused = false;
  G.loadingWorld = true;
  showToast('Caricamento della zona…', 1500);
  G.audio.start();
}

function respawnOnRoad() {
  const v = G.vehicle, R = G.roads;
  if (v.isPlane) { v.launch(250, 45); G.camInit = true; showToast('Di nuovo in volo a 250 m', 1200); return; }
  const nr = R.nearest(v.x, v.z, 300, (w) => w.drivable && w.cls <= CLS.SERVICE);
  if (!nr) return;
  const w = R.ways[nr.wi], a = w.nodes[nr.k], b = w.nodes[nr.k + 1];
  let h = Math.atan2(R.nx[b] - R.nx[a], R.nz[b] - R.nz[a]);
  if (!w.oneway && Math.cos(h - v.h) < 0) h += Math.PI;
  v.place(nr.px, nr.pz, h);
  showToast('Rimesso in strada', 1200);
}

// ------------------------------------------------------------------ HUD
let toastT = 0;
function showToast(msg, ms = 2500) { const t = $('toast'); t.textContent = msg; t.classList.add('show'); toastT = performance.now() + ms; }

function speak(text) {
  if (!G.voice || !window.speechSynthesis) return;
  try { const u = new SpeechSynthesisUtterance(text); u.lang = 'it-IT'; u.rate = 1.05; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (e) { /* nessuna voce */ }
}

const ARROWS = { left: '↰', right: '↱', 'slight-left': '↖', 'slight-right': '↗', straight: '⬆', uturn: '↶', roundabout: '⟳', arrive: '🏁' };
function fmtDist(m) { return m >= 1000 ? (m / 1000).toFixed(m >= 10000 ? 0 : 1).replace('.', ',') + ' km' : (Math.round(m / 10) * 10) + ' m'; }

function updateNav(dt) {
  const v = focus();
  if (flying() && G.dest) {   // in volo: destinazione in linea d'aria
    const dx = G.dest[0] - v.x, dz = G.dest[1] - v.z, d = Math.hypot(dx, dz);
    let rel = Math.atan2(dx, dz) - v.h; while (rel > Math.PI) rel -= 2 * Math.PI; while (rel < -Math.PI) rel += 2 * Math.PI;
    $('nav').classList.remove('hidden');
    $('navarrow').textContent = Math.abs(rel) < 0.3 ? '⬆' : Math.abs(rel) > 2.6 ? '⬇' : rel > 0 ? (rel > 1.2 ? '⬅' : '↖') : (rel < -1.2 ? '➡' : '↗');
    $('navarrow').style.fontSize = '44px';
    $('navd').textContent = fmtDist(d);
    $('navt').textContent = 'Destinazione in linea d\'aria';
    $('naveta').textContent = `circa ${Math.max(1, Math.round(d / Math.max(20, v.u) / 60))} min alla velocità attuale`;
    return;
  }
  if (!G.route) { $('nav').classList.add('hidden'); return; }
  const r = G.route;
  const pr = routeProgress(r, v.x, v.z);
  if (pr.off > 40) {
    G.offT = (G.offT || 0) + dt;
    if (G.offT > 2.5) { G.offT = 0; recalcRoute(true); return; }
  } else G.offT = 0;
  const remain = r.length - pr.s;
  if (remain < 25) {
    showToast('🏁 Sei arrivato a destinazione!', 4000); speak('Sei arrivato a destinazione');
    G.route = null; G.dest = null; $('nav').classList.add('hidden'); return;
  }
  const next = r.steps.find((s) => s.d > pr.s + 2) || r.steps[r.steps.length - 1];
  const d = Math.max(0, next.d - pr.s);
  $('nav').classList.remove('hidden');
  $('navarrow').textContent = next.type === 'roundabout' ? next.exit + '⟳' : ARROWS[next.type] || '⬆';
  $('navarrow').style.fontSize = next.type === 'roundabout' ? '28px' : '44px';
  $('navd').textContent = fmtDist(d);
  $('navt').textContent = next.text;
  const avg = Math.max(8, r.length / Math.max(1, r.time));
  $('naveta').textContent = `Destinazione: ${fmtDist(remain)} · circa ${Math.max(1, Math.round(remain / avg / 60))} min`;
  // annunci vocali
  if (G.lastStep !== next) { G.lastStep = next; G.announced = 0; }
  if (G.announced === 0 && d < 400 && d > 120) { G.announced = 1; speak(`Tra ${fmtDist(d).replace(',', ' virgola ')}, ${next.text}`); }
  if (G.announced <= 1 && d < 70) { G.announced = 2; speak(next.text); }
}

function recalcRoute(silent) {
  if (!G.dest) return;
  if (flying()) { G.route = null; if (!silent) showToast(`Destinazione impostata: ${fmtDist(Math.hypot(G.dest[0] - G.vehicle.x, G.dest[1] - G.vehicle.z))} in linea d'aria`); return; }
  const v = focus();
  const r = G.router.route(v.x, v.z, v.h, G.dest[0], G.dest[1]);
  G.route = r;
  if (!r) { showToast('Nessun percorso trovato verso la destinazione'); return; }
  G.lastStep = null;
  if (!silent) { showToast(`Percorso calcolato: ${fmtDist(r.length)}`); speak('Percorso calcolato. ' + (r.steps[0] ? r.steps[0].text : '')); }
  else speak('Ricalcolo del percorso');
}

let hudT = 0, fpsN = 0, fpsT = performance.now();
function updateHUD(dt) {
  const v = focus(), R = G.roads, car = G.vehicle;
  hudT += dt; fpsN++;
  const nowT = performance.now();
  if (nowT - fpsT > 1000) { $('fps').textContent = Math.round(fpsN * 1000 / (nowT - fpsT)) + ' fps'; fpsN = 0; fpsT = nowT; }
  if (toastT && performance.now() > toastT) { $('toast').classList.remove('show'); toastT = 0; }
  if (hudT < 0.1) return;
  hudT = 0;
  const kmh = Math.abs(v.u * 3.6);
  $('spd').textContent = Math.round(kmh);
  if (!G.foot.on && car.isPlane) {
    $('gear').textContent = car.crashed > 0 ? 'INCIDENTE' : car.onGround ? 'A TERRA' : car.stall ? 'STALLO' : 'IN VOLO';
    $('gear').style.fontSize = '14px';
    $('gear').style.color = car.stall && !car.onGround ? 'var(--bad)' : '';
    $('rpmbar').style.width = Math.round(car.lever * 100) + '%';
  } else {
    $('gear').textContent = G.foot.on ? 'A PIEDI' : car.gear < 0 ? 'R' : (Math.abs(car.u) < 0.3 && car.throttle < 0.05 ? 'D' : 'D' + car.gear);
    $('gear').style.fontSize = G.foot.on ? '14px' : ''; $('gear').style.color = '';
    $('rpmbar').style.width = (G.foot.on ? 0 : Math.min(100, car.rpm / car.spec.rpmMax * 100)) + '%';
  }
  // strada e comune
  let road = v.surface && v.surface.road;
  let wi = road ? road.wi : -1;
  if (wi < 0) { const nr = R.nearest(v.x, v.z, 25, (w) => w.drivable); if (nr) wi = nr.wi; }
  const comune = G.world.comuneAt(v.x, v.z);
  if (flying()) {
    $('roadname').textContent = car.crashed > 0 ? '💥 Incidente — si riparte in volo' : `In volo · ${Math.round(Math.max(0, car.agl))} m dal suolo`;
    $('limit').classList.add('hidden'); G.curLimit = 0;
  } else if (wi >= 0) {
    const w = R.ways[wi];
    $('roadname').textContent = R.displayName(w);
    $('limitv').textContent = w.limit;
    $('limit').classList.toggle('hidden', G.foot.on);
    $('limitest').textContent = w.limitMapped ? '' : 'indicativo';
    $('limit').classList.toggle('over', kmh > w.limit * 1.1 + 3);
    G.curLimit = w.limit;
  } else { $('roadname').textContent = 'Fuori strada'; $('limit').classList.add('hidden'); G.curLimit = 0; }
  // frazione piu' vicina
  let place = '';
  let best = 1e9;
  for (const p of G.meta.places) {
    if (p.t === 'town' || p.t === 'city' || p.t === 'locality') continue;
    const d = Math.hypot(p.x - v.x, p.z - v.z);
    if (d < best && d < 700) { best = d; place = p.n; }
  }
  $('roadcomune').textContent = (comune || 'Fuori dai confini mappati') + (place && place !== comune ? ' · ' + place : '');
  const [lat, lon] = G.proj.toLatLon(v.x, v.z);
  const hd = ((-v.h * 180 / Math.PI) % 360 + 360 + 180) % 360;
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'];
  $('gps').innerHTML = `GPS ${lat.toFixed(6)}° N, ${lon.toFixed(6)}° E<br>Quota ${Math.round(v.y)} m s.l.m. · Rotta ${Math.round(hd)}° ${dirs[Math.round(hd / 45) % 8]}`;
  $('alt').textContent = !G.foot.on && car.isPlane ? `manetta ${Math.round(car.lever * 100)}% · ${car.vy >= 0 ? '↑' : '↓'} ${Math.abs(car.vy).toFixed(1)} m/s` : '';
  $('clock').textContent = '🕒 ' + G.sky.clock();
  $('tspeed').textContent = G.sky.speed === 0 ? '⏸' : G.sky.speed === 1 ? '1×' : G.sky.speed + '×';
  if (!G.foot.on && car.isPlane && G.camMode === 1) drawPlaneCluster(G.carModel.dashCanvas, G.carModel.dashTex, kmh, car.agl, car.vy, car.lever, car.stall && !car.onGround);
  else if (!G.foot.on && G.carModel.dashCanvas && G.camMode === 1) drawCluster(G.carModel.dashCanvas, G.carModel.dashTex, kmh, car.rpm, car.spec.rpmMax, $('gear').textContent, G.curLimit);
}

// ------------------------------------------------------------------ mappa
function openMap(mode) {
  G.mapOpen = true; G.mapMode = mode || 'dest';
  $('mapview').classList.remove('hidden');
  G.maps.resizeBig();
  const v = G.vehicle;
  if (G.started && v) { G.maps.cx = v.x; G.maps.cz = v.z; G.maps.zoom = 0.35; }
  else { const s = spawnPoint('casa'); G.maps.cx = s.x; G.maps.cz = s.z; G.maps.zoom = 0.12; }
  $('setdest').classList.toggle('hidden', !G.started);
  $('teleport').textContent = G.started ? '📍 Teletrasportati qui' : '📍 Parti da qui';
  $('mapinfo').textContent = G.mapMode === 'start' ? 'Clicca il punto di partenza.' : 'Clicca sulla mappa o cerca un luogo per impostare la destinazione.';
  G.mapDirty = true;
  $('search').value = ''; $('results').innerHTML = '';
}
function closeMap() {
  G.mapOpen = false; $('mapview').classList.add('hidden');
  if (!G.started) setupMenu();
}

function selectPoint(x, z, label) {
  G.mapSel = [x, z];
  const c = G.world.comuneAt(x, z);
  const nr = G.roads.nearest(x, z, 150, (w) => w.drivable);
  const nm = label || (nr ? G.roads.displayName(G.roads.ways[nr.wi]) : 'Punto selezionato');
  G.mapSelLabel = nm + (c ? ', ' + c : '');
  $('mapinfo').innerHTML = `<b>${G.mapSelLabel}</b><br>${G.proj.toLatLon(x, z).map((v) => v.toFixed(5)).join(', ')}`;
  G.mapDirty = true;
  if (G.started && G.mapMode === 'dest') setDestination();
}

function setDestination() {
  if (!G.mapSel) return;
  G.dest = G.mapSel.slice();
  recalcRoute(false);
  G.mapDirty = true;
}

function setupMapUI() {
  const cv = $('bigmap');
  let drag = null, moved = false;
  cv.addEventListener('mousedown', (e) => { drag = [e.clientX, e.clientY, G.maps.cx, G.maps.cz]; moved = false; });
  addEventListener('mousemove', (e) => {
    if (!drag || !G.mapOpen) return;
    const dx = e.clientX - drag[0], dy = e.clientY - drag[1];
    if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;
    G.maps.cx = drag[2] - dx / G.maps.zoom; G.maps.cz = drag[3] - dy / G.maps.zoom; G.mapDirty = true;
  });
  addEventListener('mouseup', (e) => {
    if (drag && !moved && G.mapOpen && e.target === cv) { const [x, z] = G.maps.toWorld(e.clientX, e.clientY); selectPoint(x, z); }
    drag = null;
  });
  cv.addEventListener('wheel', (e) => {
    e.preventDefault();
    const [wx, wz] = G.maps.toWorld(e.clientX, e.clientY);
    const f = Math.exp(-e.deltaY * 0.0015);
    G.maps.zoom = Math.max(0.03, Math.min(6, G.maps.zoom * f));
    const [nx, nz] = G.maps.toWorld(e.clientX, e.clientY);
    G.maps.cx += wx - nx; G.maps.cz += wz - nz; G.mapDirty = true;
  }, { passive: false });
  $('closemap').onclick = closeMap;
  $('setdest').onclick = () => { setDestination(); closeMap(); };
  $('cleardest').onclick = () => { G.route = null; G.dest = null; G.mapDirty = true; };
  $('teleport').onclick = () => {
    if (!G.mapSel) return;
    if (!G.started) { G.pickedStart = G.mapSel.slice(); closeMap(); $('pickinfo').textContent = 'Partenza: ' + G.mapSelLabel; return; }
    G.pickedStart = G.mapSel.slice();
    const sp = spawnPoint('picked'); G.vehicle.place(sp.x, sp.z, sp.h); if (G.vehicle.isPlane) G.vehicle.pendingLaunch = true; G.foot.on = false; G.traffic.clear(); G.camInit = true; G.loadingWorld = true;
    closeMap();
    if (G.dest) recalcRoute(true);
  };
  // ricerca
  const search = $('search');
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    const res = [];
    if (q.length >= 2) {
      for (const c of G.maps.comuni) if (c.n.toLowerCase().includes(q) && c.label) res.push({ n: c.n, sub: 'Comune', x: c.label[0], z: c.label[1] });
      for (const p of G.meta.places) if (p.n.toLowerCase().includes(q)) res.push({ n: p.n, sub: { town: 'Paese', village: 'Paese', suburb: 'Quartiere', hamlet: 'Frazione', neighbourhood: 'Rione', quarter: 'Quartiere', locality: 'Località', city: 'Città' }[p.t] || p.t, x: p.x, z: p.z });
      for (const lm of G.meta.landmarks) if (lm[3].toLowerCase().includes(q)) res.push({ n: lm[3], sub: ['', 'Luogo di culto', 'Stazione', 'Municipio', 'Ospedale', 'Distributore', 'Storico', 'Attrazione', 'Parco', 'Supermercato', 'Cultura', 'Scuola', 'Acqua', 'Cima'][lm[0]] + (G.world.comuneAt(lm[1], lm[2]) ? ' · ' + G.world.comuneAt(lm[1], lm[2]) : ''), x: lm[1], z: lm[2] });
      let n = 0;
      for (const [name, arr] of G.roads.streets) {
        if (!name.toLowerCase().includes(q)) continue;
        const byC = new Map();
        for (const s of arr) { const c = G.world.comuneAt(s.x, s.z) || '—'; if (!byC.has(c) || byC.get(c).len < s.len) byC.set(c, s); }
        for (const [c, s] of byC) res.push({ n: name, sub: 'Via · ' + c, x: s.x, z: s.z });
        if (++n > 40) break;
      }
    }
    $('results').innerHTML = '';
    for (const r of res.slice(0, 60)) {
      const d = document.createElement('div');
      d.innerHTML = `${r.n} <small>${r.sub}</small>`;
      d.onclick = () => { G.maps.cx = r.x; G.maps.cz = r.z; G.maps.zoom = Math.max(G.maps.zoom, 0.8); selectPoint(r.x, r.z, r.n); };
      $('results').appendChild(d);
    }
  });
}

function setupPauseUI() {
  $('resume').onclick = () => togglePause(false);
  $('tomenu').onclick = () => { togglePause(false); G.started = false; $('hud').classList.add('hidden'); setupMenu(); };
  $('ptraffic').onchange = (e) => { G.traffic.target = +e.target.value; if (!G.traffic.target) G.traffic.clear(); };
  $('ptime').onchange = (e) => { G.sky.speed = +e.target.value; };
  $('pvoice').onchange = (e) => { G.voice = e.target.value === '1'; };
  $('paudio').onchange = (e) => { G.audio.muted = e.target.value === '0'; };
  const cfg = G.input.wheelCfg;
  const fillAx = (sel, val) => { sel.innerHTML = ''; for (let i = 0; i < 10; i++) { const o = document.createElement('option'); o.value = i; o.textContent = 'Asse ' + i; sel.appendChild(o); } sel.value = val; };
  fillAx($('axsteer'), cfg.steerAxis); fillAx($('axthr'), cfg.throttleAxis); fillAx($('axbrk'), cfg.brakeAxis);
  $('wheelon').checked = cfg.enabled; $('axinv').checked = cfg.invertPedals;
  const save = () => { cfg.enabled = $('wheelon').checked; cfg.steerAxis = +$('axsteer').value; cfg.throttleAxis = +$('axthr').value; cfg.brakeAxis = +$('axbrk').value; cfg.invertPedals = $('axinv').checked; G.input.saveWheel(); };
  for (const id of ['wheelon', 'axsteer', 'axthr', 'axbrk', 'axinv']) $(id).onchange = save;
}

function togglePause(on) {
  G.paused = on;
  $('pause').classList.toggle('hidden', !on);
  if (!on && G.started) flashHelp(6000);
  if (on) { $('ptime').value = String(G.sky.speed); }
}

// ------------------------------------------------------------------ telecamera
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3(), tmpV = new THREE.Vector3();
const CAM_NAMES = ['Visuale esterna', 'Visuale abitacolo', 'Visuale cofano', 'Visuale esterna lontana'];
function updateCamera(dt, lookBack) {
  const v = G.vehicle, cam = G.camera, m = G.carModel, f = G.foot, o = G.orbit;
  const mode = f.on ? 0 : G.camMode;
  if (G.debugCam) { cam.position.set(...G.debugCam.pos); cam.lookAt(...G.debugCam.look); cam.near = 1; cam.updateProjectionMatrix(); m.interior.visible = false; for (const e of m.exterior) e.visible = true; return; }
  m.interior.visible = mode === 1;
  for (const e of m.exterior) e.visible = mode !== 1;
  document.body.classList.toggle('cockpit', mode === 1);
  // la visuale orbitale torna dietro al veicolo dopo un paio di secondi
  o.idle += dt;
  if (o.idle > 2.2 && (f.on ? Math.abs(f.u) > 0.5 : Math.abs(v.u) > 2)) { o.yaw *= Math.exp(-dt * 2.5); o.pitch *= Math.exp(-dt * 2.5); }
  if (mode === 0 || mode === 3) {
    const p = f.on ? f : v;
    const dist = f.on ? 5.6 : (mode === 0 ? 4.2 : 8) + v.spec.L * (v.isPlane ? 1.1 : 0.75);
    const hgt = f.on ? 2.5 : mode === 0 ? 2.1 + v.spec.H * 0.4 : 4.2, lookY = f.on ? 1.3 : 1.2;
    const yaw = p.h + o.yaw + (lookBack ? Math.PI : 0);
    const cp = Math.cos(o.pitch), sp = Math.sin(o.pitch);
    const target = tmpV.set(p.x - Math.sin(yaw) * dist * cp, p.y + hgt + dist * sp, p.z - Math.cos(yaw) * dist * cp);
    const gh = G.roads.surfaceAt(target.x, target.z, p.y + 3).h;
    target.y = Math.max(target.y, gh + 0.8);
    if (G.camInit) { camPos.copy(target); G.camInit = false; }
    camPos.lerp(target, 1 - Math.exp(-dt * (lookBack || o.idle < 0.3 ? 30 : f.on ? 9 : 7)));
    cam.position.copy(camPos);
    const ahead = f.on ? 0.5 : 4;
    camLook.set(p.x + Math.sin(yaw) * ahead, p.y + lookY, p.z + Math.cos(yaw) * ahead);
    cam.lookAt(camLook);
    cam.near = 0.5;
  } else {
    const eye = mode === 1 ? m.root.userData.eye.clone() : new THREE.Vector3(0, v.spec.H * 0.82 + 0.05, v.spec.L * 0.18);
    m.root.updateMatrixWorld();
    cam.position.copy(eye.applyMatrix4(m.root.matrixWorld));
    // con il mouse ci si guarda attorno dall'abitacolo
    const ly = (lookBack ? Math.PI : 0) + o.yaw, d = 30;
    const ahead = new THREE.Vector3(Math.sin(ly) * d, (mode === 1 ? (v.isPlane ? -3.5 : -3.2) : -0.9) - o.pitch * d * 0.5, Math.cos(ly) * d).add(mode === 1 ? m.root.userData.eye : new THREE.Vector3(0, v.spec.H * 0.82, 0)).applyMatrix4(m.root.matrixWorld);
    cam.lookAt(ahead);
    cam.near = 0.08;
    camPos.copy(cam.position);
  }
  cam.updateProjectionMatrix();
}

// ------------------------------------------------------------------ qualita' automatica
// Se il computer non tiene ~24 fotogrammi al secondo si abbassa la risoluzione di disegno (fino
// al 60%) e poi si spengono le ombre; quando c'e' margine (oltre ~50 fps) si risale.
// Disattivabile con window.BDS.autoOff = true oppure index.html?auto=0.
const AQ = { t: 0, n: 0, scale: 1, good: 0, shadowsOff: false };
function autoQuality(frame) {
  if (G.autoOff || G.loadingWorld || frame > 0.5) return;
  AQ.t += frame; AQ.n++;
  if (AQ.t < 1.5) return;
  const avg = AQ.t / AQ.n; AQ.t = 0; AQ.n = 0;
  const base = Math.min(devicePixelRatio, G.settings.pixelRatio);
  const apply = () => { const pr = Math.max(0.5, base * AQ.scale); G.renderer.setPixelRatio(pr); if (G.composer) G.composer.setPixelRatio(pr); };
  if (avg > 0.042) {
    AQ.good = 0;
    if (AQ.scale > 0.61) { AQ.scale = Math.max(0.6, AQ.scale - 0.14); apply(); }
    else if (!AQ.shadowsOff && G.settings.shadows) { AQ.shadowsOff = true; G.sky.sun.castShadow = false; }
  } else if (avg < 0.02) {
    if (++AQ.good >= 3) {
      AQ.good = 0;
      if (AQ.shadowsOff) { AQ.shadowsOff = false; G.sky.sun.castShadow = true; }
      else if (AQ.scale < 1) { AQ.scale = Math.min(1, AQ.scale + 0.1); apply(); }
    }
  } else AQ.good = 0;
  $('fps').title = `risoluzione ${Math.round(AQ.scale * 100)}%${AQ.shadowsOff ? ', ombre spente' : ''}`;
}

// ------------------------------------------------------------------ ciclo
let last = performance.now();
let miniT = 0;
function loop(now) {
  requestAnimationFrame(loop);
  const frame = (now - last) / 1000;
  let dt = Math.min(0.05, frame); last = now;
  if (!G.renderer) return;
  if (G.mapOpen) {
    G.input.read(dt);
    if (G.input.consume('KeyM') || G.input.consume('Escape')) closeMap();
    if (G.mapDirty) { G.maps.drawBig(G.started ? focus() : null, G.route, G.dest || (G.mapMode === 'start' ? null : G.mapSel)); G.mapDirty = false; }
    if (G.mapSel && G.mapMode === 'start' && !G.started) { /* evidenzia */ }
    return;
  }
  if (!G.started) return;
  const inp = G.input;
  if (inp.consume('Escape')) togglePause(!G.paused);
  if (G.paused) {
    const snap = inp.axesSnapshot();
    $('axes').textContent = snap ? `${snap.id}: ` + snap.axes.map((a, i) => `${i}:${a.toFixed(2)}`).join('  ') : 'Nessun dispositivo rilevato: collega il volante e premi un pedale.';
    return;
  }
  const ctl = inp.read(dt);
  if (inp.consume('KeyC') || ctl.buttons.has(3)) { G.camMode = (G.camMode + 1) % 4; showToast(CAM_NAMES[G.camMode], 1000); }
  if (inp.consume('KeyM') || ctl.buttons.has(8)) { openMap('dest'); return; }
  if (inp.consume('KeyN')) $('mini-wrap').classList.toggle('hidden');
  if (inp.consume('KeyH') || ctl.buttons.has(2)) { G.lightsOn = !G.lightsOn; showToast(G.lightsOn ? 'Fari accesi' : 'Fari spenti', 900); }
  if (inp.consume('KeyR') && !G.foot.on) respawnOnRoad();
  if (inp.consume('KeyK')) { G.world.labelsOn = !G.world.labelsOn; showToast(G.world.labelsOn ? 'Nomi dei luoghi visibili' : 'Nomi dei luoghi nascosti', 1000); }
  if (inp.consume('KeyT')) { const sp = [30, 300, 0, 1]; G.sky.speed = sp[(sp.indexOf(G.sky.speed) + 1) % sp.length]; showToast('Velocità del tempo: ' + (G.sky.speed ? G.sky.speed + '×' : 'ferma'), 1000); }
  if (inp.consume('Equal') || inp.consume('NumpadAdd')) G.sky.hours = (G.sky.hours + 1) % 24;
  if (inp.consume('Minus') || inp.consume('NumpadSubtract')) G.sky.hours = (G.sky.hours + 23) % 24;

  if (inp.consume('KeyF') || inp.consume('Enter') || ctl.buttons.has(1)) { if (G.foot.on) enterCar(); else exitCar(); }
  const horn = !G.foot.on && (inp.keys.has('KeyE') || !!ctl.hornPad);
  G.audio.horn(horn);

  const v = G.vehicle, f = G.foot, p = focus();
  // mondo
  G.world.update(p.x, p.z);
  G.world.pump(G.loadingWorld ? 40 : flying() ? 12 : 7);
  if (G.settings.farKm > 0) { G.world.updateFar(p.x, p.z, flying() ? G.settings.farKm * 1000 : Math.min(G.settings.farKm * 1000, 3200)); G.world.pumpFar(G.loadingWorld ? 12 : 3); }
  if (G.loadingWorld) {
    if (G.world.ready(v.x, v.z)) {
      G.loadingWorld = false;
      if (v.pendingLaunch) { v.pendingLaunch = false; v.launch(250, 45); G.camInit = true; showToast('✈ In volo sopra la Brianza — W/S manetta, ↑/↓ cabra/picchia, A/D vira', 4500); }
      else if (!v.isPlane || v.onGround) { const s = G.roads.surfaceAt(v.x, v.z, 1e9); v.y = s.h; }
    } else { ctl.throttle = 0; ctl.brake = 1; }
  }
  if (!G.loadingWorld) {
    if (f.on) { v.update(dt, { throttle: 0, brake: 1, steer: 0, handbrake: 1, pitch: 0 }); updateFoot(dt, ctl); }
    else v.update(dt, v.isPlane ? planeInput(ctl) : ctl);
  }
  if (v.isPlane) {
    if (v.crashed > 0 && !v.crashShown) { v.crashShown = true; showToast('💥 ' + v.crashMsg + ' Si riparte in volo…', 2200); }
    if (v.relaunched) { v.relaunched = false; v.crashShown = false; G.camInit = true; }
    if (v.touchdown) { v.touchdown = false; showToast(v.impact > 0.4 ? 'Atterraggio un po\' brusco' : '🛬 Atterraggio riuscito', 1800); v.impact = 0; }
    if (v.outside) { v.outside = 0; showToast('Fine della zona: si torna indietro', 1500); }
  }
  // pedoni: minacce = auto del giocatore + traffico vicino
  const fx = Math.sin(v.h), fz = Math.cos(v.h), lx = Math.cos(v.h), lz = -Math.sin(v.h);
  const threats = flying() ? [] : [{ x: v.x, z: v.z, h: v.h, vx: fx * v.u + lx * v.v, vz: fz * v.u + lz * v.v, halfL: v.spec.L / 2, halfW: v.spec.W / 2, player: true }];
  for (const c of G.traffic.cars) if (Math.abs(c.x - p.x) < 90 && Math.abs(c.z - p.z) < 90) threats.push({ x: c.x, z: c.z, h: c.h, vx: Math.sin(c.h) * c.speed, vz: Math.cos(c.h) * c.speed, halfL: c.box.halfL, halfW: c.box.halfW });
  const onRoad = G.loadingWorld ? [] : G.peds.update(dt, p.x, p.z, threats, horn);
  if (f.on) onRoad.push([f.x, f.z]);
  G.traffic.obstacles = onRoad;
  G.traffic.update(dt, { x: v.x, z: v.z, h: v.h, u: v.u, wi: v.surface && v.surface.road ? v.surface.road.wi : -1, active: !flying() }, now / 1000);
  const movers = flying() ? [] : [{ x: v.x, z: v.z }];
  for (const c of G.traffic.cars) if (Math.abs(c.x - p.x) < 300 && Math.abs(c.z - p.z) < 300) movers.push(c);
  G.world.gates.update(dt, movers);
  G.peds.drawPlayer(f.on, f.x, f.y, f.z, f.h, f.gait, f.u, dt);
  // modello del giocatore
  const m = G.carModel;
  m.root.position.set(v.x, v.y, v.z);
  m.root.rotation.set(-(v.pitch + v.dynPitch), v.h, v.roll + v.dynRoll, 'YXZ');
  for (const w of m.wheels) { w.pivot.rotation.x = v.wheelSpinAngle || 0; if (w.front) w.pivot.rotation.y = v.steer; }
  if (m.prop) m.prop.rotation.z = v.propAngle || 0;
  if (m.steeringWheel) m.steeringWheel.rotation.z = -v.steer * 7;
  const lights = !f.on && (G.lightsOn || G.sky.night > 0.55);
  if (m.headlight) m.headlight.intensity = lights ? 70 : 0;
  if (m.tailGlow) m.tailGlow.intensity = v.brake > 0.05 && !f.on ? 2.2 : lights ? 0.6 : 0;
  // cielo e luci
  tmpV2.set(p.x, flying() ? v.y - v.agl : p.y, p.z);   // ombre centrate sul suolo anche in volo
  G.sky.update(dt, tmpV2);
  G.world.updateWater(now / 1000, G.scene.fog.color);
  autoQuality(frame);
  // in quota l'aria e' piu' limpida: la foschia si allontana e si vedono i paesi vicini
  const clear = flying() ? 1 + Math.min(1.9, v.agl / 130) : 1;
  G.scene.fog.near *= clear; G.scene.fog.far *= clear;
  G.camera.far = Math.max(1700, G.scene.fog.far * 1.06);   // oltre la foschia non si disegna nulla
  G.world.buildings.setNight(G.sky.night);
  G.world.signage.update(now / 1000, G.sky.night);
  G.traffic.setNight(G.sky.night);
  updateCamera(dt, inp.keys.has('KeyV'));
  G.world.updateLabels(G.camera, flying());
  updateHUD(dt);
  updateNav(dt);
  checkInfractions(v, Math.abs(v.u) * 3.6, now);
  miniT += dt;
  if (miniT > 0.05 && !$('mini-wrap').classList.contains('hidden')) { miniT = 0; G.maps.drawMini(p, G.route, G.sky.night > 0.5); }
  if (f.on) G.audio.update(800, 0, 0, 0); else G.audio.update(v.rpm, v.throttle, Math.abs(v.u) * 3.6, v.slip);
  if (v.impact > 0.25 && !f.on && !v.isPlane) { showToast('💥 Urto!', 700); }
  v.impact = 0;
  if (G.composer && G.sky.night > 0.2) { G.bloom.strength = G.sky.night * 0.55; G.composer.render(); }
  else G.renderer.render(G.scene, G.camera);
}
const tmpV2 = new THREE.Vector3();

boot().catch(bootFail);
