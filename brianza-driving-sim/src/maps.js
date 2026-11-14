import { CLS } from './roads.js';

// Minimappa stile navigatore (orientata con la direzione di marcia) e mappa
// completa per scegliere la destinazione o il punto di partenza.
const ROAD_COL = ['#f39a4a', '#f39a4a', '#f7c94f', '#f6e08f', '#ffffff', '#f2f2f2', '#e6e9eb', '#e6e9eb', '#b9bfc3', '#b39b7a', '#d9d2c4'];
const ROAD_COL_N = ['#ff9e45', '#ff9e45', '#ffd25c', '#f2e2a0', '#c9d3db', '#b9c3cb', '#a9b3bb', '#a9b3bb', '#7d878f', '#7d6f5d', '#8d877c'];
const LM_ICON = { 1: '⛪', 2: '🚉', 3: '🏛', 4: '🏥', 5: '⛽', 6: '🏰', 7: '★', 8: '🌳', 9: '🛒', 10: '🎭', 11: '🏫', 12: '💧', 13: '⛰' };

export class Maps {
  // minimappa: strade caricate attorno al veicolo (world.roads); mappa completa: rete del navigatore
  constructor(world, meta, net) {
    this.world = world; this.R = world.roads; this.N = net; this.meta = meta;
    this.mini = document.getElementById('minimap');
    this.miniCtx = this.mini.getContext('2d');
    this.big = document.getElementById('bigmap');
    this.bigCtx = this.big.getContext('2d');
    this.zoom = 0.35; this.cx = 0; this.cz = 0;
    this.major = [];
    this.N.ways.forEach((w, wi) => { if (w.cls <= CLS.TERTIARY && w.drivable) this.major.push(wi); });
    this.waters = meta.waters;
    this.comuni = meta.comuni.map((c) => {
      let best = null, ba = 0;
      for (const r of c.rings) {
        let a = 0, x = 0, z = 0;
        for (let i = 0; i < r.length; i++) { const j = (i + 1) % r.length; const cr = r[i][0] * r[j][1] - r[j][0] * r[i][1]; a += cr; x += (r[i][0] + r[j][0]) * cr; z += (r[i][1] + r[j][1]) * cr; }
        if (Math.abs(a) > ba) { ba = Math.abs(a); best = [x / (3 * a), z / (3 * a)]; }
      }
      return { ...c, label: best };
    });
    this.night = false;
  }

