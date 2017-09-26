const databaseName = 'shop';
const username = 'dev';
const password = 'ghbdtn';

module.exports = {
  development: {
    client: 'postgresql',
    connection: `postgres://${username}:${password}@localhost:5432/${databaseName}`,
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: `postgres://${username}:${password}@localhost:5432/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds'
    }
  }
};
