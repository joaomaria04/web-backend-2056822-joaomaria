var express = require('express');
var gradeController = require('../controllers/gradesController');
var router = express.Router();


router.get('/', gradeController.getAllGrades);
router.post('/', gradeController.createGrades);
router.get('/:student_id/:course_id', gradeController.getGradeById);
router.delete('/:id', gradeController.deleteByIdgrade);


module.exports = router;
