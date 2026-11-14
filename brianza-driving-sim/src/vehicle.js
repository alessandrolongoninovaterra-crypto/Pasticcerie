// Fisica del veicolo: modello a bicicletta con pneumatici a saturazione,
// trasferimento di carico, motore con curva di coppia, cambio automatico,
// resistenza aerodinamica e di rotolamento, pendenza reale del terreno.
const G = 9.81;

export class Vehicle {
  constructor(spec, world) {
    this.spec = spec; this.world = world;
    this.m = spec.mass;
    this.L = spec.wb;
    this.a = spec.wb * (spec.drive === 'R' ? 0.48 : spec.drive === 'A' ? 0.45 : 0.42); // CG -> asse anteriore
    this.b = spec.wb - this.a;
    this.I = this.m * (this.a * this.a + this.b * this.b) * 0.55;
    this.hcg = spec.H * 0.36;
    this.x = 0; this.z = 0; this.y = 0; this.h = 0; // h: rotta (rad), avanti = (sin h, cos h)
    this.u = 0; this.v = 0; this.w = 0; // velocita' longitudinale, laterale (sinistra +), imbardata
    this.vy = 0; this.airborne = false;
    this.steer = 0; this.gear = 1; this.rpm = 850; this.shiftT = 0;
    this.pitch = 0; this.roll = 0; this.dynPitch = 0; this.dynRoll = 0;
    this.throttle = 0; this.brake = 0; this.handbrake = 0;
    this.ax = 0; this.ay = 0;
    this.surface = null; this.mu = 1;
    this.wheelSpin = 0;
    this.revHold = 0;
    this.impact = 0;
    this.slip = 0;
  }

  place(x, z, h) {
    this.x = x; this.z = z; this.h = h; this.u = this.v = this.w = 0; this.vy = 0; this.gear = 1; this.steer = 0;
    const s = this.world.roads.surfaceAt(x, z, 1e9);
    this.y = s.h; this.surface = s;
  }

  get speed() { return Math.hypot(this.u, this.v); }
  get kmh() { return this.u * 3.6; }

  torque(rpm) {
    const s = this.spec;
    const x = Math.min(1.05, rpm / s.rpmMax);
    let t = s.nm * Math.max(0.45, 0.6 + 1.1 * x - 0.95 * x * x);
    const wEng = rpm * Math.PI / 30;
    t = Math.min(t, s.kw * 1000 / Math.max(wEng, 1));
    return t;
  }

  update(dt, input) {
    const N = 4;
    const h = dt / N;
    for (let i = 0; i < N; i++) this.step(h, input);
  }

