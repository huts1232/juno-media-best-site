import { ArrowIcon } from "@/components/landing/ArrowIcon";
import { Reveal } from "@/components/landing/Reveal";
import { indexLabel, SectionHead } from "@/components/landing/SectionHead";
import type { Landing } from "@/content/landings/types";

type ExampleGridProps = {
  content: Landing["voorbeelden"];
};

/** Vier concrete automatiseringen als 2x2-raster op de donkere surface. */
export function ExampleGrid({ content }: ExampleGridProps) {
  return (
    <section className="bento landing-section" aria-labelledby="landing-voorbeelden-title">
      <div className="site-container">
        <SectionHead id="landing-voorbeelden-title" eyebrow={content.eyebrow} kop={content.kop} />

        <Reveal>
          <ul className="m-0! grid list-none grid-cols-1 gap-5 p-0! md:grid-cols-2">
            {content.items.map((item, index) => (
              <li key={item.titel} data-reveal className="flex min-w-0">
                <article className="flex w-full flex-col gap-8 rounded-[1.25rem] border border-hairline bg-page-alt p-6 md:p-8 lg:min-h-[16rem]">
                  <div className="flex items-center justify-between gap-4">
                    <span aria-hidden="true" className="text-[14px] leading-none tracking-[0.14em] text-brand">
                      {indexLabel(index)}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-brand"
                    >
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="mt-auto flex flex-col gap-3">
                    <h3 className="font-[family-name:var(--font-display)] text-[24px] leading-[1.08] font-medium text-copy md:text-[32px]">
                      {item.titel}
                    </h3>
                    <p className="max-w-[34rem] text-[15px] leading-[1.5] text-copy-muted md:text-[17px]">
                      {item.regel}
                    </p>
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
