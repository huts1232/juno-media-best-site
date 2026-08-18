import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export function Button({ children, className, href, variant = "primary", ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition-transform",
    variant === "primary" ? "bg-copy text-page" : "border border-hairline text-copy",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
