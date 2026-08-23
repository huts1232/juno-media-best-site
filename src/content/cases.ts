/**
 * De losse velden per case:
 * - `result` is de kop op de kaart: max 12 woorden en altijd met een cijfer.
 *   `resultAccent` is het stuk daaruit dat in de accentkleur komt te staan.
 * - `media.src` mag leeg blijven; dan valt de kaart terug op de poster. Zodra
 *   er echte mp4's zijn, pakt de videopool ze zonder verdere wijziging op.
 * - `services` zijn de filterlabels én de pills op de kaart; ze moeten uit
 *   `caseFilters` komen, anders vallen ze uit het filter.
 */
export const caseFilters = [
  "Branding",
  "Webdesign",
  "Development",
  "Shopify",
  "AI",
] as const;

export type CaseFilter = (typeof caseFilters)[number];

export const cases = [
  {
    slug: "atlas-grid",
    client: "Atlas Grid",
    title: "Launch OS for a B2B data team",
    summary: "A focused product story, conversion site and launch-ready interface system.",
    description:
      "Placeholder detail copy for the case study page. The final case content can replace this without changing the layout.",
    palette: ["#43b1d6", "#1f7fb8", "#ffffff"],
    result: "Atlas Grid booked 3.2x more qualified demos in one quarter",
    resultAccent: "3.2x more qualified demos",
    body: "We rebuilt the product story around one job to be done, then shipped a conversion site that sales could steer themselves.",
    services: ["Branding", "Webdesign", "Development", "AI"],
    media: {
      poster: "/assets/case-atlas-grid-poster.svg",
      src: "",
      alt: "Atlas Grid dashboard interface with a rising conversion curve",
    },
    challenge:
      "Atlas Grid sold a technical platform with a generic website. Every deal started with the same twenty minutes of explaining.",
    approach:
      "One narrative spine, a modular page system and a component library that the in-house team can extend without design support.",
    metrics: [
      { value: "3.2x", label: "Qualified demos" },
      { value: "-41%", label: "Time to first reply" },
      { value: "12", label: "Weeks to launch" },
    ],
    gallery: ["Product tour", "Pricing system", "Component library"],
  },
  {
    slug: "nimbus-cloud",
    client: "Nimbus Cloud",
    title: "SaaS narrative and website reset",
    summary: "A sharper category position and responsive page system for a fast-moving SaaS offer.",
    description:
      "Placeholder detail copy for the case study page. The final case content can replace this without changing the layout.",
    palette: ["#1f7fb8", "#ffffff", "#43b1d6"],
    result: "Nimbus Cloud lifted trial signups 68% after the repositioning",
    resultAccent: "68%",
    body: "A crowded category needed one clear claim. We rewrote the position, then designed the pages that prove it.",
    services: ["Branding", "Webdesign", "Development", "AI"],
    media: {
      poster: "/assets/case-nimbus-cloud-poster.svg",
      src: "",
      alt: "Nimbus Cloud pricing page with a comparison table",
    },
    challenge:
      "Nimbus competed on features in a market where nobody could tell the features apart.",
    approach:
      "We picked the one workflow they own, built the page system around it and cut everything that dilutes the claim.",
    metrics: [
      { value: "+68%", label: "Trial signups" },
      { value: "2.4x", label: "Page depth" },
      { value: "9", label: "Weeks to launch" },
    ],
    gallery: ["Positioning canvas", "Pricing page", "Onboarding flow"],
  },
  {
    slug: "orbit-pay",
    client: "Orbit Pay",
    title: "Mobile-first acquisition flow",
    summary: "A compact mobile product journey with launch messaging and conversion instrumentation.",
    description:
      "Placeholder detail copy for the case study page. The final case content can replace this without changing the layout.",
    palette: ["#ffffff", "#43b1d6", "#1f7fb8"],
    result: "Orbit Pay cut mobile checkout drop-off by 44%",
    resultAccent: "44%",
    body: "Most of the traffic was mobile and most of the losses were too. We rebuilt the flow around the smallest screen first.",
    services: ["Webdesign", "Development", "Shopify", "AI"],
    media: {
      poster: "/assets/case-orbit-pay-poster.svg",
      src: "",
      alt: "Orbit Pay mobile checkout screens side by side",
    },
    challenge:
      "Four of every five sessions were mobile, but the checkout was a desktop layout squeezed into a phone.",
    approach:
      "A three-step flow, a single primary action per screen and event tracking on every field that used to lose people.",
    metrics: [
      { value: "-44%", label: "Checkout drop-off" },
      { value: "+29%", label: "Mobile revenue" },
      { value: "7", label: "Weeks to launch" },
    ],
    gallery: ["Checkout steps", "Wallet screen", "Launch campaign"],
  },
  {
    slug: "forma-lab",
    client: "Forma Lab",
    title: "Brand system for a product studio",
    summary: "A visual identity refresh and modular landing system for repeatable service launches.",
    description:
      "Placeholder detail copy for the case study page. The final case content can replace this without changing the layout.",
    palette: ["#43b1d6", "#ffffff", "#1f7fb8"],
    result: "Forma Lab ships new service pages 5x faster",
    resultAccent: "5x faster",
    body: "Every launch used to start from scratch. Now it starts from a kit that already carries the brand.",
    services: ["Branding", "Webdesign", "Development", "Shopify"],
    media: {
      poster: "/assets/case-forma-lab-poster.svg",
      src: "",
      alt: "Forma Lab brand system with type scale and colour blocks",
    },
    challenge:
      "A studio with six offers and six different visual languages, rebuilt by hand for every campaign.",
    approach:
      "One identity, a documented block library and copy patterns that the team assembles instead of redesigns.",
    metrics: [
      { value: "5x", label: "Faster page builds" },
      { value: "18", label: "Reusable blocks" },
      { value: "6", label: "Weeks to launch" },
    ],
    gallery: ["Identity system", "Block library", "Campaign template"],
  },
  {
    slug: "signal-one",
    client: "Signal One",
    title: "Platform story and demo surface",
    summary: "A product explanation system that turns complex workflows into a clear demo path.",
    description:
      "Placeholder detail copy for the case study page. The final case content can replace this without changing the layout.",
    palette: ["#1f7fb8", "#43b1d6", "#ffffff"],
    result: "Signal One turned a 40-minute demo into a 6-minute walkthrough",
    resultAccent: "6-minute walkthrough",
    body: "The platform was strong and the explanation was not. We built a demo surface that carries the argument on its own.",
    services: ["Branding", "Webdesign", "Development", "AI"],
    media: {
      poster: "/assets/case-signal-one-poster.svg",
      src: "",
      alt: "Signal One interactive product walkthrough interface",
    },
    challenge:
      "Sales could not demo the platform without a specialist in the call, which capped how many deals they could run.",
    approach:
      "An interactive walkthrough with scripted states, so a prospect sees the value before anyone joins the meeting.",
    metrics: [
      { value: "6 min", label: "Self-serve demo" },
      { value: "+53%", label: "Demo completion" },
      { value: "10", label: "Weeks to launch" },
    ],
    gallery: ["Walkthrough states", "Workflow map", "Handover kit"],
  },
  {
    slug: "brightpath",
    client: "Brightpath",
    title: "Growth site for a service team",
    summary: "A conversion-focused site structure with strong proof blocks and fast iteration hooks.",
    description:
      "Placeholder detail copy for the case study page. The final case content can replace this without changing the layout.",
    palette: ["#ffffff", "#1f7fb8", "#43b1d6"],
    result: "Brightpath doubled inbound leads within 90 days",
    resultAccent: "doubled inbound leads",
    body: "Proof was buried three clicks deep. We pulled it to the surface and gave the team a way to keep adding to it.",
    services: ["Branding", "Webdesign", "Development", "Shopify"],
    media: {
      poster: "/assets/case-brightpath-poster.svg",
      src: "",
      alt: "Brightpath landing page with testimonial and proof blocks",
    },
    challenge:
      "Strong results, invisible on the website. The pages read like a brochure instead of an argument.",
    approach:
      "A proof-first structure, editable case blocks and a testing setup so the team can iterate without a rebuild.",
    metrics: [
      { value: "2x", label: "Inbound leads" },
      { value: "+37%", label: "Form completion" },
      { value: "8", label: "Weeks to launch" },
    ],
    gallery: ["Proof blocks", "Service pages", "Lead flow"],
  },
] as const;

export type CaseItem = (typeof cases)[number];

export const casesSection = {
  eyebrow: "Cases",
  heading: "Selected launches in motion",
  linkLabel: "Case study",
  ariaLabel: "Selected case studies",
} as const;

export const casesPage = {
  listLabel: "Case overzicht",
  filterLabel: "Filter cases op discipline",
  filterAll: "Alles",
  ctaLabel: "Bekijk case",
  servicesLabel: "Services",
  emptyTitle: "Niets onder dit filter.",
  emptyBody: "Deze discipline heeft nog geen gepubliceerde case. Zet het filter terug en bekijk het volledige overzicht.",
  emptyAction: "Toon alle cases",
  nextLabel: "Volgende case",
  challengeLabel: "De opgave",
  approachLabel: "De aanpak",
  resultLabel: "Het resultaat",
  galleryLabel: "Beeldgalerij",
  backLabel: "Alle cases",
} as const;
