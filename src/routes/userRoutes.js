const { Router } = require('express');
const rescue = require('express-rescue');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const userRoutes = Router();

userRoutes.post('/', rescue(userController.register));

userRoutes.use(rescue(authController.authenticate));

userRoutes.get('/', rescue(userController.list));
userRoutes.get('/:id', rescue(userController.getById));

module.exports = userRoutes;
