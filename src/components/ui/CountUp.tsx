"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { statsMotion } from "@/lib/motion-tokens";

type CountUpProps = {
  value: string;
};

type ParsedValue = {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
};

export function CountUp({ value }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reducedMotion = useReducedMotion();
  const parsed = useMemo(() => parseValue(value), [value]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!parsed || reducedMotion) {
      element.textContent = value;
      return;
    }

    const render = (nextValue: number) => {
      element.textContent = `${parsed.prefix}${formatNumber(nextValue, parsed.decimals)}${parsed.suffix}`;
    };

    render(0);

    const proxy = { value: 0 };
    const tween = gsap.to(proxy, {
      value: parsed.number,
      duration: statsMotion.count.duration,
      ease: statsMotion.count.ease,
      paused: true,
      onUpdate: () => render(proxy.value),
      onComplete: () => {
        element.textContent = value;
      },
    });

    // Meet op een vast anker als de omliggende kaart zelf geanimeerd wordt:
    // een element dat bij creatie verplaatst staat levert een verschoven
    // startpositie op, waardoor de teller te laat of niet afgaat.
    const anchor = element.closest<HTMLElement>("[data-count-anchor]") ?? element;

    const trigger = ScrollTrigger.create({
      trigger: anchor,
      start: statsMotion.triggerStart,
      once: true,
      onEnter: () => tween.play(0),
    });

    if (anchor.getBoundingClientRect().top <= window.innerHeight * 0.7) {
      tween.play(0);
    }

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [parsed, reducedMotion, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}

function parseValue(value: string): ParsedValue | null {
  const match = value.trim().match(/^([^0-9.-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const [, prefix = "", numberText = "", suffix = ""] = match;
  const number = Number(numberText);
  if (!Number.isFinite(number)) return null;

  return {
    prefix,
    number,
    suffix,
    decimals: numberText.includes(".") ? numberText.split(".")[1]?.length || 0 : 0,
  };
}

function formatNumber(value: number, decimals: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
