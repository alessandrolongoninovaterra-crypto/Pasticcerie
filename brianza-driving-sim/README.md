# Brianza Driving Simulator — Real World Open World

Simulatore di guida open world nel browser, ambientato nella **Brianza reale**:
strade, incroci, rotatorie, sensi unici, ponti, edifici, boschi, laghi e confini
comunali provengono da **OpenStreetMap**; salite e discese da un **modello
altimetrico reale**. Nessuna strada è generata a caso.

Motore grafico: **Three.js (WebGL)**, impacchettato in un unico file con esbuild.

Comuni inclusi: Giussano · Meda · Seregno · Mariano Comense · Carate Brianza ·
Besana in Brianza · Verano Brianza · Arosio · Inverigo · Briosco · Desio · Lissone ·
Albiate · Veduggio con Colzano · Renate (+ i comuni confinanti dentro l'area,
fino al Lago di Alserio).

## Come si gioca

**Apri `index.html` con doppio clic** (Chrome, Edge o Firefox recenti): non serve
un server né una connessione internet, i dati sono già inclusi in `data/`.
In alternativa: `python3 -m http.server 8080` e apri <http://localhost:8080>.

1. Scegli l'auto (6 modelli con dati tecnici diversi).
2. Scegli la partenza: predefinita **Giussano – Via Arturo Toscanini 22A**,
   oppure Via Milano, il centro di qualunque comune, o un punto qualsiasi sulla mappa.
3. Guida liberamente; premi **M** per la mappa, cerca un paese/via/chiesa/stazione
   e imposta la destinazione: il navigatore calcola il percorso sulla rete reale
   (rispettando i sensi unici) e dà le indicazioni, anche vocali.

> Il civico 22A non è presente in OpenStreetMap: la partenza è a metà di Via Arturo
> Toscanini (Giussano). Per un punto esatto apri
> `index.html?lat=45.68210&lon=9.21141` con le tue coordinate, oppure aggiungi
> in `index.html`, prima di `dist/game.js`:
> `<script>window.BDS_START = { lat: 45.68210, lon: 9.21141 };</script>`

### Comandi

| Tasto | Azione |
|---|---|
| W / ↑ | acceleratore (Shift = parziale) |
| S / ↓ | freno; tenuto da fermo inserisce la retromarcia |
| A D / ← → | sterzo |
| Spazio | freno a mano |
| C | visuale: esterna / abitacolo / cofano / esterna lontana |
| V | guarda indietro |
| M | mappa completa, ricerca, destinazione, teletrasporto |
| N | mostra/nasconde la minimappa |
| H | fari (si accendono da soli di notte) |
| R | rimetti l'auto sulla strada più vicina |
| T, + / - | velocità del tempo, cambia ora |
| K | nomi dei punti di riferimento |
| Esc | pausa: traffico, tempo, voce, audio, **configurazione volante** |

Gamepad: grilletti RT/LT, stick sinistro, A freno a mano, Y visuale.
Volanti e pedaliere (Logitech, Thrustmaster, Fanatec…) via Gamepad API: in pausa
scegli gli assi di sterzo/acceleratore/freno (vengono mostrati in tempo reale).

## Cosa c'è (fasi 1–6)

- **Mappa reale**: 33.421 vie OSM (nome, classe, limite, sensi unici, corsie, ponti,
  gallerie), 108.774 edifici con impronta reale e altezza da `height`/`building:levels`
  (o stimata per tipologia), 149 cavalcavia ricostruiti con rampe al 6%, rotatorie con
  isola centrale, ferrovie, laghi (Alserio, Pusiano, Montorfano), fiumi (Lambro, Seveso…),
  boschi/prati/campi/aree urbane dalla copertura del suolo, 1.339 punti di interesse.
- **Strade aderenti a OpenStreetMap**:
  - curve morbide: spline che passa esattamente per i nodi OSM, usata anche da fisica,
    traffico e navigatore;
  - larghezza e corsie dai tag `width`, `lanes`, `lanes:forward/backward`;
  - frecce di corsia da `turn:lanes`; pavé/porfido da `surface`; sterrati;
  - marciapiedi da `sidewalk=*` (o stimati nelle aree edificate), interrotti agli incroci;
  - percorsi pedonali, ciclabili, sentieri e marciapiedi mappati a parte (`footway`,
    `cycleway`, `path`), piazze pedonali;
  - muri di cinta, siepi, muri di sostegno e guardrail (`barrier=*`), elettrodotti con
    tralicci (`power=line`), piazzole di manovra, mini-rotatorie, dossi e attraversamenti rialzati.
