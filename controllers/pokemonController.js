const Pokemon = require('../models/pokemonModel')

// Affichage de tous les Pokemons : http://localhost:3000/pokemon
const index = (req, res) => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(data => {
            res.render('pokemon', { 
                pokemon: data.results
            });
        })
}

//Information de chaque Pokemon : http://localhost:3000/pokemon/pokemonDetails/1
const pokemonDetails = (req, res) => {
const { id } = req.params
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      res.render('pokemonDetails', {
        title: id,
        pokemon: data
      })
    })
}

//requête d'ajout au favoris
const ajoutFavoris= (req, res) =>{
    const { id } = req.params;
    Pokemon.find({id:id})
    .then(pokemon => {
        if(pokemon.length === 0) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((res) => res.json())
            .then(data => {
              const name = data.name;
              const id = data.id;
              const taille = data.height;
              const poids = data.weight;
              const base_experience = data.base_experience;
              Pokemon.create({ name, id, taille, poids, base_experience})
                .then(pokemon => res.status(201).json('pokemon ajouté dans la liste des favoris'))
                .catch(err => res.status(500).json(err))
            })  
        }
    })  
}

// afficher les listes des Pokemon favoris : http://localhost:3000/pokemon/pokemonFavoris
const afficherPokeFavoris = (req, res) => {
    Pokemon.find()
        .then(pokemon => {
            res.render('pokemonFavoris', {title: 'Mes pokémons favoris', pokemon: pokemon})
        })
        .catch(err => res.json(err))
}

// supprimé un pokemon 
const supprimePokemon = (req, res) => {
  const { id } = req.params;
  Pokemon.deleteOne({id: id})
      .then(() => res.json('Pokemon supprimé'))
      .catch(err => res.json(err))
}




module.exports = {
    index, 
    pokemonDetails, 
    ajoutFavoris,
    afficherPokeFavoris,
    supprimePokemon
}