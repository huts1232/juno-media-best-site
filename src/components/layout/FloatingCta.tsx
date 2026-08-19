"use client";

import Link from "next/link";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { floatingCtaMotion } from "@/lib/motion-tokens";

type FloatingCtaProps = {
  cta: {
    label: string;
    href: string;
  };
};

/**
 * Vaste CTA-pill rechtsonder, verschijnt voorbij 90vh. Staat bewust direct in
 * layout.tsx: binnen een gepinde sectie zou position: fixed meebewegen met de
 * pin. De entree zit op de wrapper en de magnetic hover op de pill zelf, zodat
 * ze niet om dezelfde x/y vechten.
 */
export function FloatingCta({ cta }: FloatingCtaProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const pillRef = useMagnetic<HTMLAnchorElement>();
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    if (reducedMotion) {
      gsap.set(wrap, { autoAlpha: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const reveal = gsap.fromTo(
        wrap,
        { autoAlpha: 0, y: floatingCtaMotion.y },
        {
          autoAlpha: 1,
          y: 0,
          duration: floatingCtaMotion.duration,
          ease: floatingCtaMotion.ease,
          paused: true,
        },
      );

      ScrollTrigger.create({
        start: () => window.innerHeight * floatingCtaMotion.startFactor,
        end: "max",
        invalidateOnRefresh: true,
        onEnter: () => reveal.play(),
        onLeaveBack: () => reveal.reverse(),
      });
    }, wrap);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div ref={wrapRef} className="floating-cta">
      <Link ref={pillRef} href={cta.href} className="floating-cta__pill">
        <span>{cta.label}</span>
        <svg className="floating-cta__arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
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
