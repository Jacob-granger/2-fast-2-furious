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

router.get('/test/snails', async (req, res, next) => {
  try{
    const snails = await db.getAllSnails()
    res.render('snails', snails)
  } catch (e) {
    next(e)
  }
  
})

router.get('/test/snail/:id', async (req, res, next) => {
  try{
    const id = Number(req.params.id)
    const snail = await db.getSnail(id)
    res.render('snail-page', snail)
  } catch (e) {
    next(e)
  }
  
})

router.get('/test/snail/edit', (req, res) => {
  res.render('snail-edit')
})

router.get('/test/snail/new', (req, res) => {
  res.render('snail-new.hbs')
})

router.get('/test/snail/race', (req, res) => {
  res.render('race')
})

router.get('/test/snail/race-result', (req, res) => {
  res.render('race-result')
})



export default router
