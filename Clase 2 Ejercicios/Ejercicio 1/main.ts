/// <reference path="./punto.ts" />
/// <reference path="./rectangulo.ts" />

let punto1 = new Entidades.Punto(5, 5);
let punto2 = new Entidades.Punto(10, 10);
let rectangulo = new Entidades.Rectangulo(punto1, punto2);

(<HTMLElement> document.getElementById("rectangulo")).innerText = rectangulo.toString();

console.log(rectangulo.toString());
