import Link from "next/link";
import { imprint } from "@/content/imprint";

export function Imprint() {
  const schema = JSON.stringify(imprint.schema);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <article className="legal">
        <div className="site-container legal__grid">
          <header className="legal__header">
            <p className="eyebrow">{imprint.eyebrow}</p>
            <h1 className="legal__title">{imprint.title}</h1>
            <p className="lead legal__intro">{imprint.intro}</p>
          </header>

          <div className="legal__body">
            <section aria-labelledby="imprint-entity">
              <h2 id="imprint-entity">{imprint.entity.heading}</h2>
              <p>
                <strong>{imprint.entity.legalName}</strong> is de geregistreerde rechtspersoon en legale
                exploitant van het merk <strong>{imprint.entity.brand}</strong> en van de website{" "}
                <a href={imprint.entity.siteHref}>{imprint.entity.siteLabel}</a>.
              </p>
            </section>

            <section aria-labelledby="imprint-facts">
              <h2 id="imprint-facts">{imprint.factsHeading}</h2>
              <ul className="legal__facts">
                {imprint.facts.map((fact) => (
                  <li key={fact.label}>
                    {fact.label}: <strong>{fact.value}</strong>
                  </li>
                ))}
                <li>
                  E-mail: <a href={`mailto:${imprint.email}`}>{imprint.email}</a>
                </li>
                <li>
                  Telefoon: <a href={imprint.phone.href}>{imprint.phone.display}</a> ({imprint.phone.local})
                </li>
              </ul>
            </section>

            <section aria-labelledby="imprint-activities">
              <h2 id="imprint-activities">{imprint.activities.heading}</h2>
              <p>{imprint.activities.body}</p>
            </section>

            <section aria-labelledby="imprint-privacy">
              <h2 id="imprint-privacy">{imprint.privacy.heading}</h2>
              <p>
                Onze privacyverklaring staat op{" "}
                <Link href={imprint.privacy.href}>{imprint.privacy.label}</Link>. Verwerkingsverantwoordelijke
                is {imprint.entity.legalName}.
              </p>
              <p className="legal__updated">{imprint.updated}</p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
