/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('races', table => {
    table.increments('id').primary()
    table.text('race_name')
    table.integer('winner_id')
  })

}

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('races')

}
