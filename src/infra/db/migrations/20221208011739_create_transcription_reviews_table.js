const tableName = 'transcription_reviews'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()

   table.uuid('review_id').notNullable().references('id').inTable('reviews')
   table.uuid('transcription_by').notNullable().references('id').inTable('transcription')

})

exports.down = knex => knex.schema.dropTable(tableName)
