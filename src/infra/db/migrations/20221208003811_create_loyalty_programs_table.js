const tableName = 'loyalty_programs'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.integer('goal').notNullable()
   table.timestamp('date_start').notNullable()
   table.timestamp('date_end').notNullable()

   table.integer('subscription_type_id').notNullable().references('id').inTable('subscription_types')
})

exports.down = knex => knex.schema.dropTable(tableName)
