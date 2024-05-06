const { userService } = require('../service');

const findUser = async (req, res) => {
  try {
    const { body } = req;
    const user = await userService.findUser(body);
    if (!user) {
      return res.status(400).json({
        message: 'Invalid fields',
      });
    }
    res.status(200).json({ message: 'Users exists' });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  findUser,
};