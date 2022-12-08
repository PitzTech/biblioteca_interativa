const tableName = 'transcription_reviews'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()

   table.integer('review_id').notNullable().references('id').inTable('reviews')
   table.integer('transcription_by').notNullable().references('id').inTable('transcriptions')

})

exports.down = knex => knex.schema.dropTable(tableName)
