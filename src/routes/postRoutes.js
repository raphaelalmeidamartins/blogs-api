const { Router } = require('express');
const rescue = require('express-rescue');
const authController = require('../controllers/authController');
const postController = require('../controllers/postController');

const postRoutes = Router();

postRoutes.use(rescue(authController.authenticate));

postRoutes.post('/', rescue(postController.create));
postRoutes.get('/', rescue(postController.list));
postRoutes.route('/:id')
  .get(rescue(postController.getById))
  .put(rescue(postController.edit));

module.exports = postRoutes;
