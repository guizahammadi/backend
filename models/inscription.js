const mongoose = require('mongoose');


const Inscription = mongoose.model('Inscription' ,{
    nom:{
        type: String
    },
    prenom: {
        type: String
    },
    adresse: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }



})


module.exports = Inscription ;