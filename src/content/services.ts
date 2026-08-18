export type ServiceVisual = "strategy" | "visual" | "platforms" | "website" | "mobile" | "development";

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
