const tableName = 'user_subscriptions'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.boolean('active').notNullable();
   table.timestamp('start_time').notNullable();
   table.timestamp('end_time').notNullable();

   table.integer('user_id').notNullable().references('id').inTable('users')
   table.integer('subscription_type_id').notNullable().references('id').inTable('subscription_types')
})

exports.down = knex => knex.schema.dropTable(tableName)
