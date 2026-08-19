/**
 * Raster van acht icoonvakjes. De vakjes verschijnen met stagger vanuit
 * scale 0.8 (GSAP, [data-visual-tile]); welke twee de accentkleur dragen
 * wisselt elke 3s door een CSS-cyclus, dus zonder timers in JS.
 */
const GLYPHS = [
  "M4 12h16",
  "M12 4v16M4 12h16",
  "M5 17 12 7l7 10",
  "M6 6h12v12H6z",
  "M12 5a7 7 0 1 0 0 14a7 7 0 1 0 0-14",
  "M5 12h5l2-5 2 10 2-5h3",
  "M7 17V7h6a3 3 0 0 1 0 6H7",
  "M5 19 19 5M9 5h10v10",
] as const;

export function VisualTiles() {
  return (
    <div className="sv-tiles">
      {GLYPHS.map((glyph, index) => (
        <span
          key={glyph}
          data-visual-tile
          className="sv-tiles__tile"
          style={{ animationDelay: `${-index * 1.5}s` }}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d={glyph}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
