const User = require('../models/User');
 
const router = require('express').Router();
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const { request } = require('express');
 
const schemeRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});

// Codigo para logear a un usuario
router.post('/login', (request, response) => {
    response.json({
        mensaje: 'Entre al login'
    })
}),

//Metodo para gegistrar un usuario
router.post('/register', async (request, response) =>
{
    // Validación de la data que nos llega por el request
 
    const { error } = schemeRegister.validate(request.body);
 
    console.log("error", error);
 
    if (error) {
        return response.status(400).json(
            {
                error: error.details[0].message
            }
        )
    }

    // Validacion si correo ya existe en la base de datos
    const isEmailExist = await User.findOne({ email: request.body.email });
    if (isEmailExist) {
        return response.status(400).json({ error: 'Email ya registrado' });
    }
 
    // Encriptación del password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(request.body.password, salt);
 
    // Creación de nuestro usuario
    const user = new User(
        {
            name: request.body.name,
            email: request.body.email,
            password: password
        });
   
    try {
        const savedUser = await user.save();
        response.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        response.status(400).json({error});
    }
   
});
 
module.exports = router;

