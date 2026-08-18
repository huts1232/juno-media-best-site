import { AboutSections } from "@/components/sections/AboutSections";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/content/site";

export default function AboutPage() {
  const page = site.pages.about;

  return (
    <main>
      <PageHero content={page} id="about-page-title" />
      <AboutSections content={page} />
    </main>
  );
}