- **Altimetria reale** su griglia di 20 m (Terrarium/AWS, da SRTM ed EU-DEM): 160–530 m s.l.m.
- **Guida**: modello a bicicletta con pneumatici a saturazione, cerchio d'attrito,
  trasferimento di carico, curva di coppia, cambio automatico, freno motore, pendenze,
  aderenza ridotta su sterrato/erba, ESC leggero; collisioni con edifici, muri, alberi,
  isole delle rotatorie e veicoli. Visuale esterna e abitacolo con volante e quadro strumenti.
- **Segnaletica italiana dai dati OSM**:
  - orizzontale: margini, mezzeria (continua vicino agli incroci, doppia a 4 corsie),
    corsie, strisce zebrate (`highway=crossing`, non quelle `unmarked`), linee di arresto,
    scritta STOP, triangoli di precedenza, frecce;
  - semafori funzionanti, STOP e dare precedenza nel verso indicato dal tag `direction`;
  - rotatorie: dare precedenza + segnale di rotatoria a ogni ingresso;
  - senso unico all'ingresso e senso vietato all'uscita delle vie `oneway`;
  - attraversamento pedonale, dosso, passaggio a livello con sbarre, autovelox;
  - limiti di velocità dove `maxspeed` cambia;
  - **targhe con il nome della via** a ogni incrocio;
  - inizio/fine centro abitato: dai nodi `traffic_sign=city_limit` e ai confini comunali reali;
  - tabelle di direzione agli svincoli dal tag `destination`; identificazione strada (SP/SS) da `ref`;
  - frecce di direzione alle uscite delle rotatorie: indicano il primo comune o la prima
    località che si raggiunge davvero seguendo quella strada (calcolato sulla rete);
  - fermate bus con pensilina e nome, distributori, lampioni (`lit=yes`, `highway=street_lamp`).
- **Ambiente**: edifici con intonaci lombardi, persiane, tetti in coppi con gronda
  (a capanna, a padiglione, a falde su piante irregolari), comignoli, capannoni; alberi
  da OSM e dai boschi reali (latifoglie, conifere, filari); cielo con nuvole, ciclo
  giorno/notte con sole calcolato per la latitudine della Brianza, stelle, finestre
  illuminate, aloni di luce dei lampioni, fari.
- **Traffico AI** sulla rete reale: rispetta sensi unici, limiti, semafori e distanze (IDM).
- **Interfaccia**: minimappa stile navigatore orientata con la marcia, tachimetro e
  contagiri, nome della via e del comune/frazione, coordinate GPS e quota, limite
  di velocità (reale o indicativo), indicazioni di svolta e rotatorie con distanza ed ETA.
- **Prestazioni**: tessere di 1 km caricate/scaricate in streaming attorno all'auto,
  geometrie unite per materiale, atlanti di texture per i cartelli, alberi e lampioni
  instanziati, tre livelli di qualità.

## Ampliare la mappa (fase 4)

Aggiungi i comuni a `tools/config.json` (nome come in OSM) e rigenera i dati:

```bash
pip install -r requirements.txt
tools/run_pipeline.sh          # scarica l'estratto Lombardia, ritaglia, genera data/
```

La pipeline: `extract_bbox.py` (confini comunali → ritaglio), `build_elevation.py`
(altimetria), `build_data.py` (strade, edifici a tessere, copertura del suolo, POI).
Per altre regioni cambia `source_pbf_url` con un altro estratto OSM.

## Sviluppo

```bash
npm install
npm run build     # src/*.js -> dist/game.js
npm run watch
```

| File | Ruolo |
|---|---|
| `src/data.js` | caricamento dati compressi (funziona anche da file://), proiezione |
| `src/terrain.js` | altimetria, copertura del suolo, mesh del terreno |
| `src/roads.js` | rete stradale, curve, corsie, quote/ponti, marciapiedi, segnaletica orizzontale, percorsi, muri |
| `src/buildings.js` | edifici estrusi, facciate, tetti |
| `src/signs.js` | atlante dei segnali italiani, semafori, cartelli da OSM, indicazioni, lampioni |
| `src/vegetation.js` | alberi |
| `src/vehicle.js` / `src/cars.js` | fisica e modelli delle auto |
| `src/traffic.js` | traffico AI |
| `src/router.js` | navigatore (A*) e indicazioni |
| `src/maps.js` | minimappa e mappa completa |
| `src/world.js` | streaming delle tessere, laghi, etichette |
| `src/sky.js` | ciclo giorno/notte |
| `src/main.js` | menu, HUD, telecamere, ciclo di gioco |

## Licenze dei dati

- Cartografia © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), ODbL.
- Altimetria: Terrarium tiles (Mapzen / AWS Open Data Registry; fonti SRTM, EU-DEM e altre).
