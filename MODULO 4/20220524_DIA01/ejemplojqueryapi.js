
const urlAPI = "https://jsonplaceholder.typicode.com/users";

jQuery.fn.datosGenerales = function () {

    var elemento = this;

    $.ajax({
        type: "GET",
        url: urlAPI,
        dataType: "json",
        success: function (datita) { //data puede llamarse como sea
            datita.forEach(datos => { //datos representa el objeto
                elemento.append(`<h3> ID: ${datos.id} - Nombre: ${datos.name} - Username: ${datos.username} </h3>`);
            });
        }
    });
};


