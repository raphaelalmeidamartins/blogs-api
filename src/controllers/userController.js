const userService = require('../services/userService');

module.exports = {
  async register(req, res) {
    const data = await userService.validate.body(req.body);
    const token = await userService.register(data);
    res.status(201).json({ token });
  },
};
