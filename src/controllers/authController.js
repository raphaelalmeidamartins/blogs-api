const authService = require('../services/authService');
const NotFoundError = require('../errors/NotFoundError');
const tokenService = require('../services/tokenService');

module.exports = {
  async login(req, res) {
    const { email, password } = await authService.validate.body(req.body);
    const token = await authService.login(email, password);
    res.status(200).json({ token });
  },
  authenticate(req, _res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
      next(new NotFoundError('Token not found', 401));
    }
    tokenService.validate(authorization);
    next();
  },
};
