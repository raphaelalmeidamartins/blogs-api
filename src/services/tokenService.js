require('dotenv/config');
const jwt = require('jsonwebtoken');

module.exports = {
  async create(payload) {
    const token = jwt.sign({ payload }, process.env.JWT_SECRET);
    return token;
  },

  validate(authorization) {
    const payload = jwt.verify(authorization, process.env.JWT_SECRET);
    return payload;
  },
};
