/** Bewust ruim: de echte controle is de bevestigingsmail. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.length <= 254 && EMAIL_PATTERN.test(trimmed);
}

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}
