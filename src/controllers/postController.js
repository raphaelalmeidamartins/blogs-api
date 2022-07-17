const postService = require('../services/postService');
const userService = require('../services/userService');
const tokenService = require('../services/tokenService');

module.exports = {
  async create(req, res) {
    const data = await postService.validate.body.add(req.body);
    const { id } = tokenService.validate(req.headers.authorization);

    const post = await postService.create(data, id);
    res.status(201).json(post);
  },
  async edit(req, res) {
    const data = await postService.validate.body.edit(req.body);
    const { id } = await postService.validate.params(req.params);
    const { id: userId } = tokenService.validate(req.headers.authorization);
    const user = await userService.getById(userId);

    const post = await postService.edit(data, id, user.id);
    res.status(200).json(post);
  },
  async delete(req, res) {
    const { id } = await postService.validate.params(req.params);
    const { id: userId } = tokenService.validate(req.headers.authorization);
    const user = await userService.getById(userId);

    await postService.delete(id, user.id);
    res.sendStatus(204);
  },
  async list(req, res) {
    const users = await postService.list();
    res.status(200).json(users);
  },
  async getById(req, res) {
    const { id } = await postService.validate.params(req.params);
    const post = await postService.getById(id);
    res.status(200).json(post);
  },
};
