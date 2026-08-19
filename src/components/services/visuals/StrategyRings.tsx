/**
 * Concentrische ringen met drie gekleurde segmenten, een label in het midden en
 * drie woorden op een cirkelpad. De ringen roteren traag via CSS; de segmenten
 * tekenen zich via stroke-dashoffset zodra de kaart in beeld komt (GSAP,
 * [data-strategy-segment]).
 */
const CENTER = { x: 200, y: 150 } as const;

const SEGMENTS = [
  { from: -96, to: 4, stroke: "var(--color-accent)" },
  { from: 24, to: 124, stroke: "var(--color-accent-soft)" },
  { from: 144, to: 244, stroke: "var(--color-ink)" },
] as const;

/** Op een bovenboog, niet op een volledige cirkel: op de onderste helft van
 *  een cirkelpad staat textPath ondersteboven. */
const ORBIT_WORDS = [
  { word: "Audience", offset: "12%" },
  { word: "Offer", offset: "50%" },
  { word: "Narrative", offset: "88%" },
] as const;

function polar(radius: number, degrees: number) {
  const radians = (degrees * Math.PI) / 180;
  return {
    x: CENTER.x + radius * Math.cos(radians),
    y: CENTER.y + radius * Math.sin(radians),
  };
}

function arc(radius: number, from: number, to: number) {
  const start = polar(radius, from);
  const end = polar(radius, to);
  const largeArc = Math.abs(to - from) > 180 ? 1 : 0;
  return `M${start.x.toFixed(2)} ${start.y.toFixed(2)} A${radius} ${radius} 0 ${largeArc} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

export function StrategyRings() {
  return (
    <svg className="sv-strategy" viewBox="0 0 400 300" aria-hidden="true" focusable="false">
      <defs>
        <path id="sv-strategy-orbit" d={arc(135, 188, 352)} fill="none" />
      </defs>

      {[110, 82, 54].map((radius) => (
        <circle
          key={radius}
          cx={CENTER.x}
          cy={CENTER.y}
          r={radius}
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1.5"
        />
      ))}

      <g className="sv-strategy__spin">
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="96"
          fill="none"
          stroke="#ffffff2e"
          strokeWidth="1.5"
          strokeDasharray="2 10"
        />
        <circle cx={CENTER.x} cy={CENTER.y - 96} r="4" fill="var(--color-accent)" />
      </g>

      {SEGMENTS.map((segment) => (
        <path
          key={segment.from}
          data-strategy-segment
          d={arc(110, segment.from, segment.to)}
          pathLength="1"
          fill="none"
          stroke={segment.stroke}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="1"
          strokeDashoffset="1"
        />
      ))}

      <text x={CENTER.x} y={CENTER.y - 4} textAnchor="middle" className="sv-strategy__label">
        Positioning
      </text>
      <text x={CENTER.x} y={CENTER.y + 18} textAnchor="middle" className="sv-strategy__sub">
        3 lagen
      </text>

      <text className="sv-strategy__orbit" textAnchor="middle">
        {ORBIT_WORDS.map(({ word, offset }) => (
          <textPath key={word} href="#sv-strategy-orbit" startOffset={offset}>
            {word}
          </textPath>
        ))}
      </text>
    </svg>
  );
}
