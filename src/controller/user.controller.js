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
const getUser = async (_req, res) => {
  try {
    const user = await userService.getUsers();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  findUser,
  findEmail,
  getUser,
  getUserById,
};