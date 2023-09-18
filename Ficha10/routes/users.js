var express = require('express');
var UserController = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.delete('/:id', UserController.deleteByIdUser);


module.exports = router;