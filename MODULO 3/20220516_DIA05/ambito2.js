
const casaBabaYaga = {
    nombre: "Casa de Baba Yaga",
    proposito: "Cosas horribles",

    caminar() {
        console.log(`Yo camino porque soy ${this.nombre}`);
    },

    atrapar(individuo) {
        console.log(`Yo, la ${this.nombre} atrapo a ${individuo}`);
    },
    
    darSustito(accion) {
        console.log(`Yo, la ${this.nombre} doy mucho sustito`);
    },

};

//casaBabaYaga.caminar()
//casaBabaYaga.atrapar("Hell Boy")

const laCasaDelTrauko = {
    nombre: "La Casa Del Trauko"
}

casaBabaYaga.caminar.call(laCasaDelTrauko)
casaBabaYaga.atrapar.call(laCasaDelTrauko, "Doncellas")
casaBabaYaga.darSustito.call(laCasaDelTrauko)