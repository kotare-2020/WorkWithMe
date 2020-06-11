const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])
//functions


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function shuffle(arr) {
    for (let initialPlace = arr.length - 1; initialPlace > 0; initialPlace--) {
        const randomPlace = Math.floor(Math.random() * (initialPlace + 1));
        [arr[initialPlace], arr[randomPlace]] = [arr[randomPlace], arr[initialPlace]]
    }
    return a
}





module.exports = {

}