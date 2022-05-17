function recibirInvitado(callback) {

    var invitado = "Juan";
    callback(invitado)

}

function saludar(nombre) {
    console.log("Hola " + nombre);
}

function darUnTrago(nombre) {
    console.log("Le estamos dando un trago a " + nombre);
}

recibirInvitado(darUnTrago)