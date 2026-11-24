// Il giocatore a piedi con il manichino animato di Quaternius ("Universal Animation Library",
// quaternius.com, licenza CC0; data/char/player.js preparato da tools/import-character.mjs).
// Animazioni miscelate con l'AnimationMixer di three.js:
//   - disarmato: fermo / camminata / corsa / scatto pesati sulla velocita' (e accelerati o rallentati
//     perche' i piedi non scivolino), salto in tre tempi (stacco, volo, atterraggio);
//   - con l'arma: le gambe seguono la stessa miscela (solo bacino e gambe), busto e braccia tengono la
//     mira della pistola, inclinata in su o in giu' con la mira; sparo e ricarica sopra.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { loadData } from './data.js';

const LOWER = /^(root|pelvis|thigh_|calf_|foot_|ball_)/;
// velocita' (m/s) a cui ogni passo dell'animazione non fa scivolare i piedi (stime)
const NATURAL = { Idle_Loop: 1, Walk_Loop: 1.5, Jog_Fwd_Loop: 3.7, Sprint_Loop: 6.2 };
const LOCO = ['Idle_Loop', 'Walk_Loop', 'Jog_Fwd_Loop', 'Sprint_Loop'];

export class PlayerModel {
  constructor(G) {
    this.G = G; this.ready = false;
    this.hand = new THREE.Vector3();
    this.load().catch((e) => console.warn('personaggio non caricato: resta la figura semplice', e));
  }

