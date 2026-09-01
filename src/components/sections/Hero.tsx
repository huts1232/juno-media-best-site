"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { heroLoad, heroMouse, heroZoom } from "@/lib/motion-tokens";
import { ArcMotif } from "@/components/hero/floaters";
import { heroFloaters } from "@/components/hero/heroFloaters";

type HeroContent = {
  eyebrow: string;
  titleLines: readonly string[];
  /** Index in titleLines dat in het lichte merkblauw wordt gezet. */
  accentLineIndex: number;
  sub: string;
  video: {
    ariaLabel: string;
    poster: string;
    src: string;
  };
  scrollLabel: string;
};

type HeroProps = {
  content: HeroContent;
};

const heroPosterSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"><rect width="16" height="9" fill="#f5f6f8"/><path d="M0 7 16 2v7H0z" fill="#e9ecf1"/><circle cx="10" cy="4" r="4" fill="#43b1d6" opacity=".28"/><circle cx="6" cy="5" r="3" fill="#015c92" opacity=".18"/></svg>';
const heroPosterDataUri = `data:image/svg+xml,${encodeURIComponent(heroPosterSvg)}`;

/** Ruimte tussen het titelblok en de eerste kaart eronder. */
const HERO_CARD_TOP_GAP = 24;
/** Ruimte tussen de twee kaarten in dezelfde kolom. */
const HERO_CARD_STACK_GAP = 16;

/** De bovenste kaart per kolom; de tweede kaart hangt onder deze. */
const HERO_COLUMNS = [
  { name: "left", selector: ".hero-floater--workforce" },
  { name: "right", selector: ".hero-floater--autonomy" },
] as const;

/**
 * Hero met Apple-zoom: de wrapper is 220vh hoog, de inhoud plakt eraan vast en
 * het videoframe groeit tijdens het scrollen van 48vw naar het volledige
 * scherm. Er is één scrub-timeline (heroZoom), geen pin en geen tussenliggende
 * scroll-sectie, dus de zoom begint meteen bij de eerste scroll.
 *
 * Drie animatielagen per floater, elk met precies één eigenaar: .hero-floater
 * doet de muisparallax, .hero-floater__inner de entree en het element met
 * data-hero-floater de scroll-fade. Zo vechten de tijdlijnen niet om dezelfde
 * property.
 */
