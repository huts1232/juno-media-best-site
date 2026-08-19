"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useParallaxLayers } from "@/hooks/useParallaxLayers";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  heroLoad,
  heroMouse,
  heroScroll,
  heroScrollIndicator,
} from "@/lib/motion-tokens";
import { heroFloaters } from "@/components/hero/heroFloaters";

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

const heroPosterSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9"><rect width="16" height="9" fill="#101010"/><path d="M0 7 16 2v7H0z" fill="#080808"/><circle cx="10" cy="4" r="4" fill="#fe4a23" opacity=".28"/><circle cx="6" cy="5" r="3" fill="#8a5cff" opacity=".28"/></svg>';
const heroPosterDataUri = `data:image/svg+xml,${encodeURIComponent(heroPosterSvg)}`;

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

  useParallaxLayers(rootRef, {
    trigger: sectionRef,
    multiplier: heroScroll.layerMultiplier,
    selector: "[data-hero-layer]",
    enabled: !reducedMotion,
  });

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
    let started = false;

    const startTimeline = () => {
      if (cancelled || started || !rootRef.current) return;
      started = true;

      ctx = gsap.context(() => {
        const words = gsap.utils.toArray<HTMLElement>("[data-hero-word]");
        const floaters = gsap.utils.toArray<HTMLElement>("[data-hero-floater]");
        const eyebrow = eyebrowRef.current;
        const videoFrame = videoFrameRef.current;
        const scrollIndicator = scrollIndicatorRef.current;

        if (reducedMotion) {
          gsap.set([eyebrow, videoFrame, scrollIndicator, ...floaters], {
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
          scale: heroLoad.video.scale,
        });
        gsap.set(floaters, {
          opacity: heroLoad.layer.opacity,
          y: heroLoad.layer.y,
          scale: heroLoad.layer.scale,
        });
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
            "-=0.28",
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
            floaters,
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
            scrollIndicator,
            {
              opacity: 1,
              duration: heroLoad.scrollIndicator.duration,
              ease: heroLoad.scrollIndicator.ease,
            },
            "-=0.2",
          );
      }, root);
    };

    if (document.fonts?.ready) {
      const fontWait = window.setTimeout(startTimeline, 250);
      void document.fonts.ready.then(() => {
        window.clearTimeout(fontWait);
        startTimeline();
      });
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
      // De indicator staat fixed in dezelfde hoek als de floating CTA; voorbij
      // 60vh heeft hij zijn werk gedaan en maakt hij plaats.
      ScrollTrigger.create({
        start: () => window.innerHeight * heroScrollIndicator.startFactor,
        end: "max",
        invalidateOnRefresh: true,
        onEnter: () =>
          gsap.to(scrollIndicatorRef.current, {
            autoAlpha: 0,
            duration: heroScrollIndicator.duration,
            overwrite: true,
          }),
        onLeaveBack: () =>
          gsap.to(scrollIndicatorRef.current, {
            autoAlpha: 1,
            duration: heroScrollIndicator.duration,
            overwrite: true,
          }),
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
                <Image
                  className="hero-video-poster"
                  src={heroPosterDataUri}
                  alt={content.video.src ? "" : content.video.ariaLabel}
                  width={1280}
                  height={720}
                  priority
                  unoptimized
                  fetchPriority="high"
                  sizes="(max-width: 767px) 86vw, 60vw"
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
            {heroFloaters.map(({ key, Component, speed }) => (
              <div
                key={key}
                className={`hero-floater hero-floater--${key}`}
                data-hero-layer
                data-speed={speed}
              >
                <div className="hero-floater__inner" data-hero-floater>
                  <Component />
                </div>
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
