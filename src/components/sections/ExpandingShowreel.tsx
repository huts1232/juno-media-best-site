"use client";

import { useEffect, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";

/**
 * Lokale motion-tokens. Deze sectie staat niet meer op de homepage; de waarden
 * horen daarom bij de sectie zelf en niet meer in de gedeelde motion-laag.
 */
const showreelMotion = {
  /** clip-path insets waarmee het mediavenster begint; einde is altijd 0. */
  desktopClip: "inset(12% 22% 12% 22% round 28px)",
  mobileClip: "inset(32% 6% 32% 6% round 20px)",
  endClip: "inset(0% 0% 0% 0% round 0px)",
  innerScale: 1.18,
  /** Pin-lengte. Laatste 0.25 is een hold op fullscreen. */
  end: "+=160%",
  scrub: 1,
  hold: 0.25,
  lockup: {
    y: 24,
    duration: 0.35,
    position: 0.45,
  },
} as const;

type ShowreelContent = {
  ariaLabel: string;
  poster: string;
  src: string;
  lockup: {
    eyebrow: string;
    title: string;
  };
};

type ExpandingShowreelProps = {
  content: ShowreelContent;
};

/**
 * Mediablok dat tijdens het scrollen van kaartformaat naar volledig scherm
 * groeit. Het venster wordt met clip-path vergroot, niet met scale: de video
 * staat vanaf het begin op viewportformaat, dus hij blijft scherp en de layout
 * verspringt niet. Startwaarden staan in CSS (globals.css), zodat er geen flits
 * is voordat GSAP draait en mobiel niet even de desktop-crop laat zien.
 */
export function ExpandingShowreel({ content }: ExpandingShowreelProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const lockupRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const target = rootRef.current;
    if (!target || !content.src) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShouldLoadVideo(true);
        observer.disconnect();
      },
      { rootMargin: "400px" },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [content.src]);

  useEffect(() => {
    if (!shouldLoadVideo || !content.src) return;

    const video = videoRef.current;
    if (!video) return;

    video.load();
    void video.play();
  }, [content.src, shouldLoadVideo]);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    // Bij reduced motion doet CSS de eindstaat; geen ScrollTrigger, geen pin.
    if (!root || reducedMotion) return;

    let matchMedia: gsap.MatchMedia | undefined;

    const ctx = gsap.context(() => {
      matchMedia = gsap.matchMedia();

      matchMedia.add(
        { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" },
        (context) => {
          const { desktop } = context.conditions as { desktop: boolean };
          const from = desktop ? showreelMotion.desktopClip : showreelMotion.mobileClip;
          const to = showreelMotion.endClip;

          gsap
            .timeline({
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: showreelMotion.end,
                scrub: showreelMotion.scrub,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            })
            .fromTo(
              mediaRef.current,
              { clipPath: from, webkitClipPath: from },
              { clipPath: to, webkitClipPath: to, ease: "none", duration: 1 },
              0,
            )
            .fromTo(
              innerRef.current,
              { scale: showreelMotion.innerScale },
              { scale: 1, ease: "none", duration: 1 },
              0,
            )
            .fromTo(
              lockupRef.current,
              { autoAlpha: 0, y: showreelMotion.lockup.y },
              { autoAlpha: 1, y: 0, duration: showreelMotion.lockup.duration },
              showreelMotion.lockup.position,
            )
            .to({}, { duration: showreelMotion.hold });
        },
      );
    }, root);

    return () => {
      matchMedia?.revert();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={rootRef}
      className="showreel-expand"
      data-cta-zone="hero"
      aria-labelledby="home-showreel-title"
    >
      <div ref={mediaRef} className="showreel-expand__media">
        <div ref={innerRef} className="showreel-expand__inner">
          <video
            ref={videoRef}
            className="showreel-expand__video"
            aria-label={content.ariaLabel}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={content.poster}
            width={1920}
            height={1080}
          >
            {shouldLoadVideo && content.src ? <source src={content.src} type="video/mp4" /> : null}
          </video>
          <div className="showreel-expand__scrim" aria-hidden="true" />
        </div>

        <div ref={lockupRef} className="showreel-expand__lockup">
          <p className="showreel-expand__eyebrow">{content.lockup.eyebrow}</p>
          <p id="home-showreel-title" className="showreel-expand__title">
            {content.lockup.title}
          </p>
        </div>
      </div>
    </section>
  );
}
