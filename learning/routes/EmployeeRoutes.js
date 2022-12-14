const employeeController = require('../controller/EmployeeController');
const express = require('express');
const router = express.Router();

router.post('/employee',employeeController.addEmployee);
router.get('/employee',employeeController.getEmployees);
module.exports = router;

