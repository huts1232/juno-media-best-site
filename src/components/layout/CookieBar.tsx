"use client";

import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

type CookieCopy = {
  message: string;
  rejectLabel: string;
  acceptLabel: string;
};

type CookieBarProps = {
  copy: CookieCopy;
};

export function CookieBar({ copy }: CookieBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("juno-cookie-consent")) return;

    const timeout = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(timeout);
  }, []);

  const updateConsent = (value: "denied" | "granted") => {
    window.localStorage.setItem("juno-cookie-consent", value);
    window.gtag?.("consent", "update", {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[100] rounded-card border border-hairline bg-page-alt p-4 shadow-card md:left-auto md:max-w-md">
      <p className="text-sm text-copy-muted">{copy.message}</p>
      <div className="mt-4 flex gap-3">
        <button className="rounded-full border border-hairline px-4 py-2 text-sm" onClick={() => updateConsent("denied")}>
          {copy.rejectLabel}
        </button>
        <MagneticButton className="px-4 py-2" onClick={() => updateConsent("granted")}>
          {copy.acceptLabel}
        </MagneticButton>
      </div>
    </div>
  );
}
