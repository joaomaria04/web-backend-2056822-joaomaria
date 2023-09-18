var express = require('express');
var StudentController = require('../controllers/studentsController');
var router = express.Router();

/* GET users listing. */
router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getStudentById);
router.delete('/:id', StudentController.deleteByIdStudent);


module.exports = router;