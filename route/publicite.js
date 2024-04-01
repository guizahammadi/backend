const express = require('express');
const router = express.Router();
const Publicite = require('../models/publicite');

const { format } = require('date-fns');


const multer = require('multer');

filename = '';

const mystorage = multer.diskStorage({
    destination: './uploads',
    filename: (req , file , redirect)=>{
        let date = new Date();
        let formattedDate = format(date, 'yyyy-MM-dd_HH-mm-ss');
        let fl = formattedDate + '.' + file.mimetype.split('/')[1];
        redirect(null , fl);
        filename = fl;
    }
})
const upload = multer({storage: mystorage});

// Créer une publicité
router.post('/publicites', upload.any('image') , async (req, res) => {
  try {
    const { contenu, dateDebutAff, dateFinAff, image } = req.body;
    const nouvellePublicite = new Publicite({ contenu, dateDebutAff, dateFinAff, image });
    nouvellePublicite.image = filename;
    const publiciteEnregistree = await nouvellePublicite.save();
    res.status(201).json(publiciteEnregistree);
    filename = '';
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtenir toutes les publicités
router.get('/publicites', async (req, res) => {
  try {
    const publicites = await Publicite.find();
    res.json(publicites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
