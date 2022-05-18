class Persona {
    constructor(nombreP, edadP) {
        this.nombre = nombreP;
        this.edad = edadP;
    }

    saludar() {
        return `${this.nombre} esta saludando`
    }

    despedirse() {
        return `${this.nombre} se esta despidiendo como PERSONA`
    }
}

class Estudiante extends Persona {

    constructor(nombreP, edadP, notasP = []) {

        super(nombreP, edadP);
        this.notas = notasP;

    }

    set setNotas(notaP2) {
        this.notas.push(notaP2)
    }

    get getNotas() {
        return this.notas;
    }

    saludar() {
        return `${this.nombre} es estudiante!!!!" y esta saludando`
    }

    despedirse() {
        return `${this.nombre} se esta despidiendo como ESTUDIANTE`
    }

    promedio() {
        var arreglo = this.getNotas;
        var suma = 0;

        for (var it = 0; it <arreglo.length; it++) {
            suma = suma + arreglo[it]
        }
        return suma / arreglo.length
    }

}

var ejemploEstudiante = new Estudiante("Rodrigo", 32, [6,7,5]);

//console.log(ejemploEstudiante);

ejemploEstudiante.setNotas = 4;

//console.log(ejemploEstudiante);

//console.log(ejemploEstudiante.getNotas);

console.log(ejemploEstudiante.promedio());

/*
console.log(ejemploEstudiante);
//console.log(ejemploEstudiante.saludar());

var ejemploPersona = new Persona("Juan Random", 25);
//console.log(ejemploPersona.saludar());

var ejemploDespedidaPersona = new Persona("Maria Random", 22)
var ejemploDespedidaEstudiante = new Estudiante("Maria Random", 22)

console.log(ejemploDespedidaPersona.despedirse())
console.log(ejemploDespedidaEstudiante.despedirse())
*/