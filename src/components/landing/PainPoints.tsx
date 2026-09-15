import { Reveal } from "@/components/landing/Reveal";
import { indexLabel, SectionHead } from "@/components/landing/SectionHead";
import type { Landing } from "@/content/landings/types";

type PainPointsProps = {
  content: Landing["probleem"];
};

/** Drie pijnpunten naast elkaar op de donkere surface; mobiel onder elkaar. */
export function PainPoints({ content }: PainPointsProps) {
  return (
    <section className="bento landing-section" aria-labelledby="landing-probleem-title">
      <div className="site-container">
        <SectionHead id="landing-probleem-title" eyebrow={content.eyebrow} kop={content.kop} />

        <Reveal>
          <ol className="m-0! grid list-none grid-cols-1 gap-5 p-0! md:grid-cols-3">
            {content.punten.map((punt, index) => (
              <li key={punt} data-reveal className="flex min-w-0 flex-col gap-6 border-t border-hairline pt-6">
                <span aria-hidden="true" className="text-[14px] leading-none tracking-[0.14em] text-brand">
                  {indexLabel(index)}
                </span>
                <p className="font-[family-name:var(--font-display)] text-[22px] leading-[1.25] font-medium text-copy md:text-[26px]">
                  {punt}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
