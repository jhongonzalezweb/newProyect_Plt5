
function crearSumador(x) {

    return function(y) {
        return x + y
    }

};

var sumar5 = crearSumador(5); // es un clousere
var sumar10 = crearSumador(10); // es un clousere
var sumar15 = crearSumador(15); // es un clousere

console.log(sumar5(2));
console.log(sumar10(2));
console.log(sumar15(7));