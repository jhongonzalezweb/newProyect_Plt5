
//Entendiendo los metodos call, aplly y bind.

// Contexto. El contexto donde esatamos parados

$(document).ready( function() {
    console.log(this);
    
});

class Animalito {
    constructor(nombre, annios, tipoDeAlimentacion) {
        this.nombre = nombre;
        this.annios = annios;
        this.tipoDeAlimentacion = tipoDeAlimentacion;
    }
}

var miAnimalito = new Animalito("Don Graf", "5", "Dog Chow Cachorro");

// console.log(miAnimalito);

