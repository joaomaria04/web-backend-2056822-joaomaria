var dotenv = require('dotenv');
dotenv.config();

var express = require('express');
//var session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');


var seq = require('./sequelize');

var indexRouter = require('./routes/index');
var courseRouter = require('./routes/courses');
var studentsRouter = require('./routes/students');
var gradesRouter = require('./routes/grades');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser()); // read cookies (needed for auth)
app.use(express.json()); // get information from html forms
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Use the session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true   
}));

app.use(flash()); // use connect-flash for flash messages stored in session
app.use('/', indexRouter);
app.use('/courses', courseRouter);
app.use ('/students', studentsRouter);
app.use('/grades', gradesRouter);

module.exports = app;