  step(dt, inp) {
    const s = this.spec, W = this.world;
    // --- comandi e marcia
    let thr = inp.throttle, brk = inp.brake;
    if (this.gear > 0 && brk > 0.1 && thr < 0.05 && this.u < 0.4) {
      this.revHold += dt;
      if (this.revHold > 0.35) { this.gear = -1; this.revHold = 0; }
    } else if (this.gear < 0 && thr > 0.1 && this.u > -0.4) {
      this.revHold += dt;
      if (this.revHold > 0.2) { this.gear = 1; this.revHold = 0; }
    } else this.revHold = 0;
    if (this.gear < 0) { const t = thr; thr = brk; brk = t; }
    this.throttle = thr; this.brake = brk; this.handbrake = inp.handbrake;

    // --- sterzo (riduzione con la velocita' per tastiera/gamepad)
    const spd = Math.abs(this.u);
    // tastiera/gamepad: sterzata massima commisurata all'aderenza disponibile
    const gripSteer = 1.15 * this.L * s.grip * G / Math.max(1, spd * spd);
    const maxSteer = inp.analogWheel ? s.steer : Math.min(s.steer, Math.max(0.035, gripSteer));
    const target = inp.steer * maxSteer;
    const rate = inp.analogWheel ? 20 : (Math.abs(target) < Math.abs(this.steer) ? 3.2 : 2.0);
    this.steer += Math.max(-rate * dt, Math.min(rate * dt, target - this.steer));

    // --- superficie e pendenza
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    const lx = Math.cos(this.h), lz = -Math.sin(this.h); // sinistra
    const surf = W.roads.surfaceAt(this.x, this.z, this.y);
    this.surface = surf;
    const onRoad = !!surf.road;
    const way = onRoad ? W.roads.ways[surf.road.wi] : null;
    // fuori dalla carreggiata: piazzali e parcheggi asfaltati tengono come la strada, l'erba no
    let paved = false;
    if (!onRoad) { const lc = W.terrain.landClass(this.x, this.z); paved = lc === 'parking' || lc === 'parking_space' || lc === 'pedestrian' || lc === 'asphalt' || lc === 'yard' || lc === 'cycleway' || lc === 'running_track'; }
    let mu = s.grip * (onRoad ? ((way.flags & 64) ? 0.78 : 1.0) : paved ? 0.95 : 0.68);
    let crr = onRoad ? ((way.flags & 64) ? 0.03 : 0.013) : paved ? 0.016 : 0.06;
    if (s.drive === 'A' && !onRoad) { mu *= 1.12; crr *= 0.7; }
    this.mu = mu;
    const hF = W.roads.surfaceAt(this.x + fx * this.a, this.z + fz * this.a, this.y + 0.5).h;
    const hR = W.roads.surfaceAt(this.x - fx * this.b, this.z - fz * this.b, this.y + 0.5).h;
    const slope = Math.atan2(hF - hR, this.L);
    const tw = s.W * 0.8;
    const hL = W.roads.surfaceAt(this.x + lx * tw / 2, this.z + lz * tw / 2, this.y + 0.5).h;
    const hRt = W.roads.surfaceAt(this.x - lx * tw / 2, this.z - lz * tw / 2, this.y + 0.5).h;
    const bank = Math.atan2(hL - hRt, tw);

    // --- carichi con trasferimento longitudinale
    const Wt = this.m * G * Math.cos(slope);
    let Nf = Wt * this.b / this.L - this.m * this.ax * this.hcg / this.L;
    let Nr = Wt * this.a / this.L + this.m * this.ax * this.hcg / this.L;
    Nf = Math.max(Nf, Wt * 0.15); Nr = Math.max(Nr, Wt * 0.15);
    if (this.airborne) { Nf = Nr = 0; }

    // --- motore e cambio automatico
    const ratio = this.gear > 0 ? s.gears[this.gear - 1] : 3.6;
    const wheelRpm = Math.abs(this.u) / s.wheelR * 30 / Math.PI;
    let rpm = wheelRpm * ratio * s.final;
    const clutchRpm = 900 + thr * 2600;
    if ((this.gear === 1 || this.gear === -1) && rpm < clutchRpm) rpm = rpm * 0.4 + clutchRpm * 0.6; // frizione / convertitore
    rpm = Math.max(800, rpm);
    this.rpm += (rpm - this.rpm) * Math.min(1, dt * 12);
    if (this.shiftT > 0) this.shiftT -= dt;
    if (this.gear > 0 && this.shiftT <= 0) {
      const up = s.rpmMax * (0.55 + 0.37 * thr);
      if (this.rpm > up && this.gear < s.gears.length) { this.gear++; this.shiftT = 0.3; }
      else if (this.gear > 1) {
        const lower = wheelRpm * s.gears[this.gear - 2] * s.final;
        const down = s.rpmMax * (0.28 + 0.3 * thr);
        if (this.rpm < down && lower < s.rpmMax * 0.85) { this.gear--; this.shiftT = 0.25; }
      }
    }
    let Fdrive = 0;
    if (this.shiftT <= 0 && this.rpm < s.rpmMax * 1.02) Fdrive = this.torque(this.rpm) * ratio * s.final * 0.88 / s.wheelR * thr;
    if (this.gear < 0) Fdrive = this.u < -7 ? 0 : -Fdrive * 0.6; // retromarcia limitata a ~25 km/h
    // freno motore
    if (thr < 0.05 && Math.abs(this.u) > 1 && this.gear > 0) Fdrive -= Math.sign(this.u) * this.torque(this.rpm) * 0.12 * ratio * s.final / s.wheelR * (this.rpm / s.rpmMax);
    // limite di aderenza in trazione
    const Ndrive = s.drive === 'F' ? Nf : s.drive === 'R' ? Nr : Nf + Nr;
    const tracMax = mu * Ndrive;
    this.wheelSpin = Math.abs(Fdrive) > tracMax ? Math.min(1, (Math.abs(Fdrive) - tracMax) / tracMax) : 0;
    Fdrive = Math.max(-tracMax, Math.min(tracMax, Fdrive));

    // --- freni
    let Fbrake = 0;
    const brakeF = s.brake * brk;
    if (Math.abs(this.u) > 0.05) Fbrake = -Math.sign(this.u) * Math.min(brakeF, mu * (Nf + Nr));
    let handF = 0;
    if (this.handbrake > 0 && Math.abs(this.u) > 0.05) handF = -Math.sign(this.u) * mu * Nr * 0.8 * this.handbrake;

    // --- forze laterali (angoli di deriva)
    const absU = Math.max(Math.abs(this.u), 0.5);
    const signU = this.u >= 0 ? 1 : -1;
    const alphaF = Math.atan2(this.v + this.a * this.w, absU) - this.steer * signU;
    const alphaR = Math.atan2(this.v - this.b * this.w, absU);
    const tyre = (alpha, N, muL) => {
      const C = 12 * N; // rigidezza di deriva proporzionale al carico (picco a ~5 gradi)
      let F = -C * alpha;
      const lim = muL * N;
      if (Math.abs(F) > lim) F = Math.sign(F) * lim * Math.max(0.75, 1 - 0.25 * (Math.abs(F) / lim - 1));
      return F;
    };
    let rearMu = mu * (this.handbrake > 0 ? 0.45 : 1);
    if (this.wheelSpin > 0 && s.drive === 'R') rearMu *= 1 - 0.35 * this.wheelSpin;
    const Fyf = tyre(alphaF, Nf, mu);
    const Fyr = tyre(alphaR, Nr, rearMu);
    this.slip = Math.max(Math.abs(alphaR), Math.abs(alphaF) - Math.abs(this.steer) * 0.0) * (Math.abs(this.u) > 5 ? 1 : 0);

    // --- resistenze e gravita'
    const drag = -0.5 * 1.2 * s.cda * this.u * Math.abs(this.u);
    const roll = Math.abs(this.u) > 0.05 ? -Math.sign(this.u) * crr * (Nf + Nr) : 0;
    const grade = -this.m * G * Math.sin(slope);
    const sideGrade = this.m * G * Math.sin(bank) * 0.5;

    // --- integrazione nel riferimento del veicolo
    const cosd = Math.cos(this.steer), sind = Math.sin(this.steer);
    let Fx = Fdrive + Fbrake + handF + drag + roll + grade - Fyf * sind;
    let Fy = Fyr + Fyf * cosd + sideGrade;
    if (this.airborne) { Fx = drag + grade * 0; Fy = 0; }
    const du = Fx / this.m + this.v * this.w;
    const dv = Fy / this.m - this.u * this.w;
    const dw = this.airborne ? 0 : (this.a * Fyf * cosd - this.b * Fyr) / this.I;
    const prevU = this.u;
    // controllo di stabilita' (ESC): limita l'imbardata oltre il limite fisico
    if (!this.airborne && this.handbrake === 0 && Math.abs(this.u) > 6) {
      const wMax = 1.1 * mu * G / Math.abs(this.u);
      if (Math.abs(this.w) > wMax) this.w += (Math.sign(this.w) * wMax - this.w) * Math.min(1, dt * 6);
      this.v *= 1 - Math.min(0.5, dt * 1.2);
    }
    this.u += du * dt;
    this.v += dv * dt;
    this.w += dw * dt;
    // i freni non invertono il moto
    if (Math.sign(prevU) !== Math.sign(this.u) && Math.abs(Fdrive) < 1 && prevU !== 0) this.u = 0;
    if (Math.abs(this.u) < 0.05 && thr < 0.02 && Math.abs(grade) < brakeF + crr * Wt + 1500) { this.u = 0; }
    // bassa velocita': modello cinematico
    const k = Math.min(1, Math.abs(this.u) / 4);
    const wKin = this.u * Math.tan(this.steer) / this.L;
    this.w = this.w * k + wKin * (1 - k);
    this.v *= 1 - (1 - k) * Math.min(1, dt * 8);
    this.ax = this.ax + ((Fx / this.m) - this.ax) * Math.min(1, dt * 6);
    this.ay = this.ay + ((Fy / this.m) - this.ay) * Math.min(1, dt * 6);

    // --- moto nel mondo
    this.h += this.w * dt;
    const vx = fx * this.u + lx * this.v, vz = fz * this.u + lz * this.v;
    this.x += vx * dt; this.z += vz * dt;

    // --- collisioni (3 cerchi lungo la scocca)
    this.collide();

    // --- quota
    const g2 = W.roads.surfaceAt(this.x, this.z, this.y).h;
    if (this.airborne) {
      this.vy -= G * dt; this.y += this.vy * dt;
      if (this.y <= g2) { this.y = g2; this.airborne = false; this.impact = Math.max(this.impact, Math.min(1, -this.vy / 8)); this.vy = 0; }
    } else {
      if (this.y - g2 > 0.35 && this.y - g2 < 50) { this.airborne = true; this.vy = Math.min(this.vy, 0); }
      else { this.vy = (g2 - this.y) / dt; this.vy = Math.max(-5, Math.min(5, this.vy)); this.y = g2; }
    }
    this.pitch += (slope - this.pitch) * Math.min(1, dt * 10);
    this.roll += (bank - this.roll) * Math.min(1, dt * 10);
    this.dynPitch += ((-this.ax * 0.006) - this.dynPitch) * Math.min(1, dt * 5);
    this.dynRoll += ((this.ay * 0.008) - this.dynRoll) * Math.min(1, dt * 5);
    this.wheelSpinAngle = (this.wheelSpinAngle || 0) + this.u / s.wheelR * dt;
  }

