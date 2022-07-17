const Joi = require('joi');
const {
  BlogPost,
  Category,
  PostCategory,
  User,
  sequelize,
} = require('../database/models');
const validator = require('./helpers/validator');
const NotFoundError = require('../errors/NotFoundError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const categoriesService = require('./categoriesService');

const REQUIRED_MSG = 'Some required fields are missing';
const INVALID_FIELD_MSG = 'Invalid fields';

module.exports = {
  validate: {
    body: {
      add: validator(
        Joi.object({
          title: Joi.string().required().messages({
            'string.empty': REQUIRED_MSG,
            string: INVALID_FIELD_MSG,
            'any.required': REQUIRED_MSG,
          }),
          content: Joi.string().required().messages({
            'string.empty': REQUIRED_MSG,
            string: INVALID_FIELD_MSG,
            'any.required': REQUIRED_MSG,
          }),
          categoryIds: Joi.array()
            .items(Joi.number().positive().integer())
            .required()
            .messages({
              'array.empty': REQUIRED_MSG,
              array: INVALID_FIELD_MSG,
              'any.required': REQUIRED_MSG,
            }),
        }),
      ),
      edit: validator(
        Joi.object({
          title: Joi.string().required().messages({
            'string.empty': REQUIRED_MSG,
            string: INVALID_FIELD_MSG,
            'any.required': REQUIRED_MSG,
          }),
          content: Joi.string().required().messages({
            'string.empty': REQUIRED_MSG,
            string: INVALID_FIELD_MSG,
            'any.required': REQUIRED_MSG,
          }),
        }),
      ),
    },
    params: validator(
      Joi.object({
        id: Joi.number().positive().integer().required(),
      }),
    ),
  },
  async create(data, userId) {
    const result = sequelize.transaction(async (transaction) => {
      const { dataValues: post } = await BlogPost.create(
        { ...data, userId },
        { transaction },
      );

      try {
        const checkCategoryIds = data.categoryIds.map((categoryId) =>
          categoriesService.getById(categoryId));
        await Promise.all(checkCategoryIds);
      } catch (_err) {
        throw new NotFoundError('"categoryIds" not found', 400);
      }

      const createLinks = data.categoryIds.map((categoryId) =>
        PostCategory.create({ postId: post.id, categoryId }, { transaction }));
      await Promise.all(createLinks);

      return post;
    });

    return result;
  },
  async edit(data, postId, userId) {
    const exists = await BlogPost.findByPk(postId);

    if (!exists) {
      throw new NotFoundError('Post does not exist', 404);
    }
    if (exists.userId !== userId) {
      throw new UnauthorizedError('Unauthorized user', 401);
    }

    await BlogPost.update(data, { where: { id: postId } });

    const post = await this.getById(postId);
    return post;
  },
  async list() {
    const posts = await BlogPost.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password', 'published', 'updated'] },
        },
        {
          model: Category,
          as: 'categories',
        },
      ],
    });

    return posts;
  },
  async getById(id) {
    const post = await BlogPost.findByPk(id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password', 'published', 'updated'] },
        },
        {
          model: Category,
          as: 'categories',
        },
      ],
    });

    if (!post) throw new NotFoundError('Post does not exist', 404);

    return post;
  },
};
