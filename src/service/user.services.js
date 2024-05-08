const { User } = require('../models');

const findUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  return user;
};

const findUserExists = async ({ email }) => {
  const user = await User.findOne({ where: { email }, attributes: ['email'] });

  return user;
};

const createUser = async (body) => {
  const user = await User.create(body);

  return user;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  return user;
};

module.exports = {
  findUser,
  findUserExists,
  createUser,
  getUsers,
  getUserById,
};