import { test, expect, it, describe, beforeEach, beforeAll, afterAll } from 'vitest'

import * as db from '../db/db.js'
import { getSnail } from '../db/db.js'


beforeAll(async () => {
  await db.connection.migrate.latest()
})


beforeEach(async () => {
  await db.connection.seed.run()
})

afterAll(async () => {
  await db.connection.destroy()
})

describe('getAllSnails', () => {
  it('Should return all snails', async () => {
    const res = await db.getAllSnails()
    expect(res.length).toBe(9)
  })
})

describe('getSnail', () => {
  it('Should return a singular snail', async () => {
    const res = await getSnail(4)
    expect(res.id).toBe(4)
  })

  it('Should return all snail specifications', async () => {
    const res = await getSnail(9)
    expect(res).toStrictEqual({
        id: 9,
        image: 'https://images.unsplash.com/photo-1621773087376-f0c4925a2c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        top_speed: 23,
        engine_size: 4,
        cool_factor: 95,
        innovation: 92,
        year_launched: 1993,
        name: 'Escar-Rocket Express',
        race_name: 'F9',
        winner_id: 9,
        location: 'Dubai',
        winCount: 1
      }
    )
  })

  it('Should show the races won for the specified snail', async () => {
    const skidmark = await getSnail(2)
    expect(skidmark.winCount).toBe(2)
  })

})
