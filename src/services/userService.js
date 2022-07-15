const Joi = require('joi');
const { User } = require('../database/models');
const validator = require('./helpers/validator');
const tokenService = require('./tokenService');
const AlreadyExistsError = require('./helpers/errors/AlreadyExistsError');

module.exports = {
  validate: {
    body: validator(
      Joi.object({
        displayName: Joi.string().min(8).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        image: Joi.string().required(),
      }),
    ),
    async token(token) {
      const payload = tokenService.validate(token);
      return payload;
    },
  },
  async register(data) {
    const exists = await User.findOne({ where: { email: data.email } });

    if (exists) {
      throw new AlreadyExistsError('User already registered');
    }

    await User.create(data);

    const token = tokenService.create(data.email, data.password);
    return token;
  },
};
