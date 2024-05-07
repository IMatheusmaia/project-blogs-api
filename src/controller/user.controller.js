const { userService } = require('../service');

const findUser = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await userService.findUser(body);

    if (!user) {
      return res.status(400).json({
        message: 'Invalid fields',
      }); 
    }
    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const findEmail = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await userService.findUserExists(body);

    if (user) {
      return res.status(409).json({
        message: 'User already registered',
      });
    }
    await userService.createUser(body);
    next();
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  findUser,
  findEmail,
};