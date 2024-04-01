const mongoose = require('mongoose');


const Commentaire = mongoose.model('Commentaire' ,{
    contenu: {
        type: String
    },
    datePublication: {
        type: Date, 
        default: Date.now,
    }



})


module.exports = Commentaire ;