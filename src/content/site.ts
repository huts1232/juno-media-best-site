import { diensten, servicesBento } from "@/content/services";

// TODO: URL van de LinkedIn-bedrijfspagina invullen; nu de LinkedIn-homepage.
const LINKEDIN_URL = "https://www.linkedin.com/";

export const site = {
  locale: "nl",
  /** Basis voor sitemap en canonieke URL's. Zet NEXT_PUBLIC_SITE_URL in de omgeving. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://junomedia.nl",
  metadata: {
    title: "Junomedia | AI-groeistudio voor digitale groei",
    description:
      "Junomedia bouwt AI-oplossingen, automatiseringen, dashboards, Shopify-webshops en apps die handwerk uit je bedrijf halen.",
  },
  brand: {
    name: "Junomedia",
    href: "/",
  },
  navLabels: {
    primary: "Primaire navigatie",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    social: "Sociale media",
  },
  navigation: [
    { label: "Diensten", href: `/#${servicesBento.id}` },
    { label: "Cases", href: "/cases" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCta: { label: "Plan een groeiscan", href: "/contact" },
  socialLinks: [
    { label: "LinkedIn", href: LINKEDIN_URL },
  ],
  pages: {
    home: {
      eyebrow: "AI-groeistudio",
      title: "Digitale groei gebouwd rond je bedrijf",
      intro:
        "Junomedia combineert sterke digitale ervaringen met automatisering en digitale capaciteit.",
      hero: {
        eyebrow: "Nederlandse AI-groeistudio",
        titleLines: ["Digitale groei", "gebouwd rond je bedrijf"],
        video: {
          ariaLabel: "Abstracte visual voor digitale groei",
          poster: "/media/hero-poster.jpg",
          src: "/media/hero.mp4",
        },
        scrollLabel: "Scroll",
      },
      showreel: {
        ariaLabel: "Junomedia showreel",
        poster: "/assets/showreel-poster.svg",
        src: "",
        lockup: {
          eyebrow: "Showreel 2026",
          title: "Launches die blijven groeien",
        },
      },
      statement: {
        text: "Wij bouwen de software die handwerk uit je bedrijf haalt, zodat je team zijn uren besteedt aan klanten in plaats van aan overtypen.",
      },
      stats: {
        heading: "Groeibasis",
        items: [
          {
            value: "Scan",
            label: "We starten bij de grootste digitale of operationele groeikans.",
            badge: { kind: "pill", label: "Startpunt" },
          },
          {
            value: "Shopify",
            label: "Webshops die conversie, beheer en doorgroei samenbrengen.",
            badge: { kind: "pill", label: "Commerce" },
          },
          {
            value: "Flows",
            label: "Systemen gekoppeld zodat minder werk tussen inboxen blijft hangen.",
            badge: { kind: "trend", label: "Proces" },
          },
          {
            value: "Agents",
            label: "Digitale specialisten met een afgebakende verantwoordelijkheid.",
            badge: { kind: "avatars", label: "AI-team", initials: ["AI", "Ops", "CX"] },
          },
        ],
      },
      stages: {
        heading: "Werkwijze",
        items: [
          {
            title: "Scan",
            body: "We brengen in kaart waar omzet, opvolging of handwerk nu groei afremt.",
            result: "Output: één scherpe groeikans met prioriteit.",
            link: { label: "Plan een groeiscan", href: "/contact" },
          },
          {
            title: "Bouw",
            body: "We ontwerpen en bouwen de digitale ervaring, koppeling of agentflow rond die kans.",
            result: "Output: een werkend systeem dat op echte processen aansluit.",
            link: { label: "Bekijk diensten", href: `/#${servicesBento.id}` },
          },
          {
            title: "Schaal",
            body: "Na livegang meten we wat werkt en breiden we alleen uit waar dat groei oplevert.",
            result: "Output: een compacte backlog voor de volgende stap.",
            link: { label: "Plan een groeiscan", href: "/contact" },
          },
        ],
      },
      logoMarquee: {
        ariaLabel: "Oplossingsgebieden",
        items: [
          { name: "Shopify-webshops" },
          { name: "AI-integraties" },
          { name: "AI-agentteams" },
          { name: "Conversie" },
          { name: "Automatisering" },
          { name: "Digitale capaciteit" },
        ],
      },
      news: {
        eyebrow: "News",
        heading: "Notes from the studio",
        viewMore: { label: "Bekijk meer", href: "/blog" },
        ariaLabel: "Latest articles",
        items: [
          {
            title: "How launch teams can make product value easier to scan",
            category: "Strategy",
            date: "18 Aug 2026",
            href: "/blog",
            accent: "var(--brand-light)",
          },
          {
            title: "A practical motion checklist for conversion-focused websites",
            category: "Motion",
            date: "04 Aug 2026",
            href: "/blog",
            accent: "#1f7fb8",
          },
          {
            title: "What to decide before a homepage build enters production",
            category: "Build",
            date: "21 Jul 2026",
            href: "/blog",
            accent: "#ffffff",
          },
        ],
      },
    },
    cases: {
      eyebrow: "Cases",
      title: "Werk dat we mogen laten zien",
      intro:
        "Publieke cases verschijnen hier zodra de resultaten, namen en context door de eigenaar zijn vrijgegeven.",
      scrollLabel: "Scroll",
    },
    services: {
      eyebrow: "Diensten",
      title: "Wat we voor je bouwen",
      intro:
        "AI-oplossingen, automatisering, dashboards, Shopify en apps. Elke dienst haalt werk weg bij je team of meer omzet uit je verkeer.",
    },
    blog: {
      eyebrow: "Blog",
      title: "Notities uit de groeistudio",
      intro: "Hier komen later praktische notities over digitale groei, automatisering en agentteams.",
      articlesLabel: "Studio articles",
      readLabel: "Read note",
      articles: [
        {
          title: "How launch teams can make product value easier to scan",
          category: "Strategy",
          date: "18 Aug 2026",
          href: "/blog",
          accent: "var(--brand-light)",
        },
        {
          title: "A practical motion checklist for conversion-focused websites",
          category: "Motion",
          date: "04 Aug 2026",
          href: "/blog",
          accent: "#1f7fb8",
        },
        {
          title: "What to decide before a homepage build enters production",
          category: "Build",
          date: "21 Jul 2026",
          href: "/blog",
          accent: "#ffffff",
        },
      ],
    },
    about: {
      eyebrow: "Over ons",
      title: "Een compacte groeistudio voor digitale capaciteit",
      intro:
        "Junomedia bouwt systemen die passen bij hoe Nederlandse bedrijven echt werken: duidelijk, meetbaar en zonder technische ruis.",
      anchorsLabel: "Over ons secties",
      anchors: [
        { label: "Numbers", href: "#numbers" },
        { label: "Mission", href: "#mission" },
        { label: "Values", href: "#values" },
        { label: "Clients", href: "#clients" },
      ],
      numbers: {
        eyebrow: "Numbers",
        heading: "Compact team, measured output",
        items: [
          { value: "12+", label: "Focused launch sprints per quarter" },
          { value: "4", label: "Core disciplines in every project" },
          { value: "96%", label: "Partner retention across active work" },
        ],
      },
      mission: {
        eyebrow: "Mission",
        heading: "Digitale groei wordt sterker wanneer product, proces en capaciteit samen ontworpen zijn.",
        body:
          "We combineren conversiegerichte interfaces met automatisering en agentflows die bestaande teams ondersteunen.",
      },
      values: {
        eyebrow: "Values",
        heading: "Operating principles",
        items: [
          {
            title: "Signal first",
            body: "Every page, motion choice and component should make the next user decision easier to read.",
          },
          {
            title: "Small loops",
            body: "We keep feedback cycles compact so direction, content and code mature together.",
          },
          {
            title: "Launch quality",
            body: "Performance, accessibility and maintainability stay part of the work from the first pass.",
          },
        ],
      },
      clients: {
        eyebrow: "Clients",
        heading: "Placeholder partners",
        items: ["Northline", "Forma Lab", "Atlas Grid", "Signal One", "Nova Works", "Brightpath"],
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Plan een groeiscan",
      intro:
        "Vertel kort waar groei nu vastloopt. We brengen de grootste digitale of operationele kans in kaart en bepalen wat de eerste logische stap is.",
      form: {
        ariaLabel: "Project aanvraag",
        submitLabel: "Verstuur aanvraag",
        success: "Dank je. We nemen contact op met een gerichte volgende stap.",
        fields: {
          name: {
            label: "Naam",
            placeholder: "Je naam",
          },
          email: {
            label: "E-mail",
            placeholder: "naam@bedrijf.nl",
          },
          company: {
            label: "Bedrijf",
            placeholder: "Bedrijfsnaam",
          },
          budget: {
            label: "Budget",
            placeholder: "Kies een budgetrange",
            options: ["€5k-€10k", "€10k-€25k", "€25k-€50k", "€50k+"],
          },
          message: {
            label: "Bericht",
            placeholder: "Vertel kort waar omzet, handwerk of opvolging nu vastloopt.",
          },
        },
        errors: {
          name: "Vul je naam in.",
          email: "Vul een geldig e-mailadres in.",
          budget: "Kies een budgetrange.",
          message: "Vertel kort waar je hulp bij nodig hebt.",
        },
      },
    },
  },
  cookie: {
    message: "We gebruiken cookies om de site te verbeteren.",
    rejectLabel: "Weigeren",
    acceptLabel: "Accepteren",
    ariaLabel: "Cookievoorkeuren",
  },
  footer: {
    // TODO: verifiëren dat dit adres bestaat en gelezen wordt.
    email: "contact@junomedia.nl",
    location: "Nijmegen",
    legal: "JUNO B.V. · KvK 92813089",
    copyright: "© 2026 Junomedia",
    logoLabel: "Junomedia, naar de homepage",
    columns: [
      {
        title: "Diensten",
        links: diensten.map((dienst) => ({ label: dienst.name, href: dienst.href })),
      },
      {
        title: "Bedrijf",
        links: [
          { label: "Cases", href: "/cases" },
          { label: "Over ons", href: "/over-ons" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "Plan een groeiscan", href: "/contact" },
          { label: "E-mail", href: "mailto:contact@junomedia.nl" },
          { label: "LinkedIn", href: LINKEDIN_URL },
        ],
      },
    ],
  },
} as const;
