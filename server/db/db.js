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

    .join('races', 'snails.id', 'races.winner_id')
    .select('image',
      'top_speed as topSpeed',
      'engine_size as engineSize',
      'cool_factor as coolFactor',
      'innovation',
      'year_launched as year',
      'name', 'snails.id AS id').count('* as winCount')
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
