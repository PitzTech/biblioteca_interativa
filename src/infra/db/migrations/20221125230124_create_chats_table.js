const tableName = 'chats'

exports.up = knex => knex.schema.createTable(tableName, table => {
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'))
    table.smallint('grade').notNullable()
    table.string('theme', 100).notNullable()

    table.uuid('staff_user_id').notNullable().references('id').inTable('users')
    table.uuid('customer_user_id').notNullable().references('id').inTable('users')
})

exports.down = knex => knex.schema.dropTable(tableName)

