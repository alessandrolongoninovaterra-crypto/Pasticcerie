import * as THREE from 'three';
import { loadData, Projection } from './data.js';
import { Terrain } from './terrain.js';
import { RoadNetwork, CLS } from './roads.js';
import { World } from './world.js';
import { Sky } from './sky.js';
import { CARS, buildCarModel, drawCluster, stripLights } from './cars.js';
import { loadRealFleet, loadHero, realCredits } from './realcars.js';
import { Weapons } from './weapons.js';
import { PlayerModel } from './player3d.js';
import { DriveEnv, OBS_N } from './agent/env.js';
import { Policy } from './agent/policy.js';
import { AgentDriver, loadDriver, loadPursuit } from './agent/driver.js';
import { buildBikeModel } from './bike.js';
import { Vehicle } from './vehicle.js';
import { Plane, buildPlaneModel, drawPlaneCluster } from './plane.js';
import { buildJetModel } from './jet.js';
import { Input, PadWizard, PAD_ACTIONS, ignorePad } from './input.js';
import { Traffic, BODY_SPEC } from './traffic.js';
import { Router, routeProgress } from './router.js';
import { Maps } from './maps.js';
import { EngineAudio } from './audio.js';
import { Pedestrians } from './pedestrians.js';
import { signalState } from './signs.js';
import { NT } from './roads.js';
import { fleetPalette } from './vendor/city/car.js';
import { Post } from './post.js';
import { updateFog } from './fog.js';
import { ROAD_WET } from './roads.js';
import { STYLES, applyStyleShaders, stylizeLook, stylizeSky } from './style.js';
import { PHOTO } from './buildings.js';
import { DriveFX } from './effects.js';
import { Weather, WEATHER } from './weather.js';
import { Police, SPEC as POLICE_SPEC } from './police.js';
import { Career } from './career.js';
import { EnvMap } from './envmap.js';
import { Dialogue } from './dialogue.js';
const WEATHER_ICON = () => (G.weather ? (G.weather.state === 'clear' && G.sky && G.sky.night > 0.5 ? '🌙' : WEATHER[G.weather.state].icon) : '');
import './geo.js';   // aggancio di computeVertexNormals (normali nulle) prima di costruire qualsiasi modello

const $ = (id) => document.getElementById(id);
const QUALITY = {
  // farKm: raggio degli edifici semplificati in lontananza (in volo; a terra bastano 3 km per la foschia)
  low: { viewTiles: 1, shadows: false, pixelRatio: 1, trees: 0.5, bloom: false, peds: 20, parked: 132, farKm: 0, detailDist: 350 },
  mid: { viewTiles: 2, shadows: true, softShadows: false, pixelRatio: 1, trees: 0.8, bloom: true, ao: 'half', peds: 45, parked: 288, farKm: 5, detailKm: 1.5, detailDist: 500 },
  high: { viewTiles: 3, shadows: true, softShadows: true, pixelRatio: 1.5, trees: 1, bloom: true, ao: 'full', peds: 70, parked: 432, farKm: 7, detailKm: 2.2, detailDist: 750 },
};

const G = { started: false, paused: false, mapOpen: false, camMode: 0, route: null, dest: null, voice: true, carIdx: 0,
  foot: { on: false, x: 0, z: 0, y: 0, h: 0, u: 0, gait: 0 },       // giocatore a piedi
  orbit: { yaw: 0, pitch: 0, idle: 9 },                              // telecamera orbitale (mouse)
  cool: {} };                                                        // attese tra una segnalazione e l'altra
// posizione "viva" del giocatore: l'auto oppure la persona a piedi
const focus = () => (G.foot.on ? G.foot : G.vehicle);
window.BDS = G; // utile per il debug dalla console
// pilota addestrato (tools/agent/train.mjs): ambiente di allenamento e rete
G.agent = { DriveEnv, Policy, OBS_N, AgentDriver, loadDriver, loadPursuit, make: (opts = {}) => new DriveEnv(G, opts.pursuit ? POLICE_SPEC : CARS.find((c) => c.id === (opts.car || 'crv')) || CARS[0], opts) };
G.THREE = THREE;
window.BDS_LOAD = loadData;
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
  // all'avvio solo l'indispensabile: indice, panoramica del terreno e rete del navigatore; il resto
  // (quote, colori, strade, edifici) arriva a tessere attorno al punto di partenza
  const files = [['meta', 'data/meta.js'], ['overview', 'data/overview.js'], ['net', 'data/net.js']];
  const res = await Promise.all(files.map(([k, src]) => loadData(k, src).then((r) => { done++; setLoad(0.03 + done / 3 * 0.5, `Caricamento della cartografia reale: ${done} di 3 file`); return r; })));
  const [meta, overview, netData] = res;
  if (!meta.stream) throw new Error('dati nel vecchio formato: rigenerali con tools/run_pipeline.sh');
  G.meta = meta;
  G.proj = new Projection(meta.proj);
  setLoad(0.6, 'Panoramica del terreno'); await pause();
  G.terrain = new Terrain(meta, overview);
  await G.terrain.init();
  G.roads = new RoadNetwork(meta, G.terrain);
  setLoad(0.75, `Rete del navigatore (${(netData.w.length / 12).toLocaleString('it')} strade)`); await pause();
  G.net = new RoadNetwork(meta, null, 128);
  G.net.addNav(netData);
  setLoad(0.9, 'Preparazione del navigatore'); await pause();
  G.router = new Router(G.net);
  setLoad(0.92, 'Auto'); await pause();
  await loadRealFleet((d, n) => setLoad(0.92 + d / n * 0.08, `Auto: ${d} di ${n} modelli`));
  setLoad(1, 'Pronto');
  clearInterval(BOOT.timer);
  $('loading').classList.add('hidden');
  setupMenu();
}

