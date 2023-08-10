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

router.get('/test/home', (req, res) => {
  res.render('home')
})

router.get('/test/snails', (req, res) => {
  res.render('snails')
})

router.get('/test/snail', (req, res) => {
  res.render('snail-page')
})

router.get('/test/snail/edit', (req, res) => {
  res.render('edit-snail')
})

router.get('/test/snail/new', (req, res) => {
  res.render('snail-new')
})

router.get('/test/snail/race', (req, res) => {
  res.render('race')
})

router.get('/test/snail/race-result', (req, res) => {
  res.render('race-result')
})



export default router
