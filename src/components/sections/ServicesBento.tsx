"use client";

import Link from "next/link";
import { useRef } from "react";
import type { Dienst } from "@/content/services";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";
import { gsap } from "@/lib/gsap";
import { servicesBentoMotion } from "@/lib/motion-tokens";

type ServicesBentoProps = {
  content: {
    id: string;
    eyebrow: string;
    heading: string;
    listLabel: string;
    items: readonly Dienst[];
  };
};

/** Aantal grote kaarten bovenaan; de rest valt in de rij van drie eronder. */
const LARGE_COUNT = 2;

/**
 * Vijf diensten als bento: twee grote kaarten boven, drie kleine eronder.
 * Tablet toont twee kolommen, mobiel één.
 *
 * De reveal (GSAP) zit op de <li>, de hover-lift (CSS) op de <Link>. Zo zet
 * GSAP geen inline transform op het element dat bij hover zelf verschuift.
 *
 * globals.css staat buiten @layer en wint van elke utility. Daarom geen kleur
 * op de <a> zelf (`a { color: inherit }`) en de important-modifier op de
 * focusring.
 */
export function ServicesBento({ content }: ServicesBentoProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    // Bij reduced motion staan de kaarten direct in eindstaat.
    if (!root || reducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-bento-item]");
      const { y, duration, ease, stagger } = servicesBentoMotion.reveal;

      gsap.fromTo(
        cards,
        { y, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration,
          ease,
          stagger,
          clearProps: "transform",
          scrollTrigger: {
            trigger: root.querySelector("[data-bento-list]"),
            start: servicesBentoMotion.triggerStart,
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
      aria-labelledby="home-services-title"
    >
      <div className="site-container">
        <div className="bento__head">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="home-services-title" className="bento__heading">
            {content.heading}
          </h2>
        </div>

        <ul
          data-bento-list
          aria-label={content.listLabel}
          className="m-0! grid list-none grid-cols-1 gap-5 p-0! md:grid-cols-2 lg:grid-cols-6"
        >
          {content.items.map((item, index) => {
            const large = index < LARGE_COUNT;
            const lastOnTablet = index === content.items.length - 1 && content.items.length % 2 === 1;

            return (
              <li
                key={item.slug}
                data-bento-item
                className={cn(
                  "flex min-w-0",
                  large ? "lg:col-span-3" : "lg:col-span-2",
                  lastOnTablet && "md:col-span-2 lg:col-span-2",
                )}
              >
                <BentoCard item={item} large={large} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function BentoCard({ item, large }: { item: Dienst; large: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group flex w-full flex-col gap-4 rounded-[1.25rem] border border-hairline bg-page-alt p-6 md:p-8",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out",
        "hover:border-brand hover:shadow-[0_1.5rem_3rem_#0a0a0a14] motion-safe:hover:-translate-y-1",
        "focus-visible:border-brand focus-visible:outline-2! focus-visible:outline-offset-4! focus-visible:outline-jn-blue!",
        "motion-reduce:transition-[border-color]",
        large ? "min-h-[16rem] lg:min-h-[22rem]" : "min-h-[14rem] lg:min-h-[18rem]",
      )}
    >
      <span className="text-[12px] leading-none tracking-[0.14em] text-copy-muted uppercase">{item.label}</span>

      <div className="flex flex-col gap-3">
        <h3
          className={cn(
            "font-[family-name:var(--font-display)] leading-[1.08] font-medium text-copy",
            large ? "text-[24px] md:text-[32px]" : "text-[24px] lg:text-[26px]",
          )}
        >
          {item.name}
        </h3>
        <p className="max-w-[34rem] text-[15px] leading-[1.5] text-copy-muted md:text-[16px]">{item.body}</p>
      </div>

      <span
        aria-hidden="true"
        className="mt-auto flex h-10 w-10 items-center justify-center self-end rounded-full border border-hairline text-copy transition-colors duration-300 group-hover:border-brand group-hover:text-jn-blue"
      >
        <svg
          viewBox="0 0 16 16"
          focusable="false"
          className="h-4 w-4 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1"
        >
          <path
            d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </span>
    </Link>
  );
}
