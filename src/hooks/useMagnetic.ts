"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "./useReducedMotion";

export function useMagnetic<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion) return;

    const xTo = gsap.quickTo(element, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(element, "y", { duration: 0.4, ease: "power3.out" });

    const onMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * strength;
      const y = (event.clientY - rect.top - rect.height / 2) * strength;
      xTo(x);
      yTo(y);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", onLeave);

    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
    };
  }, [reducedMotion, strength]);

  return ref;
}
