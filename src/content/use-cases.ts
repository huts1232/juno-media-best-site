import { branches, type AgencyIcon, type BrancheSlug } from "./agency";

/**
 * Inhoud van /use-cases en /use-cases/[branche]. Naam en icoon komen uit
 * agency.ts, zodat de kaart op de homepage en de detailpagina niet uit elkaar
 * kunnen lopen.
 */
export type UseCase = {
  slug: BrancheSlug;
  title: string;
  intro: string;
  metaDescription: string;
  /** Taak-slug waarmee de configuratorlink wordt voorgevuld. */
  configuratorTask: string;
  problems: readonly { title: string; body: string }[];
  solutions: readonly { title: string; body: string }[];
  numbers: readonly { value: string; label: string }[];
  flows: readonly { title: string; steps: readonly string[] }[];
  faq: readonly { question: string; answer: string }[];
  /** Twee case-slugs uit content/cases.ts. */
  relatedCases: readonly [string, string];
};

export const useCasesIndex = {
  eyebrow: "Use cases",
  title: "AI-agents per branche",
  intro:
    "Zes branches, zes processen die we vaker hebben gebouwd. Elke pagina laat zien wat er misgaat, wat de agent overneemt en wat dat oplevert.",
  cta: "Bekijk de use case",
  sections: {
    problems: "Waar het vastloopt",
    solutions: "Wat de agent overneemt",
    numbers: "Wat het oplevert",
    flows: "Zo ziet dat eruit",
    faq: "Veelgestelde vragen",
    cases: "Werk uit dezelfde hoek",
    configurator: "Reken het door voor jouw situatie",
    configuratorCta: "Stel jouw agent samen",
  },
} as const;

