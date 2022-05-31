
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const createBtn = document.getElementById("create-btn");
const updateBtn = document.getElementById("update-btn");
const deleteBtn = document.getElementById("delete-btn");
const loginBtn = document.getElementById("login-btn");

// *************************************
// *************************************

const sendHttpRequest = (method, url, data) => {

    const promise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";

        if (data) {
            xhr.setRequestHeader('Content-type', 'application/json');
            console.log(xhr);
        }

        xhr.onload = () => {

            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }

        };

        xhr.onerror = () => {

            reject("Hicimos la moricion");

        };

        xhr.send(JSON.stringify(data));

    });

    return promise;

};

// *************************************
// *************************************

const getData = (method, url, data) => {

    // llamar un api, con un metodo, una url, y eventualmente datos.
    sendHttpRequest("GET", "https://reqres.in/api/users")
        .then( (responseData) => {
            console.log(responseData);
        })

}

// *************************************
// *************************************

const sendData = () => { // El proposito de esta funcion es registrarse.

    // llamar un api, con un metodo, una url, y eventualmente datos.
    sendHttpRequest("POST", "https://reqres.in/api/register", { "email": "eve.holt@reqres.in", "password": "pistol" })

}

// *************************************
// *************************************

const createData = () => { // El proposito de esta funcion es crear un usuario.

    sendHttpRequest("POST", "https://reqres.in/api/users", { "name": "morpheus", "job": "leader" })

}

// *************************************
// *************************************

const updateData = () => { // El proposito de esta funcion es modificar un usuario.

    sendHttpRequest("PUT", "https://reqres.in/api/users/2", { "name": "morpheus", "job": "zion resident"})

}

// *************************************
// *************************************

const deleteData = () => { // El proposito de esta funcion es eliminar un usuario.

    sendHttpRequest("DELETE", "https://reqres.in/api/users/2")

}

// *************************************
// *************************************

const loginData = () => { // El proposito de esta funcion es logear un usuario.

    sendHttpRequest("POST", "https://reqres.in/api/login", { "email": "eve.holt@reqres.in", "password": "cityslicka"})

}

// *************************************
// *************************************

// *** Este boton me permitira recibir informacion ***
getBtn.addEventListener('click', getData);

// *** Este boton me permitira recibir registrarme, enviando datos para ello. ***
postBtn.addEventListener('click', sendData);

// *** Este boton me permitira crear un usuario
createBtn.addEventListener('click', createData);

// *** Este boton me permitira modificar un usuario
updateBtn.addEventListener('click', updateData);

// *** Este boton me permitira modificar un usuario
deleteBtn.addEventListener('click', deleteData);

// *** Este boton me permitira modificar un usuario
loginBtn.addEventListener('click', loginData);

