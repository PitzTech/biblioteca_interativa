const tableName = 'messages'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.timestamp('sent_date').notNullable();
   table.string('message', 255).notNullable();
   table.timestamp('created_at').defaultTo(knex.fn.now())
   table.integer('user_id').notNullable().references('id').inTable('users')
   table.integer('chat_id').notNullable().references('id').inTable('chats')
})

exports.down = knex => knex.schema.dropTable(tableName)
