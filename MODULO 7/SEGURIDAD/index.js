const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();

// Capturar los datos del body 
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


//Conexion a la base de datos


//Codigo de los routers
app.get('/', (request, response) => {

    response.json({
        estado: true,
        mensaje: "Esta todo bien"

    })
});


// Inicio del servidor

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`El servidor esta andando en el Puerto ${PORT}`);
})
