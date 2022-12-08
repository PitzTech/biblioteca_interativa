const tableName = 'chats'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.smallint('grade').notNullable()
   table.string('theme', 100).notNullable()

   table.integer('staff_user_id').notNullable().references('id').inTable('users')
   table.integer('customer_user_id').notNullable().references('id').inTable('users')
})

exports.down = knex => knex.schema.dropTable(tableName)

