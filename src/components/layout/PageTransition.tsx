"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();

  if (reducedMotion) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
        }}
        exit={{
          opacity: 0,
          y: -12,
          transition: { duration: 0.3, ease: [0.65, 0, 0.35, 1] },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
