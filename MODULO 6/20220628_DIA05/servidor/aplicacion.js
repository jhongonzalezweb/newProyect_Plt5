const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.use( (request, response, next) => {
    response.status(404).sendFile(__dirname + "/public/404.html");
});

// Método get con una respuesta por defecto
app.get('/', (request, response) =>
{
    console.log("Entramos a esta opción, saludos");
});

app.get('/ejemplo', (request, response) => 
{
    response.send("Hola plataforma 5");
});

// Método get para mostrar una página con un mensaje de Usuario
app.get('/usuarios', (request, response) =>
{
    response.send("Página para usuarios");
});

const PORT = 8080;
app.listen(PORT, () => 
{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
