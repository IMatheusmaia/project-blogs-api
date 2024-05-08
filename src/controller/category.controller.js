const { categoryService } = require('../service');

const createCategory = async (req, res) => {
  try {
    const { body } = req;
    const category = await categoryService.createCategory(body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getCategories = async (_req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { createCategory, getCategories };