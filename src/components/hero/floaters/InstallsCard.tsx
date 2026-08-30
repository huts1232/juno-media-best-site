/**
 * Hero-floater: dalende doorlooptijd als staafdiagram. De laatste twee staven
 * staan in het merkblauw; de rest is een neutrale tint. Het kaartchroom staat
 * op .hero-floater__inner. Inline SVG, 320x210 viewBox.
 */
const HEIGHTS = [82, 70, 58, 46, 38, 28, 22] as const;

const BASELINE = 176;
const BAR_W = 22;
const STEP = 41;
const ORIGIN_X = 26;
const ACCENT_FROM = HEIGHTS.length - 2;

export function InstallsCard() {
  return (
    <svg viewBox="0 0 320 210" focusable="false" aria-hidden="true">
      <text x="24" y="36" className="hf-label">
        Doorlooptijd
      </text>
      <text x="24" y="76" className="hf-value hf-accent">
        −60%
      </text>

      {HEIGHTS.map((height, index) => (
        <rect
          key={`bar-${index}`}
          x={ORIGIN_X + index * STEP}
          y={BASELINE - height}
          width={BAR_W}
          height={height}
          rx="8"
          fill={index >= ACCENT_FROM ? "var(--brand-dark)" : "var(--color-line-dark)"}
        />
      ))}

      <text x="26" y="200" className="hf-axis">
        per project, laatste 7 sprints
      </text>
    </svg>
  );
}
