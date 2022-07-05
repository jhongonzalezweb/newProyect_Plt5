

const { Client } = require('pg');

// Funcion para conectar a la BBDD
function conectarBBDD() {
    
    const conectionPG = {
        host: 'localhost',
        user: 'postgres',
        password: 'refineria',
        database: 'postgres',
        port: '5432'
    };
    
    crudPG = new Client(conectionPG);
    crudPG.connect();
    
    return crudPG;
}

// Funcion para desconectar a la BBDD
function desconectarBBDD(conexion) {
    conexion.end();
}

// Exportacion de Modulos
module.exports = { conectarBBDD, desconectarBBDD }; 