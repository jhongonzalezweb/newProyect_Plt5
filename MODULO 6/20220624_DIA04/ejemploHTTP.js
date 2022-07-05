
const http = require('http');

const servidorWeb = http.createServer( (request, response) => {
    response.writeHead(200);
    response.end("Hola Mundo Plataforma 5");
    //console.log(response);
});

const PORT = 9090;
servidorWeb.listen(PORT);

console.log(`Estoy oyendo por el Puerto ${PORT}`);

