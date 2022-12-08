const tableName = 'book_exchanges'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()

   table.integer('book_id').notNullable().references('id').inTable('books')
   table.integer('owner_id').notNullable().references('id').inTable('users')
   table.integer('receiver_id').notNullable().references('id').inTable('users')

})

exports.down = knex => knex.schema.dropTable(tableName)
