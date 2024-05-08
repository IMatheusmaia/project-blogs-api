const express = require('express');
const authorization = require('../auth/authorization');
const { categoryValidation } = require('../middlewares');
const { categoryController } = require('../controller');

const router = express.Router();

router.post('/', authorization, categoryValidation, categoryController.createCategory);

router.get('/', authorization, categoryController.getCategories);

module.exports = router;