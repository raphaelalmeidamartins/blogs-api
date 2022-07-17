const express = require('express');
const authController = require('./controllers/authController');
const errorMiddleware = require('./middlewares/errorMiddleware');
const categoriesRoutes = require('./routes/categoriesRoutes');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

app.use('/user', authController.authenticate, userRoutes);
app.use('/categories', authController.authenticate, categoriesRoutes);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
