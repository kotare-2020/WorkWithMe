const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

//functions

 function getStudents(db = connection){
   return db('students').select()
   .then(student=>{
     return shuffle(student)
   })
 }

function shuffle(arr) {
    for (let initialPlace = arr.length - 1; initialPlace > 0; initialPlace--) {
        const randomPlace = Math.floor(Math.random() * (initialPlace + 1));
        [arr[initialPlace], arr[randomPlace]] = [arr[randomPlace], arr[initialPlace]]
    }
    return arr
}

function getFaveTopic (id, db = connection) {
  return db('students')
  .join('topics', 'topics.id', 'students.fave')
  .where({'students.id': id}).first().select('topics.topic as fave_topic', '*')
}

function getLeastFave (id, db = connection) {
  return db('students')
  .join('topics', 'topics.id', 'students.least_fave')
  .where({'students.id': id}).first().select('topics.topic as least_topic', '*')
}

module.exports = {
  getStudents: getStudents,
  getFaveTopic: getFaveTopic, 
  shuffle: shuffle,
  getLeastFave: getLeastFave
}
 