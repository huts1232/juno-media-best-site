"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { beforeAfter } from "@/content/agency";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cumulativeSeconds, formatDuration } from "@/lib/format";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { beforeAfterMotion } from "@/lib/motion-tokens";

type Column = typeof beforeAfter.manual | typeof beforeAfter.agent;

const DESKTOP_QUERY = "(min-width: 768px)";

/**
 * Twee proceskolommen achter een sleepbare scheidingslijn, geen afbeeldingen.
 * Onder 768px vervalt het slepen: de CSS zet de clip met !important uit en
 * stapelt de kolommen, zodat er maar één DOM nodig is en er niets afhangt van
 * een media query in JavaScript.
 */
export function BeforeAfter() {
  const root = useRef<HTMLElement | null>(null);
  const stage = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(100);
  const dragging = useRef(false);
  const reducedMotion = useReducedMotion();

  const isDraggable = () => window.matchMedia(DESKTOP_QUERY).matches;

  const update = useCallback((clientX: number) => {
    const element = stage.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  useIsomorphicLayoutEffect(() => {
    const element = root.current;
    if (!element) return;

    if (reducedMotion) {
      setPos(50);
      return;
    }

    const ctx = gsap.context(() => {
      const proxy = { value: beforeAfterMotion.divider.from };
      const slide = gsap.to(proxy, {
        value: beforeAfterMotion.divider.to,
        duration: beforeAfterMotion.divider.duration,
        ease: beforeAfterMotion.divider.ease,
        paused: true,
        onUpdate: () => setPos(proxy.value),
      });

      const counters = gsap.utils.toArray<HTMLElement>("[data-total]").map((node) => {
        const seconds = Number(node.dataset.total ?? "0");
        const duration =
          node.dataset.column === "manual"
            ? beforeAfterMotion.count.manualDuration
            : beforeAfterMotion.count.agentDuration;
        const counter = { value: 0 };

        node.textContent = formatDuration(0);

        return gsap.to(counter, {
          value: seconds,
          duration,
          ease: beforeAfterMotion.count.ease,
          paused: true,
          onUpdate: () => {
            node.textContent = formatDuration(counter.value);
          },
          onComplete: () => {
            node.textContent = formatDuration(seconds);
          },
        });
      });

      ScrollTrigger.create({
        trigger: element,
        start: beforeAfterMotion.triggerStart,
        once: true,
        onEnter: () => {
          slide.play(0);
          counters.forEach((counter) => counter.play(0));
        },
      });
    }, element);

    return () => ctx.revert();
  }, [reducedMotion]);

  const panes = useMemo(
    () => ({
      agent: <ProcessColumn column={beforeAfter.agent} />,
      manual: <ProcessColumn column={beforeAfter.manual} />,
    }),
    [],
  );

  return (
    <section
      ref={root}
      className="before-after"
      data-cta-zone="before-after"
      aria-labelledby="before-after-title"
    >
      <div className="site-container before-after__intro">
        <p className="eyebrow">{beforeAfter.eyebrow}</p>
        <h2 id="before-after-title" className="before-after__heading">
          {beforeAfter.heading}
        </h2>
        <p className="lead">{beforeAfter.intro}</p>
      </div>

      <div className="site-container">
        <div
          ref={stage}
          className="before-after__stage"
          onPointerDown={(event) => {
            if (!isDraggable()) return;
            dragging.current = true;
            update(event.clientX);
          }}
          onPointerMove={(event) => {
            if (!dragging.current) return;
            update(event.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerLeave={() => {
            dragging.current = false;
          }}
        >
          <div className="before-after__pane">{panes.agent}</div>
          <div
            className="before-after__pane before-after__pane--manual"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            {panes.manual}
          </div>

          <div className="before-after__divider" style={{ left: `${pos}%` }}>
            <button
              type="button"
              className="before-after__handle"
              role="slider"
              aria-label={beforeAfter.dragLabel}
              aria-orientation="horizontal"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              aria-valuetext={`${Math.round(pos)}%`}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  setPos((value) => Math.max(0, value - beforeAfterMotion.keyboardStep));
                }
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  setPos((value) => Math.min(100, value + beforeAfterMotion.keyboardStep));
                }
              }}
            >
              <span className="sr-only">{beforeAfter.dragHint}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M10 8 6 12l4 4M14 8l4 4-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessColumn({ column }: { column: Column }) {
  const totals = cumulativeSeconds(column.steps);

  return (
    <div className={`process-column process-column--${column.id}`}>
      <header className="process-column__header">
        <p className="process-column__label">{column.label}</p>
        <p className="process-column__total">
          <span data-total={column.totalSeconds} data-column={column.id} className="tabular-nums">
            {column.total}
          </span>
        </p>
        <p className="process-column__note">{column.note}</p>
      </header>
      <ol className="process-column__steps">
        {column.steps.map((step, index) => (
          <li key={step.name} className="process-column__step">
            <span className="process-column__step-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="process-column__step-name">{step.name}</span>
            <span className="process-column__step-time tabular-nums">
              {formatDuration(totals[index] ?? 0)}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
