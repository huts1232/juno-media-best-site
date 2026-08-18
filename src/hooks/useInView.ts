"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(Boolean(entry?.isIntersecting));
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}
