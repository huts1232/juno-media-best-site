"use client";

import { type ReactNode, useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";
import { landingMotion } from "@/lib/motion-tokens";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** "scroll" speelt zodra de groep in beeld komt, "load" direct (hero). */
  on?: "scroll" | "load";
};

/**
 * Reveal-wrapper voor de landingssecties: elk [data-reveal]-element eronder
 * komt met y 24 en opacity binnen, stagger 0.08. De secties zelf blijven zo
 * server components; alleen deze wrapper draait in de browser.
 *
 * gsap.matchMedia slaat de animatie over bij prefers-reduced-motion, en revert
 * zet alles terug als de voorkeur tijdens het bezoek wijzigt. Niet nesten: de
 * selector pakt ook [data-reveal] in een geneste Reveal.
 */
export function Reveal({ children, className, on = "scroll" }: RevealProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia(root);

    mm.add(landingMotion.query, () => {
      const { y, duration, ease, stagger, triggerStart, loadDelay } = landingMotion;

      gsap.fromTo(
        "[data-reveal]",
        { y, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration,
          ease,
          stagger,
          clearProps: "transform",
          ...(on === "load"
            ? { delay: loadDelay }
            : { scrollTrigger: { trigger: root, start: triggerStart, once: true } }),
        },
      );
    });

    return () => mm.revert();
  }, [on]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
