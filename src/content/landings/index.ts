import type { DienstSlug } from "@/content/services";

/**
 * Diensten met een uitgewerkte landingspagina onder /<slug>. Enige bron voor
 * de bento-links, de links op /services en de sitemap. Een nieuwe
 * landingspagina: route toevoegen en de slug hier registreren.
 */
export const LANDING_SLUGS: readonly DienstSlug[] = ["ai-automatisering"];

/** "/ai-automatisering" als de dienst een landingspagina heeft, anders null. */
export function landingHref(slug: DienstSlug): `/${DienstSlug}` | null {
  return LANDING_SLUGS.includes(slug) ? `/${slug}` : null;
}
