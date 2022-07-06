
const express = require("express");
const app = express();

const bodyParser = require('body-parser');


var server = app.listen(8080, () => {
    console.log("Servidor web iniciado");
});