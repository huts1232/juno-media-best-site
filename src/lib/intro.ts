import { intro } from "@/content/agency";

export const INTRO_DONE_EVENT = "juno:intro-done";

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
