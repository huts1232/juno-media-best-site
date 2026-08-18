"use client";

import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export function Button({ children, className, href, variant = "primary", ...props }: ButtonProps) {
  const ref = useMagnetic<HTMLAnchorElement | HTMLButtonElement>();
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition-transform",
    variant === "primary" ? "bg-copy text-page" : "border border-hairline text-copy",
    className,
  );

  if (href) {
    return (
      <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...props}>
      {children}
    </button>
  );
}
