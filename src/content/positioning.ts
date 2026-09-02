/**
 * Positionering: één bron voor alle tekst en getallen van de herpositionering.
 *
 * De regel achter dit bestand: geen enkel cijfer op de site dat niet uit een
 * bron komt. Een waarde die `null` is, rendert niet — er komt geen placeholder
 * voor in de plaats en de omliggende sectie valt weg als er niets overblijft.
 * Componenten in src/components/sections/ bevatten daarom geen eigen getallen.
 */

import { roi } from "@/content/roi";
import { formatEuro } from "@/lib/format";
import { resolveSubLines, withSource } from "@/lib/positioning-rules";
import { WEEKS_PER_MONTH } from "@/lib/roi-model";

/** Anker van de AgentConfigurator; de enige CTA-bestemming op de site. */
export const CONFIGURATOR_ID = "configurator";

/**
 * Maandprijs van een AI-medewerker. Eén getal op drie plekken: de missieregel
 * "Vanaf {prijs} per maand", de mechanisme-regel in de hero en de linkerkolom
 * van de rekensom. Blijft null tot de prijs vaststaat; alles wat eraan hangt
 * rendert dan zonder bedrag.
 */
const agentPerMonth: number | null = null;

/**
 * Maandkosten van een mens die hetzelfde werk doet, afgeleid van het
 * ROI-model: de standaarduren per week tegen het standaarduurtarief. Geen
 * meting, maar een som uit een model dat op de site zelf te controleren is —
 * daarom staat de rekenregel als bronvermelding onder de claim.
 */
const humanPerMonth = Math.round(
  roi.fields.hours.default * WEEKS_PER_MONTH * roi.fields.rate.default,
);

/**
 * De missie. Eyebrow en kop staan in de hero, `full` is de kop van de
 * CtaBanner en de missieregel op /over-ons.
 */
export const mission = {
  /** Eyebrow boven de H1. Kort, uppercase in de UI. */
  eyebrow: "Werk dat regels volgt, wordt goedkoper door een agent gedaan.",
  /** Volledige missiezin. Ook de kop van CtaBanner. */
  full: "Werk dat regels volgt, wordt goedkoper door een agent gedaan. In 2030 draait elk Nederlands bedrijf erop. Wij bouwen ze nu.",
  heading: "AI-medewerkers voor het Nederlandse mkb.",
  /** Dezelfde kop, per regel gesplitst voor de woordreveal in de hero. */
  headingLines: ["AI-medewerkers voor", "het Nederlandse mkb."],
  /**
   * Drie korte regels onder de kop. `{prijs}` is de maandprijs van een agent;
   * zolang die null is valt die regel weg (zie `missionSub`).
   */
  sub: ["Live in 14 dagen.", "Vanaf {prijs} per maand.", "Op onze eigen infrastructuur."],
  physics:
    "Elk proces dat regels volgt, kan vandaag een agent doen. De enige vraag is hoe snel jij het bouwt.",
  cta: "Configureer je medewerker",
} as const;

/** De missieregels zoals ze renderen: {prijs} ingevuld, of de regel weg. */
export const missionSub: readonly string[] = resolveSubLines(mission.sub, agentPerMonth, formatEuro);

/** Eén cijfer in de probleemstelling, met de bron die het draagt. */
export type ProblemStat = {
  value: number | null;
  /** Achtervoegsel dat meetelt in de weergave, bijvoorbeeld "%". */
  suffix: string;
  label: string;
  /** Bron-URL. Zonder bron rendert de regel niet. */
  source: string | null;
  /** Naam van de bron zoals hij onder het cijfer staat: "CBS". */
  sourceLabel: string;
  /** Peildatum, leesbaar: "juni 2026". Zonder peildatum rendert de regel niet. */
  asOf: string | null;
  /** De exacte reeks en de berekening, voor wie de bron opent. */
  note: string;
};

/**
 * Waar het mkb op vastloopt. Drie cijfers rechts, vier observaties eronder.
 *
 * REGEL: elke stat heeft een bron-URL en een peildatum. Zonder source rendert
 * de regel niet. Verzin geen cijfers. De cijfers hieronder zijn op 27
 * augustus 2026 uit CBS StatLine gelezen; de `note` zegt precies welke reeks.
 */
