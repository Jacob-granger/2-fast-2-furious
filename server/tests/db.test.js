import { test, expect, beforeEach, beforeAll, afterAll } from 'vitest'

import * as db from '../db/db.js'

let testDb = null

beforeAll(async () => {
  await db.connection.migrate.latest()
})


beforeEach(async () => {
  await db.connection.seed.run()
})

afterAll(async () => {
  await db.connection.destroy()
})

