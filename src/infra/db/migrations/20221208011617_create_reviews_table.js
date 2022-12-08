const tableName = 'reviews'

exports.up = knex => knex.schema.createTable(tableName, table => {
  table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()')); 
  
  table.string('comment', 250),notNullable()
  table.smallint('grade').notNullable()
  table.integer('owner_id').notNullable()
  
  table.uuid('user_id').notNullable().references('id').inTable('users')
  table.uuid('parent_review_id').notNullable().references('id').inTable('reviews')
})

exports.down = knex => knex.schema.dropTable(tableName)