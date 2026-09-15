import { Reveal } from "@/components/landing/Reveal";
import { SectionHead } from "@/components/landing/SectionHead";
import type { Landing } from "@/content/landings/types";

type IntegrationsProps = {
  content: Landing["techniek"];
};

/** Koppelingen als tekstchips op de donkere surface, kop links en chips rechts. */
export function Integrations({ content }: IntegrationsProps) {
  return (
    <section className="bento landing-section" aria-labelledby="landing-techniek-title">
      <div className="site-container grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-5">
        <SectionHead
          id="landing-techniek-title"
          eyebrow={content.eyebrow}
          kop={content.kop}
          className="mb-0! lg:col-span-5"
        />

        <Reveal className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7 lg:self-end">
          <ul className="m-0! flex list-none flex-wrap gap-3 p-0!">
            {content.koppelingen.map((koppeling) => (
              <li
                key={koppeling}
                data-reveal
                className="rounded-full border border-hairline bg-page-alt px-5 py-3 text-[16px] leading-none text-copy md:text-[18px]"
              >
                {koppeling}
              </li>
            ))}
          </ul>
          <p data-reveal className="text-[16px] leading-[1.5] text-copy-muted md:text-[18px]">
            {content.noot}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
