const { Router } = require('express');
const rescue = require('express-rescue');
const authController = require('../controllers/authController');

const loginRoutes = Router();

loginRoutes.post('/', rescue(authController.login));

module.exports = loginRoutes;
