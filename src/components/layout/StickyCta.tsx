"use client";

import Link from "next/link";
import { useRef } from "react";
import { stickyCta } from "@/content/agency";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { stickyCtaMotion } from "@/lib/motion-tokens";

/**
 * Vaste CTA-pill rechtsonder die per sectie van tekst wisselt.
 *
 * Staat bewust direct in layout.tsx: binnen een gepinde sectie zou
 * position: fixed meebewegen met de pin. De entree zit op de wrapper en de
 * magnetic hover op de pill zelf, zodat ze niet om dezelfde x/y vechten. De
 * tekst zit in een eigen span, dus het uitfaden raakt de pijl niet.
 */
export function StickyCta() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pillRef = useMagnetic<HTMLAnchorElement>();
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const currentLabel = useRef<string>(stickyCta.default);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const wrap = wrapRef.current;
    const label = labelRef.current;
    if (!wrap || !label) return;

    const isDesktop = () => window.matchMedia(stickyCtaMotion.desktopQuery).matches;

    const setLabel = (next: string) => {
      if (next === currentLabel.current) return;
      currentLabel.current = next;

      if (reducedMotion) {
        label.textContent = next;
        return;
      }

      const pill = pillRef.current;

      gsap
        .timeline()
        .to(label, {
          y: -stickyCtaMotion.label.travel,
          autoAlpha: 0,
          duration: stickyCtaMotion.label.duration,
          ease: "power2.in",
        })
        .add(() => {
          // Breedte meebewegen in plaats van springen: eerst de huidige breedte
          // vastzetten, dan de tekst wisselen en naar auto animeren.
          const from = pill?.offsetWidth;
          label.textContent = next;

          if (pill && from && isDesktop()) {
            gsap.fromTo(
              pill,
              { width: from },
              {
                width: "auto",
                duration: stickyCtaMotion.width.duration,
                ease: stickyCtaMotion.width.ease,
              },
            );
          }
        })
        .fromTo(
          label,
          { y: stickyCtaMotion.label.travel, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: stickyCtaMotion.label.duration,
            ease: "power2.out",
          },
        );
    };

    if (reducedMotion) {
      gsap.set(wrap, { autoAlpha: 1, y: 0 });
    }

    const ctx = gsap.context(() => {
      if (!reducedMotion) {
        const reveal = gsap.fromTo(
          wrap,
          { autoAlpha: 0, y: stickyCtaMotion.y },
          {
            autoAlpha: 1,
            y: 0,
            duration: stickyCtaMotion.duration,
            ease: stickyCtaMotion.ease,
            paused: true,
          },
        );

        ScrollTrigger.create({
          start: () => window.innerHeight * stickyCta.showAfterVh,
          end: "max",
          invalidateOnRefresh: true,
          onEnter: () => reveal.play(),
          onLeaveBack: () => reveal.reverse(),
        });
      }

      for (const section of stickyCta.sections) {
        for (const element of document.querySelectorAll<HTMLElement>(section.selector)) {
          ScrollTrigger.create({
            trigger: element,
            start: stickyCtaMotion.zoneStart,
            end: stickyCtaMotion.zoneEnd,
            onEnter: () => setLabel(section.label),
            onEnterBack: () => setLabel(section.label),
          });
        }
      }

      // In de footer heeft de pill niets meer toe te voegen.
      for (const element of document.querySelectorAll<HTMLElement>(stickyCta.hideSelector)) {
        ScrollTrigger.create({
          trigger: element,
          start: stickyCtaMotion.zoneStart,
          onEnter: () => wrap.setAttribute("data-hidden", "true"),
          onLeaveBack: () => wrap.removeAttribute("data-hidden"),
        });
      }
    }, wrap);

    return () => ctx.revert();
  }, [pillRef, reducedMotion]);

  return (
    <div ref={wrapRef} className="sticky-cta">
      <Link ref={pillRef} href={stickyCta.href} className="sticky-cta__pill" aria-label={stickyCta.ariaLabel}>
        <span ref={labelRef} className="sticky-cta__label">
          {stickyCta.default}
        </span>
        <svg className="sticky-cta__arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
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
  );
}
