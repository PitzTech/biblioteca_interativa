const tableName = 'events'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.timestamp('start_data').notNullable();
   table.timestamp('end_data').notNullable();
})

exports.down = knex => knex.schema.dropTable(tableName)
