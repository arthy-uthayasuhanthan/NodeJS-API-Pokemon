var express = require('express');
var router = express.Router();

//import du controller :
const usersController = require('../controllers/usersController.js')
/* GET users listing. */
router.get('/', usersController.index);

router.get('/about', usersController.users_view);


/*POST --> récupérer les requêtes du controller userController*/
router.post('/', usersController.create);




//////
router.delete('/user', usersController.deleteUser);
router.put('/user', usersController.editUser);


module.exports = router;
