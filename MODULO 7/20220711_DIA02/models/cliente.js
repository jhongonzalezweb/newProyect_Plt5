
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nombre: String,
    apellido: String
});

const Cliente = mongoose.model('Cliente', clienteSchema)

module.exports = Cliente; 