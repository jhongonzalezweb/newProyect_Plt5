
const argumentos = process.argv.slice(2);

let num1 = Number(argumentos[0])
let num2 = Number(argumentos[1])
let num3 = Number(argumentos[2])

let res1 = num1 * num2;
let res2 = num1 / num2;
let res3 = (num1 * num2) / num3;

console.log("Multi " + res1);
console.log("Divi " + res2);
console.log("Multi y Divi " + res3);

