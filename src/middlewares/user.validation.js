const { userSchema } = require('../schemas');

const userValidation = (req, res, next) => {
  const { body } = req;

  const { error } = userSchema.validate(body);
  
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = userValidation;