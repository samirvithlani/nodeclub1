const express = require('express');
const router = express.Router();
const cartController = require('../controller/CartController');

router.post('/cart',cartController.createCart);
router.get('/cart',cartController.getCart);
router.get('/cart/:id',cartController.getCartByUserId);

module.exports = router;