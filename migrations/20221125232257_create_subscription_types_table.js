const tableName = 'subcription_types'
exports.up = (knex) => knex.schema
   .createTable(tableName, function (table) {
      table.increments('id').primary();
      table.int('duration').notNullable();
      table.string('benefits').notNullable();
      table.int('allowed_loans').notNullable();
   });
exports.down = (knex) => knex.schema
   .dropTable(tableName)
