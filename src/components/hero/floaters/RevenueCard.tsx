/**
 * Hero-floater: tijdwinst per week met een oplopende lijngrafiek.
 * Volledig inline SVG met een 340x200 viewBox, zodat de kaart proportioneel
 * meeschaalt met de vw-breedte die .hero-floater zet. Het kaartchroom (wit
 * vlak, rand, schaduw) staat op .hero-floater__inner. Decoratief; aria-hidden
 * staat op de container in Hero.
 */
const POINTS = [
  [24, 170],
  [97, 160],
  [170, 146],
  [243, 130],
  [316, 112],
] as const;

const LINE = POINTS.map(([x, y]) => `${x},${y}`).join(" ");
const AREA = `M${LINE.replace(/ /g, "L")}L316,182L24,182Z`;

export function RevenueCard() {
  return (
    <svg viewBox="0 0 340 200" focusable="false" aria-hidden="true">
      <defs>
        <linearGradient id="hf-revenue-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-dark)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--brand-dark)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <text x="24" y="38" className="hf-label">
        Tijdwinst
      </text>
      <text x="24" y="78" className="hf-value hf-accent">
        12 uur
      </text>
      <text x="24" y="102" className="hf-axis">
        per week terug
      </text>

      <path d={AREA} fill="url(#hf-revenue-fill)" />
      <polyline
        points={LINE}
        fill="none"
        stroke="var(--brand-dark)"
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
          fill="var(--brand-dark)"
          stroke={index === POINTS.length - 1 ? "#ffffff" : "none"}
          strokeWidth={index === POINTS.length - 1 ? 2.5 : 0}
        />
      ))}
    </svg>
  );
}
