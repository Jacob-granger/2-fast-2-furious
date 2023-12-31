import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getAllSnails() {
  return connection('snails').select()
}

export async function getSnail(id) {
  return connection('snails')
    .leftJoin('races', 'snails.id', 'races.winner_id')
    .select('*', 'snails.id AS id')
    .count('* as winCount')
    .groupBy('snails.id')
    .where('snails.id', id)
    .first()
}

// export function getAllRacers() {
//   return connection('snails').select('name')
// }

export function getSnailAttribute(id, attribute) {
  return connection('snails').where('id', id).select(attribute)
}

export function addRaceWinner(raceWinner) {
  return connection('races').insert(raceWinner)
}
