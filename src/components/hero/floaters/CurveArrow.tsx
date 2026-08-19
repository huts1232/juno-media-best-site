/**
 * Hero-floater: dunne gebogen pijl. De lijn tekent zich via stroke-dasharray;
 * pathLength="1" normaliseert de lengte zodat één CSS-animatie voor beide paden
 * werkt. Inline SVG, 90x70.
 */
export function CurveArrow() {
  return (
    <svg viewBox="0 0 90 70" focusable="false" aria-hidden="true">
      <g
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path className="hf-draw" pathLength="1" d="M6 64C2 26 30 4 78 16" />
        <path className="hf-draw hf-draw--tip" pathLength="1" d="M67 5 79 16.5 65 24" />
      </g>
    </svg>
  );
}