  collide() {
    const s = this.spec, W = this.world;
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    const r = s.W / 2;
    const offs = [s.L / 2 - r, 0, -(s.L / 2 - r)];
    // in galleria (o comunque sotto terra) gli ostacoli in superficie (alberi, recinzioni, case sul
    // monte sopra la galleria) non si toccano: le collisioni sono in pianta
    const rd = this.surface && this.surface.road ? W.roads.ways[this.surface.road.wi] : null;
    const under = (rd && rd.flags & 8) || (W.terrain && W.terrain.height(this.x, this.z) - this.y > 3);
    for (const o of offs) {
      const cx = this.x + fx * o, cz = this.z + fz * o;
      let hit = under ? null : W.collision.resolveCircle(cx, cz, r, this.y);
      const hitCar = W.traffic ? W.traffic.resolveCircle(cx, cz, r) : null;
      if (hitCar && (!hit || hitCar.depth > hit.depth)) hit = hitCar;
      if (!hit) continue;
      this.x += hit.nx * hit.depth; this.z += hit.nz * hit.depth;
      // velocita' nel mondo
      const lx = Math.cos(this.h), lz = -Math.sin(this.h);
      let vx = fx * this.u + lx * this.v, vz = fz * this.u + lz * this.v;
      const vn = vx * hit.nx + vz * hit.nz;
      if (vn < 0) {
        vx -= 1.25 * vn * hit.nx; vz -= 1.25 * vn * hit.nz;
        vx *= 0.8; vz *= 0.8;
        this.impact = Math.max(this.impact, Math.min(1, -vn / 12));
        this.u = vx * fx + vz * fz; this.v = vx * lx + vz * lz;
        this.w *= 0.5;
        if (hitCar && hitCar.car) hitCar.car.bumped = 3;
      }
    }
  }
}
