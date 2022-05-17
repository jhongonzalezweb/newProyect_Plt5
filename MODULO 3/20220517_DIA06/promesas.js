
const posts = [
    {
        userId: 1,
        id: 1,
        title: "Esto es un titulo para el id 1",
        body: "esto es el body del post para el id 1"
    },
    {
        userId: 1,
        id: 2,
        title: "Esto es un titulo para el id 2",
        body: "esto es el body del post para el id 2"
    },
    {
        userId: 1,
        id: 3,
        title: "Esto es un titulo para el id 3",
        body: "esto es el body del post para el id 3"
    },
];


const findPostById = (id) => {

    const post = posts.find((item) => item.id === id);

    return new Promise((resolve, reject) => {
        //resolve
        if (post) {
            resolve(post);
        } else {
            reject("No se pudo encontrar el id " + id);
        }
    });
};

findPostById(1)
    .then((post) => console.log(post))
    .catch((error) => console.log(error))
    .finally(() => console.log("Fin de la promesa"));