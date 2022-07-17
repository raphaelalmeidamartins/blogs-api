const { Router } = require('express');
const rescue = require('express-rescue');
const authController = require('../controllers/authController');
const categoriesController = require('../controllers/categoriesController');

const categoriesRoutes = Router();

categoriesRoutes.use(rescue(authController.authenticate));

categoriesRoutes.post('/', rescue(categoriesController.register));
categoriesRoutes.get('/', rescue(categoriesController.list));
categoriesRoutes.get('/:id', rescue(categoriesController.getById));

module.exports = categoriesRoutes;
