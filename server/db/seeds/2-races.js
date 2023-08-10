/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('races').insert([
    {
      id: 1,
      race_name: 'Tokyo Drift',
      location: 'Tokyo',
      winner_id: 3,
    },
    {
      id: 2,
      race_name: 'Fast AND Furious',
      location: 'Dominican Republic',
      winner_id: 2,
    },
    {
      id: 3,
      race_name: 'Fast Five',
      location: 'Rio De Janeiro',
      winner_id: 3,
    },
    {
      id: 4,
      race_name: 'Fate of the Furious',
      location: 'Havana',
      winner_id: 1,
    },
    {
      id: 5,
      race_name: 'Hobson Shore',
      location: 'London',
      winner_id: 6,
    },
    {
      id: 6,
      race_name: 'F9',
      location: 'Dubai',
      winner_id: 9,
    },
    {
      id: 7,
      race_name: 'Fast X',
      location: 'Thailand',
      winner_id: 7,
    },
    {
      id: 8,
      race_name: 'Slick Snail Skidmark Showtime',
      location: 'Christchurch',
      winner_id: 2,
    },
    {
      id: 9,
      race_name: 'Snailtail Hyperdrive',
      location: 'Berlin',
      winner_id: 6,
    },
  ])
}

