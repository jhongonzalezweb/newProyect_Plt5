/*

// console.log(document)

var titulo = document.querySelector('h1');

titulo.style.color = 'red';

var parrafo = document.querySelector(".nnn")

parrafo.style.color = 'red';

var parrafopequenio = document.querySelector("#ooo")

parrafopequenio.style.color = 'blue';

var parfBootJs = document.querySelector("#ppp")

parfBootJs.style.color = 'green';

parfBootJs.textContent = " Aqui ha cambiado el texto "

var parfGetElByID = document.getElementById("qqq")

parfGetElByID.style.color = 'orange';

var titulonuevo = document.getElementById("thisH1");

titulonuevo.innerHTML = "Pagina del <b>Glorioso</b> equipo Chillan Plataforma 5"

var titulonuevo = document.getElementById("algo");

titulonuevo.innerHTML = " <u> Texto para subrayar </u> "

var tituloDos = document.querySelector('h2');

tituloDos.classList.remove("rrr");

tituloDos.classList.add("importante");

var tituloTres = document.querySelector("h3");

tituloTres.classList.remove("estaEsUnaClaseCualquiera");

tituloTres.classList.add("nuevaClaseCualquiera")

console.log(tituloTres);

// Acceso a link

var linkGoogle = document.querySelector("#btnGoogle");

var atributeLink = linkGoogle.getAttribute("href")

linkGoogle.setAttribute("href","http://plataforma5.iicap.cl")

//console.log(atributeLink)


var linkNuevo = document.querySelector("#btnBoton");

var atributeLinkNuevo = linkNuevo.getAttribute("href")

linkNuevo.setAttribute("href","https://www.radios-venezuela.com/la-mega-estacion")

console.log(atributeLinkNuevo)


////////////


var arregloLinks = document.querySelectorAll("a");

console.log(arregloLinks);

var el_h4;
for (var iterador = 0; iterador<arregloLinks.length; iterador++) {
    
    el_h4 = arregloLinks[iterador].setAttribute("href", "http://plataforma5.iicap.cl");
    
}


*/

var arrH4 = document.querySelectorAll("h4");

for (var iterador = 0; iterador<arrH4.length; iterador++) {
    
    el_h4 = arrH4[iterador].innerHTML = "Cambiado";
    console.log(el_h4);
    
}



































