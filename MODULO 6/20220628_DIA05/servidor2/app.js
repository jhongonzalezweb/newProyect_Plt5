
const { response } = require('express');
const express = require('express');
const app = express();

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Método get con una respuesta por defecto
app.get('/', (request, response) =>
{
    console.log("Entramos a esta opción, saludos");
});

// Método para probar nuestro primer ejs
app.get('/ejemplo', (req, res) => 
{
    res.render("index", {titulo: "Enorme y Glorioso equipo Chillan..."});
});

// Método para probar nuestro segunda ejs
app.get('/lenguajes', (req, res) =>
{
    res.render("lenguajesProgramacion", {descripcion: "Curso de JavaScript Nivel Experto"});
});

// Método para manejar el error
app.use( (req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Moricion"
    });
});

const PORT = 9080;
app.listen(PORT, () => 
{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});