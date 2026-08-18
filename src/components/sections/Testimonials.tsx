"use client";

import { type PointerEvent as ReactPointerEvent, type KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { testimonialMotion } from "@/lib/motion-tokens";

type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  score: number;
  scoreLabel: string;
};

type TestimonialsProps = {
  content: {
    eyebrow: string;
    headingLines: readonly string[];
    platform: {
      reviewCount: string;
      name: string;
      score: string;
      scoreLabel: string;
    };
    sliderLabel: string;
    previousLabel: string;
    nextLabel: string;
    dragLabel: string;
    items: readonly TestimonialItem[];
  };
};

type DragState = {
  active: boolean;
  startX: number;
  startScrollLeft: number;
  lastX: number;
  lastTime: number;
  velocity: number;
  moved: boolean;
};

const initialDragState: DragState = {
  active: false,
  startX: 0,
  startScrollLeft: 0,
  lastX: 0,
  lastTime: 0,
  velocity: 0,
  moved: false,
};

export function Testimonials({ content }: TestimonialsProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const dragState = useRef<DragState>({ ...initialDragState });
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(content.items.length > 1);

  const getSnapPositions = useCallback(() => cardRefs.current.filter(Boolean).map((card) => card?.offsetLeft ?? 0), []);

  const getNearestIndex = useCallback(
    (left: number) => {
      const positions = getSnapPositions();
      if (!positions.length) return 0;

      return positions.reduce((nearest, position, index) => {
        const nearestDistance = Math.abs(positions[nearest] - left);
        const distance = Math.abs(position - left);
        return distance < nearestDistance ? index : nearest;
      }, 0);
    },
    [getSnapPositions],
  );

  const updateScrollState = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const nextIndex = getNearestIndex(slider.scrollLeft);
    setActiveIndex(nextIndex);
    setCanScrollPrev(slider.scrollLeft > 2);
    setCanScrollNext(slider.scrollLeft < maxScroll - 2);
  }, [getNearestIndex]);

  const scrollToLeft = useCallback(
    (left: number) => {
      const slider = sliderRef.current;
      if (!slider) return;

      const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
      const nextLeft = Math.max(0, Math.min(left, maxScroll));

      gsap.killTweensOf(slider);

      if (reducedMotion) {
        slider.scrollLeft = nextLeft;
        updateScrollState();
        return;
      }

      gsap.to(slider, {
        scrollLeft: nextLeft,
        duration: testimonialMotion.snapDuration,
        ease: testimonialMotion.snapEase,
        onUpdate: updateScrollState,
        onComplete: updateScrollState,
      });
    },
    [reducedMotion, updateScrollState],
  );

  const scrollToIndex = useCallback(
    (index: number) => {
      const positions = getSnapPositions();
      if (!positions.length) return;

      const nextIndex = Math.max(0, Math.min(index, positions.length - 1));
      scrollToLeft(positions[nextIndex]);
    },
    [getSnapPositions, scrollToLeft],
  );

  const snapToNearest = useCallback(
    (left: number) => {
      scrollToIndex(getNearestIndex(left));
    },
    [getNearestIndex, scrollToIndex],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const revealItems = gsap.utils.toArray<HTMLElement>("[data-testimonial-reveal]", root);

    if (reducedMotion) {
      gsap.set(revealItems, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        revealItems,
        { opacity: 0, y: testimonialMotion.revealY },
        {
          opacity: 1,
          y: 0,
          duration: testimonialMotion.revealDuration,
          ease: testimonialMotion.revealEase,
          stagger: testimonialMotion.revealStagger,
          scrollTrigger: {
            trigger: root,
            start: testimonialMotion.triggerStart,
            once: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let frame = 0;
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateScrollState);
    };

    const onResize = () => updateScrollState();

    updateScrollState();
    slider.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(frame);
      slider.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateScrollState]);

  const moveDragCursor = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const cursor = cursorRef.current;
    if (!cursor || event.pointerType !== "mouse") return;

    cursor.dataset.visible = "true";
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
  }, []);

  const hideDragCursor = useCallback(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    cursor.dataset.visible = "false";
    cursor.dataset.dragging = "false";
  }, []);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const slider = sliderRef.current;
      if (!slider || event.button !== 0) return;

      gsap.killTweensOf(slider);
      dragState.current = {
        active: true,
        startX: event.clientX,
        startScrollLeft: slider.scrollLeft,
        lastX: event.clientX,
        lastTime: performance.now(),
        velocity: 0,
        moved: false,
      };

      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.dataset.dragging = "true";

      const cursor = cursorRef.current;
      if (cursor) {
        cursor.dataset.dragging = "true";
      }
    },
    [],
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      moveDragCursor(event);

      const slider = sliderRef.current;
      const state = dragState.current;
      if (!slider || !state.active) return;

      const now = performance.now();
      const deltaX = event.clientX - state.startX;
      const deltaTime = Math.max(1, now - state.lastTime);

      state.velocity = (event.clientX - state.lastX) / deltaTime;
      state.lastX = event.clientX;
      state.lastTime = now;
      state.moved = state.moved || Math.abs(deltaX) > testimonialMotion.dragThreshold;

      slider.scrollLeft = state.startScrollLeft - deltaX;
      event.preventDefault();
    },
    [moveDragCursor],
  );

  const endDrag = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const slider = sliderRef.current;
      const state = dragState.current;
      if (!slider || !state.active) return;

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      event.currentTarget.dataset.dragging = "false";

      const cursor = cursorRef.current;
      if (cursor) {
        cursor.dataset.dragging = "false";
      }

      const inertialLeft = slider.scrollLeft - state.velocity * testimonialMotion.dragInertia;
      dragState.current = { ...initialDragState };
      snapToNearest(inertialLeft);
    },
    [snapToNearest],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollToIndex(activeIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollToIndex(activeIndex + 1);
      }
    },
    [activeIndex, scrollToIndex],
  );

  return (
    <section ref={rootRef} className="testimonials-section" aria-labelledby="home-testimonials-title">
      <div className="site-container">
        <div className="testimonials-header">
          <p className="eyebrow" data-testimonial-reveal>
            {content.eyebrow}
          </p>
          <h2 id="home-testimonials-title" className="testimonials-heading" data-testimonial-reveal>
            {content.headingLines.map((line, index) => (
              <span key={`${line}-${index}`} className="testimonials-heading__line">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="testimonials-platform" data-testimonial-reveal>
          <div className="testimonials-platform__logo" aria-hidden="true">
            <PlatformLogo />
          </div>
          <div>
            <p className="testimonials-platform__count">{content.platform.reviewCount}</p>
            <p className="testimonials-platform__name">{content.platform.name}</p>
          </div>
          <div className="testimonials-platform__score" aria-label={content.platform.scoreLabel}>
            {content.platform.score}
          </div>
        </div>

        <div className="testimonials-slider-shell" data-testimonial-reveal>
          <div
            ref={sliderRef}
            className="testimonials-slider"
            role="region"
            aria-label={content.sliderLabel}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerEnter={moveDragCursor}
            onPointerLeave={hideDragCursor}
          >
            <div className="testimonials-slider-track" role="list">
              {content.items.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  className="testimonial-card"
                  role="listitem"
                >
                  <div className="testimonial-card__top">
                    <blockquote className="testimonial-card__quote">{item.quote}</blockquote>
                    <div className="testimonial-card__person">
                      <p className="testimonial-card__name">{item.name}</p>
                      <p className="testimonial-card__role">{item.role}</p>
                    </div>
                  </div>
                  <div className="testimonial-card__rating">
                    <span className="testimonial-card__score">{item.score.toFixed(1)}</span>
                    <Stars score={item.score} label={item.scoreLabel} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div ref={cursorRef} className="testimonials-drag-cursor" aria-hidden="true">
            {content.dragLabel}
          </div>

          <div className="testimonials-controls">
            <button
              type="button"
              className="testimonials-arrow"
              aria-label={content.previousLabel}
              disabled={!canScrollPrev}
              onClick={() => scrollToIndex(activeIndex - 1)}
            >
              <ArrowIcon direction="prev" />
            </button>
            <button
              type="button"
              className="testimonials-arrow"
              aria-label={content.nextLabel}
              disabled={!canScrollNext}
              onClick={() => scrollToIndex(activeIndex + 1)}
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformLogo() {
  return (
    <svg viewBox="0 0 132 38" focusable="false">
      <path d="M20 4 25 15h12L27 23l4 11-11-7-11 7 4-11L3 15h12Z" fill="#fe4a23" />
      <path d="M48 11h64M48 27h82" stroke="currentColor" strokeLinecap="round" strokeWidth="7" />
    </svg>
  );
}

function Stars({ score, label }: { score: number; label: string }) {
  return (
    <span className="testimonial-card__stars" aria-label={label}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-filled={index < score}>
          <path d="m10 1.8 2.48 5.02 5.54.8-4.01 3.91.95 5.52L10 14.44l-4.96 2.61.95-5.52-4.01-3.91 5.54-.8Z" />
        </svg>
      ))}
    </span>
  );
}

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" data-direction={direction}>
      <path
        d={direction === "next" ? "M4 10h11M10.5 4.5 16 10l-5.5 5.5" : "M16 10H5M9.5 4.5 4 10l5.5 5.5"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
