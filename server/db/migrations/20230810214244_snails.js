/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
  return knex.schema.createTable('snails', table => {
    table.increments('id').primary()
    table.text('image')
    table.text('name')
    table.integer('top_speed')
    table.float('engine_size')
    table.integer('cool_factor')
    table.integer('innovation')
    table.integer('year_launched')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('snails')
}
