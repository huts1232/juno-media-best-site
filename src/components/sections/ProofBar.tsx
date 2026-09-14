"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { proof } from "@/content/proof";

/**
 * Pijl tussen de voor- en na-staat. Bewust een icoon en geen tekstpijl, zodat
 * de vorm niet per font verspringt en de kleur los van de tekst staat.
 */
function TransitionArrow() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 text-[#43B1D6]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.5 8h11M9.5 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Bewijs-sectie direct onder de hero: twee cases met hun voor/na-transitie en
 * een cijfer, plus een autoriteitsregel. Bewust auto-hoogte op wit, zodat hij
 * losstaat van de lichte hero-surface erboven.
 *
 * Logo-SVG's houden width/height op de root: de ref-check hieronder leest een
 * SVG zonder intrinsieke maat anders als mislukte load.
 *
 * Client component omdat een ontbrekend logobestand pas bij het laden blijkt.
 * De onError zet de slug op de missing-lijst en dan valt de kaart terug op de
 * clientnaam als tekst. Een fs-check op de server is geen alternatief: wat in
 * public/ staat wordt als statische asset geserveerd en zit niet gegarandeerd
 * in het bestandssysteem van de runtime.
 *
 * Twee cascade-details van dit project sturen de opmaak hieronder:
 * globals.css staat buiten @layer en wint daarmee van elke Tailwind-utility,
 * ongeacht specificiteit. Daarom loopt alle verticale ruimte via gap op een
 * div-parent in plaats van margin op een p (globals.css: `p { margin: 0 }`),
 * en heeft de focusring de important-modifier nodig om de globale
 * `:focus-visible`-regel (2px #43B1D6, offset 4px) te overschrijven.
 */
export function ProofBar() {
  const [missingLogos, setMissingLogos] = useState<readonly string[]>([]);

  const markLogoMissing = (slug: string) =>
    setMissingLogos((slugs) => (slugs.includes(slug) ? slugs : [...slugs, slug]));

  return (
    <section className="bg-white py-12 md:py-20" data-surface="light" aria-labelledby="proof-eyebrow">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <p id="proof-eyebrow" className="text-center text-[13px] font-medium text-[#57738C]">
          {proof.eyebrow}
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {proof.cases.map((item) => {
            const hasLogo = Boolean(item.logo) && !missingLogos.includes(item.slug);

            return (
              <Link
                key={item.slug}
                href={item.href}
                className="group flex flex-col gap-6 rounded-2xl border border-[#DCE6EE] bg-[#F3F7FA] p-7 transition-colors duration-200 hover:border-[#43B1D6] focus-visible:outline-2! focus-visible:outline-offset-2! focus-visible:outline-[#015C92]!"
              >
                <div className="flex h-6 items-center">
                  {hasLogo ? (
                    // eslint-disable-next-line @next/next/no-img-element -- next/image weigert SVG zonder dangerouslyAllowSVG.
                    <img
                      src={item.logo}
                      alt={item.client}
                      height={24}
                      className="h-6 w-auto opacity-70 grayscale transition-opacity duration-200 group-hover:opacity-100"
                      ref={(node) => {
                        // Een ontbrekend bestand faalt al tijdens het parsen van de
                        // HTML, dus voordat React hydrateert en onError koppelt. Bij
                        // het aanhaken alsnog controleren vangt precies dat geval:
                        // geladen, maar zonder intrinsieke breedte.
                        if (node?.complete && node.naturalWidth === 0) {
                          markLogoMissing(item.slug);
                        }
                      }}
                      onError={() => markLogoMissing(item.slug)}
                    />
                  ) : (
                    <span className="text-[15px] font-semibold text-[#015C92]">{item.client}</span>
                  )}
                </div>

                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] leading-snug">
                  <span className="text-[#57738C]">{item.before}</span>
                  <TransitionArrow />
                  <span className="sr-only">wordt</span>
                  <span className="font-semibold text-[#015C92]">{item.after}</span>
                </p>

                <div className="mt-auto flex flex-col gap-2">
                  <p className="text-[28px] font-bold leading-none text-[#015C92]">{item.metric}</p>
                  <p className="text-[12px] leading-none text-[#57738C]">{item.metricLabel}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-[12px] text-[#57738C] opacity-80">
          {proof.authority.map((entry, index) => (
            <Fragment key={entry}>
              {index > 0 ? (
                <span aria-hidden="true" className="h-3 w-px shrink-0 bg-[#57738C]/40" />
              ) : null}
              <span>{entry}</span>
            </Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
