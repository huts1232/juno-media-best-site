-- Leads uit de AgentConfigurator. De site schrijft met de anon key, dus RLS
-- staat aan en er is alleen een insert-policy: anon mag toevoegen, niet lezen.
create table if not exists public.agent_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  branche text not null,
  taak text not null,
  volume integer not null,
  created_at timestamptz not null default now()
);

alter table public.agent_leads enable row level security;

drop policy if exists "agent_leads_anon_insert" on public.agent_leads;

create policy "agent_leads_anon_insert"
  on public.agent_leads
  for insert
  to anon
  with check (
    char_length(email) between 5 and 254
    and position('@' in email) > 1
    and volume between 10 and 500
    and char_length(branche) between 1 and 64
    and char_length(taak) between 1 and 64
  );
