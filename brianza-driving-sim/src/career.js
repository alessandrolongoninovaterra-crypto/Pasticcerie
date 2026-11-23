import { CARS } from './cars.js';

// Carriera: soldi, carburante, danni, negozi reali (distributori, officine, concessionari) e
// missioni (consegna, inseguimento, evasione) sui luoghi veri della mappa. I progressi restano nel
// browser (localStorage). Tasti: J lavori, G interagisci (al distributore / in officina / dal
// concessionario, fermi), 1-6 per scegliere nei pannelli.
const PRICES = { city: 0, compact: 14000, sedan: 26000, suv: 31000, sport: 62000, van: 19000, bike: 21000, bike600: 12500, plane: 85000, jet: 250000,
  // auto vere (src/realcars.js)
  mini: 0, miata: 9000, accord: 24000, camaro: 28000, crv: 29000, odyssey: 33000, model3: 39000, mustang: 45000, grandcherokee: 52000, tahoe: 58000, f150: 61000, c8: 95000 };
const AMMO_EUR = 300;   // munizioni per tutte le armi (src/weapons.js), al distributore
const FUEL_EUR = 1.85, TANK = 50;          // euro al litro, litri del serbatoio
const fmt = (n) => Math.round(n).toLocaleString('it');

export class Career {
  constructor(G) {
    this.G = G;
    this.money = 1500; this.fuel = 1; this.damage = 0;
    this.owned = ['city', 'mini']; this.up = { engine: 0, tyres: 0, brakes: 0 };
    this.stats = { deliveries: 0, chases: 0, escapes: 0, earned: 0 };
    this.mission = null; this.offers = null; this.panel = null; this.near = null;
    this.load();
    this.saveT = 0;
  }

  load() { try { const s = JSON.parse(localStorage.getItem('bds-career') || 'null'); if (s) Object.assign(this, { money: s.money, fuel: s.fuel, damage: s.damage, owned: [...new Set([...(s.owned || ['city']), 'mini'])], up: s.up || this.up, stats: s.stats || this.stats }); } catch (e) { /* niente salvataggi */ } }
  save() { try { localStorage.setItem('bds-career', JSON.stringify({ money: this.money, fuel: this.fuel, damage: this.damage, owned: this.owned, up: this.up, stats: this.stats })); } catch (e) { /* privato */ } }

  earn(eur, why) { this.money += eur; this.stats.earned += eur; this.G.toast(`💶 +€ ${fmt(eur)} — ${why}`, 2600); this.save(); }
  pay(eur) { this.money -= eur; this.save(); }

  // effetti sul veicolo: potenza (motore, danni, carburante), aderenza e freni (elaborazioni)
  apply(v) {
    v.powerMul = (1 + 0.12 * this.up.engine) * (this.damage > 0.95 ? 0.15 : this.damage > 0.6 ? 0.65 : 1) * (this.fuel <= 0 ? 0 : 1);
    v.gripBonus = 1 + 0.07 * this.up.tyres;
    v.brakeMul = 1 + 0.18 * this.up.brakes;
  }

  update(dt, v, onFoot) {
    const G = this.G;
    if (!onFoot && !v.isPlane) {
      const dist = Math.abs(v.u) * dt;
      this.fuel = Math.max(0, this.fuel - dist / 650000 * (0.55 + 0.9 * (v.throttle || 0)));
      if (v.impact > 0.18) this.damage = Math.min(1, this.damage + v.impact * 0.08);
      if (this.fuel <= 0 && !this.fuelWarn) { this.fuelWarn = true; G.toast('⛽ Benzina finita! R = carro attrezzi al distributore più vicino (€ 120)', 4500); }
      if (this.fuel > 0) this.fuelWarn = false;
      if (this.damage > 0.95 && !this.dmgWarn) { this.dmgWarn = true; G.toast('🔧 Auto in panne: serve un\'officina (R = carro attrezzi, € 150)', 4500); }
      if (this.damage < 0.9) this.dmgWarn = false;
    }
    this.apply(v);
    this.findNear(v, onFoot);
    if (this.mission) this.mission.update(dt);
    this.saveT += dt;
    if (this.saveT > 15) { this.saveT = 0; this.save(); }
  }

