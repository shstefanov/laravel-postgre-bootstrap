create table public.password_resets (
  email       varchar(32),
  token       varchar(256),
  created_at  date
);

create index on public.password_resets (email);
create index on public.password_resets (token);
