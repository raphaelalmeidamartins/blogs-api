const Joi = require('joi');
const { User } = require('../database/models');
const validator = require('./helpers/validator');
const NotFoundError = require('../errors/NotFoundError');
const tokenService = require('./tokenService');

const REQUIRED_MSG = 'Some required fields are missing';
const INVALID_FIELD_MSG = 'Invalid fields';

module.exports = {
  validate: {
    body: validator(
      Joi.object({
        email: Joi
          .string()
          .email()
          .required()
          .messages({
            'string.empty': REQUIRED_MSG,
            'string.email': INVALID_FIELD_MSG,
            'any.required': REQUIRED_MSG,
          }),
        password: Joi
          .string()
          .required()
          .messages({
            'string.empty': REQUIRED_MSG,
            string: INVALID_FIELD_MSG,
            'any.required': REQUIRED_MSG,
          }),
      }),
    ),
  },
  async login(email, password) {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      throw new NotFoundError('Invalid fields', 400);
    }

    const token = await tokenService.create({ email });
    return token;
  },
};
