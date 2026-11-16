-- Nexus Office initial schema (foundation).
-- Apply in Supabase SQL Editor after reviewing. RLS is enabled on every workspace table.
create extension if not exists pgcrypto;

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.departments (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  description text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.agents (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  department_id uuid references public.departments(id) on delete set null,
  name text not null,
  role text not null,
  instructions text not null default '',
  status text not null default 'idle' check (status in ('idle','working','waiting','paused','error')),
  model text,
  permissions jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  title text not null,
  description text not null default '',
  status text not null default 'draft' check (status in ('draft','queued','running','review','blocked','completed','failed')),
  assigned_agent_id uuid references public.agents(id) on delete set null,
  requires_approval boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.approvals (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  task_id uuid references public.tasks(id) on delete set null,
  action_type text not null,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'pending' check (status in ('pending','approved','rejected','cancelled')),
  decided_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.agent_messages (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  sender_agent_id uuid references public.agents(id) on delete set null,
  recipient_agent_id uuid references public.agents(id) on delete set null,
  task_id uuid references public.tasks(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  actor_type text not null check (actor_type in ('founder','agent','system')),
  actor_id uuid,
  action text not null,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.organizations enable row level security;
alter table public.departments enable row level security;
alter table public.agents enable row level security;
alter table public.tasks enable row level security;
alter table public.approvals enable row level security;
alter table public.agent_messages enable row level security;
alter table public.audit_logs enable row level security;

-- No permissive policies are created here. Add membership-based policies alongside
-- the authentication/membership model before exposing these tables to client sessions.
