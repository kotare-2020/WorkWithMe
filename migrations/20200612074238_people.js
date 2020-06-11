
exports.up = function(knex) {
  return knex.schema.createTable('students', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.integer('fave')
    table.integer('least_fave')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('students')
};
