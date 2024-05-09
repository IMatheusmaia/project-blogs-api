const { BlogPost } = require('../models');

const createPost = async (body) => {
  const post = await BlogPost.create(body);

  return post;
};

module.exports = { createPost };