const knex = require('knex')({
   client: 'sqlite3',
   connection: {
      filename: "./biblioteca_db.sqlite"
   },
   migrations: {
      tableName: 'migrations'
   }
});

knex migrate:make create__table
knex migrate:make create_movement_registries_table
