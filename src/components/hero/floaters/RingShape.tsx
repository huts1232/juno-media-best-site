/**
 * Hero-decor: drie concentrische bogen. Onderdeel van het arc-motief linksonder
 * (zie ArcMotif); de kleur komt van de wrapper via currentColor. Inline SVG,
 * 145x145 met middelpunt 72.5.
 */
const ARCS = [
  { r: 70, dash: undefined },
  { r: 55, dash: "2 12" },
  { r: 40, dash: undefined },
] as const;

/** Boog van linksonder (135°) naar rechtsboven (45°), met de klok mee. */
function arcPath(r: number) {
  const offset = r * Math.SQRT1_2;
  const start = `${(72.5 - offset).toFixed(1)} ${(72.5 + offset).toFixed(1)}`;
  const end = `${(72.5 + offset).toFixed(1)} ${(72.5 - offset).toFixed(1)}`;
  return `M${start}A${r} ${r} 0 0 1 ${end}`;
}

export function RingShape() {
  return (
    <svg viewBox="0 0 145 145" focusable="false" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        {ARCS.map(({ r, dash }) => (
          <path key={r} d={arcPath(r)} strokeDasharray={dash} />
        ))}
      </g>
    </svg>
  );
}
