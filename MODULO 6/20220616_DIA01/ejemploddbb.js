
const { Client } = require('pg');

const conectionPG = {
    host: 'localhost',
    user: 'postgres',
    password: 'refineria',
    database: 'postgres',
    port: '5432'
};

consultaPG = new Client(conectionPG);

consultaPG.connect();

const insert = 'select * from usuario'
//const insert = "insert into usuario(id, email) values ('15', 'usuario15@hotmail.com')"

consultaPG.query(insert)
    .then(respuesta => {
        console.log(respuesta.rows)
        consultaPG.end();
    })
    .catch(err => {
        console.log("Mori");
        consultaPG.end();
    })