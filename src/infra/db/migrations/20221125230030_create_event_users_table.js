const tableName = 'events_users'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.uuid('user_id').notNullable().references('id').inTable('users')
   table.uuid('event_id').notNullable().references('id').inTable('events')
})

exports.down = knex => knex.schema.dropTable(tableName)
