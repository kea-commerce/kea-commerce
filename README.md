<div align="center">
  <img src="apps/kea-shop/public/leafIcon.png" width="125" alt="Kea-Commerce Logo">
  <h1>Kea-Commerce</h1>
</div>

<br />

## Getting Started

Getting up and running is quick and
easy.
Install [node](https://nodejs.org/en/download/package-manager), [pnpm](https://pnpm.io/installation)
and [docker](https://www.docker.com/products/docker-desktop/) if you don't
have them already, then run the following command to make sure you are ready for development:

```shell
node --version && pnpm --version && docker --version
```

Your output should look something like this:

```shell
v23.3.0
9.14.2
Docker version 27.3.1, build ce12230
````

It also helps to have the [nx](https://nx.dev/) cli installed globally:

```shell
pnpm add -g nx
```

### Development

First, run the docker compose command to start the database:

```shell
docker compose up -d
```

Next, run these commands to get dependencies installed, database migrated and some data seeded:

```shell
pnpm install && pnpm run db:migrate && pnpm run db:seed
```

Finally, start the app with the following command:

```shell
pnpm dev
```

### Database

If you would like to connect to the database, use this command:

```shell
docker exec -it kea-comm-postgres-db psql -U myuser -d kea-comm-db
```

Then normal SQL commands can be run, for example:

```sql
SELECT *
FROM products;
```
