const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/baladiti')
    .then(
        ()=>{
            console.log('connected');
        }
    )
    .catch(
        (erreur)=>{
            console.log(erreur);
        }
    )


module.exports = mongoose;