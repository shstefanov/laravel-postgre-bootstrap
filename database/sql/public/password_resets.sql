create table public.password_resets (
  email       varchar(32),
  token       varchar(256),
  created_at  date
);

create index password_resets_email on public.password_resets (email);
create index password_resets_token on public.password_resets (token);
