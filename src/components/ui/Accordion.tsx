"use client";

import { type KeyboardEvent, useRef, useState } from "react";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusButton = (index: number) => {
    const nextIndex = (index + items.length) % items.length;
    buttonRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusButton(index + 1);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusButton(index - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusButton(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      focusButton(items.length - 1);
    }
  };

  return (
    <div className={className}>
      {items.map((item, index) => {
        const open = openId === item.id;
        const buttonId = `${item.id}-button`;
        const panelId = `${item.id}-panel`;

        return (
          <div key={item.id} className="faq-row" data-open={open ? "true" : "false"}>
            <button
              ref={(node) => {
                buttonRefs.current[index] = node;
              }}
              aria-controls={panelId}
              aria-expanded={open}
              className="faq-trigger"
              id={buttonId}
              onClick={() => setOpenId(open ? null : item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className="faq-question">{item.question}</span>
              <span className="faq-plus" aria-hidden="true" />
            </button>
            <div
              aria-labelledby={buttonId}
              className="faq-panel"
              id={panelId}
              role="region"
            >
              <div className="faq-panel__inner">
                <p className="faq-answer">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
