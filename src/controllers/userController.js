const loginService = require('../services/userService');

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
    console.log(error);
    return res.status(500).send(error);
  }
};

module.exports = login;