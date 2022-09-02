const { 
  loginService, 
  createUserService, 
  getAllService, 
  findByPkService,
} = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }
  try {
    const result = await loginService({ email, password });
      if (!result) return res.status(400).json({ message: 'Invalid fields' }); 
      return res.status(200).json({ token: result });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const createUserController = async (req, res) => {
  const { body } = req;
    const result = await createUserService(body);
    return res.status(201).json({ token: result });
};

const getAllController = async (req, res, _next) => {
  try {
    const result = await getAllService();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Erro' });
  }
};

const getByPkController = async (req, res, _next) => {
  const { id } = req.params;
  try {
    const result = await findByPkService(id);
    console.log(result);
    if (result) return res.status(200).json(result);
    if (result === null) return res.status(404).send({ message: 'User does not exist' });
  } catch (error) {
    res.status(500).json({ message: 'Erro' });
  }
};

module.exports = { login, createUserController, getAllController, getByPkController };