import { PageHero } from "@/components/sections/PageHero";
import { Services } from "@/components/sections/Services";
import { services } from "@/content/services";

export default function ServicesPage() {
  return (
    <main>
      <PageHero content={services.hero} id="services-page-title" />
      <Services content={services} />
    </main>
  );
}
