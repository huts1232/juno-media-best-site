/**
 * Hero-floater: mini-versie van het flow-diagram. Drie nodes met
 * verbindingslijnen die zich tekenen (hf-draw). Het kaartchroom staat op
 * .hero-floater__inner, dus de SVG tekent alleen inhoud. Inline SVG, 260x150.
 */
const NODES = [
  { x: 20, label: "Intake" },
  { x: 99, label: "Agent" },
  { x: 178, label: "Actie" },
] as const;

const NODE_W = 62;
const NODE_H = 46;
const NODE_Y = 60;
const MID_Y = NODE_Y + NODE_H / 2;

export function FlowDiagramMini() {
  return (
    <svg viewBox="0 0 260 150" focusable="false" aria-hidden="true">
      <text x="20" y="32" className="hf-label">
        Proces in kaart
      </text>

      {NODES.slice(1).map((node, index) => {
        const from = NODES[index].x + NODE_W;
        return (
          <line
            key={`link-${node.label}`}
            className="hf-draw"
            pathLength="1"
            x1={from}
            y1={MID_Y}
            x2={node.x}
            y2={MID_Y}
            stroke="var(--brand-dark)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}

      {NODES.map((node, index) => {
        const last = index === NODES.length - 1;
        return (
          <g key={node.label}>
            <rect
              x={node.x}
              y={NODE_Y}
              width={NODE_W}
              height={NODE_H}
              rx="12"
              fill="var(--color-bg-alt)"
              stroke={last ? "var(--brand-dark)" : "var(--color-line)"}
              strokeWidth="1.5"
            />
            <text
              x={node.x + NODE_W / 2}
              y={MID_Y + 5}
              textAnchor="middle"
              className={last ? "hf-node hf-accent" : "hf-node"}
            >
              {node.label}
            </text>
          </g>
        );
      })}

      <text x="20" y="130" className="hf-axis">
        3 stappen, 1 agent
      </text>
    </svg>
  );
}
