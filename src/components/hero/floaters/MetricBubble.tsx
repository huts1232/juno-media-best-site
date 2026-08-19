/**
 * Hero-floater: rond vlak in accentkleur met een groot percentage en twee
 * regels label. Inline SVG, 200x200.
 */
export function MetricBubble() {
  return (
    <svg viewBox="0 0 200 200" focusable="false" aria-hidden="true">
      <circle cx="100" cy="100" r="100" fill="var(--color-accent)" />
      <text x="100" y="98" textAnchor="middle" className="hf-metric">
        98%
      </text>
      <text x="100" y="126" textAnchor="middle" className="hf-metric-label">
        client retention
      </text>
      <text x="100" y="146" textAnchor="middle" className="hf-metric-label">
        sinds 2019
      </text>
    </svg>
  );
}
