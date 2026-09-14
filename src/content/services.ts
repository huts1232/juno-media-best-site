export type ServiceVisual = "strategy" | "visual" | "platforms" | "website" | "mobile" | "development";

export type SolutionSlug = "shopify-webshops" | "ai-integraties" | "ai-agentteams";

export const solutionLandingRoutes: readonly {
  slug: SolutionSlug;
  label: string;
  plannedHref: `/oplossingen/${SolutionSlug}`;
  currentHref: `/services#${SolutionSlug}`;
}[] = [
  {
    slug: "shopify-webshops",
    label: "Shopify-webshops",
    plannedHref: "/oplossingen/shopify-webshops",
    currentHref: "/services#shopify-webshops",
  },
  {
    slug: "ai-integraties",
    label: "AI-integraties",
    plannedHref: "/oplossingen/ai-integraties",
    currentHref: "/services#ai-integraties",
  },
  {
    slug: "ai-agentteams",
    label: "AI-agentteams",
    plannedHref: "/oplossingen/ai-agentteams",
    currentHref: "/services#ai-agentteams",
  },
] as const;

export const services = {
  eyebrow: "Oplossingen",
  heading: "Drie ingangen voor digitale groei",
  listLabel: "Oplossingen",
  items: [
    {
      id: "shopify-webshops",
      name: "Shopify-webshops",
      heading: "Shopify-webshops",
      body: "Webshops die niet alleen mooi zijn, maar beter converteren en makkelijker meegroeien.",
      visual: "website",
      href: "/services#shopify-webshops",
      plannedHref: "/oplossingen/shopify-webshops",
      ctaLabel: "Bekijk richting",
    },
    {
      id: "ai-integraties",
      name: "AI-integraties",
      heading: "AI-integraties",
      body: "Bestaande systemen verbinden en terugkerend handwerk uit processen halen.",
      visual: "platforms",
      href: "/services#ai-integraties",
      plannedHref: "/oplossingen/ai-integraties",
      ctaLabel: "Bekijk richting",
    },
    {
      id: "ai-agentteams",
      name: "AI-agentteams",
      heading: "AI-agentteams",
      body: "Digitale specialisten die afgebakende verantwoordelijkheden uitvoeren binnen de systemen van het bedrijf.",
      visual: "development",
      href: "/services#ai-agentteams",
      plannedHref: "/oplossingen/ai-agentteams",
      ctaLabel: "Bekijk richting",
    },
  ],
} as const;
