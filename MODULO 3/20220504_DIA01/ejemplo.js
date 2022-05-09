

class GatoAnimado {

    constructor( nombre, autor, annio, formato) {

        this.nombre = nombre;
        this.autor = autor;
        this.annio = annio;
        this.formato = formato;

    }

    mostrarBiografia() {
        console.log("blah blah blah blah ");
    }

    mostrarEpisodiosMejorRankeado() {
        console.log("Ep1, Ep2, Ep3");
    }

    biografiaGatoAnimado() {
        console.log(this.nombre + " probando como hacer esto " + this.formato);
    }
    mostrarAtributoValores = function() {
        console.log(this.autor);
    }

}


var doraemon = new GatoAnimado("Doraemon", "Fujiko", 1969, "Manga y Anime");

doraemon.idioma = "Japones"
/*

doraemon.idioma2 = "Chucheki"

delete doraemon.idioma2

*/

console.log(doraemon);

doraemon.mostrarBiografia();

doraemon.mostrarEpisodiosMejorRankeado()

doraemon.biografiaGatoAnimado()

doraemon.mostrarAtributoValores()