import { ArrowIcon } from "@/components/landing/ArrowIcon";
import { Reveal } from "@/components/landing/Reveal";
import { SectionHead } from "@/components/landing/SectionHead";
import { Button } from "@/components/ui/Button";
import type { Landing } from "@/content/landings/types";
import { formatEuroInline } from "@/lib/format";

type PriceBlockProps = {
  content: Landing["prijs"];
};

/**
 * Prijsanker, doorlooptijd en scope in één kaart, lichte surface. Het bedrag
 * staat in --jn-blue, net als de resultaatcijfers op de homepage.
 */
export function PriceBlock({ content }: PriceBlockProps) {
  const { anker } = content;

  return (
    <section className="bento landing-section" data-surface="light" aria-labelledby="landing-prijs-title">
      <div className="site-container">
        <SectionHead id="landing-prijs-title" eyebrow={content.eyebrow} kop={content.kop} />

        <Reveal>
          <div
            data-reveal
            className="grid grid-cols-1 gap-10 rounded-[1.25rem] border border-hairline bg-page-alt p-6 md:p-10 lg:grid-cols-12 lg:gap-5 lg:p-12"
          >
            <p className="flex flex-col gap-3 lg:col-span-5">
              <span className="text-[14px] leading-none tracking-[0.14em] text-copy-muted uppercase">
                {anker.prefix}
              </span>
              <span className="font-[family-name:var(--font-display)] text-[64px] leading-none font-medium text-jn-blue md:text-[88px]">
                {formatEuroInline(anker.bedrag)}
              </span>
              <span className="text-[16px] leading-[1.4] text-copy-muted md:text-[18px]">{anker.eenheid}</span>
            </p>

            <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
              <ul className="m-0! flex list-none flex-col gap-4 border-t border-hairline p-0! pt-6">
                {[content.doorlooptijd, content.scope].map((regel) => (
                  <li key={regel} className="flex items-start gap-3 text-[16px] leading-[1.5] text-copy md:text-[18px]">
                    <CheckIcon />
                    <span>{regel}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button href={content.cta.href} className="cta-banner__button cta-banner__button--primary">
                  <span>{content.cta.label}</span>
                  <ArrowIcon className="cta-banner__arrow" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" focusable="false" className="mt-[0.3em] h-4 w-4 shrink-0 text-jn-blue">
      <path
        d="m3 8.5 3 3 7-7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
