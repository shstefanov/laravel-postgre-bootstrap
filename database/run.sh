rm ./database/db.log
rm ./database/migrations/*
psql -U laravel -d laravel -X -a -L ./database/db.log -f ./database/sql/index.sql
php artisan migrate:generate
php artisan db:seed