  // ------------------------------------------------------------ minimappa
  drawMini(car, route, night) {
    const cv = this.mini, ctx = this.miniCtx;
    const W = cv.width, H = cv.height;
    const kmh = Math.abs(car.u * 3.6);
    // in volo: la mappa si allarga con la velocita' e la quota (col caccia ~2 km attorno) e usa la
    // rete stradale completa, che non dipende dalle tessere gia' caricate sotto l'aereo
    const air = car.isPlane && !car.onGround;
    const scale = air ? Math.max(0.12, Math.min(0.6, 0.75 - kmh / 1400 - Math.max(0, car.agl || 0) / 4000)) : 1.7 - Math.min(1.1, kmh / 110) * 1.0; // px per metro
    const radius = Math.hypot(W, H) / scale * 0.62;
    ctx.save();
    ctx.fillStyle = night ? '#18222b' : '#dfe6d6';
    ctx.fillRect(0, 0, W, H);
    ctx.translate(W / 2, H * 0.64);
    const ang = -Math.PI / 2 - Math.atan2(Math.cos(car.h), Math.sin(car.h));
    ctx.rotate(ang);
    ctx.scale(scale, scale);
    ctx.translate(-car.x, -car.z);
    this.drawWaters(ctx, car.x, car.z, radius, night);
    this.drawRoads(ctx, car.x, car.z, radius, scale, night, false, air);
    if (route) this.drawRoute(ctx, route, scale, car);
    ctx.restore();
    // freccia del veicolo
    ctx.save();
    ctx.translate(W / 2, H * 0.64);
    ctx.fillStyle = '#ff4136'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, -11); ctx.lineTo(8, 9); ctx.lineTo(0, 4); ctx.lineTo(-8, 9); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    // nord
    const nx = W / 2 + Math.sin(ang + Math.PI) * 0 + Math.cos(ang - Math.PI / 2) * (W / 2 - 16);
    const ny = H / 2 + Math.sin(ang - Math.PI / 2) * (H / 2 - 16);
    ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.beginPath(); ctx.arc(nx, ny, 10, 0, 7); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('N', nx, ny + 1);
  }

  drawWaters(ctx, x, z, radius, night) {
    ctx.fillStyle = night ? '#1d3b57' : '#9cc3e4';
    for (const wt of this.waters) {
      const r0 = wt.o[0];
      if (!r0 || Math.abs(r0[0][0] - x) > radius + 3000 || Math.abs(r0[0][1] - z) > radius + 3000) continue;
      ctx.beginPath();
      for (const r of wt.o) { r.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); }
      ctx.fill();
    }
  }

  drawRoads(ctx, x, z, radius, scale, night, bigMap, air = false) {
    const R = bigMap || air ? this.N : this.R;
    const byCls = Array.from({ length: 11 }, () => []);
    if (bigMap && scale < 0.18) {
      for (const wi of this.major) byCls[R.ways[wi].cls].push(wi * 16384 - 1); // vie intere
    } else {
      R.segmentsNear(x, z, radius, (wi, k) => {
        const w = R.ways[wi];
        if ((bigMap || air) && scale < 0.35 && w.cls >= CLS.SERVICE) return;
        byCls[w.cls].push(wi * 16384 + k);
      });
    }
    const cols = night ? ROAD_COL_N : ROAD_COL;
    for (let pass = 0; pass < 2; pass++) {
      for (let c = 10; c >= 0; c--) {
        const list = byCls[c];
        if (!list.length) continue;
        const wM = [12, 11, 9, 8, 7, 6, 6, 5, 4, 3, 5][c];
        const px = Math.max(bigMap ? 1 : 1.6, wM * scale);
        if (pass === 0) { ctx.strokeStyle = night ? '#0c1116' : '#9aa19a'; ctx.lineWidth = (px + (bigMap ? 1.2 : 2.2)) / scale; }
        else { ctx.strokeStyle = cols[c]; ctx.lineWidth = px / scale; }
        if (pass === 0 && c >= CLS.SERVICE) continue;
        ctx.beginPath();
        for (const p of list) {
          const wi = Math.floor((p + 1) / 16384), k = p - wi * 16384;
          const w = R.ways[wi];
          if (k < 0) {
            for (let i = 0; i < w.nodes.length; i++) { const n = w.nodes[i]; if (i) ctx.lineTo(R.nx[n], R.nz[n]); else ctx.moveTo(R.nx[n], R.nz[n]); }
          } else {
            const a = w.nodes[k], b = w.nodes[k + 1];
            ctx.moveTo(R.nx[a], R.nz[a]); ctx.lineTo(R.nx[b], R.nz[b]);
          }
        }
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }
  }

  drawRoute(ctx, route, scale, car) {
    ctx.strokeStyle = 'rgba(20,110,255,0.9)';
    ctx.lineWidth = Math.max(5, 7 * scale) / scale;
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath();
    const from = Math.max(0, (route._lastI || 0));
    if (car) ctx.moveTo(car.x, car.z); else ctx.moveTo(route.pts[0][0], route.pts[0][1]);
    for (let i = from + 1; i < route.pts.length; i++) ctx.lineTo(route.pts[i][0], route.pts[i][1]);
    ctx.stroke();
    const d = route.dest;
    ctx.fillStyle = '#e8262b';
    ctx.beginPath(); ctx.arc(d[0], d[1], 7 / scale, 0, 7); ctx.fill();
  }

  // ------------------------------------------------------------ mappa completa
  resizeBig() {
    this.big.width = this.big.clientWidth * devicePixelRatio;
    this.big.height = this.big.clientHeight * devicePixelRatio;
  }

  toScreen(x, z) { const s = this.zoom * devicePixelRatio; return [(x - this.cx) * s + this.big.width / 2, (z - this.cz) * s + this.big.height / 2]; }
  toWorld(sx, sy) { const s = this.zoom * devicePixelRatio; return [(sx * devicePixelRatio - this.big.width / 2) / s + this.cx, (sy * devicePixelRatio - this.big.height / 2) / s + this.cz]; }

  drawBig(car, route, dest) {
    const cv = this.big, ctx = this.bigCtx, W = cv.width, H = cv.height;
    const s = this.zoom * devicePixelRatio;
    ctx.save();
    ctx.fillStyle = '#e4e9dc'; ctx.fillRect(0, 0, W, H);
    ctx.translate(W / 2, H / 2); ctx.scale(s, s); ctx.translate(-this.cx, -this.cz);
    const radius = Math.hypot(W, H) / 2 / s;
    // confini comunali
    for (const c of this.comuni) {
      const feat = this.meta.featured.includes(c.n);
      ctx.fillStyle = feat ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.04)';
      ctx.beginPath();
      for (const r of c.rings) { r.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); ctx.closePath(); }
      ctx.fill();
      ctx.setLineDash([8 / s, 6 / s]); ctx.strokeStyle = 'rgba(120,60,140,0.55)'; ctx.lineWidth = 1.5 / s; ctx.stroke(); ctx.setLineDash([]);
    }
    this.drawWaters(ctx, this.cx, this.cz, radius + 20000, false);
    // fiumi
    ctx.strokeStyle = '#8fbbe0'; ctx.lineWidth = Math.max(1, 6 * s) / s;
    ctx.beginPath();
    for (const r of this.meta.rivers) { if (r.w === 'stream' && s < 0.3) continue; r.p.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]))); }
    ctx.stroke();
    // ferrovie
    ctx.strokeStyle = '#6d6d6d'; ctx.lineWidth = Math.max(1.5, 3 * s) / s; ctx.setLineDash([10 / s, 6 / s]);
    ctx.beginPath();
    for (const r of this.N.rails) r.p.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    ctx.stroke(); ctx.setLineDash([]);
    this.drawRoads(ctx, this.cx, this.cz, radius, s, false, true);
    if (route) this.drawRoute(ctx, route, s, null);
    ctx.restore();
    // etichette
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    if (s > 0.6) {
      ctx.font = `${13 * devicePixelRatio}px Arial`;
      for (const lm of this.meta.landmarks) {
        if (lm[0] === 11 || (lm[0] === 5 && s < 1.2)) continue;
        const [sx, sy] = this.toScreen(lm[1], lm[2]);
        if (sx < 0 || sy < 0 || sx > W || sy > H) continue;
        ctx.fillText(LM_ICON[lm[0]] || '•', sx, sy);
        if (s > 1.2) { ctx.fillStyle = '#333'; ctx.fillText(lm[3], sx, sy + 14 * devicePixelRatio); ctx.fillStyle = '#000'; }
      }
    }
    if (s > 0.25) {
      ctx.font = `italic ${12 * devicePixelRatio}px Arial`;
      for (const p of this.meta.places) {
        if (p.t === 'town' || p.t === 'city') continue;
        if ((p.t === 'hamlet' || p.t === 'neighbourhood' || p.t === 'locality') && s < 0.6) continue;
        const [sx, sy] = this.toScreen(p.x, p.z);
        if (sx < 0 || sy < 0 || sx > W || sy > H) continue;
        ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.strokeText(p.n, sx, sy); ctx.fillStyle = '#4a4a4a'; ctx.fillText(p.n, sx, sy);
      }
    }
    for (const c of this.comuni) {
      if (!c.label) continue;
      const feat = this.meta.featured.includes(c.n);
      const [sx, sy] = this.toScreen(c.label[0], c.label[1]);
      if (sx < -100 || sy < -50 || sx > W + 100 || sy > H + 50) continue;
      ctx.font = `bold ${(feat ? 17 : 13) * devicePixelRatio}px Arial`;
      ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.strokeText(c.n.toUpperCase(), sx, sy);
      ctx.fillStyle = feat ? '#5a2a72' : '#7b6d82'; ctx.fillText(c.n.toUpperCase(), sx, sy);
    }
    if (dest) {
      const [sx, sy] = this.toScreen(dest[0], dest[1]);
      ctx.font = `${26 * devicePixelRatio}px Arial`; ctx.fillText('🏁', sx + 6, sy - 12);
    }
    if (car) {
      const [sx, sy] = this.toScreen(car.x, car.z);
      ctx.save(); ctx.translate(sx, sy);
      ctx.rotate(Math.atan2(Math.cos(car.h), Math.sin(car.h)) + Math.PI / 2);
      ctx.scale(devicePixelRatio, devicePixelRatio);
      ctx.fillStyle = '#ff4136'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, -12); ctx.lineTo(9, 10); ctx.lineTo(0, 5); ctx.lineTo(-9, 10); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.restore();
    }
    // scala
    const meters = [50, 100, 200, 500, 1000, 2000, 5000].find((m) => m * s > 80 * devicePixelRatio) || 5000;
    ctx.fillStyle = '#222'; ctx.fillRect(20, H - 30, meters * s, 4);
    ctx.font = `${12 * devicePixelRatio}px Arial`; ctx.textAlign = 'left'; ctx.fillText(meters >= 1000 ? meters / 1000 + ' km' : meters + ' m', 20, H - 42);
  }
}
