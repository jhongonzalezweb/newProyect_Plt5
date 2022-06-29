
const child_process = require("child_process");

let cadena = null;

// Function ejecutar

function ejecutar(archivo) {
    return new Promise((resolve) => {
        child_process.exec(`node ${archivo}`, function (err, result) {
            console.log(result); resolve(Number(result)
            );
        });
    });
};

ejecutar("py.py").then((numero1) => {
    cadena = numero1
    console.log("Se ejecuto el Python?")    
    console.log("Ejecutando la cadena desde el argumento ==== > " + typeof(cadena))    
});

//console.log("know01 skoooool know5g skoool5g ");
