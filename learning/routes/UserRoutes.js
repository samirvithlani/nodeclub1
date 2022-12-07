///get post put delete
//express
const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
router.get('/test',userController.testUser)
router.get('/user',userController.getAllUsers)
module.exports = router;