
const child_process = require("child_process");

let mostrar = null;

function ejecutar(archivo) {
    return new Promise((resolve) => {
        child_process.exec(`${archivo}` , function (err, result) {
            mostrar = result;
            console.log(mostrar)
        });
    });
};

let comando = "dir"

ejecutar(comando).then((pos) => {
    mostrar = pos;
});