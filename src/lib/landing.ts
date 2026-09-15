import type { Metadata } from "next";
import type { Landing } from "@/content/landings/types";
import { getDienst } from "@/content/services";
import { site } from "@/content/site";

/** Slugs met een uitgewerkte landingspagina. Voedt de sitemap. */
export const LANDING_SLUGS = ["ai-automatisering"] as const;

export function landingMetadata(landing: Landing): Metadata {
  const path = `/${landing.slug}`;

  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: landing.metaTitle,
      description: landing.metaDescription,
      url: path,
      locale: "nl_NL",
      type: "website",
    },
  };
}

/**
 * schema.org Service als string voor een <script type="application/ld+json">.
 * `<` wordt ge-escaped, zodat tekst uit de content het script niet kan sluiten.
 */
export function serviceJsonLd(landing: Landing): string {
  const base = site.url.replace(/\/$/, "");
  const name = getDienst(landing.slug)?.name ?? landing.hero.eyebrow;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description: landing.metaDescription,
    url: `${base}/${landing.slug}`,
    areaServed: { "@type": "Country", name: "Nederland" },
    provider: {
      "@type": "Organization",
      name: site.brand.name,
      url: base,
    },
    offers: {
      "@type": "Offer",
      url: `${base}/${landing.slug}`,
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: landing.prijs.anker.bedrag,
        priceCurrency: "EUR",
        unitText: landing.prijs.anker.eenheid,
      },
    },
  };

  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
