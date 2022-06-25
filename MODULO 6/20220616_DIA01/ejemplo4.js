
const fs = require('fs');

let poema = "El amor es una experiencia universal que nos conmueve a todos, pero a veces no hallamos las palabras adecuadas para expresarlo. A lo largo de la historia los poetas han sabido decir aquello que todos sentimos de formas creativas y elocuentes."

fs.writeFile('poemaPDR.txt', poema, (err) => {
    if (err) throw err;

    console.log("Seguardo correctamente.")
});