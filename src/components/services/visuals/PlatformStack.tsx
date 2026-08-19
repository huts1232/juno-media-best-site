/**
 * Gestapelde device-mockups. De lagen krijgen y-parallax met scrub; de
 * achterste laag beweegt trager (GSAP leest data-depth op
 * [data-platform-layer]).
 */
const LAYERS = [
  { key: "back", depth: 0.35, x: 96, y: 12, w: 208, h: 132, fill: "#161616" },
  { key: "mid", depth: 0.65, x: 58, y: 62, w: 240, h: 152, fill: "#1c1c1c" },
  { key: "front", depth: 1, x: 20, y: 118, w: 272, h: 168, fill: "var(--color-bg-alt)" },
] as const;

export function PlatformStack() {
  return (
    <svg className="sv-platforms" viewBox="0 0 400 300" aria-hidden="true" focusable="false">
      {LAYERS.map((layer) => (
        <g key={layer.key} data-platform-layer data-depth={layer.depth}>
          <rect
            x={layer.x}
            y={layer.y}
            width={layer.w}
            height={layer.h}
            rx="14"
            fill={layer.fill}
            stroke="var(--color-line)"
            strokeWidth="1.5"
          />
          <rect x={layer.x + 16} y={layer.y + 18} width={layer.w * 0.42} height="8" rx="4" fill="#ffffff2e" />
          <rect x={layer.x + 16} y={layer.y + 36} width={layer.w * 0.68} height="8" rx="4" fill="#ffffff1a" />
          {layer.key === "front" ? (
            <>
              <rect x={layer.x + 16} y={layer.y + 62} width="72" height="26" rx="13" fill="var(--color-accent)" />
              <rect x={layer.x + 100} y={layer.y + 62} width="56" height="26" rx="13" fill="#ffffff14" />
              <rect x={layer.x + 16} y={layer.y + 104} width={layer.w - 32} height="42" rx="10" fill="#ffffff0f" />
            </>
          ) : null}
        </g>
      ))}
      <circle cx="330" cy="72" r="42" fill="var(--color-accent-soft)" opacity=".18" />
    </svg>
  );
}