  // servizi vicini (fermi): distributori (punti delle tessere), officine e concessionari (meta.pois)
  findNear(v, onFoot) {
    const G = this.G;
    this.near = null;
    if (Math.abs(v.u) > 1.5 && !onFoot) return;
    const p = onFoot ? G.foot : v;
    const t = G.world.tiles.get(G.world.tileKeyAt(p.x, p.z));
    let best = 22;
    for (const q of (t && t.data && t.data.pt) || []) {
      if (q[0] !== 5) continue;
      const d = Math.hypot(q[1] / 10 - p.x, q[2] / 10 - p.z);
      if (d < best) { best = d; this.near = { kind: 'fuel', name: (t.data.s[q[3]] || 'Distributore').split('|')[0] || 'Distributore' }; }
    }
    for (const q of this.pois(p.x, p.z, 35)) {
      if (q[0] === 0) continue;
      const d = Math.hypot(q[1] - p.x, q[2] - p.z);
      if (d < best + 10) { best = d; this.near = { kind: q[0] === 1 ? 'garage' : 'dealer', name: q[3].split('|')[0] || (q[0] === 1 ? 'Officina' : 'Concessionario') }; }
    }
  }

  pois(x, z, r) {
    const P = this.G.meta.pois || [];
    if (!this.poiGrid) {   // griglia da 500 m per cercare in fretta
      this.poiGrid = new Map();
      for (const q of P) { const k = Math.floor(q[1] / 500) * 100003 + Math.floor(q[2] / 500); let l = this.poiGrid.get(k); if (!l) this.poiGrid.set(k, l = []); l.push(q); }
    }
    const out = [], n = Math.ceil(r / 500);
    for (let i = -n; i <= n; i++) for (let j = -n; j <= n; j++) for (const q of this.poiGrid.get((Math.floor(x / 500) + i) * 100003 + Math.floor(z / 500) + j) || []) if (Math.hypot(q[1] - x, q[2] - z) < r) out.push(q);
    return out;
  }

  hint() {
    if (this.panel) return '';
    if (this.near) return { fuel: `G — ⛽ ${this.near.name}: fai il pieno`, garage: `G — 🔧 ${this.near.name}: riparazioni ed elaborazioni`, dealer: `G — 🚗 ${this.near.name}: compra un'auto` }[this.near.kind];
    return '';
  }

