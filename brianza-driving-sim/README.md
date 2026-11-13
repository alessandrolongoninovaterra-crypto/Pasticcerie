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

### Gamepad

Funziona qualsiasi gamepad riconosciuto dal browser (il browser lo rende visibile solo dopo la prima
pressione di un tasto). Con i controller "standard" (Xbox, PlayStation, Switch Pro riconosciuti come
tali) si gioca subito: stick sinistro sterzo / alettoni (indietro = cabra), RT/LT gas e freno (con
l'aereo: manetta su/giù), A freno a mano, B scendi/sali, Y visuale, X fari, LB riparti, View mappa,
Menu pausa, pressione dello stick sinistro clacson. Per i gamepad non standard c'è una mappatura di
base (riconosce da solo i grilletti montati come assi).

**Per cambiare i comandi**: menu iniziale o pausa (Esc) → **🎮 Gamepad** → *Configura i comandi*.
Il gioco chiede un comando alla volta (sterzo, acceleratore, freno, cabra, freno a mano, visuale,
scendi, mappa, clacson, fari, riparti, pausa): si muove lo stick o si preme il tasto voluto, oppure
si salta. Vanno bene assi, grilletti analogici e tasti. La configurazione si salva nel browser per
quel modello di gamepad; *Ripristina predefiniti* la cancella. Nella stessa finestra si vedono in
tempo reale i valori di assi e tasti.

### Caccia a reazione

Nel menu c'è anche un **caccia a reazione** biposto (modello originale, senza insegne) per gli
spostamenti veloci: parte in volo a 500 m e 580 km/h, arriva a circa 900 km/h a manetta piena e va
da Milano a Lecco in circa tre minuti. Comandi come l'aereo da turismo; oltre l'85% di manetta si
accende il postbruciatore (fiamma all'ugello). Senza comandi tiene la quota; rolla molto più in
fretta e si inclina fino a 80°, il carrello rientra sopra i 40 m. Decolla da terra a ~275 km/h
(serve un rettilineo lungo, per esempio la SS36) e atterra sotto i 340 km/h. Tetto: 4.500 m dal
suolo. La telecamera esterna segue il mezzo nel suo sistema di riferimento, quindi resta alla
stessa distanza anche a 900 km/h. In volo la minimappa usa la rete stradale completa (non solo le
tessere già caricate) e si allarga con velocità e quota (col caccia ~2 km attorno); il mondo si
carica davanti all'aereo, fino a 1,2 km più avanti della posizione.

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
- **Edifici in lontananza** (qualità media e alta): oltre il raggio degli edifici dettagliati i
  paesi si vedono come volumi semplici (un parallelepipedo orientato per edificio, con altezza e
  colore del tetto; `data/far/`, a blocchi di 4×4 km), fino a 5–7 km in volo e 3 km a
  terra. In quota la foschia si allontana, così dall'aereo si vedono i paesi vicini.
- **Gallerie**: la pipeline calcola il profilo di ogni galleria sull'intera catena di vie OSM (quota
  fissa agli imbocchi veri, mai sopra il terreno, pendenza massima 7%) e segna nella mappa dei
  colori, con un colore riservato, dove il terreno va aperto (copertura sotto i 7 m: imbocchi e
  sottopassi). Il gioco disegna volta e pareti lungo la strada, lampade al soffitto, portali in
  cemento agli imbocchi e, dove il tubo affiora, il guscio esterno; dentro, il sole si spegne, la
  foschia si scurisce e si accendono i fari (344 tratti, 299 gallerie, 619 imbocchi).
- **Strade lisce**: ogni via (tranne ponti e gallerie, che hanno un profilo proprio) ha un profilo
  di quota suo, campionato ogni 4 m dal terreno e lisciato con una media mobile su circa ±20 m;
  agli incroci tutte le vie passano per la stessa quota (gli estremi di ponti e gallerie restano
  fissi) e dove due vie si sovrappongono l'auto usa la media pesata delle due quote. La carreggiata
  è piana in senso trasversale. Il terreno sotto la strada è spianato e gli angoli delle celle da
  10 m che toccano la carreggiata sono abbassati, così il terreno non sporge sull'asfalto
  (sbancamento del versante, mai terrapieni). Profili e spianamento si calcolano una volta sola nella
  pipeline (`tools/bake.mjs`, con lo stesso codice del gioco). Risultato: 99,9% dei punti lisci
  lungo le vie (prima 95,8%), terreno sopra l'asfalto nello 0,03% dei punti (prima 2,2%); restano i
  raccordi delle rampe dei cavalcavia.
- **Chiese e grattacieli** (novembre 2026): le chiese hanno facciate in pietra con finestroni ad arco,
  vetrate, oculi e lesene, e colori da intonaco, pietra o mattone. Le cattedrali sono in marmo chiaro
  con terrazze di pietra e pinnacoli fitti lungo la gronda (le guglie del Duomo di Milano), le chiese
  medie hanno pinnacoli più radi. I campanili (anche quelli che il DBGT separa dalla chiesa come
  volume alto e stretto) hanno la cella campanaria con le aperture ad arco e la cuspide in rame o in
  coppi. Gli edifici oltre 38 m hanno facciate continue in vetro (Porta Nuova, CityLife) con le luci
  degli uffici di notte; i palazzi dai tre piani hanno il cornicione in aggetto.
- **Palazzi**: numero intero di piani per edificio (finestre allineate in alto e in basso), piano
  terra distinto (portoni, garage, ingressi vetrati), stili condominio con balconi e palazzina
  moderna oltre a casa con persiane e capannone, base dei muri più scura, file di coppi sui tetti a
  falde (da vicino).
- **Strade**: tinta dell'asfalto leggermente diversa da via a via, banchina di ghiaia che sfuma
  nell'erba sulle strade extraurbane senza marciapiede.
- **Cartelli dedotti** (dove OSM non li mappa): strada senza uscita all'imbocco dei vicoli ciechi,
  parcheggio dove una corsia di parcheggio si stacca dalla strada, curva pericolosa (svolta oltre
  ~32° in 45 m, fuori dai centri abitati), discesa ripida oltre il 9% (dalle quote reali),
  attenzione bambini davanti alle scuole.
- **Recinzioni dedotte**: lungo il perimetro delle aree che nella realtà sono quasi sempre recintate
  (scuole, cimiteri, campi sportivi, stadi, cabine elettriche, depuratori, parchi giochi, aree
  cani), con il varco dove passano strade e vialetti, senza attraversare edifici e senza
  raddoppiare muri e recinzioni già mappati (5.600 tratti da 3.200 aree).
- **Schermo sgombro**: la barra dei comandi compare per pochi secondi (all'avvio, cambiando
  veicolo, uscendo dalla pausa) e poi sparisce; le etichette dei luoghi mostrano solo le 7 più
  vicine, senza sovrapposizioni.
- **Prestazioni** (novembre 2026): curve delle strade con freccia di 12 cm (non 4), passo adattivo
  di asfalto e marciapiedi (10 m dove il terreno è regolare), segnaletica continua non spezzata,
  recinzioni senza facce nascoste e senza ombre, edifici dettagliati solo entro 1,5–2,2 km (oltre
  ci sono i volumi semplici), piano lontano della telecamera legato alla foschia. Strade ed edifici
  di una tessera si costruiscono a passi su più fotogrammi (niente scatti da 100 ms). **Qualità
  automatica**: sotto ~24 fps il gioco spegne prima le ombre e poi riduce la risoluzione di disegno
  (non sotto il 75%, per non sfocare l'immagine); risale sopra ~50 fps. Di notte, con il bagliore
  delle luci, l'immagine è disegnata con antialiasing a 4 campioni. Si disattiva con `index.html?auto=0`.
- **Laghi, fiumi e corsi d'acqua** (novembre 2026): il terreno è scavato sotto ogni specchio d'acqua,
  così la riva coincide con il bordo dell'acqua, e una fascia di sponda ne segna il confine (prima il
  blu della mappa dei colori sbordava sul terreno). I laghi hanno un livello unico; fiumi e canali
  disegnati come area (Adda, Lambro, Navigli) scendono con le rive: ogni vertice prende la quota più
  bassa delle sponde entro 45 m. I corsi d'acqua disegnati come linea (Seveso, Molgora, rogge, canali)
  sono nastri d'acqua veri con un profilo che non risale mai verso valle; da 4 m di larghezza in su
  hanno il letto scavato, i ruscelli seguono il terreno; lungo le sponde l'erba è più verde e ci sono
  più alberi. Anche gli stagni dai 150 m² hanno l'acqua (accorpati per blocchi da 4 km: una mesh per
  blocco). Pontili in legno su pali dove OSM li mappa (`man_made=pier`).
