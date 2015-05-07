
create table public.users(
	id         integer PRIMARY KEY,
	username   varchar(24),
	password   varchar(64),
	email      varchar(32),
	created_at date,
	updated_at date
);