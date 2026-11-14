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

**Licenza.** Il `package.json` del progetto originale dichiara `"license": "ISC"`. Il repository
non contiene un file LICENSE ne' un'intestazione di copyright: se il gioco viene distribuito
pubblicamente conviene chiedere conferma all'autore.

Testo della licenza ISC:

> Permission to use, copy, modify, and/or distribute this software for any purpose with or without
> fee is hereby granted, provided that the above copyright notice and this permission notice appear
> in all copies. THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
> REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS.
