/**
 * Configuratiedata voor de AI-agency features. Componenten bevatten geen
 * hardcoded copy: alles wat een bezoeker leest of wat de rekenmodellen voedt
 * staat hier. De rekenregels zelf staan in src/lib/agent-model.ts en
 * src/lib/roi-model.ts.
 */

export type AgencyIcon =
  | "building"
  | "cart"
  | "care"
  | "wrench"
  | "briefcase"
  | "spark"
  | "certificate";

export type BrancheSlug =
  | "vastgoed"
  | "ecommerce"
  | "zorg"
  | "installatie"
  | "zakelijk"
  | "anders";

/* ------------------------------------------------------------------ *
 * STAP 1 — IntroOverlay
 * ------------------------------------------------------------------ */

export const intro = {
  storageKey: "juno-intro",
  /** Totale looptijd in seconden; ook de deadline voor de LCP-noodrem. */
  duration: 2.4,
  label: "JUNO Media",
} as const;

/* ------------------------------------------------------------------ *
 * STAP 2 — CertificationBar
 * ------------------------------------------------------------------ */

export const certificationBar = {
  claim: {
    count: "6×",
    label: "Anthropic Certified",
    icon: "certificate" as AgencyIcon,
  },
  badgesLabel: "Partners en tooling",
  badges: [
    { id: "anthropic", name: "Anthropic" },
    { id: "supabase", name: "Supabase" },
    { id: "vercel", name: "Vercel" },
    { id: "shopify", name: "Shopify" },
    { id: "google-ads", name: "Google Ads" },
  ],
} as const;

/* ------------------------------------------------------------------ *
 * STAP 3 — BeforeAfter
 * ------------------------------------------------------------------ */

export const beforeAfter = {
  eyebrow: "Voor en na",
  heading: "Hetzelfde proces, twee snelheden",
  intro:
    "Zes stappen van melding tot vastlegging. Sleep de lijn om het verschil te zien.",
  dragLabel: "Vergelijking verschuiven",
  dragHint: "Sleep of gebruik de pijltjestoetsen",
  manual: {
    id: "manual",
    label: "Handmatig",
    total: "4u 20m",
    totalSeconds: 15_600,
    note: "Zes keer wachten op een mens die tijd heeft.",
    steps: [
      { name: "Melding binnenlezen", seconds: 1_200 },
      { name: "Gegevens opzoeken", seconds: 2_700 },
      { name: "Beoordelen en indelen", seconds: 2_100 },
      { name: "Actie uitzetten", seconds: 3_600 },
      { name: "Terugkoppeling schrijven", seconds: 3_000 },
      { name: "Vastleggen in systeem", seconds: 3_000 },
    ],
  },
  agent: {
    id: "agent",
    label: "Met agent",
    total: "3m 12s",
    totalSeconds: 192,
    note: "Dezelfde zes stappen, zonder wachtrij ertussen.",
    steps: [
      { name: "Melding binnenlezen", seconds: 8 },
      { name: "Gegevens opzoeken", seconds: 22 },
      { name: "Beoordelen en indelen", seconds: 15 },
      { name: "Actie uitzetten", seconds: 45 },
      { name: "Terugkoppeling schrijven", seconds: 62 },
      { name: "Vastleggen in systeem", seconds: 40 },
    ],
  },
} as const;

/* ------------------------------------------------------------------ *
 * STAP 4 — AgentConfigurator
 * ------------------------------------------------------------------ */

export type AgentTask = {
  slug: string;
  label: string;
  description: string;
  /** Minuten die één handeling nu handmatig kost. */
  manualMinutes: number;
  /** Minuten die dezelfde handeling met agent kost, inclusief controle. */
  autoMinutes: number;
  /** Aandeel handelingen dat de agent volledig afhandelt (0-1). */
  automationShare: number;
  /** Complexiteitsfactor voor de bouwindicatie. */
  buildFactor: number;
  nodes: readonly string[];
};

export type Branche = {
  slug: BrancheSlug;
  name: string;
  icon: AgencyIcon;
  result: string;
  tasks: readonly AgentTask[];
};

