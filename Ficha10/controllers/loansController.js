const Loan = require('../sequelize').Loans;
const Book = require('../sequelize').Books;
const User = require('../sequelize').Users;

exports.getAllLoans = (req, res , next ) => {
    Loan.findAll({include:[User, Book]}).then(results => {
        res.send(results);
    });
}

exports.getLoanById = (req, res , next ) => {
    Loan.findByPK(req.params.id).then(results => {
        res.send(results);
    });
}

exports.updateByIdLoans = (req, res , next ) => {
    var id = req.params.id;
    var details = req.body;
    Loan.update().then(results => {
        res.send(results);
    });
}

exports.deleteByIdLoan = (req, res , next ) => {
    var id = req.params.id;
    Loan.destroy({
      where: { id: id }
    })
    .then(result => {
      // handle result
    });
  }

exports.deleteByIdLoan = (req, res, next) => {
    var id = req.params.id;
    Loan.findByPK(id)
        .then(results => {
            // Perform the deletion logic based on the 'results' obtained
            // and delete the loan with the specified ID

            // Send a response indicating the success of the deletion
            res.send("Loan deleted successfully");
        })
        .catch(error => {
            // Handle any errors that occur during the deletion process
            // and send an appropriate error response
            res.status(500).send("Error deleting loan: " + error.message);
        });
}


exports.createLoans = (req, res, next) => {

    

    res.send("Loan created successfully");
  };