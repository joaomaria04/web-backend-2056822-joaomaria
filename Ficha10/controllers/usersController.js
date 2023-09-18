const User = require('../sequelize').Users;

exports.getAllUsers = (req, res , next ) => {
    User.findAll({include:[User, Book]}).then(results => {
        res.send(results);
    });
}

exports.getUserById = (req, res , next ) => {
    Loan.findByPK(req.params.id).then(results => {
        res.send(results);
    });
}

exports.updateByIdUsers = (req, res , next ) => {
    var id = req.params.id;
    var details = req.body;
    User.update().then(results => {
        res.send(results);
    });
}

exports.deleteByIdUser = (req, res , next ) => {
    var id = req.params.id;
    User.destroy({
      where: { id: id }
    })
    .then(result => {
      // handle result
    });
  }

exports.deleteByIdUser = (req, res, next) => {
    var id = req.params.id;
    User.findByPK(id)
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


exports.createUsers = (req, res, next) => {

    

    res.send("Users created successfully");
  };