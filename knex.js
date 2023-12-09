const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig.dbConfig);

module.exports = knex;
