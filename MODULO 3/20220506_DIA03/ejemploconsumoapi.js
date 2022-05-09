
$(document).ready( function() {

    $.ajax( {
        type: "GET",
        url: "https://mindicador.cl/api",
        dataType: "json",
        success: function(data) {
            $('#valorUF').text(data.uf.valor);
        }
    });
});

$(document).ready( function() {

    $.ajax( {
        type: "GET",
        url: "https://mindicador.cl/api",
        dataType: "json",
        success: function(data) {
            $('#dolar').text(data.dolar.valor);
        }
    });
});


$(document).ready( function() {

    $.ajax( {
        type: "GET",
        url: "https://mindicador.cl/api/dolar/20-04-2022",
        dataType: "json",
        success: function(data) {
            $('#dolar204').text(data.serie[0].valor);

        }
    });
});


$(document).ready( function() {

    $.ajax( {
        type: "GET",
        url: "https://mindicador.cl/api/dolar/10-02-2022",
        dataType: "json",
        success: function(data) {
            $('#dolar102').text(data.serie[0].valor);
        }
    });
});
