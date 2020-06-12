
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Aisyah', image: '/images/aisyah.jpg', fave: 5, least_fave: 3},
        {id: 2, name: 'Andy', image: '/images/andy.jpg', fave: 5, least_fave: 3},
        {id: 3, name: 'Ben I', image: '/images/beni.jpg', fave: 6, least_fave: 4},
        {id: 4, name: 'Ben M', image: '/images/benm.jpg', fave: 2, least_fave: 5},
        {id: 5, name: 'Derek', image: '/images/derek.jpg', fave: 1, least_fave: 3},
        {id: 6, name: 'Fai', image: '/images/fai.jpg', fave: 3, least_fave: 6},
        {id: 7, name: 'George', image: '/images/george.jpg', fave: 5, least_fave: 6},
        {id: 8, name: 'Jayden', image: '/images/jayden.jpg', fave: 2, least_fave: 4},
        {id: 9, name: 'Jefferson', image: '/images/jefferson.jpg', fave: 2, least_fave: 4},
        {id: 10, name: 'Joe', image: '/images/joe.jpg', fave: 2, least_fave: 4},
        {id: 11, name: 'Marta', image: '/images/marta.jpg', fave: 1, least_fave: 4},
        {id: 12, name: 'Nick', image: '/images/nick.jpg', fave: 5, least_fave: 4},
        {id: 13, name: 'Rich', image: '/images/rich.jpg', fave: 4, least_fave: 6},
        {id: 14, name: 'Rose', image: '/images/rose.jpg', fave: 3, least_fave: 2},
        {id: 15, name: 'Rubin', image: '/images/rubin.jpg', fave: 1, least_fave: 3},
      ]);
    });
};
