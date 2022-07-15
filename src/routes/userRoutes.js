const { Router } = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/userController');

const userRoutes = Router();

userRoutes.post('/', rescue(userController.register));
userRoutes.get('/', rescue(userController.list));

module.exports = userRoutes;
