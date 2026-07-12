# Alberto Cavedon — Archivio sommerso

Sito editoriale statico dedicato all’attività speleosubacquea di Alberto Cavedon.

## Principi

- fatti verificati separati dalle voci ancora in revisione;
- fonti pubbliche collegate a ogni scheda d’archivio;
- nessuna fotografia stock presentata come documentazione reale;
- nessun modulo o newsletter che simuli un invio inesistente;
- HTML/CSS nativo, JavaScript solo per menu, filtri e orientamento;
- navigazione da tastiera, contrasto WCAG AA e movimento ridotto.

## Struttura

- `src/data/archive.ts` — storie, stato di verifica e fonti;
- `src/components/ArchiveStory.astro` — template delle schede;
- `src/layouts/Layout.astro` — navigazione, metadati e footer;
- `src/styles/global.css` — sistema visivo globale;
- `public/images/` — asset locali ottimizzati.

## Sviluppo

Richiede Node.js 22.12 o successivo.

```sh
npm install
npm run dev
npm run build
```

La build statica viene generata in `dist/`.

## Pubblicazione

Il progetto è configurato per `https://kave2788.github.io` e include un workflow GitHub Pages con Node 22. Prima del push, verificare che il remote Git non contenga credenziali e usare un URL HTTPS pulito o SSH.

## Contenuti da convalidare

Le schede marcate `In revisione` non devono essere promosse a `Verificato` senza una fonte primaria o una documentazione pubblica consultabile. Le qualifiche riportate nel profilo vanno ricontrollate con Alberto prima della pubblicazione definitiva.
