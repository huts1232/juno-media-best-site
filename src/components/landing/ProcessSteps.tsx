import { Reveal } from "@/components/landing/Reveal";
import { indexLabel, SectionHead } from "@/components/landing/SectionHead";
import type { Landing } from "@/content/landings/types";

type ProcessStepsProps = {
  content: Landing["aanpak"];
};

/**
 * Aanpak in vier stappen, lichte surface. Desktop een tijdlijn met een lijn
 * door de nummers, mobiel een verticale lijst met de lijn links.
 */
export function ProcessSteps({ content }: ProcessStepsProps) {
  return (
    <section className="bento landing-section" data-surface="light" aria-labelledby="landing-aanpak-title">
      <div className="site-container">
        <SectionHead id="landing-aanpak-title" eyebrow={content.eyebrow} kop={content.kop} />

        <Reveal>
          <ol className="m-0! grid list-none grid-cols-1 gap-8 p-0! lg:grid-cols-4 lg:gap-5">
            {content.stappen.map((stap, index) => (
              <li key={stap.titel} data-reveal className="landing-steps__item flex min-w-0 gap-5 lg:flex-col lg:gap-8">
                <span
                  aria-hidden="true"
                  className="relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-hairline bg-page text-[14px] leading-none tracking-[0.08em] text-jn-blue"
                >
                  {indexLabel(index)}
                </span>
                <div className="flex flex-col gap-3 pt-2 lg:pt-0 lg:pr-6">
                  <h3 className="font-[family-name:var(--font-display)] text-[22px] leading-[1.12] font-medium text-copy md:text-[24px]">
                    {stap.titel}
                  </h3>
                  <p className="text-[15px] leading-[1.5] text-copy-muted md:text-[16px]">{stap.regel}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
