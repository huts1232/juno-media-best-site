"use client";

import { useEffect, useRef } from "react";
import { CountUp } from "@/components/ui/CountUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { statsMotion } from "@/lib/motion-tokens";

type StatItem = {
  value: string;
  label: string;
};

type StatsProps = {
  content: {
    heading: string;
    items: readonly StatItem[];
  };
};

export function Stats({ content }: StatsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const dividers = gsap.utils.toArray<HTMLElement>("[data-stat-divider]");

      if (reducedMotion) {
        gsap.set(dividers, { scaleY: 1 });
        return;
      }

      gsap.fromTo(
        dividers,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: statsMotion.divider.duration,
          ease: statsMotion.divider.ease,
          stagger: statsMotion.divider.stagger,
          scrollTrigger: {
            trigger: section,
            start: statsMotion.triggerStart,
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="stats-section" aria-labelledby="home-stats-title">
      <div className="site-container">
        <h2 id="home-stats-title" className="sr-only">
          {content.heading}
        </h2>
        <dl className="stats-grid">
          {content.items.map((item, index) => (
            <div key={`${item.value}-${item.label}`} className="stats-item">
              {index > 0 ? <span data-stat-divider className="stats-divider" aria-hidden="true" /> : null}
              <dt className="stats-value">
                <CountUp value={item.value} />
              </dt>
              <dd className="stats-label">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
