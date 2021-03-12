module.exports = {
  client: 'pg',
  connection: "postgres://postgres:postgres@localhost:5432/fake-api",
  migrations: {
    directory: './migrations',
  },
  seeds: { directory: './seeds' },
};
