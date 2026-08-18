"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/cn";

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const ref = useMagnetic<HTMLButtonElement>();

  return (
    <button ref={ref} className={cn("rounded-full bg-copy px-5 py-3 text-sm text-page", className)} {...props}>
      {children}
    </button>
  );
}
