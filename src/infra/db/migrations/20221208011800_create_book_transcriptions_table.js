const tableName = 'book_transcriptions'

exports.up = knex => knex.schema.createTable(tableName, table => {
  table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()')); 

  table.uuid('book_id').notNullable().references('id').inTable('books')
  table.uuid('transcription_id').notNullable().references('id').inTable('transcriptions')
})

exports.down = knex => knex.schema.dropTable(tableName)