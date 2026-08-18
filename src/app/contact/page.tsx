import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/content/site";

export default function ContactPage() {
  const page = site.pages.contact;

  return (
    <main>
      <PageHero content={page} id="contact-page-title" />
      <ContactForm content={page.form} />
    </main>
  );
}
