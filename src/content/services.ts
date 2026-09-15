import { landingHref } from "@/content/landings";

export type ServiceVisual = "strategy" | "visual" | "platforms" | "website" | "mobile" | "development";

export type DienstSlug = "ai-oplossingen" | "ai-automatisering" | "dashboards" | "shopify" | "apps";

export type Dienst = {
  slug: DienstSlug;
  /** Afgeleid: de landingspagina als die er is, anders het anker op /services. */
  href: `/${string}`;
  /** Klein label boven de kop op de kaart. */
  label: string;
  /** Dienstnaam: kaartkop op de homepage en paneelkop op /services. */
  name: string;
  /** Twee regels op de kaart en op /services. */
  body: string;
  /** Lijnvisual van het paneel op /services. */
  visual: ServiceVisual;
};

/**
 * De vijf diensten. Enige bron voor de bento op de homepage en de panelen op
 * /services. Volgorde = volgorde op de site: de eerste twee zijn de grote
 * kaarten in de bento.
 */
const dienstenBron: readonly Omit<Dienst, "href">[] = [
  {
    slug: "ai-oplossingen",
    label: "AI",
    name: "AI-oplossingen",
    body: "Agents en chatbots die op je eigen data draaien en werk overnemen dat nu bij je team ligt.",
    visual: "strategy",
  },
  {
    slug: "ai-automatisering",
    label: "Automatisering",
    name: "AI-automatisering",
    body: "Koppelingen en workflows over je bestaande software. Offertes, facturen, klantvragen: zonder handwerk.",
    visual: "platforms",
  },
  {
    slug: "dashboards",
    label: "Inzicht",
    name: "Dashboards",
    body: "Eén scherm met de cijfers waarop je stuurt. Live uit je eigen systemen.",
    visual: "visual",
  },
  {
    slug: "shopify",
    label: "Webshops",
    name: "Shopify",
    body: "Themes, migraties en CRO voor webshops die meer uit hun verkeer moeten halen.",
    visual: "website",
  },
  {
    slug: "apps",
    label: "Bouwen",
    name: "Apps & websites",
    body: "Snelle, meetbare sites en interne tools. Vaste scope, vaste prijs.",
    visual: "development",
  },
];

/** De services-pagina; elk paneel daar heeft de slug als id. */
const SERVICES_PATH = "/services";

export const diensten: readonly Dienst[] = dienstenBron.map((dienst) => ({
  ...dienst,
  href: landingHref(dienst.slug) ?? `${SERVICES_PATH}#${dienst.slug}`,
}));

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

/**
 * /services: dezelfde vijf diensten als panelen, elk met de slug als id zodat
 * de bento erheen kan ankeren. Een link alleen als er een landingspagina is.
 */
export const services = {
  hero: {
    eyebrow: servicesBento.eyebrow,
    title: servicesBento.heading,
    intro: "AI-oplossingen, automatisering, dashboards, Shopify en apps. Elke dienst haalt werk weg bij je team of meer omzet uit je verkeer.",
  },
  eyebrow: servicesBento.eyebrow,
  heading: "Kies een dienst",
  listLabel: servicesBento.listLabel,
  items: diensten.map((dienst) => {
    const href = landingHref(dienst.slug);

    return {
      id: dienst.slug,
      name: dienst.name,
      heading: dienst.name,
      body: dienst.body,
      visual: dienst.visual,
      link: href ? { label: `Meer over ${dienst.name}`, href } : null,
    };
  }),
};
