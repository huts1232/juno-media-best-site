/**
 * Rekenmodel achter de AgentConfigurator. Puur, deterministisch en zonder
 * netwerk: dezelfde invoer levert altijd dezelfde uitkomst, ook offline.
 * De invoerwaarden per taak staan in src/content/agency.ts.
 */

export const WEEKS_PER_MONTH = 4.33;

/** Vaste bouwsom voor een eerste agent, exclusief btw. */
const BUILD_BASE = 6500;
/** Extra bouwsom per 100 handelingen per week (meer koppelingen en randgevallen). */
const BUILD_PER_HUNDRED = 1600;
/** Bandbreedte rond de indicatie. */
const BUILD_RANGE = 0.18;
const BUILD_ROUNDING = 500;

export const VOLUME_MIN = 10;
export const VOLUME_MAX = 500;

export type AgentModelInput = {
  /** Minuten die één handeling nu handmatig kost. */
  manualMinutes: number;
  /** Minuten die dezelfde handeling met agent kost, inclusief controle. */
  autoMinutes: number;
  /** Aandeel handelingen dat de agent volledig afhandelt, 0 tot 1. */
  automationShare: number;
  /** Complexiteitsfactor van de taak voor de bouwindicatie. */
  buildFactor: number;
  /** Handelingen per week. */
  volumePerWeek: number;
};

export type AgentModelResult = {
  handlingsPerMonth: number;
  manualHoursPerMonth: number;
  agentHoursPerMonth: number;
  hoursSavedPerMonth: number;
  leadTimeBeforeMinutes: number;
  leadTimeAfterMinutes: number;
  investmentLow: number;
  investmentHigh: number;
};

export function clampVolume(value: number): number {
  if (!Number.isFinite(value)) return VOLUME_MIN;
  return Math.min(VOLUME_MAX, Math.max(VOLUME_MIN, Math.round(value)));
}

function roundTo(value: number, step: number): number {
  return Math.round(value / step) * step;
}

export function calculateAgentPlan(input: AgentModelInput): AgentModelResult {
  const volume = clampVolume(input.volumePerWeek);
  const share = Math.min(1, Math.max(0, input.automationShare));
  const handlingsPerMonth = volume * WEEKS_PER_MONTH;

  // Wat de agent niet afhandelt blijft handwerk; dat telt dus gewoon mee.
  const leadTimeAfterMinutes = share * input.autoMinutes + (1 - share) * input.manualMinutes;

  const manualHoursPerMonth = (handlingsPerMonth * input.manualMinutes) / 60;
  const agentHoursPerMonth = (handlingsPerMonth * leadTimeAfterMinutes) / 60;

  const investment = (BUILD_BASE + (volume / 100) * BUILD_PER_HUNDRED) * input.buildFactor;

  return {
    handlingsPerMonth,
    manualHoursPerMonth,
    agentHoursPerMonth,
    hoursSavedPerMonth: manualHoursPerMonth - agentHoursPerMonth,
    leadTimeBeforeMinutes: input.manualMinutes,
    leadTimeAfterMinutes,
    investmentLow: roundTo(investment * (1 - BUILD_RANGE), BUILD_ROUNDING),
    investmentHigh: roundTo(investment * (1 + BUILD_RANGE), BUILD_ROUNDING),
  };
}
