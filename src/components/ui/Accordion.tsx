"use client";

import { useState } from "react";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div>
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className="border-b border-hairline">
            <button
              aria-controls={`${item.id}-panel`}
              aria-expanded={open}
              className="flex w-full items-center justify-between py-5 text-left"
              id={`${item.id}-button`}
              onClick={() => setOpenId(open ? null : item.id)}
            >
              <span>{item.question}</span>
              <span aria-hidden="true">{open ? "-" : "+"}</span>
            </button>
            <div
              aria-labelledby={`${item.id}-button`}
              className={open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"}
              id={`${item.id}-panel`}
              role="region"
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-copy-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
