/**
 * Hero-floater rechtsboven: het autonomiepercentage van de agents. Een donut
 * met de waarde in het midden, een groei-indicator ernaast en een voetregel.
 * Net als WorkforceCard DOM-gebaseerd, met één inline SVG voor de donut; de
 * maatvoering staat in vaste px zodat de kaart bij elke breedte gelijk oogt.
 */
const VALUE = 84;
const RADIUS = 36;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const DASH = (CIRCUMFERENCE * VALUE) / 100;

export function AutonomyCard() {
  return (
    <div className="hf-card">
      <div className="hf-card__head">
        <span className="hf-card__title">Autonomie</span>
        <span className="hf-card__meta">Live</span>
      </div>

      <div className="hf-autonomy">
        <div className="hf-donut">
          <svg className="hf-donut__svg" viewBox="0 0 88 88" focusable="false" aria-hidden="true">
            <circle cx="44" cy="44" r={RADIUS} fill="none" stroke="#e8eef2" strokeWidth="10" />
            <circle
              cx="44"
              cy="44"
              r={RADIUS}
              fill="none"
              stroke="#43B1D6"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${DASH} ${CIRCUMFERENCE - DASH}`}
              transform="rotate(-90 44 44)"
            />
          </svg>
          <span className="hf-donut__value">
            {VALUE}
            <span className="hf-donut__unit">%</span>
          </span>
        </div>

        <div className="hf-trend">
          <span className="hf-trend__value">+12%</span>
          <span className="hf-trend__label">deze maand</span>
        </div>
      </div>

      <p className="hf-card__foot">Leert van iedere afgeronde taak</p>
    </div>
  );
}
