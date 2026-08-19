"use client";

import { type RefObject } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";
import { parallax } from "@/lib/motion-tokens";

type ParallaxLayerOptions = {
  /** Element dat de scrollpositie bepaalt. Standaard de root zelf. */
  trigger?: RefObject<HTMLElement | null>;
  /** yPercent bij data-speed="1". Negatief laat de laag achterlopen. */
  multiplier?: number;
  /** Selector van de lagen binnen root. */
  selector?: string;
  /** Zet uit bij prefers-reduced-motion. */
  enabled?: boolean;
};

/**
 * Parallax voor decoratieve lagen die hun snelheid in `data-speed` dragen.
 * Eén implementatie voor de homepage-hero en de page-hero's, zodat beide
 * dezelfde curve en dezelfde scrub-instelling gebruiken.
 */
export function useParallaxLayers(
  root: RefObject<HTMLElement | null>,
  {
    trigger,
    multiplier = -60,
    selector = "[data-parallax-layer]",
    enabled = true,
  }: ParallaxLayerOptions = {},
) {
  useIsomorphicLayoutEffect(() => {
    const rootElement = root.current;
    if (!rootElement || !enabled) return;

    const triggerElement = trigger?.current ?? rootElement;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(selector).forEach((layer) => {
        const speed = Number(layer.dataset.speed || 0);
        if (!speed) return;

        gsap.to(layer, {
          yPercent: multiplier * speed,
          ease: "none",
          scrollTrigger: {
            trigger: triggerElement,
            start: parallax.start,
            end: parallax.end,
            scrub: parallax.scrub,
            invalidateOnRefresh: true,
          },
        });
      });
    }, rootElement);

    return () => context.revert();
  }, [root, trigger, multiplier, selector, enabled]);
}
