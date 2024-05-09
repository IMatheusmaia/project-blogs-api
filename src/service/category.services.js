const { Category } = require('../models');

const createCategory = async (body) => {
  const category = await Category.create(body);

  return category;
};

const getCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

const findCategoryById = async (id) => {
  const category = await Category.findByPk(id);

  return category;
};

module.exports = { createCategory, getCategories, findCategoryById };