export const branches: readonly Branche[] = [
  {
    slug: "vastgoed",
    name: "Vastgoed",
    icon: "building",
    result: "Onderhoudsmeldingen binnen een minuut ingepland in plaats van een dag.",
    tasks: [
      {
        slug: "onderhoud",
        label: "Onderhoudsmeldingen",
        description: "Melding uitlezen, urgentie bepalen en de juiste partij inschakelen.",
        manualMinutes: 22,
        autoMinutes: 3,
        automationShare: 0.82,
        buildFactor: 1,
        nodes: [
          "Melding binnen",
          "Contract en historie ophalen",
          "Urgentie en categorie bepalen",
          "Werkbon naar monteur",
          "Huurder geinformeerd",
        ],
      },
      {
        slug: "huurders",
        label: "Huurderscommunicatie",
        description: "Vragen beantwoorden met de juiste dossierinformatie erbij.",
        manualMinutes: 14,
        autoMinutes: 2,
        automationShare: 0.75,
        buildFactor: 0.9,
        nodes: [
          "Vraag binnen",
          "Dossier en afspraken ophalen",
          "Antwoord opstellen",
          "Verzenden of doorzetten",
          "Vastleggen in dossier",
        ],
      },
      {
        slug: "documenten",
        label: "Documentverwerking",
        description: "Taxaties, contracten en facturen uitlezen en wegschrijven.",
        manualMinutes: 18,
        autoMinutes: 2,
        automationShare: 0.88,
        buildFactor: 1.1,
        nodes: [
          "Document ontvangen",
          "Type en partij herkennen",
          "Velden uitlezen",
          "Boeken in systeem",
          "Afwijking gemeld",
        ],
      },
      {
        slug: "leads",
        label: "Leadopvolging",
        description: "Interesse kwalificeren en bezichtigingen inplannen.",
        manualMinutes: 16,
        autoMinutes: 3,
        automationShare: 0.7,
        buildFactor: 0.95,
        nodes: [
          "Aanvraag binnen",
          "Profiel en object matchen",
          "Kwalificatie",
          "Bezichtiging ingepland",
          "Makelaar bijgepraat",
        ],
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: "cart",
    result: "Klantvragen en retouren afgehandeld voordat het ticket koud wordt.",
    tasks: [
      {
        slug: "klantvragen",
        label: "Klantvragen",
        description: "Waar-is-mijn-pakket, maten en voorraad direct beantwoord.",
        manualMinutes: 9,
        autoMinutes: 1,
        automationShare: 0.85,
        buildFactor: 0.85,
        nodes: [
          "Ticket binnen",
          "Order en track en trace ophalen",
          "Antwoord opstellen",
          "Verzenden",
          "Tevredenheid gemeten",
        ],
      },
      {
        slug: "retouren",
        label: "Retourafhandeling",
        description: "Retour beoordelen, label sturen en voorraad bijwerken.",
        manualMinutes: 12,
        autoMinutes: 2,
        automationShare: 0.8,
        buildFactor: 1,
        nodes: [
          "Retour aangemeld",
          "Order en beleid ophalen",
          "Beoordeling",
          "Label en creditnota",
          "Voorraad bijgewerkt",
        ],
      },
      {
        slug: "productdata",
        label: "Productdata",
        description: "Teksten, specificaties en vertalingen per variant genereren.",
        manualMinutes: 25,
        autoMinutes: 3,
        automationShare: 0.9,
        buildFactor: 1.15,
        nodes: [
          "Nieuwe SKU",
          "Specs en beeld ophalen",
          "Tekst en vertaling",
          "Publiceren in shop",
          "Controle door team",
        ],
      },
      {
        slug: "advertenties",
        label: "Advertentiebeheer",
        description: "Campagnes monitoren, biedingen en teksten bijsturen.",
        manualMinutes: 20,
        autoMinutes: 4,
        automationShare: 0.65,
        buildFactor: 1.2,
        nodes: [
          "Prestatie binnengehaald",
          "Marge en voorraad ophalen",
          "Analyse per campagne",
          "Bod en tekst aangepast",
          "Rapport naar marketeer",
        ],
      },
    ],
  },
  {
    slug: "zorg",
    name: "Zorg",
    icon: "care",
    result: "Administratie na het consult klaar in plaats van na de dienst.",
    tasks: [
      {
        slug: "verslaglegging",
        label: "Verslaglegging",
        description: "Consultnotities omzetten naar een gestructureerd verslag.",
        manualMinutes: 15,
        autoMinutes: 2,
        automationShare: 0.8,
        buildFactor: 1.15,
        nodes: [
          "Notitie of opname",
          "Dossiercontext ophalen",
          "Verslag structureren",
          "Klaarzetten in dossier",
          "Zorgverlener akkoord",
        ],
      },
      {
        slug: "intake",
        label: "Intake en triage",
        description: "Aanmeldingen compleet maken en op de juiste plek zetten.",
        manualMinutes: 20,
        autoMinutes: 4,
        automationShare: 0.7,
        buildFactor: 1.25,
        nodes: [
          "Aanmelding binnen",
          "Gegevens en verwijzing ophalen",
          "Triage voorstel",
          "Afspraak ingepland",
          "Behandelaar geinformeerd",
        ],
      },
      {
        slug: "planning",
        label: "Planning en roosters",
        description: "Afspraken, uitval en beschikbaarheid op elkaar leggen.",
        manualMinutes: 18,
        autoMinutes: 3,
        automationShare: 0.72,
        buildFactor: 1.1,
        nodes: [
          "Wijziging binnen",
          "Rooster en regels ophalen",
          "Alternatief berekend",
          "Verschoven en bevestigd",
          "Betrokkenen bijgepraat",
        ],
      },
      {
        slug: "declaraties",
        label: "Declaraties",
        description: "Prestaties coderen, controleren en indienen.",
        manualMinutes: 12,
        autoMinutes: 2,
        automationShare: 0.85,
        buildFactor: 1.2,
        nodes: [
          "Behandeling afgerond",
          "Codes en tarieven ophalen",
          "Controle op afwijking",
          "Declaratie ingediend",
          "Afkeur teruggemeld",
        ],
      },
    ],
  },
  {
    slug: "installatie",
    name: "Installatie en techniek",
    icon: "wrench",
    result: "Offerte en werkbon dezelfde dag de deur uit, niet volgende week.",
    tasks: [
      {
        slug: "offertes",
        label: "Offertes",
        description: "Van foto en opname naar een complete prijsopgave.",
        manualMinutes: 45,
        autoMinutes: 6,
        automationShare: 0.75,
        buildFactor: 1.1,
        nodes: [
          "Aanvraag met foto",
          "Prijslijst en historie ophalen",
          "Calculatie opgesteld",
          "Offerte verstuurd",
          "Opvolging ingepland",
        ],
      },
      {
        slug: "werkbonnen",
        label: "Werkbonnen",
        description: "Monteursnotities omzetten naar bon, uren en materiaal.",
        manualMinutes: 16,
        autoMinutes: 2,
        automationShare: 0.85,
        buildFactor: 0.95,
        nodes: [
          "Klus afgerond",
          "Uren en materiaal ophalen",
          "Bon opgesteld",
          "Naar facturatie",
          "Klant geinformeerd",
        ],
      },
      {
        slug: "planning",
        label: "Serviceplanning",
        description: "Storingen inplannen op route, skill en voorraad.",
        manualMinutes: 14,
        autoMinutes: 2,
        automationShare: 0.78,
        buildFactor: 1.05,
        nodes: [
          "Storing gemeld",
          "Route en skills ophalen",
          "Beste monteur bepaald",
          "Afspraak vastgezet",
          "Klant bevestigd",
        ],
      },
      {
        slug: "onderdelen",
        label: "Onderdelen bestellen",
        description: "Bestellijst uit de bon halen en bij de leverancier zetten.",
        manualMinutes: 11,
        autoMinutes: 2,
        automationShare: 0.8,
        buildFactor: 0.9,
        nodes: [
          "Onderdeel nodig",
          "Voorraad en leverancier ophalen",
          "Keuze en aantal bepaald",
          "Bestelling geplaatst",
          "Levering bewaakt",
        ],
      },
    ],
  },
  {
    slug: "zakelijk",
    name: "Zakelijke dienstverlening",
    icon: "briefcase",
    result: "Dossierwerk voorbereid opgeleverd, jij doet alleen het oordeel.",
    tasks: [
      {
        slug: "dossiers",
        label: "Dossiervoorbereiding",
        description: "Stukken samenvatten met bron en verwijzing erbij.",
        manualMinutes: 40,
        autoMinutes: 5,
        automationShare: 0.72,
        buildFactor: 1.2,
        nodes: [
          "Stukken ontvangen",
          "Dossier en normen ophalen",
          "Samenvatting met bron",
          "Klaargezet voor adviseur",
          "Aanvulling gevraagd",
        ],
      },
      {
        slug: "rapportages",
        label: "Rapportages",
        description: "Terugkerende rapportages vullen, duiden en versturen.",
        manualMinutes: 35,
        autoMinutes: 4,
        automationShare: 0.8,
        buildFactor: 1.05,
        nodes: [
          "Periode afgesloten",
          "Cijfers ophalen",
          "Analyse en toelichting",
          "Rapport verstuurd",
          "Vragen opgevangen",
        ],
      },
      {
        slug: "offertetrajecten",
        label: "Offertetrajecten",
        description: "Uitvraag beantwoorden met eerdere teksten en tarieven.",
        manualMinutes: 50,
        autoMinutes: 8,
        automationShare: 0.65,
        buildFactor: 1.15,
        nodes: [
          "Uitvraag binnen",
          "Eerdere voorstellen ophalen",
          "Concept opgesteld",
          "Naar partner ter controle",
          "Verstuurd en gelogd",
        ],
      },
      {
        slug: "inbox",
        label: "Inboxtriage",
        description: "Mail sorteren, samenvatten en het juiste antwoord voorstellen.",
        manualMinutes: 7,
        autoMinutes: 1,
        automationShare: 0.75,
        buildFactor: 0.8,
        nodes: [
          "Mail binnen",
          "Klant en context ophalen",
          "Intentie bepaald",
          "Antwoord voorgesteld",
          "Taak aangemaakt",
        ],
      },
    ],
  },
  {
    slug: "anders",
    name: "Anders",
    icon: "spark",
    result: "Elk proces met vaste stappen en veel herhaling is een kandidaat.",
    tasks: [
      {
        slug: "inbox",
        label: "Inbox en aanvragen",
        description: "Binnenkomende berichten sorteren en beantwoorden.",
        manualMinutes: 10,
        autoMinutes: 2,
        automationShare: 0.75,
        buildFactor: 0.9,
        nodes: [
          "Bericht binnen",
          "Context ophalen",
          "Intentie bepaald",
          "Antwoord of taak",
          "Vastgelegd",
        ],
      },
      {
        slug: "documenten",
        label: "Documenten uitlezen",
        description: "Formulieren en facturen omzetten naar bruikbare data.",
        manualMinutes: 15,
        autoMinutes: 2,
        automationShare: 0.85,
        buildFactor: 1,
        nodes: [
          "Document binnen",
          "Type herkend",
          "Velden uitgelezen",
          "Weggeschreven",
          "Afwijking gemeld",
        ],
      },
      {
        slug: "rapportage",
        label: "Terugkerende rapportage",
        description: "Data ophalen, duiden en op vaste momenten versturen.",
        manualMinutes: 30,
        autoMinutes: 4,
        automationShare: 0.8,
        buildFactor: 1,
        nodes: [
          "Moment bereikt",
          "Bronnen opgehaald",
          "Analyse",
          "Rapport verstuurd",
          "Reactie opgevangen",
        ],
      },
      {
        slug: "opvolging",
        label: "Opvolging en herinneringen",
        description: "Achterstanden signaleren en er zelf achteraan gaan.",
        manualMinutes: 8,
        autoMinutes: 1,
        automationShare: 0.8,
        buildFactor: 0.85,
        nodes: [
          "Termijn verstreken",
          "Status opgehaald",
          "Prioriteit bepaald",
          "Herinnering verstuurd",
          "Resultaat gelogd",
        ],
      },
    ],
  },
] as const;

export const configurator = {
  id: "configurator",
  eyebrow: "Agent samenstellen",
  heading: "Stel in drie stappen jouw agent samen",
  intro:
    "Kies je branche, de taak die het meeste tijd kost en het volume. Je krijgt direct een indicatie, zonder gesprek vooraf.",
  progressLabel: "Stap {current} van {total}",
  steps: [
    {
      id: "branche",
      title: "In welke branche werk je?",
      hint: "Kies wat het dichtst in de buurt komt.",
    },
    {
      id: "taak",
      title: "Welke taak kost het meeste tijd?",
      hint: "Je kunt later altijd een tweede proces toevoegen.",
    },
    {
      id: "volume",
      title: "Hoeveel keer per week gebeurt dit?",
      hint: "Een ruwe schatting is genoeg.",
    },
  ],
  volume: {
    min: 10,
    max: 500,
    step: 10,
    default: 120,
    label: "Handelingen per week",
    unit: "per week",
    ariaLabel: "Aantal handelingen per week",
  },
  nav: {
    back: "Terug",
    next: "Volgende",
  },
  flow: {
    label: "Zo loopt de flow",
    caption: "Vijf stappen, van signaal tot terugkoppeling.",
  },
  result: {
    eyebrow: "Jouw indicatie",
    headingTemplate: "{taak} voor {branche}",
    metrics: {
      hours: { label: "Uren bespaard per maand", suffix: "u" },
      leadTime: { label: "Doorlooptijd per handeling", from: "nu", to: "met agent" },
      investment: { label: "Indicatieve investering", note: "eenmalig, exclusief btw" },
    },
    disclaimer:
      "Indicatie op basis van jouw invoer en onze eerdere trajecten. Geen offerte.",
  },
  email: {
    heading: "Stuur dit plan naar mijn inbox",
    body: "Je krijgt de flow, de cijfers en de aannames als PDF-samenvatting.",
    label: "E-mailadres",
    placeholder: "naam@bedrijf.nl",
    cta: "Stuur het plan",
    honeypotLabel: "Laat dit veld leeg",
    states: {
      idle: "",
      loading: "Bezig met versturen...",
      success: "Verstuurd. Check je inbox, ook de spammap.",
      duplicate: "Dit adres staat er al bij. Het plan is opnieuw verstuurd.",
      error: "Versturen lukte niet. Probeer het zo nog eens of mail ons direct.",
    },
    errors: {
      required: "Vul je e-mailadres in.",
      invalid: "Dit lijkt geen geldig e-mailadres.",
    },
  },
  share: {
    label: "Deel deze uitkomst",
    copy: "Kopieer link",
    copied: "Link gekopieerd",
  },
} as const;

/* ------------------------------------------------------------------ *
 * STAP 5 — RoiCalculator
 * ------------------------------------------------------------------ */

export const roi = {
  id: "roi",
  eyebrow: "Rekenen",
  heading: "Wat levert automatisering jou op?",
  intro: "Schuif de waarden naar jouw situatie. De uitkomst rekent live mee.",
  fields: {
    hours: {
      id: "hours",
      label: "Uren per week aan repetitief werk",
      min: 1,
      max: 40,
      step: 1,
      default: 12,
      suffix: "u",
    },
    rate: {
      id: "rate",
      label: "Gemiddeld uurtarief",
      min: 25,
      max: 250,
      step: 5,
      default: 65,
      prefix: "EUR",
    },
    people: {
      id: "people",
      label: "Aantal betrokken medewerkers",
      min: 1,
      max: 50,
      step: 1,
      default: 4,
      suffix: "fte",
    },
    automation: {
      id: "automation",
      label: "Geschat automatiseringspercentage",
      min: 20,
      max: 90,
      step: 5,
      default: 65,
      suffix: "%",
    },
  },
  outputs: {
    monthly: { label: "Besparing per maand" },
    yearly: { label: "Besparing per jaar" },
    payback: { label: "Terugverdientijd", suffix: "maanden" },
    hoursFreed: { label: "Vrijgekomen uren per jaar", suffix: "u" },
  },
  chart: {
    label: "Kosten over twaalf maanden",
    months: 12,
    legend: {
      without: "Zonder automatisering",
      with: "Met automatisering",
    },
    crossingLabel: "Break-even",
    noCrossingLabel: "Break-even valt na maand 12",
    axisLabel: "Maand",
  },
  assumptions: {
    title: "Aannames achter deze som",
    toggleOpen: "Toon aannames",
    toggleClose: "Verberg aannames",
    items: [
      "Een maand telt 4,33 werkweken.",
      "De bouwkosten schalen mee met het aantal betrokken medewerkers en het automatiseringspercentage.",
      "Naast de bouw rekenen we maandelijkse kosten voor hosting, modelgebruik en beheer.",
      "Vrijgekomen uren gaan naar werk dat wel oplevert; ze zijn hier gewaardeerd tegen het ingevulde uurtarief.",
      "Alle bedragen zijn exclusief btw en indicatief, geen offerte.",
    ],
  },
  share: {
    label: "Deel deze berekening",
    copy: "Kopieer link",
    copied: "Link gekopieerd",
  },
  bridge: {
    question: "Klopt dit voor jouw situatie?",
    body: "Stel je eigen agent samen en zie welke flow erbij hoort.",
    cta: "Naar de configurator",
    href: "#configurator",
  },
} as const;

/* ------------------------------------------------------------------ *
 * STAP 6 — UseCasePreview
 * ------------------------------------------------------------------ */

export const useCasePreview = {
  eyebrow: "Use cases",
  heading: "Wat een agent doet in jouw branche",
  intro: "Zes branches, zes processen die we vaker hebben gebouwd.",
  cta: "Bekijk alle use cases",
  href: "/use-cases",
  itemCta: "Lees verder",
} as const;

/* ------------------------------------------------------------------ *
 * STAP 7 — DigestSignup
 * ------------------------------------------------------------------ */

export const digest = {
  eyebrow: "Digest",
  heading: "Elke twee weken een agent uit de praktijk",
  body: "Een gebouwde flow, de cijfers erachter en wat we anders zouden doen. Geen nieuwsbrief met tips.",
  label: "E-mailadres",
  placeholder: "naam@bedrijf.nl",
  cta: "Schrijf me in",
  honeypotLabel: "Laat dit veld leeg",
  states: {
    idle: "",
    loading: "Bezig met inschrijven...",
    success: "Bijna klaar. Bevestig via de mail die je nu krijgt.",
    duplicate: "Dit adres staat al op de lijst.",
    rate: "Te veel pogingen vanaf dit adres. Probeer het over een uur nog eens.",
    error: "Inschrijven lukte niet. Probeer het zo nog eens.",
  },
  errors: {
    required: "Vul je e-mailadres in.",
    invalid: "Dit lijkt geen geldig e-mailadres.",
  },
  footnote: "Eens per twee weken. Afmelden kan met een klik in elke mail.",
  confirm: {
    heading: {
      loading: "Bezig met bevestigen...",
      success: "Je staat op de lijst",
      invalid: "Deze link werkt niet meer",
      error: "Bevestigen lukte niet",
    },
    body: {
      loading: "Een moment, we controleren je link.",
      success: "De eerstvolgende digest komt vanzelf binnen.",
      invalid: "De link is verlopen of al gebruikt. Schrijf je opnieuw in.",
      error: "Er ging iets mis aan onze kant. Probeer de link zo nog eens.",
    },
    cta: "Terug naar de site",
  },
} as const;

/* ------------------------------------------------------------------ *
 * STAP 8 — StickyCta
 * ------------------------------------------------------------------ */

export const stickyCta = {
  href: "/contact",
  ariaLabel: "Contact opnemen",
  /** Wordt zichtbaar zodra de bezoeker voorbij deze hoogte is. */
  showAfterVh: 0.9,
  default: "Plan een call",
  sections: [
    { selector: "[data-cta-zone='hero']", label: "Plan een call" },
    { selector: "[data-cta-zone='before-after']", label: "Wat levert dit jou op?" },
    { selector: "[data-cta-zone='configurator']", label: "Bespreek jouw agent" },
    { selector: "[data-cta-zone='roi']", label: "Laat het doorrekenen" },
    { selector: "[data-cta-zone='cases']", label: "Bespreek jouw case" },
  ],
  hideSelector: "[data-cta-zone='footer']",
} as const;

export const agency = {
  intro,
  certificationBar,
  beforeAfter,
  branches,
  configurator,
  roi,
  useCasePreview,
  digest,
  stickyCta,
} as const;
