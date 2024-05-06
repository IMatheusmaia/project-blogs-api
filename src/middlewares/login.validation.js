const { loginSchema } = require('../schemas');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  const { error } = loginSchema.validate({ email, password });
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  if (error) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = loginValidation;