  // ------------------------------------------------------------ pannelli (negozi e lavori)
  interact() {
    if (this.panel) { this.close(); return; }
    if (!this.near) return;
    const G = this.G, items = [];
    if (this.near.kind === 'fuel') {
      const litres = (1 - this.fuel) * TANK, eur = litres * FUEL_EUR;
      items.push({ t: `Pieno: ${litres.toFixed(1).replace('.', ',')} litri — € ${eur.toFixed(2).replace('.', ',')}`, ok: litres > 0.5 && this.money >= eur, go: () => { this.pay(eur); this.fuel = 1; G.toast('⛽ Pieno fatto', 1800); } });
      items.push({ t: `20 litri — € ${(20 * FUEL_EUR).toFixed(2).replace('.', ',')}`, ok: this.fuel < 0.6 && this.money >= 20 * FUEL_EUR, go: () => { this.pay(20 * FUEL_EUR); this.fuel = Math.min(1, this.fuel + 20 / TANK); } });
      const W = G.weapons, low = W && W.inv.some((w) => w.reserve < w.def.reserve);
      if (W) items.push({ t: `🔫 Munizioni per tutte le armi — € ${AMMO_EUR}`, ok: low && this.money >= AMMO_EUR, go: () => { this.pay(AMMO_EUR); W.refill(); G.toast('🔫 Munizioni rifornite', 1500); } });
      if (G.say) G.say('benzinaio');
    } else if (this.near.kind === 'garage') {
      const rep = Math.round(this.damage * 1800);
      items.push({ t: `Riparazione carrozzeria e meccanica (danni ${Math.round(this.damage * 100)}%) — € ${fmt(rep)}`, ok: this.damage > 0.02 && this.money >= rep, go: () => { this.pay(rep); this.damage = 0; G.toast('🔧 Auto come nuova', 1800); } });
      const ups = [['engine', 'Centralina e scarico (+12% potenza)', [2200, 4800, 9000]], ['tyres', 'Gomme sportive (+7% aderenza)', [900, 1900]], ['brakes', 'Impianto frenante maggiorato (+18%)', [700, 1600]]];
      for (const [k, name, cost] of ups) {
        const lv = this.up[k];
        items.push(lv < cost.length ? { t: `${name} — livello ${lv + 1}: € ${fmt(cost[lv])}`, ok: this.money >= cost[lv], go: () => { this.pay(cost[lv]); this.up[k]++; G.toast('🔧 Elaborazione montata', 1800); } } : { t: `${name}: livello massimo`, ok: false });
      }
      if (G.say) G.say('officina');
    } else if (this.near.kind === 'dealer') {
      for (const c of CARS.filter((q) => !q.hidden && !q.menuHidden && PRICES[q.id] !== undefined)) {
        const own = this.owned.includes(c.id), price = PRICES[c.id];
        items.push({ t: `${c.name} — ${own ? 'già tua: la prendi' : '€ ' + fmt(price)}`, ok: own || this.money >= price, go: () => { if (!own) { this.pay(price); this.owned.push(c.id); } G.switchCar(c.id); G.toast(`🚗 Ora guidi: ${c.name}`, 2200); } });
      }
      if (G.say) G.say('concessionario');
    }
    this.open(this.near.name, items);
  }

  open(title, items) {
    this.panel = items;
    const el = document.getElementById('shop');
    el.innerHTML = `<h3>${title}</h3><div class="money">💶 € ${fmt(this.money)}</div>` + items.map((it, i) => `<button data-i="${i}" ${it.ok ? '' : 'disabled'}><b>${i + 1}</b> ${it.t}</button>`).join('') + '<div class="hint">1-' + items.length + ' per scegliere · G o Esc per chiudere</div>';
    el.querySelectorAll('button').forEach((b) => { b.onclick = () => this.choose(+b.dataset.i); });
    el.classList.remove('hidden');
  }

  close() { this.panel = null; document.getElementById('shop').classList.add('hidden'); }

  choose(i) {
    const it = this.panel && this.panel[i];
    if (!it || !it.ok) return;
    if (it.go) it.go();
    this.save();
    if (this.panel && this.panel.jobs) { this.close(); return; }
    // riapre il pannello aggiornato (prezzi e livelli)
    if (this.near && this.panel) { this.close(); this.interact(); } else this.close();
  }

  // ------------------------------------------------------------ missioni
  jobs() {
    if (this.panel) { this.close(); return; }
    const G = this.G, v = G.foot.on ? G.foot : G.vehicle;
    if (this.mission) {
      const items = [{ t: `Abbandona: ${this.mission.title}`, ok: true, go: () => this.end(false, 'Missione abbandonata') }];
      items.jobs = true; this.open('Lavoro in corso', items); return;
    }
    const offers = [];
    const shops = this.pois(v.x, v.z, 2500).filter((q) => q[0] === 0 && q[3].split('|')[0]);
    if (shops.length) {
      shops.sort((a, b) => Math.hypot(a[1] - v.x, a[2] - v.z) - Math.hypot(b[1] - v.x, b[2] - v.z));
      const s = shops[Math.floor(Math.random() * Math.min(6, shops.length))];
      const drop = this.dropPoint(s[1], s[2]);
      if (drop) offers.push(new Delivery(this, s, drop));
    }
    offers.push(new Chase(this));
    if (G.police.enabled) offers.push(new Evade(this));
    const items = offers.map((m) => ({ t: `${m.icon} ${m.title} — ${m.desc} — € ${fmt(m.reward)}`, ok: true, go: () => this.start(m) }));
    items.jobs = true;
    this.open('Lavori disponibili', items);
  }

