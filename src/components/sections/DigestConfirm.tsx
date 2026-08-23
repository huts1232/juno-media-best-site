"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { digest } from "@/content/agency";
import { getSupabaseClient } from "@/lib/supabase";

type ConfirmState = keyof typeof digest.confirm.heading;

/**
 * Zet `confirmed` op true via de security definer functie uit de migratie.
 * Anon heeft daardoor geen update-rechten op de tabel nodig.
 */
export function DigestConfirm() {
  const params = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<ConfirmState>("loading");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      setState("error");
      return;
    }

    let cancelled = false;

    void supabase
      .rpc("confirm_digest_subscriber", { p_token: token })
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) {
          setState("error");
          return;
        }
        setState(data === "confirmed" || data === "already" ? "success" : "invalid");
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  return (
    <>
      <p className="eyebrow">{digest.eyebrow}</p>
      <h1>{digest.confirm.heading[state]}</h1>
      <p className="lead">{digest.confirm.body[state]}</p>
      <Link className="agent-button" href="/">
        {digest.confirm.cta}
      </Link>
    </>
  );
}
