"use client";

import { type ReactNode, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { createLenis } from "@/lib/lenis";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = createLenis();
    const update = () => ScrollTrigger.update();
    const tick = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", update);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
