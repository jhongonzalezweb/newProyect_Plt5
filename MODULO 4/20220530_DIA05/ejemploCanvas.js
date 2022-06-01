window.onload = function () {
    var options = {
            title: {
            text: "Gráfico de columnas con jQuery CanvasJS",
        }, 
            axisX: {
            title: "Frutas Tropicales",
            titleFontSize: 12
        },
            axisY: {
            title: "Consumo Kg/persona/año", titleFontSize: 12
        }, data: [
            {
                type: "pie", dataPoints: [
                    { label: "Papaya", y: 23 }, 
                    { label: "Naranja", y: 15 }, 
                    { label: "Platano", y: 25 }, 
                    { label: "Mango", y: 30 }, 
                    { label: "Guayaba", y: 20 },
                    { label: "Mamon", y: 5 },
                    { label: "Piña", y: 25 },
                    { label: "Maracuya", y: 55 },
                ],
            },
        ],
    };
    $("#contenedor").CanvasJSChart(options);
};