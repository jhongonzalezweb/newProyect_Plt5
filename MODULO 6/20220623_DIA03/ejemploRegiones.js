
const fdb = require('./conectionRegiones');

// Confección consultar la tabla en la que está trabajando

function consultarRegion() {
    let arregloRegion = [];
    const cone = fdb.conectarBBDD()
    cone.query('SELECT * FROM region')
        .then(respuesta => {
            console.log(respuesta.rows)
            arregloRegion.push(respuesta.rows)
            fdb.desconectarBBDD(cone);
            return arregloRegion
        })
        .catch(error => {
            console.log("Mori");
            console.log(error);
            fdb.desconectarBBDD(cone);
        });
}

// Confección de un delete para la tabla en la que está trabajando
function insertarRegion(tabla, id, nombre) {
    const cone = fdb.conectarBBDD();
    cone.query("INSERT INTO " + tabla + " (id, nombre) VALUES ('"+id+"', '"+nombre+"')")
        .then(respuesta => {
            console.log("Se actualizo correctamente")
            fdb.desconectarBBDD(cone);
        })
        .catch(error => {
            console.log("Hicimos la morición")
            console.log(error)
            fdb.desconectarBBDD(cone);
        });
}

// Confección de un delete para la tabla en la que está trabajando
function actualizarRegion(id, nombre) {
    const cone = fdb.conectarBBDD();
    cone.query("UPDATE region SET nombre = '"+ nombre +"' where id='" + id + "'")
        .then(respuesta => {
            console.log("Se actualizo correctamente")
            fdb.desconectarBBDD(cone);
        })
        .catch(error => {
            console.log("Hicimos la morición")
            console.log(error)
            fdb.desconectarBBDD(cone);
        });
}

// Confección de un delete para la tabla en la que está trabajando
function eliminarRegion(id) {
    const cone = fdb.conectarBBDD();
    cone.query("delete from region where id='" + id + "'")
        .then(respuesta => {
            console.log("Se eliminó correctamente")
            fdb.desconectarBBDD(cone);
        })
        .catch(error => {
            console.log("Hicimos la morición")
            console.log(error)
            fdb.desconectarBBDD(cone);
        });
}

module.exports = { consultarRegion, insertarRegion, actualizarRegion, eliminarRegion }