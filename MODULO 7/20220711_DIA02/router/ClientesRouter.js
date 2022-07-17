const { request } = require('express');
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");


// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

const Cliente = require('../models/cliente');

// Ver todos los clientes
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


// Codigo para ver cliente( Para despues modificarlo)

router.get('/verCliente/:id', async (request, response) => {
    
    const id = request.params.id;
    const clienteBD = await Cliente.findOne({_id: id});
    
    response.render('editarCliente', {
        
        nombre: clienteBD.nombre,
        apellido: clienteBD.apellido,
        id: clienteBD.id
        
    });
    
})


// Codigo para ver cliente( Para despues modificarlo)

router.post('/verCliente/editarCliente' , async (request, response) => {

    const body = request.body;
    const id = request.body.id;

    try {
        const clienteBD = await Cliente.findByIdAndUpdate(
            id, body, { userFindAndModify: false }
        )

        response.redirect('/clientes')

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;

// mongodb+srv://jhonxawar:<password>@cluster0.sjaj7.mongodb.net/?retryWrites=true&w=majority