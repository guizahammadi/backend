const express = require('express');
const router = express.Router();
const Inscription = require('../models/inscription');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const data = req.body;
        const exiInsription = await Inscription.findOne({ email: data.email })
        if (exiInsription) {
            return res.status(400).send({ message: 'Cet email est déjà utilisé.' });
        }

        const usr = new Inscription(data);
        const salt = bcrypt.genSaltSync(10);
        const cryptedPass = await bcrypt.hashSync(data.password, salt);
        usr.password = cryptedPass;

        const saved = await usr.save();
        res.status(200).send(saved);
    } catch (err) {
        res.status(400).send({ message: 'Une erreur est survenue lors de l\'enregistrement.' });
    }
});

router.post('/login', async(req,res)=>{
    data = req.body;
    inscription = await Inscription.findOne({email: data.email})
    if(!inscription){
        res.status(404).send('email invalid')
    }else{
        validPass = bcrypt.compareSync(data.password,inscription.password)
        if(!validPass){
            res.status(401).send('password invalid!')
        }else{
            payload = {
                _id: Inscription._id,
                email: Inscription.email,
                name: Inscription.name
            }
            token = jwt.sign(payload , '1234567')
            res.status(200).send({mytoken: token})
        }
    }
})


module.exports = router;