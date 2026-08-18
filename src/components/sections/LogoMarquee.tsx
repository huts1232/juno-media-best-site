"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { marqueeMotion } from "@/lib/motion-tokens";

type LogoMarqueeItem = {
  name: string;
};

type LogoMarqueeProps = {
  content: {
    ariaLabel: string;
    items: readonly LogoMarqueeItem[];
  };
};

type LogoMarqueeStyle = CSSProperties & {
  "--marquee-duration": string;
};

export function LogoMarquee({ content }: LogoMarqueeProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) {
      root.style.setProperty("--marquee-duration", marqueeMotion.baseDuration);
      return;
    }

    let resetTimer = 0;
    const setDuration = (duration: string) => {
      gsap.set(root, { "--marquee-duration": duration });
    };

    const trigger = ScrollTrigger.create({
      trigger: root,
      start: marqueeMotion.triggerStart,
      end: marqueeMotion.triggerEnd,
      onUpdate: (self) => {
        window.clearTimeout(resetTimer);
        setDuration(self.direction > 0 ? marqueeMotion.downDuration : marqueeMotion.upDuration);
        resetTimer = window.setTimeout(() => setDuration(marqueeMotion.baseDuration), marqueeMotion.resetDelay);
      },
    });

    return () => {
      window.clearTimeout(resetTimer);
      trigger.kill();
      setDuration(marqueeMotion.baseDuration);
    };
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      className="logo-marquee-section"
      aria-label={content.ariaLabel}
      data-reduced-motion={reducedMotion ? "true" : undefined}
      style={{ "--marquee-duration": marqueeMotion.baseDuration } as LogoMarqueeStyle}
    >
      <div className="logo-marquee-viewport">
        <div className="logo-marquee-track">
          <LogoSet items={content.items} />
          <LogoSet items={content.items} hidden />
        </div>
      </div>
    </section>
  );
}

function LogoSet({ items, hidden = false }: { items: readonly LogoMarqueeItem[]; hidden?: boolean }) {
  return (
    <div className="logo-marquee-set" role={hidden ? undefined : "list"} aria-hidden={hidden ? "true" : undefined}>
      {items.map((item, index) => (
        <div key={`${item.name}-${index}`} className="logo-marquee-item" role={hidden ? undefined : "listitem"}>
          <LogoPlaceholder index={index} />
          <span className="logo-marquee-item__name">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

function LogoPlaceholder({ index }: { index: number }) {
  const variants = [
    "M24 54C24 34 36 22 56 22C76 22 88 34 88 54C88 74 76 86 56 86C36 86 24 74 24 54Z",
    "M30 28H82V80H30Z",
    "M25 78L56 24L87 78H25Z",
    "M24 54H88M56 22V86",
  ];

  return (
    <span className="logo-marquee-item__mark" aria-hidden="true">
      <svg viewBox="0 0 112 108" focusable="false">
        <path d={variants[index % variants.length]} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="10" />
      </svg>
    </span>
  );
}
