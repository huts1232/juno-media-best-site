-- Inschrijvingen voor de digest, met dubbele opt-in.
-- De site schrijft met de anon key, dus RLS staat aan en er is alleen een
-- insert-policy. Bevestigen loopt via een security definer functie: zo hoeft
-- anon geen update-rechten op de tabel te krijgen en kan niemand andermans
-- rijen aanpassen zonder het token te kennen.
create table if not exists public.digest_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  confirmed boolean not null default false,
  token uuid not null default gen_random_uuid(),
  created_at timestamptz not null default now(),
  confirmed_at timestamptz
);

create unique index if not exists digest_subscribers_token_key
  on public.digest_subscribers (token);

alter table public.digest_subscribers enable row level security;

drop policy if exists "digest_subscribers_anon_insert" on public.digest_subscribers;

create policy "digest_subscribers_anon_insert"
  on public.digest_subscribers
  for insert
  to anon
  with check (
    char_length(email) between 5 and 254
    and position('@' in email) > 1
    and confirmed = false
  );

create or replace function public.confirm_digest_subscriber(p_token uuid)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_confirmed boolean;
begin
  select confirmed into v_confirmed
  from public.digest_subscribers
  where token = p_token;

  if v_confirmed is null then
    return 'invalid';
  end if;

  if v_confirmed then
    return 'already';
  end if;

  update public.digest_subscribers
  set confirmed = true, confirmed_at = now()
  where token = p_token;

  return 'confirmed';
end;
$$;

revoke all on function public.confirm_digest_subscriber(uuid) from public;
grant execute on function public.confirm_digest_subscriber(uuid) to anon;
