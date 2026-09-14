"use client";

import { useRef } from "react";
import type { HomeCase } from "@/content/home-cases";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { homeCasesMotion } from "@/lib/motion-tokens";

type CasesProps = {
  content: {
    id: string;
    eyebrow: string;
    heading: string;
    listLabel: string;
    items: readonly HomeCase[];
  };
};

/**
 * Drie cases op de homepage: sectorlabel, korte toelichting en één
 * resultaatcijfer in --jn-blue. Lichte surface, zodat het donkerblauw genoeg
 * contrast heeft.
 *
 * Verticale ruimte loopt via gap: globals.css zet `p { margin: 0 }` buiten
 * @layer, en dat wint van margin-utilities.
 */
export function Cases({ content }: CasesProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    // Bij reduced motion staan de kaarten direct in eindstaat.
    if (!root || reducedMotion) return;

    const ctx = gsap.context(() => {
      const { y, duration, ease, stagger, triggerStart } = homeCasesMotion;

      gsap.fromTo(
        "[data-case-item]",
        { y, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration,
          ease,
          stagger,
          clearProps: "transform",
          scrollTrigger: {
            trigger: root.querySelector("[data-case-list]"),
            start: triggerStart,
            once: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      id={content.id}
      className="bento"
      data-surface="light"
      data-cta-zone="cases"
      aria-labelledby="home-cases-title"
    >
      <div className="site-container">
        <div className="bento__head">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="home-cases-title" className="bento__heading">
            {content.heading}
          </h2>
        </div>

        <ul
          data-case-list
          aria-label={content.listLabel}
          className="m-0! grid list-none grid-cols-1 gap-5 p-0! md:grid-cols-3"
        >
          {content.items.map((item) => (
            <li key={item.id} data-case-item className="flex min-w-0">
              <article className="flex w-full flex-col gap-8 rounded-[1.25rem] border border-hairline bg-page-alt p-6 md:p-8">
                <div className="flex flex-col gap-4">
                  <p className="text-[12px] leading-none tracking-[0.14em] text-copy-muted uppercase">{item.sector}</p>
                  <p className="text-[16px] leading-[1.5] text-copy">{item.body}</p>
                </div>

                <div className="mt-auto flex flex-col gap-2 border-t border-hairline pt-6">
                  {/* TODO: verifiëren */}
                  <p className="font-[family-name:var(--font-display)] text-[56px] leading-none font-medium text-jn-blue md:text-[64px]">
                    {item.result.value}
                  </p>
                  <p className="text-[14px] leading-[1.4] text-copy-muted">{item.result.label}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
