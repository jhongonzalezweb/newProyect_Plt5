 const express = require('express');
const router = express.Router();

const Cliente = require('../models/cliente');

router.get('/', async (request, response) => {
    try {
        console.log("arrayClientesDBM");
        const arrayClientesDBM = await Cliente.find();
        console.log(arrayClientesDBM);

        response.render("clientes", {
            arrayClientes: arrayClientesDBM
        });

    } catch (error) {
        console.log(error);
    }
});


module.exports = router;

// mongodb+srv://jhonxawar:<password>@cluster0.sjaj7.mongodb.net/?retryWrites=true&w=majority