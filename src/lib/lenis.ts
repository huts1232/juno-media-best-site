import Lenis from "lenis";

export const lenisOptions = {
  lerp: 0.1,
  duration: 1.2,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
} as const;

export function createLenis() {
  return new Lenis(lenisOptions);
}
