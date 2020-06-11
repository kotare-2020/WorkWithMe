
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
      // Inserts seed entries
      return knex('topics').insert([
        {id: 1, topic: 'html & css'},
        {id: 2, topic: 'routes'},
        {id: 3, topic: 'databases'},
        {id: 4, topic: 'git'},
        {id: 5, topic: 'javaScript'},
        {id: 6, topic: 'testing'}
      ]);
    });
};
