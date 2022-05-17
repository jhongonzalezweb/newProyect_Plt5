
function darleMimosAlGato(callback) {
    var miGato = "Rin"
    callback(miGato)
}

function aComer(nombreDelGato) {
    console.log("Le estoy dando de comer a " + nombreDelGato);
}

function acariciar(nombreDelGato) {
    console.log("Acariciando al gato " + nombreDelGato);
}

function rascarGuata(nombreDelGato) {
    console.log("Rascando la guata al gato " + nombreDelGato);
}

function jugandoConElGato(nombreDelGato) {
    console.log("Jugando con una pelota con el gato " + nombreDelGato);
}

darleMimosAlGato(jugandoConElGato);