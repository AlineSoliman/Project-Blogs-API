const { loginService, createUserService } = require('../services/userService');

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

module.exports = { login, createUserController };