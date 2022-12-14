require('dotenv').config();
const app = require('./api');
const { 
  createCategoryController, 
  getCategoriesController, 
} = require('./controllers/categoryController');
const { getPostsController } = require('./controllers/postsController');
require('express-async-errors');
const { 
  login, 
  createUserController, 
  getAllController, 
  getByPkController,
} = require('./controllers/userController');
const verifyJWT = require('./middlewares/auth');

app.post('/login', login);

app.post('/user', createUserController);

app.get('/user', verifyJWT, getAllController);

app.get('/user/:id', verifyJWT, getByPkController);

app.post('/categories', verifyJWT, createCategoryController);

app.get('/categories', verifyJWT, getCategoriesController);

app.get('/post', verifyJWT, getPostsController);

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
