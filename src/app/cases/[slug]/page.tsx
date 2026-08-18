import { notFound } from "next/navigation";
import { CaseDetail } from "@/components/sections/CaseDetail";
import { cases, casesSection } from "@/content/cases";

type CaseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const { slug } = await params;
  const item = cases.find((caseItem) => caseItem.slug === slug);

  if (!item) {
    notFound();
  }

  return <CaseDetail item={item} backLabel={casesSection.eyebrow} />;
}
