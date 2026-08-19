"use client";

import { AnimatePresence, LazyMotion } from "framer-motion";
import * as m from "framer-motion/m";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const loadFramerFeatures = () => import("@/lib/framer-features").then((mod) => mod.default);

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();

  if (reducedMotion) return <>{children}</>;

  return (
    <LazyMotion features={loadFramerFeatures} strict>
      {/* Geen y/transform: een transform op deze wrapper zou ScrollTrigger-pinning
          en position:fixed in alle onderliggende secties breken. */}
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: [0.65, 0, 0.35, 1] },
          }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
