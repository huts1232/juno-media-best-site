/**
 * Hero-floater rechtsonder: prijsanker. Groot bedrag in het donkere merkblauw
 * met één regel bijschrift. Dezelfde viewBox-breedte als RevenueCard (240), dus
 * ook hier komt de tekst op de px-maten van de DOM-kaarten uit. Het kaartchroom
 * staat op .hero-floater__fade.
 */
export function MetricBubble() {
  return (
    <svg viewBox="0 0 240 106" focusable="false" aria-hidden="true">
      <text x="120" y="56" textAnchor="middle" className="hf-metric">
        €950
      </text>
      <text x="120" y="90" textAnchor="middle" className="hf-metric-label">
        vanaf · in één week live
      </text>
    </svg>
  );
}
