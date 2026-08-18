import { type ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
};

export function Marquee({ children }: MarqueeProps) {
  return <div className="overflow-hidden whitespace-nowrap">{children}</div>;
}
