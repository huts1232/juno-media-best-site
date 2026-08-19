/**
 * Hero-floater: donkere kaart met lijngrafiek en groei-badge.
 * Volledig inline SVG met een 340x200 viewBox, zodat de kaart proportioneel
 * meeschaalt met de vw-breedte die .hero-floater zet. Decoratief (aria-hidden
 * staat op de container in Hero).
 */
const POINTS = [
  [24, 148],
  [97, 126],
  [170, 134],
  [243, 104],
  [316, 86],
] as const;

const LINE = POINTS.map(([x, y]) => `${x},${y}`).join(" ");
const AREA = `M${LINE.replace(/ /g, "L")}L316,176L24,176Z`;

export function RevenueCard() {
  return (
    <svg viewBox="0 0 340 200" focusable="false" aria-hidden="true">
      <defs>
        <linearGradient id="hf-revenue-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect
        x="0.75"
        y="0.75"
        width="338.5"
        height="198.5"
        rx="20"
        fill="var(--color-bg-alt)"
        stroke="var(--color-line)"
        strokeWidth="1.5"
      />

      <text x="24" y="36" className="hf-label">
        Revenue
      </text>
      <text x="24" y="70" className="hf-value">
        €128,4k
      </text>

      <path d={AREA} fill="url(#hf-revenue-fill)" />
      <polyline
        points={LINE}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {POINTS.map(([x, y], index) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={index === POINTS.length - 1 ? 5.5 : 3.5}
          fill="var(--color-accent)"
          stroke={index === POINTS.length - 1 ? "var(--color-ink)" : "none"}
          strokeWidth={index === POINTS.length - 1 ? 2.5 : 0}
        />
      ))}

      <rect x="236" y="150" width="80" height="30" rx="15" fill="var(--color-accent)" />
      <text x="276" y="170" textAnchor="middle" className="hf-badge">
        +58%
      </text>
    </svg>
  );
}
