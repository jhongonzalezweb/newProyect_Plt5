
const db = require('./conection');

// Confeccion de una consulta general
function hacerSelect(tabla) {
    const cone = db.conectarBBDD()
    cone.query('SELECT * FROM ' + tabla)
        .then(respuesta => {
            console.log(respuesta.rows)
            db.desconectarBBDD(cone);
        })
        .catch(error => {
            console.log("Mori");
            console.log(error);
            db.desconectarBBDD(cone);
        });
}

// Confeccion de una [tabla, id, nombre] consulta general
function insertarTabla(tabla, id,nombre) {
    const cone = db.conectarBBDD()
    let sqlConsulta = "INSERT INTO " + tabla + " (id, nombre) VALUES ('"+id+"', '"+nombre+"')"
    cone.query(sqlConsulta)
        .then(respuesta => {
            console.log("Se ingreso correctamente!")
            db.desconectarBBDD(cone);
        })
        .catch(error => {
            console.log("Mori");
            console.log(error);
            db.desconectarBBDD(cone);
        });
}

function updateTabla(tabla, id, nombre) {
    const cone = db.conectarBBDD()
    let sqlConsulta = "update "+tabla+" set nombre = '"+nombre+"' where id = "+id+";"
    cone.query(sqlConsulta)
        .then(respuesta => {
            console.log("Se modifico correctamente")
            db.desconectarBBDD(cone);
        })
        .catch(error => {
            console.log("Mori");
            //console.log(error);
            db.desconectarBBDD(cone);
        });
}

// Confeccion de una consulta general
function eliminar(nombre) {
    const cone = db.conectarBBDD()
    cone.query("delete from gatito where nombre = '" + nombre + "'")
        .then(respuesta => {
            console.log(respuesta.rows)
            db.desconectarBBDD(cone);
        })
        .catch(error => {
            console.log("Mori");
            console.log(error);
            db.desconectarBBDD(cone);
        });
}

// LLAMADA A LAS FUNCIONES 

//insertarTabla('gatito', 7,'Siete')
//updateTabla('gatito', 12,'Doce')
//eliminar('Cinco--')
hacerSelect('gatito')


