/**
 * Hero-floater linksboven: de AI-workforce als team. Vier overlappende avatars,
 * het aantal werknemers en een statusregel. Opgebouwd uit DOM in plaats van een
 * SVG, omdat de maatvoering in vaste px staat en niet met de kaartbreedte mag
 * meeschalen. Het kaartchroom staat op .hero-floater__fade.
 */
const AVATARS = [
  { label: "N", background: "#015C92", color: "#ffffff" },
  { label: "M", background: "#43B1D6", color: "#ffffff" },
  { label: "S", background: "#0a1b2a", color: "#ffffff" },
  { label: "+2", background: "#dbeef8", color: "#015C92" },
] as const;

export function WorkforceCard() {
  return (
    <div className="hf-card">
      <div className="hf-card__head">
        <span className="hf-card__title">Jouw workforce</span>
        <span className="hf-card__more">···</span>
      </div>

      <div className="hf-avatars">
        {AVATARS.map(({ label, background, color }) => (
          <span key={label} className="hf-avatar" style={{ background, color }}>
            {label}
          </span>
        ))}
      </div>

      <p className="hf-card__value">5 AI-werknemers</p>

      <p className="hf-card__foot">
        <span className="hf-dot" />
        Allemaal aan het werk
      </p>
    </div>
  );
}
