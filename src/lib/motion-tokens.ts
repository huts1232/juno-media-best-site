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
