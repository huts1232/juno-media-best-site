import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main>
      <Hero content={site.pages.home.hero} />
      <Statement content={site.pages.home.statement} />
    </main>
  );
}