  async load() {
    const buf = await loadData('char_player', 'data/char/player.js');
    const gltf = await new GLTFLoader().parseAsync(buf, '');
    const root = gltf.scene;
    // colori: giacca blu-grigia, giunture scure (il manichino originale e' arancione e viola)
    root.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = true; o.frustumCulled = false;
      const m = o.material;
      if (m && m.name === 'M_Main') { m.color.set(0x46637a); m.roughness = 0.7; m.metalness = 0.05; }
      if (m && m.name === 'M_Joints') { m.color.set(0x25292e); m.roughness = 0.6; }
    });
    this.root = root; root.visible = false;
    this.G.scene.add(root);
    this.handBone = root.getObjectByName('hand_r');
    this.mixer = new THREE.AnimationMixer(root);
    const clips = Object.fromEntries(gltf.animations.map((c) => [c.name, c]));
    const split = (c, lower) => new THREE.AnimationClip(c.name + (lower ? '_low' : '_up'), c.duration, c.tracks.filter((t) => LOWER.test(t.name.split('.')[0]) === lower));
    const act = (clip, loop = true) => { const a = this.mixer.clipAction(clip); a.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, Infinity); a.clampWhenFinished = !loop; a.enabled = true; a.setEffectiveWeight(0); a.play(); return a; };
    // locomozione: corpo intero (disarmato) e solo gambe (armato)
    this.full = {}; this.low = {};
    for (const n of LOCO) { this.full[n] = act(clips[n]); this.low[n] = act(split(clips[n], true)); }
    // salto
    this.jump = { start: act(clips.Jump_Start, false), loop: act(clips.Jump_Loop), land: act(clips.Jump_Land, false) };
    // furtivita' (accovacciato, fermo e in cammino) e capriola di schivata
    this.crouch = { idle: act(clips.Crouch_Idle_Loop), fwd: clips.Crouch_Fwd_Loop ? act(clips.Crouch_Fwd_Loop) : null, idleLow: act(split(clips.Crouch_Idle_Loop, true)), fwdLow: clips.Crouch_Fwd_Loop ? act(split(clips.Crouch_Fwd_Loop, true)) : null };
    this.roll = act(clips.Roll, false);
    // busto: mira (pose ferme, si tengono al primo fotogramma), sparo, ricarica
    const pose = (n) => { const a = act(split(clips[n], false)); a.paused = true; a.time = 0; return a; };
    this.aim = { up: pose('Pistol_Aim_Up'), mid: pose('Pistol_Aim_Neutral'), down: pose('Pistol_Aim_Down') };
    this.shoot = act(split(clips.Pistol_Shoot, false), false);
    this.reload = act(split(clips.Pistol_Reload, false), false);
    this.state = { air: false, jumpT: 0, landT: 0, shotT: 0, reloading: false };
    this.ready = true;
  }

  // st: { on, x, y, z, h, speed, air, vy, land, tired, armed, aimPitch, reloading, shot }
  update(dt, st) {
    if (!this.ready) return false;
    const R = this.root;
    R.visible = st.on;
    if (!st.on) return true;
    R.position.set(st.x, st.y, st.z);
    // capriola di lato: il corpo si gira nel verso della schivata (+ = sinistra)
    R.rotation.set(0, st.h + (st.roll > 0 && st.rollSide ? st.rollSide * Math.PI / 2 : 0), 0);
    const S = this.state, sp = Math.abs(st.speed);
    // pesi della locomozione: fermo -> camminata (2,3 m/s) -> corsa -> scatto (6,9 m/s)
    const w = { Idle_Loop: 0, Walk_Loop: 0, Jog_Fwd_Loop: 0, Sprint_Loop: 0 };
    if (sp < 0.15) w.Idle_Loop = 1;
    else if (sp < 2.3) { const k = (sp - 0.15) / 2.15; w.Idle_Loop = 1 - Math.min(1, k * 2.5); w.Walk_Loop = 1 - w.Idle_Loop; }
    else if (sp < 4.6) { const k = (sp - 2.3) / 2.3; w.Walk_Loop = 1 - k; w.Jog_Fwd_Loop = k; }
    else { const k = Math.min(1, (sp - 4.6) / 2.3); w.Jog_Fwd_Loop = 1 - k; w.Sprint_Loop = k; }
    if (st.tired && sp < 0.15) w.Idle_Loop = 1;
    // salto: stacco (0,25 s), volo, atterraggio (0,35 s)
    if (st.air && !S.air) { S.jumpT = 0; this.jump.start.reset().play(); }
    if (!st.air && S.air) { S.landT = 0.35; this.jump.land.reset().play(); }
    S.air = st.air; S.jumpT += dt; if (S.landT > 0) S.landT -= dt;
    const jStart = st.air ? Math.max(0, 1 - S.jumpT / 0.3) : 0, jLoop = st.air ? 1 - jStart : 0, jLand = S.landT > 0 ? S.landT / 0.35 : 0;
    const airK = Math.min(1, jStart + jLoop + jLand);
    const armed = !!st.armed;
    // capriola: tutto il corpo per la sua durata
    if (st.roll > 0 && !S.rolling) { this.roll.reset(); this.roll.timeScale = this.roll.getClip().duration / 0.75; this.roll.play(); }
    S.rolling = st.roll > 0;
    const rollK = S.rolling ? 1 : 0;
    // furtivita': le animazioni accovacciate prendono il posto di quelle in piedi
    const cr = st.sneak && !st.air ? 1 : 0, crMove = Math.min(1, sp / 0.6);
    const keep = (1 - airK) * (1 - cr) * (1 - rollK);
    const C = this.crouch;
    C.idle.setEffectiveWeight(armed ? 0 : cr * (1 - crMove) * (1 - rollK)); C.idleLow.setEffectiveWeight(armed ? cr * (1 - crMove) * (1 - rollK) : 0);
    if (C.fwd) { C.fwd.setEffectiveWeight(armed ? 0 : cr * crMove * (1 - rollK)); C.fwdLow.setEffectiveWeight(armed ? cr * crMove * (1 - rollK) : 0); C.fwd.timeScale = C.fwdLow.timeScale = Math.max(0.5, sp / 1.1) * (st.speed < 0 ? -1 : 1); }
    this.roll.setEffectiveWeight(rollK);
    for (const n of LOCO) {
      const ts = n === 'Idle_Loop' ? 1 : Math.max(0.4, sp / NATURAL[n]) * (st.speed < 0 ? -1 : 1);
      this.full[n].setEffectiveWeight(armed ? 0 : w[n] * keep); this.full[n].timeScale = ts;
      this.low[n].setEffectiveWeight(armed ? w[n] * keep : 0); this.low[n].timeScale = ts;
    }
    this.jump.start.setEffectiveWeight(jStart * (1 - rollK)); this.jump.loop.setEffectiveWeight(jLoop * (1 - rollK)); this.jump.land.setEffectiveWeight(jLand * (1 - jStart - jLoop) * (1 - rollK));
    // busto in mira: su / dritto / giu' secondo l'inclinazione (pose di Quaternius a circa +-45 gradi)
    const p = Math.max(-1, Math.min(1, (st.aimPitch || 0) / 0.75));
    const aimK = armed ? 1 : 0;
    if (st.shot) { this.shoot.reset().play(); S.shotT = this.shoot.getClip().duration * 0.6; }
    if (S.shotT > 0) S.shotT -= dt;
    if (st.reloading && !S.reloading) this.reload.reset().play();
    S.reloading = !!st.reloading;
    const relK = armed && st.reloading ? 1 : 0, shotK = armed && S.shotT > 0 && !relK ? Math.min(1, S.shotT * 6) : 0;
    const hold = aimK * (1 - relK) * (1 - shotK * 0.6) * (1 - rollK);
    this.aim.up.setEffectiveWeight(hold * Math.max(0, p));
    this.aim.down.setEffectiveWeight(hold * Math.max(0, -p));
    this.aim.mid.setEffectiveWeight(hold * (1 - Math.abs(p)));
    this.shoot.setEffectiveWeight(shotK);
    this.reload.setEffectiveWeight(relK);
    this.mixer.update(dt);
    // mano destra aggiornata adesso (non al disegno): l'arma la segue nello stesso fotogramma
    R.updateMatrixWorld(true);
    if (this.handBone) this.handBone.getWorldPosition(this.hand);
    return true;
  }
}
