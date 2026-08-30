"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { splitTextReveal, statementMotion } from "@/lib/motion-tokens";

type StatementProps = {
  content: {
    text: string;
  };
};

type Line = string[];

export function Statement({ content }: StatementProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const floatingRef = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState<Line[]>(() => [splitWords(content.text)]);
  const reducedMotion = useReducedMotion();
  const words = useMemo(() => splitWords(content.text), [content.text]);

  const recalculateLines = useCallback(() => {
    const measure = measureRef.current;
    if (!measure) {
      setLines([words]);
      return;
    }

    const measuredWords = Array.from(measure.querySelectorAll<HTMLElement>("[data-statement-measure-word]"));
    if (!measuredWords.length) {
      setLines([words]);
      return;
    }

    const grouped = measuredWords.reduce<Line[]>((result, wordNode, index) => {
      const previous = measuredWords[index - 1];
      const currentWord = words[index];

      if (!currentWord) return result;

      if (!previous || Math.abs(wordNode.offsetTop - previous.offsetTop) > 2) {
        result.push([currentWord]);
      } else {
        result[result.length - 1]?.push(currentWord);
      }

      return result;
    }, []);

    setLines(grouped.length ? grouped : [words]);
  }, [words]);

  useEffect(() => {
    recalculateLines();

    let timeoutId: number | undefined;
    const onResize = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(recalculateLines, splitTextReveal.resizeDebounce);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("resize", onResize);
    };
  }, [recalculateLines]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const lineInners = gsap.utils.toArray<HTMLElement>("[data-statement-line-inner]");
      const floating = floatingRef.current;

      if (reducedMotion) {
        gsap.set(lineInners, {
          yPercent: 0,
          clipPath: "inset(0% 0% 0% 0%)",
        });
        gsap.set(floating, { yPercent: 0 });
        return;
      }

      if (section.getBoundingClientRect().top <= window.innerHeight * 0.75) {
        gsap.set(lineInners, {
          yPercent: 0,
          clipPath: "inset(0% 0% 0% 0%)",
        });
      } else {
        gsap.set(lineInners, {
          yPercent: statementMotion.line.yPercent,
          clipPath: statementMotion.line.clipPath,
        });

        const revealTimeline = gsap.timeline({ paused: true }).to(lineInners, {
          yPercent: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: statementMotion.line.duration,
          ease: statementMotion.line.ease,
          stagger: statementMotion.line.stagger,
        });

        ScrollTrigger.create({
          trigger: section,
          start: statementMotion.triggerStart,
          once: true,
          onEnter: () => revealTimeline.play(0),
        });
      }

      gsap.to(floating, {
        yPercent: statementMotion.floating.yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: statementMotion.floating.start,
          end: statementMotion.floating.end,
          scrub: statementMotion.floating.scrub,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [lines, reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="statement-section"
      data-surface="light"
      aria-labelledby="home-statement-title"
    >
      <div className="site-container statement-container">
        <h2 ref={headingRef} id="home-statement-title" className="statement-heading" aria-label={content.text}>
          <span ref={measureRef} className="statement-heading__measure" aria-hidden="true">
            {words.map((word, index) => (
              <span key={`${word}-${index}`} data-statement-measure-word className="statement-heading__measure-word">
                {word}
                {index < words.length - 1 ? " " : ""}
              </span>
            ))}
          </span>
          <span className="statement-heading__lines" aria-hidden="true">
            {lines.map((line, lineIndex) => (
              <span key={`${line.join("-")}-${lineIndex}`} className="statement-heading__line">
                <span data-statement-line-inner className="statement-heading__line-inner">
                  {line.join(" ")}
                </span>
              </span>
            ))}
          </span>
        </h2>
        <div ref={floatingRef} className="statement-floating" aria-hidden="true">
          <svg viewBox="0 0 220 220" focusable="false">
            <path d="M111 16 133 82l70 28-70 28-22 66-22-66-70-28 70-28Z" fill="var(--brand-light)" />
            <path d="M76 111h70" stroke="#fff" strokeLinecap="round" strokeWidth="12" />
            <circle cx="151" cy="65" r="18" fill="#1f7fb8" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function splitWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean);
}
