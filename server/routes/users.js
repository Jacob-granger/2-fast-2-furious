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
    res.render('snails', { snails })
  } catch (e) {
    next(e)
  }
})

router.get('/snail/race', async (req, res, next) => {
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

// stretch
// router.get('/test/snail/edit', (req, res) => {
//   res.render('snail-edit')
// })

// // stretch
// router.get('/test/snail/new', (req, res) => {
//   res.render('snail-new.hbs')
// })

router.post('/snail/race', async (req, res, next) => {
  const {
    racer1,
    racer1Attribute,
    racer2,
    racer2Attribute,
    raceName,
    raceLocation,
  } = req.body
  let player1 = {
    id: racer1,
  }
  let player2 = {
    id: racer2,
  }
  try {
    const val1 = await db.getSnailAttribute(
      Number(req.body.racer1),
      req.body.racer1Attribute
    )
    player1.value = val1[0][racer1Attribute]

    const val2 = await db.getSnailAttribute(
      Number(req.body.racer2),
      req.body.racer2Attribute
    )
    player2.value = val2[0][racer2Attribute]
    const winnerId = checkForWinner(player1, player2)
    const raceWinner = {
      race_name: raceName,
      location: raceLocation,
      winner_id: winnerId,
    }
    await db.addRaceWinner(raceWinner)
    res.redirect(`/snail/race-result/${winnerId}`)
  } catch (e) {
    next(e)
  }
})

router.get('/snail/race-result/:id', async (req, res) => {
  const id = Number(req.params.id)
  const winner = await db.getSnail(id)
  res.render('race-result', winner)
})

router.get('/snail/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const snail = await db.getSnail(id)

    const snailData = {
      id: snail.id,
      name: snail.name,
      image: snail.image,
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

function checkForWinner(player1, player2) {
  if (player1.value > player2.value) {
    return player1.id
  } else {
    return player2.id
  }
}

export default router
