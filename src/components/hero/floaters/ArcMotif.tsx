import { CurveArrow } from "./CurveArrow";
import { RingShape } from "./RingShape";

/**
 * Eén decoratief arc-motief linksonder in de hero, achter de floaters.
 * Combineert de concentrische bogen met de pijl tot één vorm; kleur en dekking
 * staan op .hero-arc in globals.css en dalen via currentColor in beide SVG's.
 */
export function ArcMotif() {
  return (
    <div className="hero-arc">
      <RingShape />
      <span className="hero-arc__curve">
        <CurveArrow />
      </span>
    </div>
  );
}
