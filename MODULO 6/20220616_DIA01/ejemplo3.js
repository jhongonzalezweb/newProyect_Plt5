
const fs = require('fs');

const mascota = [
    {
        nombre: 'Rex',
        edad: 8
    },
    {
        nombre: 'Meli',
        edad: 2
    },
]

//fs.writeFileSync('./mascotas.json', JSON.stringify(mascota))

const getData = () => {
    let data = fs.readFileSync('./mascotas.json', 'utf8');

    if(!data) {
        return [];
    }
    else {
        const file = JSON.parse(data);
        return file;
    }
}

const datosMascota = getData();

console.log(datosMascota);