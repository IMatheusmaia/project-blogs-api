const express = require('express');
const { loginValidation } = require('../middlewares');
const { userController } = require('../controller');
const authentication = require('../auth/authentication');

const router = express.Router();

router.post('/', loginValidation, userController.findUser, authentication);

module.exports = router;