- **Aspetto**: acqua dei laghi con onde animate e riflesso del cielo, roccia sui pendii oltre ~45°,
  luce riflessa dal suolo sulle facciate in ombra.
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
- **Caricamento a blocchi** (novembre 2026): anche terreno, colori del suolo e strade arrivano a
  tessere, solo attorno al giocatore. All'avvio si caricano soltanto l'indice, una panoramica del
  terreno a bassa risoluzione (orizzonte e ripiego dove una tessera non c'è ancora) e la rete del
  navigatore, quindi la dimensione della mappa non pesa più su avvio e memoria. Vedi
  [Struttura dei dati](#struttura-dei-dati).

## Edifici, altimetria e dettagli dal DBGT di Regione Lombardia (facoltativo)

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
     del gioco), scegli lo zip del DBGT e scarica i file ridotti con edifici, altimetria e dettagli
     dell'ambiente dell'area del gioco, ognuno sotto i 28 MB. Funziona nel browser (Chrome, Edge, Firefox), senza inviare il
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

### Dettagli dell'ambiente dal DBGT

Oltre a edifici e altimetria, riduttore e pipeline tengono i livelli che descrivono l'ambiente
attorno agli edifici (codici del Catalogo dei dati territoriali, D.M. 10/11/2011):

| Classe DBGT | Nel gioco |
|---|---|
| `ALBERO` alberi isolati | alberi (gli alberi OSM entro 3 m vengono tolti; quelli messi a caso in giardini e parchi si riducono) |
| `FIL_AL` filari | filari di alberi; le siepi diventano siepi |
| `EL_DIV` elementi divisori | cancellate su muretto, reti, staccionate, siepi, muri di cinta; tagliati dove passa una strada; tolgono le recinzioni OSM doppie e quelle dedotte |
| `MU_SOS` muri di sostegno | muri lungo la linea mediana del poligono |
| `AC_VEI`, `AC_PED`, `AC_CIC` | asfalto, pavimentazione pedonale, ciclabili nella mappa dei colori del terreno |
| `AATT` aree attrezzate | cortili, corti, aie, vialetti (pavimentati: l'auto tiene come su strada) |
| `AR_VRD` aree verdi | giardini, prati, aiuole, siepi |
| `ATTR_SP` attrezzature sportive | piscine, campi da calcio, tennis in terra rossa, piste |
| `MAN_TR` manufatti di trasporto | isole di traffico e spartitraffico |
| `MN_IND` manufatti industriali | cabine elettriche, silos e serbatoi (altezza dal diametro), ciminiere, serre; vasche e pannelli solari come superfici |
| `PALO` pali | lampioni (illuminazione pubblica) e pali delle linee elettriche e telefoniche |

Box, tettoie e baracche (`EDI_MIN`) sono già tra le unità volumetriche. Esempio, Cabiate (3,2 km²):
8.370 alberi, 5.923 recinzioni e muri, 2.552 cortili, 3.393 aree verdi; il file compatto passa da
0,35 a 0,65 MB.
Con Monza e Brianza, Como e Lecco complete (189 comuni): 908.000 alberi, 781.000 recinzioni e
muri, 48.500 muri di sostegno, oltre 300.000 cortili e 330.000 aree verdi; prima di Lecco: 607.000
alberi, 635.000 recinzioni e muri, 12.000 manufatti, 52.000 lampioni e 14.000 pali di linea.
Solo la provincia di Monza e Brianza (parte nella mappa): 440.000 alberi, 385.000 recinzioni e muri,
180.000 cortili, 158.000 aree verdi, 68.000 carreggiate, 30.000 aree pedonali, 6.900 manufatti,
35.000 pali; i file compatti passano da 14 a 49 MB (tre parti). Per non appesantire la grafica gli
alberi oltre ~650 m hanno una chioma semplificata e muri e recinzioni oltre ~1,1 km non si
disegnano.

La pipeline tiene i dati in forma compatta: legge i file DBGT un record alla volta, conserva quote e
dettagli in tabelle di numeri invece che come oggetti singoli, disegna la mappa dei colori
direttamente con la tavolozza fissa della copertura del suolo (un byte per pixel) e calcola
l'ingombro degli ostacoli solo dove serve; la correzione dell'altimetria (20 milioni di quote, quasi
tutte dalle curve di livello) lavora a blocchi. Con Monza e Brianza, Como e Lecco complete il
picco di memoria è ~9,1 GB (7,7 GB senza Lecco; prima oltre 11 GB solo con Monza e Brianza), con risultati identici byte per
byte; i passaggi pesanti stampano `[memoria]` con il picco raggiunto.

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

**Area della mappa** (novembre 2026): i 15 comuni principali più un rettangolo da Milano a Bellagio
(lat 45,44–45,99, lon 9,06–9,415, circa 1.700 km² in 1.707 tessere da 1 km): a sud Milano fino alla
Darsena e all'inizio dei Navigli, con tutto il centro e il nord (Porta Ticinese, Duomo, Porta Nuova,
Città Studi, Bicocca), Sesto, Cinisello, Rho e Monza; poi la Brianza, i laghi brianzoli, il lago di
Como con il ramo di Como e quello di Lecco fino a Bellagio, il triangolo lariano, i Corni di Canzo,
il San Martino e la Grigna sul bordo. Edifici e altimetria DBGT in 226 comuni (province di Monza e
Brianza, Como, Lecco e Milano per la parte nella mappa), anche a Milano e Monza: 955.000 volumi,
1,55 milioni di alberi, 1,25 milioni di recinzioni e muri. La pipeline con tutti i pacchetti
arriva a un picco di ~11,3 GB. Sulle pareti di
roccia la griglia da 10 m non segue i salti verticali: le curve di livello lì si discostano anche
di decine di metri e vengono scartate dalla correzione. La mappa dei colori del terreno è a 4 m
per pixel (6.890 × 11.188 in tutto), consegnata al gioco a tessere da 1 km. Le curve di livello vengono semplificate (1,5 m in pianta) dal
riduttore Python.

L'altimetria è importata per le **province di Monza e Brianza e di Como** (e Cabiate dal pacchetto
comunale; della provincia di Milano nella mappa cade solo la parte nord di Paderno Dugnano, importata): circa 2,9 milioni di punti a terra (punti quotati e vertici delle curve di livello),
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
(altimetria), `build_data.py` (strade, edifici a tessere, copertura del suolo, POI, nella cartella
di stadio `.work/stage`), `bake.mjs` (taglio a tessere per il gioco, vedi sotto).
Per altre regioni cambia `source_pbf_url` con un altro estratto OSM. Con i pacchetti DBGT completi di
Monza e Brianza, Como e Lecco servono circa 9–10 GB di memoria.

