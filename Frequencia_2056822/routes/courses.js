var express = require('express');
var courseController = require('../controllers/coursesController');
var router = express.Router();

/* GET users listing. */
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.delete('/:id', courseController.deleteByIdCourse);


module.exports = router;
