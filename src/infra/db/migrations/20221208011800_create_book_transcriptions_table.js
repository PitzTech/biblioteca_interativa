const tableName = 'book_transcriptions'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()

   table.integer('book_id').notNullable().references('id').inTable('books')
   table.integer('transcription_id').notNullable().references('id').inTable('transcriptions')
})

exports.down = knex => knex.schema.dropTable(tableName)
