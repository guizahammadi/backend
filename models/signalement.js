const mongoose = require('mongoose');


const Signalement = mongoose.model('Signalement' ,{
    description:{
        type: String
    },
    photo: String, 
    statut: {
        type: String
    },
    dateSignalement: {
        type: Date,
        default: Date.now,
    },


})


module.exports = Signalement  ;