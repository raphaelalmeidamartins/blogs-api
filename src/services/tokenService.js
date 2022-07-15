require('dotenv/config');
const jwt = require('jsonwebtoken');

module.exports = {
  async create(payload) {
    const token = jwt.sign({ payload }, process.env.JWT_SECRET);
    return token;
  },

  async validate(token) {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  },
};
