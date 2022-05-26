
(() => {

    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr")
    $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", e => {

        if (xhr.readyState !== 4) return;
        console.log(xhr);

        if (xhr.status >= 200 && xhr.status < 300) {

            console.log("Exito");
            //console.log(xhr.responseText);

            let json = JSON.parse(xhr.responseText)

            console.log(json);

            json.forEach(e => {
                
                const $li = document.createElement("li");
                $li.innerHTML = `${"=> ID: " + e.id} --- ${e.name} --- ${e.email} --- ${"The username is: " + e.username} --- ${"The address is: " + e.address.street} --- ${"The LAT is: " + e.address.geo.lat} --- ${"The LNG is: " + e.address.geo.lng} <br> <br>`
                $fragment.appendChild($li)

            });


            $xhr.appendChild($fragment)

        } else {
            console.log("Error");
            let message = xhr.statusText || "Ocurrio un error tipo"
            $xhr.innerHTML = ` ${message}: ${xhr.status}`
        }

    });

    //xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.open("GET", "usuarios.json");
    xhr.send();

})();
