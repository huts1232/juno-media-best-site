"use client";

import { useRef, useState } from "react";
import { digest } from "@/content/agency";
import { isValidEmail } from "@/lib/email";

type DigestStatus = keyof typeof digest.states;

export function DigestSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<DigestStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement | null>(null);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setError(digest.errors.required);
      return;
    }

    if (!isValidEmail(email)) {
      setError(digest.errors.invalid);
      return;
    }

    setError(null);
    setStatus("loading");

    try {
      const response = await fetch("/api/digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company: honeypotRef.current?.value ?? "" }),
      });

      const data: { status?: string } = await response.json();

      switch (data.status) {
        case "success":
          setStatus("success");
          setEmail("");
          break;
        case "duplicate":
          setStatus("duplicate");
          break;
        case "rate":
          setStatus("rate");
          break;
        case "invalid":
          setStatus("idle");
          setError(digest.errors.invalid);
          break;
        default:
          setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="digest" aria-labelledby="digest-title">
      <div className="site-container digest__inner">
        <div className="digest__intro">
          <p className="eyebrow">{digest.eyebrow}</p>
          <h2 id="digest-title" className="digest__heading">
            {digest.heading}
          </h2>
          <p className="digest__body">{digest.body}</p>
        </div>

        <form className="digest__form" onSubmit={submit} noValidate>
          <div className="digest__row">
            <label className="sr-only" htmlFor="digest-email">
              {digest.label}
            </label>
            <input
              id="digest-email"
              className="agent-lead__input"
              type="email"
              name="email"
              autoComplete="email"
              placeholder={digest.placeholder}
              value={email}
              aria-invalid={error ? "true" : undefined}
              aria-describedby="digest-status"
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError(null);
              }}
            />
            <button type="submit" className="agent-button" disabled={status === "loading"}>
              {digest.cta}
            </button>
          </div>

          <div className="agent-lead__honeypot" aria-hidden="true">
            <label htmlFor="digest-company">{digest.honeypotLabel}</label>
            <input
              id="digest-company"
              ref={honeypotRef}
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <p id="digest-status" className="agent-lead__status" role="status" aria-live="polite">
            {error ?? digest.states[status]}
          </p>
          <p className="digest__footnote">{digest.footnote}</p>
        </form>
      </div>
    </section>
  );
}
