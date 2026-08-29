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
  /**
   * Transform-only: een clip-path of opacity op het woord stelt de
   * LCP-registratie uit, want de browser telt het element pas als het
   * onvervormd geschilderd is. De maskering komt van .hero-heading-word,
   * dat overflow: hidden heeft.
   */
  word: {
    yPercent: 110,
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
  triggerStart: "top 75%",
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

export const pageHeroMotion = {
  /** Sub-regel onder de H1; de woordreveal zelf komt uit splitTextReveal. */
  intro: {
    y: 20,
    duration: 0.9,
    delay: 0.4,
    ease: "expo.out",
  },
  /** Parallax-diepte van de decoratieve vormen. */
  decorMultiplier: -48,
  hint: {
    /** Verdwijnt zodra er meer dan 8% van de viewport gescrold is. */
    startFactor: 0.08,
    duration: 0.35,
  },
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

export const caseStackMotion = {
  /** Onder 900px vervalt de stack; de kaarten worden een gewone lijst. */
  stackQuery: "(min-width: 900px)",
  listQuery: "(max-width: 899px)",
  /** Wegschalen van de kaart die blijft plakken terwijl de volgende eroverheen komt. */
  outgoing: {
    scale: 0.92,
    yPercent: -4,
    brightness: 0.55,
    start: "top bottom",
    end: "top top",
  },
  /** Mobiele fallback-reveal. */
  listReveal: {
    y: 40,
    duration: 0.8,
    ease: "expo.out",
    start: "top 85%",
  },
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

export const showreelMotion = {
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

export const scrollStatementMotion = {
  /** 0.36 is de laagste gedempte waarde die nog 3:1 contrast haalt voor grote
   *  tekst (wit op #080808). Lager leest niet meer en faalt de audit. */
  from: 0.36,
  stagger: 0.5,
  start: "top 75%",
  end: "bottom 55%",
} as const;

export const statsCardsMotion = {
  desktopQuery: "(min-width: 768px)",
  mobileQuery: "(max-width: 767px)",
  triggerStart: "top 88%",
  /** Ruststand per kaart, ook als --rest-rotate op het element gezet. */
  restRotate: [-1.5, 1, -2, 2.5],
  desktop: {
    x: 180,
    y: 60,
    rotate: 10,
    duration: 1.2,
    ease: "expo.out",
  },
  mobile: {
    y: 40,
    duration: 0.9,
    ease: "expo.out",
  },
} as const;

export const servicesBentoMotion = {
  triggerStart: "top 85%",
  card: {
    y: 50,
    duration: 1,
    ease: "expo.out",
  },
  /** Interne visual-animatie start iets na de kaartreveal. */
  innerDelay: 0.2,
  platformParallax: {
    travel: 26,
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
} as const;

export const navShrink = {
  desktopQuery: "(min-width: 768px)",
  /** Scrollpositie in px waarna de nav krimpt. */
  start: 400,
  duration: 0.4,
  ease: "power2.out",
  /** Ontwerpbreedte van de nav-shell in ruststand. */
  shellWidth: "41.25rem",
} as const;

export const stickyCtaMotion = {
  desktopQuery: "(min-width: 768px)",
  y: 60,
  duration: 0.6,
  ease: "expo.out",
  /** Een zone bepaalt de tekst zolang hij het midden van het scherm raakt. */
  zoneStart: "top center",
  zoneEnd: "bottom center",
  label: {
    travel: 12,
    duration: 0.3,
  },
  width: {
    duration: 0.3,
    ease: "power2.out",
  },
} as const;

export const heroScrollIndicator = {
  /** Verdwijnt voorbij 60vh, zodat hij de floating CTA niet overlapt. */
  startFactor: 0.6,
  duration: 0.3,
} as const;

export const certificationBarMotion = {
  triggerStart: "top 88%",
  y: 20,
  duration: 0.7,
  ease: "expo.out",
  stagger: 0.06,
} as const;

export const beforeAfterMotion = {
  triggerStart: "top 75%",
  /** Scheidingslijn schuift van 100% naar 50%, zodat slepen zich aandient. */
  divider: {
    from: 100,
    to: 50,
    duration: 1.2,
    ease: "expo.out",
  },
  keyboardStep: 4,
  count: {
    manualDuration: 6,
    agentDuration: 1,
    ease: "power1.out",
  },
} as const;

export const stepMotion = {
  initial: { x: 30, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { x: -30, opacity: 0, transition: { duration: 0.35, ease: [0.65, 0, 0.35, 1] } },
} as const;

export const agentFlowMotion = {
  horizontalQuery: "(min-width: 768px)",
  triggerStart: "top 85%",
  stagger: 0.15,
  node: {
    y: 16,
    duration: 0.5,
    ease: "expo.out",
  },
  line: {
    duration: 0.5,
    ease: "power2.out",
  },
} as const;

export const animatedNumberMotion = {
  duration: 0.5,
  ease: "power2.out",
} as const;