export const problem = {
  heading: "Waar het mkb op vastloopt",
  lead: "Niet op techniek. Op uren en op mensen die er niet zijn.",
  /** Voorvoegsel van de bronregel onder elk cijfer: "bron: CBS, juni 2026". */
  sourcePrefix: "bron",
  stats: [
    {
      /* 57,4 + 92,7 duizend: de twee CBS-klassen onder de 100 werkzame
         personen. CBS kent geen grens op 250, dus dit is de ondergrens van
         het mkb, en het label zegt dat ook. */
      value: 150100,
      suffix: "",
      label: "openstaande vacatures bij bedrijven tot 100 medewerkers",
      source: "https://opendata.cbs.nl/statline/#/CBS/nl/dataset/80472ned/table",
      sourceLabel: "CBS",
      asOf: "juni 2026",
      note: "CBS StatLine 80472ned: openstaande vacatures aan het einde van het 2e kwartaal 2026, bedrijfsgrootte 0 tot 10 (57,4 duizend) plus 10 tot 100 werkzame personen (92,7 duizend), alle economische activiteiten, niet seizoengecorrigeerd, definitief.",
    },
    {
      /* Index juli 2026 130,9 tegen jaargemiddelde 2022 105,7 (2020=100):
         plus 23,8 procent, afgerond op hele procenten. */
      value: 24,
      suffix: "%",
      label: "stijging loonkosten sinds 2022",
      source: "https://opendata.cbs.nl/statline/#/CBS/nl/dataset/85663NED/table",
      sourceLabel: "CBS",
      asOf: "juli 2026",
      note: "CBS StatLine 85663NED: contractuele loonkosten per uur, totaal cao-sectoren, alle economische activiteiten. Index juli 2026 (voorlopig) 130,9 tegenover jaargemiddelde 2022 105,7, basis 2020=100: plus 23,8 procent.",
    },
    {
      /* Geen CBS- of UWV-reeks meet dit. Blijft null tot er een bron is. */
      value: null,
      suffix: "%",
      label: "van de werkweek gaat op aan werk dat regels volgt",
      source: null,
      sourceLabel: "",
      asOf: null,
      note: "Geen CBS- of UWV-reeks meet dit; de regel rendert niet zolang er geen bron is.",
    },
  ] as readonly ProblemStat[],
  /** Deze vier hebben geen cijfer nodig — het zijn observaties, geen claims. */
  observations: [
    "Het werk dat blijft liggen is het werk dat niemand wil doen.",
    "Een extra medewerker aannemen duurt maanden en is de duurste oplossing.",
    "De software om dit op te lossen bestaat al. Niemand bouwt het voor een bedrijf van twaalf man.",
    "Een IT-afdeling die dit kan, heeft het mkb niet.",
  ],
  close:
    "Daarom bouwen wij AI-medewerkers. Geen tool die je zelf moet leren, maar een collega die het werk doet.",
} as const;

/** De stats die renderen: waarde, bron en peildatum alle drie aanwezig. */
export const problemStats = withSource(problem.stats);

/**
 * De rekensom: agent links, mens rechts, in dezelfde typografie. Zolang een
 * prijs null is staat er `priceFallback` op de plek van het bedrag — geen €—,
 * geen €0. `human.price` wacht op een bron; de modelwaarde uit
 * `mechanism.humanPerMonth` is een som, geen meting.
 */
export const reckoning = {
  heading: "De rekensom",
  priceFallback: "Reken het door",
  agent: {
    label: "AI-medewerker",
    price: agentPerMonth,
    unit: "per maand",
    notes: ["24/7 beschikbaar", "geen verloop", "schaalt binnen een dag"],
  },
  human: {
    label: "Mens voor hetzelfde werk",
    price: null as number | null,
    unit: "per maand",
    notes: ["40 uur per week", "inwerktijd en verloop", "werven duurt maanden"],
    source: null as string | null,
  },
  footnote: "Bedragen zijn indicatief. Reken het door met je eigen cijfers.",
  cta: "Reken het zelf uit",
  /** Anker van de RoiCalculator; de knop scrollt daarheen. */
  ctaTargetId: roi.id,
} as const;

