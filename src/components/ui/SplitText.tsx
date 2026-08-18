"use client";

import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { scrollTriggerDefault, splitTextReveal } from "@/lib/motion-tokens";

type SplitTextProps = {
  text: string;
  className?: string;
};

export function SplitText({ text, className }: SplitTextProps) {
  const reducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const signatureRef = useRef("");
  const words = useMemo(() => text.trim().split(/\s+/).filter(Boolean), [text]);
  const [lines, setLines] = useState<readonly (readonly string[])[]>(() => [words]);

  const measureLines = useCallback(() => {
    const grouped: string[][] = [];
    let currentTop: number | null = null;

    words.forEach((word, index) => {
      const element = measureRefs.current[index];
      if (!element) return;

      const top = Math.round(element.offsetTop);
      if (currentTop === null || Math.abs(top - currentTop) > 1) {
        grouped.push([word]);
        currentTop = top;
      } else {
        grouped[grouped.length - 1]?.push(word);
      }
    });

    const nextLines = grouped.length ? grouped : [words];
    const nextSignature = nextLines.map((line) => line.join("\u0001")).join("\u0002");

    if (nextSignature !== signatureRef.current) {
      signatureRef.current = nextSignature;
      setLines(nextLines);
    }
  }, [words]);

  useLayoutEffect(() => {
    measureRefs.current = measureRefs.current.slice(0, words.length);
    const frame = window.requestAnimationFrame(measureLines);

    return () => window.cancelAnimationFrame(frame);
  }, [measureLines, words.length]);

  useLayoutEffect(() => {
    let timeout: number | undefined;

    const onResize = () => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(measureLines, splitTextReveal.resizeDebounce);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, [measureLines]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll<HTMLElement>("[data-split-word-inner]");

    if (reducedMotion) {
      gsap.set(targets, { yPercent: 0 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        targets,
        { yPercent: splitTextReveal.yPercent },
        {
          yPercent: 0,
          duration: splitTextReveal.duration,
          ease: splitTextReveal.ease,
          stagger: splitTextReveal.stagger,
          scrollTrigger: {
            trigger: root,
            ...scrollTriggerDefault,
          },
        },
      );
    }, root);

    return () => context.revert();
  }, [lines, reducedMotion]);

  return (
    <span ref={rootRef} aria-label={text} className={className ? `split-text ${className}` : "split-text"}>
      <span aria-hidden="true" className="split-text__measure">
        {words.map((word, index) => (
          <span
            key={`measure-${word}-${index}`}
            ref={(element) => {
              measureRefs.current[index] = element;
            }}
          >
            {word}
            {index < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>

      <span aria-hidden="true" className="split-text__lines">
        {lines.map((line, lineIndex) => (
          <span key={`line-${lineIndex}-${line.join("-")}`} className="split-text__line">
            <span className="split-text__line-inner">
              {line.map((word, wordIndex) => (
                <span key={`${lineIndex}-${word}-${wordIndex}`} className="split-text__word">
                  <span data-split-word-inner className="split-text__word-inner">
                    {word}
                  </span>
                  {wordIndex < line.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