  // destinazione di una consegna: una via con nome a 1-3,5 km
  dropPoint(x, z) {
    const N = this.G.net;
    for (let t = 0; t < 600; t++) {
      const w = N.ways[Math.floor(Math.random() * N.ways.length)];
      if (!w.name || !w.drivable || w.cls < 4 || w.cls > 6 || w.flags & 12) continue;
      const [px, pz] = N.pointAt(w, w.len / 2);
      const d = Math.hypot(px - x, pz - z);
      if (d < 1000 || d > 3500) continue;
      return { x: px, z: pz, name: w.name, comune: this.G.world.comuneAt(px, pz) || '' };
    }
    return null;
  }

  start(m) {
    this.close();
    this.mission = m;
    document.getElementById('mission').classList.remove('hidden');
    m.begin();
  }

  end(ok, msg, reward = 0) {
    const G = this.G, m = this.mission;
    if (!m) return;
    this.mission = null;
    m.cleanup();
    document.getElementById('mission').classList.add('hidden');
    G.setDest(null);
    if (ok) { this.earn(reward, msg); this.stats[m.stat] = (this.stats[m.stat] || 0) + 1; this.save(); }
    else G.toast('❌ ' + msg, 3000);
  }

  panelText(title, line, t) {
    document.getElementById('mission').innerHTML = `<b>${title}</b><div>${line}</div>` + (t !== undefined ? `<div class="timer ${t < 20 ? 'late' : ''}">⏱ ${Math.floor(Math.max(0, t) / 60)}:${String(Math.floor(Math.max(0, t) % 60)).padStart(2, '0')}</div>` : '');
  }

  // eventi della polizia che interessano le missioni
  onPolice(e) { if (this.mission && this.mission.onPolice) this.mission.onPolice(e); }

  // carro attrezzi: fuori benzina o in panne
  tow() {
    const cost = this.fuel <= 0 ? 120 : this.damage > 0.95 ? 150 : 0;
    if (!cost) return false;
    this.pay(cost);
    if (this.fuel <= 0) this.fuel = 0.25;
    if (this.damage > 0.95) this.damage = 0.5;
    this.G.toast(`🚛 Carro attrezzi: € ${cost}`, 2500);
    return true;
  }

  status() {
    const f = Math.round(this.fuel * 100), d = Math.round(this.damage * 100);
    return `💶 € ${fmt(this.money)} · <span style="color:${f < 15 ? '#ff7b6b' : 'inherit'}">⛽ ${f}%</span>` + (d > 3 ? ` · <span style="color:${d > 60 ? '#ff7b6b' : 'inherit'}">🔧 ${d}%</span>` : '');
  }
}

