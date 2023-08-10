export async function seed(knex) {
  await knex('snails').del()
  await knex('races').del()
  await knex('participants').del()
}
