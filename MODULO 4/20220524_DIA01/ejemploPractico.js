
let url = "https://api.github.com/users/jhongonzalezweb"

const buscarEnApi = async () => {

    const respuesta = await fetch(url);

    const commits = await respuesta.json();

    console.log("ID: " + commits.id);
    console.log("Nombre: " + commits.name);
    console.log("Login: " + commits.login);
    console.log("Cant Repos: " + commits.public_repos);
    console.log("Ultima actualizacion: " + commits.updated_at);

}

buscarEnApi();