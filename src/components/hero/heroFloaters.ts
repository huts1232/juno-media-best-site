import type { ComponentType } from "react";
import { AutonomyCard, WorkforceCard } from "./floaters";

export type HeroFloater = {
  /** Sluit aan op de .hero-floater--* regels in globals.css. */
  key: string;
  Component: ComponentType;
  /** Parallax-factor, 0.15 - 0.7. Wordt als data-speed op de laag gezet. */
  speed: number;
};

/**
 * Twee mini-UI kaarten rond de hero: Workforce links en Autonomy rechts.
 * Positie en breedte staan in CSS met clamp() in vw, zodat ze naast het
 * 48vw brede videoframe blijven. Onder 768px verdwijnen ze helemaal.
 *
 * Het arc-motief linksonder staat los in Hero.tsx: het is decor achter de
 * kaarten, geen kaart.
 */
export const heroFloaters: readonly HeroFloater[] = [
  { key: "workforce", Component: WorkforceCard, speed: 0.28 },
  { key: "autonomy", Component: AutonomyCard, speed: 0.34 },
] as const;
