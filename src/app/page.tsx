import { Hero } from "@/components/sections/Hero";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main>
      <Hero content={site.pages.home.hero} />
    </main>
  );
}