// ------------------------------------------------------------------ menu
function findStreet(name, comune) {
  const R = G.net, arr = R.streets.get(name) || [];
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
  if (!G.padUI) { G.padUI = true; setupPadUI(); }
  menu.classList.remove('hidden');
  if (G.meta.dbgt && G.meta.dbgt.length && !$('dbgtcredit')) {
    const p = document.createElement('div'); p.id = 'dbgtcredit';
    p.textContent = `Forme e altezze degli edifici${G.meta.height.step < 20 ? ' e altimetria di dettaglio' : ''}: DBGT – Database Geo-Topografico di Regione Lombardia (${G.meta.dbgt.join(', ')}).`;
    document.querySelector('#menu .credits').appendChild(p);
  }
  if (!$('carcredit')) {
    const p = document.createElement('div'); p.id = 'carcredit';
    p.textContent = 'Modelli 3D delle auto (dal progetto OSDS, CC BY 4.0): ' + realCredits().join('; ') + '.';
    document.querySelector('#menu .credits').appendChild(p);
  }
  const carsEl = $('cars');
  carsEl.innerHTML = '';
  if (CARS[G.carIdx].menuHidden || CARS[G.carIdx].hidden) G.carIdx = Math.max(0, CARS.findIndex((c) => c.id === 'mini'));
  CARS.forEach((c, i) => {
    if (c.hidden || c.menuHidden) return;
    const d = document.createElement('div');
    d.className = 'car panel' + (i === G.carIdx ? ' sel' : '');
    const spec = c.jet
      ? `<span>spinta ${c.thrustKN} kN</span><span>${c.mass} kg</span><span>fino a ~${Math.round(c.vNe * 0.75 * 3.6 / 50) * 50} km/h</span><span>decollo ~${Math.round(c.vRot * 3.6)} km/h</span>`
      : c.kind === 'plane'
      ? `<span>${Math.round(c.kw * 1.36)} CV</span><span>${c.mass} kg</span><span>apertura ${c.W} m</span><span>decollo ~${Math.round(c.vRot * 3.6)} km/h</span>`
      : `<span>${Math.round(c.kw * 1.36)} CV</span><span>${c.mass} kg</span><span>${c.gears.length > 1 ? c.gears.length + ' marce aut.' : 'elettrica'}</span><span>${{ F: 'Anteriore', R: 'Posteriore', A: '4x4' }[c.drive]}</span>`;
    d.innerHTML = `<div class="sw" style="background:${c.kind === 'plane' ? c.stripe : c.color}"></div><b>${c.kind === 'plane' ? '✈ ' : c.kind === 'bike' ? '🏍 ' : ''}${c.name}</b><small>${c.desc}</small>
      <div class="spec">${spec}</div>`;
    d.onclick = () => { G.carIdx = i; [...carsEl.children].forEach((e) => e.classList.toggle('sel', e === d)); if (c.real) loadHero(c.real); };
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
  // stile grafico (src/style.js): cambia gli shader della luce prima che si compili qualunque materiale
  G.style = STYLES[$('gstyle').value] ? $('gstyle').value : 'real';
  const ST = STYLES[G.style];
  applyStyleShaders(G.style);
  if (ST.photo === false) PHOTO.on = false;
  G.settings = { ...q };
  G.roads.pbr = !!q.bloom && ST.photo !== false;   // strade con materiali fisici (qualita' media e alta, stile realistico)
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, q.pixelRatio));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = q.shadows;
  renderer.shadowMap.type = q.softShadows && G.style !== 'toon' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;   // cartoon: ombre nette
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  G.renderer = renderer;
  const scene = new THREE.Scene();
  G.scene = scene;
  G.camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.5, 5000);
  G.sky = new Sky(scene, G.meta.proj.lat0);
  G.world = new World(scene, G.meta, G.terrain, G.roads, G.settings);
  // alberi vicini con i modelli veri (qualita' media e alta)
  if (q.bloom) G.world.vegetation.enableNear(scene, q.ao === 'full' ? 160 : 110, q.ao === 'full' ? 900 : 550);
  G.fx = new DriveFX(scene);
  G.weather = new Weather(scene);
  G.envMap = new EnvMap(renderer, G.sky);
  G.traffic = new Traffic(G.world);
  G.world.traffic = G.traffic;
  G.police = new Police(G);
  G.career = new Career(G);
  G.dlg = new Dialogue($('subs'));
  G.toast = showToast;
  G.dialog = (who, text) => { G.dlg.voiceOn = G.voice; G.dlg.say(who, text); };
  G.say = (kind, arg) => sayLine(kind, arg);
  // destinazione dal codice (missioni): con il navigatore e la voce
  G.setDest = (pt, silent) => { if (!pt) { G.dest = null; G.route = null; $('nav').classList.add('hidden'); return; } G.dest = pt; recalcRoute(!!silent); };
  // cambio d'auto al concessionario: stessa posizione e direzione
  G.switchCar = (id) => { const i = CARS.findIndex((c) => c.id === id); if (i < 0) return; const o = G.vehicle; G.carIdx = i; makePlayer(CARS[i]); G.vehicle.place(o.x, o.z, o.h); G.camInit = true; };
  scene.add(G.traffic.group);
  G.peds = new Pedestrians(G.world);
  G.weapons = new Weapons(G);
  G.playerModel = new PlayerModel(G);      // manichino animato di Quaternius (si carica in sottofondo)
  G.peds.setTarget(q.peds);
  G.peds.onHit = (p, speed, t) => { if (t.player) infraction('ped'); };
  scene.add(G.peds.group);
  if (q.bloom) {
    // post-produzione (src/post.js): occlusione ambientale, bagliore, esposizione e colore; la scena
    // si disegna su un'immagine intermedia a 4 campioni per pixel (bordi lisci come senza effetti)
    G.post = new Post(renderer, scene, G.camera, q);
    G.post.setPixelRatio(renderer.getPixelRatio()); G.post.setSize(innerWidth, innerHeight);
    G.post.outline = ST.outline ? 1.9 * Math.max(1, innerHeight * renderer.getPixelRatio() / 900) : 0;
    G.post.bloomExtra = ST.bloom || 0;
    G.composer = G.post;
  }
  // telecamera orbitale: trascina con il mouse
  let drag = null;
  canvas.addEventListener('mousedown', (e) => { if (G.weapons && G.weapons.drawn && G.foot.on) return; drag = [e.clientX, e.clientY]; });   // con l'arma in mano il mouse mira (src/weapons.js)
  addEventListener('mouseup', () => { drag = null; });
  addEventListener('mousemove', (e) => {
    if (!drag || G.mapOpen || G.paused || !G.started) return;
    G.orbit.yaw -= (e.clientX - drag[0]) * 0.006; G.orbit.pitch = Math.max(-0.25, Math.min(1.1, G.orbit.pitch + (e.clientY - drag[1]) * 0.004));
    G.orbit.idle = 0; drag = [e.clientX, e.clientY];
  });
  G.maps = new Maps(G.world, G.meta, G.net);
  G.input = G.input || new Input();
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

// punto di partenza sulla rete del navigatore (le strade vere non sono ancora caricate: appena lo
// sono, snapToLane rimette il veicolo esattamente in corsia)
function spawnPoint(id) {
  const R = G.net, W = G.world;
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

function makePlayer(spec = CARS[G.carIdx], color = null, body = null) {
  if (G.carModel) G.scene.remove(G.carModel.root);
  if (spec.kind === 'plane') {
    G.vehicle = new Plane(spec, G.world);
    G.carModel = spec.jet ? buildJetModel(spec, { color }) : buildPlaneModel(spec, { color });
  } else if (spec.kind === 'bike') {
    G.vehicle = new Vehicle(spec, G.world);
    G.vehicle.isBike = true; G.vehicle.lean = 0;
    G.carModel = buildBikeModel(spec, { color });
  } else {
    G.vehicle = new Vehicle(spec, G.world);
    G.carModel = buildCarModel(spec, { interior: true, color, body });
    // auto vera: finche' il modello completo (con le texture) non e' caricato si guida quello del
    // traffico; appena arriva si sostituisce, senza toccare la fisica
    const rid = G.carModel.realId;
    if (rid && !G.carModel.root.userData.full) {
      const veh = G.vehicle;
      loadHero(rid).then((h) => {
        if (!h || G.vehicle !== veh || !G.carModel || G.carModel.realId !== rid || G.carModel.root.userData.full) return;
        const old = G.carModel, nm = buildCarModel(spec, { interior: true, color, body });
        nm.headlight.intensity = old.headlight ? old.headlight.intensity : 0;
        G.scene.remove(old.root); G.carModel = nm; G.scene.add(nm.root);
        nm.root.position.copy(old.root.position); nm.root.quaternion.copy(old.root.quaternion);
      });
    }
  }
  // sempre un faro e un bagliore sul veicolo del giocatore (l'aereo li usa come luce di atterraggio):
  // il numero di luci in scena resta fisso e cambiando veicolo non si ricompilano gli shader
  const M = G.carModel, L = spec.L || 4;
  if (!M.headlight) { M.headlight = new THREE.SpotLight(0xfff1cf, 0, 80, 0.5, 0.5, 1.2); M.headlight.position.set(0, 1.2, L * 0.45); M.headlight.target.position.set(0, 0.2, L * 0.45 + 10); M.root.add(M.headlight, M.headlight.target); }
  if (!M.tailGlow) { M.tailGlow = new THREE.PointLight(0xff2a12, 0, 1.4, 3.4); M.tailGlow.position.set(0, 1, -L * 0.45); M.root.add(M.tailGlow); }
  G.scene.add(G.carModel.root);
  G.lightsOn = false;
  if (G.audio) G.audio.setVoice(spec);
  $('helpbar').textContent = spec.kind === 'plane'
    ? 'W/S manetta · ↑/↓ cabra/picchia · A/D vira · Spazio freni a terra · R riparti in volo · C visuale · F scendi (a terra)'
    : 'F scendi/sali · E clacson · M mappa · J lavori · G negozi (fermo) · C visuale · Esc pausa';
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
    pitch: Math.max(-1, Math.min(1, (k.has('ArrowUp') ? 1 : 0) - (k.has('ArrowDown') ? 1 : 0) + (ctl.padPitch || 0))),
    // come in GTA V: LB/L1 e RB/R1 virano (timone); a terra il grilletto sinistro tirato a fondo frena
    yaw: (ctl.weaponHeld ? 1 : 0) - (ctl.padR1 ? 1 : 0) + (k.has('KeyQ') ? 1 : 0) - (k.has('KeyE') ? 1 : 0),
    steer: ctl.steer, handbrake: (k.has('Space') ? 1 : 0) || ((ctl.padBrk || 0) > 0.6 && G.vehicle.onGround ? 1 : 0),
  };
}
const flying = () => !G.foot.on && G.vehicle && G.vehicle.isPlane && !G.vehicle.onGround;

// ------------------------------------------------------------------ a piedi / veicoli
const TYPE_SPECS = { car: ['compact', 'sedan', 'sport', 'sedan'], wagon: ['city', 'suv', 'compact'], van: ['van'], bus: ['bus'] };
const ownBox = () => ({ halfL: G.vehicle.spec.L / 2, halfW: G.vehicle.spec.W / 2 });

G.exitCar = () => exitCar();
function exitCar() {
  const v = G.vehicle, f = G.foot;
  if (v.isPlane && !v.onGround) { showToast('Atterra prima di scendere', 1200); return; }
  if (Math.abs(v.u) > 2.5) { showToast('Fermati prima di scendere', 1200); return; }
  const lx = Math.cos(v.h), lz = -Math.sin(v.h); // lato guida (sinistra)
  f.x = v.x + lx * (v.spec.W / 2 + 0.75); f.z = v.z + lz * (v.spec.W / 2 + 0.75); f.h = v.h; f.u = 0; f.y = v.y; f.on = true; f.air = false; f.vy = 0; f.land = 0; f.vault = 0;
  if (G.camMode === 1 || G.camMode === 2) G.camMode = 0;
  G.orbit.yaw = 0; G.camInit = true;
  showToast('A piedi — Shift scatta (15 s), Spazio salta, F per salire su un veicolo', 2600);
  flashHelp(6000);
}

