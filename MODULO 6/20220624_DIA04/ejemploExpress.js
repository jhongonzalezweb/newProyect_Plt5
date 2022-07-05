
const fdb = require('./conectionRegiones.js');
const express = require('express');
const app = express();

app.get('/prueba', (request, response) => {
    response.writeHead(200);
    response.end("Hola Mundo Plataforma 5 con express..");
    //console.log(response);
});

app.get('/mostrarclientes', (request, response) => {
    response.end("<h1>Hola Mostrar clientes..</h1>");
});

app.get('/borrarclientes', (request, response) => {
    response.end("<h1>Borrar clientes..</h1>");
});

app.get('/sumarclientes', (request, response) => {
    response.end("<h1>Sumar clientes..</h1>");
});

app.get('/regiones', (request, response) => {
    
    const cone = fdb.conectarBBDD();
    cone.query('SELECT * FROM region')
        .then(respuesta => {
            response.send(respuesta.rows);
            fdb.desconectarBBDD(cone);
        })
        .catch(error => {
            console.log("Mori");
            console.log(error);
            fdb.desconectarBBDD(cone);
        });
});

app.get('/insertarRegiones', (request, response) => {
    
    const cone = fdb.conectarBBDD();
    cone.query("INSERT INTO region (id, nombre) VALUES (16, 'Silla')")
        .then(respuesta => {
            response.send("Se inserto correctamente la region!");
            fdb.desconectarBBDD(cone);
        })
        .catch(error => {
            console.log("Mori");
            console.log(error);
            fdb.desconectarBBDD(cone);
        });
});

app.get('/auto', (request, response) => {
    
    const cone = fdb.conectarBBDD();
    cone.query('SELECT * FROM auto')
        .then(respuesta => {
            response.send(respuesta.rows);
            fdb.desconectarBBDD(cone);
        })
        .catch(error => {
            console.log("Mori");
            console.log(error);
            fdb.desconectarBBDD(cone);
        });
});

const PORT = 8080;
app.listen(PORT);
console.log(`Estoy oyendo por el Puerto ${PORT}`);
