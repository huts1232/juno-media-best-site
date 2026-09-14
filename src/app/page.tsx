import { existsSync } from "node:fs";
import { join } from "node:path";
import { IntroOverlay } from "@/components/layout/IntroOverlay";
import { AgentConfigurator } from "@/components/sections/AgentConfigurator";
import { Cases } from "@/components/sections/Cases";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { ScrollStatement } from "@/components/sections/ScrollStatement";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Stages } from "@/components/sections/Stages";
import { ctaBanner } from "@/content/cta";
import { faq } from "@/content/faq";
import { homeCases } from "@/content/home-cases";
import { servicesBento } from "@/content/services";
import { site } from "@/content/site";

/** Nav en Footer komen uit de root-layout. */
export default function Home() {
  const hero = withExistingHeroMedia(site.pages.home.hero);

  return (
    <main>
      <IntroOverlay />
      <Hero content={hero} />
      <ProofBar />
      <ScrollStatement content={site.pages.home.statement} />
      <ServicesBento content={servicesBento} />
      <Stages content={site.pages.home.stages} />
      <Cases content={homeCases} />
      <AgentConfigurator />
      <RoiCalculator />
      <Faq content={faq} />
      <CtaBanner content={ctaBanner} />
    </main>
  );
}

function withExistingHeroMedia(hero: typeof site.pages.home.hero) {
  const src = publicAssetExists(hero.video.src) ? hero.video.src : "";
  const poster = publicAssetExists(hero.video.poster) ? hero.video.poster : "";

  return {
    ...hero,
    video: {
      ...hero.video,
      src,
      poster,
    },
  };
}

function publicAssetExists(assetPath: string) {
  const normalizedPath = assetPath.split("?")[0]?.replace(/^\/+/, "");
  if (!normalizedPath) return false;

  return existsSync(join(process.cwd(), "public", normalizedPath));
}
