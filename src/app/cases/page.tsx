import { CaseStack } from "@/components/sections/CaseStack";
import { PageHero } from "@/components/sections/PageHero";
import { cases, casesPage } from "@/content/cases";
import { site } from "@/content/site";

export default function CasesPage() {
  const page = site.pages.cases;

  return (
    <main>
      <PageHero content={page} id="cases-page-title" variant="full" scrollLabel={page.scrollLabel} />
      <section aria-label={casesPage.listLabel}>
        <CaseStack items={cases} copy={casesPage} />
      </section>
    </main>
  );
}
