"use client";

import Link from "next/link";
import { useRef } from "react";
import { type CaseItem, type casesPage } from "@/content/cases";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { caseStackMotion } from "@/lib/motion-tokens";

type CaseStackProps = {
  items: readonly CaseItem[];
  copy: typeof casesPage;
};

/**
 * Sticky stack: elke kaart is 100vh hoog en plakt met CSS `position: sticky` aan
 * de bovenkant terwijl de volgende eroverheen schuift.
 *
 * Bewust géén ScrollTrigger-pin. Pin en sticky vechten om dezelfde offset
 * (fout 1 uit de briefing); sticky wint hier omdat de browser hem zelf
 * herberekent bij resize en er geen pinSpacing-gat achterblijft. GSAP doet
 * alleen de scrub-timeline die de achterblijvende kaart wegschaalt.
 */
export function CaseStack({ items, copy }: CaseStackProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) return;

    let matchMedia: gsap.MatchMedia | undefined;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-case-card]");
      const panels = gsap.utils.toArray<HTMLElement>("[data-case-panel]");
      if (!cards.length) return;

      matchMedia = gsap.matchMedia();

      matchMedia.add(caseStackMotion.stackQuery, () => {
        // Het paneel schaalt weg, niet de kaart: de kaart houdt zijn dekkende
        // achtergrond op ware grootte, zodat de vorige kaart er niet langs piept.
        const tweens = panels.slice(0, -1).map((panel, index) =>
          gsap.to(panel, {
            scale: caseStackMotion.outgoing.scale,
            yPercent: caseStackMotion.outgoing.yPercent,
            filter: `brightness(${caseStackMotion.outgoing.brightness})`,
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: caseStackMotion.outgoing.start,
              end: caseStackMotion.outgoing.end,
              scrub: true,
              invalidateOnRefresh: true,
            },
          }),
        );

        return () => {
          tweens.forEach((tween) => tween.kill());
          // Expliciet opruimen: een halfvoltooide scrub houdt anders zijn scale
          // vast wanneer het venster onder 900px zakt.
          gsap.set(panels, { clearProps: "transform,filter" });
        };
      });

      matchMedia.add(caseStackMotion.listQuery, () => {
        const tweens = panels.map((panel) =>
          gsap.fromTo(
            panel,
            { y: caseStackMotion.listReveal.y, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: caseStackMotion.listReveal.duration,
              ease: caseStackMotion.listReveal.ease,
              scrollTrigger: {
                trigger: panel,
                start: caseStackMotion.listReveal.start,
                once: true,
              },
            },
          ),
        );

        return () => {
          tweens.forEach((tween) => tween.kill());
          gsap.set(panels, { clearProps: "transform,opacity,visibility" });
        };
      });
    }, root);

    return () => {
      matchMedia?.revert();
      context.revert();
    };
  }, [items, reducedMotion]);

  return (
    <div ref={rootRef} className="case-stack">
      {items.map((item, index) => (
        <CaseCard key={item.slug} item={item} index={index} copy={copy} />
      ))}
    </div>
  );
}

type CaseCardProps = {
  item: CaseItem;
  index: number;
  copy: typeof casesPage;
};

function CaseCard({ item, index, copy }: CaseCardProps) {
  return (
    <article
      data-case-card
      className="case-stack__card"
      // Oplopend, zodat de volgende kaart altijd bovenop de vorige komt.
      style={{ zIndex: index + 1 }}
    >
      <div data-case-panel className="case-stack__inner">
        <div className="case-stack__media">
          {/* eslint-disable-next-line @next/next/no-img-element -- stap 3 vervangt
              dit door de lazy video met poster. */}
          <img src={item.media.poster} alt={item.media.alt} className="case-stack__poster" />
        </div>

        <div className="case-stack__body">
          <p className="case-stack__client">{item.client}</p>
          <h2 className="case-stack__result">
            <CaseResult result={item.result} accent={item.resultAccent} />
          </h2>
          <p className="case-stack__text">{item.body}</p>

          <ul className="case-stack__pills" aria-label={copy.servicesLabel}>
            {item.services.map((service) => (
              <li key={service} className="case-stack__pill">
                {service}
              </li>
            ))}
          </ul>

          <Link href={`/cases/${item.slug}`} className="case-stack__cta">
            <span>{copy.ctaLabel}</span>
            <svg className="case-stack__arrow" aria-hidden="true" viewBox="0 0 16 16" focusable="false">
              <path
                d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Zet het cijfergedeelte van de resultaatzin in de accentkleur. */
function CaseResult({ result, accent }: { result: string; accent: string }) {
  const start = result.indexOf(accent);
  if (start === -1) return <>{result}</>;

  return (
    <>
      {result.slice(0, start)}
      <span className="case-stack__accent">{accent}</span>
      {result.slice(start + accent.length)}
    </>
  );
}
