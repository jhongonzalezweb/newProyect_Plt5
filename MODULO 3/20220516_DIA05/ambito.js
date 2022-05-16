
// console.log(this);

class EstudiantesJS {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

var estudiantePlataforma5 = new EstudiantesJS("Jhon", 35)

//console.log(estudiantePlataforma5.nombre);

var miVariable = function miSuperFunctio() {
    console.log(this);
}
miVariable()