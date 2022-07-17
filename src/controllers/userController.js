const tokenService = require('../services/tokenService');
const userService = require('../services/userService');

module.exports = {
  async register(req, res) {
    const data = await userService.validate.body(req.body);
    const token = await userService.register(data);
    res.status(201).json({ token });
  },
  async list(req, res) {
    const users = await userService.list();
    res.status(200).json(users);
  },
  async getById(req, res) {
    const { id } = await userService.validate.params(req.params);
    const user = await userService.getById(id);
    res.status(200).json(user);
  },
  async delete(req, res) {
    const { id } = tokenService.validate(req.headers.authorization);
    await userService.delete(id);

    res.sendStatus(204);
  },
};
