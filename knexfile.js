require('./envloader')();

const dbConfig = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ...(process.env.DB_SSL === 'true' && {
      ssl: {rejectUnauthorized: false},
    }),
  },
  migrations: {
    tableName: process.env.DB_MIGRATION_TABLE,
  },
};

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: dbConfig,
  production: dbConfig,
  dbConfig,
};
