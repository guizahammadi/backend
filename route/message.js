const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// Route pour créer un message
router.post('/messages', async (req, res) => {
    try {
      const { contenu } = req.body;
      const message = new Message({ contenu });
      await message.save();
      res.status(201).json(message);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur serveur');
    }
  });
  
  // Route pour obtenir tous les messages
  router.get('/messages', async (req, res) => {
    try {
      const messages = await Message.find();
      res.json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur serveur');
    }
  });
  
  // Route pour mettre à jour le statut de lecture d'un message
  router.put('/messages/:id', async (req, res) => {
    try {
      const message = await Message.findByIdAndUpdate(
        req.params.id,
        { $set: { statutLecture: true } },
        { new: true }
      );
      res.json(message);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur serveur');
    }
  });



module.exports = router;