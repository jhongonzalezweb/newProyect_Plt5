const posts = [
    {
        userId: 1,
        id: 1,
        title: "Esto es un título para el id 1",
        body: "Esto es el body del post para el id 1",
    },
    {
        userId: 1,
        id: 2,
        title: "Esto es un título para el id 2",
        body: "Esto es el body del post para el id 2",
    },
    {
        userId: 1,
        id: 3,
        title: "Esto es un título para el id 3",
        body: "Esto es el body del post para el id 3"
    },
];


// Conceptos de async y await

const findPostById = (id) => 
new Promise ((resolve, reject) => {
    setTimeout(() => {
        const post = posts.find((item) => item.id === id);
        post ? resolve(post) : reject("No encontre naada " + id);

    }, 1000);
});

const buscar = async () => {
    try {
        const post = await findPostById(5)
        console.log(post);
        console.log("Fin del programa");
    } catch(error) {
        console.log(error);
    }
};

buscar();