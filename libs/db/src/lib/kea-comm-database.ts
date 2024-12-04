import knex from 'knex';

import config from './knexfile';

// "singleton" instance of the database connection
// Hardcoded development config for simplicity
export const keaCommDatabase = knex(config.development);
