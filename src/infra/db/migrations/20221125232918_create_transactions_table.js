const tableName = 'transactions'

exports.up = knex => knex.schema.createTable(tableName, table => {
  table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
  table.enum('status', ['REFUSED', 'ACCEPTED', 'PROCESSING', 'CANCELLED']).notNullable().defaultTo('PROCESSING')
  table.timestamp('created_at').defaultTo(knex.fn.now())

  table.uuid('credit_card_id').notNullable().references('id').inTable('credit_cards')
  table.uuid('user_id').notNullable().references('id').inTable('users')
})


exports.down = knex => knex.schema.dropTable(tableName)
