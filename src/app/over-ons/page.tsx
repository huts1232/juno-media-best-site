import { site } from "@/content/site";

export default function AboutPage() {
  const page = site.pages.about;

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
