import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";
import { Stages } from "@/components/sections/Stages";
import { Services } from "@/components/sections/Services";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main>
      <Hero content={site.pages.home.hero} />
      <Statement content={site.pages.home.statement} />
      <Stats content={site.pages.home.stats} />
      <Stages content={site.pages.home.stages} />
      <Services content={services} />
    </main>
  );
}
