const Joi = require('joi');
const { User } = require('../database/models');
const validator = require('./helpers/validator');
const NotFoundError = require('./helpers/errors/NotFoundError');
const tokenService = require('./tokenService');

module.exports = {
  validate: {
    body: validator(
      Joi.object({
        email: Joi
          .string()
          .email()
          .required()
          .messages({
            'string.empty': 'Some required fields are missing',
            'string.email': 'Invalid fields',
            'any.required': 'Some required fields are missing',
          }),
        password: Joi
          .string()
          .required()
          .messages({
            'string.empty': 'Some required fields are missing',
            string: 'Invalid fields',
            'any.required': 'Some required fields are missing',
          }),
      }),
    ),
    async token(token) {
      const payload = tokenService.validate(token);
      return payload;
    },
  },
  async login(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      throw new NotFoundError('Invalid fields');
    }

    const token = await tokenService.create({ email });
    return token;
  },
};
