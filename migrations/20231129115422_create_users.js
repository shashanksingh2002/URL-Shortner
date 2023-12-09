/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('users', async (table) => {
    table.uuid('id').notNullable().index().primary();
    table.string('first_name').notNullable().index();
    table.string('last_name').notNullable().index();
    table.string('email').notNullable().index();
    table.string('password').notNullable().index();
    table.string('ph_number').notNullable().index();
    table.unique(['email']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async function(knex) {
  await knex.schema.dropTable('users');
};
