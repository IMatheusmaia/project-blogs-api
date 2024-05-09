const { postSchema } = require('../schemas');
const { categoryService } = require('../service');

const postValidation = async (req, res, next) => {
  const { body } = req;

  const { error } = postSchema.validate(body);
  
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const unfoundCategory = await Promise.all(body.categoryIds.map(async (categoryId) => {
    const category = await categoryService.findCategoryById(categoryId);
    return category;
  }));

  if (unfoundCategory.some((category) => category === null)) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

module.exports = postValidation;