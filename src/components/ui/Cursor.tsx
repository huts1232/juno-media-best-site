"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cursor } from "@/lib/motion-tokens";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;

    const current: { x: number; y: number; scale: number } = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      scale: cursor.idleScale,
    };
    const target: { x: number; y: number; scale: number } = {
      x: current.x,
      y: current.y,
      scale: cursor.idleScale,
    };
    let frame = 0;

    const isInteractive = (element: EventTarget | null) =>
      element instanceof Element &&
      Boolean(
        element.closest(
          'a, button, input, textarea, select, summary, [role="button"], [data-cursor="hover"]',
        ),
      );

    const render = () => {
      current.x += (target.x - current.x) * cursor.lerp;
      current.y += (target.y - current.y) * cursor.lerp;
      current.scale += (target.scale - current.scale) * cursor.lerp;

      dot.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(${current.scale})`;
      frame = window.requestAnimationFrame(render);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      target.x = event.clientX;
      target.y = event.clientY;
      target.scale = isInteractive(event.target) ? cursor.hoverScale : cursor.idleScale;
      dot.dataset.visible = "true";
    };

    const onPointerLeave = () => {
      dot.dataset.visible = "false";
    };

    frame = window.requestAnimationFrame(render);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return <div ref={dotRef} aria-hidden="true" className="custom-cursor-dot" />;
}
