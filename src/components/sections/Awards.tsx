"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { awardsMotion } from "@/lib/motion-tokens";

type AwardItem = {
  platform: string;
  project: string;
  prize: string;
  date: string;
  accent: string;
};

type AwardsProps = {
  content: {
    eyebrow: string;
    heading: string;
    ariaLabel: string;
    certificateLabel: string;
    items: readonly AwardItem[];
  };
};

export function Awards({ content }: AwardsProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];

    if (reducedMotion) {
      gsap.set(cards, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: awardsMotion.revealY,
        },
        {
          opacity: 1,
          y: 0,
          duration: awardsMotion.revealDuration,
          ease: awardsMotion.revealEase,
          stagger: awardsMotion.revealStagger,
          scrollTrigger: {
            trigger: root,
            start: awardsMotion.triggerStart,
            once: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={rootRef} className="awards-section" aria-labelledby="home-awards-title">
      <div className="site-container">
        <div className="awards-header">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="home-awards-title" className="awards-heading">
            {content.heading}
          </h2>
        </div>

        <div className="awards-grid" role="list" aria-label={content.ariaLabel}>
          {content.items.map((item, index) => (
            <article
              key={`${item.platform}-${item.project}`}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="award-card"
              role="listitem"
            >
              <div className="award-card__certificate">
                <AwardCertificate item={item} label={content.certificateLabel} index={index} />
              </div>
              <div className="award-card__meta">
                <h3 className="award-card__platform">{item.platform}</h3>
                <p className="award-card__project">{item.project}</p>
                <p className="award-card__prize">{item.prize}</p>
                <time className="award-card__date">{item.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardCertificate({ item, label, index }: { item: AwardItem; label: string; index: number }) {
  const secondary = index % 3 === 0 ? "#8a5cff" : index % 3 === 1 ? "#fe4a23" : "#ffffff";

  return (
    <svg viewBox="0 0 420 300" role="img" aria-label={`${label}: ${item.project}`} focusable="false">
      <rect width="420" height="300" rx="8" fill="#101010" />
      <rect x="26" y="24" width="368" height="252" rx="8" fill="#080808" stroke="#ffffff1f" strokeWidth="2" />
      <circle cx="326" cy="84" r="54" fill={item.accent} opacity=".2" />
      <circle cx="94" cy="224" r="42" fill={secondary} opacity=".16" />
      <path d="M72 80H236M72 122H304M72 164H258" stroke="#fff" strokeLinecap="round" strokeOpacity=".36" strokeWidth="14" />
      <path d="M72 214H178" stroke={item.accent} strokeLinecap="round" strokeWidth="18" />
      <path d="M310 178 332 220l46 7-34 32 8 45-42-22-42 22 8-45-34-32 46-7Z" fill={item.accent} />
    </svg>
  );
}
