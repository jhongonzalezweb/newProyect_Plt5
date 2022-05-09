var source = document.querySelector("#source").innerHTML;

var destination = document.querySelector("#destination").innerHTML;

document.querySelector("#source").innerHTML = destination;
document.querySelector("#destination").innerHTML = source;