import Lenis from "lenis";

let activeLenis: Lenis | null = null;

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

export function setActiveLenis(instance: Lenis | null) {
  activeLenis = instance;
}

export function getActiveLenis() {
  return activeLenis;
}
