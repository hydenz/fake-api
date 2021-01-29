// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_URL || {
      host: "localhost",
      user: "postgres",
      password: "postgres",
      database: "fakeapi"
    },
    migrations: {
      directory: './migrations',
    },
    seeds: { directory: './seeds' },
  },

  staging: {
    client: 'pg',
    connection: process.env.DB_URL || {
      host: "localhost",
      user: "postgres",
      password: "postgres",
      database: "fakeapi"
    },
    migrations: {
      directory: './migrations',
    },
    seeds: { directory: './seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL || {
      host: "localhost",
      user: "postgres",
      password: "postgres",
      database: "fakeapi"
    },
    migrations: {
      directory: './migrations',
    },
    seeds: { directory: './seeds' },
  },

};