G.enterCar = () => enterCar();   // (per i test)
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
    stripLights(old);           // il nuovo veicolo porta le sue: il numero di luci in scena non cambia
    T.statics.push({ x: v.x, z: v.z, h: v.h, box: ownBox(), model: old });
    G.carModel = null;
    if (T.statics.length > 6) { const s = T.statics.shift(); G.scene.remove(s.model.root); }
    const got = best === dCar ? T.take(car) : T.takeParked(spot);
    // si guida proprio la carrozzeria che si vedeva (con i dati tecnici del modello piu' vicino)
    const ids = TYPE_SPECS[got.type] || TYPE_SPECS.car;
    const byBody = got.body && (got.body.startsWith('rc-') ? got.body.slice(3) : got.body.startsWith('bds-') ? got.body.slice(4) : BODY_SPEC[got.body]);
    const spec = CARS.find((c) => c.id === byBody) || CARS.find((c) => c.id === ids[got.colour % ids.length]);
    makePlayer(spec, '#' + fleetPalette[got.colour % fleetPalette.length].toString(16).padStart(6, '0'), got.body);
    G.vehicle.place(got.x, got.z, got.h);
    showToast(spec.name, 1500);
  }
  f.on = false; G.orbit.yaw = 0; G.camInit = true;
}

