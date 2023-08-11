export async function seed(knex) {
  await knex('participants').del()
  await knex('snails').del()
  await knex('races').del()
}
