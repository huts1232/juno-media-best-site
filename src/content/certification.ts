import type { AgencyIcon } from "@/content/agency";

export const certificationBar = {
  claim: {
    count: "6×",
    label: "Anthropic Certified",
    icon: "certificate" as AgencyIcon,
  },
  badgesLabel: "Partners en tooling",
  badges: [
    { id: "anthropic", name: "Anthropic" },
    { id: "supabase", name: "Supabase" },
    { id: "vercel", name: "Vercel" },
    { id: "shopify", name: "Shopify" },
    { id: "google-ads", name: "Google Ads" },
  ],
} as const;
