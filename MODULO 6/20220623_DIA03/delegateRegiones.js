
const delegateBD = require('./ejemploRegiones');

function consultarRegion() {
    delegateBD.consultarRegion()
}

function insertarRegion() {
    delegateBD.insertarRegion('region',13,'Gracias')
}

function actualizarRegion() {
    delegateBD.actualizarRegion(11, 'Cerca')
}

function eliminarRegion() {
    delegateBD.eliminarRegion(11)
}

// insertarRegion()
// actualizarRegion()
// eliminarRegion()
consultarRegion()
