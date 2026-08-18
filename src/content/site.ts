export const site = {
  locale: "nl",
  metadata: {
    title: "Juno Media Best Site",
    description: "A motion-led digital studio site for Juno Media.",
  },
  navigation: [
    { label: "Cases", href: "/cases" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Over ons", href: "/over-ons" },
  ],
  primaryCta: { label: "Plan een call", href: "/contact" },
  pages: {
    home: {
      eyebrow: "Juno Media",
      title: "Digital launches with startup velocity",
      intro: "A placeholder homepage shell for the phased replica build.",
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
  },
  footer: {
    email: "hello@junomedia.example",
    location: "Amsterdam",
    copyright: "Juno Media",
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
