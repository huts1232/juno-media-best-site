import Link from "next/link";
import { Faq } from "@/components/sections/Faq";
import { AgencyIcon } from "@/components/ui/AgencyIcon";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { PageHero } from "@/components/sections/PageHero";
import { cases } from "@/content/cases";
import { getBranche, useCasesIndex, type UseCase } from "@/content/use-cases";

type UseCaseDetailProps = {
  item: UseCase;
};

export function UseCaseDetail({ item }: UseCaseDetailProps) {
  const branche = getBranche(item.slug);
  const related = item.relatedCases
    .map((slug) => cases.find((caseItem) => caseItem.slug === slug))
    .filter((caseItem) => caseItem !== undefined);

  // Diep linken naar de configurator met branche en taak al ingevuld.
  const configuratorHref = `/?b=${item.slug}&t=${item.configuratorTask}#configurator`;

  return (
    <main>
      <PageHero
        content={{
          eyebrow: useCasesIndex.eyebrow,
          title: item.title,
          intro: item.intro,
        }}
        id="use-case-title"
      />

      <section className="use-case__numbers" aria-label={useCasesIndex.sections.numbers}>
        <div className="site-container">
          <dl className="use-case__number-grid">
            {item.numbers.map((number) => (
              <div key={number.label} className="use-case__number">
                <dt>{number.label}</dt>
                <dd className="tabular-nums">{number.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="use-case__split" aria-labelledby="use-case-problems">
        <div className="site-container use-case__split-inner">
          <div>
            <h2 id="use-case-problems" className="use-case__heading">
              {useCasesIndex.sections.problems}
            </h2>
            <ul className="use-case__list">
              {item.problems.map((problem) => (
                <li key={problem.title} className="use-case__item">
                  <h3>{problem.title}</h3>
                  <p>{problem.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="use-case__heading">{useCasesIndex.sections.solutions}</h2>
            <ul className="use-case__list use-case__list--solutions">
              {item.solutions.map((solution) => (
                <li key={solution.title} className="use-case__item">
                  <h3>{solution.title}</h3>
                  <p>{solution.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="use-case__flows" aria-labelledby="use-case-flows">
        <div className="site-container">
          <h2 id="use-case-flows" className="use-case__heading">
            {useCasesIndex.sections.flows}
          </h2>
          <div className="use-case__flow-grid">
            {item.flows.map((flow) => (
              <FlowDiagram key={flow.title} nodes={flow.steps} label={flow.title} caption="" />
            ))}
          </div>
        </div>
      </section>

      <Faq
        content={{
          eyebrow: useCasesIndex.eyebrow,
          heading: useCasesIndex.sections.faq,
          items: item.faq.map((entry, index) => ({
            id: `${item.slug}-faq-${index + 1}`,
            question: entry.question,
            answer: entry.answer,
          })),
        }}
      />

      <section className="use-case__footer" aria-labelledby="use-case-next">
        <div className="site-container use-case__footer-inner">
          <div className="use-case__cta">
            <AgencyIcon name={branche.icon} className="use-case__cta-icon" />
            <h2 id="use-case-next" className="use-case__heading">
              {useCasesIndex.sections.configurator}
            </h2>
            <p>{branche.result}</p>
            <Link className="agent-button" href={configuratorHref}>
              {useCasesIndex.sections.configuratorCta}
            </Link>
          </div>

          <div className="use-case__cases">
            <h2 className="use-case__heading">{useCasesIndex.sections.cases}</h2>
            <ul className="use-case__case-list">
              {related.map((caseItem) => (
                <li key={caseItem.slug}>
                  <Link className="use-case__case" href={`/cases/${caseItem.slug}`}>
                    <span className="use-case__case-client">{caseItem.client}</span>
                    <span className="use-case__case-result">{caseItem.result}</span>
                    <span className="use-case__case-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
