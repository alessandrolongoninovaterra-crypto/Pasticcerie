import * as THREE from 'three';

// Ciclo giorno/notte: posizione del sole (latitudine reale ~45,7°N), colori
// del cielo, nebbia, luci ambientali, stelle.
export class Sky {
  constructor(scene, lat) {
    this.scene = scene; this.lat = lat * Math.PI / 180;
    this.hours = 10.5; // ora del giorno
    this.speed = 30;   // secondi di gioco per secondo reale
    this.dayOfYear = 140;
    this.cover = 0.46; // copertura nuvolosa
    const geo = new THREE.SphereGeometry(4500, 32, 16);
    this.uniforms = { top: { value: new THREE.Color() }, horizon: { value: new THREE.Color() }, sunDir: { value: new THREE.Vector3() }, sunCol: { value: new THREE.Color() }, cloudCol: { value: new THREE.Color() }, time: { value: 0 }, cover: { value: 0.5 } };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }',
      fragmentShader: `uniform vec3 top; uniform vec3 horizon; uniform vec3 sunDir; uniform vec3 sunCol; uniform vec3 cloudCol; uniform float time; uniform float cover; varying vec3 vDir;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
        float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; } return s; }
        void main(){ vec3 d = normalize(vDir); float h = max(d.y, 0.0); vec3 c = mix(horizon, top, pow(h, 0.55));
          if (d.y < 0.0) c = horizon * 0.85;
          float s = max(dot(d, sunDir), 0.0);
          c += sunCol * (pow(s, 900.0) * 3.0 + pow(s, 12.0) * 0.25);
          if (d.y > 0.015) {
            // nuvole: rumore frattale proiettato su un piano alto
            vec2 uv = d.xz / (d.y + 0.12) * 1.6 + vec2(time * 0.006, time * 0.002);
            float n = fbm(uv);
            float cl = smoothstep(1.0 - cover, 1.0 - cover + 0.28, n) * smoothstep(0.015, 0.16, d.y);
            float shade = 0.72 + 0.28 * smoothstep(0.45, 0.9, fbm(uv + sunDir.xz * 0.25 + 3.1));
            c = mix(c, cloudCol * shade + sunCol * pow(s, 6.0) * 0.25, cl * 0.9);
          }
          gl_FragColor = vec4(c, 1.0); }`,
    });
    this.dome = new THREE.Mesh(geo, mat);
    this.dome.renderOrder = -1;
    this.dome.frustumCulled = false;
    scene.add(this.dome);
    // stelle
    const sp = [];
    for (let i = 0; i < 1500; i++) {
      const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, r = Math.sqrt(1 - u * u);
      if (u < 0.05) continue;
      sp.push(Math.cos(a) * r * 4000, u * 4000, Math.sin(a) * r * 4000);
    }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.Float32BufferAttribute(sp, 3));
    this.starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
    this.stars = new THREE.Points(sg, this.starMat); this.stars.frustumCulled = false;
    scene.add(this.stars);

    this.sun = new THREE.DirectionalLight(0xffffff, 2);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera; sc.left = -90; sc.right = 90; sc.top = 90; sc.bottom = -90; sc.near = 10; sc.far = 800;
    this.sun.shadow.bias = -0.0004; this.sun.shadow.normalBias = 0.6;
    scene.add(this.sun, this.sun.target);
    this.hemi = new THREE.HemisphereLight(0xbcd4ff, 0x5a6040, 0.9);
    scene.add(this.hemi);
    scene.fog = new THREE.Fog(0xcfdbe6, 400, 2600);
    this.sunDir = new THREE.Vector3();
    this.night = 0;
  }

  update(dt, center) {
    this.hours = (this.hours + dt * this.speed / 3600 + 24) % 24;
    // elevazione/azimut solari approssimati
    const decl = 23.44 * Math.PI / 180 * Math.sin(2 * Math.PI * (284 + this.dayOfYear) / 365);
    const H = (this.hours - 13.2) * 15 * Math.PI / 180; // ora legale ~ mezzogiorno solare alle 13:20
    const sinEl = Math.sin(this.lat) * Math.sin(decl) + Math.cos(this.lat) * Math.cos(decl) * Math.cos(H);
    const el = Math.asin(sinEl);
    const az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(this.lat) - Math.tan(decl) * Math.cos(this.lat));
    // az misurato da sud verso ovest; x = est, z = sud
    this.sunDir.set(-Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).normalize();
    const day = THREE.MathUtils.smoothstep(Math.sin(el), -0.12, 0.18);
    const golden = Math.max(0, 1 - Math.abs(Math.sin(el) - 0.05) * 6) * day;
    this.night = 1 - day;
    const top = new THREE.Color(0x0a1022).lerp(new THREE.Color(0x3d7fd1), day);
    const hor = new THREE.Color(0x141a2a).lerp(new THREE.Color(0xc9dbea), day).lerp(new THREE.Color(0xf0a868), golden * 0.6);
    this.uniforms.top.value.copy(top);
    this.uniforms.horizon.value.copy(hor);
    this.uniforms.sunDir.value.copy(this.sunDir);
    this.uniforms.sunCol.value.setRGB(1, 0.85 - golden * 0.3, 0.6 - golden * 0.3).multiplyScalar(day);
    this.uniforms.cloudCol.value.setRGB(0.07 + 0.93 * day, 0.08 + 0.9 * day - golden * 0.12, 0.11 + 0.87 * day - golden * 0.22);
    this.uniforms.time.value += dt * Math.max(1, this.speed / 30);
    this.uniforms.cover.value = this.cover;
    this.scene.fog.color.copy(hor);
    this.scene.fog.near = 300 + day * 200;
    this.scene.fog.far = 1500 + day * 1300;
    this.sun.intensity = 2.6 * day * Math.min(1, Math.max(0, Math.sin(el)) * 4);
    this.sun.color.setRGB(1, 0.92 - golden * 0.25, 0.82 - golden * 0.35);
    this.hemi.intensity = 0.25 + 0.85 * day;
    this.hemi.color.setRGB(0.55 + 0.2 * day, 0.62 + 0.2 * day, 0.85 + 0.1 * day);
    this.hemi.groundColor.setRGB(0.25 * day + 0.05, 0.27 * day + 0.05, 0.2 * day + 0.08);
    this.starMat.opacity = Math.max(0, this.night - 0.3) * 1.2;
    const lightDir = this.sunDir.y > 0 ? this.sunDir : new THREE.Vector3(0.3, 1, 0.2).normalize();
    this.sun.position.set(center.x + lightDir.x * 300, center.y + lightDir.y * 300, center.z + lightDir.z * 300);
    this.sun.target.position.copy(center);
    this.dome.position.copy(center);
    this.stars.position.copy(center);
  }

  clock() {
    const h = Math.floor(this.hours), m = Math.floor((this.hours - h) * 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }
}
