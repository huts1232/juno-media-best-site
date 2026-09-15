/**
 * Hero-floater linksonder: tijdwinst per week met een oplopende lijngrafiek.
 * De viewBox is 240x150: even breed als het inhoudsvlak van de kaart bij 1440,
 * zodat de tekst hier op dezelfde px-maten uitkomt als in de DOM-kaarten
 * ernaast. Het kaartchroom staat op .hero-floater__fade. Decoratief;
 * aria-hidden staat op de container in Hero.
 */
const POINTS = [
  [6, 126],
  [63, 119],
  [120, 110],
  [177, 99],
  [234, 86],
] as const;

const LINE = POINTS.map(([x, y]) => `${x},${y}`).join(" ");
const AREA = `M${LINE.replace(/ /g, "L")}L234,140L6,140Z`;

export function RevenueCard() {
  return (
    <svg viewBox="0 0 240 150" focusable="false" aria-hidden="true">
      <text x="0" y="14" className="hf-label">
        Tijdwinst
      </text>
      <text x="0" y="46" className="hf-value">
        12 uur
      </text>
      <text x="0" y="66" className="hf-axis">
        per week terug
      </text>

      <path d={AREA} fill="#015C9214" />
      <polyline
        points={LINE}
        fill="none"
        stroke="#015C92"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {POINTS.map(([x, y], index) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={index === POINTS.length - 1 ? 5 : 3.5}
          fill="#015C92"
          stroke={index === POINTS.length - 1 ? "#ffffff" : "none"}
          strokeWidth={index === POINTS.length - 1 ? 2.5 : 0}
        />
      ))}
    </svg>
  );
}
