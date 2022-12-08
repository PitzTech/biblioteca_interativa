const tableName = 'book_reviews'

exports.up = knex => knex.schema.createTable(tableName, table => {
  table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()')); 

  table.uuid('review_id').notNullable().references('id').inTable('reviews')
  table.uuid('book_id').notNullable().references('id').inTable('books')

})

exports.down = knex => knex.schema.dropTable(tableName)