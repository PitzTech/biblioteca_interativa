const tableName = 'events'
exports.up = (knex) => knex.schema
   .createTable(tableName, function (table) {
      table.increments('id').primary();
      table.date('start_data').notNullable();
      table.date('end_data').notNullable();
   });
exports.down = (knex) => knex.schema
   .dropTable(tableName)
