# Codice di terze parti: "city" di donmutti

I file di questa cartella derivano da <https://github.com/donmutti/city> (commit `6a58ad4`),
un gioco di guida in Three.js sulle strade reali di Lussemburgo.

| File | Origine | Modifiche |
|---|---|---|
| `car.js` | `src/render/car.js` | import adattati; aggiunta `registerBody()` |
| `vehicles.js` | `src/game/vehicles.js` | nessuna |
| `ragdoll.js` | `src/game/ragdoll.js` | nessuna |
| `streetprops.js` | `src/render/streetprops.js` | nessuna |
| `figure.js` | estratto da `src/game/pedestrians.js` | solo figura, camminata e disegno; aggiunta `createCrowd()` |
| `terrain-shim.js` | — | scritto per questo progetto |

**Modifiche a `car.js` (novembre 2026, grafica delle auto):** materiali ritarati per la mappa
d'ambiente del gioco (vernice con trasparente lucido, cromature in metallo, vetri speculari, cerchi);
fari, fanali e retromarcia comandabili (`userData.lamps`); targhe italiane generiche
(`plateTexture`), tergicristalli, linee delle portiere, maniglie, ombra di contatto
(`contactShadowTexture`); i dettagli di muso e coda si appoggiano alla superficie vera della
scocca (prima restavano qualche centimetro dentro); flotta del traffico con vetri, luci (che di
notte si accendono, `setNight`) e ombre in mesh istanziate separate, targhe e cerchi a razze.

**Modifiche a `car.js` (novembre 2026, scocche arrotondate):** la scocca non e' piu' un loft a
sezione rettangolare (`loft`, rimasto nel file ma non usato) ma `loftRound`: sezioni con spalle
arrotondate e fianco bombato, profilo lisciato con Catmull-Rom, muso e coda arrotondati anche in
pianta, normali lisce; abitacolo con raccordo arrotondato tra tetto e vetri e tetto in tinta che
lo avvolge; i dettagli di muso e coda del traffico si appoggiano alla superficie vera (`surfFor`).

**Licenza.** Il `package.json` del progetto originale dichiara `"license": "ISC"`. Il repository
non contiene un file LICENSE ne' un'intestazione di copyright: se il gioco viene distribuito
pubblicamente conviene chiedere conferma all'autore.

Testo della licenza ISC:

> Permission to use, copy, modify, and/or distribute this software for any purpose with or without
> fee is hereby granted, provided that the above copyright notice and this permission notice appear
> in all copies. THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
> REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS.
