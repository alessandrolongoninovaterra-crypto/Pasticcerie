import * as THREE from 'three';

// Foschia "atmosferica" al posto di quella lineare di three.js, per tutti i materiali:
//  - cresce con la distanza in modo esponenziale (niente bordo netto dove inizia);
//  - dipende dalla quota: piu' fitta in basso (pianura, valli), piu' rada in alto (le cime delle
//    montagne e i grattacieli lontani escono dalla foschia, guardando giu' dall'aereo e' piu' densa);
//  - verso il sole si scalda (diffusione della luce nell'aria: il controluce al tramonto).
// Restano validi near/far di scene.fog (meteo, gallerie e volo li cambiano come prima).
// Parametri condivisi (un solo array per tutti i materiali, aggiornato a ogni fotogramma):
//   FOG.params = [attivo, quota della telecamera dal suolo, 1/scala di quota, peso della quota]
//   FOG.sun    = [direzione del sole x, y, z, forza del controluce]
export const FOG = { params: new Float32Array([1, 2, 1 / 140, 0.65]), sun: new Float32Array([0, 1, 0, 0]) };

const C = THREE.ShaderChunk;
C.fog_pars_vertex = `#ifdef USE_FOG
  varying float vFogDepth;
  varying vec3 vFogRay;
#endif`;
// raggio telecamera -> punto in coordinate del mondo (anche per gli oggetti ripetuti/istanziati):
// mvPosition = R * mondo + t, quindi mondo - telecamera = R^T * mvPosition
C.fog_vertex = `#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
  vFogRay = transpose(mat3(viewMatrix)) * mvPosition.xyz;
#endif`;
C.fog_pars_fragment = `#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  varying vec3 vFogRay;
  uniform vec4 fogParams;
  uniform vec4 fogSun;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif`;
C.fog_fragment = `#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
    vec3 fogCol = fogColor;
  #else
    float fogFactor;
    vec3 fogCol = fogColor;
    if ( fogParams.x < 0.5 ) {
      fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
    } else {
      float dist = length( vFogRay );
      float e = max( 0.0, dist - fogNear * 0.55 ) / max( 1.0, fogFar - fogNear * 0.55 );
      // densita' media lungo il raggio con densita' esponenziale in quota (suolo = telecamera - fogParams.y)
      float k = fogParams.z, h0 = max( 0.0, fogParams.y ), dy = vFogRay.y;
      float hf = abs( dy ) * k > 0.01 ? exp( - k * h0 ) * ( 1.0 - exp( - k * dy ) ) / ( k * dy ) : exp( - k * h0 );
      e *= mix( 1.0, clamp( hf, 0.2, 2.5 ), fogParams.w );
      fogFactor = 1.0 - exp( - e * e * 3.2 - e * 0.7 );
      // controluce: verso il sole la foschia prende la luce del sole
      float s = max( 0.0, dot( vFogRay / max( dist, 1e-3 ), fogSun.xyz ) );
      fogCol = mix( fogColor, fogColor * vec3( 1.55, 1.22, 0.86 ) + vec3( 0.05, 0.03, 0.0 ), clamp( fogSun.w * ( pow( s, 7.0 ) * 0.85 + pow( s, 2.0 ) * 0.15 ), 0.0, 1.0 ) );
    }
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogCol, fogFactor );
#endif`;

// le uniform condivise (stesso Float32Array: three.js non lo copia quando clona le uniform dei materiali)
const extra = { fogParams: { value: FOG.params }, fogSun: { value: FOG.sun } };
Object.assign(THREE.UniformsLib.fog, extra);
for (const k of Object.keys(THREE.ShaderLib)) {
  const u = THREE.ShaderLib[k].uniforms;
  if (u && u.fogColor) Object.assign(u, { fogParams: { value: FOG.params }, fogSun: { value: FOG.sun } });
}

// a ogni fotogramma: quota della telecamera sul terreno, sole, meteo
export function updateFog(sky, camH, wet, fogWx, tunnelK) {
  FOG.params[1] = Math.max(0, camH);
  // con la nebbia vera (meteo) la foschia e' uniforme; in galleria la si spegne
  FOG.params[3] = 0.65 * (1 - Math.min(1, fogWx * 1.5)) * (1 - tunnelK);
  const d = sky.sunDir, day = 1 - sky.night;
  FOG.sun[0] = d.x; FOG.sun[1] = d.y; FOG.sun[2] = d.z;
  // il controluce e' piu' forte con il sole basso, si spegne con il cielo coperto e di notte
  const low = 1 - Math.min(1, Math.max(0, d.y) * 1.6);
  FOG.sun[3] = day * (0.35 + 0.65 * low) * (1 - 0.8 * wet) * (1 - tunnelK) * Math.max(0, Math.min(1, (d.y + 0.08) * 8));
}
