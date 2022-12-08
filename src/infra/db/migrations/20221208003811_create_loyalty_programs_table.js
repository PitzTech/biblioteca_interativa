const tableName = 'loyalty_programs'

exports.up = knex => knex.schema.createTable(tableName, table => {
  table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()')); 
  table.integer('goal').notNullable()
  table.timestamp('date_start').notNullable()
  table.timestamp('date_end').notNullable()

  table.uuid('subscription_type_id').notNullable().references('id').inTable('subscription_types')
})

exports.down = knex => knex.schema.dropTable(tableName)