const jwt = require('jsonwebtoken');
const { userService } = require('../service');

const secret = process.env.JWT_SECRET;

const authorization = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    if (!auth) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const token = auth.split(' ')[1];
    const decoded = jwt.verify(token, secret);

    const dataUser = { email: decoded.user };

    const isUser = await userService.findUserExists(dataUser);

    if (!isUser) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authorization;