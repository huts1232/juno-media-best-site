import type { ComponentType } from "react";
import { AutonomyCard, MetricBubble, RevenueCard, WorkforceCard } from "./floaters";

export type HeroFloater = {
  /** Sluit aan op de .hero-floater--* regels in globals.css. */
  key: string;
  Component: ComponentType;
  /** Parallax-factor, 0.15 - 0.7. Wordt als data-speed op de laag gezet. */
  speed: number;
};

/**
 * Vier mini-UI kaarten rond de hero: twee links, twee rechts. Positie en
 * breedte staan in CSS met clamp() in vw, zodat ze van 1280 tot 1920 buiten het
 * 48vw brede videoframe blijven. Onder 1024px blijven alleen de onderste twee
 * staan, onder 768px verdwijnen ze helemaal.
 *
 * Het arc-motief linksonder staat los in Hero.tsx: het is decor achter de
 * kaarten, geen kaart.
 */
export const heroFloaters: readonly HeroFloater[] = [
  { key: "workforce", Component: WorkforceCard, speed: 0.28 },
  { key: "autonomy", Component: AutonomyCard, speed: 0.34 },
  { key: "revenue", Component: RevenueCard, speed: 0.42 },
  { key: "metric", Component: MetricBubble, speed: 0.5 },
] as const;
