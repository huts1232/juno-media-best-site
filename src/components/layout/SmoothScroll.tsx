"use client";

import { type ReactNode, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { createLenis, setActiveLenis } from "@/lib/lenis";
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

    setActiveLenis(lenis);
    lenis.on("scroll", update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Fout #4: triggers staan te hoog zolang fonts en beelden nog binnenkomen.
    let disposed = false;
    const refresh = () => {
      if (!disposed) ScrollTrigger.refresh();
    };

    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      disposed = true;
      window.removeEventListener("load", refresh);
      lenis.off("scroll", update);
      gsap.ticker.remove(tick);
      setActiveLenis(null);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
