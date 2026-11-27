import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';

// Post-produzione (qualita' media e alta): la scena si disegna in HDR su un'immagine intermedia
// (4 campioni per pixel, con la profondita'), poi:
//  1. occlusione ambientale (GTAO) calcolata dalla profondita' gia' disegnata (niente secondo
//     disegno della scena): angoli, piedi dei muri, sotto le auto, tra gli alberi; svanisce con la
//     distanza (oltre ~300 m c'e' la foschia);
//  2. pulizia dei valori non validi (un NaN sfocato dal bagliore diventava un quadrato nero);
//  3. bagliore (bloom): di giorno solo il sole e i suoi riflessi, di notte lampioni, fari, finestre;
//  4. finale: esposizione (adattamento dell'occhio, src/main.js), curva ACES, correzione del colore
//     (bilanciamento del bianco, saturazione, contrasto), vignettatura leggera, rumore anti-bande,
//     conversione sRGB.
// Qualita' bassa: niente di tutto questo, si disegna direttamente sullo schermo (esposizione con
// renderer.toneMappingExposure).

// GTAOPass di three r170 con la profondita' fornita da fuori: cerca comunque l'immagine delle normali
// (setGBuffer, setSize, dispose) che in quel caso non crea; qui un segnaposto
class AOPass extends GTAOPass {
  setGBuffer(depthTexture, normalTexture) {
    if (depthTexture !== undefined && !this.normalRenderTarget) this.normalRenderTarget = { depthTexture, texture: null, setSize() {}, dispose() {} };
    super.setGBuffer(depthTexture, normalTexture);
  }
}

const VERT = 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }';

const CombineShader = {
  uniforms: { tDiffuse: { value: null }, tAO: { value: null }, tDepth: { value: null }, aoK: { value: 0 }, cameraNear: { value: 0.5 }, cameraFar: { value: 5000 }, aoFar: { value: 320 } },
  vertexShader: VERT,
  fragmentShader: `#include <packing>
    uniform sampler2D tDiffuse; uniform sampler2D tAO; uniform sampler2D tDepth;
    uniform float aoK; uniform float cameraNear; uniform float cameraFar; uniform float aoFar; varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      if (any(isnan(c)) || any(isinf(c)) || !(c.r >= 0.0 && c.g >= 0.0 && c.b >= 0.0 && c.r < 1e5 && c.g < 1e5 && c.b < 1e5)) c = vec4(0.0, 0.0, 0.0, 1.0);
      vec3 col = min(c.rgb, vec3(64.0));
      if (aoK < 0.0) { gl_FragColor = vec4(vec3(pow(texture2D(tAO, vUv).r, 1.8)), 1.0); return; }   // prova: solo occlusione
      if (aoK > 0.0) {
        float d = texture2D(tDepth, vUv).x;
        if (d < 1.0) {
          float dist = -perspectiveDepthToViewZ(d, cameraNear, cameraFar);
          float fade = 1.0 - smoothstep(aoFar * 0.35, aoFar, dist);
          float ao = pow(clamp(texture2D(tAO, vUv).r, 0.0, 1.0), 1.8);
          col *= mix(1.0, ao, aoK * fade);
        }
      }
      gl_FragColor = vec4(col, 1.0);
    }`,
};

const FinalShader = {
  uniforms: {
    tDiffuse: { value: null }, exposure: { value: 1.2 }, wb: { value: new THREE.Vector3(1, 1, 1) },
    saturation: { value: 1.08 }, contrast: { value: 0.12 }, vignette: { value: 0.22 }, lift: { value: new THREE.Vector3(0, 0, 0) }, time: { value: 0 },
  },
  vertexShader: VERT,
  fragmentShader: `uniform sampler2D tDiffuse; uniform float exposure; uniform vec3 wb; uniform float saturation; uniform float contrast; uniform float vignette; uniform vec3 lift; uniform float time; varying vec2 vUv;
    vec3 RRTAndODTFit(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }
    vec3 aces(vec3 color) {
      const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
      const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
      color = IN * (color / 0.6); color = RRTAndODTFit(color); color = OUT * color; return clamp(color, 0.0, 1.0);
    }
    vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c)); }
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + time) * 43758.5453); }
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb * exposure * wb;
      c = aces(c);
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = max(mix(vec3(l), c, saturation), 0.0);
      c = toSRGB(c);
      // contrasto: curva a S morbida attorno al grigio medio; ombre appena sollevate/colorate
      c = mix(c, c * c * (3.0 - 2.0 * c), contrast);
      c = c + lift * (1.0 - c);
      vec2 q = vUv - 0.5; c *= 1.0 - vignette * smoothstep(0.25, 0.95, dot(q, q) * 2.2);
      c += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
      gl_FragColor = vec4(c, 1.0);
    }`,
};

