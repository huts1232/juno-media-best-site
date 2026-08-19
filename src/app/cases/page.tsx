import { CasesGrid } from "@/components/sections/CasesGrid";
import { PageHero } from "@/components/sections/PageHero";
import { cases, casesSection } from "@/content/cases";
import { site } from "@/content/site";

export default function CasesPage() {
  const page = site.pages.cases;

  return (
    <main>
      <PageHero content={page} id="cases-page-title" variant="full" scrollLabel={page.scrollLabel} />
      <CasesGrid content={casesSection} items={cases} />
    </main>
  );
}
