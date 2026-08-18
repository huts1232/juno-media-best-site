import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function ServicesPage() {
  const page = site.pages.services;

  return (
    <main>
      <PageHero content={page} id="services-page-title" />
      <Services content={services} />
    </main>
  );
}
