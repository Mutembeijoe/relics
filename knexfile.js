require("dotenv").config({ path: "./.env.local" });

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_LOCAL_HOST,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      database: process.env.DB_LOCAL_NAME,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
    debug: true,
  },
  production: {
    client: "pg",
    connection: {
      host: process.env.DB_LOCAL_HOST,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      database: process.env.DB_LOCAL_NAME,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
    debug: false,
  },
};
