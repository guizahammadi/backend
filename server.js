const express = require('express');

const inscriptionRoute = require('./route/inscription');

const signalementRoute = require('./route/signalement');

const messageRoute = require('./route/message');

const annonceRoute = require('./route/annonce');

const commentaireRoute = require('./route/commentaire');

const publiciteRoute = require('./route/publicite');

require('./configuration/connect');

const app = express();
app.use(express.json());



app.use('/inscription', inscriptionRoute);
app.use('/signalement', signalementRoute);
app.use('/message', messageRoute);
app.use('/annonce', annonceRoute);
app.use('/commentaire', commentaireRoute);
app.use('/publicite', publiciteRoute);

app.listen( 5000 , ()=>{

    console.log('server work');
} );