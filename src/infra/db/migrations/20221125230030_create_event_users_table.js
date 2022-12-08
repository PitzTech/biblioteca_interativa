const tableName = 'events_users'

exports.up = knex => knex.schema.createTable(tableName, table => {
      table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
      table.uuid('user_id').notNullable().references('id').inTable('users')
      table.uuid('event_id').notNullable().references('id').inTable('events')
   })

exports.down = knex => knex.schema.dropTable(tableName)
