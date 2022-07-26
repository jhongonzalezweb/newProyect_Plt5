
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();


// Capturar los datos del body 
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


//Conexion a la base de datos
const uri = `mongodb+srv://${process.env.USERA}:${process.env.PASSWORDA}@cluster0.sjaj7.mongodb.net/${process.env.DBNAMEA}?retryWrites=true&w=majority`
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log( err ));


//Importacion de router
const authRoutes = require('./routes/auth');


// Codigo de los routers
app.use('/api/user', authRoutes);


// Aplicacion de los routes de index.js
app.get('/', (request, response) => {

    response.json({
        estado: true,
        mensaje: "Esta todo funcionando 0ook"
    })
});


// Inicio del servidor
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`El servidor esta andando en el Puerto ${PORT}`);
})

