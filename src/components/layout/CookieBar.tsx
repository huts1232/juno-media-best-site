"use client";

import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const CONSENT_STORAGE_KEY = "juno-cookie-consent";
const EXIT_DURATION = 500;

type ConsentValue = "denied" | "granted";

type CookieCopy = {
  message: string;
  rejectLabel: string;
  acceptLabel: string;
  ariaLabel: string;
};

type CookieBarProps = {
  copy: CookieCopy;
};

export function CookieBar({ copy }: CookieBarProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readStoredConsent()) return;

    setMounted(true);
    const showTimeout = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(showTimeout);
  }, []);

  const updateConsent = (value: ConsentValue) => {
    storeConsent(value);
    updateGtagConsent(value);
    setVisible(false);
    window.setTimeout(() => setMounted(false), EXIT_DURATION);
  };

  if (!mounted) return null;

  return (
    <section
      aria-label={copy.ariaLabel}
      aria-live="polite"
      className="cookie-bar"
      data-visible={visible ? "true" : "false"}
    >
      <p className="cookie-bar__message">{copy.message}</p>
      <div className="cookie-bar__actions">
        <button
          className="cookie-bar__button cookie-bar__button--reject"
          type="button"
          onClick={() => updateConsent("denied")}
        >
          {copy.rejectLabel}
        </button>
        <MagneticButton
          className="cookie-bar__button cookie-bar__button--accept"
          onClick={() => updateConsent("granted")}
        >
          {copy.acceptLabel}
        </MagneticButton>
      </div>
    </section>
  );
}

function readStoredConsent() {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // Consent still updates for the current page view when storage is unavailable.
  }
}

function updateGtagConsent(value: ConsentValue) {
  window.gtag?.("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
    functionality_storage: value,
    personalization_storage: value,
    security_storage: "granted",
  });
}
