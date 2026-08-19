import type { ComponentType } from "react";
import {
  CurveArrow,
  InstallsCard,
  LaunchCard,
  MetricBubble,
  RevenueCard,
  RingShape,
} from "./floaters";

export type HeroFloater = {
  /** Sluit aan op de .hero-floater--* regels in globals.css. */
  key: string;
  Component: ComponentType;
  /** Parallax-factor, 0.15 - 0.7. Wordt als data-speed op de laag gezet. */
  speed: number;
};

/**
 * Zes mini-UI floaters rond de hero. Positie en breedte staan in CSS
 * (percentage-coördinaten + vw-breedte), zodat ze meeschalen met de viewport.
 * Onder 768px blijven alleen revenue en metric staan.
 */
export const heroFloaters: readonly HeroFloater[] = [
  { key: "ring", Component: RingShape, speed: 0.22 },
  { key: "installs", Component: InstallsCard, speed: 0.35 },
  { key: "launch", Component: LaunchCard, speed: 0.45 },
  { key: "revenue", Component: RevenueCard, speed: 0.3 },
  { key: "curve", Component: CurveArrow, speed: 0.6 },
  { key: "metric", Component: MetricBubble, speed: 0.7 },
] as const;
