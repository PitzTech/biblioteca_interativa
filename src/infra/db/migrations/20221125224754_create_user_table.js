const tableName = 'users'

exports.up = (knex) => knex.schema
   .createTable(tableName, function (table) {
      table.increments('id').primary();
      table.string('name', 50).notNullable();
      table.string('email', 50).notNullable();
      table.string('password', 100).notNullable();
      table.string('address', 100).notNullable();
      table.string('cep', 8).notNullable();
      table.enum('role', ['ADMIN', 'CLIENT', 'STAFF']).notNullable();
   })

exports.down = (knex) => knex.schema
   .dropTable(tableName)


