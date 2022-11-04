const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name:String,
    id: Number,
    taille:Number, 
    poids: Number,
    base_experience:Number,
    possede: Boolean,
    commentaire: String
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon;