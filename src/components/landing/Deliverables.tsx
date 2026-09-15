import { Reveal } from "@/components/landing/Reveal";
import { indexLabel, SectionHead } from "@/components/landing/SectionHead";
import type { Landing } from "@/content/landings/types";

type DeliverablesProps = {
  content: Landing["watJeKrijgt"];
};

/**
 * Vier kaarten in de kaartstijl van bento en cases, lichte surface. Desktop
 * vier kolommen, tablet twee, mobiel één. Nummer in --jn-blue: het lichtblauw
 * haalt op wit geen contrast voor kleine tekst.
 */
export function Deliverables({ content }: DeliverablesProps) {
  return (
    <section className="bento landing-section" data-surface="light" aria-labelledby="landing-krijgt-title">
      <div className="site-container">
        <SectionHead id="landing-krijgt-title" eyebrow={content.eyebrow} kop={content.kop} />

        <Reveal>
          <ul className="m-0! grid list-none grid-cols-1 gap-5 p-0! md:grid-cols-2 lg:grid-cols-4">
            {content.items.map((item, index) => (
              <li key={item.titel} data-reveal className="flex min-w-0">
                <article className="flex w-full flex-col gap-10 rounded-[1.25rem] border border-hairline bg-page-alt p-6 md:p-8 lg:min-h-[17rem]">
                  <span aria-hidden="true" className="text-[14px] leading-none tracking-[0.14em] text-jn-blue">
                    {indexLabel(index)}
                  </span>
                  <div className="mt-auto flex flex-col gap-3">
                    <h3 className="font-[family-name:var(--font-display)] text-[22px] leading-[1.12] font-medium text-copy md:text-[24px]">
                      {item.titel}
                    </h3>
                    <p className="text-[15px] leading-[1.5] text-copy-muted md:text-[16px]">{item.regel}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
