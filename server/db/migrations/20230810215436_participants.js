/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
  return knex.schema.createTable('participants', table =>{
    table.integer('race_id').references('races.id')
    table.integer('snail_id').references('snails.id')
  })
  
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists('participants')
}