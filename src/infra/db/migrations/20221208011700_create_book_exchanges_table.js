const tableName = 'book_exchanges'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()

   table.uuid('book_id').notNullable().references('id').inTable('books')
   table.uuid('owner_id').notNullable().references('id').inTable('users')
   table.uuid('receiver_id').notNullable().references('id').inTable('users')

})

exports.down = knex => knex.schema.dropTable(tableName)
