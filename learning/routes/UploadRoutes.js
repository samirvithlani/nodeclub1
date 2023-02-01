const express = require('express');
const router = express.Router();
const uploadController = require('../controller/UploadController');
const uploadController1 = require('../controller/UploadController1');
router.post('/upload',uploadController.uploadFile)
router.get('/getall',uploadController.getFiles)
router.post('/upload1',uploadController1.uploadFile)
module.exports = router;