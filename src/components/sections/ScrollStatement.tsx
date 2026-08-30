"use client";

import { useMemo, useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { scrollStatementMotion } from "@/lib/motion-tokens";

type ScrollStatementProps = {
  content: {
    text: string;
  };
};

/**
 * Grote zin die woord voor woord van gedempt naar vol contrast gaat, gekoppeld
 * aan de scrollpositie. De gedempte beginstaat staat in CSS, zodat er geen
 * flits van volledig contrast is voordat GSAP draait. Screenreaders lezen de
 * ongesplitste kopie; de gesplitste versie is aria-hidden.
 */
export function ScrollStatement({ content }: ScrollStatementProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  const words = useMemo(() => content.text.trim().split(/\s+/).filter(Boolean), [content.text]);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    // Bij reduced motion blijven alle woorden op vol contrast staan (CSS).
    if (!root || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-word]",
        { opacity: scrollStatementMotion.from },
        {
          opacity: 1,
          ease: "none",
          stagger: scrollStatementMotion.stagger,
          scrollTrigger: {
            trigger: root,
            start: scrollStatementMotion.start,
            end: scrollStatementMotion.end,
            scrub: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      className="scroll-statement"
      data-surface="light"
      aria-labelledby="home-statement-title"
    >
      <h2 id="home-statement-title" className="scroll-statement__heading">
        <span className="sr-only">{content.text}</span>
        <span aria-hidden="true">
          {words.map((word, index) => (
            <span key={`${word}-${index}`} data-word className="scroll-statement__word">
              {word}&nbsp;
            </span>
          ))}
        </span>
      </h2>
    </section>
  );
}
