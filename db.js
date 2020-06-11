const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

//functions

 function getStudents(db = connection){
   return db('students').select()
 }

function getStudentTopics (id, db = connection) {
  return db('students')
  .join('topics', 'topics.id', 'students.fave', 'students.least_fave')
  .where({'students.id': id}).first()
}


module.exports = {
  getStudents: getStudents,
  getStudentTopics
}