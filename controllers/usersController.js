const User = require('../models/userModel')



const create = (req, res) =>{
    const{ name, age, city} = req.body

    User.create({name, age, city})
    .then(user=> res.json(user))
    .catch(err => res.json(err))
}

//créer un controlleur qui va créer un view users
const users_view = (req,res) =>{
    res.render('users', {name: 'John', age:25, ville:'Paris'})
}


const index = (req, res) => {
    User.find()
    .then(users => {
        res.render('users', {users:users})
    })
    .catch(err => res.json(err))

}

const editUser = (req, res) => {
    const{ name, age, city} = req.body
    User.updateOne({name: req.body.name}, {
        name: req.body.newName,
        age: req.body.newAge,
        city: req.body.newCity
    })
    .then(() => res.json('Data updated'))
    .catch(err => res.json(err))
}

const deleteUser = (req, res) => {
    User.deleteOne({name: req.body.name})
        .then(() => res.json('Data deleted'))
        .catch(err => res.json(err))

}

module.exports = {
    users_view,
    create,
    index, 
    editUser, 
    deleteUser
}
//Renvoyer un tableau avec des users 
//{name: , age: , ville: }
//Dans la vue : afficher ces données sous la forme d'une liste
