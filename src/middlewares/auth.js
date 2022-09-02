const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const secret = process.env.JWT_SECRET;

const verifyJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, secret);
    const email = await User.findOne({ where: { email: decoded.email } });
    if (!email) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
    } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = verifyJWT;