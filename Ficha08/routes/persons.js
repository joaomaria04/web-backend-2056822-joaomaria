var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha07'
});

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */



 /**
   * @swagger
   * /persons:
   *   get: 
   *     tags:
   *       - Person
   *     summary:
   *       description: Shows all users!
   *         produces: 
   *       - application/json
   *         responses:
   *                200:
   *         description: Returned sucessfully
   *      
   */


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
    connection.query("DELETE FROM persons WHERE id = ?" , id, (err, results, fields) =>{
        if (results.affectedRows == 0) {
            res.status(404).end("id" + id+ "not found")
        }
        res.send(results);
    })
});

router.delete('/', function(req, res, next) {
    var person = req.body.id; 
    connection.query("DELETE FROM persons WHERE id = ?" , id, (err, results, fields) =>{
        res.send(results);
    })
});

router.get('/:age/:profession', function(req, res, next) {
    var age = req.params.age; 
    var profession = req.params.profession; 
    connection.query("SELECT * FROM persons WHERE age = ? AND profession = ?" ,[age, profession], (err, results, fields) =>{
        res.send(results);
    })
});

router.post('/', function(req, res, next) {
    var person = req.body;
    connection.query("INSERT INTO persons SET ?" , [person], (err, results, fields) =>{
        res.send(results);
    })
});

router.put('/:id', function(req, res, next) {
    var person = req.body;
    var id = req.params.id;
    connection.query("UPDATE persons SET ? WHERE id = ?" , [person, id], (err, results, fields) =>{
        if (err) {
            res.status(500).end("Error while performing query.");
        } else if (results.affectedRows == 0) {
            res.status(400).end 
        }
        res.send(results);
    })
});

module.exports = router;
