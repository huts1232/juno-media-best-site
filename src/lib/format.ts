/** Weergavehelpers voor de agency-features. Nederlandse notatie, tabular-nums. */

const numberFormat = new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 0 });
const oneDecimalFormat = new Intl.NumberFormat("nl-NL", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});
const euroFormat = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function formatNumber(value: number): string {
  return numberFormat.format(Math.round(value));
}

export function formatDecimal(value: number): string {
  return oneDecimalFormat.format(value);
}

export function formatEuro(value: number): string {
  return euroFormat.format(Math.round(value));
}

export function formatEuroRange(from: number, to: number): string {
  return `${euroFormat.format(Math.round(from))} - ${euroFormat.format(Math.round(to))}`;
}

/** 15600 -> "4u 20m", 192 -> "3m 12s", 45 -> "45s". */
export function formatDuration(totalSeconds: number): string {
  const seconds = Math.max(0, Math.round(totalSeconds));

  if (seconds >= 3600) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.round((seconds % 3600) / 60);
    return minutes === 0 ? `${hours}u` : `${hours}u ${minutes}m`;
  }

  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60);
    const rest = seconds % 60;
    return rest === 0 ? `${minutes}m` : `${minutes}m ${rest}s`;
  }

  return `${seconds}s`;
}

/** Cumulatieve tussenstanden: [20m, 1u 5m, ...]. */
export function cumulativeSeconds(steps: readonly { seconds: number }[]): number[] {
  let total = 0;
  return steps.map((step) => {
    total += step.seconds;
    return total;
  });
}
