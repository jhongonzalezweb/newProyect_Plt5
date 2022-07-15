
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


/************************************************************/
/*********************** Enrutamiento ***********************/
/************************************************************/

/****************** INGRESAR ******************/

app.post('/ingresarPokemonAction', (req, res) => {
    let numPokemon = req.body.numeroPokemon;
    let nomPokemon = req.body.nombrePokemon;
    let tipoPokemon = req.body.tipoPokemon;

    numPokemon = parseInt(numPokemon);

    let sqlIngresoPokemon = "insert into pokemonGo values (" + numPokemon + ", '" + nomPokemon + "', '" + tipoPokemon + "');"
    console.log(sqlIngresoPokemon)

    const insertarPokemon = new Client(conectionPG);
    insertarPokemon.connect();

    insertarPokemon.query(sqlIngresoPokemon)
        .then(respuesta => {
            console.log("Se ingreso el Pokemon.");
            insertarPokemon.end();
        })
        .catch(error => {
            console.log("Nos fuimos a la moricion.");
            console.log(error);
            insertarPokemon.end();
        })

    let paginaExito = '<!DOCTYPE html><html><head></head><body>';
    paginaExito += '<h4> El pokemon se ha creado exitosamente </h4>';
    paginaExito += '</br>';
    paginaExito += '</br>';
    paginaExito += '<a href="http://localhost:8080/pokemon.html">Return';
    paginaExito += '</body></html>';
    res.send(paginaExito)

});


/****************** MOSTAR ******************/

app.get('/mostarPokemonAction', (req, res) => {

    let sqlConsultaPokemon = "SELECT * FROM pokemonGo order by id;"

    const consultaPokemones = new Client(conectionPG);
    consultaPokemones.connect();

    consultaPokemones.query(sqlConsultaPokemon)
        .then(respuesta => {

            console.log(respuesta.rows);

            let paginaExito = '<!DOCTYPE html><html><head></head><body>';
            paginaExito += '<h4> Tabla Pokemones </h4>';
            paginaExito += '</br>';
            paginaExito += '<style>';
            paginaExito += 'body{background-color: black; color: white; }';
            paginaExito += '</style>';
            paginaExito += '<table border=1>';
            paginaExito += '<tr>';
            paginaExito += '<th> Id Pokemon </th>';
            paginaExito += '<th> Nombre Pokemon </th>';
            paginaExito += '<th> Tipo Pokemon </th>';
            paginaExito += '<th> Eliminar </th>';
            paginaExito += '<th> Editar </th>';
            paginaExito += '</tr>';
            for (let i = 0; i < respuesta.rows.length; i++) {
                paginaExito += '<tr>';
                paginaExito += '<th>' + respuesta.rows[i]["id"] + '</th>';
                paginaExito += '<th>' + respuesta.rows[i]["nombre"] + '</th>';
                paginaExito += '<th>' + respuesta.rows[i]["tipo"] + '</th>';
                paginaExito += '<th><a href=eliminarPokemonAction?id=' + respuesta.rows[i].id + '>Eliminar</th>';
                paginaExito += '<th><a href=editarPokemonAction?id=' + respuesta.rows[i].id + '>Editar</th>';
                paginaExito += '</tr>';
            }
            
            paginaExito += '</table>';
            paginaExito += '</br>';
            paginaExito += '<a href="http://localhost:8080/pokemon.html">Return';
            paginaExito += '</body></html>';
            res.send(paginaExito)
            consultaPokemones.end();
        })
        .catch(error => {
            console.log("Hicimos la moricion.");
            console.log(error);
            consultaPokemones.end();
        });
});


/****************** ELIMINAR ******************/

