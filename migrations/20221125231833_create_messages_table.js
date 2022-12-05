const tableName = 'messages'

exports.up = function (knex) {
   return knex.schema
      .createTable(tableName, function (table) {
         table.increments('id').primary();
         table.date('sent_date').notNullable();
         table.string('message', 255).notNullable();
         table.integer('fk_user_id').notNullable();
         table.integer('fk_chat_id').notNullable();
      })

};

exports.down = function (knex) {
   return knex.schema
      .dropTable(tableName)

};
