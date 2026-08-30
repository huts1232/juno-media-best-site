"use client";

import { useEffect, useRef, useState } from "react";
import { addPlatformParallax, addVisualMotion } from "@/components/services/serviceVisualMotion";
import {
  CodeBlock,
  MobileFrame,
  PlatformStack,
  StrategyRings,
  VisualTiles,
  WebsiteFrame,
} from "@/components/services/visuals";
import type { ServiceVisual } from "@/content/services";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { servicesBentoMotion } from "@/lib/motion-tokens";

type ServiceItem = {
  name: string;
  heading: string;
  body: string;
  visual: ServiceVisual;
  video?: {
    ariaLabel: string;
    poster: string;
    src: string;
  };
};

type ServicesBentoProps = {
  content: {
    eyebrow: string;
    heading: string;
    items: readonly ServiceItem[];
  };
};

export function ServicesBento({ content }: ServicesBentoProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [loadVideo, setLoadVideo] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    // Bij reduced motion staat alles al in eindstaat (CSS).
    if (!root || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-bento-card]").forEach((card) => {
        const motion = card.querySelector<HTMLElement>("[data-bento-inner]");
        const variant = card.dataset.visual as ServiceVisual | undefined;
        if (!motion || !variant) return;

        // De statische kaartcel is de trigger, niet het bewegende element:
        // een verplaatst element levert een verschoven startpositie op.
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: servicesBentoMotion.triggerStart,
            once: true,
          },
        });

        timeline.fromTo(
          motion,
          { y: servicesBentoMotion.card.y, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: servicesBentoMotion.card.duration,
            ease: servicesBentoMotion.card.ease,
          },
          0,
        );

        addVisualMotion(variant, card, timeline);

        if (variant === "platforms") addPlatformParallax(card);
      });
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  // Video in de telefoonmockup: lazy laden, spelen zolang de kaart in beeld is.
  useEffect(() => {
    const root = rootRef.current;
    const video = root?.querySelector<HTMLVideoElement>("[data-mobile-video]");
    if (!root || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLoadVideo(true);
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loadVideo) return;
    rootRef.current?.querySelector<HTMLVideoElement>("[data-mobile-video]")?.load();
  }, [loadVideo]);

  return (
    <section
      ref={rootRef}
      className="bento"
      data-surface="light"
      aria-labelledby="home-services-title"
    >
      <div className="site-container">
        <div className="bento__head">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="home-services-title" className="bento__heading">
            {content.heading}
          </h2>
        </div>

        <div className="bento__grid">
          {content.items.map((item) => (
            <article
              key={item.name}
              className="bento-card"
              data-bento-card
              data-visual={item.visual}
              aria-labelledby={`bento-${item.visual}`}
            >
              <div className="bento-card__inner" data-bento-inner>
                <h3 id={`bento-${item.visual}`} className="bento-card__title">
                  {item.heading}
                </h3>
                <p className="bento-card__body">{item.body}</p>
                <div className="bento-card__visual">
                  <ServiceVisualSlot item={item} loadVideo={loadVideo} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceVisualSlot({ item, loadVideo }: { item: ServiceItem; loadVideo: boolean }) {
  switch (item.visual) {
    case "strategy":
      return <StrategyRings />;
    case "visual":
      return <VisualTiles />;
    case "platforms":
      return <PlatformStack />;
    case "website":
      return <WebsiteFrame />;
    case "mobile":
      return <MobileFrame video={item.video} loadVideo={loadVideo} />;
    case "development":
      return <CodeBlock />;
  }
}
