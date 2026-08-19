import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { AgencyIcon } from "@/components/ui/AgencyIcon";
import { getBranche, useCases, useCasesIndex } from "@/content/use-cases";

export const metadata: Metadata = {
  title: `${useCasesIndex.title} | JUNO Media`,
  description: useCasesIndex.intro,
  alternates: { canonical: "/use-cases" },
};

export default function UseCasesPage() {
  return (
    <main>
      <PageHero
        content={{
          eyebrow: useCasesIndex.eyebrow,
          title: useCasesIndex.title,
          intro: useCasesIndex.intro,
        }}
        id="use-cases-title"
      />

      <section className="use-case-index" aria-label={useCasesIndex.title}>
        <div className="site-container">
          <ul className="use-case-grid">
            {useCases.map((item) => {
              const branche = getBranche(item.slug);

              return (
                <li key={item.slug}>
                  <Link className="use-case-card" href={`/use-cases/${item.slug}`}>
                    <AgencyIcon name={branche.icon} className="use-case-card__icon" />
                    <span className="use-case-card__name">{branche.name}</span>
                    <span className="use-case-card__result">{branche.result}</span>
                    <span className="use-case-card__cta">
                      {useCasesIndex.cta}
                      <span className="use-case-card__arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
