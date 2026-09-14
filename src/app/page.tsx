import { existsSync } from "node:fs";
import { join } from "node:path";
import { IntroOverlay } from "@/components/layout/IntroOverlay";
import { AgentConfigurator } from "@/components/sections/AgentConfigurator";
import { CertificationBar } from "@/components/sections/CertificationBar";
import { Hero } from "@/components/sections/Hero";
import { StatsCards } from "@/components/sections/StatsCards";
import { Stages } from "@/components/sections/Stages";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { servicesBento } from "@/content/services";
import { site } from "@/content/site";
import { faq } from "@/content/faq";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  const hero = withExistingHeroMedia(site.pages.home.hero);

  return (
    <main>
      <IntroOverlay />
      <Hero content={hero} />
      <CertificationBar />
      <ServicesBento content={servicesBento} />
      <StatsCards content={site.pages.home.stats} />
      <Stages content={site.pages.home.stages} />
      <AgentConfigurator />
      <Faq content={faq} />
      <CtaBanner content={site.pages.home.ctaBanner} />
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
