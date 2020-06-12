exports.up = function (knex) {
  return knex.schema.createTable("students", function (table) {
    table.increments("id").primary()
    table.string("name")
    table.string("image")
    table.integer("fave").references("topics.id")
    table.integer("least_fave").references("topics.id")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("students")
}
