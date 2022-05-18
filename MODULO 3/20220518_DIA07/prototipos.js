
function Persona(nombre) {
    this.nombre = nombre
    this.saludar = function() {
        return `${this.nombre} dice Hola...`
    };
/*
    this.saludarIngles = function() {
        return `${this.nombre} say hi..."`
    }*/
}

Persona.prototype.saludarIngles = function() {
    return `${this.nombre} say hi..."`
}

Persona.prototype.saludarItaliano = function() {
    return `${this.nombre} dì ciao`

}

var personaUno = new Persona("Rodrigo");
//console.log(personaUno.saludarIngles());
console.log(personaUno.saludarItaliano());