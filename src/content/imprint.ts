export const imprint = {
  meta: {
    title: "Bedrijfsgegevens — JUNO Media / JUNO B.V.",
    description:
      "JUNO B.V. is de legale exploitant van JUNO Media. Adres, KvK 92813089, BTW NL866181064B01, e-mail en telefoon.",
  },
  eyebrow: "Bedrijfsgegevens",
  title: "Wie achter JUNO Media zit.",
  intro:
    "Voor adverteerders, partners en toezichthouders: dit is de legale exploitant van dit merk en deze website.",
  entity: {
    heading: "Rechtspersoon",
    legalName: "JUNO B.V.",
    brand: "JUNO Media",
    siteLabel: "juno-media.nl",
    siteHref: "https://juno-media.nl/",
  },
  factsHeading: "Gegevens",
  facts: [
    { label: "Statutaire naam", value: "JUNO B.V." },
    { label: "Handelsnaam / merk", value: "JUNO Media" },
    { label: "Vestigingsadres", value: "Berg en Dalseweg 127, 6522 BE Nijmegen, Nederland" },
    { label: "KvK", value: "92813089" },
    { label: "BTW", value: "NL866181064B01" },
  ],
  email: "info@juno-media.nl",
  phone: {
    display: "+31 6 27997369",
    local: "06 27 99 73 69",
    href: "tel:+31627997369",
  },
  activities: {
    heading: "Activiteiten",
    body: "JUNO Media bouwt AI-oplossingen, websites en automatiseringen voor organisaties. Apart daarvan runt JUNO B.V. ook consumentenmerken/webshops; die hebben een eigen site en (indien van toepassing) een eigen advertentie-account.",
  },
  privacy: {
    heading: "Privacy",
    href: "/privacy",
    label: "privacy",
  },
  updated: "Laatst bijgewerkt: 30 september 2026",
  schema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JUNO Media",
    legalName: "JUNO B.V.",
    url: "https://juno-media.nl/",
    email: "info@juno-media.nl",
    telephone: "+31-6-27997369",
    vatID: "NL866181064B01",
    taxID: "92813089",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Berg en Dalseweg 127",
      postalCode: "6522 BE",
      addressLocality: "Nijmegen",
      addressCountry: "NL",
    },
  },
} as const;
