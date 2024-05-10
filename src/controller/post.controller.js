const { postService, postCategoryService } = require('../service');

const createPost = async (req, res) => {
  try {
    const { body, dataUser } = req;

    const post = await postService.createPost({ ...body, userId: dataUser.id });
    
    await Promise.all(body.categoryIds.map(async (category) => {
      await postCategoryService.createPostCategory({ postId: post.id, categoryId: category });
    }));

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getPostById = async (req, res) => {
  try {
    const { params } = req;
    const post = await postService.getPostById(params);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    const { body, params } = req;

    const post = await postService.updatePost(body, params);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = { createPost, getAllPosts, getPostById, updatePost };