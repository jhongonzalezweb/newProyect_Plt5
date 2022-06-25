
const { Client } = require('pg');

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

function desconectarBBDD(conexion) {
    conexion.end();
}

module.exports = { conectarBBDD, desconectarBBDD }; 