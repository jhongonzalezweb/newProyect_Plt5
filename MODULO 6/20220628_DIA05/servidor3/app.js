
const express = require("express");
const app = express();

const bodyParser = require('body-parser');

// Especificamos recursos estaticos
app.use(express.static(__dirname + '/public'));

//extended: false significa que se parse solo string no archivos de imagenes por 
app.use(bodyParser.urlencoded({ extended: false }))

/**Enrutamiento */

// mostrar paginas con numeros y links para mostrar tablas posteriormente
app.post('/mostrarnumeros', (req, res) => {

    let numero1 = req.body.numero1;
    let numero2 = req.body.numero2;

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    let pagina = '<!doctype html> <html><head></head><body>';

    for (let x = numero1; x <= numero2; x++) {
        pagina += `<a href ="/mostrartabla?valor=${x}">${x}</a> -  `
    };
    pagina += '</body></html>'
    res.send(pagina);
});

// Método para mostrar las tablas (dependiendo del número)
app.get('/mostrartabla', (req, res) => 
{
    let num = req.query.valor;
    num = parseInt(num);
    let pagina = '<!doctype html><html><head></head><body>';
    for (let x = 1; x <= 10; x++) {
        let tabla = num * x;
        pagina += `${num} * ${x} = ${tabla} <br>`;
    }
    pagina += '<a href="index.html">Retornar</a>';
    pagina += '</body></html>';
    res.send(pagina);
});

var server = app.listen(8080, () => {
    console.log("Servidor web iniciado");
});