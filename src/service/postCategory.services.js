const { PostCategory } = require('../models');

const createPostCategory = async ({ postId, categoryId }) => {
  const post = await PostCategory.create({ postId, categoryId });

  return post;
};

module.exports = { createPostCategory };