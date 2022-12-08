const tableName = 'subcription_types'

exports.up = knex => knex.schema.createTable(tableName, table => {
  table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
  table.integer('duration_days').notNullable();
  table.string('benefits').notNullable();
  table.smallint('allowed_loans').notNullable();
})

exports.down = knex => knex.schema.dropTable(tableName)