export const positioning = {
  /**
   * De missie, in de oude vorm voor bestaande afnemers. Afgeleid van
   * `mission` hierboven, zodat er één bron blijft.
   */
  mission: {
    eyebrow: mission.eyebrow,
    heading: mission.heading,
    line: mission.full,
  },

  /**
   * Het mechanisme als cijfer, niet als redenering. `agentPerMonth` is de
   * productprijs en blijft null tot die vaststaat; zolang één van de twee
   * bedragen ontbreekt rendert de hele regel niet. Een halve vergelijking is
   * geen vergelijking.
   */
  mechanism: {
    agentPerMonth,
    humanPerMonth,
    agentTemplate: "Een AI-medewerker: {price} per maand.",
    humanTemplate: "Een mens voor hetzelfde werk: {price}.",
    source: `Gerekend met ${roi.fields.hours.default} uur per week tegen ${roi.fields.rate.default} euro per uur, de waarden uit de calculator op deze pagina.`,
  },

  /** Fysica-claim onder de knop in de hero. */
  physics: mission.physics,

  /** Eén CTA op de hele site: nav, hero, sticky pill, kaarten en banner. */
  cta: {
    label: mission.cta,
    /** Onder 1024px past het volledige label niet in de nav-shell. */
    shortLabel: "Configureer",
    href: `/#${CONFIGURATOR_ID}`,
    targetId: CONFIGURATOR_ID,
    ariaLabel: "Naar de configurator",
  },

  /**
   * Garantieregel onder elke primaire knop. Staat uit tot de belofte hard is;
   * met `enabled: false` rendert er niets, geen grijze variant.
   */
  guarantee: {
    enabled: false,
    text: "Live in 14 dagen, anders gratis.",
  },

  /**
   * Drie cijfers onder de hero. Staat uit tot /api/metrics een bron heeft; met
   * `enabled: false` rendert de sectie niet. Zie ook src/app/api/metrics.
   */
  liveCounters: {
    enabled: false,
    ariaLabel: "Cijfers uit de productie",
    metrics: [
      { key: "agentsInProduction", label: "agents in productie", suffix: "" },
      { key: "hoursSavedThisMonth", label: "uren bespaard deze maand", suffix: "u" },
      { key: "daysToLive", label: "dagen van kick-off tot live", suffix: "" },
    ],
  },

  /**
   * Drie producten met een naam. Prijzen blijven null tot ze vaststaan; de
   * kaart toont dan "Prijs op aanvraag" in dezelfde typografie, geen €0 en
   * geen "vanaf €—". De middelste kaart staat uitgelicht.
   */
  products: {
    eyebrow: "Producten",
    heading: "Drie AI-medewerkers",
    intro: "Elk neemt één deel van het werk over. Je begint met er één.",
    priceOnRequest: "Prijs op aanvraag",
    priceSuffix: "per maand",
    ctaTemplate: "Configureer {naam}",
    bulletLabels: {
      takesOver: "Neemt over",
      delivers: "Levert op",
      runsOn: "Draait op",
    },
    items: [
      {
        slug: "receptionist",
        name: "Receptionist",
        domain: "inbound",
        line: "Vangt binnenkomende vragen, mail en telefoon.",
        takesOver: "De eerste lijn op mail, formulieren en telefoon.",
        delivers: "Een beantwoord bericht, of een taak met context in je systeem.",
        runsOn: "Onze infrastructuur, gekoppeld aan je mailbox en telefonie.",
        pricePerMonth: null as number | null,
        featured: false,
      },
      {
        slug: "hunter",
        name: "Hunter",
        domain: "outbound",
        line: "Zoekt leads, verrijkt ze, schrijft de eerste mail.",
        takesOver: "Lijsten bouwen, gegevens opzoeken, het eerste contact schrijven.",
        delivers: "Een verrijkte lead met een concept-mail die klaarstaat.",
        runsOn: "Onze infrastructuur, gekoppeld aan je CRM en mailserver.",
        pricePerMonth: null as number | null,
        featured: true,
      },
      {
        slug: "operator",
        name: "Operator",
        domain: "backoffice",
        line: "Verwerkt documenten, werkt systemen bij, rapporteert.",
        takesOver: "Documenten uitlezen, velden overtypen, rapportages vullen.",
        delivers: "Een geboekte regel in je systeem en een rapport met de afwijkingen.",
        runsOn: "Onze infrastructuur, gekoppeld aan je administratie.",
        pricePerMonth: null as number | null,
        featured: false,
      },
    ],
  },

  /**
   * Het bewijs: JUNO draait zelf op agents. Cijfers komen uit dezelfde
   * metrics-route als LiveCounters en volgen dezelfde faalregels.
   */
  factoryStatus: {
    eyebrow: "Eigen productie",
    heading: "Hoe JUNO zichzelf runt",
    intro:
      "We bouwen agents met agents. Wat hieronder staat draait vandaag, in onze eigen productie.",
    metrics: [
      { key: "agentTasksToday", label: "taken door agents vandaag", suffix: "" },
      { key: "mailsWritten", label: "mails geschreven", suffix: "" },
      { key: "leadsEnriched", label: "leads verrijkt", suffix: "" },
      { key: "humanHoursSavedThisWeek", label: "uren mens bespaard deze week", suffix: "u" },
    ],
    stackLabel: "Waar het op draait",
    stack: [
      { name: "Claude", line: "Leest, schrijft en beslist in elke agent." },
      { name: "Supabase", line: "Database achter de leads en de inschrijvingen." },
      { name: "Vercel", line: "Draait deze site en de API-routes erachter." },
      { name: "Next.js", line: "Eén codebase voor de pagina's en de routes." },
    ],
    link: {
      label: "Lees wat er misging",
      href: "/hoe-juno-zichzelf-runt",
    },
    /**
     * De uitgebreide versie op /hoe-juno-zichzelf-runt.
     *
     * `agents` is leeg. Per agent hoort hier te staan wat hij doet, hoe vaak
     * hij draait, wat er misging en wat dat opleverde — inclusief de
     * mislukkingen, want dat is het punt van de pagina. Die gegevens komen uit
     * onze eigen productie en die staat nergens vastgelegd, dus er valt niets
     * te vullen zonder het te verzinnen. De pagina toont zolang een eerlijke
     * lege staat.
     */
    page: {
      title: "Hoe JUNO zichzelf runt",
      intro:
        "We bouwen agents met agents. Hieronder staat per agent wat hij doet, hoe vaak hij draait en wat er misging.",
      metaDescription:
        "Per agent wat hij doet, hoe vaak hij draait en wat er misging. Inclusief de mislukkingen.",
      sections: {
        agents: "De agents",
        stack: "Waar het op draait",
      },
      fields: {
        cadence: "Draait",
        does: "Doet",
        failed: "Ging mis",
        result: "Leverde op",
      },
      empty:
        "De log per agent staat nog niet online. Hij komt er zodra we hem uit onze eigen productie kunnen halen; tot die tijd staat hier liever niets dan iets verzonnens.",
      agents: [] as readonly {
        name: string;
        does: string;
        cadence: string;
        failed: string;
        result: string;
      }[],
    },
  },

  /** Wat we niet doen. Drie regels, groot gezet, geen visual. */
  notDoing: {
    ariaLabel: "Wat we niet doen",
    lines: [
      "Geen strategiedeck.",
      "Geen zes maanden discovery.",
      "In week 1 staat er iets dat werkt.",
    ],
    support:
      "In week 1 kiezen we één proces, bouwen we de flow en laten we hem op je eigen data draaien.",
  },

  /** De build-log. Tabel en API blijven die van de digest. */
  buildLog: {
    eyebrow: "Build-log",
    heading: "Wekelijkse build-log",
    body: "Wat live ging, wat brak en wat we eruit leerden.",
    failures: "De mislukkingen staan er ook in. Dat is het verschil met een nieuwsbrief.",
    footnote: "Elke week. Afmelden kan met een klik in elke mail.",
  },

  /** Onderaan elke pagina, onder de footerkolommen. */
  certification: {
    template: "{count} {label}",
  },
} as const;

export type Product = (typeof positioning.products.items)[number];
