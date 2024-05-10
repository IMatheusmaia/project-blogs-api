const express = require('express');
const authorization = require('../auth/authorization');
const { postValidation } = require('../middlewares');
const { postController } = require('../controller');

const router = express.Router();

router.post('/', authorization, postValidation, postController.createPost);

router.get('/', authorization, postController.getAllPosts);

module.exports = router;