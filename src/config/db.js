const path = require('node:path')

const knexConfig = {
   client: 'sqlite3',
   connection: {
      filename: "./biblioteca_db.sqlite"
   },
   migrations: {
      tableName: 'migrations',
      directory: path.join(__dirname, '../infra/db/migrations')
   }
}

module.exports = knexConfig
