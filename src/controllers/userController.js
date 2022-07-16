const NotFoundError = require('../services/helpers/errors/NotFoundError');
const userService = require('../services/userService');

module.exports = {
  async register(req, res) {
    const data = await userService.validate.body(req.body);
    const token = await userService.register(data);
    res.status(201).json({ token });
  },
  async list(req, res) {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new NotFoundError('Token not found', 401);
    }
    await userService.validate.token(authorization);

    const users = await userService.list();
    res.status(200).json(users);
  },
  async getById(req, res) {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new NotFoundError('Token not found', 401);
    }
    await userService.validate.token(authorization);
    const { id } = await userService.validate.params(req.params);

    const user = await userService.getById(id);
    res.status(200).json(user);
  },
};
