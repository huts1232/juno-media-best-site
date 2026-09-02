import Link from "next/link";
import { AgencyIcon } from "@/components/ui/AgencyIcon";
import { useCasePreview } from "@/content/use-case-preview";
import { getBranche, useCases } from "@/content/use-cases";

/**
 * Zes branchekaarten op de homepage. Naam, icoon en resultaatzin komen uit
 * dezelfde bron als de detailpagina's.
 */
export function UseCasePreview() {
  return (
    <section className="use-case-index" aria-labelledby="use-case-preview-title">
      <div className="site-container">
        <div className="use-case-index__header">
          <div>
            <p className="eyebrow">{useCasePreview.eyebrow}</p>
            <h2 id="use-case-preview-title" className="use-case-index__heading">
              {useCasePreview.heading}
            </h2>
            <p className="lead">{useCasePreview.intro}</p>
          </div>
          <Link className="agent-share" href={useCasePreview.href}>
            {useCasePreview.cta}
          </Link>
        </div>

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
                    {useCasePreview.itemCta}
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
  );
}
