const express = require('express');
const { userValidation } = require('../middlewares');
const { userController } = require('../controller');
const authentication = require('../auth/authentication');
const authorization = require('../auth/authorization');

const router = express.Router();

router.post('/', userValidation, userController.findEmail, authentication);

router.get('/', authorization, userController.getUser);

module.exports = router;