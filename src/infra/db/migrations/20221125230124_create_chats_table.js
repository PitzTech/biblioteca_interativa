const tableName = 'chats'

exports.up = function (knex) {
   return knex.schema
      .createTable(tableName, function (table) {
         table.increments('id').primary();
         table.integer('grade').notNullable();
         table.string('theme', 100).notNullable();
      })
};
exports.down = function (knex) {
   return knex.schema
      .dropTable(tableName)
};
