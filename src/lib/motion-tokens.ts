export const reveal = {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "expo.out",
} as const;

export const revealStagger = 0.08;

export const scrollTriggerDefault = {
  start: "top 85%",
  once: true,
} as const;

export const parallax = {
  start: "top bottom",
  end: "bottom top",
  scrub: 1,
} as const;

export const splitTextReveal = {
  yPercent: 110,
  duration: 1,
  ease: "expo.out",
  stagger: 0.06,
  resizeDebounce: 150,
} as const;

export const magnetic = {
  strength: 0.3,
  duration: 0.4,
  ease: "power3.out",
} as const;

export const cursor = {
  lerp: 0.15,
  hoverScale: 3,
  idleScale: 1,
} as const;

export const heroLoad = {
  eyebrow: {
    y: 18,
    opacity: 0,
    duration: 0.45,
    ease: "power2.out",
  },
  word: {
    yPercent: 110,
    clipPath: "inset(0 0 100% 0)",
    duration: 0.72,
    ease: "expo.out",
    stagger: 0.04,
  },
  video: {
    opacity: 1,
    scale: 0.96,
    duration: 0.65,
    ease: "expo.out",
  },
  /** Entree van de hero-floaters (targets: [data-hero-floater]). */
  layer: {
    opacity: 0,
    y: 24,
    scale: 0.94,
    stagger: 0.08,
    duration: 0.9,
    ease: "expo.out",
  },
  scrollIndicator: {
    opacity: 0,
    duration: 0.28,
    ease: "power2.out",
  },
} as const;

export const heroScroll = {
  start: "top top",
  end: "bottom top",
  scrub: 1,
  layerMultiplier: -60,
  desktopHeadingY: "-30vw",
  desktopShowY: "-34.5rem",
  desktopVideoFrom: "97.5%",
  desktopVideoTo: "100%",
  desktopLaptopOpacityFrom: 1,
  desktopLaptopOpacityTo: 0,
  mobileStart: "top bottom",
  mobileEnd: "bottom top",
  desktop: {
    videoScaleStart: 0.43,
    videoScaleEnd: 0.455,
    exitStart: 0.5,
  },
} as const;

export const heroMouse = {
  minWidth: 1024,
  maxOffset: 18,
  duration: 0.8,
  ease: "power2.out",
} as const;

export const statementMotion = {
  triggerStart: "top 75%",
  line: {
    yPercent: 100,
    clipPath: "inset(0 0 100% 0)",
    duration: 1,
    ease: "expo.out",
    stagger: 0.08,
  },
  floating: {
    speed: 0.2,
    yPercent: -20,
    scrub: 1,
    start: "top bottom",
    end: "bottom top",
  },
} as const;

export const statsMotion = {
  triggerStart: "top 70%",
  count: {
    duration: 1.6,
    ease: "power2.out",
  },
  divider: {
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.1,
  },
} as const;

export const serviceMotion = {
  desktopQuery: "(min-width: 1024px)",
  mobileQuery: "(max-width: 1023px)",
  activeStart: "top center",
  activeEnd: "bottom center",
  lineBase: {
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
  lineColor: {
    start: "top 75%",
    end: "bottom 25%",
    scrub: 1,
  },
  mobileReveal: {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    start: "top 85%",
  },
} as const;

export const marqueeMotion = {
  baseDuration: "30s",
  downDuration: "21.428s",
  upDuration: "50s",
  resetDelay: 220,
  triggerStart: "top bottom",
  triggerEnd: "bottom top",
} as const;

export const casesMotion = {
  revealY: 60,
  revealDuration: 0.9,
  revealEase: "power2.out",
  revealStagger: 0.1,
  triggerStart: "top 85%",
  desktopQuery: "(min-width: 768px)",
  mobileQuery: "(max-width: 767px)",
} as const;

export const testimonialMotion = {
  cardWidthDesktop: 380,
  cardWidthMobile: "85vw",
  snapDuration: 0.65,
  snapEase: "power2.out",
  dragInertia: 420,
  dragThreshold: 3,
  revealY: 34,
  revealDuration: 0.9,
  revealEase: "power2.out",
  revealStagger: 0.08,
  triggerStart: "top 82%",
} as const;

export const awardsMotion = {
  revealY: 36,
  revealDuration: 0.8,
  revealEase: "power2.out",
  revealStagger: 0.08,
  triggerStart: "top 85%",
  hoverLift: -6,
  hoverDuration: 0.4,
} as const;

export const ctaMotion = {
  triggerStart: "top 80%",
  surfaceDuration: 1.2,
  surfaceEase: "expo.out",
  copyY: 24,
  copyDuration: 0.9,
  copyEase: "power2.out",
  copyDelay: 0.15,
  copyStagger: 0.08,
  decorYPercent: -18,
  decorStart: "top bottom",
  decorEnd: "bottom top",
  decorScrub: 1,
} as const;

export const footerMotion = {
  triggerStart: "top 88%",
  columnY: 28,
  columnDuration: 0.8,
  columnEase: "power2.out",
  columnStagger: 0.06,
} as const;

export const webflowEaseMap = {
  ease: "power1.inOut",
  easeOut: "power2.out",
  outQuad: "power2.out",
  outQuart: "power4.out",
  outExpo: "expo.out",
} as const;
