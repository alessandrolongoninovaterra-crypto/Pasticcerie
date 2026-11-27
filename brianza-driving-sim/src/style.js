import * as THREE from 'three';

// Stile grafico (menu iniziale): realistico, cartoon o stilizzato.
//  - cartoon: luce a fasce piatte (ombra / luce piena, senza sfumature), contorni scuri attorno agli
//    oggetti e sugli spigoli (dalla profondita', src/post.js), colori pieni e saturi, cielo azzurro
//    acceso, niente grana fotografica su facciate e strade;
//  - stilizzato: luce morbida che "avvolge" gli oggetti (le zone in ombra non diventano nere), bordo
//    luminoso in controluce, colori vivi e caldi, ombre azzurrine, cielo saturo, bagliore piu' forte.
// Gli shader della luce si cambiano una volta sola, prima che si compilino i materiali.
export const STYLES = {
  real: { name: 'Realistico' },
  toon: { name: 'Cartoon', outline: 1, photo: false, sat: 0.32, contrast: 0.1, vignette: -0.2, bloom: 0.05, fogFar: 1.35 },
  soft: { name: 'Stilizzato', outline: 0, photo: false, sat: 0.28, contrast: 0.02, vignette: -0.1, bloom: 0.18, warm: 1, fogFar: 1.2 },
};

const DOT = 'float dotNL = saturate( dot( geometryNormal, directLight.direction ) );';
export function applyStyleShaders(style) {
  if (style === 'real' || !STYLES[style]) return;
  const C = THREE.ShaderChunk;
  let rep;
  if (style === 'toon') {
    // due fasce: ombra piatta e luce piena, con un bordo stretto tra le due
    rep = `float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
      dotNL = 0.38 * smoothstep( 0.0, 0.04, dotNL ) + 0.62 * smoothstep( 0.32, 0.38, dotNL );`;
  } else {
    // luce avvolgente (wrap) e bordo luminoso in controluce
    rep = `float dotNL = saturate( ( dot( geometryNormal, directLight.direction ) + 0.45 ) / 1.45 );
      dotNL = dotNL * dotNL * ( 3.0 - 2.0 * dotNL );
      dotNL += pow( 1.0 - saturate( dot( geometryNormal, geometryViewDir ) ), 4.0 ) * 0.35 * saturate( dot( geometryViewDir, -directLight.direction ) + 0.6 );`;
  }
  for (const k of ['lights_lambert_pars_fragment', 'lights_phong_pars_fragment', 'lights_physical_pars_fragment']) {
    if (C[k].includes(DOT)) C[k] = C[k].replace(DOT, rep);
  }
}

// colore finale: si parte da quello dell'ora e del meteo (src/main.js) e si spinge verso lo stile
export function stylizeLook(look, style, night) {
  const S = STYLES[style];
  if (!S || style === 'real') return look;
  look.saturation += S.sat * (1 - 0.5 * night);
  look.contrast += S.contrast;
  look.vignette = Math.max(0, look.vignette + S.vignette);
  if (S.warm) { look.wb.x *= 1.03; look.wb.z *= 0.97; look.lift.set(0.02, 0.03, 0.06).multiplyScalar(1 - 0.5 * night); }
  return look;
}

// cielo: piu' azzurro e pulito di giorno
const TOP = { toon: new THREE.Color(0x2f86ff), soft: new THREE.Color(0x3d8fff) };
const HOR = { toon: new THREE.Color(0xa9dcff), soft: new THREE.Color(0xbfe4ff) };
export function stylizeSky(sky, style) {
  if (style === 'real' || !TOP[style]) return;
  const day = 1 - sky.night, U = sky.uniforms, k = day * 0.75;
  U.top.value.lerp(TOP[style], k);
  U.horizon.value.lerp(HOR[style], k * 0.8);
  U.cloudCol.value.lerp(new THREE.Color(1.05, 1.05, 1.08), day * 0.6);
  sky.scene.fog.color.lerp(HOR[style], k * 0.6);
  sky.scene.fog.far *= STYLES[style].fogFar; sky.scene.fog.near *= STYLES[style].fogFar;
  sky.hemi.intensity *= style === 'soft' ? 1.25 : 1.1;
}