app.get('/eliminarPokemonAction/', (req, res) => {

    const host = "localhost";
    let miURL = new URL(`http://${host}:${req.url}`);
    const parametros = miURL.searchParams.values;

    let idPokemon = 0;

    miURL.searchParams.forEach((id, nombre, tipo) => {

        idPokemon = id;
        console.log(`-===== ${id} =====-`);
        console.log(`-===== ${nombre} =====-`);
        console.log(`-===== ${tipo} =====-`);

    });

    idPokemon = parseInt(idPokemon);

    let sqlDeletePokemon = "DELETE from pokemonGo where id = " + idPokemon + "";
    console.log(sqlDeletePokemon);
    const deletePokemon = new Client(conectionPG);
    deletePokemon.connect();

    deletePokemon.query(sqlDeletePokemon)
        .then(respuesta => {
            console.log("Se eliminó la Región");
            deletePokemon.end();
        })
        .catch(error => {
            console.log("Hicimos la Morición");
            ///console.log(error);
            deletePokemon.end();
        });
    res.redirect('mostarPokemonAction');
});



/****************** EDITAR FORM ******************/

app.get('/editarPokemonAction/', (req, res) => {
    
    const host = "localhost";
    let miURL = new URL(`http://${host}:${req.url}`);
    const parametros = miURL.searchParams.values;
    
    let idPokemon = 0;
    
    miURL.searchParams.forEach((id, nombre, tipo) => {
        
        idPokemon = id;
        console.log(`-===== ${id} =====-`);
        console.log(`-===== ${nombre} =====-`);
        console.log(`-===== ${tipo} =====-`);
        
    });
    
    idPokemon = parseInt(idPokemon);
    
    let paginaExito = '<!DOCTYPE html><html><head></head><body>';
    paginaExito += '<h4> Editar Pokemon: </h4>';
    paginaExito += '</br>';
    paginaExito += '<form action="editarNombrePokemonAction" method="post">';
    paginaExito += 'Id del Pokemon: ' + idPokemon;
    paginaExito += '</br>';
    paginaExito += 'Ingrese el nuevo nombre del Pokemon';
    paginaExito += '</br>';
    paginaExito += '<input type="text" name="nuevoNombrePokemon" size="50"><br>';
    paginaExito += '</br>';
    paginaExito += 'Ingrese el nuevo tipo del Pokemon';
    paginaExito += '</br>';
    paginaExito += '<input type="text" name="nuevoTipoPokemon" size="50"><br>';
    paginaExito += '</br>';
    paginaExito += '<input type="submit" value="Modificar Pokemon">';
    paginaExito += '<input type="hidden" name="idPokemon" value=' + idPokemon + '>';
    paginaExito += '</form>';
    paginaExito += '</body>';
    paginaExito += '</html>';
    
    res.send(paginaExito);

});


/****************** EDITAR VISTA ******************/

app.post('/editarNombrePokemonAction/', (req, res) => {
    
    let numPokemon = req.body.idPokemon;
    let nomPokemon = req.body.nuevoNombrePokemon;
    let tipoPokemon = req.body.nuevoTipoPokemon;
    console.log(nomPokemon);

    numPokemon = parseInt(numPokemon);

    const host = "localhost";
    let miURL = new URL(`http://${host}:${req.url}`);
    const parametros = miURL.searchParams.values;

    let idPokemon = 0;

    miURL.searchParams.forEach((id, nombre, tipo) => {
        idPokemon = id;
        console.log(`-===== ${id} =====-`);
        console.log(`-===== ${nombre} =====-`);
        console.log(`-===== ${tipo} =====-`);
    });

    idPokemon = parseInt(idPokemon);
    let sqlUpdatePokemon = "update pokemonGo set nombre='" + nomPokemon + "', tipo='" + tipoPokemon + "' where id=" + numPokemon + ";";
    console.log(sqlUpdatePokemon);
    const updatePokemon = new Client(conectionPG);
    updatePokemon.connect();

    updatePokemon.query(sqlUpdatePokemon)
        .then(respuesta => {
            console.log("Se actualizó Pokemon");
            updatePokemon.end();
        })
        .catch(error => {
            console.log("Hicimos la Morición");
            ///console.log(error);
            updatePokemon.end();
        });

    res.redirect('mostarPokemonAction');
});


/***********************Inicio del servidor ***********************/

var server = app.listen(8080, () => {
    console.log("Servidor web iniciado");
});

