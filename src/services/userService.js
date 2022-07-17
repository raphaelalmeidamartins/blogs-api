const Joi = require('joi');
const {
  BlogPost,
  PostCategory,
  User,
  sequelize,
} = require('../database/models');
const validator = require('./helpers/validator');
const tokenService = require('./tokenService');
const AlreadyExistsError = require('../errors/AlreadyExistsError');
const NotFoundError = require('../errors/NotFoundError');

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
  },
  async register(data) {
    const exists = await User.findOne({ where: { email: data.email } });

    if (exists) {
      throw new AlreadyExistsError('User already registered', 409);
    }

    const { id } = await User.create(data);

    const token = tokenService.create(id);
    return token;
  },
  async list() {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  },
  async getById(id) {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      throw new NotFoundError('User does not exist', 404);
    }

    return user;
  },
  async delete(userId) {
    const { posts } = await User.findByPk(userId, {
      include: [
        {
          model: BlogPost,
          as: 'posts',
          attributes: {
            exclude: ['title', 'content', 'userId', 'published', 'updated'],
          },
        },
      ],
    });

    sequelize.transaction(async (transaction) => {
      const deleteLinks = posts.map(({ id: postId }) =>
        PostCategory.destroy({ where: { postId } }, { transaction }));
      await Promise.all(deleteLinks);
      
      await BlogPost.destroy({ where: { userId } }, { transaction });
      await User.destroy({ where: { id: userId } }, { transaction });
    });
  },
};
