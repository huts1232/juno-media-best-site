import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { ctaBanner } from "@/content/cta";
import { dienstPage, diensten, getDienst } from "@/content/services";
import { LANDING_SLUGS } from "@/lib/landing";

type DienstPageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Alleen de dienst-slugs zonder eigen landingspagina; elke andere URL op dit
 * niveau is een 404. Uitgewerkte diensten hebben een statische route ernaast.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return diensten
    .filter((dienst) => !LANDING_SLUGS.has(dienst.slug))
    .map((dienst) => ({ slug: dienst.slug }));
}

export async function generateMetadata({ params }: DienstPageProps): Promise<Metadata> {
  const dienst = getDienst((await params).slug);
  if (!dienst) return {};

  return {
    title: dienst.metadata.title,
    description: dienst.metadata.description,
    alternates: { canonical: dienst.href },
  };
}

/** Nav en Footer komen uit de root-layout. */
export default async function DienstPage({ params }: DienstPageProps) {
  const dienst = getDienst((await params).slug);
  if (!dienst) notFound();

  return (
    <main>
      <PageHero
        id={`${dienst.slug}-page-title`}
        content={{ eyebrow: dienstPage.eyebrow, title: dienst.name, intro: dienst.body }}
      />
      {/* TODO: content landingspagina */}
      <CtaBanner content={ctaBanner} />
    </main>
  );
}
