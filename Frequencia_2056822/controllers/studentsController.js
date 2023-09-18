const Grade = require('../sequelize').Grades;
const Student = require('../sequelize').Students;
const Course = require('../sequelize').Courses;


exports.getAllStudents = (req, res , next ) => {
    Grade.findAll({include:[Grade, Course]}).then(results => {
        res.send(results);
    });
}

exports.getStudentById = (req, res , next ) => {
    student_id = Student.req.params.id
    Grade.findByPK(student_id).then(results => {
        res.send(results);
    });
}

exports.updateByIdStudents = (req, res , next ) => {
    var id = req.params.id;
    var details = req.body;
    Grade.update().then(results => {
        res.send(results);
    });
}


exports.deleteStudentsById = (req, res, next) => {
    Student.findAll(req.params.id)
        .then(results => {
            // Perform the deletion logic based on the 'results' obtained
            // and delete the loan with the specified ID

            // Send a response indicating the success of the deletion
            res.send("Student deleted successfully");
        })
        .catch(error => {
            // Handle any errors that occur during the deletion process
            // and send an appropriate error response
            res.status(500).send("Error deleting Student: " + error.message);
        });
}


exports.createGrades = (req, res, next) => {

    

    res.send("Student created successfully");
  };