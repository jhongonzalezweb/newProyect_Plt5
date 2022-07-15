const express = require('express');
const router = express.Router();

const Proveedor = require('../models/proveedor');

router.get('/', async (request, response) => {
    try {
        const arrayProveedoresDBM = await Proveedor.find();
        console.log(arrayProveedoresDBM);

        response.render("proveedores", {
            arrayProveedores: arrayProveedoresDBM
        });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;

// mongodb+srv://jhonxawar:<password>@cluster0.sjaj7.mongodb.net/?retryWrites=true&w=majority