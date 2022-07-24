const express = require('express');
const cors = require('cors');

const swaggerUI = require('swagger-ui-express');
const swaggerSettingsBr = require('./swagger-br.json');
const swaggerSettingsEn = require('./swagger-en.json');

const errorMiddleware = require('./middlewares/errorMiddleware');

const categoriesRoutes = require('./routes/categoriesRoutes');
const loginRoutes = require('./routes/loginRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

// ...

const app = express();

app.use(express.json());
app.use(cors());

app.use('/docs/br', swaggerUI.serve, swaggerUI.setup(swaggerSettingsBr));
app.use('/docs/en', swaggerUI.serve, swaggerUI.setup(swaggerSettingsEn));

app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
