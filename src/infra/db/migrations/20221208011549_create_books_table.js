const tableName = 'books'

exports.up = knex => knex.schema.createTable(tableName, table => {
  table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()')); 
  
  table.string('author', 50),notNullable()
  table.string('collection', 50).notNullable()
  table.integer('page_quantity').notNullable()
  table.string('publishing_house', 50).notNullable()
  table.string('edition', 50).notNullable()
  
  table.uuid('product_id').notNullable().references('id').inTable('products')
})

exports.down = knex => knex.schema.dropTable(tableName)