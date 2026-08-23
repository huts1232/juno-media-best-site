"use client";

import { useRef } from "react";
import { AgencyIcon } from "@/components/ui/AgencyIcon";
import { certificationBar } from "@/content/agency";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { certificationBarMotion } from "@/lib/motion-tokens";

/**
 * Smalle signaalbalk onder het statement: certificering links, partners rechts.
 * Bewust geen sectiekop en maximaal 120px hoog, het is een signaal en geen
 * sectie. Bij reduced motion staat alles al in ruststand (CSS).
 */
export function CertificationBar() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-certification-item]", {
        y: certificationBarMotion.y,
        autoAlpha: 0,
        duration: certificationBarMotion.duration,
        ease: certificationBarMotion.ease,
        stagger: certificationBarMotion.stagger,
        scrollTrigger: {
          trigger: root,
          start: certificationBarMotion.triggerStart,
          once: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={rootRef} className="certification-bar" aria-label={certificationBar.claim.label}>
      <div className="site-container certification-bar__inner">
        <p className="certification-bar__claim" data-certification-item>
          <AgencyIcon name={certificationBar.claim.icon} className="certification-bar__icon" />
          <span>
            <strong>{certificationBar.claim.count}</strong> {certificationBar.claim.label}
          </span>
        </p>
        <ul className="certification-bar__badges" aria-label={certificationBar.badgesLabel}>
          {certificationBar.badges.map((badge) => (
            <li key={badge.id} className="certification-bar__badge" data-certification-item>
              {badge.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
