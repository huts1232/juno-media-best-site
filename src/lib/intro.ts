import { intro } from "@/content/agency";

export const INTRO_DONE_EVENT = "juno:intro-done";

/**
 * Noodrem voor de hero: hangt de intro of crasht hij, dan start de
 * hero-timeline alsnog kort na de geplande eindtijd.
 */
const FAILSAFE_MS = intro.duration * 1000 + 400;

let done = false;

/**
 * Draait synchroon tijdens het parsen, dus voor de eerste paint: geen flits van
 * de hero bij een eerste bezoek en geen flits van de overlay bij een tweede.
 * De sessionStorage-vlag wordt pas bij afloop gezet, zodat deze check en die in
 * shouldPlayIntro() hetzelfde antwoord geven.
 */
export const introBootScript = `(function(){try{if(sessionStorage.getItem(${JSON.stringify(
  intro.storageKey,
)}))return;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;document.documentElement.setAttribute("data-intro","play")}catch(e){}})()`;

export function shouldPlayIntro(): boolean {
  if (typeof window === "undefined" || done) return false;

  try {
    if (window.sessionStorage.getItem(intro.storageKey)) return false;
  } catch {
    return false;
  }

  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function markIntroDone(): void {
  if (done) return;
  done = true;

  try {
    window.sessionStorage.setItem(intro.storageKey, "1");
  } catch {
    /* private mode: de intro draait dan opnieuw, verder geen gevolgen */
  }

  document.documentElement.removeAttribute("data-intro");
  window.dispatchEvent(new Event(INTRO_DONE_EVENT));
}

/** Roept cb aan zodra de intro klaar is, of direct als er geen intro speelt. */
export function whenIntroDone(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  if (!shouldPlayIntro()) {
    callback();
    return () => {};
  }

  let called = false;

  const cleanup = () => {
    window.clearTimeout(timer);
    window.removeEventListener(INTRO_DONE_EVENT, run);
  };

  const run = () => {
    if (called) return;
    called = true;
    cleanup();
    callback();
  };

  const timer = window.setTimeout(run, FAILSAFE_MS);
  window.addEventListener(INTRO_DONE_EVENT, run);

  return cleanup;
}
