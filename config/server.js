module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',  // PostgreSQL as the client
        host: env('DATABASE_HOST'),  // Neon PostgreSQL host
        port: env.int('DATABASE_PORT', 5432),  // PostgreSQL port
        database: env('DATABASE_NAME'),  // Neon database name
        username: env('DATABASE_USERNAME'),  // Neon username
        password: env('DATABASE_PASSWORD'),  // Neon password
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL', true),  // Neon requires SSL
        },
      },
      options: {
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
