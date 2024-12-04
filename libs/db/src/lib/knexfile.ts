import type { Knex } from 'knex';
import { join } from 'node:path';

interface KnexConfig {
  [key: string]: Knex.Config;
}

const config = {
  development: {
    // Hardcoded for simplicity
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'kea-comm-db',
      user: 'myuser',
      password: 'mypassword',
    },
    migrations: {
      directory: join(__dirname, 'migrations'),
    },
    seeds: {
      directory: join(__dirname, 'seeds'),
    },
    pool: {
      min: 2,
      max: 10,
    },
    debug: true,
  },

  test: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true,
    migrations: {
      directory: join(__dirname, 'migrations'),
    },
    seeds: {
      directory: join(__dirname, 'seeds'),
    },
    pool: {
      afterCreate: (conn: any, callback: () => void) => {
        conn.run('PRAGMA foreign_keys = ON', callback);
      },
    },
    debug: true,
  },
} satisfies KnexConfig;

export default config;
