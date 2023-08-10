import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

// router.get('/', async (req, res) => {
//   try {
//     const users = await db.getUsers()
//     res.render('index', { users: users })
//   } catch (err) {
//     res.status(500).send('DATABASE ERROR: ' + err.message)
//   }
// })

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/snails', async (req, res, next) => {
  try {
    const snails = await db.getAllSnails()
    console.log(snails)
    res.render('snails', { snails })
  } catch (e) {
    next(e)
  }
})

// stretch
// router.get('/test/snail/edit', (req, res) => {
//   res.render('snail-edit')
// })

// // stretch
// router.get('/test/snail/new', (req, res) => {
//   res.render('snail-new.hbs')
// })

router.get('/test/snail/race', async (req, res, next) => {
  try {
    const racers = await db.getAllSnails()

    const viewData = {
      racers,
      attributes: [
        'top_speed',
        'engine_size',
        'cool_factor',
        'innovation',
        'year',
      ],
    }
    res.render('race', viewData)
  } catch (e) {
    next(e)
  }
})

router.post('/snail/race', async (req, res, next) => {
  const raceFormResult = req.body
  try {
    const val1 = await getSnailAttribute(
      req.body.racer1,
      req.body.racer1Attribute
    )
    const val2 = await getSnailAttribute(
      req.body.racer2,
      req.body.racer2Attribute
    )
  } catch (e) {
    next(e)
  }
})

router.get('/test/snail/race-result', (req, res) => {
  res.render('race-result')
})

router.get('/snail/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const snail = await db.getSnail(id)
    res.render('snail-page', snail)
  } catch (e) {
    next(e)
  }
})

function checkForWinner(val1, val2) {
  if (val1 > val2) {
    return 'Player 1 wins'
  } else {
    return 'Player 2 wins'
  }
}

export default router
