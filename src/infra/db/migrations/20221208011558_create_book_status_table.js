const tableName = 'book_status'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()

   table.integer('actual_page').notNullable()
   table.boolean('finished').notNullable().defaultTo('false')

   table.uuid('user_id').notNullable().references('id').inTable('users')
   table.uuid('book_id').notNullable().references('id').inTable('books')

})

exports.down = knex => knex.schema.dropTable(tableName)
