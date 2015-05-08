create sequence users_seq;
create table public.users(
	id         integer PRIMARY KEY default nextval('users_seq'),
	username   varchar(24),
	password   varchar(64),
	email      varchar(32) UNIQUE,
	created_at date,
	updated_at date
);


INSERT INTO public.users (username,password,email,created_at,updated_at) 
  VALUES  ('username1', 'alalalalal', 'ajshdgjasgh@kjshkjs.dd', default, default ),
          ('username2', 'azazazazaz', 'zzzzzzz@zzzz.dd', default, default        );
