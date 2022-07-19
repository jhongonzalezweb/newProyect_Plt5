
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const { userInfo } = require('os');
const { request } = require('http');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const conn = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    database: 'prueba',
    password: '',
    port: 3306
});

conn.connect((error) => {
    if (error) throw error;
    console.log("Conexion correcta");
});
//connecion.end()

//Aqui va ir el codigo de los app
app.get('/perritos', (request, response) => {

    const sqlQuery = "select * from perrito;";

    conn.query(sqlQuery, (error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Select Exitoso");
            console.log(success);
            response.send("www.unapagina.com")
        }
    });
    
})

//Insertar un perrito a la tabla

app.get('/perritos/crear', (request, response) => {
    
    const sqlInsertar = "insert into perrito values (1, 'Maya', 'Puddle');";
    
    conn.query(sqlInsertar, (error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Crear Exitoso");
            console.log(success);
            response.send("www.unapagina.com")
        }
    });
})    

//Eliminar un perrito a la tabla

app.get('/perritos/borrar', (request, response) => {
    
    const sqlEliminar = "delete from perrito where id=3;"
    
    conn.query(sqlEliminar, (error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Eliminar Exitoso");
            console.log(success);
            response.send("www.unapagina.com")
        }
    });
})    


//Buscar un perrito a la tabla

app.get('/perritos/buscar', (request, response) => {
    
    const sqlBuscar = "select * from perrito where id=5;"
    
    conn.query(sqlBuscar, (error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Buscar Exitoso");
            console.log(success);
            const respuestaN = success[0].nombre + " " + success[0].raza
            response.send(respuestaN)
        }
    });
})    

//Editar un perrito a la tabla

app.get('/perritos/editar', (request, response) => {
    
    const sqlEditar = "update perrito SET nombre = 'Mona' where id=5;"
    
    conn.query(sqlEditar, (error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Editar Exitoso");
            console.log(success);
            response.send(success)
        }
    });
})    


//Escucha del servidor
const PORT = 8080

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

