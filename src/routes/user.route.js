const express = require('express');
const { loginValidation } = require('../middlewares');
const { userController } = require('../controller');

const router = express.Router();

router.post('/', loginValidation, userController.findUser);

module.exports = router;