// const knexConfig = {
//    client: 'sqlite3',
//    connection: {
//       filename: "./biblioteca_db.sqlite"
//    },
//    migrations: {
//       tableName: 'migrations',
//       directory: path.join(__dirname, '../infra/db/migrations')
//    }
// }

const knexConfig = {
   client: 'pg',
   connection: {
      connectionString: 'postgres://postgres:password@localhost:5432/biblioteca_interativa'
   },
   pool: {
      min: 2,
      max: 10
   },
   migrations: {
      tableName: 'knex_migrations',
      directory: './src/infra/db/migrations'
   }
}


module.exports = knexConfig
