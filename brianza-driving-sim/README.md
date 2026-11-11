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

1. Scegli l'auto (6 modelli con dati tecnici diversi) oppure l'**aereo da turismo** (vedi sotto).
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

### Aereo da turismo

L'ultima scelta del menu è un piccolo monomotore ad ala alta (modello originale, non riproduce un
aereo reale). Parte in volo a 250 m sopra il punto di partenza scelto; si può atterrare su un prato
o su una strada dritta, scendere (F), e ridecollare.

| Tasto | Aereo |
|---|---|
| **W / S** | manetta su / giù (resta dove la lasci) |
| **↑ / ↓** | cabra / picchia |
| **A / D** (o ← / →) | inclina e vira |
| **Spazio** | freni a terra |
| **R** | di nuovo in volo a 250 m |
| **C** | visuale esterna / abitacolo / sopra l'ala / lontana |
| Gamepad | stick sinistro (alettoni e cabra/picchia), grilletti per la manetta |

Fisica: spinta dell'elica che cala con la velocità, resistenza parassita e indotta, stallo sotto
~72 km/h (il muso cade), virate coordinate, trim automatico che a motore ridotto mantiene ~90 km/h
in planata (circa 8:1). Decollo dopo ~8 s di corsa a ~90 km/h; salita fino a ~5 m/s. Atterraggio:
velocità di discesa sotto 4 m/s, ali quasi orizzontali e muso non in picchiata, altrimenti è uno
schianto e si riparte in volo. Edifici, alberi e tralicci hanno la loro altezza: ci si schianta solo
se si passa più in basso della loro sommità. In volo traffico, pedoni, autovelox e cancelli ignorano
l'aereo e il navigatore indica la destinazione in linea d'aria.

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
| F | scendi dall'auto / sali sul veicolo più vicino |
| E | clacson |
| mouse (trascina) | ruota la telecamera |
| R | rimetti l'auto sulla strada più vicina |
| T, + / - | velocità del tempo, cambia ora |
| K | nomi dei punti di riferimento |
| Esc | pausa: traffico, tempo, voce, audio, **configurazione volante** |

Gamepad: grilletti RT/LT, stick sinistro, A freno a mano, Y visuale.
Volanti e pedaliere (Logitech, Thrustmaster, Fanatec…) via Gamepad API: in pausa
scegli gli assi di sterzo/acceleratore/freno (vengono mostrati in tempo reale).

## Stile open world

- **Pedoni** sui marciapiedi delle strade reali e nelle vie pedonali: svoltano agli incroci,
  attraversano sulle strisce quando non arrivano auto, si scansano se un'auto punta verso di loro
  o se suoni il clacson. Se li urti cadono e poi si rialzano (e scatta la multa).
- **A piedi**: `F` per scendere dall'auto e camminare (`Shift` per correre); `F` vicino a un altro
  veicolo per salirci: auto del traffico ferme, auto parcheggiate, perfino gli autobus di linea.
- **Auto parcheggiate negli stalli reali** (117.000 posti calcolati dalla pipeline):
  stalli mappati uno per uno (`amenity=parking_space`), file a pettine lungo le corsie interne
  (`service=parking_aisle`, ora percorribili), soste lungo strada in linea / a pettine / a spina
  secondo `orientation`, piazzali con file e corsie. Rispettano `capacity`, evitano edifici,
  strade e alberi; le righe degli stalli sono disegnate a terra e ogni parcheggio ha un suo
  grado di riempimento (55–95%).
- **Traffico**: auto, familiari, furgoni e autobus; danno la precedenza in rotatoria e nelle
  immissioni, si fermano per i pedoni e per il giocatore a piedi.
- **Patente a punti**: autovelox reali (nodi `highway=speed_camera`), semafori rossi e pedoni
  urtati costano multe e punti; a zero punti la patente viene sospesa e si riparte da 20.
- **Arredo urbano reale**: panchine, cestini, paletti, idranti, rastrelliere e fontanelle dove
  OSM li mappa.
- **Telecamera**: trascina con il mouse per ruotarla attorno all'auto o al personaggio.
- **Resa**: tone mapping filmico e alone delle luci di notte.

### Crediti per la grafica importata

