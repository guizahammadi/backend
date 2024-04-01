const express = require('express');
const router = express.Router();
const Signalement = require('../models/signalement');

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

router.post('/signalements', upload.any('photo') ,  async (req, res) => {
    try {
      const { description, photo } = req.body;
      const signalement = new Signalement({ description, photo });
      signalement.photo = filename;
      await signalement.save();
      res.status(201).json(signalement);
      filename = '';
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur serveur');
    }
  });
  // Route pour obtenir tous les signalements
  router.get('/signalements', async (req, res) => {
    try {
      const signalements = await Signalement.find();
      res.json(signalements);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur serveur');
    }
  });
  
  module.exports = router;