export const useCases: readonly UseCase[] = [
  {
    slug: "vastgoed",
    title: "AI-agents voor vastgoedbeheer",
    intro:
      "Beheerders verliezen hun dag aan meldingen doorzetten, dossiers zoeken en huurders bijpraten. Een agent doet die drie dingen tegelijk, binnen een minuut.",
    metaDescription:
      "Onderhoudsmeldingen, huurderscommunicatie en documentverwerking automatiseren met AI-agents. Zie het proces, de cijfers en wat een traject kost.",
    configuratorTask: "onderhoud",
    problems: [
      {
        title: "Meldingen komen overal binnen",
        body: "Mail, telefoon, WhatsApp en het portaal. Niemand weet welke melding het langst ligt.",
      },
      {
        title: "Elke melding begint met zoeken",
        body: "Welk contract, welke aannemer, wat is er vorig jaar gebeurd. Dat kost meer tijd dan de melding zelf.",
      },
      {
        title: "Huurders bellen omdat ze niets horen",
        body: "De helft van het telefoonverkeer gaat over de status van iets dat al loopt.",
      },
      {
        title: "Dossiers lopen achter",
        body: "Vastleggen gebeurt aan het eind van de dag, of niet. Bij een geschil ontbreekt het spoor.",
      },
    ],
    solutions: [
      {
        title: "Melding uitlezen en indelen",
        body: "De agent haalt object, huurder en urgentie uit de tekst en zet de melding in de juiste categorie.",
      },
      {
        title: "Context erbij zoeken",
        body: "Contract, garantie en onderhoudshistorie worden opgehaald voordat er iemand naar kijkt.",
      },
      {
        title: "Zelf uitzetten en terugkoppelen",
        body: "Werkbon naar de vaste partij, bevestiging naar de huurder, afspraak in de agenda.",
      },
      {
        title: "Vastleggen zonder nawerk",
        body: "Elke stap komt met bron en tijdstip in het dossier te staan.",
      },
    ],
    numbers: [
      { value: "4u 20m", label: "Doorlooptijd nu, van melding tot vastlegging" },
      { value: "3m 12s", label: "Doorlooptijd met agent" },
      { value: "82%", label: "Meldingen die zonder mens de deur uit gaan" },
    ],
    flows: [
      {
        title: "Onderhoudsmelding",
        steps: [
          "Melding binnen",
          "Contract en historie ophalen",
          "Urgentie en categorie bepalen",
          "Werkbon naar monteur",
          "Huurder geinformeerd",
        ],
      },
      {
        title: "Huurdersvraag",
        steps: [
          "Vraag binnen",
          "Dossier en afspraken ophalen",
          "Antwoord opstellen",
          "Verzenden of doorzetten",
          "Vastleggen in dossier",
        ],
      },
    ],
    faq: [
      {
        question: "Werkt dit met ons beheersysteem?",
        answer:
          "Ja. We koppelen op de API of, als die er niet is, op export en mail. De agent schrijft terug in het systeem dat je al gebruikt.",
      },
      {
        question: "Wat gebeurt er bij een spoedmelding?",
        answer:
          "Spoed herkent de agent aan de inhoud, niet aan een vinkje. Die meldingen gaan direct naar de dienstdoende partij en naar een mens.",
      },
      {
        question: "Blijft de huurder een mens spreken?",
        answer:
          "Altijd als hij dat wil. De agent handelt het standaardwerk af en zet alles wat afwijkt door met de context erbij.",
      },
      {
        question: "Hoe lang duurt de bouw?",
        answer:
          "Een eerste werkende flow staat doorgaans in vier tot zes weken, inclusief koppeling en meekijken op de eerste honderd meldingen.",
      },
      {
        question: "Wat kost het?",
        answer:
          "De bouw is eenmalig en begint rond de zevenduizend euro. Daarnaast betaal je per maand voor hosting, modelgebruik en beheer.",
      },
    ],
    relatedCases: ["atlas-grid", "brightpath"],
  },
  {
    slug: "ecommerce",
    title: "AI-agents voor e-commerce",
    intro:
      "Klantvragen, retouren en productdata zijn drie keer hetzelfde werk in een andere jas. Een agent handelt ze af terwijl je slaapt.",
    metaDescription:
      "Klantvragen, retouren, productteksten en campagnes automatiseren met AI-agents voor webshops. Proces, cijfers en indicatie van de investering.",
    configuratorTask: "klantvragen",
    problems: [
      {
        title: "Tachtig procent van de tickets is hetzelfde",
        body: "Waar is mijn pakket, welke maat, wanneer weer op voorraad. Elke keer opnieuw opzoeken.",
      },
      {
        title: "Retouren kosten meer dan ze opleveren",
        body: "Beoordelen, label sturen, crediteren en voorraad bijwerken raakt vier systemen.",
      },
      {
        title: "Nieuwe producten blijven liggen",
        body: "Teksten, specificaties en vertalingen zijn het knelpunt tussen inkoop en verkoop.",
      },
      {
        title: "Campagnes draaien op oude cijfers",
        body: "Marge en voorraad veranderen dagelijks, de biedingen niet.",
      },
    ],
    solutions: [
      {
        title: "Tickets beantwoorden met echte data",
        body: "De agent haalt order, verzending en voorraad op en antwoordt in jouw toon.",
      },
      {
        title: "Retour van aanmelding tot creditnota",
        body: "Beoordeling op basis van je eigen beleid, label en boeking in één doorloop.",
      },
      {
        title: "Productteksten die af zijn",
        body: "Specs erin, tekst en vertaling eruit, klaar voor controle in plaats van klaar om te schrijven.",
      },
      {
        title: "Campagnes bijsturen op marge",
        body: "Biedingen en teksten volgen voorraad en marge, met een rapport naar de marketeer.",
      },
    ],
    numbers: [
      { value: "9m", label: "Gemiddelde afhandeltijd per ticket nu" },
      { value: "1m", label: "Afhandeltijd met agent, inclusief controle" },
      { value: "85%", label: "Tickets die de agent zelf afmaakt" },
    ],
    flows: [
      {
        title: "Klantvraag",
        steps: [
          "Ticket binnen",
          "Order en track en trace ophalen",
          "Antwoord opstellen",
          "Verzenden",
          "Tevredenheid gemeten",
        ],
      },
      {
        title: "Retour",
        steps: [
          "Retour aangemeld",
          "Order en beleid ophalen",
          "Beoordeling",
          "Label en creditnota",
          "Voorraad bijgewerkt",
        ],
      },
    ],
    faq: [
      {
        question: "Werkt dit op Shopify?",
        answer:
          "Ja, en ook op WooCommerce, Magento en een eigen platform. De agent praat met de API die je hebt.",
      },
      {
        question: "Antwoordt de agent in onze stijl?",
        answer:
          "We leggen je toon vast in richtlijnen en voorbeelden. Je ziet de eerste weken elk antwoord voordat het verstuurd wordt.",
      },
      {
        question: "Wat als de agent het niet weet?",
        answer:
          "Dan gokt hij niet. Het ticket gaat naar een mens met de opgezochte context erbij, zodat het antwoord sneller klaar is.",
      },
      {
        question: "Kan dit meerdere talen aan?",
        answer:
          "Ja. Taal wordt herkend uit het bericht; antwoord en productteksten volgen dezelfde taal.",
      },
      {
        question: "Hoe snel staat dit live?",
        answer:
          "Een eerste flow op klantvragen draait meestal binnen een maand, inclusief koppeling met je helpdesk.",
      },
    ],
    relatedCases: ["orbit-pay", "forma-lab"],
  },
  {
    slug: "zorg",
    title: "AI-agents voor de zorg",
    intro:
      "Administratie is het deel van de zorg dat niemand koos. Een agent maakt verslagen, triage en declaraties klaar, de zorgverlener houdt het oordeel.",
    metaDescription:
      "Verslaglegging, intake, planning en declaraties ondersteunen met AI-agents in de zorg. Proces, cijfers en randvoorwaarden.",
    configuratorTask: "verslaglegging",
    problems: [
      {
        title: "Verslagen schuiven door naar de avond",
        body: "Wat na het consult niet af is, komt na de dienst. Dat is precies waar de tijd verdwijnt.",
      },
      {
        title: "Intakes zijn zelden compleet",
        body: "Ontbrekende verwijzing of gegevens leveren twee extra rondjes op voordat er iets kan.",
      },
      {
        title: "Planning valt elke dag om",
        body: "Uitval en spoed moeten handmatig worden opgevangen, meestal door dezelfde persoon.",
      },
      {
        title: "Declaraties komen terug",
        body: "Een verkeerde code wordt pas weken later zichtbaar, als de afkeur binnenkomt.",
      },
    ],
    solutions: [
      {
        title: "Verslag klaarzetten, niet vaststellen",
        body: "De agent structureert notities tot een concept in het juiste format. De zorgverlener tekent af.",
      },
      {
        title: "Intake compleet maken",
        body: "Ontbrekende stukken worden opgevraagd voordat de aanmelding op een wachtlijst belandt.",
      },
      {
        title: "Planning die zichzelf herstelt",
        body: "Bij uitval rekent de agent alternatieven door binnen jouw regels en bevestigt hij de verschuiving.",
      },
      {
        title: "Declaraties vooraf controleren",
        body: "Codes en tarieven worden getoetst voor het indienen; afwijkingen komen direct terug.",
      },
    ],
    numbers: [
      { value: "15m", label: "Verslaglegging per consult nu" },
      { value: "2m", label: "Controletijd met agent" },
      { value: "80%", label: "Verslagen die zonder correctie akkoord gaan" },
    ],
    flows: [
      {
        title: "Verslaglegging",
        steps: [
          "Notitie of opname",
          "Dossiercontext ophalen",
          "Verslag structureren",
          "Klaarzetten in dossier",
          "Zorgverlener akkoord",
        ],
      },
      {
        title: "Intake en triage",
        steps: [
          "Aanmelding binnen",
          "Gegevens en verwijzing ophalen",
          "Triage voorstel",
          "Afspraak ingepland",
          "Behandelaar geinformeerd",
        ],
      },
    ],
    faq: [
      {
        question: "Hoe zit het met privacy en de AVG?",
        answer:
          "Verwerking gebeurt binnen de EU, met een verwerkersovereenkomst en zonder dat gegevens gebruikt worden om modellen te trainen.",
      },
      {
        question: "Neemt de agent beslissingen over zorg?",
        answer:
          "Nee. De agent bereidt voor en stelt voor; vaststellen doet altijd een bevoegde zorgverlener.",
      },
      {
        question: "Werkt dit met ons EPD?",
        answer:
          "We koppelen op de API of op de export die je EPD biedt. Waar dat niet kan, werkt de agent naast het systeem en lever je met één klik aan.",
      },
      {
        question: "Wat gebeurt er met opnames?",
        answer:
          "Alleen als je ze gebruikt. Ze worden verwerkt en daarna verwijderd volgens jouw bewaartermijn.",
      },
      {
        question: "Hoe voorkomen we fouten in verslagen?",
        answer:
          "Elk verslag verwijst naar de bron in de notitie. Wat de agent niet uit de bron kan halen, laat hij leeg in plaats van invullen.",
      },
    ],
    relatedCases: ["nimbus-cloud", "signal-one"],
  },
  {
    slug: "installatie",
    title: "AI-agents voor installatie en techniek",
    intro:
      "Offertes en werkbonnen zijn de flessenhals tussen buiten werken en geld verdienen. Een agent maakt ze klaar terwijl de bus nog onderweg is.",
    metaDescription:
      "Offertes, werkbonnen, serviceplanning en bestellingen automatiseren met AI-agents voor installatie- en technische bedrijven.",
    configuratorTask: "offertes",
    problems: [
      {
        title: "Offertes wachten op de avond",
        body: "Calculeren gebeurt na werktijd, dus de klant hoort pas dagen later iets.",
      },
      {
        title: "Werkbonnen komen half binnen",
        body: "Uren en materiaal ontbreken, dus facturatie moet er achteraan.",
      },
      {
        title: "Planning houdt geen rekening met de route",
        body: "Monteurs rijden langs elkaar heen omdat skills en route niet samen bekeken worden.",
      },
      {
        title: "Onderdelen worden te laat besteld",
        body: "Een tweede bezoek kost meer dan het onderdeel zelf.",
      },
    ],
    solutions: [
      {
        title: "Van foto naar prijsopgave",
        body: "De agent leest de aanvraag en de foto's, haalt prijzen en eerdere klussen op en zet de offerte klaar.",
      },
      {
        title: "Werkbon uit de notitie van de monteur",
        body: "Uren, materiaal en toelichting komen gestructureerd bij facturatie binnen.",
      },
      {
        title: "Planning op route, skill en voorraad",
        body: "De agent kiest de monteur die het snelst en met de juiste kennis ter plaatse is.",
      },
      {
        title: "Bestellen zonder tussenstap",
        body: "Wat op de bon staat en niet in de bus ligt, gaat direct naar de leverancier.",
      },
    ],
    numbers: [
      { value: "45m", label: "Doorlooptijd per offerte nu" },
      { value: "6m", label: "Controletijd met agent" },
      { value: "75%", label: "Offertes die dezelfde dag de deur uit gaan" },
    ],
    flows: [
      {
        title: "Offerte",
        steps: [
          "Aanvraag met foto",
          "Prijslijst en historie ophalen",
          "Calculatie opgesteld",
          "Offerte verstuurd",
          "Opvolging ingepland",
        ],
      },
      {
        title: "Werkbon",
        steps: [
          "Klus afgerond",
          "Uren en materiaal ophalen",
          "Bon opgesteld",
          "Naar facturatie",
          "Klant geinformeerd",
        ],
      },
    ],
    faq: [
      {
        question: "Rekent de agent met onze eigen prijzen?",
        answer:
          "Ja. Je prijslijst, staffels en afspraken per klant zijn de bron; de agent verzint geen tarieven.",
      },
      {
        question: "Wat als de foto onduidelijk is?",
        answer:
          "Dan vraagt de agent gericht na bij de klant in plaats van te gokken, of hij zet de aanvraag door voor een opname.",
      },
      {
        question: "Werkt dit met ons planningspakket?",
        answer:
          "We koppelen met de gangbare pakketten via API. Zonder koppeling werkt de agent via mail en export.",
      },
      {
        question: "Moeten monteurs een app leren?",
        answer:
          "Nee. Ze sturen hun notitie zoals ze dat nu doen; de agent maakt er een bon van.",
      },
      {
        question: "Wanneer verdient dit zich terug?",
        answer:
          "Bij tien offertes per week meestal binnen drie maanden. Reken het door in de calculator op de homepage.",
      },
    ],
    relatedCases: ["brightpath", "atlas-grid"],
  },
  {
    slug: "zakelijk",
    title: "AI-agents voor zakelijke dienstverlening",
    intro:
      "Dossiers lezen, rapportages vullen en voorstellen schrijven is werk dat voorbereid kan worden. Het oordeel blijft van jou.",
    metaDescription:
      "Dossiervoorbereiding, rapportages, offertetrajecten en inboxtriage automatiseren met AI-agents voor advies- en dienstverlening.",
    configuratorTask: "dossiers",
    problems: [
      {
        title: "Adviseurs lezen wat een stagiair kon samenvatten",
        body: "Het dure uur gaat op aan doornemen in plaats van beoordelen.",
      },
      {
        title: "Rapportages zijn elke maand hetzelfde kunstje",
        body: "Cijfers ophalen, plakken, toelichting schrijven. Drie dagen per maand, elke maand.",
      },
      {
        title: "Voorstellen beginnen bij nul",
        body: "Eerdere teksten staan verspreid over mappen en mailboxen.",
      },
      {
        title: "De inbox is het echte werkproces",
        body: "Wat er niet in staat bestaat niet, en wat erin staat wordt gemist.",
      },
    ],
    solutions: [
      {
        title: "Samenvatting met bron",
        body: "Elke stelling verwijst naar de pagina waar hij vandaan komt, zodat controleren sneller gaat dan lezen.",
      },
      {
        title: "Rapportage die zichzelf vult",
        body: "Cijfers, grafieken en een eerste duiding staan klaar op de eerste van de maand.",
      },
      {
        title: "Voorstellen uit je eigen archief",
        body: "De agent zoekt vergelijkbare trajecten op en stelt een concept samen met jouw teksten en tarieven.",
      },
      {
        title: "Inbox met voorsortering",
        body: "Intentie, urgentie en voorgesteld antwoord staan er al bij als je hem opent.",
      },
    ],
    numbers: [
      { value: "40m", label: "Voorbereiding per dossier nu" },
      { value: "5m", label: "Controletijd met agent" },
      { value: "72%", label: "Dossiers waarbij de samenvatting ongewijzigd blijft" },
    ],
    flows: [
      {
        title: "Dossiervoorbereiding",
        steps: [
          "Stukken ontvangen",
          "Dossier en normen ophalen",
          "Samenvatting met bron",
          "Klaargezet voor adviseur",
          "Aanvulling gevraagd",
        ],
      },
      {
        title: "Maandrapportage",
        steps: [
          "Periode afgesloten",
          "Cijfers ophalen",
          "Analyse en toelichting",
          "Rapport verstuurd",
          "Vragen opgevangen",
        ],
      },
    ],
    faq: [
      {
        question: "Blijven onze stukken vertrouwelijk?",
        answer:
          "Ja. Verwerking binnen de EU, met verwerkersovereenkomst, en je documenten worden niet gebruikt om modellen te trainen.",
      },
      {
        question: "Hoe weten we dat een samenvatting klopt?",
        answer:
          "Elke passage verwijst naar de bron. Wat niet in de stukken staat, vult de agent niet aan.",
      },
      {
        question: "Kan de agent onze huisstijl aanhouden?",
        answer:
          "Ja, op basis van eerdere documenten. Vorm en opbouw komen uit jouw eigen sjablonen.",
      },
      {
        question: "Wat als de regelgeving verandert?",
        answer:
          "De bronnen die de agent raadpleegt zijn van jou. Actualiseer je die, dan verandert de uitkomst mee.",
      },
      {
        question: "Vervangt dit mensen?",
        answer:
          "Het haalt voorbereidend werk weg. In de trajecten die wij deden ging de vrijgekomen tijd naar meer dossiers per adviseur.",
      },
    ],
    relatedCases: ["signal-one", "orbit-pay"],
  },
  {
    slug: "anders",
    title: "AI-agents voor elk repeterend proces",
    intro:
      "Staat jouw branche er niet bij? De vraag is niet wat je doet, maar of het proces vaste stappen heeft en vaak terugkomt.",
    metaDescription:
      "Elk proces met vaste stappen en veel herhaling is een kandidaat voor een AI-agent. Zo bepaal je of het bij jou de moeite waard is.",
    configuratorTask: "inbox",
    problems: [
      {
        title: "Het werk zit tussen de systemen",
        body: "Overtypen van het ene scherm naar het andere is nergens iemands functie, maar het gebeurt de hele dag.",
      },
      {
        title: "Kennis zit in hoofden",
        body: "Eén persoon weet hoe het moet en is precies dan op vakantie.",
      },
      {
        title: "Fouten komen te laat aan het licht",
        body: "Controle gebeurt achteraf, als corrigeren duurder is.",
      },
      {
        title: "Opvolging blijft liggen",
        body: "Niemand houdt bij wat er niet is teruggekomen.",
      },
    ],
    solutions: [
      {
        title: "Signaal, context, actie",
        body: "Elke agent die we bouwen volgt dezelfde vijf stappen; alleen de inhoud verschilt.",
      },
      {
        title: "Regels expliciet maken",
        body: "Wat in hoofden zit komt in de flow te staan, met een voorbeeld erbij.",
      },
      {
        title: "Controleren voor het misgaat",
        body: "Afwijkingen worden gemeld op het moment dat ze ontstaan.",
      },
      {
        title: "Zelf achter dingen aan",
        body: "Termijnen bewaken en herinneren is precies wat een agent zonder klagen doet.",
      },
    ],
    numbers: [
      { value: "5", label: "Stappen in elke flow die we bouwen" },
      { value: "4-6", label: "Weken tot een eerste werkende agent" },
      { value: "6x", label: "Anthropic Certified in het team" },
    ],
    flows: [
      {
        title: "Inbox en aanvragen",
        steps: [
          "Bericht binnen",
          "Context ophalen",
          "Intentie bepaald",
          "Antwoord of taak",
          "Vastgelegd",
        ],
      },
      {
        title: "Documenten uitlezen",
        steps: [
          "Document binnen",
          "Type herkend",
          "Velden uitgelezen",
          "Weggeschreven",
          "Afwijking gemeld",
        ],
      },
    ],
    faq: [
      {
        question: "Hoe weet ik of mijn proces geschikt is?",
        answer:
          "Als je het in stappen kunt uitleggen en het gebeurt meer dan tien keer per week, is het een kandidaat.",
      },
      {
        question: "Moeten we eerst onze data op orde hebben?",
        answer:
          "Nee. Vaak is de agent juist het moment waarop blijkt waar de data rammelt; we beginnen met wat er is.",
      },
      {
        question: "Wat als het niet werkt?",
        answer:
          "We beginnen met één flow en meten mee. Levert die niets op, dan stop je zonder een platform te hebben gekocht.",
      },
      {
        question: "Bouwen jullie ook door op wat er al staat?",
        answer:
          "Ja. Bestaande automatiseringen en koppelingen blijven staan; de agent vult aan waar het handwerk zit.",
      },
      {
        question: "Wat is de eerste stap?",
        answer:
          "Een gesprek van een half uur over het proces dat de meeste tijd kost. Daarna weet je of het loont.",
      },
    ],
    relatedCases: ["forma-lab", "nimbus-cloud"],
  },
] as const;

export function getUseCase(slug: string): UseCase | undefined {
  return useCases.find((item) => item.slug === slug);
}

export function getBranche(slug: BrancheSlug): {
  name: string;
  icon: AgencyIcon;
  result: string;
} {
  const branche = branches.find((item) => item.slug === slug);
  if (!branche) throw new Error(`Onbekende branche: ${slug}`);
  return { name: branche.name, icon: branche.icon, result: branche.result };
}
