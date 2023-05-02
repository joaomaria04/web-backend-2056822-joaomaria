var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha07'
});



/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query("SELECT * FROM persons", (err, results, fields) =>{
        res.send(results);
    })
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id; 
    connection.query("SELECT * FROM persons WHERE id = ?" , id, (err, results, fields) =>{
        res.send(results);
        console.log("GET");
    })
});



router.delete('/:id', function(req, res, next) {
    var id = req.params.id; 
    connection.query("DELETE * FROM persons WHERE id = ?" , id, (err, results, fields) =>{
        res.send(results);
    })
});


module.exports = router;
