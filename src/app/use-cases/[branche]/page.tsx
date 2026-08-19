import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UseCaseDetail } from "@/components/sections/UseCaseDetail";
import { getUseCase, useCases } from "@/content/use-cases";

type UseCasePageProps = {
  params: Promise<{ branche: string }>;
};

export function generateStaticParams() {
  return useCases.map((item) => ({ branche: item.slug }));
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const { branche } = await params;
  const item = getUseCase(branche);

  if (!item) return {};

  const title = `${item.title} | JUNO Media`;

  return {
    title,
    description: item.metaDescription,
    alternates: { canonical: `/use-cases/${item.slug}` },
    openGraph: {
      type: "article",
      title,
      description: item.metaDescription,
      url: `/use-cases/${item.slug}`,
    },
  };
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { branche } = await params;
  const item = getUseCase(branche);

  if (!item) {
    notFound();
  }

  // JSON-LD op basis van dezelfde items als de zichtbare FAQ; geen tweede bron.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: item.faq.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <UseCaseDetail item={item} />
    </>
  );
}
