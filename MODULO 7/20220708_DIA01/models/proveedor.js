
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proveedorSchema = new Schema({
    nombre: String,
    direccion: String,
    fono: String,
    mail: String
});

const Proveedor = mongoose.model('proveedores', proveedorSchema)

module.exports = Proveedor; 