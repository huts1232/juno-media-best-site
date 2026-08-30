"use client";

import { useRef } from "react";
import { AvatarRow } from "@/components/ui/AvatarRow";
import { CountUp } from "@/components/ui/CountUp";
import { StatPill } from "@/components/ui/StatPill";
import { StatTrendBadge } from "@/components/ui/StatTrendBadge";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { statsCardsMotion } from "@/lib/motion-tokens";

type StatBadge =
  | { kind: "pill"; label: string }
  | { kind: "trend"; label: string }
  | { kind: "avatars"; label: string; initials: readonly string[] };

type StatCardItem = {
  value: string;
  label: string;
  badge: StatBadge;
};

type StatsCardsProps = {
  content: {
    heading: string;
    items: readonly StatCardItem[];
  };
};

export function StatsCards({ content }: StatsCardsProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    // Bij reduced motion staan de kaarten al in ruststand (CSS).
    if (!root || reducedMotion) return;

    let matchMedia: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      matchMedia = gsap.matchMedia();

      matchMedia.add(
        { desktop: statsCardsMotion.desktopQuery, mobile: statsCardsMotion.mobileQuery },
        (context) => {
          const { desktop } = context.conditions as { desktop: boolean };
          const { desktop: d, mobile: m } = statsCardsMotion;

          gsap.utils.toArray<HTMLElement>("[data-stat-card]").forEach((card, index) => {
            const fromLeft = index % 2 === 0;
            const rest = Number.parseFloat(card.dataset.restRotate ?? "0");

            // Mobiel alleen y en autoAlpha: schuin invliegen kost daar te veel
            // horizontale ruimte en zet de kaart deels buiten beeld.
            gsap.fromTo(
              card,
              desktop
                ? {
                    x: fromLeft ? -d.x : d.x,
                    y: d.y,
                    rotate: fromLeft ? -d.rotate : d.rotate,
                    autoAlpha: 0,
                  }
                : { x: 0, y: m.y, rotate: 0, autoAlpha: 0 },
              {
                x: 0,
                y: 0,
                rotate: desktop ? rest : 0,
                autoAlpha: 1,
                duration: desktop ? d.duration : m.duration,
                ease: desktop ? d.ease : m.ease,
                scrollTrigger: {
                  trigger: card,
                  start: statsCardsMotion.triggerStart,
                  once: true,
                },
              },
            );
          });
        },
      );
    }, root);

    return () => {
      matchMedia?.revert();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      className="stats-cards"
      data-surface="light"
      aria-labelledby="home-stats-title"
    >
      <div className="site-container">
        <h2 id="home-stats-title" className="sr-only">
          {content.heading}
        </h2>
        {/* Drie lagen met elk één eigenaar: .stat-card is de statische
            rastercel en dient als meetanker voor CountUp, __motion draagt de
            GSAP-transform van de entree, __inner doet de hover. Zo vechten
            entree en hover niet om dezelfde transform. */}
        <div className="stats-cards__grid">
          {content.items.map((item, index) => {
            const restRotate = statsCardsMotion.restRotate[index] ?? 0;

            return (
              <div key={`${item.value}-${item.label}`} className="stat-card" data-count-anchor>
                <div
                  className="stat-card__motion"
                  data-stat-card
                  data-rest-rotate={restRotate}
                  style={{ "--rest-rotate": `${restRotate}deg` } as React.CSSProperties}
                >
                  <div className="stat-card__inner">
                    <div className="stat-card__head">
                      <StatBadgeSlot badge={item.badge} />
                    </div>
                    <div className="stat-card__body">
                      <p className="stat-card__value">
                        <CountUp value={item.value} />
                      </p>
                      <p className="stat-card__label">{item.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatBadgeSlot({ badge }: { badge: StatBadge }) {
  if (badge.kind === "trend") return <StatTrendBadge label={badge.label} />;
  if (badge.kind === "avatars") {
    return <AvatarRow initials={badge.initials} label={badge.label} />;
  }
  return <StatPill label={badge.label} />;
}
