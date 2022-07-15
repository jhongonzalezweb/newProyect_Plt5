const { request } = require('express');
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

const Cliente = require('../models/cliente');

router.get('/', async (request, response) => {
    try {
        const arrayClientesDBM = await Cliente.find();

        response.render("clientes", {
            arrayClientes: arrayClientesDBM
        });

    } catch (error) {
        console.log(error);
    }
});



// Codigo para dirigir la accion a la pagina crear clientes
router.get('/crear', (request, response) => {
    response.render('crear');
})


// Codigo para agregar cliente
router.post('/agregarCliente', async (request, response) => {
 
    console.log("******************************** x ********************************");
    const body = request.body;
    console.log("body", body);
    console.log("******************************** x ********************************");
    
    try {
        const clienteBD = new Cliente(body);
        await clienteBD.save();

        response.redirect('/clientes')
 
    } catch (error) {
        console.log(error);
    }

})






module.exports = router;

// mongodb+srv://jhonxawar:<password>@cluster0.sjaj7.mongodb.net/?retryWrites=true&w=majority