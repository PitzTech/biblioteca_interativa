const tableName = 'transaction_products'

exports.up = knex => knex.schema.createTable(tableName, table => {
   table.increments('id').primary()
   table.integer('quantity').notNullable()

   table.integer('transaction_id').notNullable().references('id').inTable('transactions')
   table.integer('product_id').notNullable().references('id').inTable('products')
})

exports.down = knex => knex.schema.dropTable(tableName)
