-- Create a table for contact submissions
create table public.contact_submissions (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text not null,
  company text null,
  email text not null,
  phone text null,
  message text not null,
  constraint contact_submissions_pkey primary key (id)
);

-- Establish Row Level Security (RLS) policies
-- Enable RLS
alter table public.contact_submissions enable row level security;

-- Policy to allow anonymous users (the public form) to INSERT data
create policy "Enable insert for everyone" 
on public.contact_submissions 
for insert 
to anon 
with check (true);

-- Policy to allow only authenticated service_role (or admins) to SELECT data
-- This prevents public users from reading everyone's submissions via the API
create policy "Enable read access for service_role only" 
on public.contact_submissions 
for select 
to service_role 
using (true);
