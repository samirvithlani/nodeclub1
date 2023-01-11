const express = require('express');
const router = express.Router();
const productController = require('../controller/ProductController');
const productSchemaValidaiton = require('../util/ProductSchemaValidation');
const zodMiddleware = require('../middleware/ZodMiddleware');


router.post('/product',zodMiddleware.validate(productSchemaValidaiton),productController.createProduct)
module.exports = router;