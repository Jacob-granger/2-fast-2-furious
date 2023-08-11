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

router.get('/test/snail/:id', async (req, res, next) => {
  try{
    const id = Number(req.params.id)
    const snail = await db.getSnail(id)

    const snailData = {
      id: snail.id,
      name: snail.name,
      topSpeed: snail.top_speed,
      engineSize: snail.engine_size,
      coolFactor: snail.cool_factor,
      innovation: snail.innovation,
      year: snail.year_launched,
      winCount: snail.winCount ?? 0,
    }

    res.render('snail-page', snailData)
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

router.post('/snail/race', async (req, res, next) => {
  const { racer1, racer1Attribute, racer2, racer2Attribute } = req.body

  try {
    const val1 = await db.getSnailAttribute(
      Number(req.body.racer1),
      req.body.racer1Attribute
    )
    console.log(val1)
    const val2 = await db.getSnailAttribute(
      Number(req.body.racer2),
      req.body.racer2Attribute
    )
    console.log(val2)
  } catch (e) {
    next(e)
  }
  // checkForWinner(vale1[0][racer1Attribute], racer2Attribute)
})

router.get('/test/snail/race-result', (req, res) => {
  res.render('race-result')
})

function checkForWinner(val1, val2) {
  if (val1 > val2) {
    return 'Player 1 wins'
  } else {
    return 'Player 2 wins'
  }
}

export default router
