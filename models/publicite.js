const mongoose = require('mongoose');


const Publicite = mongoose.model('Publicite' ,{
    contenu: {
        type: String
    },
    dateDebutAff: {
        type: Date, 
    },
    dateFinAff: {
        type: Date, 
    },
    image: {
        type: String,
    }



})


module.exports = Publicite ;