module.exports = {
  development: {
    client: 'pg',
    connection: {
      connectionString: 'postgresql://SecondChancesDB_owner:X1kzNo9qtayD@ep-floral-flower-a19s5ptu.ap-southeast-1.aws.neon.tech/SecondChancesDB?sslmode=require',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      connectionString: 'postgresql://SecondChancesDB_owner:X1kzNo9qtayD@ep-floral-flower-a19s5ptu.ap-southeast-1.aws.neon.tech/SecondChancesDB?sslmode=require',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: 'postgresql://SecondChancesDB_owner:X1kzNo9qtayD@ep-floral-flower-a19s5ptu.ap-southeast-1.aws.neon.tech/SecondChancesDB?sslmode=require',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
