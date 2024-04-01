const mongoose = require('mongoose');


const Message = mongoose.model('Message' ,{
    contenu:{
        type: String
    },
    dateEnvoi: {
        type: Date,
        default: Date.now,
    },
    statutLecture: {
        type: Boolean,
        default: false,
    },
})


module.exports = Message ;