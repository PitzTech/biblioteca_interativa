const tableName = 'events_users'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.integer('user_id').notNullable().references('id').inTable('users')
   table.integer('event_id').notNullable().references('id').inTable('events')
})

exports.down = knex => knex.schema.dropTable(tableName)
