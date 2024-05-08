const { Category } = require('../models');

const createCategory = async (body) => {
  const user = await Category.create(body);

  return user;
};

module.exports = { createCategory };