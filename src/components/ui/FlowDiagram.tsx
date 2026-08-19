"use client";

import { useRef } from "react";
import { configurator } from "@/content/agency";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { agentFlowMotion } from "@/lib/motion-tokens";

type FlowDiagramProps = {
  nodes: readonly string[];
  label?: string;
  caption?: string;
};

/**
 * Vijf stappen met verbindingslijnen die zich tekenen. Wordt gebruikt in de
 * configurator en op de use-casepagina's.
 */
export function FlowDiagram({ nodes, label, caption }: FlowDiagramProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion) return;

    const ctx = gsap.context(() => {
      const horizontal = window.matchMedia(agentFlowMotion.horizontalQuery).matches;
      // Eén trigger voor beide gebruiken: in de configurator staat het diagram
      // al in beeld en vuurt hij direct, op een use-casepagina pas bij scrollen.
      const scrollTrigger = {
        trigger: root,
        start: agentFlowMotion.triggerStart,
        once: true,
      } as const;

      gsap.from("[data-flow-node]", {
        y: agentFlowMotion.node.y,
        autoAlpha: 0,
        duration: agentFlowMotion.node.duration,
        ease: agentFlowMotion.node.ease,
        stagger: agentFlowMotion.stagger,
        scrollTrigger,
      });

      gsap.to(`[data-flow-line='${horizontal ? "h" : "v"}']`, {
        scrollTrigger,
        strokeDashoffset: 0,
        duration: agentFlowMotion.line.duration,
        ease: agentFlowMotion.line.ease,
        stagger: agentFlowMotion.stagger,
        delay: agentFlowMotion.stagger,
        // Na afloop staan beide richtingen getekend, zodat een draaiend scherm
        // geen halve lijnen laat zien.
        onComplete: () => gsap.set("[data-flow-line]", { strokeDashoffset: 0 }),
      });
    }, root);

    return () => ctx.revert();
  }, [nodes, reducedMotion]);

  return (
    <div ref={rootRef} className="flow-diagram">
      <p className="flow-diagram__label">{label ?? configurator.flow.label}</p>
      <ol className="flow-diagram__list">
        {nodes.map((node, index) => (
          <li key={node} className="flow-diagram__item">
            {index > 0 ? (
              <svg
                className="flow-diagram__link"
                viewBox="0 0 24 24"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <line data-flow-line="h" pathLength={1} x1="0" y1="12" x2="24" y2="12" />
                <line data-flow-line="v" pathLength={1} x1="12" y1="0" x2="12" y2="24" />
              </svg>
            ) : null}
            <span className="flow-diagram__node" data-flow-node>
              {node}
            </span>
          </li>
        ))}
      </ol>
      {caption === "" ? null : <p className="flow-diagram__caption">{caption ?? configurator.flow.caption}</p>}
    </div>
  );
}
