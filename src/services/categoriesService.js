const Joi = require('joi');
const { Category } = require('../database/models');
const validator = require('./helpers/validator');
const AlreadyExistsError = require('../errors/AlreadyExistsError');
const NotFoundError = require('../errors/NotFoundError');

module.exports = {
  validate: {
    body: validator(
      Joi.object({
        name: Joi.string().required(),
      }),
    ),
  },
  async register(data) {
    const exists = await Category.findOne({ where: { name: data.name } });

    if (exists) {
      throw new AlreadyExistsError('Category already registered', 409);
    }

    const category = await Category.create(data);
    return category;
  },
  async list() {
    const categories = await Category.findAll();
    return categories;
  },
  async getById(id) {
    const category = await Category.findByPk(id);

    if (!category) {
      throw new NotFoundError('Category does not exist', 404);
    }

    return category;
  },
};
