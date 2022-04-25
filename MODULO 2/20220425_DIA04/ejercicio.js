/*function saludarATodos(nombre) {

    var saludo = "Hola" + " " + nombre;

    console.log(saludo);
}

var iterador = 1;
while (iterador <= 3) {
    
    if (iterador==1) {
        console.log("Buenos días>");
    } else if (iterador==2){
        console.log("Buenas tardes");
    } else {
        console.log("Buenos cafecitos");
    }
    
    saludarATodos("Daniel");
    saludarATodos("María Ignacia");
    saludarATodos("Juan Pablo");
    saludarATodos("Consuelo");
    console.log("--------");
    //iterador = iterador + 1;
    // iterador +=1; 
    iterador++;
}
*/

/*
function cuadradoDeUnNumero(numA, numB) {
     let aqui = Math.pow(numA, numB)

     return aqui
}

var mostrar = cuadradoDeUnNumero(9,9);

console.log(mostrar);

*/
/*
function cuentaBancaria(nombre, edad) {

    var aplica = false
    if(edad < 18) {

        console.log("No dispone para la cuenta");
        var aplica = false

    } else {

        console.log("Dispone para la cuenta");
        var aplica = true

    }

    return aplica;
}

var mostrar = cuentaBancaria("Juan", 9);

console.log(mostrar);
*/

function triplicarNumero(numero) {
    console.log("------------------");
    console.log("Triplicamos numero");
    return numero * 3
}

var teMuestro = triplicarNumero(9);
console.log(teMuestro);

function productoNumero(numeroA, numeroB) {
    console.log("------------------");
    console.log("Producto numero");
    return numeroA * numeroB
}

var teLoMuestro = productoNumero(9, 9);
console.log(teLoMuestro);

function dividirNumero(numeroA, numeroB) {
    console.log("------------------");
    console.log("Divir numero");
    return numeroA / numeroB
}

var teLoMuestro = dividirNumero(9, 9);
console.log(teLoMuestro);

