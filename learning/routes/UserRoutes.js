///get post put delete
//express
const authmiddleware = require('../util/AuthMiddlewareJwt');
const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
router.get('/test',userController.testUser)
router.get('/user',authmiddleware.tokenMiddleware,userController.getAllUsers)
router.post('/user',userController.createAuthUser)
router.delete('/user/:id',userController.deleteUser)
router.get('/user/:id',userController.getUserById)
router.put('/user/:id',userController.updateUser)
router.post('/login',userController.LoginAuthUser)
module.exports = router;