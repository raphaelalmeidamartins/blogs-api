require('dotenv').config();

const options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
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
};
