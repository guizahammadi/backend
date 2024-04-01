const mongoose = require('mongoose');


const Annonce = mongoose.model('Annonce' ,{
    titre:{
        type: String
    },
    contenu: {
        type: String
    },
    datePublication: {
        type: Date, 
        default: Date.now,
    }



})


module.exports = Annonce ;