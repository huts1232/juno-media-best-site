import { site } from "@/content/site";

export default function ServicesPage() {
  const page = site.pages.services;

  return (
    <main>
      <section className="page-shell">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="lead">{page.intro}</p>
      </section>
    </main>
  );
}
