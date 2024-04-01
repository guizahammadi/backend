const express = require('express');
const router = express.Router();
const Commentaire = require('../models/commentaire');

// Créer un commentaire
router.post('/commentaires', async (req, res) => {
  try {
    const { contenu } = req.body;
    const nouveauCommentaire = new Commentaire({ contenu });
    const commentaireEnregistre = await nouveauCommentaire.save();
    res.status(201).json(commentaireEnregistre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtenir tous les commentaires
router.get('/commentaires', async (req, res) => {
  try {
    const commentaires = await Commentaire.find();
    res.json(commentaires);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