## Struttura dei dati

Il gioco carica solo quello che serve attorno al giocatore; nessun file cresce con l'area tranne
l'indice e la rete del navigatore, entrambi piccoli.

| File | Contenuto | Quando si carica |
|---|---|---|
| `data/meta.js` | proiezione, comuni, località, punti di interesse, laghi, fiumi, elenco dei blocchi | all'avvio |
| `data/overview.js` | quote ogni 40 m e colori del suolo ogni 32 m (orizzonte, ripiego) | all'avvio |
| `data/net.js` | strade carrabili semplificate (navigatore, mappa completa, ricerca vie) | all'avvio |
| `data/ground/g_i_j.js` | per tessera da 1 km: quote ogni 10 m (già spianate sotto le strade), colori del suolo ogni 4 m, strade che la toccano con curve, larghezze, limiti e profilo di quota già calcolati, ferrovie, rotatorie | anello attorno al giocatore (raggio di vista + 1 tessera) |
| `data/tiles/t_i_j.js` | edifici, alberi, arredo, cancelli, recinzioni | tessere entro il raggio di vista |
| `data/far/f_I_J.js` | edifici semplificati per la vista da lontano, blocchi 4×4 km | entro 3–7 km |

Le strade di una tessera includono intere tutte le vie che la toccano: costruendo una tessera
quando le otto vicine sono caricate, ogni incrocio, marciapiede e cartello trova tutte le sue vie.
Una via condivisa tra tessere si aggiunge una volta sola (id globale); le vie restano in memoria
anche lasciando la zona (pochi MB per centinaia di km di strade), mentre quote, colori e mesh
vengono liberati. Il terreno lontano (orizzonte, fino a 11 km) si costruisce a pezzi da 2 km
dalla panoramica, sempre un po' sotto quello vicino.

