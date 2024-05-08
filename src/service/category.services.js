const { Category } = require('../models');

const createCategory = async (body) => {
  const user = await Category.create(body);

  return user;
};

const getCategories = async () => {
  const users = await Category.findAll();

  return users;
};

module.exports = { createCategory, getCategories };