I modelli di **veicoli**, **pedoni** (figura articolata, camminata, caduta) e **arredo urbano**
vengono dal progetto [donmutti/city](https://github.com/donmutti/city) e stanno in
`src/vendor/city/` con l'elenco delle modifiche in `NOTICE.md`. Il `package.json` di quel
progetto dichiara licenza **ISC**, ma il repository non ha un file LICENSE: prima di una
distribuzione pubblica conviene chiedere conferma all'autore. Tutto il resto (mappa, strade,
segnaletica, edifici, fisica, navigatore, comportamento di pedoni e traffico) è di questo progetto.

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
    tralicci (`power=line`), piazzole di manovra, mini-rotatorie, dossi e attraversamenti rialzati;
  - recinzioni (`barrier=fence`: cancellata su muretto, rete, staccionata, ringhiera) e
    **cancelli** (`barrier=gate`, `swing_gate`, `sliding_gate`, `lift_gate`, `chain`) orientati
    sulla via che li attraversa, con il varco nel muro o nella recinzione. I cancelli dei passi
    carrai, delle strade private e dei campi sono chiusi (non si passa e il navigatore li evita);
    sbarre e cancelli privati sulle strade pubbliche si aprono da soli quando arriva un veicolo;
    gli altri sono aperti.
- **Altimetria reale**: griglia di 20 m (Terrarium/AWS, da SRTM ed EU-DEM, 160–530 m s.l.m.);
  dove c'è l'altimetria del DBGT la griglia passa a 10 m ed è corretta sui dati misurati (vedi sotto).
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

## Edifici dal DBGT di Regione Lombardia (facoltativo)

Il **DBGT** (Database Geo-Topografico) della Regione contiene le forme degli edifici rilevate
dalla cartografia comunale e, per ogni porzione di edificio di altezza omogenea ("unità
volumetrica"), l'**altezza misurata**. Se lo fornisci alla pipeline, nei comuni coperti le forme
e le altezze degli edifici vengono dal DBGT invece che da OpenStreetMap; tipologia, nomi e
colori restano quelli di OSM.

1. Registrati gratuitamente sul [Geoportale della Lombardia](https://www.geoportale.regione.lombardia.it/download-dati),
   fai l'accesso, cerca nel catalogo il *Database Geo-Topografico* e scarica il pacchetto di
   ciascun comune che ti interessa.
2. Hai due possibilità:
   - metti gli zip così come sono (anche il pacchetto provinciale da oltre 1 GB) in
     `brianza-driving-sim/dbgt/` (cartella esclusa da git): la pipeline legge l'intestazione dei
     file dentro lo zip ed estrae solo i livelli degli edifici;
   - oppure, **senza installare nulla**, apri con doppio clic `riduci-dbgt.html` (nella cartella
     del gioco), scegli lo zip del DBGT e scarica i file ridotti con edifici e altimetria dell'area
     del gioco, ognuno sotto i 28 MB. Funziona nel browser (Chrome, Edge, Firefox), senza inviare il
     file da nessuna parte; anche il pacchetto provinciale da oltre 1 GB va bene;
     se la pagina viene aperta da sola (senza la cartella `data/` accanto) ritaglia comunque,
     sull'area predefinita del gioco;
   - oppure fai la stessa riduzione da riga di comando, se hai Python:
     `python3 tools/dbgt_solo_edifici.py pacchetto.zip DBGT_MB` (su Windows `py` al posto di
     `python3`). Usa solo la libreria standard di Python, ritaglia sull'area del gioco e scrive
     uno o più file `DBGT_MB_N.dbgt.json.gz` sotto i 28 MB ciascuno. Con i ~110.000 edifici
     dell'area attuale si ottengono pochi MB: si possono conservare, inviare o mettere in `dbgt/`.

   Il pacchetto di Monza e Brianza non comprende i comuni in provincia di Como (Mariano Comense,
   Arosio, Inverigo): lì restano gli edifici OSM, a meno di aggiungere anche il pacchetto di Como.
3. Rigenera i dati: `tools/run_pipeline.sh` (oppure solo `build_data.py`).

I pacchetti del Geoportale sono **GeoPackage** (`dbgt.gpkg`, un database SQLite): gli edifici
sono nella tabella `UN_VOL`, in coordinate RDN2008 / UTM 32N (EPSG 7791). Sono supportati anche
gli shapefile. La pipeline riconosce i livelli dai nomi dei campi (`UN_VOL_AV` per le unità volumetriche,
`CR_EDF_*` / `EDIFC_USO` per i corpi edificati), legge il sistema di riferimento dal `.prj` e
stampa un riepilogo: comuni coperti, edifici OSM sostituiti, volumi aggiunti. Un
comune viene sostituito solo se la maggior parte dei suoi edifici OSM trova un volume DBGT, così
i pacchetti dei comuni vicini non lasciano buchi ai confini. I crediti compaiono nel menu.

I volumi contenuti per oltre l'80% in un volume più alto (porzioni interne) vengono scartati.
Nel repository sono conservati solo i file ridotti `dbgt/*.dbgt.json.gz` (gli zip originali sono
esclusi da git). Comuni già importati: tutta la parte delle **province di Monza e Brianza e di Como**
dentro l'area del gioco (57 comuni, tra cui Giussano, Seregno, Meda, Desio, Lissone, Carate, Besana,
Verano, Briosco, Albiate, Renate, Veduggio, Monza, Mariano Comense, Arosio, Inverigo, Cabiate):
circa 240.000 volumi al posto di 101.000 edifici OSM. Restano con gli edifici OSM i comuni in
provincia di Lecco e quelli coperti solo in parte dall'area del gioco o dal pacchetto (Como, Casatenovo,
Paderno Dugnano).

