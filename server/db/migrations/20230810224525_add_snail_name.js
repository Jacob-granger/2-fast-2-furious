export function up (knex) {
  return knex.schema.alterTable('snails', table => {
    table.text('name')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable('snails', table => {
    table.dropColumn('name')
  })
}
