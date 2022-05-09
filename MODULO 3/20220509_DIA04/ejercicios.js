
/*
let boton = $('#boton');
boton.click( function()
{
    alert("2");
})
///////////////////////////////////
$(document).ready( function() {
    let titulo1 = $('#titulo1');
    let titulo2 = $('#titulo2');
    let texto1 = $('#titulo1');
    let boton = $('#boton');
    console.log(titulo1)
    console.log(titulo2)
    console.log(texto1)
    console.log(boton)
})

///////////////////////////////////

$(document).ready( function() {
    let titulos = $('.titulos');
    console.log(titulos);
})

///////////////////////////////////

$(document).ready( function() {
    $('ul.todos > li > ul > li:first-child').css('color', 'red')
    $('ul.todos > li > ul > li:last-child').css('color', 'red')
});

///////////////////////////////////

$(document).ready( function() {
    $('ul.todos > li > ul > li:eq(0) ').css('color', 'red')
    $('ul.todos > li > ul > li:eq(2) ').css('color', 'red')
    $('ul.todos > li > ul > li:eq(3) ').css('color', 'red')
    $(document).ready( function() {
        $('ul > li:nth-child(2)').css('color', 'red')
    });
});

$(document).ready( function() {
    
    let miCaja = $('.micaja');
    
    miCaja.on('mouseenter', function(){
        $(this).css('background', 'red');
    });
    
    miCaja.on('mouseleave', function(){
        $(this).css('background', 'white');
    });
});

$(document).ready( function() {
    
    let miCajita = $('.micajita');
    
    miCajita.on('mouseenter', function(){
        $(this).css('background', 'green');
    });
    
    miCajita.on('mouseleave', function(){
        $(this).css('background', 'blue');
    });
});

///////////////////////////////////

$(document).ready( function() {
    $('ul > li:even ').css('color', 'red')
    $('ul > li:odd ').css('color', 'green')
    
})

*/

/**//////////////////////////////////// */

/**

$.getJSON("https://api.chucknorris.io/jokes/random", function(data) {
    
    let xL = data.value
    
    $('p').text(xL);
    
});

*/
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
    console.log(data.main.temp);
    let xL = data.main.temp
    $('p').text(xL);
});


















