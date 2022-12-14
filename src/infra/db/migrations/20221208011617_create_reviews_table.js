const tableName = 'reviews'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()

   table.string('comment', 250).notNullable()
   table.smallint('grade').notNullable()
   table.integer('owner_id').notNullable()

   table.integer('user_id').notNullable().references('id').inTable('users')
   table.integer('parent_review_id').notNullable().references('id').inTable('reviews')
})

exports.down = knex => knex.schema.dropTable(tableName)
