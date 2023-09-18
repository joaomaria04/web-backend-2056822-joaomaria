const Grade = require('../sequelize').Grades;
const Student = require('../sequelize').Students;
const Course = require('../sequelize').Courses;


exports.getAllCourses = (req, res , next ) => {
    Course.findAll({include:[Grade, Student]}).then(results => {
        res.send(results);
    });
}

exports.getCourseById = (req, res , next ) => {
    Course.findByPK(req.params.id).then(results => {
        res.send(results);
    });
}

exports.updateByIdCourses = (req, res , next ) => {
    var id = req.params.id;
    var details = req.body;
    Grade.update().then(results => {
        res.send(results);
    });
}



exports.deleteByIdCourse = (req, res, next) => {
    var id = req.params.id;
    Grade.findByPK(id)
        .then(results => {
            // Perform the deletion logic based on the 'results' obtained
            // and delete the loan with the specified ID

            // Send a response indicating the success of the deletion
            res.send("Grade deleted successfully");
        })
        .catch(error => {
            // Handle any errors that occur during the deletion process
            // and send an appropriate error response
            res.status(500).send("Error deleting Grade: " + error.message);
        });
}


exports.createCourse = (req, res, next) => {
    Grade.createCourse(req.body) 
    .then(results => {
        // Perform the deletion logic based on the 'results' obtained
        // and delete the loan with the specified ID

        // Send a response indicating the success of the deletion
        res.send("Grade created successfully");
    })
    .catch(error => {
        // Handle any errors that occur during the deletion process
        // and send an appropriate error response
        res.status(500).send("Error creating grade: " + error.message);
    });

    res.send("Loan created successfully");
  };