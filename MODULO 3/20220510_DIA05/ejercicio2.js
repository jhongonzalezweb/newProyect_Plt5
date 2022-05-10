
const mascota = {
    nombre: "Mike",
    sonido() {
        console.log(`Yo ladro porque soy un perro que se llama ${this.nombre}`);
    },
    yoLastimo(accion) {
        console.log(`Yo ${this.nombre}, ${accion} porque soy malo. `);
    }
};

const mascotaDos = {
    nombre: "Bola de Pelos"
};

const mascotaTres = {
    nombre: "Monkey"
};

mascota.sonido();
mascota.yoLastimo("Muerdo");

mascota.sonido.call(mascotaDos);
mascota.sonido.call(mascotaTres);

mascota.yoLastimo.call(mascotaDos, "Muerdo");
mascota.yoLastimo.apply(mascotaDos, ['Muerdo']);
