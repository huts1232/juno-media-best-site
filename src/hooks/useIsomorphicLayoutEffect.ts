"use client";

import { useEffect, useLayoutEffect } from "react";

/**
 * useLayoutEffect in de browser (voorkomt de flits bij page load), useEffect op
 * de server (voorkomt de React SSR-waarschuwing). Alle GSAP-setups gebruiken dit.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
