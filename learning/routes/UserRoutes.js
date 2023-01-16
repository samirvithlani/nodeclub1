///get post put delete
//express
const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
router.get('/test',userController.testUser)
router.get('/user',userController.getAllUsers)
router.post('/user',userController.creteUser)
router.delete('/user/:id',userController.deleteUser)
router.get('/user/:id',userController.getUserById)
router.put('/user/:id',userController.updateUser)
router.post('/login',userController.loginUser)
module.exports = router;