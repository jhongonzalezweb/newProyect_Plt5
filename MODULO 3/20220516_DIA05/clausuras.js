/**
function iniciar() {
    var nombre = "La Pincoya";

    function mostrarNombre() {
        console.log(nombre);
    }

    mostrarNombre()

};

iniciar();
 */

function crearFuncion() {
    var nombre = "El caleuche";

    function mostrarNombre() {
        console.log(nombre);
    }

    return mostrarNombre
}

var miFuncion = crearFuncion();
miFuncion();
