"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { animatedNumberMotion } from "@/lib/motion-tokens";

type AnimatedNumberProps = {
  value: number;
  format: (value: number) => string;
  className?: string;
};

/**
 * Telt bij elke wijziging naar de nieuwe waarde. Tabulaire cijfers, zodat de
 * regel niet danst tijdens het tellen.
 */
export function AnimatedNumber({ value, format, className }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const currentRef = useRef(value);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (reducedMotion) {
      currentRef.current = value;
      element.textContent = format(value);
      return;
    }

    const proxy = { value: currentRef.current };
    const tween = gsap.to(proxy, {
      value,
      duration: animatedNumberMotion.duration,
      ease: animatedNumberMotion.ease,
      onUpdate: () => {
        currentRef.current = proxy.value;
        element.textContent = format(proxy.value);
      },
      onComplete: () => {
        currentRef.current = value;
        element.textContent = format(value);
      },
    });

    return () => {
      tween.kill();
    };
  }, [format, reducedMotion, value]);

  return (
    <span ref={ref} className={className ? `tabular-nums ${className}` : "tabular-nums"}>
      {format(value)}
    </span>
  );
}
