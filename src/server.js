require('dotenv').config();
const app = require('./api');

const port = process.env.PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('listening to port', port));
