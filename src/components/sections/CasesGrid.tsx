"use client";

import Link from "next/link";
import { LazyMotion } from "framer-motion";
import * as m from "framer-motion/m";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { casesMotion } from "@/lib/motion-tokens";

const loadFramerFeatures = () => import("@/lib/framer-features").then((mod) => mod.default);

type CaseItem = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  palette: readonly string[];
};

type CasesGridProps = {
  content: {
    eyebrow: string;
    heading: string;
    linkLabel: string;
    ariaLabel: string;
  };
  items: readonly CaseItem[];
};

export function CasesGrid({ content, items }: CasesGridProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];

    if (reducedMotion) {
      gsap.set(cards, { opacity: 1, y: 0 });
      return;
    }

    let matchMedia: gsap.MatchMedia | undefined;
    const ctx = gsap.context(() => {
      matchMedia = gsap.matchMedia();

      matchMedia.add(casesMotion.desktopQuery, () => {
        const tweens: ReturnType<typeof gsap.fromTo>[] = [];

        for (let index = 0; index < cards.length; index += 2) {
          const rowCards = cards.slice(index, index + 2);
          const tween = gsap.fromTo(
            rowCards,
            { opacity: 0, y: casesMotion.revealY },
            {
              opacity: 1,
              y: 0,
              duration: casesMotion.revealDuration,
              ease: casesMotion.revealEase,
              stagger: casesMotion.revealStagger,
              scrollTrigger: {
                trigger: rowCards[0],
                start: casesMotion.triggerStart,
                once: true,
              },
            },
          );
          tweens.push(tween);
        }

        return () => {
          tweens.forEach((tween) => tween.kill());
        };
      });

      matchMedia.add(casesMotion.mobileQuery, () => {
        const tweens = cards.map((card) =>
          gsap.fromTo(
            card,
            { opacity: 0, y: casesMotion.revealY },
            {
              opacity: 1,
              y: 0,
              duration: casesMotion.revealDuration,
              ease: casesMotion.revealEase,
              scrollTrigger: {
                trigger: card,
                start: casesMotion.triggerStart,
                once: true,
              },
            },
          ),
        );

        return () => {
          tweens.forEach((tween) => tween.kill());
        };
      });
    }, root);

    return () => {
      matchMedia?.revert();
      ctx.revert();
    };
  }, [items, reducedMotion]);

  return (
    <section ref={rootRef} className="cases-section" aria-labelledby="home-cases-title">
      <div className="site-container">
        <div className="cases-header">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="home-cases-title" className="cases-heading">
            {content.heading}
          </h2>
        </div>

        <LazyMotion features={loadFramerFeatures} strict>
          <div className="cases-grid" aria-label={content.ariaLabel}>
            {items.map((item, index) => (
              <article
                key={item.slug}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className="case-card"
              >
                <Link href={`/cases/${item.slug}`} className="case-card__link" aria-label={`${content.linkLabel}: ${item.client}`}>
                  <m.div layoutId={`case-thumbnail-${item.slug}`} className="case-card__thumb">
                    <CaseThumbnail item={item} index={index} />
                    <div className="case-card__overlay">
                      <span>{item.title}</span>
                    </div>
                  </m.div>
                  <div className="case-card__meta">
                    <div className="case-card__client-row">
                      <CaseLogo item={item} index={index} />
                      <h3 className="case-card__client">{item.client}</h3>
                    </div>
                    <p className="case-card__summary">{item.summary}</p>
                    <span className="case-card__cta">
                      <span>{content.linkLabel}</span>
                      <svg aria-hidden="true" viewBox="0 0 16 16" focusable="false">
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
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}

function CaseThumbnail({ item, index }: { item: CaseItem; index: number }) {
  const [primary, secondary, tertiary] = item.palette;
  const offset = index * 24;

  return (
    <svg className="case-card__image" viewBox="0 0 960 720" role="img" aria-label={item.title} focusable="false">
      <rect width="960" height="720" fill="#101010" />
      <circle cx={690 - offset} cy="168" r="188" fill={primary} opacity=".24" />
      <circle cx={248 + offset} cy="548" r="164" fill={secondary} opacity=".2" />
      <rect x="112" y="104" width="736" height="512" rx="8" fill="#080808" stroke="#ffffff1f" strokeWidth="2" />
      <rect x="162" y="156" width="300" height="42" rx="21" fill={tertiary} opacity=".82" />
      <rect x="162" y="242" width="636" height="56" rx="28" fill="#ffffff" opacity=".14" />
      <rect x="162" y="330" width="424" height="36" rx="18" fill="#ffffff" opacity=".24" />
      <rect x="162" y="396" width="520" height="36" rx="18" fill="#ffffff" opacity=".16" />
      <path
        d={`M188 ${538 - index * 7}C304 ${382 + index * 8} 426 ${378 - index * 4} 514 ${480 + index * 6}C584 562 672 530 770 384`}
        fill="none"
        stroke={primary}
        strokeLinecap="round"
        strokeWidth="24"
      />
    </svg>
  );
}

function CaseLogo({ item, index }: { item: CaseItem; index: number }) {
  const initial = item.client.trim().charAt(0);
  const [primary] = item.palette;

  return (
    <span className="case-card__logo" aria-hidden="true">
      <svg viewBox="0 0 40 40" focusable="false">
        <rect width="40" height="40" rx="8" fill={primary} />
        <text
          x="20"
          y={index % 2 === 0 ? "26" : "27"}
          fill="#080808"
          fontFamily="Arial, sans-serif"
          fontSize="18"
          fontWeight="700"
          textAnchor="middle"
        >
          {initial}
        </text>
      </svg>
    </span>
  );
}
