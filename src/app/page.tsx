import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";
import { Stages } from "@/components/sections/Stages";
import { Services } from "@/components/sections/Services";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { CasesGrid } from "@/components/sections/CasesGrid";
import { cases, casesSection } from "@/content/cases";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { Testimonials } from "@/components/sections/Testimonials";
import { awards } from "@/content/awards";
import { Awards } from "@/components/sections/Awards";
import { News } from "@/components/sections/News";

export default function Home() {
  return (
    <main>
      <Hero content={site.pages.home.hero} />
      <Statement content={site.pages.home.statement} />
      <Stats content={site.pages.home.stats} />
      <Stages content={site.pages.home.stages} />
      <Services content={services} />
      <LogoMarquee content={site.pages.home.logoMarquee} />
      <CasesGrid content={casesSection} items={cases} />
      <Testimonials content={testimonials} />
      <Awards content={awards} />
      <News content={site.pages.home.news} />
    </main>
  );
}
