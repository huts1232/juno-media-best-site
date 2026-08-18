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

export const webflowEaseMap = {
  ease: "power1.inOut",
  easeOut: "power2.out",
  outQuad: "power2.out",
  outQuart: "power4.out",
  outExpo: "expo.out",
} as const;
