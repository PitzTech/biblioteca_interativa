const tableName = 'movement_registries'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.enum('type', ['EXIT', 'ENTRANCE']).notNullable()
   table.timestamp('created_at').defaultTo(knex.fn.now())

   table.uuid('user_id').notNullable().references('id').inTable('users')
})

exports.down = knex => knex.schema.dropTable(tableName)
