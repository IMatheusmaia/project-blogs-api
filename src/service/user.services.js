const { userModel } = require('../models/User');

const findUser = async ({ email, password }) => {
  const user = await userModel.findOne({ where: { email, password } });

  return user;
};

module.exports = {
  findUser,
};