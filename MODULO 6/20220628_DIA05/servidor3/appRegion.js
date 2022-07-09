
const { Client } = require("pg");
const express = require("express");
const app = express();

const conectionPG = {
    host: 'localhost',
    user: 'postgres',
    password: 'refineria',
    database: 'postgres',
    port: '5432'
};

const bodyParser = require('body-parser');

// Especificamos recursos estaticos
app.use(express.static(__dirname + '/public'));

//extended: false significa que se parse solo string no archivos de imagenes por 
app.use(bodyParser.urlencoded({ extended: false }))

/**Enrutamiento */
// Ingresar una region a la base de datos

app.post('/ingresarRegionAction', (req, res) => {
    let numRegion = req.body.numeroRegion;
    let nomRegion = req.body.nombreRegion;

    numRegion = parseInt(numRegion);

    let sqlIngreso = "INSERT INTO region (id, nombre) VALUES ('" + numRegion + "', '" + nomRegion + "')"

    const insertarRegion = new Client(conectionPG);
    insertarRegion.connect();

    insertarRegion.query(sqlIngreso)
        .then(respuesta => {
            console.log("Se ingreso la region.");
            insertarRegion.end();
        })
        .catch(error => {
            console.log("No hubo coneccion.");
            console.log(error);
            insertarRegion.end();
        })

    let paginaExito = '<!DOCTYPE html><html><head></head><body>';
    paginaExito += '<h4> La region se ha creado exitosamente </h4>';
    paginaExito += '</br>';
    paginaExito += '</br>';
    paginaExito += '<a href="http://localhost:8080/region.html">Return';
    paginaExito += '</body></html>';

    res.send(paginaExito)

    /*
    let pagina = '<!doctype html><html><head></head><body>';
    for (let x = 1; x <= 10; x++) {
        let tabla = num * x;
        pagina += `${num} * ${x} = ${tabla} <br>`;
    }
    pagina += '<a href="index.html">Retornar</a>';
    pagina += '</body></html>';
    res.send(pagina);
    */
});


// Mostrar las regiones de la base de datos

app.get('/mostarRegionesAction', (req, res) => {

    let sqlConsulta = "SELECT * FROM region"

    const consultaRegiones = new Client(conectionPG);
    consultaRegiones.connect();

    consultaRegiones.query(sqlConsulta)
        .then(respuesta => {

            //console.log(respuesta.rows);

            let paginaExito = '<!DOCTYPE html><html><head></head><body>';
            paginaExito += '<h4> Tabla Regiones </h4>';
            paginaExito += '</br>';
            paginaExito += '<table border=1>';
            paginaExito += '<tr>';
            paginaExito += '<th> Id Region </th>';
            paginaExito += '<th> Nombre Region </th>';
            paginaExito += '<th> Eliminar </th>';
            paginaExito += '<th> Editar </th>';
            paginaExito += '</tr>';
            for (let i = 0; i < respuesta.rows.length; i++) {
                paginaExito += '<tr>';
                paginaExito += '<th>' + respuesta.rows[i]["id"] + '</th>';
                paginaExito += '<th>' + respuesta.rows[i]["nombre"] + '</th>';
                paginaExito += '<th><a href=eliminarRegionAction?id=' + respuesta.rows[i].id + '>Eliminar</th>';
                paginaExito += '<th><a href=editarRegionAction?id=' + respuesta.rows[i].id + '>Editar</th>';

                paginaExito += '</tr>';
            }
            paginaExito += '</table>';
            paginaExito += '</br>';
            paginaExito += '<a href="http://localhost:8080/region.html">Return';
            paginaExito += '</body></html>';
            res.send(paginaExito)
            consultaRegiones.end();
        })
        .catch(error => {
            console.log("No hubo coneccion.");
            console.log(error);
            consultaRegiones.end();
        })
})

// Eliminar una Región en la BBDD
app.get('/eliminarRegionAction/', (req, res) => {

    const host = "localhost";
    let miURL = new URL(`http://${host}:${req.url}`);
    const parametros = miURL.searchParams.values;

    let idRegion = 0;

    miURL.searchParams.forEach((id, nombre) => {

        idRegion = id;
        console.log(`-===== ${nombre} =====-`);
        console.log(`-===== ${id} =====-`);

    });

    idRegion = parseInt(idRegion);

    let sqlDelete = "delete from region where id = " + idRegion + "";
    console.log(sqlDelete);
    const deleteRegion = new Client(conectionPG);
    deleteRegion.connect();

    deleteRegion.query(sqlDelete)
        .then(respuesta => {
            console.log("Se eliminó la Región");
            deleteRegion.end();
        })
        .catch(error => {
            console.log("Hicimos la Morición");
            ///console.log(error);
            deleteRegion.end();
        });

    res.redirect('mostarRegionesAction');
});




/**Inicio del servidor */

var server = app.listen(8080, () => {
    console.log("Servidor web iniciado");
});