// TODO Implement all the models and business logic using sequelize
const { Sequelize, DataTypes } = require('sequelize');

const UserDataModel = require('./models/Users');


const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASSWORD,{
    dialect: 'mysql',
    host: 'localhost'
});


const Users = UserDataModel(sequelize, DataTypes);


sequelize.authenticate().then ( () => {
    console.log('Connection has been established');
}).catch (err => {
    console.error('Unable to connect', err);
})

sequelize.sync({ force: false }).then( () => {
    console.log('Database & tables created!');
}).then(function () {
    return Users.findAll();
});

Users.bulkCreate([ 
    { password: 'joao', email: 'joaoferreira@gmail.com' }, 
    { password: 'elvio', email: 'elvioferrei@gmail.com' },
    { email: 'alexandraferreira@gmail.com', password: 'alexandra' },
    { email: 'guilhermeferreira@gmail.com', password: 'guilherme' },
    { email: 'goncaloferreira@gmail.com', password: 'goncalo' }
]);
   
    

const port = 3000;

module.exports = {
    Users
} 