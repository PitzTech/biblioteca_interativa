const tableName = 'user_subscriptions'

exports.up = (knex) => knex.schema
   .createTable(tableName, function (table) {
      table.increments('id').primary();
      table.boolean('active').notNullable();
      table.date('expiration_date').notNullable();
   })

exports.down = (knex) => knex.schema
   .dropTable(tableName)

