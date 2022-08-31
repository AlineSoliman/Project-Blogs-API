const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const secret = process.env.JWT_SECRET;

const loginService = async ({ email, password }) => {
  const result = await User.findOne({
    where: { email, password },
  });
  if (!result) {
    return null;
  }
  const createToken = jwt.sign({ email }, secret, { algorithm: 'HS256', expiresIn: '2d' });
  return createToken;
};

module.exports = loginService;