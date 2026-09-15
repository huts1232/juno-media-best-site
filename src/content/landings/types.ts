import type { DienstSlug } from "@/content/services";

/**
 * Contentmodel voor de vijf dienst-landingspagina's. Elke pagina vult precies
 * dit model; de componenten in src/components/landing/ bevatten zelf geen
 * tekst.
 *
 * De aantallen liggen vast (drie pijnpunten, vier stappen, zes vragen), omdat
 * de layouts daarop zijn ontworpen. Regels: geen verzonnen klanten, quotes of
 * cijfers. Wat niet vaststaat laat je weg, er komt geen placeholder te staan.
 */

type Tuple<T, N extends number, Acc extends T[] = []> = Acc["length"] extends N
  ? readonly [...Acc]
  : Tuple<T, N, [...Acc, T]>;

export type LandingLink = {
  label: string;
  href: string;
};

/** Titel plus één regel toelichting: kaarten, voorbeelden en stappen. */
export type LandingItem = {
  titel: string;
  regel: string;
};

export type LandingFaqItem = {
  vraag: string;
  antwoord: string;
};

/** Kop boven elke sectie: klein label plus H2. */
type SectieKop = {
  eyebrow: string;
  kop: string;
};

export interface Landing {
  /** Moet een dienst uit content/services.ts zijn; naam en href komen daarvandaan. */
  slug: DienstSlug;
  /** Zonder merksuffix; landingMetadata voegt brandName toe. */
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    cta: LandingLink;
  };
  probleem: SectieKop & {
    punten: Tuple<string, 3>;
  };
  watJeKrijgt: SectieKop & {
    items: Tuple<LandingItem, 4>;
  };
  voorbeelden: SectieKop & {
    items: Tuple<LandingItem, 4>;
  };
  /** Korte variant van de werkwijze: vier stappen. */
  aanpak: SectieKop & {
    stappen: Tuple<LandingItem, 4>;
  };
  techniek: SectieKop & {
    /** Namen van systemen, als tekst. Geen logo's. */
    koppelingen: readonly string[];
    /** Regel onder de koppelingen, bijvoorbeeld over eigen API's. */
    noot: string;
  };
  prijs: SectieKop & {
    anker: {
      /** "Vanaf" */
      prefix: string;
      /** Bedrag in hele euro's. Ook de minPrice in het Service-schema. */
      bedrag: number;
      /** "per implementatie" */
      eenheid: string;
    };
    doorlooptijd: string;
    scope: string;
    cta: LandingLink;
  };
  faq: SectieKop & {
    items: Tuple<LandingFaqItem, 6>;
  };
  /** Afsluitende CtaBanner, zelfde vorm als content/cta.ts. */
  cta: {
    statement: string;
    support: string;
    primary: LandingLink;
  };
}
