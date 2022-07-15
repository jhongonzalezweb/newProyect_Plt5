const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

//Datos para la conexion a MongoDB
const user = "jhonxawar";
const password = "refineria";
const dbname = "empresa";
const uri = `mongodb+srv://${user}:${password}@cluster0.sjaj7.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log( err ));


// Motor de plantillas, definición de rutas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

// Especificación de las rutas a ocupar
app.use('/', require('./router/rutasWeb'));
app.use('/clientes', require('./router/ClientesRouter'))
app.use('/proveedores', require('./router/ProveedoresRouter'))

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
