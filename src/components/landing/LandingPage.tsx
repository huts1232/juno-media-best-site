import { Deliverables } from "@/components/landing/Deliverables";
import { ExampleGrid } from "@/components/landing/ExampleGrid";
import { Integrations } from "@/components/landing/Integrations";
import { LandingFaq } from "@/components/landing/LandingFaq";
import { LandingHero } from "@/components/landing/LandingHero";
import { PainPoints } from "@/components/landing/PainPoints";
import { PriceBlock } from "@/components/landing/PriceBlock";
import { ProcessSteps } from "@/components/landing/ProcessSteps";
import { CtaBanner } from "@/components/sections/CtaBanner";
import type { Landing } from "@/content/landings/types";

type LandingPageProps = {
  content: Landing;
};

/**
 * Vaste sectievolgorde voor elke dienst-landingspagina. Surfaces wisselen licht
 * en donker af, de CtaBanner sluit licht af boven de donkere footer. Nav en
 * Footer komen uit de root-layout.
 */
export function LandingPage({ content }: LandingPageProps) {
  return (
    <main className="landing" data-cta-label={content.hero.cta.label}>
      <LandingHero content={content.hero} />
      <PainPoints content={content.probleem} />
      <Deliverables content={content.watJeKrijgt} />
      <ExampleGrid content={content.voorbeelden} />
      <ProcessSteps content={content.aanpak} />
      <Integrations content={content.techniek} />
      <PriceBlock content={content.prijs} />
      <LandingFaq content={content.faq} />
      <CtaBanner content={content.cta} />
    </main>
  );
}
