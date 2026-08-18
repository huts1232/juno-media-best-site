"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { heroLayerSpeeds, heroLoad, heroMouse, heroScroll, parallax } from "@/lib/motion-tokens";

type HeroContent = {
  eyebrow: string;
  titleLines: readonly string[];
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

const heroLayers = [
  { className: "set-1 hide-mob", variant: "orbit" },
  { className: "set-2", variant: "window" },
  { className: "set-3", variant: "wave" },
  { className: "set-4 hide-mob", variant: "stack" },
  { className: "set-5", variant: "spark" },
  { className: "set-6 hide-mob", variant: "ring" },
  { className: "set-7 hide-mob", variant: "badge" },
] as const;

export function Hero({ content }: HeroProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const showWrapRef = useRef<HTMLDivElement | null>(null);
  const videoFrameRef = useRef<HTMLDivElement | null>(null);
  const laptopBgRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const titleWords = useMemo(
    () => content.titleLines.map((line) => line.trim().split(/\s+/).filter(Boolean)),
    [content.titleLines],
  );
  const titleLabel = content.titleLines.join(" ");

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
    void video.play();
  }, [content.video.src, shouldLoadVideo]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let ctx: gsap.Context | undefined;
    let cancelled = false;

    const startTimeline = () => {
      if (cancelled || !rootRef.current) return;

      ctx = gsap.context(() => {
        const words = gsap.utils.toArray<HTMLElement>("[data-hero-word]");
        const layers = gsap.utils.toArray<HTMLElement>("[data-hero-layer]");
        const eyebrow = eyebrowRef.current;
        const videoFrame = videoFrameRef.current;
        const scrollIndicator = scrollIndicatorRef.current;

        if (reducedMotion) {
          gsap.set([eyebrow, videoFrame, scrollIndicator, ...layers], {
            opacity: 1,
            y: 0,
            scale: 1,
          });
          gsap.set(words, {
            yPercent: 0,
            clipPath: "inset(0% 0% 0% 0%)",
          });
          return;
        }

        gsap.set(eyebrow, {
          y: heroLoad.eyebrow.y,
          opacity: heroLoad.eyebrow.opacity,
        });
        gsap.set(words, {
          yPercent: heroLoad.word.yPercent,
          clipPath: heroLoad.word.clipPath,
        });
        gsap.set(videoFrame, {
          opacity: heroLoad.video.opacity,
          scale: heroLoad.video.scale,
        });
        gsap.set(layers, { opacity: heroLoad.layer.opacity });
        gsap.set(scrollIndicator, { opacity: heroLoad.scrollIndicator.opacity });

        gsap
          .timeline()
          .to(eyebrow, {
            y: 0,
            opacity: 1,
            duration: heroLoad.eyebrow.duration,
            ease: heroLoad.eyebrow.ease,
          })
          .to(
            words,
            {
              yPercent: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: heroLoad.word.duration,
              ease: heroLoad.word.ease,
              stagger: heroLoad.word.stagger,
            },
            "-=0.1",
          )
          .to(
            videoFrame,
            {
              opacity: 1,
              scale: 1,
              duration: heroLoad.video.duration,
              ease: heroLoad.video.ease,
            },
            "-=0.55",
          )
          .to(
            layers,
            {
              opacity: 1,
              duration: heroLoad.layer.duration,
              ease: heroLoad.layer.ease,
              stagger: heroLoad.layer.stagger,
            },
            "-=0.7",
          )
          .to(
            scrollIndicator,
            {
              opacity: 1,
              duration: heroLoad.scrollIndicator.duration,
              ease: heroLoad.scrollIndicator.ease,
            },
            "-=0.35",
          );
      }, root);
    };

    if (document.fonts?.ready) {
      void document.fonts.ready.then(startTimeline);
    } else {
      requestAnimationFrame(startTimeline);
    }

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [reducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    const section = sectionRef.current;
    if (!root || !section || reducedMotion) return;

    let matchMedia: gsap.MatchMedia | undefined;
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>("[data-hero-layer]");

      layers.forEach((layer) => {
        const speed = Number(layer.dataset.speed || 0);
        gsap.to(layer, {
          yPercent: heroScroll.layerMultiplier * speed,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: parallax.start,
            end: parallax.end,
            scrub: parallax.scrub,
          },
        });
      });

      matchMedia = gsap.matchMedia();
      matchMedia.add("(min-width: 768px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: heroScroll.start,
              end: heroScroll.end,
              scrub: heroScroll.scrub,
            },
          })
          .to(
            videoFrameRef.current,
            {
              width: heroScroll.desktopVideoFrom,
              height: heroScroll.desktopVideoFrom,
              ease: "none",
            },
            heroScroll.desktop.videoScaleStart,
          )
          .to(
            laptopBgRef.current,
            {
              opacity: heroScroll.desktopLaptopOpacityFrom,
              ease: "none",
            },
            heroScroll.desktop.videoScaleStart,
          )
          .to(
            videoFrameRef.current,
            {
              width: heroScroll.desktopVideoTo,
              height: heroScroll.desktopVideoTo,
              ease: "none",
            },
            heroScroll.desktop.videoScaleEnd,
          )
          .to(
            laptopBgRef.current,
            {
              opacity: heroScroll.desktopLaptopOpacityTo,
              ease: "none",
            },
            heroScroll.desktop.videoScaleEnd,
          )
          .to(
            headingRef.current,
            {
              y: heroScroll.desktopHeadingY,
              ease: "none",
            },
            heroScroll.desktop.exitStart,
          )
          .to(
            showWrapRef.current,
            {
              y: heroScroll.desktopShowY,
              ease: "none",
            },
            heroScroll.desktop.exitStart,
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
    <div ref={rootRef} className="hero-height-new" section-color="black">
      <section ref={sectionRef} className="section hero home" section-color="black">
        <div className="container is-big full">
          <div ref={headingRef} className="hero-heading">
            <div ref={eyebrowRef} className="hero-tag-wrap">
              <div className="hero-tag">
                <span className="tag-text">{content.eyebrow}</span>
              </div>
              <div className="stats-card-gradient services hero-home" aria-hidden="true" />
            </div>
            <div className="hero-home-heading-wrap">
              <h1 className="heading-hero" aria-label={titleLabel}>
                {titleWords.map((line, lineIndex) => (
                  <span key={`${line.join("-")}-${lineIndex}`} className="hero-heading-line" aria-hidden="true">
                    {line.map((word, wordIndex) => (
                      <span key={`${word}-${wordIndex}`} className="hero-heading-word">
                        <span data-hero-word className="hero-heading-word-inner">
                          {word}
                        </span>
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
            </div>
          </div>

          <div ref={showWrapRef} className="show-wrap">
            <div className="showreal-home">
              <div ref={laptopBgRef} className="lap-top-bg" aria-hidden="true" />
              <div ref={videoFrameRef} className="show-real-video">
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
                    {shouldLoadVideo && content.video.src ? <source src={content.video.src} type="video/mp4" /> : null}
                  </video>
                </div>
              </div>
              <div className="stats-card-gradient hero-gradient" aria-hidden="true" />
            </div>
          </div>

          <div className="mob-paralax" aria-hidden="true">
            {heroLayers.map((layer, index) => (
              <div
                key={layer.className}
                className={`hero-paralax ${layer.className}`}
                data-hero-layer
                data-speed={heroLayerSpeeds[index]}
              >
                <HeroLayerGraphic variant={layer.variant} />
              </div>
            ))}
          </div>

          <div ref={scrollIndicatorRef} className="hero-scroll-indicator">
            <span>{content.scrollLabel}</span>
            <span className="hero-scroll-indicator__line" aria-hidden="true" />
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroLayerGraphic({ variant }: { variant: (typeof heroLayers)[number]["variant"] }) {
  if (variant === "orbit") {
    return (
      <svg viewBox="0 0 210 210" aria-hidden="true" focusable="false">
        <path d="M39 121C68 34 147 24 180 75c33 52-15 103-82 105-62 2-83-33-59-59Z" fill="#fe4a23" />
        <path d="M62 96c38-38 89-44 113-15" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "window") {
    return (
      <svg viewBox="0 0 180 180" aria-hidden="true" focusable="false">
        <rect width="148" height="112" x="16" y="34" fill="#171717" rx="22" />
        <path d="M34 62h112M34 92h72M34 122h48" stroke="#fff" strokeWidth="10" strokeLinecap="round" />
        <circle cx="134" cy="119" r="18" fill="#8a5cff" />
      </svg>
    );
  }

  if (variant === "wave") {
    return (
      <svg viewBox="0 0 190 190" aria-hidden="true" focusable="false">
        <path
          d="M16 116c24-64 51-79 79-43s52 48 79-12"
          fill="none"
          stroke="#fe4a23"
          strokeLinecap="round"
          strokeWidth="18"
        />
        <path d="M48 142h95" stroke="#fff" strokeLinecap="round" strokeWidth="12" />
      </svg>
    );
  }

  if (variant === "stack") {
    return (
      <svg viewBox="0 0 260 210" aria-hidden="true" focusable="false">
        <rect width="166" height="118" x="46" y="50" fill="#fff" rx="22" />
        <rect width="114" height="34" x="72" y="74" fill="#080808" rx="17" />
        <rect width="84" height="22" x="72" y="124" fill="#fe4a23" rx="11" />
      </svg>
    );
  }

  if (variant === "spark") {
    return (
      <svg viewBox="0 0 90 90" aria-hidden="true" focusable="false">
        <path d="M45 4 56 34l30 11-30 11-11 30-11-30L4 45l30-11Z" fill="#8a5cff" />
      </svg>
    );
  }

  if (variant === "ring") {
    return (
      <svg viewBox="0 0 170 170" aria-hidden="true" focusable="false">
        <circle cx="85" cy="85" r="60" fill="none" stroke="#fff" strokeWidth="16" />
        <circle cx="85" cy="85" r="28" fill="#fe4a23" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 140 140" aria-hidden="true" focusable="false">
      <rect width="98" height="98" x="21" y="21" fill="#171717" rx="28" />
      <path d="M44 73h52M70 47v52" stroke="#fff" strokeLinecap="round" strokeWidth="12" />
    </svg>
  );
}
