import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { isValidEmail, normalizeEmail } from "@/lib/email";
import { getSupabaseClient, UNIQUE_VIOLATION } from "@/lib/supabase";

/** Maximaal vijf inschrijvingen per IP per uur. */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

/**
 * In het geheugen van de draaiende instantie. Dat is genoeg om een formulier
 * dicht te houden; het is bewust geen verdediging tegen een verdeelde aanval.
 * Bij meerdere instanties telt elke instantie zijn eigen vensters.
 */
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);

  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Oude sleutels opruimen zodat de map niet blijft groeien.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "onbekend";
  return request.headers.get("x-real-ip") ?? "onbekend";
}

export async function POST(request: Request) {
  let payload: { email?: unknown; company?: unknown };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ status: "error" }, { status: 400 });
  }

  // Honeypot: gevuld betekent bot. Netjes bevestigen, niets opslaan.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return NextResponse.json({ status: "success" });
  }

  const email = typeof payload.email === "string" ? normalizeEmail(payload.email) : "";

  if (!isValidEmail(email)) {
    return NextResponse.json({ status: "invalid" }, { status: 400 });
  }

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json({ status: "rate" }, { status: 429 });
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ status: "error" }, { status: 503 });
  }

  const token = crypto.randomUUID();

  const { error } = await supabase
    .from("digest_subscribers")
    .insert({ email, token, confirmed: false });

  if (error) {
    if (error.code === UNIQUE_VIOLATION) {
      return NextResponse.json({ status: "duplicate" });
    }
    return NextResponse.json({ status: "error" }, { status: 500 });
  }

  const confirmUrl = `${site.url.replace(/\/$/, "")}/digest/bevestigen?token=${token}`;

  // TODO: bevestigingsmail versturen zodra er een mailprovider gekoppeld is.
  // Tot die tijd staat het token in de tabel en is de link hier zichtbaar in
  // ontwikkeling, zodat de dubbele opt-in te testen is.
  if (process.env.NODE_ENV !== "production") {
    console.info(`[digest] bevestigingslink: ${confirmUrl}`);
  }

  return NextResponse.json({ status: "success" });
}
