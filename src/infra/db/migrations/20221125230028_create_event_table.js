const tableName = 'events'

exports.up = knex => knex.schema.createTable(tableName, table => {
      table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
      table.timestamp('start_data').notNullable();
      table.timestamp('end_data').notNullable();
   })

exports.down = knex => knex.schema.dropTable(tableName)
