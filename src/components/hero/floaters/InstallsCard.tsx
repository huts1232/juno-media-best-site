/**
 * Hero-floater: donkere kaart met weekstaafdiagram. Twee staven in accentkleur
 * met een tooltip-waarde erboven. Inline SVG, 320x230 viewBox.
 */
const DAYS = ["ma", "di", "wo", "do", "vr", "za", "zo"] as const;
const HEIGHTS = [46, 62, 38, 78, 54, 96, 70] as const;
const HIGHLIGHTS = new Map<number, string>([
  [3, "1.9k"],
  [5, "2.4k"],
]);

const BASELINE = 198;
const BAR_W = 22;
const STEP = 41;
const ORIGIN_X = 26;

export function InstallsCard() {
  return (
    <svg viewBox="0 0 320 230" focusable="false" aria-hidden="true">
      <rect
        x="0.75"
        y="0.75"
        width="318.5"
        height="228.5"
        rx="20"
        fill="var(--color-bg-alt)"
        stroke="var(--color-line)"
        strokeWidth="1.5"
      />

      <text x="24" y="34" className="hf-label">
        Installs
      </text>
      <text x="24" y="66" className="hf-value">
        12.480
      </text>

      {HEIGHTS.map((height, index) => {
        const x = ORIGIN_X + index * STEP;
        const tooltip = HIGHLIGHTS.get(index);
        const y = BASELINE - height;

        return (
          <g key={DAYS[index]}>
            <rect
              x={x}
              y={y}
              width={BAR_W}
              height={height}
              rx="8"
              fill={tooltip ? "var(--color-accent)" : "#ffffff1f"}
            />
            <text x={x + BAR_W / 2} y="220" textAnchor="middle" className="hf-axis">
              {DAYS[index]}
            </text>
            {tooltip ? (
              <g>
                <rect
                  x={x + BAR_W / 2 - 21}
                  y={y - 30}
                  width="42"
                  height="22"
                  rx="11"
                  fill="var(--color-ink)"
                />
                <text
                  x={x + BAR_W / 2}
                  y={y - 15}
                  textAnchor="middle"
                  className="hf-tooltip"
                >
                  {tooltip}
                </text>
              </g>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
