var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController.js')
//const usersController = require('../controllers/usersController.js')


/* GET home page. */
router.get('/', indexController.index);
//router.get('/users/about', usersController.users_view);


module.exports = router;
