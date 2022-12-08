const tableName = 'credit_cards'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.string('holder', 50).notNullable();
   table.string('last4', 4).notNullable();
   table.string('brand', 12).notNullable()
   table.string('token', 500).notNullable()
   table.string('exp_month', 2).notNullable()
   table.string('exp_year', 2).notNullable()
   table.string('billing_address', 100).nullable();

   table.uuid('user_id').notNullable().references('id').inTable('users')
})

exports.down = knex => knex.schema.dropTable(tableName)
