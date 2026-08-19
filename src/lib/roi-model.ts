/**
 * Rekenmodel achter de RoiCalculator. Puur en client-side: de uitkomst rekent
 * live mee zonder verzendknop en zonder netwerk. De labels en standaardwaarden
 * staan in src/content/agency.ts, de aannames staan daar ook in tekst.
 */

export const WEEKS_PER_MONTH = 4.33;
export const MONTHS_IN_CHART = 12;

/** Eenmalige bouwsom per betrokken medewerker, bovenop de basis. */
const BUILD_BASE = 7500;
const BUILD_PER_PERSON = 850;
/** Zwaardere automatisering kost meer bouwwerk. */
const BUILD_AUTOMATION_WEIGHT = 0.9;
/** Maandelijkse kosten voor hosting, modelgebruik en beheer. */
const RUN_BASE = 250;
const RUN_PER_PERSON = 35;

export type RoiInput = {
  /** Uren per week aan repetitief werk, per medewerker. */
  hoursPerWeek: number;
  /** Gemiddeld uurtarief in euro. */
  hourlyRate: number;
  /** Aantal betrokken medewerkers. */
  people: number;
  /** Geschat automatiseringspercentage, 0 tot 100. */
  automationPercent: number;
};

export type RoiResult = {
  hoursFreedPerYear: number;
  monthlySaving: number;
  yearlySaving: number;
  monthlyCost: number;
  netMonthlySaving: number;
  buildCost: number;
  /** Aantal maanden tot de investering terugverdiend is, null als dat niet gebeurt. */
  paybackMonths: number | null;
  /** Cumulatieve kosten per maand, index 0 is maand 1. */
  series: {
    without: number[];
    with: number[];
  };
  /** Maandnummer waar de lijnen elkaar kruisen, null binnen twaalf maanden niet. */
  crossingMonth: number | null;
};

export function calculateRoi(input: RoiInput): RoiResult {
  const hoursPerWeek = Math.max(0, input.hoursPerWeek);
  const hourlyRate = Math.max(0, input.hourlyRate);
  const people = Math.max(1, Math.round(input.people));
  const share = Math.min(1, Math.max(0, input.automationPercent / 100));

  const hoursFreedPerMonth = hoursPerWeek * WEEKS_PER_MONTH * people * share;
  const hoursFreedPerYear = hoursFreedPerMonth * 12;
  const monthlySaving = hoursFreedPerMonth * hourlyRate;

  const buildCost = (BUILD_BASE + people * BUILD_PER_PERSON) * (1 + share * BUILD_AUTOMATION_WEIGHT);
  const monthlyCost = RUN_BASE + people * RUN_PER_PERSON;
  const netMonthlySaving = monthlySaving - monthlyCost;

  // Beide lijnen zijn cumulatieve kosten. Zonder automatisering is dat het
  // handwerk; met automatisering de bouwsom plus het maandbedrag plus het
  // handwerk dat overblijft.
  const monthlyLabourCost = hoursPerWeek * WEEKS_PER_MONTH * people * hourlyRate;
  const without: number[] = [];
  const withAgent: number[] = [];
  let crossingMonth: number | null = null;

  for (let month = 1; month <= MONTHS_IN_CHART; month += 1) {
    const withoutTotal = monthlyLabourCost * month;
    const withTotal = buildCost + (monthlyLabourCost * (1 - share) + monthlyCost) * month;

    without.push(withoutTotal);
    withAgent.push(withTotal);

    if (crossingMonth === null && withTotal <= withoutTotal) {
      crossingMonth = month;
    }
  }

  return {
    hoursFreedPerYear,
    monthlySaving,
    yearlySaving: monthlySaving * 12,
    monthlyCost,
    netMonthlySaving,
    buildCost,
    paybackMonths: netMonthlySaving > 0 ? buildCost / netMonthlySaving : null,
    series: { without, with: withAgent },
    crossingMonth,
  };
}
