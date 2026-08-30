/**
 * Hero-floater: prijsanker. Groot bedrag in het merkblauw met twee regels
 * bijschrift. Het kaartchroom staat op .hero-floater__inner. Inline SVG,
 * 200x140 viewBox.
 */
export function MetricBubble() {
  return (
    <svg viewBox="0 0 200 140" focusable="false" aria-hidden="true">
      <text x="100" y="66" textAnchor="middle" className="hf-metric hf-accent">
        €950
      </text>
      <text x="100" y="96" textAnchor="middle" className="hf-metric-label">
        vanaf
      </text>
      <text x="100" y="116" textAnchor="middle" className="hf-metric-label">
        in één week live
      </text>
    </svg>
  );
}
