const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const authentication = async (req, res) => {
  try {
    const payload = {
      id: req.userData.id,
      email: req.userData.email,
    };
    const jwtConfig = {
      algorithm: 'HS256',
    };
    const token = jwt.sign(payload, secret, jwtConfig);
    const path = await req.originalUrl.replace(/\?.*$/, '');
    if (path === '/login') {
      return res.status(200).json({ token });
    }
    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = authentication;