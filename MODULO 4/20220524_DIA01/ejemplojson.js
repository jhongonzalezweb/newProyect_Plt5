
let url = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"

const buscarEnApi = async () => {

    const respuesta = await fetch(url);

    const commits = await respuesta.json();

    console.log(commits[0].author.login);
    alert(commits[0].author.login)
}

buscarEnApi();