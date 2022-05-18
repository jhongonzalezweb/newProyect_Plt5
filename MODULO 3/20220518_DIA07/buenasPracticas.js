class Persona {
    constructor(nombre, libros) {
        this.nombre = nombre;
        this.libros = [];
        this.discos = [];
    }

    //setter
    set setLibro(libro) {
        this.libros.push(libro);
    }

    //setter para los discos
    set setDisco(disco) {
        this.discos.push(disco);
    }

    //getter
    get getLibros() {
        return this.libros;
    }

    //getter para discos
    get getDiscos() {
        return this.discos;
    }

    //buscar libro por titulo

    buscarLibroPorTitulo(titulo) {
        var libro = this.libros.find(
            (item) => item.titulo === titulo
        );
        return libro;
    }


    //buscar disco por titulo

    buscarDiscoPorTitulo(titulo) {
        var disco = this.discos.find(
            (item) => item.titulo === titulo
        );
        return disco;
    }

    //buscar libro por autor

    buscarLibroPorAutor(autor) {
        var libro = this.libros.find(
            (item) => item.autor === autor
        );
        return libro;
    }

    //buscar disco por autor

    buscarDiscoPorAutor(banda) {
        var disco = this.discos.find(
            (item) => item.banda === banda
        );
        return disco;
    }
}

var personaUno = new Persona("Rodrigo");
personaUno.setLibro = { titulo: "El señor de los anillos", autor: "JRR Tolkien" };
personaUno.setLibro = { titulo: "El Hobbit", autor: "JRR Tolkien" };

console.log(personaUno.buscarLibroPorAutor("JRR Tolkien"))

personaUno.setDisco = { titulo: "Rust in Peace", banda: "Megadeth" };
personaUno.setDisco = { titulo: "Saint Anger", banda: "Metalica" };

console.log(personaUno.buscarDiscoPorAutor("Metalica"))