// A piedi, alla GTA: camminata, scatto con il fiato contato (15 s di corsa, poi 5 s di fiatone in
// cui si cammina piano piegati in avanti), salto (si scavalcano muretti, siepi e recinzioni basse),
// cadute dai bordi e atterraggi. Tastiera: W/S avanti/indietro, A/D gira, Shift scatta, Spazio salta.
// Gamepad: stick (o grilletto destro) per camminare, grilletto destro a fondo per scattare, il tasto
// del freno a mano per saltare.
G.updateFoot = (dt, ctl) => updateFoot(dt, ctl);   // (per i test)
const FOOT = { walk: 2.3, sprint: 6.9, back: 1.4, tiredSpeed: 1.5, staminaMax: 15, recover: 5, jumpV: 4.7, g: 9.81, step: 0.55 };
function updateFoot(dt, ctl) {
  const f = G.foot, k = G.input.keys;
  if (f.stamina === undefined) { f.stamina = FOOT.staminaMax; f.tired = 0; f.vy = 0; f.air = false; f.land = 0; f.jumpHeld = false; }
  // comandi
  const stickF = Math.abs(ctl.padPitch || 0) > 0.3 ? -ctl.padPitch : 0;            // stick avanti = negativo
  // con l'arma i grilletti mirano e sparano: si cammina con lo stick
  const trig = !(G.weapons && G.weapons.drawn);
  let fwd = (k.has('KeyW') || k.has('ArrowUp') || (trig && ctl.throttle > 0.3) ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') || (trig && ctl.brake > 0.3) ? 1 : 0);
  if (!fwd && stickF) fwd = Math.sign(stickF);
  // gamepad come in GTA: A/croce scatta, X/quadrato salta
  const wantSprint = (k.has('ShiftLeft') || k.has('ShiftRight') || ctl.sprint) && fwd > 0;
  const jump = ctl.jump || k.has('Space');
  // furtivita' (L3 come in GTA V, oppure Ctrl): ci si abbassa e si cammina piano; lo scatto la toglie
  const sneakBtn = ctl.padHorn || k.has('ControlLeft');
  if (sneakBtn && !f.sneakHeld) { f.sneak = !f.sneak; showToast(f.sneak ? '🤫 Furtivo' : 'In piedi', 800); }
  f.sneakHeld = sneakBtn;
  if (wantSprint && f.sneak) f.sneak = false;
  // schivata (come in GTA V: salto mentre si mira): capriola di lato o in avanti
  const Wd = G.weapons;
  if (jump && !f.jumpHeld && Wd && Wd.drawn && Wd.ads > 0.5 && !f.air && !(f.roll > 0)) {
    const side = ctl.steer || (k.has('KeyA') ? 1 : k.has('KeyD') ? -1 : 0);
    f.roll = 0.75; f.rollSide = Math.abs(side) > 0.3 ? Math.sign(side) : 0; f.rollFwd = f.rollSide ? 0 : (fwd < 0 ? -1 : 1);
    f.jumpHeld = true;
  }
  if (f.roll > 0) {
    f.roll -= dt;
    const v = 4.2 * Math.min(1, f.roll / 0.25 + 0.3), h = f.h;
    f.x += (Math.cos(h) * f.rollSide + Math.sin(h) * f.rollFwd) * v * dt; f.z += (-Math.sin(h) * f.rollSide + Math.cos(h) * f.rollFwd) * v * dt;
  }
  // fiato: si consuma scattando, si ricarica camminando; finito il fiato, 5 s di recupero
  if (f.tired > 0) { f.tired = Math.max(0, f.tired - dt); if (f.tired === 0) f.stamina = FOOT.staminaMax; }
  const sprinting = wantSprint && f.tired === 0 && !f.air && f.stamina > 0 && !(G.weapons && G.weapons.drawn && (G.weapons.ads > 0.3 || G.weapons.fireHeld));
  if (sprinting) { f.stamina = Math.max(0, f.stamina - dt); if (f.stamina === 0) { f.tired = FOOT.recover; showToast('😮‍💨 Fiatone: qualche secondo per riprendere fiato', 1800); } }
  else if (f.tired === 0) f.stamina = Math.min(FOOT.staminaMax, f.stamina + dt * 2);
  // velocita': in aria si conserva lo slancio, a terra si accelera verso quella voluta
  const turn = f.air ? 0.9 : sprinting ? 2.1 : 2.8;
  const W = G.weapons, armed = W && W.drawn;
  if (armed) {
    // con l'arma: il corpo segue la mira, A/D spostano di lato (sinistra = +X locale)
    let dh = W.aimYaw - f.h; while (dh > Math.PI) dh -= Math.PI * 2; while (dh < -Math.PI) dh += Math.PI * 2;
    f.h += dh * Math.min(1, dt * 14);
    const want = ctl.steer * (W.ads > 0.5 ? 1.6 : 2.4);
    f.us = (f.us || 0) + (want - (f.us || 0)) * Math.min(1, dt * 8);
    if (!f.air) { f.x += Math.cos(f.h) * f.us * dt; f.z -= Math.sin(f.h) * f.us * dt; }
  } else { f.us = 0; f.h += ctl.steer * turn * dt; }
  const slow = (armed && W.ads > 0.5 ? 0.65 : 1) * (f.sneak ? 0.5 : 1) * (f.roll > 0 ? 0 : 1);
  const sp = (fwd > 0 ? (f.tired > 0 ? FOOT.tiredSpeed : sprinting ? FOOT.sprint : FOOT.walk) : fwd < 0 ? -FOOT.back : 0) * slow;
  if (!f.air) f.u += (sp - f.u) * Math.min(1, dt * (sp > f.u ? (sprinting ? 4 : 7) : 9));
  f.sprint = sprinting;
  // salto (sul fronte del tasto, non a ripetizione tenendolo premuto)
  if (jump && !f.jumpHeld && !f.air && f.tired === 0 && f.land < 0.5 && !(f.roll > 0)) {
    f.sneak = false;
    f.vy = FOOT.jumpV; f.air = true; f.stamina = Math.max(0, f.stamina - 0.6);
    // scavalcare (come in GTA): un muretto, una recinzione o una siepe alti fino a 2 m subito davanti
    // si superano con la spinta giusta; gli edifici (piu' alti) no
    let top = -Infinity;
    for (const d of [0.55, 0.9, 1.25]) top = Math.max(top, G.world.collision.topAt(f.x + Math.sin(f.h) * d, f.z + Math.cos(f.h) * d, 0.3));
    const dh = top - f.y;
    if (dh > 0.8 && dh < 2.0) {
      f.vy = Math.sqrt(2 * FOOT.g * (dh + 0.45));
      f.u = Math.max(f.u, 2.6);
      f.vault = top;   // durante lo scavalcamento ci si appoggia all'ostacolo: non blocca
    }
  }
  f.jumpHeld = jump;
  f.x += Math.sin(f.h) * f.u * dt; f.z += Math.cos(f.h) * f.u * dt;
  // ostacoli: edifici, muri, alberi, veicoli. Con i piedi piu' in alto della cima di un ostacolo basso
  // (muretto, siepe, recinzione) ci si passa sopra: e' cosi' che il salto li scavalca
  const own = { x: G.vehicle.x, z: G.vehicle.z, h: G.vehicle.h, box: ownBox() };
  for (let pass = 0; pass < 2; pass++) {
    const fr = f.surface && f.surface.road ? G.roads.ways[f.surface.road.wi] : null;
    const yc = f.air && f.vault ? Math.max(f.y, f.vault - 0.2) : f.y;
    const a = fr && fr.flags & 8 ? null : G.world.collision.resolveCircle(f.x, f.z, 0.32, yc);
    if (a) { f.x += a.nx * a.depth; f.z += a.nz * a.depth; if (pass === 0 && f.air) f.u *= 0.6; }
    G.traffic.statics.push(own);
    const b = G.traffic.resolveCircle(f.x, f.z, 0.32);
    G.traffic.statics.pop();
    if (b) { f.x += b.nx * b.depth; f.z += b.nz * b.depth; }
  }
  // quota: gradini fino a 55 cm si salgono, dai bordi piu' alti si cade
  f.surface = G.roads.surfaceAt(f.x, f.z, f.y + 0.7);
  const ground = f.surface.h;
  if (f.air) {
    f.vy -= FOOT.g * dt; f.y += f.vy * dt;
    if (f.y <= ground) {
      const hit = -f.vy;
      f.y = ground; f.air = false; f.vy = 0; f.vault = 0;
      f.land = Math.min(1, 0.35 + hit / 9);
      if (hit > 9) { f.u *= 0.2; f.land = 1.6; showToast('Atterraggio pesante!', 900); }   // caduta da piu' di ~4 m: un attimo a terra
      else f.u *= 0.85;
    }
  } else if (ground < f.y - FOOT.step) { f.air = true; f.vy = 0; }              // giu' da un muretto o da un marciapiede alto
  else f.y = ground;
  if (f.land > 0) { f.land = Math.max(0, f.land - dt * 3); if (f.land > 1) f.u = 0; }
  f.gait = Math.abs(f.u) / FOOT.walk;
  // barra del fiato
  const el = $('stamina');
  if (el) {
    const show = f.stamina < FOOT.staminaMax - 0.01 || f.tired > 0;
    el.classList.toggle('hidden', !show);
    el.classList.toggle('tired', f.tired > 0);
    el.firstElementChild.style.width = (f.tired > 0 ? (1 - f.tired / FOOT.recover) * 100 : f.stamina / FOOT.staminaMax * 100) + '%';
  }
}

// ------------------------------------------------------------------ infrazioni
// Niente multe, punti patente o danni: rosso e pedoni investiti contano solo per la polizia
// (livello di ricerca), come in GTA.
function infraction(kind, key = kind) {
  const now = performance.now();
  if (G.cool[key] && now - G.cool[key] < 5000) return;
  G.cool[key] = now;
  if (kind === 'ped') showToast('Hai investito un pedone!', 1800);
  G.police.crime(kind, G.vehicle.x, G.vehicle.z);
}

// battute dei personaggi per gli eventi del gioco
function sayLine(kind, arg) {
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const R = G.roads, v = G.vehicle, rd = v.surface && v.surface.road ? R.ways[v.surface.road.wi] : null, via = rd && rd.name ? rd.name : 'zona';
  const lines = {
    radio: () => ['centrale', arg >= 3 ? `A tutte le pattuglie: veicolo in fuga in ${via}, livello ${arg}. Predisporre posti di blocco.` : pick([`Centrale a pattuglie: inseguimento in corso in ${via}.`, `Veicolo sospetto in ${via}, intercettare.`])],
    roadblock: () => ['centrale', 'Posto di blocco predisposto più avanti. Attenzione.'],
    escape: () => ['centrale', pick(['Abbiamo perso il contatto con il veicolo. Le pattuglie rientrino.', 'Nessuna traccia del sospetto. Interrompere la ricerca.'])],
    arrest: () => ['agente', pick(['Fermo! Spenga il motore e scenda con le mani in vista.', 'Fine della corsa. Documenti, prego.'])],
    benzinaio: () => ['cliente', pick(['Buongiorno! Il solito pieno?', 'Prego, la pompa sei è libera.'])],
    officina: () => ['ugo', pick(['Uè, cosa hai combinato stavolta? Dai, che te la sistemo.', 'Vuoi un po\' di cavalli in più? Qui si fa tutto.'])],
    concessionario: () => ['cliente', pick(['Benvenuto! Guardi pure, oggi facciamo un prezzo speciale.', 'Cerca qualcosa di più brillante?'])],
  };
  const l = lines[kind] && lines[kind]();
  if (l && G.dialog) G.dialog(l[0], l[1]);
}

// eventi della polizia: stelle, posti di blocco, arresto, fuga
function policeEvents() {
  const P = G.police;
  for (const e of P.events.splice(0)) {
    if (e.type === 'stars') { showToast(`🚨 Polizia: ${'★'.repeat(e.stars)} — ti stanno cercando!`, 2200); if (G.say) G.say('radio', e.stars); }
    if (G.career) G.career.onPolice(e);
    if (e.type === 'runnerHit' || e.type === 'runnerCaught' || e.type === 'runnerLost') continue;
    else if (e.type === 'roadblock') { showToast('🚧 Posto di blocco più avanti!', 2200); if (G.say) G.say('roadblock'); }
    else if (e.type === 'escape') { showToast(`😮‍💨 Hai seminato la polizia (${'★'.repeat(Math.max(1, e.stars))})`, 3000); if (G.say) G.say('escape'); if (G.onEscape) G.onEscape(e.stars); }
    else if (e.type === 'arrest') {
      const st = Math.max(1, e.stars);
      showToast(`🚔 Arrestato! (${'★'.repeat(st)})`, 3000);
      G.vehicle.u = G.vehicle.v = G.vehicle.w = 0;
      if (G.say) G.say('arrest');
      if (G.onArrest) G.onArrest(st);
    }
  }
  // livello in alto al centro
  const el = $('wanted'), st = P.stars;
  if (P.heat >= 1) {
    el.classList.remove('hidden');
    el.classList.toggle('search', !P.seen);
    el.innerHTML = '★'.repeat(st) + '<span style="opacity:.3">' + '★'.repeat(5 - st) + '</span>' +
      (P.bust > 0.2 ? `<small>🚔 Arresto in corso… ${Math.round(P.bust / 3 * 100)}%</small>` : !P.seen ? `<small>Ti cercano: fatti perdere di vista (${Math.max(0, Math.ceil(10 + st * 5 - P.unseen))} s)</small>` : '<small>Inseguimento</small>');
  } else el.classList.add('hidden');
  G.maps.markers = P.blips();
}

function checkInfractions(v, kmh, now) {
  if (G.foot.on || v.isPlane || !v.surface || !v.surface.road) return;
  const R = G.roads, rd = v.surface.road, w = R.ways[rd.wi];
  // semaforo rosso
  if (v.u > 3) for (const nd of [w.nodes[rd.k], w.nodes[rd.k + 1]]) {
    if (R.ntag[nd] !== NT.SIGNALS || Math.hypot(R.nx[nd] - v.x, R.nz[nd] - v.z) > 4.5) continue;
    const fx = Math.sin(v.h), fz = Math.cos(v.h);
    if (signalState(Math.abs(fx) > Math.abs(fz) ? 1 : 0, now / 1000) === 'R') infraction('red', 'red' + nd);
  }
  // velocita' folle sotto gli occhi della polizia
  if (kmh > w.limit + 35) G.police.crime('speed', v.x, v.z);
  // incidente con il traffico
  if (v.impact > 0.45 && G.traffic.nearestCar(v.x, v.z, 6, 1e9)) G.police.crime('crash', v.x, v.z);
}

function startGame() {
  G.audio && G.audio.start();
  ensureGame();
  G.settings.viewTiles = (QUALITY[$('quality').value] || QUALITY.mid).viewTiles;
  G.settings.farKm = (QUALITY[$('quality').value] || QUALITY.mid).farKm;
  G.settings.detailKm = (QUALITY[$("quality").value] || QUALITY.mid).detailKm;
  G.settings.detailDist = (QUALITY[$("quality").value] || QUALITY.mid).detailDist;
  if (G.settings.farKm > 0) G.world.initFar();   // edifici in lontananza: blocchi caricati in sottofondo
  G.traffic.target = +$('traffic').value;
  $('ptraffic').value = $('traffic').value;
  G.sky.hours = +$('tod').value;
  G.weather.set($('weather').value);
  G.police.clear(); G.police.enabled = $('police').value === '1';
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

// dopo il caricamento della zona: dalla rete semplificata del navigatore alla corsia vera
function snapToLane(v) {
  const R = G.roads, fx = Math.sin(v.h), fz = Math.cos(v.h);
  let best = null, bs = 1e9;
  R.segmentsNear(v.x, v.z, 8, (wi, k) => {
    const w = R.ways[wi];
    if (!w.drivable) return;
    const pr = R.projectOnSeg(wi, k, v.x, v.z), L = Math.hypot(pr.dx, pr.dz) || 1;
    const al = Math.abs(pr.dx * fx + pr.dz * fz) / L;
    const sc = pr.d + (1 - al) * 20;
    if (sc < bs) { bs = sc; best = { wi, pr }; }
  });
  if (!best) return;
  const w = R.ways[best.wi], pr = best.pr;
  const dir = w.oneway || pr.dx * fx + pr.dz * fz >= 0 ? 1 : -1;
  const h = Math.atan2(pr.dx * dir, pr.dz * dir), off = R.laneCenter(w, dir);
  v.place(pr.px - Math.cos(h) * off, pr.pz + Math.sin(h) * off, h);
}

function respawnOnRoad() {
  const v = G.vehicle, R = G.roads;
  if (v.isPlane) { v.launch(); G.camInit = true; showToast(`Di nuovo in volo a ${v.spec.launchAlt} m`, 1200); return; }
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
  if (G.career) $('money').innerHTML = G.career.status();
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
  $('clock').textContent = '🕒 ' + G.sky.clock() + '  ' + WEATHER_ICON();
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
  const nr = G.net.nearest(x, z, 150, (w) => w.drivable);
  const nm = label || (nr ? G.net.displayName(G.net.ways[nr.wi]) : 'Punto selezionato');
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
      for (const [name, arr] of G.net.streets) {
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

// ------------------------------------------------------------------ gamepad: stato e configurazione guidata
function padConnected() { return navigator.getGamepads ? [...navigator.getGamepads()].filter((g) => !ignorePad(g)) : []; }
let padLiveT = 0, wizard = null;
function renderPadCfg() {
  const inp = G.input, pads = padConnected();
  if (!pads.length) {
    $('padstatus').textContent = 'Nessun gamepad rilevato. Collegalo e premi un tasto qualsiasi: il browser lo rende visibile solo dopo la prima pressione.';
    $('padmap').innerHTML = ''; return;
  }
  const gp = pads[0], { map, kind } = inp.mapFor(gp);
  $('padstatus').textContent = `Collegato: ${gp.id} — mappatura ${kind}.` + (pads.length > 1 ? ` (${pads.length} gamepad collegati: la configurazione guidata usa quello su cui premi)` : '');
  $('padmap').innerHTML = PadWizard.describe(map).map((t) => `<div>${t}</div>`).join('');
}
function openPadCfg() {
  G.input = G.input || new Input();
  $('padcfg').classList.remove('hidden');
  $('padwiz').classList.add('hidden'); $('padbtns').classList.remove('hidden');
  renderPadCfg();
  clearInterval(padLiveT);
  padLiveT = setInterval(() => {       // valori correnti di assi e tasti, per capire cosa vede il browser
    const gp = padConnected()[0];
    if (!gp) { $('padlive').textContent = ''; renderPadCfg(); return; }
    const pressed = gp.buttons.map((b, i) => ((typeof b === 'object' ? b.value : b) > 0.5 ? i : -1)).filter((i) => i >= 0);
    $('padlive').textContent = 'assi: ' + gp.axes.map((a, i) => `${i}:${a.toFixed(2)}`).join(' ') + (pressed.length ? '  tasti premuti: ' + pressed.join(',') : '');
    if (!wizard && !$('padstatus').textContent.startsWith('Collegato')) renderPadCfg();
  }, 120);
}
function closePadCfg() {
  if (wizard) { wizard.cancel(); wizard = null; }
  clearInterval(padLiveT);
  $('padcfg').classList.add('hidden');
}
function setupPadUI() {
  G.input = G.input || new Input();
  $('padbtn').onclick = openPadCfg; $('padbtn2').onclick = openPadCfg;
  $('padclose').onclick = closePadCfg;
  $('padreset').onclick = () => { const gp = padConnected()[0]; if (gp) { G.input.setPadMap(gp.id, null); renderPadCfg(); } };
  $('padstart').onclick = () => {
    wizard = new PadWizard(G.input, {
      prompt: (text, i, n) => { $('padstep').textContent = `Comando ${i} di ${n}`; $('padprompt').textContent = text; },
      done: () => { wizard = null; $('padwiz').classList.add('hidden'); $('padbtns').classList.remove('hidden'); renderPadCfg(); $('padstatus').textContent += ' Configurazione salvata.'; },
      status: (t) => { $('padstatus').textContent = t; },
    });
    G.padWizard = wizard;   // (per il debug dalla console)
    if (wizard.start()) { $('padwiz').classList.remove('hidden'); $('padbtns').classList.add('hidden'); } else wizard = null;
  };
  $('padskip').onclick = () => wizard && wizard.skip();
  $('padcancel').onclick = () => { if (wizard) { wizard.cancel(); wizard = null; } $('padwiz').classList.add('hidden'); $('padbtns').classList.remove('hidden'); renderPadCfg(); };
  G.input.onPadConnect = (gp, m) => {
    if (G.started) showToast(`🎮 ${gp.id.split('(')[0].trim()} collegato — mappatura ${m.kind.split(' (')[0]}` + (m.kind.startsWith('di base') ? ': configuralo con Esc → 🎮 Gamepad' : ''), 4000);
  };
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
const camPos = new THREE.Vector3(), camOff = new THREE.Vector3(), camLook = new THREE.Vector3(), tmpV = new THREE.Vector3();
const CAM_NAMES = ['Visuale esterna', 'Visuale abitacolo', 'Visuale cofano', 'Visuale esterna lontana'];
function updateCamera(dt, lookBack) {
  const v = G.vehicle, cam = G.camera, m = G.carModel, f = G.foot, o = G.orbit;
  const mode = f.on ? 0 : G.camMode;
  if (G.debugCam) { cam.position.set(...G.debugCam.pos); cam.lookAt(...G.debugCam.look); cam.near = 1; cam.updateProjectionMatrix(); m.interior.visible = false; for (const e of m.exterior) e.visible = true; return; }
  m.interior.visible = mode === 1;
  for (const e of m.exterior) e.visible = mode !== 1;
  document.body.classList.toggle('cockpit', mode === 1);
  // con l'arma in mano: telecamera sopra la spalla, guidata dalla mira (src/weapons.js)
  if (f.on && G.weapons && G.weapons.drawn) { G.weapons.camera(cam, dt); cam.updateProjectionMatrix(); G.camInit = true; return; }
  if (cam.fov !== 62) cam.fov = 62;
  // la visuale orbitale torna dietro al veicolo dopo un paio di secondi
  o.idle += dt;
  if (o.idle > 2.2 && (f.on ? Math.abs(f.u) > 0.5 : Math.abs(v.u) > 2)) { o.yaw *= Math.exp(-dt * 2.5); o.pitch *= Math.exp(-dt * 2.5); }
  if (mode === 0 || mode === 3) {
    const p = f.on ? f : v;
    const dist = f.on ? 5.6 + (f.sprint ? 0.8 : 0) : (mode === 0 ? (v.isBike ? 3.4 : 4.2) : 8) + v.spec.L * (v.isPlane ? 1.1 : 0.75);
    const hgt = f.on ? 2.5 : mode === 0 ? 2.1 + v.spec.H * 0.4 : 4.2, lookY = f.on ? 1.3 : 1.2;
    const yaw = p.h + o.yaw + (lookBack ? Math.PI : 0);
    const cp = Math.cos(o.pitch), sp = Math.sin(o.pitch);
    // si smussa la posizione della telecamera RISPETTO al veicolo: a qualsiasi velocita' (anche il
    // caccia a 900 km/h) resta alla distanza voluta, solo le rotazioni arrivano con un po' di ritardo
    const off = tmpV.set(-Math.sin(yaw) * dist * cp, hgt + dist * sp, -Math.cos(yaw) * dist * cp);
    if (G.camInit) { camOff.copy(off); G.camInit = false; }
    camOff.lerp(off, 1 - Math.exp(-dt * (lookBack || o.idle < 0.3 ? 30 : f.on ? 9 : 7)));
    // a piedi la telecamera segue i salti con un po' di ritardo (non sobbalza con il personaggio)
    const py = f.on ? (G.footCamY = G.footCamY === undefined || Math.abs(G.footCamY - p.y) > 8 ? p.y : G.footCamY + (p.y - G.footCamY) * Math.min(1, dt * 5)) : p.y;
    camPos.set(p.x, py, p.z).add(camOff);
    const gh = G.roads.surfaceAt(camPos.x, camPos.z, p.y + 3).h;
    camPos.y = Math.max(camPos.y, gh + 0.8);
    cam.position.copy(camPos);
    const ahead = f.on ? 0.5 : 4;
    camLook.set(p.x + Math.sin(yaw) * ahead, py + lookY, p.z + Math.cos(yaw) * ahead);
    cam.lookAt(camLook);
    cam.near = 0.5;
  } else {
    const eye = mode === 1 ? m.root.userData.eye.clone() : new THREE.Vector3(0, v.spec.H * 0.82 + 0.05, v.spec.L * 0.18);
    m.root.updateMatrixWorld();
    cam.position.copy(eye.applyMatrix4(m.root.matrixWorld));
    // con il mouse ci si guarda attorno dall'abitacolo
    const ly = (lookBack ? Math.PI : 0) + o.yaw, d = 30;
    const ahead = new THREE.Vector3(Math.sin(ly) * d, (mode === 1 ? (v.isPlane ? -3.5 : v.isBike ? -8 : -3.2) : -0.9) - o.pitch * d * 0.5, Math.cos(ly) * d).add(mode === 1 ? m.root.userData.eye : new THREE.Vector3(0, v.spec.H * 0.82, 0)).applyMatrix4(m.root.matrixWorld);
    cam.lookAt(ahead);
    if (v.isBike && !f.on) cam.rotateZ(-v.lean * 0.45);   // dal casco l'orizzonte si inclina con la piega
    cam.near = 0.08;
    camPos.copy(cam.position);
  }
  cam.updateProjectionMatrix();
}

// ------------------------------------------------------------------ qualita' automatica
// Se il computer non tiene ~30 fotogrammi al secondo si spengono le ombre e poi si abbassa la
// risoluzione di disegno (fino al 70%); quando c'e' margine (oltre ~55 fps) si risale.
// Disattivabile con window.BDS.autoOff = true oppure index.html?auto=0.
const AQ = { t: 0, n: 0, scale: 1, good: 0, shadowsOff: false };
function autoQuality(frame) {
  if (G.autoOff || G.loadingWorld || frame > 0.5) return;
  AQ.t += frame; AQ.n++;
  if (AQ.t < 1.5) return;
  const avg = AQ.t / AQ.n; AQ.t = 0; AQ.n = 0;
  const base = Math.min(devicePixelRatio, G.settings.pixelRatio);
  const apply = () => { const pr = Math.max(0.5, base * AQ.scale); G.renderer.setPixelRatio(pr); if (G.composer) { G.composer.setPixelRatio(pr); G.composer.setSize(innerWidth, innerHeight); } };
  // prima si spegne l'occlusione ambientale, poi le ombre (in volo quasi non si vedono), poi si
  // abbassa la risoluzione ma non sotto il 75%: piu' in basso l'immagine diventava sfocata
  if (avg > 0.034) {
    AQ.good = 0;
    if (!AQ.aoOff && G.post && G.post.ao) { AQ.aoOff = true; G.post.setAO(false); }
    else if (!AQ.shadowsOff && G.settings.shadows) { AQ.shadowsOff = true; G.sky.sun.castShadow = false; }
    else if (AQ.scale > 0.71) { AQ.scale = Math.max(0.7, AQ.scale - 0.1); apply(); }
  } else if (avg < 0.018) {
    if (++AQ.good >= 3) {
      AQ.good = 0;
      if (AQ.scale < 1) { AQ.scale = Math.min(1, AQ.scale + 0.1); apply(); }
      else if (AQ.shadowsOff && !flying()) { AQ.shadowsOff = false; G.sky.sun.castShadow = true; }
      else if (AQ.aoOff && !flying()) { AQ.aoOff = false; G.post.setAO(true); }
    }
  } else AQ.good = 0;
  $('fps').title = `risoluzione ${Math.round(AQ.scale * 100)}%${AQ.shadowsOff ? ', ombre spente' : ''}${AQ.aoOff ? ', occlusione spenta' : ''}`;
}

// ------------------------------------------------------------------ esposizione e colore
// L'occhio (la "telecamera") si adatta alla luce: entrando in galleria all'inizio e' buio e poi si
// vede, uscendo c'e' un attimo di abbagliamento; di notte e con il cielo coperto l'esposizione sale
// (ma la notte resta notte). Adattamento al buio piu' lento (circa 1,5 s) di quello alla luce (0,5 s).
// Il colore segue l'ora: neutro di giorno, caldo con il sole basso, freddo di notte, spento sotto
// la pioggia.
const LOOK = { exposure: 1.2, wb: new THREE.Vector3(1, 1, 1), saturation: 1.08, contrast: 0.12, lift: new THREE.Vector3(), vignette: 0.2, ao: 1 };
const lookTmp = new THREE.Vector3();
function sceneLook(dt) {
  const S = G.sky, W = G.weather, night = S.night, tk = G.tunnelK || 0;
  const over = W ? W.cur.over : 0, rain = W ? W.cur.rain : 0, fog = W ? W.cur.fog : 0;
  const golden = Math.max(0, 1 - Math.abs(S.sunDir.y - 0.06) * 6) * (1 - night) * (1 - over);
  // esposizione voluta (in scala logaritmica: si somma in "stop")
  let stops = Math.log2(1.2);
  stops += night * 0.5 + over * 0.25 + golden * 0.08;
  stops += tk * 0.9;                                    // galleria: l'occhio si apre (circa x1,9)
  const target = Math.pow(2, stops);
  if (dt <= 0 || !LOOK.adapted) { LOOK.exposure = target; LOOK.adapted = true; }
  else {
    const cur = Math.log2(LOOK.exposure), tau = target > LOOK.exposure ? 1.5 : 0.5;
    LOOK.exposure = Math.pow(2, cur + (stops - cur) * Math.min(1, dt / tau));
  }
  // bilanciamento del bianco e colore
  lookTmp.set(1, 1, 1)
    .lerp(new THREE.Vector3(1.07, 1.0, 0.9), golden)
    .lerp(new THREE.Vector3(0.9, 0.96, 1.1), night * 0.8)
    .lerp(new THREE.Vector3(0.96, 0.99, 1.04), over * (1 - night) * 0.6)
    .lerp(new THREE.Vector3(1.04, 1.0, 0.9), tk * 0.7);      // lampade al sodio in galleria
  LOOK.wb.copy(lookTmp);
  LOOK.saturation = 1.1 + golden * 0.06 - over * 0.16 - rain * 0.05 - night * 0.2 - fog * 0.1;
  LOOK.contrast = 0.14 - over * 0.06 - fog * 0.06;
  LOOK.lift.set(0.004, 0.007, 0.014).multiplyScalar(1 + night * 1.2);
  LOOK.vignette = 0.2 + tk * 0.12 + night * 0.06;
  LOOK.ao = 1 - 0.45 * night - 0.3 * tk;
  return stylizeLook(LOOK, G.style, night);
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
    const mc = G.input.read(dt);
    if (G.input.consume('KeyM') || G.input.consume('Escape') || mc.actions.has('map') || mc.actions.has('pause')) closeMap();
    if (G.mapDirty) { G.maps.drawBig(G.started ? focus() : null, G.route, G.dest || (G.mapMode === 'start' ? null : G.mapSel)); G.mapDirty = false; }
    if (G.mapSel && G.mapMode === 'start' && !G.started) { /* evidenzia */ }
    return;
  }
  if (!G.started) return;
  const inp = G.input;
  if (G.career.panel && inp.consume('Escape')) G.career.close();
  if (inp.consume('Escape')) togglePause(!G.paused);
  if (G.paused) {
    if (inp.read(dt).actions.has('pause') && $('padcfg').classList.contains('hidden')) togglePause(false);
    const snap = inp.axesSnapshot();
    $('axes').textContent = snap ? `${snap.id}: ` + snap.axes.map((a, i) => `${i}:${a.toFixed(2)}`).join('  ') : 'Nessun dispositivo rilevato: collega il volante e premi un pedale.';
    return;
  }
  const ctl = inp.read(dt);
  // fermati dalla polizia: per qualche secondo il veicolo resta fermo
  if (G.police && G.police.freeze > 0 && !G.foot.on) { ctl.throttle = 0; ctl.brake = 0; ctl.steer = 0; ctl.handbrake = 1; }
  if (ctl.actions.has('pause')) { togglePause(true); return; }
  if (inp.consume('KeyC') || ctl.actions.has('camera')) { G.camMode = (G.camMode + 1) % 4; showToast(CAM_NAMES[G.camMode], 1000); }
  if (inp.consume('KeyM') || (ctl.actions.has('map') && !G.career.panel)) { openMap('dest'); return; }
  if (inp.consume('KeyN')) $('mini-wrap').classList.toggle('hidden');
  // croce destra: vicino a un distributore, un'officina o un concessionario (fermi) entra, come in GTA V; altrimenti fari
  const padNear = ctl.actions.has('lights') && G.career.near && (G.foot.on || Math.abs(G.vehicle.u) < 1);
  if (padNear) G.career.interact();
  else if (inp.consume('KeyH') || ctl.actions.has('lights')) { G.lightsOn = !G.lightsOn; showToast(G.lightsOn ? 'Fari accesi' : 'Fari spenti', 900); }
  // pannelli di negozi e lavori con il gamepad: croce su/giu' scorre, A/croce sceglie, B/cerchio chiude
  {
    const N = G.padNav || (G.padNav = {}), edge = (k) => ctl[k] && !N[k];
    if (G.career.panel) {
      if (edge('dpadUp')) G.career.move(-1);
      if (edge('dpadDown')) G.career.move(1);
      if (edge('padA')) G.career.choose(G.career.sel || 0);
      if (edge('padB')) G.career.close();
    } else if (ctl.actions.has('jobs')) G.career.jobs();       // croce su: il "telefono" con i lavori
    for (const k of ['dpadUp', 'dpadDown', 'padA', 'padB']) N[k] = ctl[k];
    if (G.career.panel) { ctl.sprint = false; ctl.actions.delete('reload'); ctl.actions.delete('map'); }
  }
  if (!G.foot.on && (inp.consume('KeyR') || ctl.actions.has('reset'))) { if (G.career.tow()) respawnOnRoad(); else respawnOnRoad(); }
  if (inp.consume('KeyJ')) G.career.jobs();
  if (inp.consume('KeyG')) G.career.interact();
  if (G.career.panel) for (let i = 1; i <= 9; i++) if (inp.consume('Digit' + i) || inp.consume('Numpad' + i)) G.career.choose(i - 1);
  // pilota automatico: il pilota addestrato guida fino alla destinazione del navigatore (P)
  if (inp.consume('KeyP')) {
    if (G.autopilot) { G.autopilot = false; showToast('Pilota automatico spento', 1200); }
    else if (G.foot.on || v.isPlane || v.isBike) showToast('Il pilota automatico guida solo le auto', 1500);
    else if (!G.route) showToast('Pilota automatico: prima scegli una destinazione sulla mappa (M)', 2200);
    else { G.autopilot = true; loadDriver(); showToast('🤖 Pilota automatico: guida la rete addestrata. Sterzo, gas o freno per riprendere i comandi', 3000); }
  }
  if (inp.consume('KeyK')) { G.world.labelsOn = !G.world.labelsOn; showToast(G.world.labelsOn ? 'Nomi dei luoghi visibili' : 'Nomi dei luoghi nascosti', 1000); }
  if (inp.consume('KeyT')) { const sp = [30, 300, 0, 1]; G.sky.speed = sp[(sp.indexOf(G.sky.speed) + 1) % sp.length]; showToast('Velocità del tempo: ' + (G.sky.speed ? G.sky.speed + '×' : 'ferma'), 1000); }
  if (inp.consume('Equal') || inp.consume('NumpadAdd')) G.sky.hours = (G.sky.hours + 1) % 24;
  if (inp.consume('Minus') || inp.consume('NumpadSubtract')) G.sky.hours = (G.sky.hours + 23) % 24;

  if (inp.consume('KeyF') || inp.consume('Enter') || ctl.actions.has('exit')) { if (G.foot.on) enterCar(); else exitCar(); }
  const horn = !G.foot.on && (inp.keys.has('KeyE') || ctl.horn);
  G.audio.horn(horn);

  const v = G.vehicle, f = G.foot, p = focus();
  // mondo
  // in volo veloce il mondo si carica davanti: centro spostato di qualche secondo di volo (al massimo
  // 1,2 km, cosi' le tessere sotto l'aereo restano nell'anello)
  if (flying() && v.u > 60) { const ah = Math.min(1200, v.u * 4); G.world.update(p.x + Math.sin(v.h) * ah, p.z + Math.cos(v.h) * ah); }
  else G.world.update(p.x, p.z);
  G.world.pump(G.loadingWorld ? 40 : flying() ? 12 : 7);
  if (G.settings.farKm > 0) { G.world.updateFar(p.x, p.z, flying() ? G.settings.farKm * 1000 : Math.min(G.settings.farKm * 1000, 3200)); G.world.pumpFar(G.loadingWorld ? 12 : 3); }
  if (G.loadingWorld) {
    if (G.world.ready(v.x, v.z)) {
      G.loadingWorld = false;
      warmShaders(true);          // shader di tutto cio' che e' gia' in scena, anche se ora nascosto
      if (v.pendingLaunch) { v.pendingLaunch = false; v.launch(); G.camInit = true; showToast((v.spec.jet ? '✈ Caccia in volo a 500 m — W/S manetta (oltre 85% postbruciatore)' : '✈ In volo sopra la Brianza — W/S manetta') + ', ↑/↓ cabra/picchia, A/D vira', 4500); }
      else if (!v.isPlane || v.onGround) { snapToLane(v); const s = G.roads.surfaceAt(v.x, v.z, 1e9); v.y = s.h; }
    } else { ctl.throttle = 0; ctl.brake = 1; }
  }
  if (!G.loadingWorld) {
    if (f.on) { v.update(dt, { throttle: 0, brake: 1, steer: 0, handbrake: 1, pitch: 0 }); G.weapons.update(dt, ctl); updateFoot(dt, ctl); }
    else if (G.weapons.drawn) G.weapons.holster();
    else if (G.autopilot) {
      // si riprende il volante toccando sterzo, gas o freno
      if (Math.abs(ctl.steer) > 0.25 || ctl.throttle > 0.2 || ctl.brake > 0.2 || !G.route || v.isPlane) {
        G.autopilot = false; showToast(G.route ? 'Pilota automatico spento: guidi tu' : '🏁 Pilota automatico: arrivati', 1800);
        v.update(dt, ctl);
      } else {
        const D = G.autoDriver || (G.autoDriver = new AgentDriver(G, v));
        if (D.v !== v) { D.v = v; D.env.car = v; D.env.spec = v.spec; D.route = null; }
        if (D.route !== G.route) D.setRoute(G.route);
        const c = D.control(dt);
        v.update(dt, c || { throttle: 0, brake: 1, steer: 0, handbrake: 0, pitch: 0 });
      }
    }
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
  if (!flying() && !G.loadingWorld) { G.police.update(dt, p, now); policeEvents(); }
  if (!G.loadingWorld) G.career.update(dt, v, f.on);
  G.dlg.update();
  const ih = G.career.hint(); $('ihint').classList.toggle('hidden', !ih); if (ih) $('ihint').textContent = ih;
  const movers = flying() ? [] : [{ x: v.x, z: v.z }];
  for (const c of G.traffic.cars) if (Math.abs(c.x - p.x) < 300 && Math.abs(c.z - p.z) < 300) movers.push(c);
  G.world.gates.update(dt, movers);
  const W = G.weapons, armed = W.drawn && f.on;
  const shot = W.shotFlag; W.shotFlag = false;
  const sp3 = Math.hypot(f.u, f.us || 0) * (f.u < -0.1 ? -1 : 1);
  if (G.playerModel.update(dt, { on: f.on, x: f.x, y: f.y, z: f.z, h: f.h, speed: sp3, air: f.air, vy: f.vy || 0, land: f.land || 0, tired: f.tired > 0, armed, aimPitch: armed ? W.aimPitch : 0, reloading: armed && !!W.reload, shot, sneak: !!f.sneak, roll: f.roll > 0 ? f.roll : 0, rollSide: f.rollSide || 0 }))
    G.peds.drawPlayer(false, f.x, f.y, f.z, f.h, f.gait, f.u, dt);     // figura semplice nascosta
  else G.peds.drawPlayer(f.on, f.x, f.y, f.z, f.h, f.gait, f.u, dt, { air: f.air ? 1 : 0, vy: f.vy || 0, tired: f.tired > 0 ? 1 : 0, land: Math.min(1, f.land || 0), still: Math.abs(f.u) < 0.4,
    aim: armed ? (W.reload ? 0.35 : 0.75 + 0.25 * W.ads) : 0, aimPitch: armed ? W.aimPitch * 0.9 : 0, twoHands: armed && W.w.def.id !== 'pistol' });
  if (!f.on && $('stamina')) $('stamina').classList.add('hidden');
  // modello del giocatore
  const m = G.carModel;
  m.root.position.set(v.x, v.y, v.z);
  if (v.isBike) {
    // la moto si piega verso l'interno della curva: tan(piega) = accelerazione laterale / g
    // (con la velocita' reale di imbardata, cosi' anche in derapata la piega e' coerente)
    const target = f.on || v.airborne ? 0 : Math.max(-0.95, Math.min(0.95, -Math.atan(v.u * v.w / 9.81)));
    v.lean += (target - v.lean) * Math.min(1, dt * 7);
    m.root.rotation.set(-(v.pitch + v.dynPitch * 0.5), v.h, v.roll * 0.2 + v.lean, 'YXZ');
    if (m.bars) m.bars.rotation.y = v.steer;
  } else m.root.rotation.set(-(v.pitch + v.dynPitch), v.h, v.roll + v.dynRoll, 'YXZ');
  for (const w of m.wheels) { w.pivot.rotation.x = v.wheelSpinAngle || 0; if (w.front) w.pivot.rotation.y = v.steer; }
  if (m.prop) m.prop.rotation.z = v.propAngle || 0;
  if (m.gear) { const down = v.onGround || v.agl < 40; for (const o of m.gear) o.visible = down; }   // carrello retrattile
  if (m.flame) {   // postbruciatore del caccia: si accende con la manetta oltre l'85%
    const ab = Math.max(0, (v.lever - 0.85) / 0.15);
    m.flame.visible = v.lever > 0.05 && !v.crashed;
    m.flame.scale.set(0.6 + ab * 0.5, 0.6 + ab * 0.5, 0.25 + v.lever * 0.4 + ab * 0.8 + Math.random() * 0.05);
  }
  if (m.steeringWheel) m.steeringWheel.rotation.z = -v.steer * 7;
  const lights = !f.on && (G.lightsOn || G.sky.night > 0.55 || (G.tunnelK || 0) > 0.5);
  if (m.headlight) m.headlight.intensity = lights ? 70 : 0;
  if (m.tailGlow) m.tailGlow.intensity = v.brake > 0.05 && !f.on ? 2.2 : lights ? 0.6 : 0;
  // fari, stop e retromarcia veri (con il bagliore notturno)
  if (m.lamps) {
    m.lamps.head.emissiveIntensity = lights ? 4 : 0.15;
    m.lamps.tail.emissiveIntensity = v.brake > 0.05 && !f.on ? 4 : lights ? 1.5 : 0.4;
    m.lamps.rev.emissiveIntensity = v.gear < 0 && !f.on ? 3 : 0;
  }
  // cielo e luci
  tmpV2.set(p.x, flying() ? v.y - v.agl : p.y, p.z);   // ombre centrate sul suolo anche in volo
  G.sky.update(dt, tmpV2);
  // in galleria: niente sole, poca luce ambiente (si vedono le lampade), fari accesi
  const rd = !f.on && v.surface && v.surface.road ? G.roads.ways[v.surface.road.wi] : null;
  const inT = rd && (rd.flags & 8) && G.terrain.height(v.x, v.z) - v.y > 4 ? 1 : 0;
  G.tunnelK = (G.tunnelK || 0) + (inT - (G.tunnelK || 0)) * Math.min(1, dt * 2.5);
  // meteo: dopo il giorno/notte, prima della galleria (in galleria non piove)
  G.weather.update(dt, G.sky, G.camera.position, G.tunnelK, G.audio);
  stylizeSky(G.sky, G.style);
  // riflessi: mappa d'ambiente dal cielo (ora e meteo); in galleria quasi spenta
  const envT = G.envMap.update(dt, G.sky, G.weather);
  if (envT) G.scene.environment = envT;
  G.scene.environmentIntensity = 1 - 0.85 * G.tunnelK;
  const wk = 1 - 0.4 * G.weather.wet, RM = G.roads.materials();
  ROAD_WET.value = G.weather.wet;
  if (Math.abs((G.wetK || 1) - wk) > 0.005) { G.wetK = wk; for (const k of ['road', 'stone', 'path', 'walk']) { RM[k].color.setScalar(wk); RM[k].envMapIntensity = 0.55 - 0.15 * G.weather.wet; } }
  v.gripMul = 1 - 0.3 * G.weather.wet;          // asfalto bagnato: meno aderenza
  if (G.tunnelK > 0.01) { G.sky.sun.intensity *= 1 - 0.92 * G.tunnelK; G.sky.hemi.intensity *= 1 - 0.6 * G.tunnelK; G.scene.fog.color.multiplyScalar(1 - 0.88 * G.tunnelK); }
  G.world.updateWater(now / 1000, G.scene.fog.color);
  G.world.vegetation.updateNear(dt, G.camera.position, G.world.tiles);
  updateFog(G.sky, G.camera.position.y - G.terrain.height(G.camera.position.x, G.camera.position.z), G.weather.wet, G.weather.cur.fog, G.tunnelK);
  autoQuality(frame);
  // in quota l'aria e' piu' limpida: la foschia si allontana e si vedono i paesi vicini
  const clear = flying() ? 1 + Math.min(1.9, v.agl / 130) : 1;
  G.scene.fog.near *= clear; G.scene.fog.far *= clear;
  G.camera.far = Math.max(1700, G.scene.fog.far * 1.06);   // oltre la foschia non si disegna nulla
  G.world.buildings.setNight(G.sky.night);
  G.world.signage.update(now / 1000, G.sky.night);
  G.traffic.setNight(G.sky.night);
  // stick destro: telecamera attorno al veicolo o al personaggio (con l'arma in mano mira, src/weapons.js)
  if (!(G.foot.on && G.weapons.drawn) && (ctl.camX || ctl.camY)) {
    G.orbit.yaw -= ctl.camX * dt * 2.4; G.orbit.pitch = Math.max(-0.25, Math.min(1.1, G.orbit.pitch - ctl.camY * dt * 1.3)); G.orbit.idle = 0;
  }
  updateCamera(dt, inp.keys.has('KeyV') || ctl.lookBack);
  G.weapons.updateFx(dt);
  G.world.updateLabels(G.camera, flying());
  updateHUD(dt);
  updateNav(dt);
  checkInfractions(v, Math.abs(v.u) * 3.6, now);
  miniT += dt;
  if (miniT > 0.05 && !$('mini-wrap').classList.contains('hidden')) { miniT = 0; G.maps.drawMini(p, G.route, G.sky.night > 0.5); }
  // derapate: segni sull'asfalto, fumo e stridio delle gomme
  const skid = f.on || G.loadingWorld ? 0 : G.fx.fromVehicle('p', v, G.weather ? G.weather.wet : 0);
  G.fx.update(dt);
  // a piedi il motore dell'auto lasciata resta al minimo, piu' piano (si sente da fuori)
  if (f.on) G.audio.update(800, 0, 0, 0, 0, { quiet: true, limiter: v.spec.rpmMax });
  else G.audio.update(v.rpm, v.throttle, Math.abs(v.u) * 3.6, v.slip, skid, { cabin: G.camMode === 1, limiter: v.spec.rpmMax, motorRpm: v.rpm });
  if (v.impact > 0.25 && !f.on && !v.isPlane) { showToast('💥 Urto!', 700); }
  v.impact = 0;
  // esposizione (adattamento dell'occhio) e colore, poi il disegno: con la post-produzione
  // (qualita' media e alta) o direttamente sullo schermo (bassa)
  const look = sceneLook(dt); G.look = look;
  if (G.post) G.post.render(dt, G.sky, look);
  else { G.renderer.toneMappingExposure = look.exposure; G.renderer.render(G.scene, G.camera); }
}
const tmpV2 = new THREE.Vector3();

// Compila in anticipo gli shader di tutto cio' che e' in scena, compresi gli oggetti e i materiali
// ora nascosti che compaiono solo di notte (aloni dei lampioni, fasci dei fari, pioggia...) e i
// passaggi del bagliore notturno. Senza, la prima volta che compaiono il gioco si ferma a compilare.
// sync: subito (durante il caricamento); altrimenti in parallelo dove il browser lo consente.
let warmBusy = false;
function warmShaders(sync) {
  const r = G.renderer;
  if (warmBusy || !r.compile) return;
  const hidden = [];
  G.scene.traverse((o) => {
    if (!o.visible) { hidden.push(o); o.visible = true; }
    const m = o.material;
    if (m) for (const mm of Array.isArray(m) ? m : [m]) if (!mm.visible) { hidden.push(mm); mm.visible = true; }
  });
  const old = r.getRenderTarget();
  const restore = () => { for (const o of hidden) o.visible = false; };
  try {
    // due uscite: lo schermo (giorno) e l'immagine intermedia del bagliore (notte)
    const targets = G.composer ? [null, G.composer.renderTarget1] : [null];
    for (const tg of targets) {
      r.setRenderTarget(tg);
      if (sync || !r.compileAsync) r.compile(G.scene, G.camera);
      else { warmBusy = true; r.compileAsync(G.scene, G.camera).catch(() => {}).finally(() => { warmBusy = false; }); }
    }
    // anche la variante senza ombre: la qualita' automatica le spegne e riaccende (e in volo),
    // e ogni cambio senza shader pronti era un altro blocco
    if (sync && G.settings.shadows && r.compileAsync) {
      const sun = G.sky.sun, cs = sun.castShadow;
      sun.castShadow = !cs;
      for (const tg of G.composer ? [null, G.composer.renderTarget1] : [null]) { r.setRenderTarget(tg); r.compileAsync(G.scene, G.camera).catch(() => {}); }
      sun.castShadow = cs;
    }
    if (G.post && sync) { r.setRenderTarget(old); G.post.render(0, G.sky, sceneLook(0)); }   // prepara i passaggi della post-produzione
  } catch (err) { console.warn('warmShaders', err); }
  r.setRenderTarget(old);
  restore();
}
G.warmShaders = warmShaders;

boot().catch(bootFail);
