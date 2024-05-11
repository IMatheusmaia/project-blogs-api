const { BlogPost, PostCategory, Category, User } = require('../models');

const createPost = async (body) => {
  const post = await BlogPost.create(body);

  return post;
};
const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { model: PostCategory, attributes: [] },
    },
    ],
  });

  return posts;
};
const getPostById = async ({ id }) => {
  const posts = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { model: PostCategory, attributes: [] },
    },
    ],
  });

  return posts;
};
const updatePost = async (body, { id }) => {
  await BlogPost.update(body, {
    returning: true,
    where: { id },
  });
  const post = await getPostById({ id });
  return post;
};

module.exports = { createPost, getAllPosts, getPostById, updatePost };