rm db.log
psql -U laravel -d laravel -X -a -L db.log -f sql/index.sql