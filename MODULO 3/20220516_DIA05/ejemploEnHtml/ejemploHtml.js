function mostrarAyuda(help) {
    document.getElementById("help").innerHTML = help;
}

function callBackmostrarAyuda(help) {
    return function () {
        mostrarAyuda(help);
    }
}

function setearAyuda() {
    var arregloDeAyuda = [
        { 'id': 'email', 'help': 'La direccion de correo es obligatoria' },
        { 'id': 'nombre', 'help': 'Debe completar el nombre' },
        { 'id': 'edad', 'help': 'La edad debe ser mayor a 18 años' }
    ];

    for (var i = 0; i < arregloDeAyuda.length; i++) {

        var item = arregloDeAyuda[i];
        document.getElementById(item.id).onfocus = callBackmostrarAyuda(item.help);
    }
};

setearAyuda();