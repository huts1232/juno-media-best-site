import type { MetadataRoute } from "next";
import { cases } from "@/content/cases";
import { useCases } from "@/content/use-cases";
import { site } from "@/content/site";

const STATIC_ROUTES = ["", "/cases", "/services", "/blog", "/over-ons", "/contact", "/use-cases"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${base}${route || "/"}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...cases.map((item) => ({
      url: `${base}/cases/${item.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...useCases.map((item) => ({
      url: `${base}/use-cases/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
