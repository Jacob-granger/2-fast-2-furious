/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('participants').insert([
    { race_id: 1, snail_id: 3 },
    { race_id: 1, snail_id: 5 },
    { race_id: 2, snail_id:2},
    {race_id: 2, snail_id: 9},
    { race_id: 3, snail_id:3},
    {race_id: 3, snail_id: 4},
    {race_id: 4, snail_id: 1},
    {race_id: 4, snail_id: 7},
    {race_id: 5, snail_id: 6},
    {race_id: 5, snail_id: 3},
    {race_id: 6, snail_id: 9},
    {race_id: 6, snail_id: 4},
    {race_id: 7, snail_id: 6},
    {race_id: 7, snail_id: 7},
    {race_id: 8, snail_id: 2},
    {race_id: 8, snail_id: 5},
    {race_id: 9, snail_id: 6},
    {race_id: 9, snail_id: 1},

  ])
}
