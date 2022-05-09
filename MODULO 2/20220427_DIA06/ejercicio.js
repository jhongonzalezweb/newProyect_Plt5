 
/*
 
CLASE --> TEMPLATE, MOLDE, MATRIZ.
 
OBJETO --> OBJETO "REAL", OCUPA TIEMPO CPU, MEMORIA RAM
 
CLASE --> MOLDE PARA HACER PELOTAS PLÁSTICAS
 
OBJETOS --> PELOTAS PLÁSTICAS ...N
 
OBJETO --> Pelota plástica
    PROPIEDADES/ATRIBUTOS
        PESO
        RADIO
        COLOR
    FUNCIONES/MÉTODOS --> COSAS QUE PUEDE HACER EL OBJETO
        REBOTAR
 
*/
 
// NUESTRO PRIMER OBJETO
 
/*
var miObjeto = {
    propiedad1: valor1,
    propiedad2: valor2,
};
*/
 
var objetoAuto = {
    marca: "Audi",
    modelo: "GT2",
    annio: 2018,
    arrancar: function (acerlerarP) {
        var acelerarF = acerlerarP;
        console.log("El auto arrancó a " + acelerarF + " KMH!!!");
    },
    acelerar: function () {
        console.log("Brummmmmmmm!!!!! ¡");
    },
    frenar: function () {
        console.log("Estoy frenandoooooo!");
    },
    turbo: function(elegirTurboP) {
        var elegirTurboF = elegirTurboP;
        if (elegirTurboF) {
            console.log("Inyectando Nitro!!!");
        } else {
            console.log("Inyecto parafina!!!!");
        }
    }
};
//console.log(objetoAuto);
/*
objetoAuto.arrancar(300);
objetoAuto["arrancar"](300);
 
objetoAuto.acelerar();
objetoAuto["acelerar"]();
 
objetoAuto.frenar();
objetoAuto["frenar"]();
 
//objetoAuto.turbo(false);
objetoAuto["turbo"](false);
*/
//console.log("Notación punto --> " + objetoAuto.marca)
//console.log("Notación Bracket --> " + objetoAuto["marca"]);
 
/*
objetoAuto.modelo = "GT3";
objetoAuto.marca = "Yagan";
objetoAuto.annio = 1968;
 
objetoAuto.turbo = function (tipoTurboP) {
    console.log("Turbooooo!!! " + tipoTurboP);
};
 
objetoAuto.turbo("Máximo!!!");
*/
 
/*
objetoAuto.color = "Roja";
 
console.log(objetoAuto);
 
*/
 
// ARREGLOS DE OBJETOS
var autos = [
 
    { marca: "Audi", color: "Azul" },
    { marca: "Fiat", color: "Rojo" },
    { marca: "Yagan", color: "Rojo" },
 
];
 
/*
for (var iterador = 0; iterador<autos.length; iterador++) {
    console.log(autos[iterador]["color"]);
}
*/
 
/*
var iterador = 0;
while (iterador<autos.length) {
    console.log(autos[iterador]["marca"]);
    iterador++;
}
*/
 
/*
for (var iterador =0; iterador<autos.length; iterador++) {
 
    if (autos[iterador]["color"] == "Yagan") {
        console.log("Yupi, encontré un auto de color rojo, marca " + autos[iterador]["marca"]);
    }
 
}
 
*/
 
var auto = {
 
    marca: "Audi",
    color: "Azul",
    annio: 2017,
    velocidadMax: "300kh",
    duennioAnterior: "Rodrigo",
 
};
 
for (var autito in auto) {
    console.log(auto[autito]);
}