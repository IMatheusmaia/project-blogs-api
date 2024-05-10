const { BlogPost, PostCategory, Category, User } = require('../models');

const createPost = async (body) => {
  const post = await BlogPost.create(body);

  return post;
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: ['user', {
      model: Category,
      as: 'categories',
      through: { model: PostCategory, attributes: [] },
    },
    {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    // { model: PostCategory, as: 'postCategories' },
    ],
  });

  return posts;
};

module.exports = { createPost, getAllPosts };