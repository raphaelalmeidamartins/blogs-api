require('dotenv').config();

const options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
}

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  }
};
