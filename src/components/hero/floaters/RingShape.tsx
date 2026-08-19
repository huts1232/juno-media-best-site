/**
 * Hero-floater: witte cirkel met een gevulde ronde vorm links van het midden en
 * een stippellijn naar rechts. Inline SVG, 145x145.
 */
export function RingShape() {
  return (
    <svg viewBox="0 0 145 145" focusable="false" aria-hidden="true">
      <circle cx="72.5" cy="72.5" r="71" fill="var(--color-ink)" />
      <circle cx="50" cy="72.5" r="22" fill="var(--color-accent)" />
      <path
        d="M80 72.5h48"
        stroke="var(--color-bg)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="0.5 12"
      />
    </svg>
  );
}
