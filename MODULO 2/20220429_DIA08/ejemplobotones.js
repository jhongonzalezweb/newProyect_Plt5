
function yapoDale() {
    console.log(1);
}

var lista = document.querySelectorAll(".lenguajes > li");

for ( let iterador = 0; iterador < lista.length;  iterador++ ) {
    lista[iterador].addEventListener("click", function() {
        this.style.color = "red",
        this.style.fontSize  = "110%"
    });
};


// *******************


var tituloh1 = document.querySelector("#destacado");
tituloh1.addEventListener("mouseover", function(){

    this.classList.add("cambiarcolorfondo");

})

tituloh1.addEventListener("mouseleave", function(){

    this.classList.remove("cambiarcolorfondo");

})

tituloh1.addEventListener("click", function(){

    this.classList.add("segunda");

})

tituloh1.addEventListener("mouseleave", function(){

    this.classList.remove("segunda");

})

document.body.addEventListener("click", function(evento){
    console.log(evento);
})

var listaOrd = document.querySelectorAll("listaOrdenada");

for ( var it = 0; it < listaOrd.length; i++ ) {
    console.log(it)
}


// var listaOrdenada = document.querySelectorAll(".listaOrdenada > li");

// for ( let iterador = 0; iterador < lista.length;  iterador++ ) {
//     lista[iterador].addEventListener("click", function() {
        
//         aqui va lo que falta

//     });
// };
