// --- consegna: ritiro in un negozio vero, consegna in una via vera a tempo; il carico teme gli urti
class Delivery {
  constructor(C, shop, drop) {
    this.C = C; this.shop = shop; this.drop = drop; this.icon = '📦'; this.stat = 'deliveries';
    const [name, kind] = shop[3].split('|');
    this.what = { pastry: 'una vassoiata di pasticcini', bakery: 'il pane fresco', confectionery: 'i dolci', florist: 'un mazzo di fiori', wine: 'sei bottiglie di vino', cheese: 'le forme di formaggio', butcher: 'la carne', deli: 'la gastronomia', greengrocer: 'la cassetta di frutta', ice_cream: 'le vaschette di gelato', chocolate: 'le praline', coffee: 'il caffè', cafe: 'i cornetti e le brioche', fast_food: 'i panini', restaurant: 'i piatti pronti', beverages: 'le casse di bibite', seafood: 'il pesce fresco' }[kind] || 'la merce';
    this.giver = ['pastry', 'bakery', 'confectionery', 'chocolate'].includes(kind) ? 'rosa' : 'titolare';
    this.shopName = name;
    const dist = Math.hypot(drop.x - shop[1], drop.z - shop[2]);
    this.reward = Math.round(70 + dist / 1000 * 55);
    this.title = `Consegna per ${name}`;
    this.desc = `${this.what} in ${drop.name}${drop.comune ? ' (' + drop.comune + ')' : ''}`;
  }
  begin() {
    const C = this.C, G = C.G;
    this.stage = 'pickup'; this.cargo = 1; this.t = 0;
    G.setDest([this.shop[1], this.shop[2]]);
    G.dialog(this.giver, `Ciao! Passa da ${this.shopName} a prendere ${this.what}: vanno in ${this.drop.name}. Piano sulle buche, mi raccomando!`);
  }
  update(dt) {
    const C = this.C, G = C.G, v = G.foot.on ? G.foot : G.vehicle, kmh = Math.abs(G.vehicle.u) * 3.6;
    if (this.stage === 'pickup') {
      const d = Math.hypot(this.shop[1] - v.x, this.shop[2] - v.z);
      C.panelText(this.title, `Vai a prendere ${this.what} da <b>${this.shopName}</b> (${Math.round(d)} m)`);
      if (d < 28 && kmh < 6 && !G.foot.on) {
        this.load = (this.load || 0) + dt;
        C.panelText(this.title, `Carico in corso… ${Math.round(this.load / 2.5 * 100)}%`);
        if (this.load > 2.5) {
          this.stage = 'deliver';
          const r = G.router.route(v.x, v.z, G.vehicle.h, this.drop.x, this.drop.z);
          this.t = (r ? r.time * 1.45 : 240) + 45;
          G.setDest([this.drop.x, this.drop.z]);
          G.dialog(this.giver, 'Ecco qui. Il cliente aspetta, vai!');
        }
      } else this.load = 0;
      return;
    }
    this.t -= dt;
    if (!G.foot.on && G.vehicle.impact > 0.2) { this.cargo = Math.max(0, this.cargo - G.vehicle.impact * 0.35); if (this.cargo < 0.55 && !this.warned) { this.warned = true; G.dialog(this.giver, 'Attento! Se arrivano schiacciati non li paga nessuno!'); } }
    const d = Math.hypot(this.drop.x - v.x, this.drop.z - v.z);
    C.panelText(this.title, `Consegna in <b>${this.drop.name}</b> (${Math.round(d)} m) · carico integro ${Math.round(this.cargo * 100)}%`, this.t);
    if (d < 30 && kmh < 6) {
      const late = this.t < 0, pay = Math.round(this.reward * (0.25 + 0.75 * this.cargo) * (late ? 0.5 : 1) + (this.t > 60 ? 25 : 0));
      G.dialog('cliente', this.cargo < 0.5 ? 'Ma sono tutti rovinati… va be\', ecco qualcosa.' : late ? 'Finalmente! Era ora.' : 'Perfetto, grazie mille! Tenga pure il resto.');
      C.end(true, `consegna in ${this.drop.name}`, pay);
    } else if (this.t < -90) C.end(false, 'Consegna troppo in ritardo: il cliente ha annullato');
  }
  cleanup() {}
}

