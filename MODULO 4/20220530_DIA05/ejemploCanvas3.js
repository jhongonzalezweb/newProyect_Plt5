$(document).ready( function() {
 
    var datosCovid = [];
    var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Casos Positivos COVID durante toda la pandemia"
        },
        axisX: {
            title: "Fecha",
            valueFormatString: "YYYY MM DD"
        },
        axisY: {
            title: "Casos Positivos",
            titleFontSize: 24,
        },
        data: [{
            type: "spline", //change it to line, area, bar, pie, etc
            legendText: "Try Resizing with the handle to the bottom right",
            showInLegend: true,
            dataPoints: datosCovid
        }]
    };
    $.ajax({
        type: "GET",
        //url: "https://api.covidtracking.com/v1/us/daily.json",
        url: "http://localhost:3000/covid",
        dataType: "json",
        success: function(datos) {
            console.log(datos);
            let datosAPI = datos;
            console.log(datosAPI);
            for (var iterador=0;iterador<datosAPI.length;iterador++){
 
                datosCovid.push({
                    x: new Date(datosAPI[iterador].dateChecked),
                    y: datosAPI[iterador].onVentilatorCurrently,
                });
             
            }
            console.log(datosCovid);
            $("#contenedor").CanvasJSChart(options);
        }
    });
 
});