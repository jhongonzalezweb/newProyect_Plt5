/**
url_api = "https://jsonplaceholder.typicode.com/posts/1"

fetch(url_api).then( (res) => res.json());
fetch(url_api).then( (data) => console.log(data));
 */


const findPostbyId = async (id) => {
    try {

        const respuesta = fetch("https://jsonplaceholder.typicode.com/posts/" + id);
        const post = respuesta.json();
        console.log(post);

    } catch(error) {
        console.log("Aqui esta el error ==========>\n " + error);
    }
}

findPostbyId(1)