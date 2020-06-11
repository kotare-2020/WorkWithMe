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
  .join('topics', 'topics.id', 'students.id'
  //'students.id AS student_id')
}


module.exports = {
  getStudents: getStudents
}