const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

//Middleware para 
app.use(express.json());

function readFile(path){
    var content = fs.readFileSync(path);
    return JSON.parse(content);
}

var content = readFile('./person.json');
console.log(content);


app.get('/users', (req, res) => {
  res.send(content);
})

app.post('/users', (req, res) => {
    res.send(req.body.firstname);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})