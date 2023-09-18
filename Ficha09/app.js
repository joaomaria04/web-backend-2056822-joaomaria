const express = require('express');
const Sequelize = require('sequelize');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const sequelize = new Sequelize('ficha09', 'root', '', {
    dialect: 'mysql'
}); 

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
})
.catch(err => {
    console.log("Unable to connect" , err);
});

const Person = sequelize.define('persons', {
    //atributos
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    profession: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
}, {
    //options
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created!');
    }).then(function () {
        return Person.findAll();
    }).then(function (persons){
        console.log(persons);
    });

/*

Person.bulkCreate([
    { firstname: 'Joao', lastname: 'Ferreira', profession: 'IT', age: 19 },
    { firstname: 'Élvio', lastname: 'Ferreira', profession: 'IT', age: 47 },
    { firstname: 'Alexandra', lastname: 'Ferreira', profession: 'IT', age: 48 },
    { firstname: 'Guilherme', lastname: 'Ferreira', profession: 'IT', age: 13 },
    { firstname: 'Gonçalo', lastname: 'Ferreira', profession: 'IT', age: 12 }
]).then(function () {
    return Person.findAll();
}).then(function (persons){
    console.log(persons);
});

*/

app.get('/', function(req, res, next) {
Person.findAll().then(results => {
    res.send(results);
});
});


app.post('/', function(req, res ,next){
    var details = req.body.details;
    Person.create(details).then(newPerson => {
        res.send(newPerson);
    }); 
});

app.delete('/', function(req, res, next){
    var id = req.body.id;
    Person.destroy({
        where: {
            id: id
        }
    }).then((deleted) => {   
        res.send(deleted);
        res.status(201).send(id + "Was deleted");
    })
});

app.delete('/:id', function(req, res, next){
    var getID = req.params.id;
    Person.destroy({
        where: {
            id: getID
        }
    }).then((deleted) => {   
        res.send(deleted);
        res.status(201).send(id + "Was deleted");
    })
});

app.get('/:id', function(req, res, next) {
    var getID = req.params.id;
    Person.findByPk(getID).then(results => {
        res.send(results);
    });
    });

app.get('/:age/:profession', function(req, res, next){
    var getAge = req.params.age;
    var Profession = req.params.profession;
    Person.findAll({
            where: {
                age: getAge,
                profession: Profession
            }
        }).then(() => {   
            res.status(201).send(profession,"and",+getAge + " Was found");
        })
    });

    
app.listen(port, () => {
    console.log("Server is running");
});

app.put('/:id', function(req, res, next){
    var id = req.params.id;
    Person.updateAll({
            where: {
                id: id,
            }
        }).then(() => {   
            res.status(201).send(id+ "Atualizado");
        })
    });
