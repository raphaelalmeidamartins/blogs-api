const authService = require('../services/authService');

module.exports = {
  async login(req, res) {
    const { email, password } = await authService.validate.body(req.body);
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  },
  async authenticate(req, _res, next) {
    const { authorization } = req.headers;
    await authService.validate.token(authorization);
    next();
  },
};
