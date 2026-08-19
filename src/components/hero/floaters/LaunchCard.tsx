/**
 * Hero-floater: kleine donkere kaart die over de RevenueCard heen valt.
 * Pill met telwaarde, rond icoon en vier lage staven. Inline SVG, 180x180.
 */
const BARS = [20, 34, 26, 42] as const;
const BASELINE = 150;

export function LaunchCard() {
  return (
    <svg viewBox="0 0 180 180" focusable="false" aria-hidden="true">
      <rect
        x="0.75"
        y="0.75"
        width="178.5"
        height="178.5"
        rx="18"
        fill="var(--color-bg-alt)"
        stroke="var(--color-line)"
        strokeWidth="1.5"
      />

      <rect x="16" y="18" width="94" height="28" rx="14" fill="#ffffff14" stroke="var(--color-line)" />
      <text x="30" y="36" className="hf-pill">
        24 live
      </text>

      <circle cx="146" cy="32" r="16" fill="var(--color-accent-soft)" />
      <path
        d="M146 40V24m0 0-6 6m6-6 6 6"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {BARS.map((height, index) => (
        <rect
          key={height}
          x={20 + index * 38}
          y={BASELINE - height}
          width="24"
          height={height}
          rx="7"
          fill={index === BARS.length - 1 ? "var(--color-accent)" : "#ffffff1f"}
        />
      ))}

      <text x="20" y="172" className="hf-axis">
        launches / kw
      </text>
    </svg>
  );
}
