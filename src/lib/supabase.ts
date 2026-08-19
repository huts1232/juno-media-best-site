import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Levert null zolang de keys niet gezet zijn. De configurator en de calculator
 * rekenen client-side door; alleen het opslaan van een e-mailadres heeft
 * Supabase nodig.
 */
export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  client ??= createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return client;
}

/** Postgres-code voor een unieke sleutel die al bestaat. */
export const UNIQUE_VIOLATION = "23505";
