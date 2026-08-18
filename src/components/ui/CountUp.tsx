"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

type CountUpProps = {
  value: string;
};

export function CountUp({ value }: CountUpProps) {
  useReducedMotion();
  return <span className="tabular-nums">{value}</span>;
}