Misure (CPU rallentata 4×): con la mappa da 1.240 km² l'avvio fino al menu è sceso da 10,0 s a
3,9 s e la memoria JavaScript da ~450 MB a 167 MB al menu. Con la mappa fino a Milano (1.700 km²,
il doppio delle strade: 154.000 vie) l'avvio è di 3,8 s e la memoria al menu di 212 MB: la rete del
navigatore si costruisce senza tabelle di id e il grafo del percorso in due passate su array compatti.

`tools/bake.mjs` usa `src/roadprep.js` (curve morbide, rotatorie, profili di quota, spianamento:
lo stesso codice che prima girava nel browser all'avvio) e scrive i file sopra. Per mappe molto
più grandi (tutta la Lombardia) il collo di bottiglia diventa la pipeline Python, che tiene ancora
tutta l'area in memoria; il gioco invece non cambia.

## Sviluppo

```bash
npm install
npm run build     # src/*.js -> dist/game.js
npm run watch
```

| File | Ruolo |
|---|---|
| `src/data.js` | caricamento dati compressi (funziona anche da file://), proiezione |
| `src/terrain.js` | altimetria e copertura del suolo a tessere, panoramica, mesh del terreno |
| `src/roads.js` | rete stradale caricata a tessere (e rete del navigatore), corsie, quote/ponti, marciapiedi, segnaletica orizzontale, percorsi, muri |
| `src/roadprep.js` | preparazione della rete completa (solo per `tools/bake.mjs`) |
| `tools/bake.mjs` | taglio dei dati a tessere per il gioco |
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
