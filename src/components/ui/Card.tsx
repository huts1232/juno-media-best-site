import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cn("rounded-card border border-hairline bg-page-alt p-5", className)} {...props}>
      {children}
    </div>
  );
}
