import type { Metadata } from "next";
import type { Landing } from "@/content/landings/types";
import { getDienst } from "@/content/services";
import { brandName, metaTitle, site } from "@/content/site";

export function landingMetadata(landing: Landing): Metadata {
  const path = `/${landing.slug}`;
  const title = metaTitle(landing.metaTitle);

  return {
    title,
    description: landing.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title,
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
      name: brandName,
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
