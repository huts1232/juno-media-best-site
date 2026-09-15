export type ServiceVisual = "strategy" | "visual" | "platforms" | "website" | "mobile" | "development";

export type DienstSlug = "ai-oplossingen" | "ai-automatisering" | "dashboards" | "shopify" | "apps";

export type Dienst = {
  slug: DienstSlug;
  href: `/${DienstSlug}`;
  /** Klein label boven de kop op de kaart. */
  label: string;
  /** Dienstnaam: kaartkop, H1 en footerlink. */
  name: string;
  /** Twee regels op de kaart, subkop op de landingspagina. */
  body: string;
  /** Visual voor het paneel op /services. */
  visual: ServiceVisual;
  metadata: {
    title: string;
    description: string;
  };
};

/**
 * De vijf diensten voor de bento op de homepage. De hrefs wijzen naar de
 * landingspagina's per dienst; /services gebruikt nog `services` hieronder.
 * Volgorde = volgorde op de site: de eerste twee zijn de grote kaarten.
 */
export const diensten: readonly Dienst[] = [
  {
    slug: "ai-oplossingen",
    href: "/ai-oplossingen",
    label: "AI",
    name: "AI-oplossingen",
    body: "Agents en chatbots die op je eigen data draaien en werk overnemen dat nu bij je team ligt.",
    visual: "strategy",
    metadata: {
      title: "AI-oplossingen | Junomedia",
      description:
        "Agents en chatbots die op je eigen data draaien en werk overnemen dat nu bij je team ligt.",
    },
  },
  {
    slug: "ai-automatisering",
    href: "/ai-automatisering",
    label: "Automatisering",
    name: "AI-automatisering",
    body: "Koppelingen en workflows over je bestaande software. Offertes, facturen, klantvragen: zonder handwerk.",
    visual: "platforms",
    metadata: {
      title: "AI-automatisering | Junomedia",
      description:
        "Koppelingen en workflows over je bestaande software. Offertes, facturen en klantvragen zonder handwerk.",
    },
  },
  {
    slug: "dashboards",
    href: "/dashboards",
    label: "Inzicht",
    name: "Dashboards",
    body: "Eén scherm met de cijfers waarop je stuurt. Live uit je eigen systemen.",
    visual: "visual",
    metadata: {
      title: "Dashboards | Junomedia",
      description: "Eén scherm met de cijfers waarop je stuurt, live uit je eigen systemen.",
    },
  },
  {
    slug: "shopify",
    href: "/shopify",
    label: "Webshops",
    name: "Shopify",
    body: "Themes, migraties en CRO voor webshops die meer uit hun verkeer moeten halen.",
    visual: "website",
    metadata: {
      title: "Shopify | Junomedia",
      description: "Themes, migraties en CRO voor webshops die meer uit hun verkeer moeten halen.",
    },
  },
  {
    slug: "apps",
    href: "/apps",
    label: "Bouwen",
    name: "Apps & websites",
    body: "Snelle, meetbare sites en interne tools. Vaste scope, vaste prijs.",
    visual: "development",
    metadata: {
      title: "Apps & websites | Junomedia",
      description: "Snelle, meetbare sites en interne tools. Vaste scope, vaste prijs.",
    },
  },
];

export function getDienst(slug: string) {
  return diensten.find((dienst) => dienst.slug === slug);
}

/** Homepage-bento. */
export const servicesBento = {
  id: "diensten",
  eyebrow: "Diensten",
  heading: "Wat we voor je bouwen",
  listLabel: "Diensten",
  items: diensten,
} as const;

export const services = {
  eyebrow: "Services",
  heading: "Systems for every launch layer",
  listLabel: "Service navigation",
  items: [
    {
      name: "Brand Strategy",
      heading: "Brand Strategy",
      body: "Define the offer, audience logic, positioning and growth narrative before production starts.",
      visual: "strategy",
    },
    {
      name: "Brand Visual",
      heading: "Brand Visual",
      body: "Shape a compact visual system with type, color, motion rules and reusable interface direction.",
      visual: "visual",
    },
    {
      name: "Platforms",
      heading: "Platforms",
      body: "Map the product surface, content model and operational flows into a clear platform blueprint.",
      visual: "platforms",
    },
    {
      name: "Website",
      heading: "Website",
      body: "Design and build conversion-focused pages with tight responsive behavior and measured performance.",
      visual: "website",
    },
    {
      name: "Mobile Apps",
      heading: "Mobile Apps",
      body: "Prototype the core mobile journey, interaction states and product moments that need to feel immediate.",
      visual: "mobile",
      video: {
        ariaLabel: "Mobile app interface motion placeholder",
        poster: "/assets/services-mobile-apps-poster.svg",
        src: "",
      },
    },
    {
      name: "Development",
      heading: "Development",
      body: "Turn approved systems into production code, analytics events and a launch-ready iteration loop.",
      visual: "development",
    },
  ],
} as const;
