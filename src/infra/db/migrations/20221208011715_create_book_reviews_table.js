const tableName = 'book_reviews'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()

   table.integer('review_id').notNullable().references('id').inTable('reviews')
   table.integer('book_id').notNullable().references('id').inTable('books')

})

exports.down = knex => knex.schema.dropTable(tableName)
