import type { ServiceVisual } from "@/content/services";
import { gsap } from "@/lib/gsap";
import { servicesBentoMotion } from "@/lib/motion-tokens";

/**
 * Interne animatie per visual, gehangen aan dezelfde timeline als de
 * kaartreveal maar met een delay. De beginwaarden staan óók in CSS of als
 * SVG-attribuut, zodat er niets flitst voordat GSAP draait.
 */
export function addVisualMotion(
  variant: ServiceVisual,
  card: HTMLElement,
  timeline: gsap.core.Timeline,
) {
  const find = gsap.utils.selector(card);
  const at = servicesBentoMotion.innerDelay;

  switch (variant) {
    case "strategy":
      timeline.to(
        find("[data-strategy-segment]"),
        { strokeDashoffset: 0, duration: 1.1, ease: "power2.out", stagger: 0.14 },
        at,
      );
      break;

    case "visual":
      timeline.fromTo(
        find("[data-visual-tile]"),
        { scale: 0.8, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.5, ease: "back.out(1.6)", stagger: 0.05 },
        at,
      );
      break;

    case "website":
      timeline.fromTo(
        find("[data-website-frame]"),
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.9, ease: "expo.out" },
        at,
      );
      break;

    case "development":
      timeline.fromTo(
        find("[data-code-line]"),
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.45, ease: "none", stagger: 0.08 },
        at,
      );
      break;

    // platforms krijgt scrubbed parallax (eigen ScrollTrigger), mobile een
    // IntersectionObserver in de sectie. Geen plek in deze timeline.
    case "platforms":
    case "mobile":
      break;
  }
}

/** Y-parallax over de gestapelde device-lagen; achterste laag beweegt trager. */
export function addPlatformParallax(card: HTMLElement) {
  const { travel, start, end, scrub } = servicesBentoMotion.platformParallax;

  gsap.utils.toArray<SVGGElement>("[data-platform-layer]", card).forEach((layer) => {
    const depth = Number(layer.dataset.depth ?? 1);

    gsap.fromTo(
      layer,
      { y: travel * depth },
      {
        y: -travel * depth,
        ease: "none",
        scrollTrigger: { trigger: card, start, end, scrub },
      },
    );
  });
}
