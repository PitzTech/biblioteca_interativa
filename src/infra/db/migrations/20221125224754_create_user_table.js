const tableName = 'users'

exports.up = knex =>
  knex.schema.createTable(tableName, table => {
      table.increments('id').primary()
      table.string('name', 50).notNullable();
      table.string('email', 50).unique().notNullable();
      table.string('password', 255).notNullable();
      table.string('address', 100).nullable();
      table.string('cep', 8).nullable();
      table.enum('role', ['ADMIN', 'CLIENT', 'STAFF']).notNullable();

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').nullable()
   })

exports.down = knex => knex.schema.dropTable(tableName)
