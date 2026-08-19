"use client";

import { useCallback, useRef, useState } from "react";
import { LogoMark } from "@/components/brand/LogoMark";
import { intro } from "@/content/agency";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";
import { introBootScript, markIntroDone, shouldPlayIntro } from "@/lib/intro";
import { getActiveLenis } from "@/lib/lenis";

/**
 * Logo-animatie bij het eerste bezoek van een sessie, 2,4s in totaal.
 *
 * De overlay ligt over de hero heen in plaats van ervoor: de hero staat al in
 * het document en wordt gewoon geschilderd, dus LCP wacht niet op de intro.
 * Het inline script zet html[data-intro="play"] nog tijdens het parsen, zodat
 * er in geen van beide richtingen een flits zit.
 */
export function IntroOverlay() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const markRef = useRef<HTMLDivElement | null>(null);
  const finishRef = useRef<(() => void) | null>(null);
  const [mounted, setMounted] = useState(true);

  const skip = useCallback(() => finishRef.current?.(), []);

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    const mark = markRef.current;
    if (!root || !mark) return;

    if (!shouldPlayIntro()) {
      markIntroDone();
      setMounted(false);
      return;
    }

    const paths = root.querySelectorAll<SVGPathElement>("[data-logo-path]");
    const light = root.querySelector<SVGPathElement>("[data-logo-path='light']");
    const dark = root.querySelector<SVGPathElement>("[data-logo-path='dark']");

    document.body.dataset.scrollLocked = "true";
    // Lenis wordt in een parent-effect opgezet en bestaat hier nog niet.
    const lenisFrame = requestAnimationFrame(() => getActiveLenis()?.stop());

    let finished = false;
    let hardStop = 0;

    gsap.set(root, { clipPath: "inset(0 0 0% 0)" });
    gsap.set(paths, { fillOpacity: 0, strokeDasharray: 1, strokeDashoffset: 1 });

    const timeline = gsap
      .timeline({ onComplete: () => finish() })
      .to(light, { strokeDashoffset: 0, duration: 0.8, ease: "expo.out" }, 0.2)
      .to(dark, { strokeDashoffset: 0, duration: 0.8, ease: "expo.out" }, 0.5)
      .to(paths, { fillOpacity: 1, duration: 0.4, ease: "power2.out" }, 1.1)
      .to(mark, { scale: 0.85, y: -20, duration: 0.5, ease: "power2.inOut" }, 1.5)
      // 1.9 + 0.5 = 2.4s, daarna is de overlay weg en start de hero-timeline.
      .to(root, { clipPath: "inset(0 0 100% 0)", duration: 0.5, ease: "expo.out" }, 1.9);

    function unlock() {
      delete document.body.dataset.scrollLocked;
      getActiveLenis()?.start();
    }

    function finish() {
      if (finished) return;
      finished = true;
      window.clearTimeout(hardStop);
      cancelAnimationFrame(lenisFrame);
      timeline.kill();
      unlock();
      markIntroDone();
      setMounted(false);
    }

    finishRef.current = finish;

    // Noodrem: is de hero-afbeelding na de looptijd nog niet binnen, dan gaat
    // de overlay er alsnog af.
    hardStop = window.setTimeout(finish, intro.duration * 1000);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish();
    };

    window.addEventListener("keydown", onKeyDown);
    root.addEventListener("pointerdown", finish);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      root.removeEventListener("pointerdown", finish);
      window.clearTimeout(hardStop);
      cancelAnimationFrame(lenisFrame);
      timeline.kill();
      finishRef.current = null;
      if (!finished) unlock();
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: introBootScript }} />
      <div
        ref={rootRef}
        className="intro-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={intro.label}
      >
        <div ref={markRef} className="intro-overlay__mark">
          <LogoMark />
        </div>
        <button type="button" className="intro-overlay__skip" onClick={skip}>
          {intro.skipLabel}
          <span className="sr-only"> {intro.skipHint}</span>
        </button>
      </div>
    </>
  );
}
