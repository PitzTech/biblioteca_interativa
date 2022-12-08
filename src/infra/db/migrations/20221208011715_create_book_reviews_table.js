const tableName = 'book_reviews'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()

   table.uuid('review_id').notNullable().references('id').inTable('reviews')
   table.uuid('book_id').notNullable().references('id').inTable('books')

})

exports.down = knex => knex.schema.dropTable(tableName)
