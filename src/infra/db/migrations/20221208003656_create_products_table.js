const tableName = 'products'

exports.up = knex => knex.schema.createTable(tableName, table => {
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('title', 50).notNullable()
    table.integer('value').notNullable()
    table.string('description', 250).notNullable()
  
})

exports.down = knex => knex.schema.dropTable(tableName)
