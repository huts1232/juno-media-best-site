"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { magnetic } from "@/lib/motion-tokens";
import { useReducedMotion } from "./useReducedMotion";

export function useMagnetic<T extends HTMLElement>(strength = magnetic.strength) {
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) {
      gsap.set(element, { x: 0, y: 0 });
      return;
    }

    const xTo = gsap.quickTo(element, "x", {
      duration: magnetic.duration,
      ease: magnetic.ease,
    });
    const yTo = gsap.quickTo(element, "y", {
      duration: magnetic.duration,
      ease: magnetic.ease,
    });

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
      gsap.set(element, { x: 0, y: 0 });
    };
  }, [reducedMotion, strength]);

  return ref;
}
