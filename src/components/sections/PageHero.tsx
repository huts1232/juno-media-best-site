"use client";

import { useRef } from "react";
import { SplitText } from "@/components/ui/SplitText";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useParallaxLayers } from "@/hooks/useParallaxLayers";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { pageHeroMotion } from "@/lib/motion-tokens";

type PageHeroContent = {
  eyebrow: string;
  title: string;
  intro: string;
};

type PageHeroProps = {
  content: PageHeroContent;
  id: string;
  /**
   * "full" vult de viewport minus de nav, centreert verticaal en voegt de
   * decoratieve parallaxlagen plus scroll-hint toe. "default" houdt de compacte
   * kop die de overige pagina's al gebruiken.
   */
  variant?: "default" | "full";
  scrollLabel?: string;
};

export function PageHero({ content, id, variant = "default", scrollLabel = "Scroll" }: PageHeroProps) {
  const isFull = variant === "full";
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useParallaxLayers(sectionRef, {
    multiplier: pageHeroMotion.decorMultiplier,
    enabled: isFull && !reducedMotion,
  });

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || !isFull) return;

    if (reducedMotion) {
      gsap.set([introRef.current, hintRef.current], { autoAlpha: 1, y: 0 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        [introRef.current, hintRef.current],
        { autoAlpha: 0, y: pageHeroMotion.intro.y },
        {
          autoAlpha: 1,
          y: 0,
          duration: pageHeroMotion.intro.duration,
          delay: pageHeroMotion.intro.delay,
          ease: pageHeroMotion.intro.ease,
          stagger: 0.1,
        },
      );

      // De hint hoort bij de eerste scroll: zodra de bezoeker beweegt is hij
      // overbodig. Terugscrollen naar de top brengt hem terug.
      ScrollTrigger.create({
        start: () => window.innerHeight * pageHeroMotion.hint.startFactor,
        end: "max",
        invalidateOnRefresh: true,
        onEnter: () =>
          gsap.to(hintRef.current, {
            autoAlpha: 0,
            duration: pageHeroMotion.hint.duration,
            overwrite: true,
          }),
        onLeaveBack: () =>
          gsap.to(hintRef.current, {
            autoAlpha: 1,
            duration: pageHeroMotion.hint.duration,
            overwrite: true,
          }),
      });
    }, section);

    return () => context.revert();
  }, [isFull, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={cn("page-hero", isFull && "page-hero--full")}
      aria-labelledby={id}
    >
      {isFull ? <PageHeroDecor /> : null}

      <div className="site-container page-hero__inner">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 id={id} className="page-hero__title">
          <SplitText text={content.title} />
        </h1>
        <p ref={introRef} className="lead page-hero__intro">
          {content.intro}
        </p>
      </div>

      {isFull ? (
        <div ref={hintRef} className="page-hero__hint" aria-hidden="true">
          <span className="page-hero__hint-label">{scrollLabel}</span>
          <span className="page-hero__hint-line" />
        </div>
      ) : null}
    </section>
  );
}

/**
 * Drie vormen op verschillende dieptes. Puur decoratief, dus aria-hidden en
 * zonder eigen tekst; de parallax leest data-speed via useParallaxLayers.
 */
function PageHeroDecor() {
  return (
    <div className="page-hero__decor" aria-hidden="true">
      <span className="page-hero__shape page-hero__shape--ring" data-parallax-layer data-speed="0.6" />
      <span className="page-hero__shape page-hero__shape--blob" data-parallax-layer data-speed="0.32" />
      <span className="page-hero__shape page-hero__shape--bar" data-parallax-layer data-speed="0.18" />
    </div>
  );
}
