"use client";

import Link from "next/link";
import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";

type StageItem = {
  title: string;
  body: string;
  result: string;
  link: {
    label: string;
    href: string;
  };
};

type StagesProps = {
  content: {
    heading: string;
    items: readonly StageItem[];
  };
};

export function Stages({ content }: StagesProps) {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    const maxScroll = list.scrollWidth - list.clientWidth;
    setProgress(maxScroll > 0 ? list.scrollLeft / maxScroll : 0);
  }, []);

  useEffect(() => {
    updateProgress();

    const list = listRef.current;
    if (!list) return;

    let frame = 0;
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProgress);
    };

    const onResize = () => updateProgress();

    list.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(frame);
      list.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateProgress]);

  return (
    <section className="stages-section" aria-labelledby="home-stages-title">
      <div className="site-container" style={{ "--stages-progress": progress } as CSSProperties}>
        <div className="stages-header">
          <h2 id="home-stages-title" className="sr-only">
            {content.heading}
          </h2>
          <p className="eyebrow">{content.heading}</p>
        </div>
        <div ref={listRef} className="stages-list">
          {content.items.map((item, index) => (
            <article key={item.title} className="stage-card">
              <div className="stage-card__media" aria-hidden="true">
                <StageVisual index={index} />
              </div>
              <div className="stage-card__content">
                <h3 className="stage-card__title">{item.title}</h3>
                <p className="stage-card__body">{item.body}</p>
                <p className="stage-card__result">{item.result}</p>
                <Link href={item.link.href} className="stage-card__link">
                  <span>{item.link.label}</span>
                  <svg aria-hidden="true" viewBox="0 0 16 16" focusable="false">
                    <path
                      d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="stages-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}

function StageVisual({ index }: { index: number }) {
  const variants = [
    {
      circle: "var(--brand-light)",
      accent: "#1f7fb8",
      path: "M58 166C90 82 140 61 190 104s91 44 130-26",
    },
    {
      circle: "#1f7fb8",
      accent: "var(--brand-light)",
      path: "M54 104h254M54 158h172M54 212h224",
    },
    {
      circle: "#fff",
      accent: "var(--brand-light)",
      path: "M76 210 156 110l62 70 70-102",
    },
  ];
  const visual = variants[index % variants.length];

  return (
    <svg viewBox="0 0 380 280" aria-hidden="true" focusable="false">
      <rect width="380" height="280" rx="8" fill="#101010" />
      <circle cx="276" cy="86" r="84" fill={visual.circle} opacity=".22" />
      <circle cx="136" cy="198" r="66" fill={visual.accent} opacity=".22" />
      <path
        d={visual.path}
        fill="none"
        stroke={visual.accent}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="14"
      />
      <path d="M52 238h276" stroke="#fff" strokeLinecap="round" strokeOpacity=".35" strokeWidth="2" />
    </svg>
  );
}
