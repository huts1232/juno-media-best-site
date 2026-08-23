"use client";

import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { type ServiceVisual } from "@/content/services";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { serviceMotion } from "@/lib/motion-tokens";

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

type ServicesProps = {
  content: {
    eyebrow: string;
    heading: string;
    listLabel: string;
    items: readonly ServiceItem[];
  };
};

type ServiceShellStyle = CSSProperties & {
  "--service-count": number;
};

const serviceGraphics: Record<ServiceVisual, { path: string; accent: string; nodes: readonly [number, number][] }> = {
  strategy: {
    path: "M74 290C118 132 221 92 298 184s126 78 162-48",
    accent: "#43b1d6",
    nodes: [
      [74, 290],
      [298, 184],
      [460, 136],
    ],
  },
  visual: {
    path: "M72 242C124 118 204 98 274 174s130 78 176-36",
    accent: "#1f7fb8",
    nodes: [
      [72, 242],
      [274, 174],
      [450, 138],
    ],
  },
  platforms: {
    path: "M70 128H198C252 128 251 278 308 278H452M198 128V66M308 278v72",
    accent: "#ffffff",
    nodes: [
      [70, 128],
      [198, 128],
      [308, 278],
      [452, 278],
    ],
  },
  website: {
    path: "M78 106H442V314H78ZM118 158H396M118 210H282M118 262H346",
    accent: "#43b1d6",
    nodes: [
      [78, 106],
      [442, 314],
      [282, 210],
    ],
  },
  mobile: {
    path: "M188 64H332C354 64 370 82 370 104V316C370 338 354 356 332 356H188C166 356 150 338 150 316V104C150 82 166 64 188 64ZM204 128H316M204 186H316M204 244H278",
    accent: "#1f7fb8",
    nodes: [
      [188, 64],
      [332, 356],
      [278, 244],
    ],
  },
  development: {
    path: "M80 144L162 226L80 308M230 310L294 110M328 144L440 226L328 308",
    accent: "#43b1d6",
    nodes: [
      [80, 144],
      [230, 310],
      [440, 226],
    ],
  },
};

export function Services({ content }: ServicesProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const blockRefs = useRef<Array<HTMLElement | null>>([]);
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({});

  const assignBlockRef = useCallback(
    (index: number) => (node: HTMLElement | null) => {
      blockRefs.current[index] = node;
    },
    [],
  );

  const handleServiceClick = useCallback(
    (index: number) => {
      setActiveIndex(index);
      blockRefs.current[index]?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "center",
      });
    },
    [reducedMotion],
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const frames = gsap.utils
      .toArray<HTMLElement>("[data-service-video-frame]", root)
      .filter((frame) => Boolean(frame.dataset.videoSrc));

    if (!frames.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = (entry.target as HTMLElement).dataset.videoId;
          if (id) {
            setLoadedVideos((current) => (current[id] ? current : { ...current, [id]: true }));
          }
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "200px" },
    );

    frames.forEach((frame) => observer.observe(frame));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (reducedMotion) {
      gsap.set(gsap.utils.toArray<SVGPathElement>("[data-service-line]", root), { strokeDashoffset: 0 });
      gsap.set(gsap.utils.toArray<HTMLElement>("[data-service-panel]", root), { opacity: 1, y: 0 });
      return;
    }

    let matchMedia: gsap.MatchMedia | undefined;
    const ctx = gsap.context(() => {
      const basePaths = gsap.utils.toArray<SVGPathElement>('[data-service-line="base"]');
      const colorPaths = gsap.utils.toArray<SVGPathElement>('[data-service-line="color"]');

      gsap.to(basePaths, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: serviceMotion.lineBase.start,
          end: serviceMotion.lineBase.end,
          scrub: serviceMotion.lineBase.scrub,
        },
      });

      gsap.to(colorPaths, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: serviceMotion.lineColor.start,
          end: serviceMotion.lineColor.end,
          scrub: serviceMotion.lineColor.scrub,
        },
      });

      content.items.forEach((_, index) => {
        const block = blockRefs.current[index];
        if (!block) return;

        ScrollTrigger.create({
          trigger: block,
          start: serviceMotion.activeStart,
          end: serviceMotion.activeEnd,
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });

      matchMedia = gsap.matchMedia();
      matchMedia.add(serviceMotion.mobileQuery, () => {
        const panels = blockRefs.current.filter(Boolean) as HTMLElement[];
        const tweens = panels.map((panel) =>
          gsap.fromTo(
            panel,
            {
              y: serviceMotion.mobileReveal.y,
              opacity: serviceMotion.mobileReveal.opacity,
            },
            {
              y: 0,
              opacity: 1,
              duration: serviceMotion.mobileReveal.duration,
              ease: serviceMotion.mobileReveal.ease,
              scrollTrigger: {
                trigger: panel,
                start: serviceMotion.mobileReveal.start,
                once: true,
              },
            },
          ),
        );

        return () => {
          tweens.forEach((tween) => tween.kill());
        };
      });
    }, root);

    return () => {
      matchMedia?.revert();
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [content.items, reducedMotion]);

  return (
    <section ref={rootRef} className="services-track-section" aria-labelledby="home-services-title">
      <div
        className="site-container services-track-shell"
        style={{ "--service-count": content.items.length } as ServiceShellStyle}
      >
        <aside className="services-track-left">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="home-services-title" className="services-track-title">
            {content.heading}
          </h2>
          <nav className="services-track-nav" aria-label={content.listLabel}>
            {content.items.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className="services-track-button"
                data-active={activeIndex === index}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => handleServiceClick(index)}
              >
                <span className="services-track-button__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        <div className="services-track-right">
          {content.items.map((item, index) => (
            <article
              key={item.name}
              ref={assignBlockRef(index)}
              className="service-panel"
              data-service-panel
              aria-labelledby={`service-panel-${index}`}
            >
              <div className="service-panel__copy">
                <span className="service-panel__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 id={`service-panel-${index}`} className="service-panel__title">
                  {item.heading}
                </h3>
                <p className="service-panel__body">{item.body}</p>
              </div>
              <div className="service-panel__visual">
                <ServiceLineGraphic variant={item.visual} />
                {item.video ? (
                  <div
                    className="service-panel__video"
                    data-service-video-frame
                    data-video-id={item.name}
                    data-video-src={item.video.src}
                  >
                    <video
                      aria-label={item.video.ariaLabel}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster={item.video.poster}
                      width={720}
                      height={960}
                    >
                      {loadedVideos[item.name] && item.video.src ? <source src={item.video.src} type="video/mp4" /> : null}
                    </video>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceLineGraphic({ variant }: { variant: ServiceVisual }) {
  const graphic = serviceGraphics[variant];

  return (
    <svg className="service-line-art" viewBox="0 0 520 420" aria-hidden="true" focusable="false">
      <rect width="520" height="420" rx="8" fill="#101010" />
      <circle cx="390" cy="116" r="92" fill={graphic.accent} opacity=".12" />
      <circle cx="142" cy="304" r="76" fill="#ffffff" opacity=".06" />
      <path
        d={graphic.path}
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        data-service-line="base"
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity=".18"
        strokeWidth="9"
      />
      <path
        d={graphic.path}
        pathLength="1"
        strokeDasharray="1"
        strokeDashoffset="1"
        data-service-line="color"
        fill="none"
        stroke={graphic.accent}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="7"
      />
      {graphic.nodes.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill={graphic.accent} />
      ))}
    </svg>
  );
}
