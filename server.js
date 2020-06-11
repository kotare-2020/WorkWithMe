const express = require('express')
const hbs = require('express-handlebars')

// Placeholder for whatever you want to call it
const dbFunctions = require('./db')

const routes = require('./routes')

const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

server.use('/', routes)





module.exports = server