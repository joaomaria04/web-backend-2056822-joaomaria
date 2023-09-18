const { Sequelize, DataTypes } = require('sequelize');

const UserDataModel = require('./models/Users');
const BooksDataModel = require('./models/Books');
const LoansDataModel = require('./models/Loans');
//initialize data base
const sequelize = new Sequelize('ficha10', 'root', '' ,  {
    dialect: 'mysql'
});

const Users = UserDataModel(sequelize, DataTypes);
const Books = BooksDataModel(sequelize, DataTypes);
const Loans = LoansDataModel(sequelize, DataTypes);

//Define Relations between tables
Users.hasMany(Loans);
Loans.belongsTo(Users);

Books.hasMany(Loans, {onDelete: 'CASCADE'});
Loans.belongsTo(Books);


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
    { first_name: 'Joao', last_name: 'Ferreira', email: 'joaoferreira@gmail.com', adress: 'Caminho Novo da Ribeira dos loucos', phone_number: 919323456 },
    { first_name: 'Élvio', last_name: 'Ferreira', email: 'elvioferrei@gmail.com', adress: 'Caminho Novo da Ribeira dos loucos', phone_number: 929323423 },
    { first_name: 'Alexadra', last_name: 'Ferreira', email: 'alexandraferreira@gmail.com', adress: 'Caminho Novo da Ribeira dos loucos', phone_number: 956923456 },
    { first_name: 'Guilherme', last_name: 'Ferreira', email: 'guilhermeferreira@gmail.com', adress: 'Caminho Novo da Ribeira dos loucos', phone_number: 993323426 },
    { first_name: 'Gonçalo', last_name: 'Ferreira', email: 'goncaloferreira@gmail.com', adress: 'Caminho Novo da Ribeira dos loucos', phone_number: 939365456 }
]).then(function () {
    return Users.findAll();
}).then(function (Users){
    console.log(Users);
});

module.exports = {
    Users, Books, Loans
}