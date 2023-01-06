const express = require('express');
const router = express.Router();
const StudentController = require('../controller/StudentController');
router.post('/student',StudentController.addStudent);
router.get('/student',StudentController.getAllStudents);
router.get('/student/:id',StudentController.studentGetById);
router.delete('/student/:id',StudentController.deleteStudent);
router.put('/student/:id',StudentController.updateStudent);
module.exports = router;
