const tableName = 'transcriptions'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.string('language', 30).notNullable()
   table.boolean('approved').notNullable()

   table.uuid('owner_id').notNullable().references('id').inTable('users')
   table.uuid('approved_by').notNullable().references('id').inTable('users')

})

exports.down = knex => knex.schema.dropTable(tableName)
