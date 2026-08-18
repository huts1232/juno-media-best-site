export const site = {
  locale: "nl",
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
      statement: {
        text: "We turn messy growth goals into focused digital systems that launch fast and keep compounding.",
      },
      stats: {
        heading: "Studio stats",
        items: [
          { value: "48+", label: "Launch systems shipped" },
          { value: "96%", label: "Retention across active partners" },
          { value: "$12M", label: "Pipeline influenced by launches" },
          { value: "7+", label: "Focused launch squads" },
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
            accent: "#fe4a23",
          },
          {
            title: "A practical motion checklist for conversion-focused websites",
            category: "Motion",
            date: "04 Aug 2026",
            href: "/blog",
            accent: "#8a5cff",
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
      title: "Selected work systems",
      intro: "Placeholder case overview content lives in src/content.",
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
    },
    about: {
      eyebrow: "Over ons",
      title: "A compact team for ambitious launches",
      intro: "Placeholder about content for the later anchor-section build.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Start a focused project conversation",
      intro: "Placeholder contact intro before the form is built in FASE 4.",
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
