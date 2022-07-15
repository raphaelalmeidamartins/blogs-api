const { Router } = require('express');
const rescue = require('express-rescue');

const loginRoutes = Router();

loginRoutes.post('/', rescue(() => {}));
