const employeeController = require('../controller/EmployeeController');
const express = require('express');
const router = express.Router();
//const authMiddleware = require('../middleware/AuthMiddleware');

router.post('/employee',employeeController.addEmployee);
router.get('/employee',employeeController.getEmployees);
module.exports = router;

