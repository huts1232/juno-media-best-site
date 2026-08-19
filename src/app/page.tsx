import { IntroOverlay } from "@/components/layout/IntroOverlay";
import { AgentConfigurator } from "@/components/sections/AgentConfigurator";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { CertificationBar } from "@/components/sections/CertificationBar";
import { ExpandingShowreel } from "@/components/sections/ExpandingShowreel";
import { Hero } from "@/components/sections/Hero";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { UseCasePreview } from "@/components/sections/UseCasePreview";
import { ScrollStatement } from "@/components/sections/ScrollStatement";
import { StatsCards } from "@/components/sections/StatsCards";
import { Stages } from "@/components/sections/Stages";
import { ServicesBento } from "@/components/sections/ServicesBento";
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
import { faq } from "@/content/faq";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { DigestSignup } from "@/components/sections/DigestSignup";

export default function Home() {
  return (
    <main>
      <IntroOverlay />
      <Hero content={site.pages.home.hero} />
      <ExpandingShowreel content={site.pages.home.showreel} />
      <ScrollStatement content={site.pages.home.statement} />
      <CertificationBar />
      <StatsCards content={site.pages.home.stats} />
      <BeforeAfter />
      <Stages content={site.pages.home.stages} />
      <AgentConfigurator />
      <ServicesBento content={services} />
      <RoiCalculator />
      <LogoMarquee content={site.pages.home.logoMarquee} />
      <UseCasePreview />
      <CasesGrid content={casesSection} items={cases} />
      <Testimonials content={testimonials} />
      <Awards content={awards} />
      <News content={site.pages.home.news} />
      <Faq content={faq} />
      <DigestSignup />
      <CtaBanner content={site.pages.home.ctaBanner} />
    </main>
  );
}
