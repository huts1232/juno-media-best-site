/**
 * De configurator en de calculator delen één adresbalk. Beide schrijven daarom
 * alleen hun eigen sleutels en laten de rest staan.
 */
export function mergeParams(values: Record<string, string>): URL | null {
  if (typeof window === "undefined") return null;

  const url = new URL(window.location.href);
  for (const [key, value] of Object.entries(values)) {
    url.searchParams.set(key, value);
  }

  return url;
}

/** Werkt de adresbalk bij zonder navigatie en zonder scrollsprong. */
export function syncParams(values: Record<string, string>): void {
  const url = mergeParams(values);
  if (!url) return;
  url.hash = window.location.hash;
  window.history.replaceState(null, "", url);
}

/** Zelfde waarden, maar met een anker zodat een gedeelde link goed uitkomt. */
export function buildShareUrl(values: Record<string, string>, hash: string): string {
  const url = mergeParams(values);
  if (!url) return "";
  url.hash = hash;
  return url.toString();
}
