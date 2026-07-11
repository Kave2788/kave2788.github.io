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
}

export const archiveStories: readonly ArchiveStory[] = [
  {
    slug: 'su-gologone-2012',
    title: 'Su Gologone 2012: ripresa delle esplorazioni',
    description:
      'Nota d’archivio verificata sulla ripresa delle esplorazioni speleosubacquee a Su Gologone nel giugno 2012.',
    summary:
      'Una comunicazione pubblicata nel giugno 2012 documenta la ripresa delle esplorazioni nella risorgenza di Su Gologone con Alberto Cavedon e un gruppo di supporto italo-svizzero.',
    category: 'Esplorazioni',
    status: 'Verificato',
    dateLabel: 'Giugno 2012',
    dateISO: '2012-06',
    place: 'Su Gologone · Oliena, Sardegna',
    verificationNote:
      'È verificata la ripresa dell’attività esplorativa. Questa scheda non pubblica profondità, sviluppi o risultati successivi perché le fonti consultate non consentono di consolidarli.',
    facts: [
      { label: 'Attività', value: 'Ripresa delle esplorazioni' },
      { label: 'Periodo', value: 'Giugno 2012' },
      { label: 'Supporto', value: 'Tecnici italiani e svizzeri' },
    ],
    sections: [
      {
        title: 'La notizia documentata',
        paragraphs: [
          'Il 5 giugno 2012 l’associazione ASSO pubblicò una nota, ripresa da Speleosubtek, secondo cui Alberto Cavedon aveva ricominciato le esplorazioni nella risorgenza di Su Gologone, nel comune di Oliena.',
          'La comunicazione indica il supporto di tecnici provenienti dall’Italia e dalla Svizzera. È il solo perimetro operativo mantenuto in questa versione dell’archivio.',
        ],
      },
      {
        title: 'Limite della scheda',
        paragraphs: [
          'La precedente versione del sito attribuiva a questa campagna diramazioni, quote e risultati non accompagnati da una fonte verificabile. Quei dettagli sono stati rimossi.',
          'La scheda sarà ampliata soltanto quando saranno disponibili un rapporto di spedizione, un rilievo datato o altra documentazione primaria consultabile.',
        ],
      },
    ],
    sources: [
      {
        publisher: 'ASSO',
        title: 'Alberto Cavedon di nuovo nella risorgenza di Su Gologone',
        url: 'https://asso-net.blogspot.com/2012/06/nuova-esplorazione-di-alberto-cavedon.html',
        note: 'Comunicazione del 5 giugno 2012; conferma la ripresa delle esplorazioni e la composizione internazionale del supporto.',
      },
      {
        publisher: 'Speleosubtek',
        title: 'Esplorazioni e spedizioni',
        url: 'https://www.speleosubtek.com/archivio/esplorazioni-e-spedizioni/',
        note: 'Archivio tecnico di riferimento; usato come fonte primaria dell’attività del gruppo.',
      },
    ],
  },
  {
    slug: 'arma-del-lupo',
    title: 'Arma del Lupo 2012: 300 metri di nuove gallerie',
    description:
      'Scheda verificata dell’esplorazione al sifone dell’Arma del Lupo del gennaio 2012: -121 m, 135 minuti e 300 metri di nuove gallerie.',
    summary:
      'L’archivio Speleosubtek documenta una punta a −121 metri, durata 135 minuti, con 300 metri di nuove gallerie rilevate ed esplorate.',
    category: 'Rilievo speleosubacqueo',
    status: 'Verificato',
    dateLabel: '6–8 gennaio 2012',
    dateISO: '2012-01-06',
    place: 'Arma del Lupo · provincia di Cuneo',
    verificationNote:
      'Quota, durata e nuovo sviluppo sono riportati insieme nell’archivio tecnico Speleosubtek. Una pubblicazione del Club Alpino Italiano colloca inoltre Cavedon al Lupo Inferiore nel gennaio 2012.',
    facts: [
      { label: 'Quota raggiunta', value: '−121 m' },
      { label: 'Durata immersione', value: '135 min' },
      { label: 'Nuove gallerie', value: '300 m' },
    ],
    sections: [
      {
        title: 'La spedizione',
        paragraphs: [
          'La campagna si svolse dal 6 all’8 gennaio 2012 e fu organizzata dall’Associazione Gruppi Speleologici Piemontesi. La documentazione pubblica cita Alberto Cavedon e Attilio Eusebio tra gli speleosubacquei impegnati, con il supporto di gruppi piemontesi e liguri.',
          'Questa ricostruzione mantiene soltanto i dati presenti nel resoconto tecnico e non riproduce la precedente narrazione in prima persona.',
        ],
      },
      {
        title: 'Il risultato registrato',
        paragraphs: [
          'Il resoconto attribuisce alla spedizione 300 metri di nuove gallerie rilevate ed esplorate. Per l’immersione di punta indica una quota di −121 metri e una durata complessiva di 135 minuti.',
          'Non vengono aggiunte informazioni su miscele, decompressione o configurazioni dell’attrezzatura che non siano necessarie a identificare il risultato archivistico.',
        ],
      },
    ],
    sources: [
      {
        publisher: 'Speleosubtek',
        title: 'Sifone dell’Arma del Lupo −121',
        url: 'https://www.speleosubtek.com/archivio/esplorazioni-e-spedizioni/',
        note: 'Fonte primaria per date, quota, durata, nuovo sviluppo e gruppi coinvolti.',
      },
      {
        publisher: 'Club Alpino Italiano · Montagne360',
        title: 'Intervista e documentazione fotografica, maggio 2012',
        url: 'https://tecadigitale.cai.it/periodici/PDF/Montagne%20360/Montagne%20360_001_005_2012.pdf',
        note: 'Fonte di contesto che identifica Alberto Cavedon al Lupo Inferiore nel gennaio 2012.',
      },
    ],
  },
  {
    slug: 'su-gologone-2010',
    title: 'Su Gologone 2010: quota −135 metri',
    description:
      'Scheda verificata dell’esplorazione di Alberto Cavedon a Su Gologone nel 2010, con raggiungimento della quota di -135 metri.',
    summary:
      'Nel 2010 Alberto Cavedon raggiunse quota −135 metri nella sorgente di Su Gologone. Il dato compare in una scheda istituzionale e nella cronaca regionale.',
    category: 'Esplorazioni',
    status: 'Verificato',
    dateLabel: 'Maggio 2010',
    dateISO: '2010-05',
    place: 'Su Gologone · Oliena, Sardegna',
    verificationNote:
      'Anno, luogo e quota di −135 metri trovano riscontro in fonti pubbliche indipendenti. Non vengono attribuiti ulteriori primati o dettagli tecnici non necessari alla scheda.',
    facts: [
      { label: 'Quota raggiunta', value: '−135 m' },
      { label: 'Anno', value: '2010' },
      { label: 'Sorgente', value: 'Su Gologone' },
    ],
    sections: [
      {
        title: 'Il dato consolidato',
        paragraphs: [
          'La scheda dedicata a Su Gologone nel portale Idese del Ministero della Cultura riporta che nel 2010 Alberto Cavedon raggiunse la profondità di −135 metri.',
          'La stessa quota è riportata da La Nuova Sardegna in una ricostruzione pubblicata nel 2011. L’accordo tra una fonte istituzionale e una fonte giornalistica consente di classificare questo nucleo come verificato.',
        ],
      },
      {
        title: 'Criterio editoriale',
        paragraphs: [
          'La scheda descrive un risultato documentato, non una testimonianza personale. Sono stati eliminati dialoghi, sensazioni e dettagli operativi che nella precedente versione non erano accompagnati da fonti.',
          'Eventuali ampliamenti futuri dovranno distinguere con chiarezza il rilievo tecnico, la cronaca della spedizione e le testimonianze dei partecipanti.',
        ],
      },
    ],
    sources: [
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
    ],
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
  },
  {
    slug: 'bue-marino-2020',
    title: 'Grotta del Bue Marino: scheda in revisione',
    description:
      'Nota d’archivio prudente sulla Grotta del Bue Marino: il luogo è documentato, ma l’attribuzione di una spedizione 2020 ad Alberto Cavedon è ancora da verificare.',
    summary:
      'Le fonti pubbliche consultate descrivono la Grotta del Bue Marino, ma non consentono ancora di attribuire ad Alberto Cavedon una specifica esplorazione nel 2020.',
    category: 'Nota d’archivio',
    status: 'In revisione',
    dateLabel: 'Data dell’attività da verificare',
    place: 'Grotta del Bue Marino · Dorgali, Sardegna',
    verificationNote:
      'È verificato il contesto geografico della cavità. Data, partecipazione, squadra e risultati dell’attività personale non sono sostenuti da una fonte primaria pubblica e restano esclusi.',
    facts: [
      { label: 'Luogo', value: 'Dorgali, Sardegna' },
      { label: 'Attribuzione personale', value: 'Non documentata' },
      { label: 'Stato della data 2020', value: 'Da verificare' },
    ],
    sections: [
      {
        title: 'Cosa è verificabile',
        paragraphs: [
          'La Grotta del Bue Marino è una cavità costiera nel territorio di Dorgali. ISPRA e il Catasto Speleologico Regionale della Sardegna ne forniscono schede pubbliche di contesto e localizzazione.',
          'Queste fonti descrivono il luogo, ma non provano la presenza di Alberto Cavedon né una campagna speleosubacquea svolta nel 2020.',
        ],
      },
      {
        title: 'Cosa manca',
        paragraphs: [
          'Per trasformare questa nota in una scheda verificata servono almeno un rapporto di spedizione datato, un registro delle immersioni, fotografie con provenienza certa o una pubblicazione dell’organizzazione coinvolta.',
          'Fino a quel momento non vengono pubblicati metri esplorati, diramazioni, condizioni dell’acqua o composizione della squadra.',
        ],
      },
    ],
    sources: [
      {
        publisher: 'ISPRA',
        title: 'Grotte del Bue Marino',
        url: 'https://www.isprambiente.gov.it/it/attivita/museo/regioni/musei/grotte-del-bue-marino',
        note: 'Fonte istituzionale per il contesto geografico e naturalistico; non documenta attività di Alberto Cavedon.',
      },
      {
        publisher: 'Catasto Speleologico Regionale della Sardegna',
        title: 'Scheda catastale 0012 SA/NU · Grotta del Bue Marino',
        url: 'https://www.catastospeleologicoregionale.sardegna.it/scheda-catastale/0012',
        note: 'Scheda ufficiale della cavità; non costituisce prova di una spedizione personale nel 2020.',
      },
    ],
  },
  {
    slug: 'vrelo-bune',
    title: 'Vrelo Bune: scheda in revisione',
    description:
      'Nota d’archivio prudente su Vrelo Bune a Blagaj: il luogo è documentato, ma non è ancora verificata un’immersione attribuibile ad Alberto Cavedon.',
    summary:
      'Vrelo Bune è una sorgente carsica presso Blagaj. Non è stata individuata una fonte pubblica affidabile che documenti l’immersione personale raccontata nella precedente versione del sito.',
    category: 'Nota d’archivio',
    status: 'In revisione',
    dateLabel: 'Data dell’attività da verificare',
    place: 'Vrelo Bune · Blagaj, Bosnia-Erzegovina',
    verificationNote:
      'Il luogo e il suo contesto carsico sono documentati da fonti pubbliche. Quota, durata, visibilità, squadra e attribuzione ad Alberto Cavedon non sono invece verificati.',
    facts: [
      { label: 'Luogo', value: 'Blagaj, Bosnia-Erzegovina' },
      { label: 'Attribuzione personale', value: 'Non documentata' },
      { label: 'Dati tecnici', value: 'Rimossi in attesa di fonti' },
    ],
    sections: [
      {
        title: 'Il contesto verificato',
        paragraphs: [
          'La sorgente della Buna si trova presso Blagaj, nell’area di Mostar. La scheda UNESCO dell’insieme naturale e architettonico di Blagaj la descrive come una sorgente di fiume carsico sotterraneo.',
          'Questa informazione identifica il luogo, ma non consente di ricostruire una specifica attività speleosubacquea.',
        ],
      },
      {
        title: 'Perché la scheda è in revisione',
        paragraphs: [
          'Il precedente articolo era scritto in prima persona e includeva data, profondità, visibilità e nomi di partecipanti senza fonti consultabili. Quegli elementi sono stati rimossi.',
          'La scheda potrà essere aggiornata dopo il reperimento di un log firmato, un rapporto del gruppo organizzatore o una pubblicazione indipendente che colleghi esplicitamente Alberto Cavedon all’attività.',
        ],
      },
    ],
    sources: [
      {
        publisher: 'UNESCO World Heritage Centre',
        title: 'The natural and architectural ensemble of Blagaj',
        url: 'https://whc.unesco.org/en/tentativelists/5280/',
        note: 'Fonte per la localizzazione e il carattere carsico della sorgente; non documenta immersioni personali.',
      },
      {
        publisher: 'Accademia delle Scienze e delle Arti della Bosnia-Erzegovina',
        title: 'Results of the excavations at the Spring of Buna River in Blagaj',
        url: 'https://godisnjak.anubih.ba/index.php/godisnjak/en/article/view/112',
        note: 'Fonte accademica sul contesto del sito; non attribuisce attività speleosubacquee ad Alberto Cavedon.',
      },
    ],
  },
];

export function getArchiveStory(slug: string): ArchiveStory {
  const story = archiveStories.find((item) => item.slug === slug);

  if (!story) {
    throw new Error(`Archive story not found: ${slug}`);
  }

  return story;
}
