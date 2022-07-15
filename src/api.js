const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
