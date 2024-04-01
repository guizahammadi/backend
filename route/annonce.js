const express = require('express');
const router = express.Router();
const Annonce = require('../models/annonce');

// Créer une annonce municipale
router.post('/annonces', async (req, res) => {
  try {
    const { titre, contenu } = req.body;
    const nouvelleAnnonce = new Annonce({ titre, contenu });
    const annonceEnregistree = await nouvelleAnnonce.save();
    res.status(201).json(annonceEnregistree);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtenir toutes les annonces municipales
router.get('/annonces', async (req, res) => {
  try {
    const annonces = await Annonce.find();
    res.json(annonces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
