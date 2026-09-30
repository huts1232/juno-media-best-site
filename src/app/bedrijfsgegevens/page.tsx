import type { Metadata } from "next";
import { Imprint } from "@/components/sections/Imprint";
import { imprint } from "@/content/imprint";

export const metadata: Metadata = {
  title: imprint.meta.title,
  description: imprint.meta.description,
  alternates: { canonical: "/bedrijfsgegevens" },
};

export default function BedrijfsgegevensPage() {
  return <Imprint />;
}
