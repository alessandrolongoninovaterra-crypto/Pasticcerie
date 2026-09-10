# Pasticcerie

Strumenti per cercare e mappare le attività artigianali/commerciali di
panetteria, pasticceria, gelateria e confetteria in Italia, corrispondenti
ai codici ATECO:

| Codice ATECO | Descrizione |
|---|---|
| 10.71.10 | Produzione di pane e prodotti di panetteria simili |
| 10.71.20 | Produzione di prodotti di pasticceria freschi |
| 10.72.00 | Fette biscottate, biscotti, prodotti di pasticceria conservati |
| 10.52.00 | Produzione di gelati |
| 56.11.21 | Gelaterie con servizio al tavolo |
| 56.11.22 | Gelaterie senza servizio al tavolo / asporto |
| 56.11.2 | Attività di gelaterie e pasticcerie |
| 10.82.00 | Produzione di cacao, cioccolato, caramelle e confetterie |
| 10.73.01 | Produzione di prodotti farinacei freschi |
| 10.73.02 | Produzione di prodotti farinacei conservati |
| 10.89.09 | Produzione di altri prodotti alimentari vari n.c.a. |

## Fonte dati

I dati ufficiali per codice ATECO (denominazione, P.IVA/codice fiscale,
indirizzo) si trovano nel **Registro Imprese / servizio Telemaco di
InfoCamere**, che però è a pagamento e richiede un contratto/account.

In assenza di un account Telemaco, questi script usano **OpenStreetMap**
(via Overpass API, gratuita e senza chiave) per ottenere nome, categoria,
indirizzo e coordinate GPS delle attività — sufficienti per costruire una
mappa consultabile. OSM **non** fornisce P.IVA/codice fiscale/codice ATECO
ufficiale: se in futuro sarà disponibile un account Telemaco, lo stesso
schema di output (CSV/GeoJSON) può essere prodotto integrando quei dati.

## Utilizzo

```bash
# 1. Scarica i dati da OpenStreetMap in tutta Italia
python3 scripts/fetch_pasticcerie_osm.py

# 2. Genera la mappa interattiva HTML (Leaflet + clustering)
python3 scripts/build_map.py
# -> scripts/out/mappa_pasticcerie.html
```

I file generati:

- `data/pasticcerie_italia.csv` — elenco tabellare (nome, categoria,
  indirizzo, CAP, comune, provincia, telefono, sito web, lat/lon)
- `data/pasticcerie_italia.geojson` — stesso elenco in formato GeoJSON
- `scripts/out/mappa_pasticcerie.html` — mappa interattiva con filtro per
  categoria e ricerca testuale
