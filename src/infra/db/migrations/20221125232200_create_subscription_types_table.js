const tableName = 'subcription_types'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.integer('duration_days').notNullable();
   table.string('benefits').notNullable();
   table.smallint('allowed_loans').notNullable();
})

exports.down = knex => knex.schema.dropTable(tableName)
