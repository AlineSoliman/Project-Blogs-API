const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const checkBody = require('../middlewares/userValidation');

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

const createUserService = async (body) => {
  const validateJoi = checkBody.validateUser(body);
  const { displayName, email, password, image } = validateJoi;
  const verify = await User.findOne({
    where: { email },
  });
  if (verify) throw new Error('409|User already registered');
  await User.create({ displayName, email, password, image });
  const createToken = jwt.sign({ email }, secret, { algorithm: 'HS256', expiresIn: '2d' });
  return createToken;
};

module.exports = { loginService, createUserService };