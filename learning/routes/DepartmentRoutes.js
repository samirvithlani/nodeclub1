const departmentController = require('../controller/DepartmentController');
const express = require('express');
const router = express.Router();

router.post('/create',departmentController.createDepartment);

module.exports = router;