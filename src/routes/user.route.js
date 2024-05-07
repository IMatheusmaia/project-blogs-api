const express = require('express');
const { userValidation } = require('../middlewares');
const { userController } = require('../controller');
const authentication = require('../token/authentication');

const router = express.Router();

router.post('/', userValidation, userController.findEmail, authentication);

module.exports = router;