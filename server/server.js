import * as Path from 'node:path'
import * as URL from 'node:url'

import express from 'express'
import handlebars from 'express-handlebars'

import userRoutes from './routes/users.js'

const server = express()

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)
const publicDir = Path.join(__dirname, 'public')

// Middleware
server.engine('hbs', handlebars.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.join(__dirname, 'views'))
server.use(express.urlencoded({ extended: true }))
server.use(express.static(publicDir))
server.use((err, req, res, next) => {
  res.status(500).send(`An error has occurred: ${err}`)
})

// Routes
server.use('/', userRoutes)

export default server
