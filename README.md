# KeaCommerce

## Database

To start the database, run the docker container with this command:

```shell
docker compose up -d
```

If you would like to connect to the database, use this command:

```shell
docker exec -it kea-comm-postgres-db psql -U myuser -d kea-comm-db
```

Then normal SQL commands can be run, for example:
```sql
SELECT * FROM products;
```