
const deportistas = [
    {
        id: 1,
        nombre: "Rodrigo"
    },
    {
        id: 2,
        nombre: "Consuelo"
    },
    {
        id: 3,
        nombre: "Sergio"
    },
    {
        id: 4,
        nombre: "Milford"
    }
];

const deportes = [
    {
        id: 1,
        deporte: "Pesas"
    },
    {
        id: 2,
        deporte: "Volley"
    },
    {
        id: 3,
        deporte: "Zumba"
    }
];


//Definicion de la funcion
const getDeportista = (id) => {
    //Aqui ira la logica del negocio

    return new Promise((resolve, reject) => {

        const deportista = deportistas.find(dep => dep.id === id)?.nombre;
        //console.log(deportista);

        (deportista)
            ? resolve(deportista)
            : reject(`No existe un deportista con el id ${id}`);
    });
};

const id = 4;

// Invocacion
/*
getDeportista(id)
    .then(deportista => console.log("El / La deportista " + deportista))
    .catch(err => console.log(err));

*/
const getDeporte = (id) => {
    //Aqui inicia la logica de negocio del getDeporte

    return new Promise((resolve, reject) => {

        const miSport = deportes.find(sport => sport.id === id)?.deporte;

        (miSport)
            ? resolve(miSport)
            : reject(`En este caso no se encuentra el id ${id}.`)
    });
};

// Invocacion
/*
getDeporte(id)
    .then(miSport => console.log("Realiza " + miSport))
    .catch(error => console.log(error));
*/

/*
getDeportista(id)
    .then( deportista => {
        nombre = deportista;
        return getDeporte(id)
    })
    .then( deporte => console.log(`El deportista ${nombre} pratica este deporte: ${deporte}.`))
    .catch(error => console.log(error));

*/

//Nueva funcion para considerar la comnunicacion asincrona

const getInfoDeportista = async (id) => {

    try {
        let deportista = await getDeportista(id)
        let deporte = await getDeporte(id)

        return `El deporte asignado a ${deportista} es ${deporte}.`;
    } catch (error) {
        throw error
    }

};

getInfoDeportista(id)
    .then(msg => console.log(msg))
    .catch(msg => console.log(msg))