export function Hero({ content }: HeroProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const headingWrapRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const videoFrameRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const titleWords = useMemo(
    () => content.titleLines.map((line) => line.trim().split(/\s+/).filter(Boolean)),
    [content.titleLines],
  );
  const titleLabel = content.titleLines.join(" ");

  /**
   * De kaarten hangen onder het titelblok in plaats van ernaast: links en
   * rechts elk een stapel van twee. Waar het titelblok eindigt is niet in CSS
   * uit te drukken — dat hangt van de regelafbreking van de kop af — dus meet
   * een ResizeObserver het en zet het als CSS-vars op de sticky laag:
   *
   *   --hero-heading-bottom  onderkant van kop + subregel
   *   --hero-col-left/right  bovenkant van de tweede kaart in die kolom
   *
   * Bewust offsetTop/offsetHeight en niet getBoundingClientRect: GSAP zet
   * transforms op de kop, de subregel en de kaarten, en die mogen niet in de
   * meting terechtkomen.
   */
  useEffect(() => {
    const wrap = headingWrapRef.current;
    const sticky = stickyRef.current;
    if (!wrap || !sticky) return;

    const topCards = HERO_COLUMNS.map(({ name, selector }) => ({
      name,
      el: sticky.querySelector<HTMLElement>(selector),
    }));

    const offsetWithinSticky = (el: HTMLElement) => {
      let top = 0;
      let node: HTMLElement | null = el;

      while (node && node !== sticky) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }

      return top;
    };

    const measure = () => {
      const headingBottom = Math.round(offsetWithinSticky(wrap) + wrap.offsetHeight);
      sticky.style.setProperty("--hero-heading-bottom", `${headingBottom}px`);

      for (const { name, el } of topCards) {
        // Onder 1280px staat de bovenste kaart op display: none (hoogte 0) en
        // valt de kolom in CSS terug op zijn eigen bottom-verankering.
        const height = el?.offsetHeight ?? 0;
        sticky.style.setProperty(
          `--hero-col-${name}`,
          `${headingBottom + HERO_CARD_TOP_GAP + height + HERO_CARD_STACK_GAP}px`,
        );
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    topCards.forEach(({ el }) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = videoFrameRef.current;
    if (!target) return;

    if (!content.video.src) {
      setShouldLoadVideo(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShouldLoadVideo(true);
        observer.disconnect();
      },
      { rootMargin: "200px" },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [content.video.src]);

  useEffect(() => {
    if (!shouldLoadVideo || !content.video.src) return;

    const video = videoRef.current;
    if (!video) return;

    video.load();
    // Ontbreekt het bestand nog, dan blijft de poster staan; de afwijzing hoeft
    // niet als unhandled rejection in de console te landen.
    void video.play().catch(() => {});
  }, [content.video.src, shouldLoadVideo]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;
    let fontWait = 0;
    let play: (() => void) | undefined;

    // De starttoestand wordt meteen gezet, ook als de intro-overlay er nog over
    // ligt: anders staat de hero tijdens het openen van de overlay al in zijn
    // eindstand en springt hij daarna terug.
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>("[data-hero-word]");
      // De accentregel krijgt een eigen tween die 0.08s later start; de rest van
      // de kop loopt in één stagger. Twee groepen, dus twee tweens.
      const accentWords = words.filter((word) => word.dataset.heroWordAccent === "true");
      const baseWords = words.filter((word) => word.dataset.heroWordAccent !== "true");
      const layers = gsap.utils.toArray<HTMLElement>(".hero-floater__inner");
      const eyebrow = eyebrowRef.current;
      const sub = subRef.current;
      const videoFrame = videoFrameRef.current;
      const scrollHint = root.querySelector("[data-hero-scroll-inner]");

      if (reducedMotion) {
        gsap.set([eyebrow, sub, videoFrame, scrollHint, ...layers], {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        gsap.set(words, { yPercent: 0 });
        return;
      }

      gsap.set(eyebrow, {
        y: heroLoad.eyebrow.y,
        opacity: heroLoad.eyebrow.opacity,
      });
      gsap.set(words, { yPercent: heroLoad.word.yPercent });
      gsap.set(sub, { y: heroLoad.sub.y, opacity: heroLoad.sub.opacity });
      gsap.set(videoFrame, {
        scale: heroLoad.video.scale,
      });
      gsap.set(layers, {
        opacity: heroLoad.layer.opacity,
        y: heroLoad.layer.y,
        scale: heroLoad.layer.scale,
      });
      gsap.set(scrollHint, { opacity: heroLoad.scrollIndicator.opacity });

      const timeline = gsap
        .timeline({ paused: true })
        .to(eyebrow, {
          y: 0,
          opacity: 1,
          duration: heroLoad.eyebrow.duration,
          ease: heroLoad.eyebrow.ease,
        })
        .addLabel("words", "-=0.28")
        .to(
          baseWords,
          {
            yPercent: 0,
            duration: heroLoad.word.duration,
            ease: heroLoad.word.ease,
            stagger: heroLoad.word.stagger,
          },
          "words",
        )
        .to(
          accentWords,
          {
            yPercent: 0,
            duration: heroLoad.word.duration,
            ease: heroLoad.word.ease,
            stagger: heroLoad.word.stagger,
          },
          `words+=${heroLoad.word.accentDelay}`,
        )
        .to(
          sub,
          {
            y: 0,
            opacity: 1,
            duration: heroLoad.sub.duration,
            ease: heroLoad.sub.ease,
          },
          "words+=0.24",
        )
        .to(
          videoFrame,
          {
            scale: 1,
            duration: heroLoad.video.duration,
            ease: heroLoad.video.ease,
          },
          "-=0.78",
        )
        .to(
          layers,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: heroLoad.layer.duration,
            ease: heroLoad.layer.ease,
            stagger: heroLoad.layer.stagger,
          },
          "-=0.35",
        )
        .to(
          scrollHint,
          {
            opacity: 1,
            duration: heroLoad.scrollIndicator.duration,
            ease: heroLoad.scrollIndicator.ease,
          },
          "-=0.2",
        );

      play = () => {
        if (!cancelled) timeline.play();
      };
    }, root);

    const startAfterFonts = () => {
      if (cancelled) return;

      if (document.fonts?.ready) {
        fontWait = window.setTimeout(() => play?.(), 250);
        void document.fonts.ready.then(() => {
          window.clearTimeout(fontWait);
          play?.();
        });
      } else {
        requestAnimationFrame(() => play?.());
      }
    };

    // Bewust niet wachten op de intro-overlay: het LCP-element is een woord uit
    // deze kop. De reveal is transform-only en de maskering zit op de wrapper,
    // dus het woord is meteen geschilderd en de meting wacht nergens op.
    startAfterFonts();

    return () => {
      cancelled = true;
      window.clearTimeout(fontWait);
      ctx.revert();
    };
  }, [reducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Reduced motion: geen ScrollTrigger. Het frame staat meteen op de
    // eindstaat en CSS zet de wrapper terug op height: auto.
    if (reducedMotion) {
      gsap.set(videoFrameRef.current, {
        clipPath: heroZoom.video.toClip,
        webkitClipPath: heroZoom.video.toClip,
      });
      return;
    }

    let matchMedia: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      matchMedia = gsap.matchMedia();

      // Alleen vanaf 768px zoomt de hero. Daaronder staat de video statisch
      // full-width en is de wrapper via CSS weer height: auto.
      matchMedia.add(heroZoom.desktopQuery, () => {
        const floaters = gsap.utils.toArray<HTMLElement>("[data-hero-floater]");

        gsap
          .timeline({
            defaults: { ease: heroZoom.ease },
            scrollTrigger: {
              trigger: root,
              start: heroZoom.trigger.start,
              end: heroZoom.trigger.end,
              scrub: heroZoom.trigger.scrub,
              pin: heroZoom.trigger.pin,
              invalidateOnRefresh: heroZoom.trigger.invalidateOnRefresh,
            },
          })
          .fromTo(
            videoFrameRef.current,
            {
              width: heroZoom.video.fromWidth,
              height: heroZoom.video.fromHeight,
              clipPath: heroZoom.video.fromClip,
              webkitClipPath: heroZoom.video.fromClip,
            },
            {
              width: heroZoom.video.toWidth,
              height: heroZoom.video.toHeight,
              clipPath: heroZoom.video.toClip,
              webkitClipPath: heroZoom.video.toClip,
              duration: heroZoom.video.duration,
            },
            0,
          )
          .to(
            headingRef.current,
            {
              autoAlpha: 0,
              y: heroZoom.heading.y,
              duration: heroZoom.heading.duration,
            },
            0,
          )
          .to(
            floaters,
            {
              autoAlpha: 0,
              scale: heroZoom.floaters.scale,
              duration: heroZoom.floaters.duration,
              stagger: heroZoom.floaters.stagger,
            },
            0,
          )
          .to(
            scrollIndicatorRef.current,
            {
              autoAlpha: 0,
              duration: heroZoom.scrollIndicator.duration,
            },
            0,
          );
      });
    }, root);

    return () => {
      matchMedia?.revert();
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [reducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion) return;

    const layers = gsap.utils.toArray<HTMLElement>("[data-hero-layer]", root);
    const quickSetters = layers.map((layer) => {
      const speed = Number(layer.dataset.speed || 0);
      return {
        speed,
        xTo: gsap.quickTo(layer, "x", {
          duration: heroMouse.duration,
          ease: heroMouse.ease,
        }),
        yTo: gsap.quickTo(layer, "y", {
          duration: heroMouse.duration,
          ease: heroMouse.ease,
        }),
      };
    });

    const reset = () => {
      quickSetters.forEach(({ xTo, yTo }) => {
        xTo(0);
        yTo(0);
      });
    };

    const onMove = (event: PointerEvent) => {
      if (window.innerWidth < heroMouse.minWidth) {
        reset();
        return;
      }

      const rect = root.getBoundingClientRect();
      const progressX = (event.clientX - rect.left) / rect.width - 0.5;
      const progressY = (event.clientY - rect.top) / rect.height - 0.5;

      quickSetters.forEach(({ speed, xTo, yTo }) => {
        xTo(progressX * heroMouse.maxOffset * speed);
        yTo(progressY * heroMouse.maxOffset * speed);
      });
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", reset);

    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", reset);
      reset();
    };
  }, [reducedMotion]);

  return (
    <div ref={rootRef} className="hero-height-new" data-surface="light">
      <div ref={stickyRef} className="hero-sticky">
        <section className="section hero home" data-cta-zone="hero">
          <div className="container is-big full">
            <div ref={headingRef} className="hero-heading">
              <div ref={eyebrowRef} className="hero-tag-wrap">
                <div className="hero-tag">
                  <span className="tag-text">{content.eyebrow}</span>
                </div>
                <div className="stats-card-gradient services hero-home" aria-hidden="true" />
              </div>
              <div ref={headingWrapRef} className="hero-home-heading-wrap">
                <h1 className="heading-hero hero-title" aria-label={titleLabel}>
                  {titleWords.map((line, lineIndex) => {
                    const accent = lineIndex === content.accentLineIndex;
                    return (
                      <span
                        key={`${line.join("-")}-${lineIndex}`}
                        className={
                          accent ? "hero-heading-line hero-title__accent" : "hero-heading-line"
                        }
                        aria-hidden="true"
                      >
                        {line.map((word, wordIndex) => (
                          <span key={`${word}-${wordIndex}`} className="hero-heading-word">
                            <span
                              data-hero-word
                              data-hero-word-accent={accent ? "true" : undefined}
                              className="hero-heading-word-inner"
                            >
                              {word}
                            </span>
                          </span>
                        ))}
                      </span>
                    );
                  })}
                </h1>
                <p ref={subRef} className="hero-sub">
                  {content.sub}
                </p>
              </div>
            </div>

            <div className="show-wrap">
              <div className="showreal-home">
                <div ref={videoFrameRef} className="show-real-video">
                  <Image
                    className="hero-video-poster"
                    src={heroPosterDataUri}
                    alt={content.video.src ? "" : content.video.ariaLabel}
                    width={1280}
                    height={720}
                    priority
                    unoptimized
                    fetchPriority="high"
                    sizes="(max-width: 767px) 100vw, 48vw"
                    aria-hidden={content.video.src ? "true" : undefined}
                    draggable={false}
                  />
                  {content.video.src ? (
                    <div className="w-background-video w-background-video-atom hero-video-atom">
                      <video
                        ref={videoRef}
                        aria-label={content.video.ariaLabel}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster={content.video.poster}
                        width={1280}
                        height={720}
                      >
                        {shouldLoadVideo ? <source src={content.video.src} type="video/mp4" /> : null}
                      </video>
                    </div>
                  ) : null}
                </div>
                <div className="stats-card-gradient hero-gradient" aria-hidden="true" />
              </div>
            </div>

            <div className="hero-floaters" aria-hidden="true">
              <div className="hero-floater hero-floater--arc" data-hero-layer data-speed="0.18">
                <div className="hero-floater__inner">
                  <div className="hero-floater__fade" data-hero-floater>
                    <ArcMotif />
                  </div>
                </div>
              </div>

              {heroFloaters.map(({ key, Component, speed }) => (
                <div
                  key={key}
                  className={`hero-floater hero-floater--card hero-floater--${key}`}
                  data-hero-layer
                  data-speed={speed}
                >
                  <div className="hero-floater__inner">
                    <div className="hero-floater__fade" data-hero-floater>
                      <Component />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div ref={scrollIndicatorRef} className="hero-scroll-indicator">
              <div className="hero-scroll-indicator__inner" data-hero-scroll-inner>
                <span>{content.scrollLabel}</span>
                <span className="hero-scroll-indicator__line" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
