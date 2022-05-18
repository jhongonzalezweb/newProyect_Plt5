
/**
function Persona(nombre) {
    this.nombre = nombre;
    this.saludar = function() {
        return `${this.nombre} dice hola`;
    };
}

const personaUno = new Persona("Rodrigo");
const personaDos = new Persona("Juan");

console.log(personaUno);
console.log(personaDos);

console.log(personaUno.nombre);
console.log(personaUno.saludar());
 */

var personaUno = new Object();
personaUno.nombre = "Rodrigo"
personaUno.saludar = function() {
    return `${this.nombre} dice hola `
};

console.log(personaUno);
console.log(personaUno.saludar());
