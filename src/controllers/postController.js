const postService = require('../services/postService');
const userService = require('../services/userService');
const tokenService = require('../services/tokenService');

module.exports = {
  async create(req, res) {
    const data = await postService.validate.body.add(req.body);
    const { email } = tokenService.validate(req.headers.authorization);
    const { id } = await userService.getByEmail(email);

    const post = await postService.create(data, id);
    res.status(201).json(post);
  },
  async edit(req, res) {
    const data = await postService.validate.body.edit(req.body);
    const { id } = await postService.validate.params(req.params);
    const { email } = tokenService.validate(req.headers.authorization);
    const user = await userService.getByEmail(email);

    const post = await postService.edit(data, id, user.id);
    res.status(200).json(post);
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