Quando lo stesso comune compare in più pacchetti (per esempio Cabiate nel pacchetto comunale e in
quello provinciale di Como, di aggiornamento diverso) si usa un solo pacchetto per comune, quello con
più volumi in quel comune, per evitare edifici doppi.

Controlli di qualità applicati ai dati: le porzioni di tipo 08 senza altezza (piccole e quasi mai
corrispondenti a edifici reali) vengono scartate; le altezze non plausibili per l'impronta (per
esempio 212 m su 13 m²) vengono considerate mancanti e stimate dalla tipologia.

### Altimetria dal DBGT

Il DBGT contiene anche l'altimetria rilevata: punti quotati (`PT_QUO`), curve di livello
(`CV_LIV`), assi stradali con la quota (`EL_STR`) e la quota del piede di ogni edificio (la Z delle
unità volumetriche). La pagina `riduci-dbgt.html` e `tools/dbgt_solo_edifici.py` li conservano
insieme agli edifici (i punti quotati in gronda, `PT_QUO_SED = 0302`, vengono scartati perché non
sono il terreno). Se ci sono, la pipeline:

1. porta la griglia del terreno da 20 a 10 m e la corregge sui punti misurati (convoluzione
   normalizzata: prima su ~40 m, poi ripetuta su ~14 m); lontano dai dati resta il modello satellitare;
2. dà ai nodi delle strade OSM a raso la quota dell'asse DBGT più vicino e parallelo e porta il
   terreno sotto la strada a quella quota (trincee, rilevati, rampe); ponti e gallerie sono esclusi;
3. verifica il risultato sul 5% dei punti quotati tenuti da parte e stampa l'errore prima e dopo.

L'altimetria è importata per le **province di Monza e Brianza e di Como** (e Cabiate dal pacchetto
comunale): circa 2,9 milioni di punti a terra (punti quotati e vertici delle curve di livello),
250.000 piedi di edifici e 770.000 campioni lungo gli assi stradali; 111.000 nodi stradali hanno la
quota reale. Sui punti di verifica (146.000, dentro la mappa) l'errore medio del terreno passa da
3,9 m a 0,6 m (95% dei punti: da 12,8 a 2,2 m). Le correzioni più grandi sono nelle valli (Lambro
tra Triuggio e Albiate: fino a 38 m), che il modello satellitare riempiva. Le curve di livello
concordano con i punti quotati (scarto mediano 2 cm).

Dati scartati come errori: quote sotto i 50 m s.l.m. (nel pacchetto di Como ~2.700 punti quotati
con valori di 2–4 m, quote relative e non sul livello del mare), quote che si discostano più di
15 m da quelle vicine (~2.900 su 3,8 milioni) e nodi stradali a più di 12 m dal terreno corretto.
Manca ancora la provincia di Lecco.

I pacchetti provinciali ridotti senza ritaglio (tutta la provincia) si possono ritagliare
sull'area del gioco ripassandoli in `tools/dbgt_solo_edifici.py`, che legge anche i file compatti:
`python3 tools/dbgt_solo_edifici.py cartella_con_le_parti DBGT_PROV_COMO`.

**Licenza:** il Geoportale pubblica i dati con licenze diverse per prodotto (CC-BY 4.0, IODL 2.0
o altre): controlla quella indicata nella pagina di download del DBGT prima di distribuire il gioco.

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
| `src/traffic.js` | traffico AI, precedenze, auto parcheggiate |
| `src/pedestrians.js` | comportamento dei pedoni |
| `src/vendor/city/` | modelli di veicoli, pedoni e arredo urbano (da donmutti/city) |
| `src/router.js` | navigatore (A*) e indicazioni |
| `src/maps.js` | minimappa e mappa completa |
| `src/world.js` | streaming delle tessere, laghi, etichette |
| `src/sky.js` | ciclo giorno/notte |
| `src/main.js` | menu, HUD, telecamere, ciclo di gioco |
| `tools/dbgt.py` | lettura dei pacchetti DBGT di Regione Lombardia |
| `tools/dbgt_solo_edifici.py` | riduce un pacchetto DBGT a file compatti (< 28 MB) con edifici e altimetria dell'area |
| `src/gates.js` | cancelli, sbarre e recinzioni |
| `src/plane.js` | aereo da turismo: modello, fisica di volo, strumenti |

## Licenze dei dati

- Cartografia © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), ODbL.
- Altimetria: Terrarium tiles (Mapzen / AWS Open Data Registry; fonti SRTM, EU-DEM e altre).
