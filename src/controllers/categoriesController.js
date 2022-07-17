const categoriesService = require('../services/categoriesService');

module.exports = {
  async register(req, res) {
    const data = await categoriesService.validate.body(req.body);
    const category = await categoriesService.register(data);
    res.status(201).json(category);
  },
  async list(req, res) {
    const categories = await categoriesService.list();
    res.status(200).json(categories);
  },
  async getById(req, res) {
    const { id } = await categoriesService.validate.params(req.params);
    const category = await categoriesService.getById(id);
    res.status(200).json(category);
  },
};
