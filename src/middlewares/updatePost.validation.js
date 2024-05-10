const { updatePostSchema } = require('../schemas');
const { postService } = require('../service');

const updatePostValidation = async (req, res, next) => {
  const { body, params } = req;
  
  const post = await postService.getPostById(params);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  const userOwner = post.userId === req.dataUser.id;
  if (!userOwner) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  
  const { error } = updatePostSchema.validate(body);
  
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = updatePostValidation;