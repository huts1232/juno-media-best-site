"use client";

import { useMemo } from "react";

type SplitTextProps = {
  text: string;
  className?: string;
};

export function SplitText({ text, className }: SplitTextProps) {
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <span aria-label={text} className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden="true" className="inline-block overflow-hidden">
          <span className="inline-block">{word}</span>
          {index < words.length - 1 ? "\u00a0" : null}
        </span>
      ))}
    </span>
  );
}
