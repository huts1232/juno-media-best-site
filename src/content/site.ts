export const site = {
  locale: "nl",
  /** Basis voor sitemap en canonieke URL's. Zet NEXT_PUBLIC_SITE_URL in de omgeving. */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://junomedia.nl",
  metadata: {
    title: "Juno Media Best Site",
    description: "A motion-led digital studio site for Juno Media.",
  },
  brand: {
    name: "Juno Media",
    href: "/",
  },
  navLabels: {
    primary: "Primaire navigatie",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    social: "Social links",
  },
  navigation: [
    { label: "Cases", href: "/cases" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Over ons", href: "/over-ons" },
  ],
  primaryCta: { label: "Plan een call", href: "/contact" },
  socialLinks: [
    { label: "Dribbble", href: "https://dribbble.com/" },
    { label: "Behance", href: "https://www.behance.net/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
  pages: {
    home: {
      eyebrow: "Juno Media",
      title: "Digital launches with startup velocity",
      intro: "A placeholder homepage shell for the phased replica build.",
      hero: {
        eyebrow: "Juno Media studio",
        titleLines: ["Digital launches", "startup velocity"],
        video: {
          ariaLabel: "Abstract Juno Media showreel placeholder",
          poster: "/assets/hero-showreel-poster.svg",
          src: "",
        },
        scrollLabel: "Scroll",
      },
      showreel: {
        ariaLabel: "Juno Media showreel",
        poster: "/assets/showreel-poster.svg",
        src: "",
        lockup: {
          eyebrow: "Showreel 2026",
          title: "Launches die blijven groeien",
        },
      },
      statement: {
        text: "We turn messy growth goals into focused digital systems that launch fast and keep compounding.",
      },
      stats: {
        heading: "Studio stats",
        items: [
          {
            value: "48+",
            label: "Launch systems shipped",
            badge: { kind: "pill", label: "Since 2019" },
          },
          {
            value: "96%",
            label: "Retention across active partners",
            badge: { kind: "avatars", label: "4 partner squads", initials: ["AB", "MK", "JD", "RS"] },
          },
          {
            value: "$12M",
            label: "Pipeline influenced by launches",
            badge: { kind: "trend", label: "+34% YoY" },
          },
          {
            value: "7+",
            label: "Focused launch squads",
            badge: { kind: "pill", label: "3 timezones" },
          },
        ],
      },
      stages: {
        heading: "Project phases",
        items: [
          {
            title: "Map",
            body: "Clarify the launch goal, audience, funnel, constraints and signal we need before design starts.",
            result: "Output: launch brief and conversion map",
            link: { label: "Bekijk details", href: "/services" },
          },
          {
            title: "Shape",
            body: "Turn the brief into interface direction, content rhythm, visual rules and a production-ready page system.",
            result: "Output: responsive design system",
            link: { label: "Bekijk details", href: "/services" },
          },
          {
            title: "Ship",
            body: "Build the site, wire motion, tune performance, connect analytics and prepare the next iteration loop.",
            result: "Output: live launch and sprint backlog",
            link: { label: "Bekijk details", href: "/services" },
          },
        ],
      },
      logoMarquee: {
        ariaLabel: "Selected client placeholders",
        items: [
          { name: "Northline" },
          { name: "Forma Lab" },
          { name: "Atlas Grid" },
          { name: "Signal One" },
          { name: "Nova Works" },
          { name: "Brightpath" },
          { name: "Coredesk" },
          { name: "Field & Flow" },
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
            accent: "#43b1d6",
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
      ctaBanner: {
        statement: "Ready to launch a sharper digital system?",
        support: "Bring a product, campaign or repositioning brief and we will shape the next focused move.",
        primary: { label: "Start een project", href: "/contact" },
        secondary: { label: "Plan een call", href: "/contact" },
      },
    },
    cases: {
      eyebrow: "Cases",
      title: "Work that earns its next launch",
      intro:
        "Six systems that went from brief to measurable growth. Every case opens with the number it moved.",
      scrollLabel: "Scroll",
    },
    services: {
      eyebrow: "Services",
      title: "Strategy, product and launch craft",
      intro: "Placeholder service copy keeps this setup phase content-driven.",
    },
    blog: {
      eyebrow: "Blog",
      title: "Notes from the studio",
      intro: "Placeholder editorial intro for the later blog page build.",
      articlesLabel: "Studio articles",
      readLabel: "Read note",
      articles: [
        {
          title: "How launch teams can make product value easier to scan",
          category: "Strategy",
          date: "18 Aug 2026",
          href: "/blog",
          accent: "#43b1d6",
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
      title: "A compact team for ambitious launches",
      intro: "Placeholder about content for the later anchor-section build.",
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
        heading: "Make complex launches feel clear before they move fast.",
        body: "We use placeholder strategy, design and build tracks to turn broad ambition into a focused digital system with fewer handoff gaps.",
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
      title: "Start a focused project conversation",
      intro: "Placeholder contact intro before the form is built in FASE 4.",
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
            placeholder: "Vertel kort wat je wilt lanceren.",
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
    email: "hello@junomedia.example",
    location: "Amsterdam",
    copyright: "© 2026 Juno Media",
    columns: [
      {
        title: "Cases",
        links: [
          { label: "Launches", href: "/cases" },
          { label: "Platforms", href: "/cases" },
          { label: "Brands", href: "/cases" },
          { label: "Products", href: "/cases" },
          { label: "Experiments", href: "/cases" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Strategy", href: "/services" },
          { label: "Identity", href: "/services" },
          { label: "Websites", href: "/services" },
          { label: "Apps", href: "/services" },
          { label: "Development", href: "/services" },
        ],
      },
      {
        title: "Over ons",
        links: [
          { label: "Team", href: "/over-ons" },
          { label: "Mission", href: "/over-ons#mission" },
          { label: "Values", href: "/over-ons#values" },
          { label: "Clients", href: "/over-ons#clients" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "Email", href: "mailto:hello@junomedia.example" },
          { label: "Call", href: "/contact" },
        ],
      },
    ],
  },
} as const;