// --- inseguimento: un'auto pirata scappa, va speronata finche' non si ferma
class Chase {
  constructor(C) { this.C = C; this.icon = '🚨'; this.stat = 'chases'; this.reward = 380 + Math.round(Math.random() * 6) * 40; this.title = 'Pirata della strada'; this.desc = 'insegui l\'auto in fuga e speronala finché non si ferma'; }
  begin() {
    const C = this.C, G = C.G, v = G.vehicle;
    let sp = null;
    for (const [d, behind] of [[150, false], [110, false], [200, false], [130, true], [90, true]]) { sp = G.police.spawnPoint(v, d + Math.random() * 30, behind); if (sp) break; }
    if (!sp) { C.end(false, 'Nessuna auto da inseguire qui: riprova su una strada più grande'); return; }
    this.car = G.police.makeCar(sp.x, sp.z, sp.h, true);
    this.t = 200; this.navT = 0;
    G.dialog('bassi', 'Un\'auto ha appena investito un ciclista e non si è fermata. È davanti a te, una grigia: fermala!');
  }
  update(dt) {
    const C = this.C, G = C.G, c = this.car;
    if (!c) return;
    this.t -= dt;
    const d = Math.hypot(c.v.x - G.vehicle.x, c.v.z - G.vehicle.z);
    this.navT -= dt;
    if (this.navT <= 0 && c.mode === 'runner') { this.navT = 3; G.setDest([c.v.x, c.v.z], true); }
    C.panelText(this.title, c.mode === 'caught' ? 'Fermato!' : `Speronala: resistenza ${Math.round(c.hp)}% · distanza ${Math.round(d)} m`, this.t);
    if (this.t <= 0) C.end(false, 'Il pirata è scappato');
  }
  onPolice(e) {
    const C = this.C;
    if (e.type === 'runnerHit' && e.hp > 0 && Math.random() < 0.35) C.G.dialog('bassi', ['Ancora un colpo!', 'Così, non mollarlo!', 'Sta perdendo il controllo!'][Math.floor(Math.random() * 3)]);
    if (e.type === 'runnerCaught') { C.G.dialog('bassi', 'Ottimo lavoro! Ci pensiamo noi adesso. Il compenso arriva subito.'); C.end(true, 'pirata della strada fermato', this.reward); }
    if (e.type === 'runnerLost') C.end(false, 'Hai perso il pirata');
  }
  cleanup() { const c = this.car; if (c) setTimeout(() => { if (this.C.G.police.cars.includes(c)) this.C.G.police.remove(c); }, 12000); }
}

// --- evasione: un pacco che scotta e la polizia alle calcagna; va seminata
class Evade {
  constructor(C) { this.C = C; this.icon = '🕶️'; this.stat = 'escapes'; this.stars = 2 + Math.floor(Math.random() * 2); this.reward = 450 + this.stars * 200; this.title = 'Il pacco che scotta'; this.desc = `seminare la polizia (${'★'.repeat(this.stars)})`; }
  begin() {
    const C = this.C, G = C.G, P = G.police;
    for (let i = 0; i < this.stars; i++) { P.cool = {}; P.crime('evade', G.vehicle.x, G.vehicle.z); }
    this.t = 300;
    G.dialog('biondo', 'Ho un pacco che non deve finire in mano a nessuno. Le pattuglie sono già in giro: falle perdere e poi sparisci.');
  }
  update(dt) {
    const C = this.C, P = C.G.police;
    this.t -= dt;
    C.panelText(this.title, P.heat >= 1 ? (P.seen ? `Seminali! ${'★'.repeat(P.stars)}` : 'Non ti vedono: resta nascosto…') : 'Ce l\'hai fatta', this.t);
    if (this.t <= 0) C.end(false, 'Tempo scaduto');
  }
  onPolice(e) {
    const C = this.C;
    if (e.type === 'escape') { C.G.dialog('biondo', 'Pulito. Sapevo di potermi fidare. Ci vediamo in giro.'); C.end(true, 'polizia seminata', this.reward); }
    if (e.type === 'arrest') C.end(false, 'Arrestato: il pacco è stato sequestrato');
  }
  cleanup() {}
}
