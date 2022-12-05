const tableName = 'credit_cards'

exports.up = (knex) => knex.schema
   .createTable(tableName, function (table) {
      table.increments('id').primary();
      table.string('holder', 50).notNullable();
      table.string('number', 16).notNullable();
      table.string('cvv', 3).notNullable();
      table.date('expiration_date').notNullable();
      table.string('billing_address', 30).notNullable();
      table.string('cep', 8).notNullable();
   })

exports.down = (knex) => knex.schema
   .dropTable(tableName)

