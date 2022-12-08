const tableName = 'products'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.string('title', 50).notNullable()
   table.integer('value').notNullable()
   table.string('description', 250).notNullable()

})

exports.down = knex => knex.schema.dropTable(tableName)
