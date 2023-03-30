// import express module
const { response } = require('express');
const express = require('express');
const app = express();

//Binds and listens for connections on the specified host and port
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
    app.get('/index', function(request, response){
        response.send("Hello World");
    }); 

    app.post('/users/:id', function(request, response){
        var id = request.body.id;
        response.send("Post User");
    }); 
});