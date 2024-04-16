module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'dpg-cofan921hbls739a9qig-a.singapore-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'db_cyber'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'pHH5jYgoIvMmnI6132GUQI8NOtrwFgBC'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
