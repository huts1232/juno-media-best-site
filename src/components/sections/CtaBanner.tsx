"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { ctaMotion } from "@/lib/motion-tokens";

type CtaBannerProps = {
  content: {
    statement: string;
    support: string;
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
};

export function CtaBanner({ content }: CtaBannerProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const decorRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    const surface = surfaceRef.current;
    const copy = copyRef.current;
    const decor = decorRef.current;

    if (!root || !surface || !copy || !decor) return;

    const copyItems = Array.from(copy.children);

    if (reducedMotion) {
      gsap.set(surface, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(copyItems, { opacity: 1, y: 0 });
      gsap.set(decor, { yPercent: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        surface,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: ctaMotion.surfaceDuration,
          ease: ctaMotion.surfaceEase,
          scrollTrigger: {
            trigger: root,
            start: ctaMotion.triggerStart,
            once: true,
          },
        },
      );

      gsap.fromTo(
        copyItems,
        { opacity: 0, y: ctaMotion.copyY },
        {
          opacity: 1,
          y: 0,
          duration: ctaMotion.copyDuration,
          ease: ctaMotion.copyEase,
          delay: ctaMotion.copyDelay,
          stagger: ctaMotion.copyStagger,
          scrollTrigger: {
            trigger: root,
            start: ctaMotion.triggerStart,
            once: true,
          },
        },
      );

      gsap.to(decor, {
        yPercent: ctaMotion.decorYPercent,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: ctaMotion.decorStart,
          end: ctaMotion.decorEnd,
          scrub: ctaMotion.decorScrub,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={rootRef} className="cta-banner" aria-labelledby="home-cta-title">
      <div ref={surfaceRef} className="cta-banner__surface" aria-hidden="true" />
      <div className="site-container cta-banner__inner">
        <div ref={copyRef} className="cta-banner__copy">
          <h2 id="home-cta-title" className="cta-banner__statement">
            {content.statement}
          </h2>
          <p className="cta-banner__support">{content.support}</p>
          <div className="cta-banner__actions">
            <Button href={content.primary.href} className="cta-banner__button cta-banner__button--primary">
              <span>{content.primary.label}</span>
              <ArrowIcon />
            </Button>
            <Button href={content.secondary.href} variant="secondary" className="cta-banner__button cta-banner__button--secondary">
              <span>{content.secondary.label}</span>
              <ArrowIcon />
            </Button>
          </div>
        </div>

        <div ref={decorRef} className="cta-banner__decor" aria-hidden="true">
          <CtaDecor />
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg className="cta-banner__arrow" aria-hidden="true" viewBox="0 0 16 16" focusable="false">
      <path
        d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CtaDecor() {
  return (
    <svg viewBox="0 0 560 560" focusable="false">
      <path
        pathLength="1"
        d="M106 368C156 250 244 184 370 170C436 162 478 126 496 62"
        fill="none"
        stroke="#080808"
        strokeLinecap="round"
        strokeWidth="2"
        opacity=".16"
      />
      <path
        pathLength="1"
        d="M54 212C144 280 226 286 300 230C374 174 438 180 506 248"
        fill="none"
        stroke="#080808"
        strokeLinecap="round"
        strokeWidth="2"
        opacity=".2"
      />
      <path
        pathLength="1"
        d="M92 482C134 398 200 350 290 338C400 322 468 268 494 176"
        fill="none"
        stroke="#43b1d6"
        strokeLinecap="round"
        strokeWidth="14"
      />
      <path
        pathLength="1"
        d="M162 104H380M162 146H466M162 188H316"
        fill="none"
        stroke="#080808"
        strokeLinecap="round"
        strokeWidth="18"
        opacity=".12"
      />
      <circle cx="120" cy="104" r="18" fill="#1f7fb8" />
      <circle cx="92" cy="482" r="24" fill="#080808" />
      <circle cx="494" cy="176" r="24" fill="#43b1d6" />
    </svg>
  );
}
