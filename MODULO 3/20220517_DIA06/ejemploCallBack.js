
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

const findPostById = (id, callback) => {

    const post = posts.find( (item) => item.id === id );

    callback(post);

}

findPostById(1, (post) => {
    console.log(post);
});

findPostById(3, (neWpost) => {
    console.log(neWpost.id + 5);
});


