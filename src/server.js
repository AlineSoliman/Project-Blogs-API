require('dotenv').config();
const app = require('./api');
require('express-async-errors');
const { login, createUserController } = require('./controllers/userController');

app.post('/login', login);

app.post('/user', createUserController);

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use((err, _req, res, _next) => {
  console.error(err);
  const [code, message] = err.message.split('|');
    return res.status(code).json({ message });
});

app.listen(port, () => console.log('ouvindo porta', port));
