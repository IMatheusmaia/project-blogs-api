const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const authentication = (req, res) => {
  try {
    const payload = {
      user: req.body.email,
    };
    
    const jwtConfig = {
      algorithm: 'HS256',
    };
  
    const token = jwt.sign(payload, secret, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = authentication;