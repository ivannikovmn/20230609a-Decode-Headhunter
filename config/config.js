const fs = require('fs')
const path = require("path")

module.exports = {
    development: {
      username: 'admin',
      password: 'root',
      database: 'admin',
      host: 'localhost',
      dialect: 'postgres',
    },
    production: {
        // конфигурация для продакшн среды
        username: 'doadmin',
        password: 'AVNS_PjN5fJ8Q19zleegll5e',
        database: 'defaultdb',
        host: 'db-postgresql-sgp1-40737-do-user-14506858-0.b.db.ondigitalocean.com',
        dialect: 'postgres',   
        port: 25060,
        dialectOptions: {
          ssl: {
            ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt")),
          },    
        }             
    },
  };
  