export class Post {
  constructor(renderer, scene, camera, q) {
    this.renderer = renderer; this.scene = scene; this.camera = camera;
    const pr = renderer.getPixelRatio(), w = innerWidth * pr, h = innerHeight * pr;
    const rt = new THREE.WebGLRenderTarget(w, h, { type: THREE.HalfFloatType, samples: 4 });
    rt.depthTexture = new THREE.DepthTexture(w, h);
    rt.depthTexture.type = THREE.UnsignedIntType;
    this.composer = new EffectComposer(renderer, rt);
    this.composer.addPass(new RenderPass(scene, camera));
    // occlusione ambientale: solo dove serve (qualita' alta piena risoluzione, media mezza)
    this.ao = null;
    if (q.ao) {
      const ao = new AOPass(scene, camera, w, h, { depthTexture: rt.depthTexture });
      ao.output = GTAOPass.OUTPUT.Off; ao.needsSwap = false;   // la si applica nel passaggio seguente
      ao.updateGtaoMaterial({ radius: 2.6, distanceExponent: 1.6, thickness: 4, scale: 1.6, distanceFallOff: 1, samples: q.ao === 'half' ? 12 : 16 });
      ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
      this.aoScale = q.ao === 'half' ? 0.5 : 1;
      const set = ao.setSize.bind(ao);
      ao.setSize = (W, H) => set(Math.max(2, Math.round(W * this.aoScale)), Math.max(2, Math.round(H * this.aoScale)));
      ao.setSize(w, h);
      this.composer.addPass(ao);
      this.ao = ao;
    }
    this.combine = new ShaderPass(CombineShader);
    if (this.ao) this.combine.uniforms.tAO.value = this.ao.pdRenderTarget.texture;
    this.composer.addPass(this.combine);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.12, 0.55, 1.2);
    this.composer.addPass(this.bloom);
    this.final = new ShaderPass(FinalShader);
    this.final.material.toneMapped = false;
    this.composer.addPass(this.final);
    this.aoOn = !!this.ao; this.aoK = 0.75;
  }

  get renderTarget1() { return this.composer.renderTarget1; }

  setSize(w, h) { this.composer.setSize(w, h); }
  setPixelRatio(pr) { this.composer.setPixelRatio(pr); }
  setAO(on) { this.aoOn = on && !!this.ao; if (this.ao) this.ao.enabled = this.aoOn; }

  // sky: per il bagliore (giorno/notte); look: { exposure, wb, saturation, contrast, lift, ao }
  render(dt, sky, look) {
    const U = this.final.uniforms, n = sky.night;
    U.exposure.value = look.exposure;
    U.wb.value.copy(look.wb); U.saturation.value = look.saturation; U.contrast.value = look.contrast; U.lift.value.copy(look.lift);
    U.vignette.value = look.vignette; U.time.value = (U.time.value + dt) % 100;
    // il bagliore lavora prima dell'esposizione: la soglia segue l'esposizione (stessa luminosita' a schermo)
    const ex = Math.max(0.3, look.exposure);
    this.bloom.threshold = (0.95 - 0.25 * n) / ex * 1.2;
    this.bloom.strength = 0.1 + 0.45 * n;
    this.bloom.radius = 0.5 + 0.15 * n;
    const C = this.combine.uniforms, rb = this.composer.readBuffer;
    C.tDepth.value = rb.depthTexture;
    C.cameraNear.value = this.camera.near; C.cameraFar.value = this.camera.far;
    C.aoK.value = this.debugAO ? -1 : this.aoOn ? this.aoK * look.ao : 0;
    if (this.ao) {
      this.ao.enabled = this.aoOn && look.ao > 0.02;
      // la profondita' e' quella dell'immagine in cui si disegna la scena in questo fotogramma
      this.ao.gtaoMaterial.uniforms.tDepth.value = rb.depthTexture;
      this.ao.pdMaterial.uniforms.tDepth.value = rb.depthTexture;
    }
    this.composer.render(dt);
  }
}
