const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])
//functions

// function getPeople(db = connection){
//   return db('people').select()
// }

module.exports = {

}