// Personaggio del giocatore a piedi: il manichino animato "Universal Animation Library" di Quaternius
// (quaternius.com, licenza CC0), come lo distribuisce il progetto OpenCity (webgl-games/opencity,
// assets/characters/UAL1_Standard.glb). Si tengono solo le animazioni usate dal gioco, si tolgono i
// fotogrammi chiave ridondanti e si comprime: data/char/player.js (GLB in un file BDS_DATA).
// Uso: node tools/import-character.mjs <UAL1_Standard.glb>
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { resample, prune, dedup, quantize } from '@gltf-transform/functions';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const KEEP = ['Idle_Loop', 'Walk_Loop', 'Jog_Fwd_Loop', 'Sprint_Loop', 'Jump_Start', 'Jump_Loop', 'Jump_Land', 'Crouch_Idle_Loop',
  'Pistol_Idle_Loop', 'Pistol_Aim_Up', 'Pistol_Aim_Neutral', 'Pistol_Aim_Down', 'Pistol_Shoot', 'Pistol_Reload', 'Hit_Chest', 'Driving_Loop', 'Roll'];
const src = process.argv[2];
if (!src) { console.error('uso: node tools/import-character.mjs <UAL1_Standard.glb>'); process.exit(1); }
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(src);
console.log('pelli (skin) prima:', doc.getRoot().listSkins().map((k) => k.getName() + ' ' + k.listJoints().length + ' ossa, usata da ' + k.listParents().filter((p) => p.propertyType === 'Node').map((n) => n.getName()).join('/')).join('; '));
for (const a of doc.getRoot().listAnimations()) if (!KEEP.includes(a.getName())) a.dispose();
await doc.transform(resample({ tolerance: 1e-3 }), prune(), dedup(), quantize({ quantizePosition: 14, quantizeNormal: 10 }));
console.log('pelli dopo:', doc.getRoot().listSkins().map((k) => k.getName() + ' ' + k.listJoints().length).join('; '));
const glb = await io.writeBinary(doc);
const gz = zlib.gzipSync(Buffer.from(glb), { level: 9 });
const out = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'data', 'char');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'player.js'), `BDS_DATA('char_player','bin','${gz.toString('base64')}');\n`);
fs.writeFileSync(path.join(out, 'LICENSE-Quaternius-UAL.txt'), 'Universal Animation Library (UAL1 Standard) by Quaternius - https://quaternius.com\nLicense: CC0 1.0 Universal (Public Domain Dedication) - https://creativecommons.org/publicdomain/zero/1.0/\nObtained from the OpenCity project (https://github.com/webgl-games/opencity, assets/characters).\n');
console.log(`GLB ${(glb.byteLength / 1e6).toFixed(2)} MB, compresso ${(gz.length / 1e6).toFixed(2)} MB, animazioni: ${doc.getRoot().listAnimations().map((a) => a.getName()).join(', ')}`);
