import type { Landing } from "@/content/landings/types";

/**
 * /ai-automatisering. Vaste gegevens: vanaf €950 per implementatie, vaste
 * scope, eerste automatisering live binnen 7 werkdagen. Verder geen cijfers,
 * klanten of quotes tot die bevestigd zijn.
 */
export const aiAutomatisering = {
  slug: "ai-automatisering",
  metaTitle: "AI-automatisering op je bestaande software | Junomedia",
  metaDescription:
    "Wij koppelen je bestaande software en laten AI het handwerk ertussenuit halen. Vanaf €950 per implementatie, eerste automatisering live binnen 7 werkdagen.",
  hero: {
    eyebrow: "AI-automatisering",
    h1: "Werk dat niemand meer hoeft te doen.",
    sub: "Wij koppelen je bestaande software aan elkaar en laten AI het handwerk ertussenuit halen. Eerste automatisering live binnen 7 werkdagen.",
    cta: { label: "Plan een processcan", href: "/contact" },
  },
  probleem: {
    eyebrow: "Het probleem",
    kop: "Het handwerk zit tussen je systemen.",
    punten: [
      "Offertes, facturen en klantvragen gaan nog handmatig van het ene systeem naar het andere.",
      "Niemand weet hoeveel uur er per week weglekt, alleen dát het te veel is.",
      "Elke nieuwe klant kost evenveel handwerk als de vorige.",
    ],
  },
  watJeKrijgt: {
    eyebrow: "Wat je krijgt",
    kop: "Van processcan tot een team dat ermee werkt.",
    items: [
      {
        titel: "Processcan",
        regel: "We lopen mee en leggen per rol vast waar de uren blijven.",
      },
      {
        titel: "Werkende automatiseringen",
        regel: "Op je eigen software, geen nieuw systeem erbij.",
      },
      {
        titel: "Training op locatie",
        regel: "Je team leert ermee werken, met jullie eigen werk als lesmateriaal.",
      },
      {
        titel: "Maandelijkse check",
        regel: "Elke maand kijken we wat er draait en ontwikkelen we door.",
      },
    ],
  },
  voorbeelden: {
    eyebrow: "Voorbeelden",
    kop: "Handwerk dat je kwijt kunt.",
    items: [
      {
        titel: "Inkomende mail",
        regel: "Wordt gelezen, geclassificeerd en beantwoord of doorgezet naar de juiste persoon.",
      },
      {
        titel: "Offerte-aanvragen",
        regel: "De aanvraag komt binnen, de data wordt opgehaald en een concept-offerte staat klaar ter controle.",
      },
      {
        titel: "Facturen en bonnen",
        regel: "Worden uitgelezen en in de boekhouding geboekt.",
      },
      {
        titel: "Rapportages",
        regel: "Terugkerende rapportages worden automatisch opgebouwd en verstuurd.",
      },
    ],
  },
  aanpak: {
    eyebrow: "Aanpak",
    kop: "In vier stappen live.",
    stappen: [
      {
        titel: "Processcan",
        regel: "We lopen mee met je team en zien per rol waar de uren blijven.",
      },
      {
        titel: "Vaste scope",
        regel: "Je weet vooraf wat we automatiseren, op welke software en wat het kost.",
      },
      {
        titel: "Live in 7 werkdagen",
        regel: "De eerste automatisering draait op je eigen systemen.",
      },
      {
        titel: "Trainen en doorontwikkelen",
        regel: "Je team wordt op locatie getraind, daarna checken we elke maand.",
      },
    ],
  },
  techniek: {
    eyebrow: "Techniek",
    kop: "Koppelingen op wat je al gebruikt.",
    koppelingen: [
      "Gmail",
      "Outlook",
      "Google Workspace",
      "Exact",
      "Moneybird",
      "Shopify",
      "HubSpot",
      "WhatsApp",
    ],
    noot: "Eigen API's kunnen ook.",
  },
  prijs: {
    eyebrow: "Prijs",
    kop: "Eén prijs per automatisering, vooraf bekend.",
    anker: {
      prefix: "Vanaf",
      bedrag: 950,
      eenheid: "per implementatie",
    },
    doorlooptijd: "Eerste automatisering live binnen 7 werkdagen.",
    scope: "Vaste scope: je weet vooraf wat er gebouwd wordt en wat het kost.",
    cta: { label: "Plan een processcan", href: "/contact" },
  },
  faq: {
    eyebrow: "Veelgestelde vragen",
    kop: "Wat je wilt weten over automatiseren",
    items: [
      {
        vraag: "Wat kost een automatisering?",
        antwoord:
          "Vanaf €950 per implementatie, met een vaste scope. Je weet vooraf wat er gebouwd wordt en wat het kost.",
      },
      {
        vraag: "Hoe snel staat de eerste automatisering live?",
        antwoord: "Binnen 7 werkdagen draait de eerste automatisering op je eigen software.",
      },
      {
        vraag: "Moet ik nieuwe software aanschaffen?",
        antwoord:
          "Nee. We koppelen wat je al gebruikt, zoals Gmail of Outlook, Exact of Moneybird, Shopify en HubSpot. Heb je eigen systemen met een API, dan kunnen we daar ook op aansluiten.",
      },
      {
        vraag: "Wat gebeurt er in een processcan?",
        antwoord:
          "We lopen mee met je team en leggen per rol vast waar de uren blijven. Zo zie je zwart op wit welk handwerk je kunt automatiseren.",
      },
      {
        vraag: "Kijkt er nog een mens mee?",
        antwoord:
          "Waar het ertoe doet wel. Een concept-offerte staat klaar ter controle voordat hij verstuurd wordt. Mail die de automatisering niet zelf kan afhandelen, gaat door naar de juiste persoon.",
      },
      {
        vraag: "Wat gebeurt er na de oplevering?",
        antwoord:
          "Je team wordt op locatie getraind met jullie eigen werk als lesmateriaal. Daarna checken we elke maand wat er draait en ontwikkelen we de automatiseringen door.",
      },
    ],
  },
  cta: {
    statement: "Waar lekken jouw uren weg?",
    support:
      "We lopen mee met je team en laten zien welk handwerk eruit kan. Eerste automatisering live binnen 7 werkdagen.",
    primary: { label: "Plan een processcan", href: "/contact" },
  },
} as const satisfies Landing;
