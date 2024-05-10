const express = require('express');
const authorization = require('../auth/authorization');
const { postValidation, updatePostValidation } = require('../middlewares');
const { postController } = require('../controller');

const router = express.Router();

router.post('/', authorization, postValidation, postController.createPost);

router.get('/', authorization, postController.getAllPosts);

router.get('/:id', authorization, postController.getPostById);

router.put(
  '/:id',
  authorization,
  updatePostValidation,
  postController.updatePost,
);

module.exports = router;