// TODO Implement all the models and business logic using sequelize
const { Sequelize, DataTypes } = require('sequelize');

const GradesDataModel = require('./models/Grades');
const StudentsDataModel = require('./models/Students');
const CoursesDataModel = require('./models/Courses');

const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASSWORD,{
    dialect: 'mysql',
    host: 'localhost'
});


const Grades = GradesDataModel(sequelize, DataTypes);
const Students = StudentsDataModel(sequelize, DataTypes);
const Courses = CoursesDataModel(sequelize, DataTypes);




sequelize.authenticate().then ( () => {
    console.log('Connection has been established');
}).catch (err => {
    console.error('Unable to connect', err);
})

sequelize.sync({ force: false }).then( () => {
    console.log('Database & tables created!');
}).then(function () {
    return Grades.findAll();
});

Grades.bulkCreate([ 
    { grade_id: '1', student_id: '1', course_id: '2', grade: '15,2' }, 
    { grade_id: '2', student_id: '2', course_id: '1', grade: '11,2' }
]);
   

Students.bulkCreate([ 
    { first_name: 'João', last_name: 'Ferreira', email:"joaoferreira@gmail.com" }, 
    { first_name: 'Davi', last_name: 'Jardim', email:"davidjardim@gmail.com" }
]);
   
Courses.bulkCreate([ 
    { course_name: 'Engenharia Informática', instructor: 'José Pires' }, 
    { course_name: 'Engenharia de Computadores', instructor: 'Francisco Miguel' }
]);
   
    

const port = 3000;

module.exports = {
    Grades, Students, Courses
} 