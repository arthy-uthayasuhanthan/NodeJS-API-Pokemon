var express = require('express');
var router = express.Router();
const pokemonController = require('../controllers/pokemonController.js')

/* GET home page. */
router.get('/', pokemonController.index);
router.get('/pokemonDetails/:id', pokemonController.pokemonDetails);
router.post('/:id', pokemonController.ajoutFavoris);
router.get('/pokemonFavoris', pokemonController.afficherPokeFavoris);
router.get('/supprimePokemon/:id', pokemonController.supprimePokemon);

module.exports = router;