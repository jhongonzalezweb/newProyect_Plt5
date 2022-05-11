function crearCalculadora() {
    let resultado = 0
    let calculadora = {
        valor: function() {
            return resultado
        },
        sumar: function (numero) {
            resultado+=numero
        },
        restar: function (numero) {
            resultado-=numero
        },
        reset: function (numero) {
            resultado = 0
        }
    };
    return calculadora;
}