export type ArchiveStatus = 'Verificato' | 'In revisione';

export interface ArchiveFact {
  label: string;
  value: string;
}

export interface ArchiveSection {
  title: string;
  paragraphs: string[];
}

export interface ArchiveSource {
  publisher: string;
  title: string;
  url: string;
  note: string;
}

export interface ArchiveImage {
  src: string;
  alt: string;
  credit: string;
  creditHref: string;
}

export interface ArchiveStory {
  slug: string;
  title: string;
  description: string;
  summary: string;
  category: string;
  status: ArchiveStatus;
  dateLabel: string;
  dateISO?: string;
  place: string;
  verificationNote: string;
  facts: ArchiveFact[];
  sections: ArchiveSection[];
  sources: ArchiveSource[];
  image: ArchiveImage;
}

export const archiveStories: readonly ArchiveStory[] = [
  {
    slug: 'arma-del-lupo',
    title: 'Arma del Lupo 2012: il sifone a −121 metri',
    description:
      'Racconto firmato e rilievo originale dell’esplorazione al Sifone del Lago Grande, nell’Arma del Lupo Inferiore: −121 m, 300 m di progressione e 135 minuti.',
    summary:
      'Nel gennaio 2012 Alberto Cavedon stese 300 metri di sagola nel Sifone del Lago Grande, raggiunse la quota massima di −121 metri e concluse l’immersione dopo 135 minuti.',
    category: 'Rilievo speleosubacqueo',
    status: 'Verificato',
    dateLabel: 'Ponte della Befana · gennaio 2012',
    dateISO: '2012-01',
    place: 'Arma del Lupo Inferiore · Briga Alta (CN), Piemonte',
    verificationNote:
      'La scheda si fonda ora su due documenti primari: il racconto firmato da Alberto Cavedon e il rilievo datato gennaio 2012, che attribuisce ad A. Cavedon e A. Eusebio il rilievo del Sifone del Lago Grande.',
    facts: [
      { label: 'Profondità massima', value: '−121 m' },
      { label: 'Progressione', value: '300 m' },
      { label: 'Tempo totale', value: '135 min' },
    ],
    sections: [
      {
        title: 'Una spedizione corale',
        paragraphs: [
          'Il progetto, inizialmente previsto per dicembre 2011 e rinviato per il maltempo, prese forma durante il ponte della Befana del 2012. Il racconto di Alberto ricorda ventitré sacchi di materiale trasportati fino al sifone e circa quaranta persone al lavoro in ciascuna giornata.',
          'Nei due giorni furono sessantadue gli speleologi coinvolti. Alberto ringrazia in particolare Poppi e cita Massimo, Stefano, Giorgio, Gherardo e Gianluca tra le persone impegnate nella preparazione e nel supporto sotterraneo.',
        ],
      },
      {
        title: 'Nel Sifone del Lago Grande',
        paragraphs: [
          'Dopo il controllo del rebreather Megalodon, Cavedon entrò in acqua alle 14:15 con due bombole di miscela ternaria e due reel di filo metrato. Nei primi 125 metri la galleria era ampia e con visibilità ottima; poi la condotta girava a destra e scendeva con maggiore decisione.',
          'Il racconto descrive il passaggio intorno a −120 metri, una risalita fino a −107 metri e una prosecuzione che tornava verso il fondo. Dopo trentacinque minuti erano stati stesi 300 metri di sagola: con l’acqua a 5 °C e cento minuti di decompressione indicati dagli strumenti, iniziò il rientro.',
        ],
      },
      {
        title: 'Centotrentacinque minuti',
        paragraphs: [
          'La prima tappa di decompressione era a −66 metri. A −21 metri Cavedon ritrovò le bombole predisposte da Poppi e a −18 vide le sue luci arrivare per il controllo. Uscì dall’acqua al minuto 135, infreddolito ma soddisfatto del risultato.',
          'Il valore del racconto non è soltanto tecnico: restituisce il rapporto tra la punta individuale e l’enorme lavoro collettivo necessario per trasportare, preparare e riportare fuori ogni attrezzatura.',
        ],
      },
      {
        title: 'Che cosa mostra il rilievo',
        paragraphs: [
          'Il disegno complessivo riporta per l’Arma del Lupo Inferiore uno sviluppo di 2.850 metri. Nel Sifone del Lago Grande segna il punto a −121 metri dopo 285 metri e il limite della progressione a −107 metri dopo 300 metri, coerentemente con il cambio di quota descritto nel racconto.',
          'La legenda attribuisce il rilievo storico al Gruppo Speleologico Piemontese CAI UGET, le tratte successive allo stesso gruppo e il rilievo del sifone del gennaio 2012 ad A. Cavedon e A. Eusebio, autore anche del ridisegno complessivo.',
        ],
      },
    ],
    sources: [
      {
        publisher: 'Alberto Cavedon · documento originale',
        title: 'Immersione profonda al Lupo −121 m: il racconto',
        url: '/documents/arma-del-lupo-racconto-alberto-cavedon.pdf',
        note: 'Resoconto firmato di due pagine; fonte primaria per preparazione, progressione, profondità, temperatura, decompressione, durata e persone coinvolte.',
      },
      {
        publisher: 'GSP CAI UGET · AGSP · gennaio 2012',
        title: 'Arma del Lupo Inferiore (141 Pi): sezione e pianta',
        url: '/documents/arma-del-lupo-rilievo-originale.jpg',
        note: 'Rilievo complessivo con sviluppo, quote, toponimi e attribuzione del Sifone del Lago Grande ad A. Cavedon e A. Eusebio.',
      },
      {
        publisher: 'Speleosubtek',
        title: 'Sifone dell’Arma del Lupo −121',
        url: 'https://www.speleosubtek.com/archivio/esplorazioni-e-spedizioni/',
        note: 'Archivio tecnico pubblico usato come riscontro per data, quota, durata e attività della spedizione.',
      },
      {
        publisher: 'Club Alpino Italiano · Montagne360',
        title: 'Intervista e documentazione fotografica, maggio 2012',
        url: 'https://tecadigitale.cai.it/periodici/PDF/Montagne%20360/Montagne%20360_001_005_2012.pdf',
        note: 'Fonte di contesto che identifica Alberto Cavedon al Lupo Inferiore nel gennaio 2012.',
      },
    ],
    image: {
      src: '/images/luoghi/marguareis.webp',
      alt: 'Parete del Marguareis, Alpi Liguri, Piemonte',
      credit: 'Pingutours · CC BY-SA 3.0 · Wikimedia Commons',
      creditHref: 'https://commons.wikimedia.org/wiki/File:Nordwand_der_Punta_Marguareis_(Ligurische_Alpen).JPG',
    },
  },
  {
    slug: 'su-gologone',
    title: 'Su Gologone: quindici anni verso −135 metri',
    description:
      'Scheda verificata sulle esplorazioni di Alberto Cavedon a Su Gologone tra il 2010 e il 2025: dai 510 metri e −135 m del 2010 alla sagola ancora in posizione ritrovata nel 2025.',
    summary:
      'Tra il 2010 e il 2025 Alberto Cavedon ha guidato tre campagne di immersione nella sorgente di Su Gologone, in Sardegna: nel 2010 porta il limite esplorato a −135 metri, nel 2012 aggiunge 45 metri di sagola oltre quel punto, e nel 2025 una squadra italo-francese ritrova la sua sagola guida ancora in posizione, senza superare il limite.',
    category: 'Esplorazioni',
    status: 'Verificato',
    dateLabel: '2010–2025',
    dateISO: '2010-05',
    place: 'Su Gologone · Oliena, Sardegna',
    verificationNote:
      'La scheda unisce tre campagne distinte, tutte alla stessa sorgente: il resoconto originale ASSONET del 2010, la comunicazione ASSO e il resoconto Scintilena del 2012, e il resoconto Scintilena della spedizione italo-francese del 2025.',
    facts: [
      { label: 'Profondità massima', value: '−135 m' },
      { label: 'Sviluppo esplorato nel 2010', value: '510 m' },
      { label: 'Ultima verifica sul posto', value: 'Giugno 2025' },
    ],
    sections: [
      {
        title: '2010 — Oltre il limite di Isler',
        paragraphs: [
          'Tra il 21 e il 28 maggio 2010 un team di speleosubacquei provenienti da diverse località italiane riprese l’esplorazione della sorgente di Su Gologone, interrotta da anni. Il gruppo posò le bombole lungo le linee di sicurezza e di progressione e verificò l’affidabilità del rilievo precedente, redatto da Jacques Brasey e Olivier Isler.',
          'Il team era composto da Alberto Cavedon, Stefano Barbaresi, Gilberto Bonaga, Massimo D’Alessandro, Attilio Eusebio, Leo Fancello, Fabio Ferro, Carmelo Logias, Maria Masuri, Mario Mazzoli, Maria Teresa Pilloni, Bernardino Rocchi e Marco Vitelli, con il supporto della società di gestione del Parco di Su Gologone.',
          'Con un rebreather HBT Voyager a circuito chiuso, Cavedon estese la conoscenza della sorgente di altri 155 metri e di 28 metri di profondità aggiuntiva, in un’immersione durata 300 minuti, raggiungendo una lunghezza totale esplorata di 510 metri e una profondità massima di −135 metri. Dedicò la nuova condotta alla memoria di Paolo Costa, documentarista e speleosubacqueo morto nella risorgenza.',
          'Il risultato superò il punto raggiunto nel 1997 da Olivier Isler, allora fermo a −107 metri e 370 metri di progressione, dopo decenni di tentativi che erano costati la vita, nel 1992, allo speleosub svizzero Jacques Brasey.',
        ],
      },
      {
        title: '2012 — Altri 45 metri di sagola',
        paragraphs: [
          'Dal 27 maggio al 2 giugno 2012 Cavedon tornò a Su Gologone con un gruppo italo-svizzero che comprendeva il videoperatore Stefano, i rilevatori svizzeri Hubert e Sebastien, i sub di supporto Leo e Massimo, e il geologo Francesco Murgia.',
          'Con un rebreather Megalodon, raggiunse il precedente limite del 2010 a −135 metri e, nonostante una violenta corrente nelle strettoie, stese 45 metri di nuova sagola guida, risalendo fino a circa −131 metri prima di fermarsi davanti a una frattura stretta e alta, impossibile da superare con l’attrezzatura disponibile. L’immersione durò complessivamente 360 minuti.',
        ],
      },
      {
        title: '2025 — La sagola, ancora lì',
        paragraphs: [
          'Dal 31 maggio al 6 giugno 2025 una squadra italo-francese (Frederic Swierczynski, Alexandre Legrix, Bruno Gaidan, Luca Pedrali, con gli istruttori italiani Leo Fancello, Maria Masuri e Nicola Careddu) condusse una nuova campagna con il supporto della Commissione Speleosub SSI, immergendosi tra −100 e −134 metri.',
          'Il gruppo ritrovò ancora in posizione la sagola guida lasciata da Cavedon. Il fondo attualmente noto della risorgenza resta quello raggiunto nel 2012, presso la frattura impraticabile: le immersioni del 2025 non l’hanno superato, ma hanno raccolto nuova documentazione della cavità.',
        ],
      },
    ],
    sources: [
      {
        publisher: 'Alberto Cavedon e Leo Fancello · con il supporto di ASSONET',
        title: 'Esplorazione speleosubacquea di Su Gologone: non era e non è finita…',
        url: '/documents/su-gologone-2010-esplorazione-assonet.pdf',
        note: 'Resoconto originale, maggio 2011; fonte primaria per date, profondità, sviluppo, durata dell’immersione, attrezzatura, squadra e dedica a Paolo Costa (campagna 2010).',
      },
      {
        publisher: 'Ministero della Cultura · Idese',
        title: 'Su Gologone',
        url: 'https://idese.cultura.gov.it/en/place/su-gologone/',
        note: 'Scheda istituzionale del luogo; riporta il raggiungimento di −135 metri nel 2010.',
      },
      {
        publisher: 'La Nuova Sardegna',
        title: 'Dentro gli abissi di Su Gologone',
        url: 'https://www.lanuovasardegna.it/regione/2011/05/12/news/dentro-gli-abissi-di-su-gologone-1.3436827',
        note: 'Cronaca regionale che conferma la quota di −135 metri attribuita all’esplorazione del 2010.',
      },
      {
        publisher: 'ASSO',
        title: 'Alberto Cavedon di nuovo nella risorgenza di Su Gologone',
        url: 'https://asso-net.blogspot.com/2012/06/nuova-esplorazione-di-alberto-cavedon.html',
        note: 'Comunicazione del 5 giugno 2012; conferma la ripresa delle esplorazioni e la composizione internazionale del supporto (campagna 2012).',
      },
      {
        publisher: 'Scintilena',
        title: 'Nuove esplorazioni speleosub a Su Gologone',
        url: 'https://www.scintilena.com/nuove-esplorazioni-speleosub-a-su-gologone/06/03/',
        note: 'Resoconto tecnico della spedizione 27 maggio – 2 giugno 2012: squadra, attrezzatura, progressione e durata dell’immersione.',
      },
      {
        publisher: 'Scintilena',
        title: 'Ripartite le esplorazioni a Su Gologone 2025',
        url: 'https://www.scintilena.com/rpartite-le-le-esplorazioni-a-su-gologone-2025/06/10/',
        note: 'Resoconto della spedizione italo-francese del giugno 2025; conferma il ritrovamento della sagola guida di Cavedon a −134 metri (campagna 2025).',
      },
    ],
    image: {
      src: '/images/luoghi/su-gologone.webp',
      alt: 'La sorgente di Su Gologone, Oliena, Sardegna',
      credit: 'Gianni Careddu · CC BY-SA 4.0 · Wikimedia Commons',
      creditHref: 'https://commons.wikimedia.org/wiki/File:Oliena_-_Su_Gologone_(06).JPG',
    },
  },
  {
    slug: 'elefante-bianco-300',
    title: 'Elefante Bianco: oltre 300 immersioni documentate',
    description:
      'Scheda d’archivio verificata sul rapporto di Alberto Cavedon con la Grotta dell’Elefante Bianco e sulle oltre 300 immersioni riportate nel 2008.',
    summary:
      'Una comunicazione del 2008 collegata alle operazioni CNSAS attribuisce ad Alberto Cavedon più di 300 immersioni nella Grotta dell’Elefante Bianco.',
    category: 'Soccorso speleosubacqueo',
    status: 'Verificato',
    dateLabel: 'Documentazione del 2008',
    dateISO: '2008-01',
    place: 'Elefante Bianco · Ponte Subiolo, Valstagna',
    verificationNote:
      'Il dato delle oltre 300 immersioni è riportato in una comunicazione che cita il coordinamento stampa CNSAS; il periodico istituzionale CNSAS documenta separatamente le operazioni del gennaio 2008.',
    facts: [
      { label: 'Immersioni riportate', value: 'Oltre 300' },
      { label: 'Documentazione', value: 'Gennaio–aprile 2008' },
      { label: 'Ruolo citato', value: 'Tecnico CNSAS' },
    ],
    sections: [
      {
        title: 'Un dato di esperienza',
        paragraphs: [
          'Nel gennaio 2008 una comunicazione pubblica, attribuita al coordinamento nazionale degli addetti stampa CNSAS, descrisse Alberto Cavedon come tecnico della Commissione Speleosubacquea e indicò che nella cavità aveva effettuato più di 300 immersioni.',
          'Il dato viene presentato come attestazione storica riferita a quel momento, senza trasformarlo in un conteggio aggiornato o in un primato.',
        ],
      },
      {
        title: 'Il contesto del 2008',
        paragraphs: [
          'Il numero di aprile 2008 del periodico “il Soccorso Alpino” documenta l’intervento seguito a un incidente mortale all’Elefante Bianco e il contributo dei tecnici speleosubacquei CNSAS, tra cui Cavedon.',
          'Per rispetto delle persone coinvolte, questa pagina non ricostruisce la tragedia in forma narrativa e non utilizza l’evento come elemento promozionale.',
        ],
      },
      {
        title: 'Dati esclusi',
        paragraphs: [
          'Le precedenti pagine del sito riportavano misure diverse per profondità e sviluppo della grotta. In assenza di un rilievo unico, datato e citabile, questi valori non vengono riproposti qui.',
        ],
      },
    ],
    sources: [
      {
        publisher: 'CNSAS · il Soccorso Alpino',
        title: 'L’Elefante Bianco si tinge ancora una volta di nero',
        url: 'https://www.cnsas.it/wp-content/uploads/2017/05/aprile-2008.pdf',
        note: 'Periodico istituzionale CNSAS; documenta le operazioni del gennaio 2008.',
      },
      {
        publisher: 'Patavium Explorers Team',
        title: 'Tragica fatalità all’Elefante Bianco',
        url: 'https://pataviumexplorers.blogspot.com/2008/01/tragica-fatalit-allelefante-bianco.html',
        note: 'Riporta una comunicazione con il coordinatore nazionale stampa CNSAS e il dato delle oltre 300 immersioni.',
      },
      {
        publisher: 'Federazione Speleologica Veneta',
        title: 'Grotta dell’Elefante Bianco',
        url: 'https://www.speleologiaveneta.it/index.php/progetti-delle-commissioni/speleosub/item/grotta-dell-elefante-bianco',
        note: 'Contesto pubblico sulla cavità, sui rischi e sulle norme elaborate dopo l’incidente del 2008.',
      },
    ],
    image: {
      src: '/images/luoghi/elefante-bianco.webp',
      alt: 'Laghetto di Ponte Subiolo, ingresso della Grotta dell’Elefante Bianco, Valstagna',
      credit: 'Syrio · CC BY-SA 4.0 · Wikimedia Commons',
      creditHref: 'https://commons.wikimedia.org/wiki/File:Laghetto_di_Ponte_Subiolo_01.jpg',
    },
  },
  {
    slug: 'riomartino',
    title: 'Il sifone di Riomartino: il tentativo del 2009',
    description:
      'Scheda verificata del tentativo di Alberto Cavedon di superare la seconda strettoia del sifone di Riomartino, Crissolo (CN), 18 ottobre 2009.',
    summary:
      'Il 18 ottobre 2009 Alberto Cavedon tentò di superare la seconda strettoia sommersa del sifone di Riomartino, a Crissolo. Bloccato dalla sabbia a −12 metri dopo circa cinquanta metri di progressione, non riuscì a superare il fondo raggiunto nel 2002 da Paolo Testa.',
    category: 'Rilievo speleosubacqueo',
    status: 'Verificato',
    dateLabel: '18 ottobre 2009',
    dateISO: '2009-10-18',
    place: 'Grotta di Riomartino · Crissolo (CN), Piemonte',
    verificationNote:
      'La scheda si fonda su un articolo di Attilio Eusebio pubblicato su Grotte n. 152 (luglio–dicembre 2009), rivista del Gruppo Speleologico Piemontese CAI-UGET, che include un resoconto in prima persona di Alberto Cavedon.',
    facts: [
      { label: 'Esito', value: 'Tentativo non riuscito' },
      { label: 'Profondità raggiunta', value: '−12 m circa' },
      { label: 'Persone coinvolte', value: 'Circa 35' },
    ],
    sections: [
      {
        title: 'Il terzo tentativo',
        paragraphs: [
          'Dopo due tentativi vanificati dal maltempo e da una frana tra la fine del 2008 e l’inizio del 2009, il Gruppo Speleologico di Saluzzo e l’AGSP organizzarono un terzo tentativo per il 18 ottobre 2009, nonostante una nevicata di 15 centimetri. Circa 30 persone si ritrovarono al parcheggio della Spiaggia di Crissolo, tra cui i due speleosub Alberto Cavedon e Attilio Eusebio, quest’ultimo di appoggio.',
          'Il materiale, compreso il rebreather Voyager di Cavedon, fu trasportato per circa un chilometro e mezzo fino al sifone, attraverso un pozzo di 40 metri, arrampicate e un tratto finale percorso nell’acqua.',
        ],
      },
      {
        title: 'L’immersione',
        paragraphs: [
          'Alle 16:30 Cavedon si immerse con il rebreather in circuito chiuso e diluente ad aria. Dopo un primo restringimento superato scavando nella sabbia, proseguì per circa cinquanta metri fino a 12 metri di profondità, dove incontrò una seconda strettoia più stretta della prima.',
          'Il fondo sabbioso, che si ricomponeva continuamente durante lo scavo, e il blocco delle valvole di carico della muta stagna e dell’ossigeno a causa della sabbia lo costrinsero a rinunciare dopo circa un’ora in acqua, senza riuscire a superare il punto raggiunto nel 2002 dallo speleosub Paolo Testa per il Gruppo Speleologico Valli Pinerolesi.',
        ],
      },
      {
        title: 'Una spedizione collettiva',
        paragraphs: [
          'L’articolo sottolinea la scala dello sforzo organizzativo: circa 35 speleologi provenienti da diverse zone del Piemonte parteciparono al trasporto e al supporto logistico. Cavedon, nel suo resoconto, ringrazia il gruppo e dichiara l’intenzione di ritentare con un’attrezzatura più adeguata.',
          'La cavità era già nota dagli anni ’50: un primo tentativo in apnea di Eraldo Saracco e Dario Sodero risale al 1958, con ulteriori prove nel 1960 e una prima immersione documentata nell’ottobre 1961.',
        ],
      },
    ],
    sources: [
      {
        publisher: 'Attilio Eusebio · Grotte n. 152, luglio–dicembre 2009',
        title: 'Il sifone di Riomartino',
        url: '/documents/riomartino-grotte-152-2009.pdf',
        note: 'Articolo originale, con resoconto in prima persona di Alberto Cavedon; fonte primaria per data, squadra, profondità raggiunta ed esito del tentativo.',
      },
      {
        publisher: 'Scintilena',
        title: 'Video YouTube - Il Sifone di Rio Martino, prima parte',
        url: 'http://www.scintilena.com/video-you-tube-il-sifone-di-rio-martino-prima-parte/05/11/',
        note: 'Documentazione video della spedizione, pubblicata nel maggio 2010; identifica Cavedon come lo speleosub impegnato nel tentativo.',
      },
    ],
    image: {
      src: '/images/luoghi/monviso-crissolo.webp',
      alt: 'Alta Valle Po, Crissolo, Piemonte',
      credit: 'Touriste · Pubblico dominio · Wikimedia Commons',
      creditHref: 'https://commons.wikimedia.org/wiki/File:HauteVallePo.JPG',
    },
  },
  {
    slug: 'fontanazzi',
    title: 'Fontanazzi: il ramo profondo fino a −133 metri',
    description:
      'Scheda verificata sulla scoperta e l’esplorazione del ramo profondo della Grotta di Fontanazzi a Valstagna, guidata da Alberto Cavedon tra il 1997 e il 2011: fino a −133 metri e quasi 1000 metri di progressione.',
    summary:
      'Tra il 1997 e il 2000 Alberto Cavedon guidò l’immersione che scoprì l’ingresso al ramo profondo di Fontanazzi. Negli anni successivi lui e il suo gruppo, anche con l’assistenza di Luigi Casati, estesero l’esplorazione fino a una profondità di circa 133 metri e quasi 1000 metri di progressione, in un’immersione di circa otto ore.',
    category: 'Esplorazioni',
    status: 'Verificato',
    dateLabel: '1997–2011',
    place: 'Grotta di Fontanazzi · Valstagna (VI), Veneto',
    verificationNote:
      'La scheda incrocia tre fonti: il report annuale 2017 di Global Underwater Explorers (GUE) per la cronologia della scoperta, la biografia pubblicata su Valstagna.info e una nota del Gruppo Grotte Trevisiol per la quota massima raggiunta da Cavedon. Le due fonti locali, più recenti e dettagliate, riportano una profondità maggiore (−132/−133 m) di quella indicata dal report GUE (−120 m): questa scheda pubblica il dato più alto, segnalando la discrepanza.',
    facts: [
      { label: 'Profondità raggiunta', value: '−133 m' },
      { label: 'Progressione', value: '~1000 m' },
      { label: 'Durata immersione', value: '~8 ore' },
    ],
    sections: [
      {
        title: 'Una grotta nota del Canale di Brenta',
        paragraphs: [
          'La Grotta di Fontanazzi, a Valstagna, è una delle cavità subacquee più visitate della zona per la sua relativa stabilità rispetto ad altre grotte locali. L’esplorazione iniziò nel 1986 a opera del Gruppo Grotte Giara Modon, che dovette confrontarsi con tre strettoie all’ingresso, la più profonda delle quali, a 12 metri, non permetteva il passaggio con le bombole indossate.',
          'Nel 1987 lo stesso gruppo allargò la strettoia più profonda rimuovendo uno sperone di roccia. Nei primi anni ’90 l’intera zona superficiale venne rilevata, ma l’ingresso al ramo profondo restò sconosciuto per anni.',
        ],
      },
      {
        title: 'La scoperta del ramo profondo',
        paragraphs: [
          'Secondo il report GUE, tra il marzo 1997 e il marzo 2000 fu scoperto l’ingresso alla sezione profonda della grotta, durante un’immersione guidata da Alberto Cavedon.',
          'Negli anni successivi Cavedon estese l’esplorazione del ramo profondo, anche con l’assistenza di Luigi Casati, uno dei più noti speleosub al mondo. Una delle immersioni esplorative, durata circa otto ore, raggiunse una profondità di 133 metri e una progressione di quasi 1000 metri.',
        ],
      },
      {
        title: 'Un dato, due misure',
        paragraphs: [
          'Il report GUE del 2017 sintetizza il lavoro di Cavedon indicando una profondità di 120 metri raggiunta tra il 2000 e il 2011. Fonti locali più specifiche — la biografia su Valstagna.info e una nota del Gruppo Grotte Trevisiol sull’esplorazione condotta con Casati — riportano invece una quota di 132–133 metri.',
          'In assenza di un rilievo pubblico unico e datato che risolva la differenza, la scheda pubblica il dato più profondo e meglio circostanziato, segnalando esplicitamente la divergenza con la fonte GUE.',
        ],
      },
    ],
    sources: [
      {
        publisher: 'Valstagna.info',
        title: 'Alberto Cavedon',
        url: 'https://www.valstagna.info/index.php/sport/256-alberto-cavedon',
        note: 'Biografia pubblica; riporta l’immersione esplorativa di circa otto ore a Fontanazzi, −133 metri e quasi 1000 metri di progressione.',
      },
      {
        publisher: 'Gruppo Grotte Trevisiol',
        title: 'Fontanazzi (Solagna)',
        url: 'http://gruppogrottetrevisiol.org/fontanazzi-solagna/',
        note: 'Nota tecnica sulla cavità; attribuisce a Cavedon il raggiungimento di 132 metri di profondità negli anni precedenti al 2011.',
      },
      {
        publisher: 'Global Underwater Explorers (GUE)',
        title: 'Fontanazzi Forgotten Branch Project 2017 — 2017 Project Reports',
        url: 'https://www.gue.com/files/annualreports/2017-Project-Reports.pdf',
        note: 'Report annuale GUE; attribuisce esplicitamente ad Alberto Cavedon la scoperta (1997–2000) e l’esplorazione (2000–2011) del ramo profondo, indicando −120 metri.',
      },
    ],
    image: {
      src: '/images/luoghi/canale-di-brenta.webp',
      alt: 'Parco naturale delle Grotte di Oliero, Valstagna, Veneto',
      credit: 'Settimio caroli · CC BY-SA 4.0 · Wikimedia Commons',
      creditHref: 'https://commons.wikimedia.org/wiki/File:ITA-VEN-GrotteOliero-Parco2.jpg',
    },
  },
  {
    slug: 'ardeche-2010',
    title: 'Dragonnière de Gaud 2010: la ricerca in Ardèche',
    description:
      'Scheda verificata sulla partecipazione di Alberto Cavedon alla ricerca dello speleosub francese Éric Establie, disperso nella Dragonnière de Gaud (Ardèche, Francia) nell’ottobre 2010.',
    summary:
      'Nell’ottobre 2010 Alberto Cavedon fu tra gli specialisti italiani inviati in Francia per la ricerca dello speleosub francese Éric Establie, disperso nella Dragonnière de Gaud. La ricerca si concluse l’11 ottobre con il ritrovamento del corpo.',
    category: 'Soccorso speleosubacqueo',
    status: 'Verificato',
    dateLabel: 'Ottobre 2010',
    dateISO: '2010-10',
    place: 'Dragonnière de Gaud · Labastide-de-Virac, Ardèche, Francia',
    verificationNote:
      'La partecipazione di Cavedon è documentata da un comunicato del CNSAS Veneto. L’esito della ricerca è confermato da una fonte giornalistica internazionale indipendente (France 24).',
    facts: [
      { label: 'Ruolo di Cavedon', value: 'Specialista 6ª Delegazione' },
      { label: 'Durata ricerca', value: '8 giorni' },
      { label: 'Esito', value: 'Corpo ritrovato l’11 ottobre' },
    ],
    sections: [
      {
        title: 'La chiamata da oltralpe',
        paragraphs: [
          'Il 3 ottobre 2010 lo speleosub francese Éric Establie non fece ritorno da un’immersione esplorativa nella Dragonnière de Gaud, cavità impegnativa vicino a Labastide-de-Virac, in Ardèche. Le squadre di soccorso britanniche trovarono la galleria ostruita da una frana a 780 metri dall’ingresso, con lo scooter subacqueo di Establie incastrato tra i detriti.',
          'Il CNSAS inviò in supporto due specialisti della 6ª Delegazione speleologica: il veronese Alberto Cavedon e il trentino Mauro Bombardelli, che si unirono ai rilievi subacquei condotti insieme a squadre italiane, francesi, britanniche e allo speleosub svizzero Gigi Casati.',
        ],
      },
      {
        title: 'L’esito',
        paragraphs: [
          'La ricerca proseguì per circa otto giorni in condizioni ambientali difficili. L’11 ottobre 2010 la notizia, ripresa anche dalla stampa internazionale, confermò il ritrovamento del corpo di Éric Establie: la causa della morte fu accertata in annegamento.',
          'Questa pagina riporta la partecipazione documentata di Cavedon all’operazione, senza ricostruire in forma narrativa la vicenda personale della vittima.',
        ],
      },
    ],
    sources: [
      {
        publisher: 'CNSAS Veneto',
        title: 'Ricerca speleosub: in Francia anche due specialisti della delegazione veneta',
        url: 'https://cnsas.veneto.it/archivio-comunicati/item/1866-ricerca-speleosub-in-francia-anche-due-specialisti-della-delegazione-veneta',
        note: 'Comunicato del 7 ottobre 2010; nomina esplicitamente Alberto Cavedon tra gli specialisti inviati in Ardèche.',
      },
      {
        publisher: 'France 24',
        title: 'Cave explorer found dead after dramatic eight-day search',
        url: 'https://www.france24.com/en/20101012-cave-explorer-found-dead-after-dramatic-eight-day-search-caving-accident-france-uk-ardeche',
        note: 'Fonte giornalistica indipendente; conferma data e esito della ricerca.',
      },
    ],
    image: {
      src: '/images/luoghi/ardeche.webp',
      alt: 'Gorges dell’Ardèche, Francia',
      credit: 'W. Bulach · CC BY-SA 4.0 · Wikimedia Commons',
      creditHref: 'https://commons.wikimedia.org/wiki/File:00_1058_R%C3%A9serve_Naturelle_des_Gorges_de_l%C2%B4Ard%C3%A8che.jpg',
    },
  },
];

export function getArchiveStory(slug: string): ArchiveStory {
  const story = archiveStories.find((item) => item.slug === slug);

  if (!story) {
    throw new Error(`Archive story not found: ${slug}`);
  }

  return story;
}
