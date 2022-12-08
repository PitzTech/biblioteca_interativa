const tableName = 'user_subscriptions'

exports.up = knex => knex.schema.createTable(tableName, table => {
  table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
  table.boolean('active').notNullable();
  table.timestamp('start_time').notNullable();
  table.timestamp('end_time').notNullable();

  table.uuid('user_id').notNullable().references('id').inTable('users')
  table.uuid('subscription_type_id').notNullable().references('id').inTable('subscription_types')
})

exports.down = knex => knex.schema.dropTable(tableName)