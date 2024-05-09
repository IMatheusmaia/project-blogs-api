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

module.exports = { createPost };