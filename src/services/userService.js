const Joi = require('joi');
const { User } = require('../database/models');
const validator = require('./helpers/validator');
const tokenService = require('./tokenService');
const AlreadyExistsError = require('./helpers/errors/AlreadyExistsError');
const NotFoundError = require('./helpers/errors/NotFoundError');

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
    params: validator(
      Joi.object({
        id: Joi.number().positive().integer().required(),
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
      throw new AlreadyExistsError('User already registered', 409);
    }

    await User.create(data);

    const token = tokenService.create(data.email, data.password);
    return token;
  },
  async list() {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  },
  async getById(id) {
    const user = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { id },
    });

    if (!user) {
      throw new NotFoundError('User does not exist', 404);
    }

    return user;
  },
};
