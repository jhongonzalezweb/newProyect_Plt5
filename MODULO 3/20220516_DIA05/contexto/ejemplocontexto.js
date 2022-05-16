var Contador = ( 
    function() {

        var llevoLaCuenta = 0;

        function sumarValor(valor) {
            llevoLaCuenta += valor;
        }
        return {
            incrementar: function() { // Funciones que comparten el mismo ENTORNO
                sumarValor(1);
            },
            decrementar: function() {
                sumarValor(-1);
            },
            devuelveElValor: function() {
                return llevoLaCuenta;
            }
        }
    }
)();

console.log(Contador.devuelveElValor());
Contador.incrementar();
Contador.incrementar();
console.log(Contador.devuelveElValor());
Contador.decrementar();
console.log(Contador.devuelveElValor());
console.log(Contador.sumarValor(5));
console.log(Contador.devuelveElValor());
